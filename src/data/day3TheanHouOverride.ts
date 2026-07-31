import { tripData } from "./malaysiaData";

const day3 = tripData.days.find((day) => day.id === 3);

if (day3) {
  day3.highlight =
    "Temple Thean Hou et Little India - Brickfields le matin, Aquaria KLCC au frais l'apres-midi, puis Petronas / KLCC et spectacle Lake Symphony le soir.";
  day3.deepDive =
    "La matinee associe deux ambiances culturelles complementaires et presque gratuites: le temple chinois Thean Hou sur sa colline, puis les rues colorees de Little India a Brickfields. La suite garde Aquaria, KLCC/Petronas et le spectacle Lake Symphony.";

  day3.segments[0] = {
    label: "Matin",
    title: "Temple Thean Hou + Little India - Brickfields",
    bullets: [
      "Visiter les etages, les sanctuaires et les statues du zodiaque de Thean Hou.",
      "Continuer par une courte balade coloree dans Little India avant de rejoindre Bukit Bintang.",
    ],
  };

  day3.access = {
    metro:
      "Apres Thean Hou et Brickfields, rejoindre KL Sentral puis prendre le monorail direction Titiwangsa jusqu'a Bukit Bintang. KLCC se rejoint ensuite a pied par Pavilion et la passerelle couverte.",
    taxi:
      "Grab conseille depuis The Robertson vers Thean Hou, puis Grab court vers Little India - Brickfields; le temple est sur une colline et mal desservi a pied.",
  };

  day3.tips = [
    ...day3.tips,
    "Au temple, garder une tenue respectueuse couvrant epaules et genoux.",
  ];

  if (day3.toiletStops?.[0]) {
    day3.toiletStops[0] = {
      label: "Temple Thean Hou",
      query: "toilets near Thean Hou Temple Kuala Lumpur",
      note: "A utiliser pendant le bloc du matin avant de repartir vers Brickfields.",
    };
  }

  const transportBudget = day3.budget.find(
    (line) => line.label === "Transports urbains / Grab",
  );
  if (transportBudget) {
    transportBudget.myr = 65;
  }

  const attractionBudget = day3.budget.find(
    (line) => line.label === "KL Tower + Aquaria KLCC",
  );
  if (attractionBudget) {
    attractionBudget.label = "Temple Thean Hou + Aquaria KLCC";
    attractionBudget.myr = 160;
  }

  day3.visitCards[0] = {
    name: "Temple Thean Hou + Little India - Brickfields",
    timing: "Matin, 2h30 a 3h avec les trajets",
    ticket: "Entree gratuite; donation facultative au temple",
    gettingThere:
      "Grab vers Thean Hou, puis Grab court vers Brickfields et monorail depuis KL Sentral",
    whyGo:
      "Architecture chinoise photogenique, sanctuaires et ambiance indienne coloree sans repeter la vue de la piscine.",
  };

  day3.ultraPlan[0] = {
    period: "Matin",
    time: "08h30 -> 11h30",
    visit: "Temple Thean Hou + Little India - Brickfields",
    address: "65 Persiaran Endah, Off Jalan Syed Putra, Kuala Lumpur",
    metro:
      "Apres la visite, rejoindre Brickfields puis marcher jusqu'a KL Sentral. Prendre ensuite le monorail direction Titiwangsa jusqu'a Bukit Bintang pour le dejeuner.",
    taxi:
      "Grab direct depuis 2 Jalan Robertson vers Thean Hou, puis Grab court vers Jalan Tun Sambanthan a Little India - Brickfields.",
    visitCost: "0 MYR pour 2, donation facultative",
    eat: "Avant de partir: petit-dejeuner au restaurant en bas de The Robertson.",
    foodAddress: "Restaurant au rez-de-chaussee de The Robertson",
    foodCost: "35 MYR pour 2",
    drink: "Cafe avant le depart, puis the tarik ou lassi possible a Brickfields.",
    note:
      "Prevoir environ 1h15 au temple puis 45 minutes de balade a Little India; tenue respectueuse au sanctuaire.",
  };

  if (day3.ultraPlan[1]) {
    day3.ultraPlan[1].metro =
      "Depuis Brickfields, marcher jusqu'a KL Sentral puis prendre le monorail direction Titiwangsa et descendre a Bukit Bintang. Lot 10 se trouve a la sortie de la station.";
  }
}

const towerSource = tripData.sources.find(
  (source) => source.title === "KL Tower - official website",
);

if (towerSource) {
  towerSource.title = "Thean Hou Temple - official website";
  towerSource.url = "https://www.hainannet.com.my/contact-us/?lang=en";
  towerSource.note =
    "Repere officiel pour l'adresse et les horaires du sanctuaire Thean Hou.";
}
