import { useEffect, useMemo, useRef, useState } from "react";
import {
  BedDouble,
  Calendar,
  Car,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  CloudSun,
  Euro,
  MapPin,
  Route,
  Sparkles,
  Sun,
  Utensils,
  Wallet,
} from "lucide-react";
import { tripData } from "./data/malaysiaData";
import type { TripPlanPart } from "./data/malaysiaData";

type Section = "itinerary" | "budget" | "hotels" | "checklist";
type Day = (typeof tripData.days)[number];
type Accommodation = (typeof tripData.accommodations)[number];
type WeatherData = {
  label: string;
  temp: number;
  humidity: number;
  rain: number;
  wind: number;
  code: number;
  time: string;
};

type DisplayPart = TripPlanPart & {
  displayPeriod: string;
  displayTime: string;
  sortOrder: number;
};

const sectionItems: { id: Section; label: string; icon: typeof Route }[] = [
  { id: "itinerary", label: "Journees", icon: Calendar },
  { id: "budget", label: "Budget", icon: Wallet },
  { id: "hotels", label: "Hotels", icon: BedDouble },
  { id: "checklist", label: "Checklist", icon: ClipboardCheck },
];

const cityFilters = [
  { id: "all", label: "Tout le voyage" },
  { id: "kuala", label: "Kuala Lumpur" },
  { id: "langkawi", label: "Langkawi" },
  { id: "ipoh", label: "Ipoh" },
  { id: "transit", label: "Transits" },
];

const weatherLocations = [
  { key: "kuala", label: "Kuala Lumpur", lat: 3.139, lon: 101.6869 },
  { key: "langkawi", label: "Langkawi", lat: 6.35, lon: 99.8 },
  { key: "ipoh", label: "Ipoh", lat: 4.5975, lon: 101.0901 },
];

function eurFromMyr(myr: number) {
  return myr / tripData.meta.exchangeRateMyrPerEur;
}

function formatEurFromMyr(myr: number) {
  return `${Math.round(eurFromMyr(myr)).toLocaleString("fr-FR")} €`;
}

function formatMyr(myr: number) {
  return `${Math.round(myr).toLocaleString("fr-FR")} MYR`;
}

function formatBoth(myr: number) {
  return `${formatMyr(myr)} / ${formatEurFromMyr(myr)}`;
}

function formatBothForTwo(myr: number) {
  return `${formatBoth(myr)} pour 2`;
}

function dayTotal(day: Day) {
  return day.budget.reduce((sum, item) => sum + item.myr, 0);
}

function cityKey(city: string) {
  const value = city.toLowerCase();
  if (value.includes("langkawi")) return "langkawi";
  if (value.includes("ipoh")) return "ipoh";
  if (value.includes("kuala") || value.includes("kl")) return "kuala";
  return "transit";
}

function weatherKeyForDay(day: Day) {
  const value = `${day.city} ${day.highlight} ${day.overnight}`.toLowerCase();
  if (value.includes("langkawi")) return "Langkawi";
  if (value.includes("ipoh")) return "Ipoh";
  if (value.includes("kuala") || value.includes("klia") || value.includes("kl ")) return "Kuala Lumpur";
  return "Kuala Lumpur";
}

function mapUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function parseNumber(value: string) {
  return Number(value.replace(",", "."));
}

function formatCostText(text?: string) {
  if (!text) return "A ajuster sur place";

  let output = text;
  const alreadyForTwo = /pour\s*2/i.test(text);
  const adultMatch = text.match(/(?:RM|MYR)?\s*(\d+(?:[,.]\d+)?)\s*(?:MYR|RM)?\s*\/\s*(?:adulte|pers|personne)/i);
  const rangeAdultMatch = text.match(/(\d+(?:[,.]\d+)?)\s*(?:a|à|-)\s*(\d+(?:[,.]\d+)?)\s*MYR\s*\/\s*(?:adulte|pers|personne)/i);
  const rangeForTwoMatch = text.match(/(\d+(?:[,.]\d+)?)\s*(?:a|à|-)\s*(\d+(?:[,.]\d+)?)\s*MYR\s*pour\s*2/i);
  const forTwoMatch = text.match(/(\d+(?:[,.]\d+)?)\s*MYR\s*pour\s*2/i);
  const simpleMyrMatch = text.match(/(\d+(?:[,.]\d+)?)\s*MYR/i);

  if (rangeAdultMatch) {
    const min = parseNumber(rangeAdultMatch[1]) * 2;
    const max = parseNumber(rangeAdultMatch[2]) * 2;
    return `${text} - soit ${formatMyr(min)} a ${formatMyr(max)} / ${formatEurFromMyr(min)} a ${formatEurFromMyr(max)} pour 2`;
  }

  if (adultMatch && !alreadyForTwo) {
    return `${text} - soit ${formatBothForTwo(parseNumber(adultMatch[1]) * 2)}`;
  }

  if (rangeForTwoMatch) {
    const min = parseNumber(rangeForTwoMatch[1]);
    const max = parseNumber(rangeForTwoMatch[2]);
    return `${text} - environ ${formatEurFromMyr(min)} a ${formatEurFromMyr(max)}`;
  }

  if (forTwoMatch) {
    return `${text} - soit ${formatEurFromMyr(parseNumber(forTwoMatch[1]))}`;
  }

  if (simpleMyrMatch && !/libre|clos/i.test(text)) {
    const value = parseNumber(simpleMyrMatch[1]);
    output = alreadyForTwo ? `${text} - soit ${formatEurFromMyr(value)}` : `${text} - repere ${formatBothForTwo(value)}`;
  }

  return output;
}

function weatherLabel(code: number) {
  if ([0, 1].includes(code)) return "clair";
  if ([2, 3].includes(code)) return "nuageux";
  if ([45, 48].includes(code)) return "brume";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "pluie";
  if ([95, 96, 99].includes(code)) return "orage";
  return "meteo variable";
}

function useLiveWeather() {
  const [weather, setWeather] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await Promise.all(
        weatherLocations.map(async (loc) => {
          const params = new URLSearchParams({
            latitude: String(loc.lat),
            longitude: String(loc.lon),
            current: "temperature_2m,relative_humidity_2m,rain,weather_code,wind_speed_10m",
            timezone: "auto",
          });
          const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
          if (!response.ok) throw new Error(`Open-Meteo ${response.status}`);
          const json = await response.json();
          return {
            label: loc.label,
            temp: Number(json.current?.temperature_2m ?? 0),
            humidity: Number(json.current?.relative_humidity_2m ?? 0),
            rain: Number(json.current?.rain ?? 0),
            wind: Number(json.current?.wind_speed_10m ?? 0),
            code: Number(json.current?.weather_code ?? 0),
            time: String(json.current?.time ?? ""),
          };
        }),
      );
      setWeather(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Meteo indisponible");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return { weather, loading, error, refresh };
}

function cheapFoodIdeas(day: Day) {
  const fromPlan = (day.ultraPlan || [])
    .filter((part) => part.eat || part.foodAddress)
    .map((part) => `${part.period}: ${part.eat} (${part.foodAddress}) - ${formatCostText(part.foodCost)}`);

  const key = cityKey(day.city);
  const cityIdeas: Record<string, string[]> = {
    kuala: [
      "Lot 10 Hutong (Bukit Bintang): food court climatise, viser noodles, rice plates ou char kway teow; enveloppe midi 45 a 55 MYR pour 2.",
      "Nasi Lemak Wanjo (Kampung Baru): bon repere local pour nasi lemak, surtout sur une journee Chow Kit / Kampung Baru.",
      "Petaling Street / Pasar Seni: kopitiam, chicken rice ou noodles avant Central Market, plus economique qu'un cafe touristique.",
      "Jalan Alor Food Street: utile le soir si vous voulez du choix facile; viser satay, noodles, ailes de poulet et jus frais.",
      "Malaysia Food Village by Yong Kee (Four Seasons / KLCC): option food court pratique si vous terminez autour de KLCC.",
    ],
    langkawi: [
      "Tomato Nasi Kandar (Cenang): repere simple pour nasi kandar, roti et plats rapides sans exploser le budget.",
      "Nasi Campur Kak Yan: bon choix midi si vous passez en voiture/scooter, assiettes locales et budget facile sous 55 MYR pour 2.",
      "Amani Cafeteria / warungs de Cenang: nasi campur ou plat du jour local, meilleur rapport prix que les restos de plage.",
      "Langkawi Night Market: choisir le marche du soir selon le jour et la zone; souvent le meilleur plan pour diner pas cher.",
      "Wonderland Food Store (Kuah): option connue pour seafood simple, logique les jours Kuah / Eagle Square.",
      "Warungs de Pantai Cenang / Pantai Tengah: preferer les petites tables locales aux restaurants de front de mer trop touristiques.",
      "Pantai Cenang / Pantai Tengah: warungs et petites tables de plage avant les restaurants trop touristiques.",
      "Pasar malam si le marché de nuit tombe dans la bonne zone: idéal pour dîner très bon marché à deux.",
      "Kuah: souvent plus local et moins cher que le front de mer de Cenang.",
    ],
    ipoh: [
      "Sin Yoon Loong ou Nam Heong: white coffee, kaya toast et oeufs mollets, parfait le matin dans Old Town.",
      "Thean Chun + Kong Heng: kai si hor fun, chee cheong fun, caramel custard et popiah; tres logique les jours Old Town.",
      "Yee Fatt Tea Shop ou Kedai Kopi Keng Nam: noodles, rice plates ou dim sum simple, bon cadrage midi autour de 45 a 55 MYR pour 2.",
      "Lou Wong ou Onn Kee: bean sprout chicken si vous voulez un diner Ipoh classique sans chercher longtemps.",
      "Funny Mountain Soya Beancurd: pause dessert rapide et pas chere apres une balade dans le centre.",
      "Old Town: kopitiam, white coffee, toast kaya et nouilles, parfait pour petit budget.",
      "Chercher les adresses de chicken rice ou dim sum tôt, avant la grosse chaleur et les files.",
      "Éviter de multiplier les cafés design dans Concubine Lane si l'objectif est de rester économique.",
    ],
    transit: [
      "En transit, manger simple à KL Sentral, KLIA ou autour de la gare plutôt que de rajouter un détour.",
      "Prévoir eau et snack avant train/ferry/vol pour éviter les achats chers de dernière minute.",
    ],
  };

  return [...fromPlan.slice(0, 4), ...(cityIdeas[key] || cityIdeas.transit)].slice(0, 7);
}

const daySlots = {
  morning: { label: "Matin", time: "09h00 -> 12h30", order: 1 },
  lunch: { label: "Repas du midi", time: "12h30 -> 13h30", order: 2 },
  afternoon: { label: "Apres-midi", time: "13h30 -> 18h00", order: 3 },
  dinner: { label: "Soir / diner", time: "19h30 -> 21h30", order: 4 },
};

function slotForPart(part: TripPlanPart, index: number) {
  const text = `${part.period} ${part.time} ${part.visit}`.toLowerCase();
  if (/soir|diner|dîner|dernier repas|dinner/.test(text)) return daySlots.dinner;
  if (/midi|lunch|dejeuner|déjeuner|repas/.test(text)) return daySlots.lunch;
  if (/apres|après|plage|check-in|installation|cafe|pause|retour calme/.test(text)) return daySlots.afternoon;
  if (/matin|depart|départ|arrivee|arrivée|transfert|vol|ferry|train|ets/.test(text)) return daySlots.morning;
  return index === 0 ? daySlots.morning : index === 1 ? daySlots.afternoon : daySlots.dinner;
}

function displaySlotForPart(part: TripPlanPart, index: number) {
  const text = `${part.period} ${part.time} ${part.visit}`.toLowerCase();
  if (/diner|d..ner|dernier repas|dinner|sacs|billets|valises|cloture|preparation du lendemain|soir/.test(text)) {
    return daySlots.dinner;
  }
  if (/\bmidi\b|lunch|dejeuner|repas/.test(text)) return daySlots.lunch;
  if (/apres|plage|check-in|installation|cafe|pause/.test(text)) return daySlots.afternoon;
  if (/matin|depart|arrivee|transfert|vol|ferry|train|ets/.test(text)) return daySlots.morning;
  return index === 0 ? daySlots.morning : index === 1 ? daySlots.afternoon : daySlots.dinner;
}

function makeSupplementPart(day: Day, period: "Repas du midi" | "Apres-midi" | "Soir / diner"): TripPlanPart {
  const key = cityKey(day.city);
  const cityLabel = key === "langkawi" ? "Langkawi" : key === "ipoh" ? "Ipoh Old Town" : key === "kuala" ? "Kuala Lumpur" : day.city;
  const cityFood: Record<string, string> = {
    kuala: "Lot 10 Hutong, Nasi Lemak Wanjo, kopitiam de Petaling Street ou Malaysia Food Village selon le quartier.",
    langkawi: "Tomato Nasi Kandar, Nasi Campur Kak Yan, Amani Cafeteria ou warung proche de Cenang.",
    ipoh: "Sin Yoon Loong, Nam Heong, Thean Chun, Kong Heng, Yee Fatt Tea Shop ou Kedai Kopi Keng Nam selon l'heure.",
    transit: "KL Sentral, KLIA, gare, jetty ou food court le plus proche: rester simple et pres du trajet.",
  };
  const visitByPeriod = {
    "Repas du midi": "Repas pas cher et respiration",
    "Apres-midi": "Programme de l'apres-midi",
    "Soir / diner": "Soiree tranquille pres du logement",
  };
  const timeByPeriod = {
    "Repas du midi": daySlots.lunch.time,
    "Apres-midi": daySlots.afternoon.time,
    "Soir / diner": daySlots.dinner.time,
  };

  return {
    period,
    time: timeByPeriod[period],
    visit: visitByPeriod[period],
    address: cityLabel,
    metro: period === "Soir / diner" ? "A pied si possible autour du logement." : key === "kuala" ? "MRT/LRT si proche, sinon Grab court." : "Marche, Grab ou scooter selon la base.",
    taxi: period === "Soir / diner" ? "Grab seulement si le repas ou le petit marche est un peu loin." : "Grab si chaleur, pluie, fatigue ou retour tardif.",
    visitCost: "Libre",
    eat: cityFood[key] || cityFood.transit,
    foodAddress: cityLabel,
    foodCost: period === "Soir / diner" ? "90 MYR pour 2" : "55 MYR pour 2",
    drink: "Eau, cafe, jus frais ou boisson froide.",
    note: period === "Soir / diner" ? "Diner vers 19h30/20h, petit marche proche, piscine/logement et repos." : "Bloc ajoute pour garder une journee complete sans la surcharger.",
  };
}

function makeEveningRelaxed(part: TripPlanPart): TripPlanPart {
  return {
    ...part,
    visit: "Soiree tranquille pres du logement",
    address: part.foodAddress || part.address,
    metro: "A pied si possible autour du logement.",
    taxi: "Grab seulement si le repas ou le petit marche est un peu loin.",
    visitCost: "Libre",
    note: "Diner vers 19h30/20h, petit marche proche, piscine/logement et repos.",
  };
}

function buildDayParts(day: Day): DisplayPart[] {
  const parts: TripPlanPart[] = day.ultraPlan?.length
    ? [...day.ultraPlan]
    : day.segments.map((segment) => ({
        period: segment.label,
        time: "",
        visit: segment.title,
        address: day.city,
        metro: day.transportSummary,
        taxi: day.access.taxi,
        visitCost: "Inclus dans le budget du jour",
        eat: segment.bullets.join(" "),
        foodAddress: day.city,
        foodCost: "A ajuster sur place",
        note: day.highlight,
      }));

  const hasPeriod = (needle: string) => parts.some((part) => part.period.toLowerCase().includes(needle));
  const hasLunchSlot = parts.some((part) => /\bmidi\b|repas du midi|lunch|dejeuner|déjeuner/i.test(`${part.period} ${part.visit}`));
  if (!hasLunchSlot) {
    parts.push(makeSupplementPart(day, "Repas du midi"));
  }
  if (!hasPeriod("apres") && !hasPeriod("après")) parts.push(makeSupplementPart(day, "Apres-midi"));

  let lunchAlreadyUsed = false;

  const mapped = parts
    .map((part, index) => {
      const slot = displaySlotForPart(part, index);
      const finalSlot = slot.label === daySlots.lunch.label && lunchAlreadyUsed ? daySlots.afternoon : slot;
      if (finalSlot.label === daySlots.lunch.label) lunchAlreadyUsed = true;
      const finalPart = finalSlot.label === daySlots.dinner.label ? makeEveningRelaxed(part) : part;
      return {
        ...finalPart,
        displayPeriod: finalSlot.label,
        displayTime: part.time || finalSlot.time,
        sortOrder: finalSlot.order,
      };
    });

  const hasRealAfternoon = mapped.some(
    (part) => part.displayPeriod === daySlots.afternoon.label && part.visit !== "Programme de l'apres-midi",
  );
  const cleanedMapped = hasRealAfternoon
    ? mapped.filter((part) => !(part.displayPeriod === daySlots.afternoon.label && part.visit === "Programme de l'apres-midi"))
    : mapped;

  if (!cleanedMapped.some((part) => part.displayPeriod === daySlots.dinner.label)) {
    cleanedMapped.push({
      ...makeSupplementPart(day, "Soir / diner"),
      displayPeriod: daySlots.dinner.label,
      displayTime: daySlots.dinner.time,
      sortOrder: daySlots.dinner.order,
    });
  }

  return cleanedMapped.sort((a, b) => a.sortOrder - b.sortOrder || a.period.localeCompare(b.period));
}

function downloadJson() {
  const blob = new Blob([JSON.stringify(tripData, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "malaisie-2026-voyage.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function classifyBudget(label: string) {
  const text = label.toLowerCase();
  if (/vol|parking|péage|peage|aeroport|airport|train|grab|transport|ferry|taxi|klia|ets/.test(text)) {
    return "Transports";
  }
  if (/nuit|hotel|hôtel|robertson|colony|horizon|rebungan|logement|airbnb/.test(text)) {
    return "Hotels";
  }
  if (/repas|boisson|snack|cafe|déjeuner|diner|food|manger/.test(text)) {
    return "Repas";
  }
  if (/bird|skycab|geoforest|musee|temple|billet|entree|visite|mangrove|payar/.test(text)) {
    return "Visites";
  }
  return "Marges";
}

function useLocalChecklist(items: readonly string[]) {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem("malaisie-checklist") || "{}");
    } catch {
      return {};
    }
  });

  const toggle = (id: string) => {
    setChecked((current) => {
      const next = { ...current, [id]: !current[id] };
      localStorage.setItem("malaisie-checklist", JSON.stringify(next));
      return next;
    });
  };

  const count = items.filter((_, index) => checked[`item-${index}`]).length;
  return { checked, toggle, count };
}

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("itinerary");
  const [filter, setFilter] = useState("all");
  const [expandedDay, setExpandedDay] = useState<number>(1);
  const [sunMode, setSunMode] = useState(false);
  const checklist = useLocalChecklist(tripData.bookingChecklist);
  const liveWeather = useLiveWeather();

  const stats = useMemo(() => {
    const totalMyr = tripData.days.reduce((sum, day) => sum + dayTotal(day), 0);
    const officialLines = tripData.days.flatMap((day) => day.budget).filter((line) => line.kind === "official").length;
    const categories = tripData.days
      .flatMap((day) => day.budget)
      .reduce<Record<string, number>>((acc, item) => {
        const key = classifyBudget(item.label);
        acc[key] = (acc[key] || 0) + item.myr;
        return acc;
      }, {});

    return {
      totalMyr,
      totalEur: eurFromMyr(totalMyr),
      officialLines,
      categories,
      averagePerDay: totalMyr / tripData.days.length,
    };
  }, []);

  const filteredDays = useMemo(() => {
    if (filter === "all") return tripData.days;
    return tripData.days.filter((day) => cityKey(day.city) === filter);
  }, [filter]);

  const progress = Math.round((checklist.count / tripData.bookingChecklist.length) * 100);

  return (
    <main className={sunMode ? "sun-mode min-h-screen bg-white text-slate-950" : "min-h-screen text-slate-100"}>
      <header className="no-print sticky top-0 z-50 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
          <button
            type="button"
            onClick={() => setActiveSection("itinerary")}
            className="flex items-center gap-3 text-left"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-amber-300 text-sm font-black text-slate-950">
              MY
            </div>
            <div>
              <h1 className="font-display text-xl font-bold leading-tight">{tripData.meta.title}</h1>
              <p className="text-xs font-semibold text-slate-400">{tripData.meta.travelWindow}</p>
            </div>
          </button>

          <nav className="flex gap-2 overflow-x-auto pb-1 lg:justify-end">
            {sectionItems.map((item) => {
              const Icon = item.icon;
              const selected = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSection(item.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-xs font-extrabold transition ${
                    selected
                      ? "border-amber-300 bg-amber-300 text-slate-950"
                      : "border-white/10 bg-white/5 text-slate-200 hover:border-amber-300/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setSunMode((value) => !value)}
              className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-extrabold text-slate-200"
              title="Mode plein soleil"
            >
              <Sun className="h-4 w-4" />
              Soleil
            </button>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-3 px-4 py-3">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-900 p-4 shadow-2xl shadow-black/25">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[0.68rem] font-black uppercase tracking-widest text-emerald-200">
            <Sparkles className="h-3.5 w-3.5" />
            Carnet terrain
          </p>
          <h2 className="font-display text-2xl font-bold leading-tight text-white md:text-3xl">
            {tripData.meta.title} · {tripData.meta.travelWindow}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Parcours, journées détaillées, budget, hôtels et checklist sont regroupés dans une
            interface unique. Le déroulement de chaque journée reprend les données déjà préparées
            pour Kuala Lumpur, Langkawi, Ipoh et les transits.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className="rounded-xl bg-amber-300 px-3 py-2 text-xs font-black text-slate-950" onClick={() => setActiveSection("itinerary")}>
              Ouvrir les journées
            </button>
            <button className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-black text-white" onClick={() => setActiveSection("budget")}>
              Budget
            </button>
          </div>
        </div>

      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        {activeSection === "itinerary" && (
          <Itinerary
            filter={filter}
            setFilter={setFilter}
            days={filteredDays}
            expandedDay={expandedDay}
            setExpandedDay={setExpandedDay}
          />
        )}
        {activeSection === "budget" && <Budget stats={stats} />}
        {activeSection === "hotels" && <Hotels accommodations={tripData.accommodations} />}
        {activeSection === "checklist" && <Checklist checked={checklist.checked} toggle={checklist.toggle} count={checklist.count} progress={progress} />}
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row">
          <div>
            <strong className="font-display block text-base text-white">Malaisie 2026</strong>
            <span>{tripData.meta.subtitle}</span>
          </div>
          <div className="text-left md:text-right">
            <p>{tripData.meta.exchangeRateLabel} ({tripData.meta.exchangeRateDate})</p>
            <p>Cadre vérifié le {tripData.meta.verifiedOn}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function WeatherPanel({
  weather,
  loading,
  error,
  refresh,
}: {
  weather: WeatherData[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
}) {
  return (
    <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <CloudSun className="h-5 w-5 text-cyan-200" />
          <div>
            <p className="text-[0.68rem] font-black uppercase tracking-widest text-cyan-200">Météo actuelle en direct</p>
            <h3 className="font-display text-lg font-bold text-white">Malaisie maintenant</h3>
          </div>
        </div>
        <button
          type="button"
          onClick={refresh}
          className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs font-black text-white"
        >
          Actualiser
        </button>
      </div>
      {loading && <p className="text-sm text-slate-300">Chargement de la météo live...</p>}
      {error && <p className="text-sm text-rose-200">Météo indisponible: {error}</p>}
      {!loading && !error && (
        <div className="grid gap-2">
          {weather.map((item) => (
            <div key={item.label} className="grid grid-cols-[1fr_auto] gap-3 rounded-xl border border-white/10 bg-slate-950/45 p-3">
              <div>
                <strong className="block text-sm text-white">{item.label}</strong>
                <span className="text-xs text-slate-400">
                  {weatherLabel(item.code)} · humidité {Math.round(item.humidity)}% · pluie {item.rain} mm
                </span>
              </div>
              <div className="text-right">
                <strong className="font-display block text-xl text-cyan-100">{Math.round(item.temp)}°C</strong>
                <span className="text-xs text-slate-400">{Math.round(item.wind)} km/h</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
      <p className="text-[0.68rem] font-black uppercase tracking-widest text-amber-200">{label}</p>
      <strong className="font-display mt-1 block text-xl text-white">{value}</strong>
    </article>
  );
}

function PanelTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
      <div>
        <p className="mb-2 text-xs font-black uppercase tracking-widest text-amber-300">{eyebrow}</p>
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
      </div>
      {text && <p className="max-w-2xl text-sm leading-6 text-slate-400">{text}</p>}
    </div>
  );
}

function Itinerary({
  filter,
  setFilter,
  days,
  expandedDay,
  setExpandedDay,
}: {
  filter: string;
  setFilter: (value: string) => void;
  days: readonly Day[];
  expandedDay: number;
  setExpandedDay: (value: number) => void;
}) {
  return (
    <div className="space-y-5">
      <PanelTitle
        eyebrow="Jour par jour"
        title="Le déroulement des journées"
        text="Chaque journée s'ouvre comme dans un vrai carnet de route: photo, budget, transports, matin/midi/soir, liens Maps et conseils."
      />

      <div className="no-print flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.05] p-2">
        {cityFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`shrink-0 rounded-xl px-3 py-2 text-xs font-black ${
              filter === item.id ? "bg-amber-300 text-slate-950" : "bg-white/5 text-slate-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5">
        {days.map((day) => {
          const open = expandedDay === day.id;
          return (
            <DayCard
              key={day.id}
              day={day}
              open={open}
              onToggle={() => setExpandedDay(open ? 0 : day.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

function DayCard({
  day,
  open,
  onToggle,
}: {
  day: Day;
  open: boolean;
  onToggle: () => void;
}) {
  const parts = buildDayParts(day);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const wasOpen = open;
    onToggle();
    if (!wasOpen) {
      // Scroll vers le contenu déroulé après l'animation
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };

  return (
    <article ref={contentRef} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20">
      {day.photo && <img src={day.photo} alt={day.photoAlt || day.city} className="h-56 w-full object-cover" />}
      <button type="button" onClick={handleToggle} className="flex w-full flex-col gap-4 p-5 text-left md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-amber-300">{day.dayLabel} - {day.dateLabel}</p>
          <h3 className="font-display mt-2 text-2xl font-bold text-white md:text-3xl">{day.city}</h3>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">{day.highlight}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <div className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-right">
            <span className="block text-[0.68rem] font-black uppercase text-slate-400">Budget pour 2</span>
            <strong className="font-display text-lg text-white">{formatBoth(dayTotal(day))}</strong>
          </div>
          {open ? <ChevronUp className="h-5 w-5 text-amber-300" /> : <ChevronDown className="h-5 w-5 text-amber-300" />}
        </div>
      </button>

      {open && (
        <div className="space-y-5 border-t border-white/10 p-5">
          <div className="grid gap-3 md:grid-cols-3">
            <MiniFact icon={BedDouble} label="Nuit" value={day.overnight} />
            <MiniFact icon={Car} label="Transport" value={day.transportSummary} />
            <MiniFact icon={Euro} label="Total jour" value={formatBoth(dayTotal(day))} />
          </div>

          <section className="rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4">
            <h4 className="font-display mb-3 text-xl font-bold text-white">Déroulement de la journée</h4>
            <div className="grid gap-3 lg:grid-cols-2">
              {parts.map((part, index) => (
                <article key={`${part.displayPeriod}-${part.visit}-${index}`} className="rounded-xl border border-white/10 bg-slate-950/45 p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-amber-300 px-3 py-1 text-[0.68rem] font-black uppercase tracking-widest text-slate-950">
                      {part.displayPeriod}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{part.displayTime}</span>
                  </div>
                  <h5 className="text-lg font-black text-white">{part.visit}</h5>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300">
                    <li><strong className="text-slate-100">Adresse :</strong> {part.address}</li>
                    <li><strong className="text-slate-100">Accès :</strong> {part.metro}</li>
                    <li><strong className="text-slate-100">Option confort :</strong> {part.taxi}</li>
                    <li><strong className="text-slate-100">Manger :</strong> {part.eat}</li>
                    <li><strong className="text-slate-100">Budget visite :</strong> {formatCostText(part.visitCost)}</li>
                    <li><strong className="text-slate-100">Budget repas :</strong> {formatCostText(part.foodCost)}</li>
                    <li><strong className="text-slate-100">Note :</strong> {part.note}</li>
                  </ul>
                  <a
                    className="mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-black text-cyan-100"
                    href={mapUrl(part.address || part.visit)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin className="h-4 w-4" />
                    Ouvrir dans Maps
                  </a>
                </article>
              ))}
            </div>
          </section>

          <div className="grid gap-4 lg:grid-cols-3">
            <InfoBox title="Visites importantes" lines={day.visitCards.map((visit) => `${visit.name} - ${visit.whyGo}`)} />
            <InfoBox title="Astuces du jour" lines={day.tips} />
            <InfoBox title="Budget utile" lines={day.budget.filter((item) => item.myr > 0).map((item) => `${item.label}: ${formatBoth(item.myr)}`)} />
          </div>

          {day.toiletStops?.length ? (
            <article className="rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.08] p-4">
              <div className="mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cyan-200" />
                <h4 className="font-display text-xl font-bold text-white">Toilettes proches</h4>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {day.toiletStops.map((stop) => (
                  <a
                    key={`${day.slug}-${stop.label}`}
                    className="rounded-xl border border-white/10 bg-slate-950/45 p-4 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                    href={mapUrl(stop.query)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="flex items-center gap-2 text-sm font-black text-cyan-100">
                      <MapPin className="h-4 w-4" />
                      {stop.label}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-slate-300">{stop.note}</span>
                    <span className="mt-3 inline-flex text-xs font-black uppercase tracking-widest text-cyan-200">Ouvrir Maps</span>
                  </a>
                ))}
              </div>
            </article>
          ) : null}

          <article className="rounded-2xl border border-amber-300/25 bg-amber-300/[0.08] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Utensils className="h-5 w-5 text-amber-200" />
              <h4 className="font-display text-xl font-bold text-white">Astuces et endroits pour manger pas cher</h4>
            </div>
            <ul className="grid gap-2 pl-4 text-sm leading-6 text-slate-300 md:grid-cols-2">
              {cheapFoodIdeas(day).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        </div>
      )}
    </article>
  );
}

function MiniFact({ icon: Icon, label, value }: { icon: typeof BedDouble; label: string; value: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-white/10 bg-slate-950/45 p-4">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
      <div>
        <span className="text-[0.68rem] font-black uppercase tracking-widest text-slate-500">{label}</span>
        <strong className="block text-sm leading-6 text-slate-100">{value}</strong>
      </div>
    </div>
  );
}

function DayWeather({
  weather,
  loading,
  error,
}: {
  weather?: WeatherData;
  loading: boolean;
  error: string | null;
}) {
  return (
    <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] p-4">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div className="flex items-start gap-3">
          <CloudSun className="mt-1 h-6 w-6 shrink-0 text-cyan-200" />
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-cyan-200">Météo actuelle de l'étape</p>
            {loading && <h4 className="font-display mt-1 text-xl font-bold text-white">Chargement...</h4>}
            {error && <h4 className="font-display mt-1 text-xl font-bold text-rose-100">Météo indisponible</h4>}
            {!loading && !error && weather && (
              <>
                <h4 className="font-display mt-1 text-xl font-bold text-white">
                  {weather.label} · {weatherLabel(weather.code)}
                </h4>
                <p className="mt-1 text-sm text-slate-300">
                  Pluie {weather.rain} mm · humidité {Math.round(weather.humidity)}% · vent {Math.round(weather.wind)} km/h
                </p>
              </>
            )}
            {!loading && !error && !weather && (
              <h4 className="font-display mt-1 text-xl font-bold text-white">Donnée météo non trouvée</h4>
            )}
          </div>
        </div>
        {!loading && !error && weather && (
          <div className="rounded-xl border border-white/10 bg-slate-950/45 px-4 py-3 text-left md:text-right">
            <span className="block text-[0.68rem] font-black uppercase tracking-widest text-slate-400">
              Température live
            </span>
            <strong className="font-display text-3xl text-cyan-100">{Math.round(weather.temp)}°C</strong>
          </div>
        )}
      </div>
    </article>
  );
}

function InfoBox({ title, lines }: { title: string; lines: readonly string[] }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <h4 className="font-display mb-3 text-lg font-bold text-white">{title}</h4>
      <ul className="grid gap-2 pl-4 text-sm leading-6 text-slate-300">
        {lines.slice(0, 6).map((line) => <li key={line}>{line}</li>)}
      </ul>
    </article>
  );
}

function Budget({ stats }: { stats: { totalMyr: number; categories: Record<string, number>; averagePerDay: number } }) {
  const target = tripData.meta.budgetLimitEur;
  const current = Math.round(eurFromMyr(stats.totalMyr));
  const delta = current - target;

  return (
    <div className="space-y-5">
      <PanelTitle eyebrow="Budget" title="Cadre budgetaire complet" text={tripData.meta.disclaimer} />
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-amber-300/30 bg-amber-300/10 p-5 lg:col-span-2">
          <p className="text-xs font-black uppercase tracking-widest text-amber-200">Total estime actuel</p>
          <h3 className="font-display mt-2 text-5xl font-bold text-white">{current.toLocaleString("fr-FR")} €</h3>
          <p className="mt-3 text-sm text-slate-300">
            Objectif indiqué: {target.toLocaleString("fr-FR")} €. Écart actuel: {delta > 0 ? "+" : ""}{delta.toLocaleString("fr-FR")} €.
          </p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-300">Moyenne par jour</p>
          <h3 className="font-display mt-2 text-3xl font-bold text-white">{formatBoth(stats.averagePerDay)}</h3>
          <p className="mt-3 text-sm text-slate-400">{tripData.meta.budgetStyle}</p>
        </article>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {Object.entries(stats.categories).map(([label, value]) => (
          <article key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-bold text-white">{label}</h3>
              <strong className="text-amber-200">{formatBoth(value)}</strong>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-emerald-300" style={{ width: `${Math.max(8, (value / stats.totalMyr) * 100)}%` }} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Hotels({ accommodations }: { accommodations: readonly Accommodation[] }) {
  return (
    <div className="space-y-5">
      <PanelTitle eyebrow="Logements" title="Hôtels intégrés au planning" text="Fiches proches de l'ancien site: dates, prix, accès, points forts et points à vérifier." />
      <div className="grid gap-5">
        {accommodations.map((hotel) => (
          <article key={hotel.name} className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] lg:grid-cols-[0.85fr_1.15fr]">
            <img src={hotel.photo} alt={hotel.photoAlt || hotel.name} className="h-72 w-full object-cover lg:h-full" />
            <div className="p-5">
              <p className="text-xs font-black uppercase tracking-widest text-emerald-300">{hotel.city} - {hotel.nights}</p>
              <h3 className="font-display mt-2 text-3xl font-bold text-white">{hotel.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{hotel.subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-200">
                {[hotel.dates, hotel.price, hotel.priceMyr, hotel.rating].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-2">{item}</span>
                ))}
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <InfoBox title="Points forts" lines={hotel.highlights} />
                <InfoBox title="À vérifier" lines={hotel.watchouts} />
              </div>
              <a className="mt-5 inline-flex rounded-xl bg-amber-300 px-4 py-3 text-sm font-black text-slate-950" href={hotel.link} target="_blank" rel="noreferrer">
                Ouvrir la fiche réservation
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Checklist({
  checked,
  toggle,
  count,
  progress,
}: {
  checked: Record<string, boolean>;
  toggle: (id: string) => void;
  count: number;
  progress: number;
}) {
  return (
    <div className="space-y-5">
      <PanelTitle eyebrow="Préparation" title="À réserver, vérifier et préparer" text="Les coches sont sauvegardées sur cet ordinateur." />
      <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
        <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-emerald-300">Progression globale</p>
            <h3 className="font-display text-3xl font-bold text-white">{count} / {tripData.bookingChecklist.length}</h3>
          </div>
          <strong className="text-amber-200">{progress}% accomplis</strong>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-emerald-300" style={{ width: `${progress}%` }} />
        </div>
      </article>

      <div className="grid gap-3 md:grid-cols-2">
        {tripData.bookingChecklist.map((item, index) => {
          const id = `item-${index}`;
          const done = checked[id];
          return (
            <button
              key={item}
              type="button"
              onClick={() => toggle(id)}
              className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                done ? "border-emerald-300/50 bg-emerald-300/10" : "border-white/10 bg-white/[0.06]"
              }`}
            >
              <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${done ? "text-emerald-300" : "text-slate-500"}`} />
              <span className={`text-sm leading-6 ${done ? "text-slate-400 line-through" : "text-slate-200"}`}>{item}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
