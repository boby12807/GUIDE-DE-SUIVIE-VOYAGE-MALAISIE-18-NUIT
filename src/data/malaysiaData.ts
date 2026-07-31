export type TripBudgetLine = {
  label: string;
  myr: number;
  kind: string;
};

export type TripPlanPart = {
  period: string;
  time: string;
  visit: string;
  address: string;
  metro: string;
  taxi: string;
  visitCost: string;
  eat: string;
  foodAddress: string;
  foodCost: string;
  drink?: string;
  note: string;
};

export type ToiletStop = {
  label: string;
  query: string;
  note: string;
};

export type TripDay = {
  id: number;
  slug: string;
  dayLabel: string;
  dateLabel: string;
  city: string;
  overnight: string;
  highlight: string;
  transportSummary: string;
  photo: string;
  photoAlt?: string;
  deepDive?: string;
  segments: { label: string; title: string; bullets: string[] }[];
  access: { metro: string; taxi: string };
  tips: string[];
  toiletStops?: ToiletStop[];
  budget: TripBudgetLine[];
  visitCards: { name: string; timing: string; ticket: string; gettingThere: string; whyGo: string }[];
  ultraPlan: TripPlanPart[];
};

export type TripData = {
  meta: {
    title: string;
    subtitle: string;
    travelers: string;
    travelWindow: string;
    exchangeRateMyrPerEur: number;
    exchangeRateLabel: string;
    exchangeRateDate: string;
    verifiedOn: string;
    budgetStyle: string;
    budgetLimitEur: number;
    disclaimer: string;
  };
  route: Record<string, unknown>[];
  citySummaries: Record<string, unknown>[];
  accommodations: Record<string, any>[];
  media: Record<string, any>;
  practicalBlocks: Record<string, any>[];
  ultraBriefing: Record<string, any>[];
  stageDeepDives: Record<string, any>[];
  criticalDecisions: Record<string, any>[];
  sources: Record<string, any>[];
  days: TripDay[];
};

export const tripData: TripData = {
  "meta": {
    "title": "Malaisie 2026",
    "subtitle": "18 nuits au total: 17 nuits en hébergement et 1 nuit en vol",
    "travelers": "2 adultes",
    "travelWindow": "16 aout 2026 -> 3 septembre 2026",
    "exchangeRateMyrPerEur": 4.65,
    "exchangeRateLabel": "1 EUR = 4,65 MYR",
    "exchangeRateDate": "31 juillet 2026",
    "verifiedOn": "31 juillet 2026",
    "budgetStyle": "Budgets affiches pour 2 personnes",
    "budgetLimitEur": 3750,
    "disclaimer": "Budget pour 2 adultes, reverifie le 31 juillet 2026. Les tarifs fixes sont issus des sites officiels ou des operateurs; Grab, repas, essence et achats restent des estimations prudentes. Les logements Airbnb sont consideres taxes comprises: verifier sur les recus que la taxe touristique de RM10 par logement et par nuit a bien deja ete collectee."
  },
  "route": [
    {
      "city": "Kuala Lumpur",
      "days": "17-20 aout",
      "nights": 4,
      "color": "teal"
    },
    {
      "city": "Langkawi",
      "days": "21-25 aout",
      "nights": 5,
      "color": "lagoon"
    },
    {
      "city": "Ipoh",
      "days": "26-30 aout",
      "nights": 5,
      "color": "amber"
    },
    {
      "city": "Kuala Lumpur final",
      "days": "31 aout-3 sept.",
      "nights": 3,
      "color": "teal"
    }
  ],
  "citySummaries": [
    {
      "name": "Kuala Lumpur",
      "nights": "4 nuits a l'aller + 3 nuits a la fin",
      "vibe": "Base urbaine tres simple pour alterner metro, temples, musees, quartiers vivants et fermeture sans stress avant le vol retour.",
      "stay": "Airbnb The Robertson, 2 Jalan Robertson, pour les deux séjours: du 17 au 21 août puis du 31 août au 3 septembre, avec départ vers l'aéroport le 2 septembre au soir.",
      "move": "MRT/LRT quand la station est proche, Grab pour les temples et les transferts avec bagages.",
      "budgetHint": "Airbnb The Robertson: 225 EUR pour les 4 premières nuits, puis 146 EUR pour les 3 nuits finales, soit environ 680 MYR pour le séjour du 31 août au 3 septembre.",
      "photo": "assets/photos/accommodations/kl-arrival-airbnb.jpg",
      "photoAlt": "Vue sur la skyline de Kuala Lumpur"
    },
    {
      "name": "Langkawi",
      "nights": "5 nuits",
      "vibe": "Bloc ile actif: plages, cable car, mangroves, cascades et routes faciles, avec une marge meteo assumee.",
      "stay": "Airbnb Assana Serviced Suites, Tropicana Cenang, Jalan Pantai Chenang, du 21 au 26 aout 2026, base ile pour les 5 nuits.",
      "move": "Scooter uniquement avec permis moto valable, permis international et assurance confirmée; sinon Grab et taxi privé.",
      "budgetHint": "Airbnb Assana Serviced Suites: 364,69 EUR payes pour 5 nuits, soit 72,94 EUR / nuit et environ 339 MYR / nuit.",
      "photo": "assets/photos/days/jour-05-plage-langkawi.png",
      "photoAlt": "Plage de Langkawi et palmiers"
    },
    {
      "name": "Ipoh",
      "nights": "5 nuits",
      "vibe": "Etape food, patrimoine et falaises calcaires, plus calme que KL et maintenant moins serree grace a une vraie journee tampon.",
      "stay": "The Horizon Ipoh By Iconique Espace du 26 au 31 aout 2026, base pour les 5 nuits.",
      "move": "Grab partout; pas besoin de scooter sur cette etape.",
      "budgetHint": "The Horizon Ipoh: 212 EUR pour 5 nuits, soit 42.4 EUR / nuit et environ 198 MYR / nuit.",
      "photo": "assets/photos/visits/tasik-cermin.jpg",
      "photoAlt": "Foret et falaises calcaires autour de Tasik Cermin a Ipoh"
    }
  ],
  "accommodations": [
    {
      "id": "kl-arrival-robertson",
      "city": "Kuala Lumpur",
      "name": "Airbnb The Robertson Kuala Lumpur",
      "subtitle": "45:1-BR with Balcony | Unblocked Merdeka 118",
      "dates": "17 aout 2026 -> 21 aout 2026",
      "nights": "4 nuits",
      "price": "225 EUR au total",
      "priceMyr": "Environ 1 048 MYR au total, soit 262 MYR / nuit",
      "budgetMyr": 1048,
      "link": "https://www.google.com/maps/search/?api=1&query=2%2C%20Jalan%20Robertson%2C%20Kuala%20Lumpur",
      "photo": "assets/photos/accommodations/kl-arrival-airbnb.jpg",
      "photoAlt": "Vue sur la skyline de Kuala Lumpur depuis une piscine en hauteur",
      "host": "Tiang Sin",
      "rating": "Réservation Airbnb confirmée; note non visible sur la capture fournie",
      "capacity": "Appartement 1 chambre avec balcon; capacité et literie à relire dans la réservation Airbnb",
      "checkInOut": "Départ le vendredi 21 août à 12h00; heure d'arrivée à confirmer dans Airbnb",
      "cancellation": "Selon les conditions de la réservation Airbnb",
      "area": "2, Jalan Robertson, Kuala Lumpur - secteur Bukit Bintang / Jalan Pudu",
      "route": "Depuis KLIA : SIM/cash, KLIA Ekspres jusqu'à KL Sentral, puis Grab vers 2, Jalan Robertson. Avec les bagages, Grab direct depuis KLIA reste l'option confort.",
      "highlights": [
        "Adresse centrale à The Robertson, proche de Jalan Alor, Bukit Bintang et Chinatown.",
        "Appartement 1 chambre avec balcon et vue dégagée vers Merdeka 118 selon l'intitulé Airbnb.",
        "Tarif conservé à 225 EUR pour les 4 nuits d'après le budget de réservation existant.",
        "Accès simple en Grab depuis KL Sentral ou directement depuis KLIA."
      ],
      "watchouts": [
        "Sauvegarder dans les téléphones l'adresse exacte: 2, Jalan Robertson, Kuala Lumpur.",
        "Relire dans Airbnb le numéro d'unité, les consignes d'arrivée, la caution et la literie avant le départ."
      ],
      "usedForDays": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "id": "kl-final-robertson",
      "city": "Kuala Lumpur",
      "name": "Airbnb The Robertson Kuala Lumpur - séjour final",
      "subtitle": "Même Airbnb The Robertson que lors du premier séjour, à 2 Jalan Robertson.",
      "dates": "31 aout 2026 -> 3 septembre 2026",
      "nights": "3 nuits",
      "price": "146 EUR payés au total",
      "priceMyr": "Environ 680 MYR au total, soit 227 MYR / nuit",
      "budgetMyr": 680,
      "link": "https://www.google.com/maps/search/?api=1&query=2%2C%20Jalan%20Robertson%2C%20Kuala%20Lumpur",
      "photo": "assets/photos/accommodations/kl-arrival-airbnb.jpg",
      "photoAlt": "Vue sur la skyline de Kuala Lumpur depuis une piscine en hauteur",
      "host": "Tiang Sin",
      "rating": "Réservation Airbnb confirmée; note non visible sur la capture fournie",
      "capacity": "Même appartement 1 chambre avec balcon que lors du premier séjour.",
      "checkInOut": "Arrivée le 31 août; départ du logement le 2 septembre vers 21h45 pour le vol du 3 septembre à 02h15.",
      "cancellation": "Selon les conditions de la réservation Airbnb.",
      "area": "2, Jalan Robertson, Kuala Lumpur - secteur Bukit Bintang / Jalan Pudu",
      "route": "Depuis KL Sentral après l'ETS Ipoh -> Kuala Lumpur: Grab vers 2 Jalan Robertson. Pour le retour: Grab vers KL Sentral puis KLIA Ekspres, ou Grab direct vers KLIA.",
      "highlights": [
        "Les 3 nuits finales sont confirmées et payées 146 EUR au total.",
        "Même adresse que lors du premier séjour: aucun nouveau quartier à apprendre.",
        "Adresse centrale proche de Jalan Alor, Bukit Bintang et Chinatown.",
        "Appartement avec balcon et accès simple en Grab depuis KL Sentral."
      ],
      "watchouts": [
        "Relire dans Airbnb le numéro d'unité et les consignes d'arrivée du second séjour.",
        "Prévenir l'hôte du départ anticipé le 2 septembre vers 21h45."
      ],
      "usedForDays": [
        15,
        16,
        17
      ]
    },
    {
      "id": "langkawi-assana-serviced-suites",
      "city": "Langkawi",
      "name": "Airbnb Assana Serviced Suites",
      "subtitle": "Appartement Airbnb a Tropicana Cenang - base pour 5 nuits pres de Pantai Cenang.",
      "dates": "21 aout 2026 -> 26 aout 2026",
      "nights": "5 nuits",
      "price": "364,69 EUR payes au total",
      "priceMyr": "Environ 1 696 MYR au total, soit 339 MYR / nuit",
      "budgetMyr": 1696,
      "link": "https://www.google.com/maps/search/?api=1&query=Assana%20Serviced%20Suites%2C%20Tropicana%20Cenang%2C%20Jalan%20Pantai%20Chenang%2C%20Langkawi",
      "photo": "assets/photos/days/jour-05-plage-langkawi.png",
      "photoAlt": "Plage de Langkawi et palmiers",
      "host": "Jnc",
      "rating": "Reservation Airbnb; note non visible sur la capture fournie",
      "capacity": "Appartement avec espace nuit et coin salon; capacite et literie a relire dans Airbnb.",
      "checkInOut": "Depart le mercredi 26 aout a 11h00; heure d'arrivee a confirmer dans Airbnb.",
      "cancellation": "Selon les conditions de la reservation Airbnb.",
      "area": "Assana Serviced Suites, Tropicana Cenang, Jalan Pantai Chenang, pres de Pantai Cenang.",
      "route": "Depuis l'aeroport de Langkawi: Grab vers Assana Serviced Suites, puis recuperation du scooter a Pantai Cenang.",
      "highlights": [
        "Montant paye: 364,69 EUR pour 5 nuits, soit 72,94 EUR par nuit.",
        "Couvre toutes les nuits Langkawi du 21 au 26 aout.",
        "Permet de garder SkyCab, Kilim, Cenang et Kuah dans une logique de sorties simples.",
        "Appartement avec coin salon et kitchenette visible sur la capture fournie."
      ],
      "watchouts": [
        "Verifier dans Airbnb si une caution ou des frais locaux restent dus sur place.",
        "Confirmer l'heure d'arrivee du 21 aout apres le vol KL -> Langkawi.",
        "Prevoir Grab/taxi si la meteo rend le scooter peu confortable."
      ],
      "usedForDays": [
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "id": "ipoh-horizon-suites",
      "city": "Ipoh",
      "name": "The Horizon Ipoh By Iconique Espace",
      "subtitle": "Studio avec lit queen size - Résidence 4 étoiles avec piscine en hauteur",
      "dates": "26 aout 2026 -> 31 aout 2026",
      "nights": "5 nuits",
      "price": "212 EUR au total",
      "priceMyr": "Environ 988 MYR au total, soit 198 MYR / nuit",
      "budgetMyr": 988,
      "link": "https://www.booking.com/searchresults.fr.html?ss=The+Horizon+Ipoh+By+Iconique+Espace",
      "photo": "assets/photos/visits/tasik-cermin.jpg",
      "photoAlt": "Paysage de falaises calcaires illustrant le séjour à Ipoh",
      "host": "Iconique Espace Staff",
      "rating": "8,3 / 10 Très bien (219 avis sur Booking)",
      "capacity": "Studio, 1 lit queen size, 1 salle de bain",
      "checkInOut": "Arrivée à partir de 15h00, départ avant 12h00 (à confirmer)",
      "cancellation": "Annulation gratuite avant le 21 août 23h59",
      "area": "Lebuhraya Fair Park, Ipoh - Emplacement central (note 9,0/10)",
      "route": "Depuis la gare d'Ipoh : Grab vers l'hôtel (~8 min, distance 4.0km), puis Grab ou marche pour visiter.",
      "highlights": [
        "Studio moderne et confortable équipé d'un lit queen size.",
        "Accès gratuit à la magnifique piscine à débordement en hauteur (rooftop pool) avec vue panoramique sur les montagnes d'Ipoh.",
        "Salle de sport gratuite accessible dans l'établissement.",
        "Tarif très avantageux à 212 EUR les 5 nuits (taxes comprises)."
      ],
      "watchouts": [
        "Vérifier les conditions de dépôt de garantie sur Booking avant l'arrivée.",
        "Studio compact idéalement optimisé pour 2 voyageurs."
      ],
      "usedForDays": [
        10,
        11,
        12,
        13,
        14
      ]
    }
  ],
  "media": {
    "hero": [
      {
        "src": "assets/photos/accommodations/kl-arrival-airbnb.jpg",
        "alt": "Tours Petronas a Kuala Lumpur",
        "label": "Kuala Lumpur"
      },
      {
        "src": "assets/photos/days/jour-05-plage-langkawi.png",
        "alt": "Plage et eau turquoise a Langkawi",
        "label": "Langkawi"
      },
      {
        "src": "assets/photos/visits/tasik-cermin.jpg",
        "alt": "Foret et falaises calcaires autour de Tasik Cermin a Ipoh",
        "label": "Ipoh"
      },
      {
        "src": "assets/photos/visits/masjid-negara.jpg",
        "alt": "Architecture de la Mosquee nationale a Kuala Lumpur",
        "label": "KL final"
      }
    ],
    "gallery": [
      {
        "src": "assets/photos/accommodations/kl-arrival-airbnb.jpg",
        "alt": "Skyline de Kuala Lumpur",
        "title": "Kuala Lumpur",
        "text": "La base urbaine du voyage, entre tours, forets en pleine ville et quartiers contrastes."
      },
      {
        "src": "assets/photos/days/jour-05-plage-langkawi.png",
        "alt": "Plage de Langkawi",
        "title": "Langkawi",
        "text": "La respiration ile: plage, cable car, mangroves et sorties modulables selon la meteo."
      },
      {
        "src": "assets/photos/visits/tasik-cermin.jpg",
        "alt": "Tasik Cermin et ses falaises calcaires",
        "title": "Tasik Cermin",
        "text": "Le bloc nature le plus net d'Ipoh, parfait pour changer de decor sans compliquer la journee."
      },
      {
        "src": "assets/photos/visits/kellies-castle.jpg",
        "alt": "Facade de Kellie's Castle",
        "title": "Kellie's Castle",
        "text": "Un contrepoint heritage facile a lire apres la grande sortie calcaire de Gua Tempurung."
      }
    ],
    "featuredVisits": [
      {
        "title": "KL Forest Eco Park",
        "src": "assets/photos/visits/kampung-baru.jpg",
        "alt": "Vegetation luxuriante a Kuala Lumpur",
        "city": "Kuala Lumpur",
        "text": "Une poche de foret tropicale dans la ville, interessante tot le matin.",
        "detail": "A garder simple: marche, canopy si ouvert, puis bascule douce vers les jardins Perdana."
      },
      {
        "title": "SkyCab et SkyBridge",
        "src": "assets/photos/days/jour-06-skybridge-langkawi.png",
        "alt": "Relief et vegetation de Langkawi",
        "city": "Langkawi",
        "text": "L'image carte postale du voyage, a placer en debut de journee.",
        "detail": "Prevoir un plan B plage si les sommets sont caches par les nuages."
      },
      {
        "title": "Kilim Geoforest",
        "src": "assets/photos/days/jour-07-kilim-geoforest.png",
        "alt": "Paysage tropical a Langkawi",
        "city": "Langkawi",
        "text": "La sortie nature qui equilibre les plages et donne une autre lecture de l'ile.",
        "detail": "A reserver avec horaire clair plutot qu'avec un package trop rempli."
      },
      {
        "title": "Tasik Cermin",
        "src": "assets/photos/visits/tasik-cermin.jpg",
        "alt": "Lac miroir d'Ipoh",
        "city": "Ipoh",
        "text": "Tunnel, eau miroir et falaises calcaires: une visite courte mais tres marquante.",
        "detail": "A faire avant le temple de Gunung Rapat pour garder la boucle lisible."
      },
      {
        "title": "Gua Tempurung",
        "src": "assets/photos/visits/gua-tempurung.jpg",
        "alt": "Grotte de Gua Tempurung",
        "city": "Ipoh",
        "text": "La vraie journee aventure du bloc Ipoh, avec une logistique Grab a anticiper.",
        "detail": "Si la logistique se complique, garder la grotte et enlever le stop suivant."
      },
      {
        "title": "Merdeka Square et IAMM",
        "src": "assets/photos/visits/masjid-negara.jpg",
        "alt": "Secteur patrimonial de Kuala Lumpur",
        "city": "Kuala Lumpur",
        "text": "La boucle patrimoine la plus claire pour finir Kuala Lumpur proprement.",
        "detail": "Une seule grande boucle suffit: place, mosquee, musee, puis retour doux."
      }
    ]
  },
  "practicalBlocks": [
    {
      "title": "Transports sur place",
      "lines": [
        "KL: metro utile sur les axes principaux, Grab pour les visites dispersees et les sacs.",
        "KL -> Langkawi: vol direct depuis KLIA2, avec marge aeroport et bagages inclus au devis.",
        "Langkawi: scooter seulement si permis moto et assurance valides; sinon Grab et taxi privé pour SkyCab, Kilim et le nord.",
        "Langkawi -> Ipoh: ferry Kuah -> Kuala Perlis, taxi/Grab vers Arau, puis ETS vers Ipoh.",
        "Ipoh -> KL: l'ETS garde la fin de voyage simple et peu fatigante."
      ]
    },
    {
      "title": "Rythme et meteo",
      "lines": [
        "Matins efficaces pour eviter chaleur, foule et orages de fin de journee.",
        "Langkawi doit rester modulable: inverser plage, SkyCab et bateau selon la meteo.",
        "Ipoh gagne une journee tampon: un secteur par jour, sans empiler les grottes.",
        "La fin a KL assume deux jours plus calmes pour valises, achats et fermeture du voyage."
      ]
    },
    {
      "title": "Budget et marges",
      "lines": [
        "Tous les budgets sont pour 2 personnes; l'objectif réaliste inclut désormais une enveloppe d'imprévus.",
        "Les vols internes peuvent grimper avec bagages, horaires pratiques et frais AirAsia.",
        "Les logements déjà réservés sont comptés à leur prix indiqué; contrôler seulement taxes, cautions et frais annexes.",
        "Garder une enveloppe imprevus pour pluie, Grab plus chers, lessive, snacks et petits tickets."
      ]
    },
    {
      "title": "Repas a viser",
      "lines": [
        "KL: nasi lemak, roti canai, teh tarik, Jalan Alor en backup simple.",
        "Langkawi: grillades de plage, fruits de mer, cocos frais, warungs de Cenang.",
        "Ipoh: white coffee, dim sum, curry mee, bean sprout chicken."
      ]
    },
    {
      "title": "Sante et confort",
      "lines": [
        "Eau, chapeau, anti-moustique et creme solaire doivent rester accessibles tous les jours.",
        "Chaussures qui accrochent pour grottes, temples et sols humides.",
        "Ne pas charger les soirees avant vols, ferry ou train."
      ]
    },
    {
      "title": "Documents",
      "lines": [
        "Passeports, assurance, billets hors ligne, confirmations logement et moyen de paiement secondaire.",
        "Captures des horaires ferry/ETS, cartes hors ligne et adresses de logements en favoris.",
        "Permis moto original + permis international + preuve d'assurance, puis photos du scooter au depart et au retour si location a Langkawi."
      ]
    }
  ],
  "ultraBriefing": [
    {
      "title": "J-90 a J-45",
      "kicker": "Verrouiller l'ossature",
      "lines": [
     …28632 tokens truncated…e": "Plan de secours propre si vous revenez vers Pasar Seni."
        }
      ],
      "budget": [
        {
          "label": "Nuit Airbnb The Robertson",
          "myr": 227,
          "kind": "estimate"
        },
        {
          "label": "IAMM / visites patrimoine",
          "myr": 40,
          "kind": "official"
        },
        {
          "label": "Micro-transports KL",
          "myr": 30,
          "kind": "estimate"
        },
        {
          "label": "Repas du jour",
          "myr": 140,
          "kind": "estimate"
        },
        {
          "label": "Cafes / boissons",
          "myr": 35,
          "kind": "estimate"
        },
        {
          "label": "Marge chaleur",
          "myr": 30,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Merdeka Square",
          "timing": "Debut de journee",
          "ticket": "Libre",
          "gettingThere": "MRT / LRT puis marche",
          "whyGo": "Le meilleur point de lecture du KL historique."
        },
        {
          "name": "Masjid Negara",
          "timing": "45 min a 1h",
          "ticket": "Libre; horaires visiteurs non-musulmans a verifier le jour meme autour des prieres",
          "gettingThere": "A pied ou Grab court",
          "whyGo": "Architecture claire à découvrir au créneau visiteurs confirmé, après le musée si les prières ferment l'accès à la mi-journée."
        },
        {
          "name": "Islamic Arts Museum Malaysia",
          "timing": "1h30 a 2h",
          "ticket": "RM20/adulte observe",
          "gettingThere": "À pied depuis Masjid Negara ou directement depuis Pasar Seni",
          "whyGo": "La pause culturelle dense du bloc final KL."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "08h30 -> 11h30",
          "visit": "Merdeka Square",
          "address": "Dataran Merdeka, Kuala Lumpur",
          "metro": "Marcher environ 10 minutes jusqu'a Plaza Rakyat. Prendre le LRT Ampang/Sri Petaling direction Sentul Timur et descendre a Masjid Jamek, puis marcher 5 a 8 minutes jusqu'a Dataran Merdeka.",
          "taxi": "Grab si depart direct hotel.",
          "visitCost": "0 MYR pour 2",
          "eat": "Avant de partir: petit-dejeuner au restaurant en bas de The Robertson.",
          "foodAddress": "Restaurant au rez-de-chaussee de The Robertson",
          "foodCost": "55 MYR pour 2",
          "drink": "Cafe, the et eau; garder une bouteille d'eau.",
          "note": "Commencer par la grande place."
        },
        {
          "period": "Apres-midi",
          "time": "13h30 -> 16h30",
          "visit": "IAMM puis Masjid Negara",
          "address": "Jalan Perdana, Kuala Lumpur",
          "metro": "Depuis Dataran Merdeka, marcher vers Masjid Jamek et prendre le LRT Kelana Jaya direction Putra Heights jusqu'a Pasar Seni, puis marcher 12 a 15 minutes vers Masjid Negara et l'IAMM. Retour: rejoindre MRT Muzium Negara, direction Kajang jusqu'a Merdeka, puis marcher vers The Robertson.",
          "taxi": "Grab court si besoin.",
          "visitCost": "40 MYR pour 2",
          "eat": "Lunch heritage simple: kopitiam autour de Pasar Seni / Masjid Negara avant le musee.",
          "foodAddress": "Secteur Masjid Negara / IAMM",
          "foodCost": "55 MYR pour 2",
          "drink": "Boisson fraiche avant le musee.",
          "note": "Commencer par l'IAMM vers 13h30, puis rejoindre Masjid Negara uniquement au créneau visiteurs confirmé du jour."
        }
      ]
    },
    {
      "id": 17,
      "slug": "jour-17",
      "dayLabel": "Jour 17",
      "dateLabel": "Mercredi 2 septembre 2026",
      "city": "Shopping à Kuala Lumpur",
      "overnight": "Airbnb The Robertson Kuala Lumpur",
      "highlight": "Deux centres seulement: KWC pour les vêtements neufs à prix grossiste, puis Sungei Wang pour les outlets et l'occasion homme et femme.",
      "transportSummary": "Grab + monorail pour le parcours shopping",
      "photo": "assets/photos/days/jour-17-shopping-kuala-lumpur.png",
      "photoAlt": "Galerie commerçante et boutiques de vêtements à Kuala Lumpur",
      "deepDive": "Parcours volontairement simple: comparer d'abord le neuf à KWC, puis terminer par cinq boutiques précises à Sungei Wang. Aucun détour par Pavilion ou Suria KLCC. Acheter seulement si le prix est nettement inférieur à la France et si la taille a été vérifiée.",
      "segments": [
        {
          "label": "Matin",
          "title": "KWC: vêtements neufs homme et femme",
          "bullets": [
            "10h00-11h30: rayon homme, comparer au moins 3 boutiques avant d'acheter.",
            "11h30-13h00: rayon femme, même méthode et demande du prix à l'unité."
          ]
        },
        {
          "label": "Repas du midi",
          "title": "Pause à KWC et contrôle du budget",
          "bullets": [
            "Déjeuner sur place de 13h00 à 13h45.",
            "Compter les achats et garder au moins la moitié du budget pour Sungei Wang."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Sungei Wang: outlets et seconde main",
          "bullets": [
            "Suivre les étages dans l'ordre: QQ Outlet, REFASH, Thrifted!, 2nd Market puis 2nd STREET.",
            "Quitter le centre à 17h30 au plus tard et rentrer à l'hôtel en Grab."
          ]
        },
        {
          "label": "Soir",
          "title": "Retour à l'hôtel, tri des achats et dîner",
          "bullets": [
            "Peser et ranger les achats, puis terminer les valises avant 20h45.",
            "Dîner près de l'hôtel et être prêts une heure avant le départ vers l'aéroport."
          ]
        }
      ],
      "access": {
        "metro": "Depuis The Robertson, KWC se rejoint directement à pied en 12 à 15 minutes via Hang Tuah. Pour Sungei Wang: monorail Hang Tuah direction Titiwangsa jusqu'à Bukit Bintang, puis accès par la passerelle.",
        "taxi": "Option la plus simple avec les achats: Grab hôtel -> KWC, Grab KWC -> Sungei Wang, puis Grab Sungei Wang -> hôtel."
      },
      "tips": [
        "Les 3 nuits du 31 août au 3 septembre sont confirmées à The Robertson pour 146 EUR; prévenir l'hôte du départ le 2 septembre vers 21h45.",
        "Budget séparé: maximum 200 MYR pour les vêtements homme et 200 MYR pour les vêtements femme.",
        "Prix maximum: tee-shirt ou top 35 MYR; chemise ou blouse 60 MYR; pantalon, jean ou robe 90 MYR. Au-dessus, ne pas acheter sans nouvelle comparaison.",
        "À KWC, montrer au vendeur: 'Retail price for one piece?' puis 'Best price for two?'. Certains prix de gros exigent plusieurs pièces.",
        "Tailles asiatiques souvent plus petites: essayer ou mesurer largeur, taille et longueur. Vérifier tissu, coutures, fermeture et conditions d'échange.",
        "À Sungei Wang, commencer au Lower Ground et monter étage par étage pour ne pas tourner en rond.",
        "Éviter les fausses marques, garder les reçus et contrôler le poids des bagages avant de repartir.",
        "Garder veste legere et accessoires sommeil en cabine."
      ],
      "toiletStops": [
        {
          "label": "KWC Fashion Wholesale",
          "query": "toilets KWC Fashion Wholesale Kuala Lumpur",
          "note": "Pause avant le déjeuner et le départ vers Sungei Wang."
        },
        {
          "label": "Sungei Wang Plaza",
          "query": "toilets Sungei Wang Plaza Kuala Lumpur",
          "note": "Repérer les sanitaires sur le plan du centre dès l'arrivée."
        }
      ],
      "budget": [
        {
          "label": "Repas du jour",
          "myr": 120,
          "kind": "estimate"
        },
        {
          "label": "Transports du parcours shopping",
          "myr": 30,
          "kind": "estimate"
        },
        {
          "label": "Plafond vêtements homme",
          "myr": 200,
          "kind": "estimate"
        },
        {
          "label": "Plafond vêtements femme",
          "myr": 200,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "KWC Fashion Wholesale",
          "timing": "10h00 -> 13h00",
          "ticket": "Entrée libre; demander le prix retail à l'unité",
          "gettingThere": "Grab depuis The Robertson ou trajet via Hang Tuah puis 5 minutes à pied",
          "whyGo": "Vêtements neufs à prix grossiste. Commencer par l'homme, puis la femme, et comparer 3 boutiques par catégorie."
        },
        {
          "name": "QQ Outlet - niveau Lower Ground, lot LG152",
          "timing": "Premier arrêt à Sungei Wang",
          "ticket": "Vêtements femme neufs; appliquer les plafonds de prix",
          "gettingThere": "Entrer dans Sungei Wang puis descendre au Lower Ground, zone orange",
          "whyGo": "Boutique femme clairement identifiée dans l'annuaire officiel, sans parcourir tout le centre."
        },
        {
          "name": "REFASH puis Thrifted! - niveaux 1 et 2",
          "timing": "14h30 -> 15h30",
          "ticket": "Seconde main; inspecter l'état et essayer",
          "gettingThere": "REFASH lot CHF-2 au 1er, puis Thrifted! lots S067/S068/S070 au 2e",
          "whyGo": "Deux arrêts rapides pour les vêtements femme et unisexes d'occasion à prix potentiellement bas."
        },
        {
          "name": "2nd Market - niveau 3",
          "timing": "15h30 -> 16h15",
          "ticket": "Seconde main homme et femme",
          "gettingThere": "Niveau 3, lots T084A et 079/080",
          "whyGo": "Sélection casual et streetwear pour les deux, utile pour tee-shirts, chemises, jeans et vestes légères."
        },
        {
          "name": "2nd STREET - niveau 4, lot E50",
          "timing": "16h15 -> 17h15",
          "ticket": "Seconde main; comparer avec les achats déjà trouvés",
          "gettingThere": "Monter directement au 4e étage, lot E50",
          "whyGo": "Dernier magasin du parcours pour homme et femme; ne prendre que ce qui reste moins cher que KWC et la France."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "09h30 -> 13h00",
          "visit": "KWC Fashion Wholesale - neuf homme puis femme",
          "address": "No. 2, Jalan Gelugor, Pudu, 55200 Kuala Lumpur",
          "metro": "Depuis The Robertson, marcher directement vers Hang Tuah puis KWC: environ 12 à 15 minutes au total. Il n'est pas utile de prendre le monorail pour ce premier trajet.",
          "taxi": "Option simple: Grab depuis The Robertson vers KWC pour arriver à l'ouverture de 10h00.",
          "visitCost": "0 MYR pour 2",
          "eat": "Avant de partir: petit-déjeuner au restaurant en bas de The Robertson.",
          "foodAddress": "Restaurant au rez-de-chaussée de The Robertson",
          "foodCost": "45 MYR pour 2",
          "drink": "Café, thé et eau; garder une bouteille dans le sac.",
          "note": "À l'accueil, demander les étages 'menswear, womenswear, retail single pieces'. Homme 10h00-11h30, femme 11h30-13h00. Comparer 3 boutiques avant chaque achat."
        },
        {
          "period": "Repas du midi",
          "time": "13h00 -> 13h45",
          "visit": "Déjeuner et point budget à KWC",
          "address": "KWC Fashion Wholesale, Pudu",
          "metro": "Rester dans le centre commercial.",
          "taxi": "Aucun trajet pendant la pause.",
          "visitCost": "0 MYR pour 2",
          "eat": "Déjeuner simple, puis compter les dépenses homme et femme séparément.",
          "foodAddress": "KWC Fashion Wholesale",
          "foodCost": "75 MYR pour 2",
          "drink": "Eau ou boisson fraîche.",
          "note": "Ne pas dépasser 100 MYR par personne à cette étape afin de garder du budget pour les boutiques d'occasion."
        },
        {
          "period": "Apres-midi",
          "time": "14h00 -> 17h30",
          "visit": "Sungei Wang - parcours étage par étage",
          "address": "Sungei Wang Plaza, Jalan Sultan Ismail, Bukit Bintang",
          "metro": "Revenir à Hang Tuah, prendre le monorail direction Titiwangsa et descendre à Bukit Bintang après Imbi; suivre la passerelle vers Sungei Wang.",
          "taxi": "Avec les sacs, Grab KWC -> Sungei Wang est plus simple; retour hôtel en Grab à 17h30.",
          "visitCost": "0 MYR pour 2",
          "eat": "Pas de second repas prévu; petite boisson si nécessaire.",
          "foodAddress": "Sungei Wang Plaza",
          "foodCost": "0 MYR hors boisson",
          "drink": "Eau ou boisson fraîche.",
          "note": "Ordre exact: QQ Outlet LG152 au Lower Ground; REFASH CHF-2 au 1er; Thrifted! S067/S068/S070 au 2e; 2nd Market T084A et 079/080 au 3e; 2nd STREET E50 au 4e. Départ impératif à 17h30."
        },
        {
          "period": "Soir / diner",
          "time": "18h00 -> 20h45",
          "visit": "Hôtel, tri des achats, dîner et repos",
          "address": "Airbnb The Robertson, 2 Jalan Robertson, Kuala Lumpur",
          "metro": "Depuis Bukit Bintang, prendre le monorail direction KL Sentral jusqu'à Hang Tuah, puis marcher 8 à 10 minutes jusqu'à The Robertson. Avec plusieurs sacs, garder Grab comme option confort.",
          "taxi": "Grab Sungei Wang -> hôtel vers 17h30.",
          "visitCost": "45 MYR pour 2",
          "eat": "Dîner vers 19h00 près de l'hôtel.",
          "foodAddress": "Autour de The Robertson",
          "foodCost": "80 MYR pour 2",
          "drink": "Eau ou boisson fraîche.",
          "note": "18h00-19h00: trier et peser les achats. 19h00-20h00: dîner. 20h00-20h45: douche et contrôles finaux. Tout doit être prêt à 20h45 pour le départ vers KLIA à 21h45."
        }
      ]
    },
    {
      "id": 18,
      "slug": "jour-18",
      "dayLabel": "Jour 18",
      "dateLabel": "Jeudi 3 septembre 2026",
      "city": "Retour a Genève",
      "overnight": "Maison",
      "highlight": "Départ de l'hôtel le 2 septembre à 21h45, KLIA Ekspres, vol à 02h15 puis atterrissage à Genève le 3 septembre à 14h35.",
      "transportSummary": "Grab + KLIA Ekspres + vol retour + voiture",
      "photo": "assets/photos/days/jour-18-retour-geneve.png",
      "photoAlt": "Avion approchant Genève au lever du soleil devant les Alpes",
      "deepDive": "Le site garde ce jour pour respecter les vraies dates du retour et ne rien programmer d'important.",
      "segments": [
        {
          "label": "Nuit du 2 au 3 septembre",
          "title": "The Robertson, KL Sentral puis KLIA",
          "bullets": [
            "Quitter l'hôtel le 2 septembre vers 21h45 et rejoindre KL Sentral en Grab.",
            "Prendre le KLIA Ekspres puis le vol retour du 3 septembre à 02h15."
          ]
        },
        {
          "label": "Matin",
          "title": "Vol retour vers Genève",
          "bullets": [
            "Correspondance et trajet vers Genève.",
            "Atterrissage prévu à 14h35."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Arrivee, bagages et retour maison",
          "bullets": [
            "Formalités et récupération des sacs.",
            "Récupération de la voiture au parking et retour maison tranquille."
          ]
        },
        {
          "label": "Soir",
          "title": "Journee blanche",
          "bullets": [
            "Repos total.",
            "Aucun engagement important."
          ]
        }
      ],
      "access": {
        "metro": "Grab The Robertson -> KL Sentral, puis KLIA Ekspres jusqu'à l'aéroport.",
        "taxi": "Option confort: Grab direct de The Robertson à KLIA si les bagages rendent le changement difficile."
      },
      "tips": [
        "Ne rien programmer d'important le jour du retour."
      ],
      "toiletStops": [
        {
          "label": "KL Sentral avant KLIA Ekspres",
          "query": "toilets near KL Sentral KLIA Ekspres",
          "note": "A utiliser avant le train pour l'aéroport."
        },
        {
          "label": "KLIA départ international",
          "query": "toilets near KLIA international departures",
          "note": "Dernier repère pratique à KLIA avant le vol."
        }
      ],
      "budget": [
        {
          "label": "KLIA Ekspres (2 adultes)",
          "myr": 99,
          "kind": "official"
        },
        {
          "label": "Grab hôtel -> KL Sentral",
          "myr": 25,
          "kind": "estimate"
        },
        {
          "label": "Marge aéroport / snacks",
          "myr": 60,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "The Robertson -> KL Sentral -> KLIA",
          "timing": "Départ de l'hôtel le 2 septembre vers 21h45",
          "ticket": "KLIA Ekspres: RM55 par adulte, soit RM99 pour 2 avec la remise web/app officielle de 10%",
          "gettingThere": "Grab jusqu'à KL Sentral, puis KLIA Ekspres",
          "whyGo": "Arriver à KLIA avec environ 3 heures de marge avant le vol du 3 septembre à 02h15."
        },
        {
          "name": "Retour a Genève",
          "timing": "Selon vol retour",
          "ticket": "Inclus dans les vols long-courriers",
          "gettingThere": "Aeroport puis retour maison",
          "whyGo": "Fermer le voyage proprement et recuperer."
        }
      ],
      "ultraPlan": [
        {
          "period": "Nuit du 2 au 3",
          "time": "21h45 le 2 sept. -> 02h15 le 3 sept.",
          "visit": "Départ de l'hôtel, KLIA et vol retour",
          "address": "Airbnb The Robertson, 2 Jalan Robertson -> KL Sentral -> KLIA",
          "metro": "KLIA Ekspres depuis KL Sentral.",
          "taxi": "Grab de l'hôtel vers KL Sentral à 21h45; option confort: Grab direct jusqu'à KLIA.",
          "visitCost": "124 MYR pour 2: KLIA Ekspres en ligne RM99 + Grab estime RM25",
          "eat": "Snack léger à KLIA si besoin.",
          "foodAddress": "KLIA, zone des départs internationaux",
          "foodCost": "60 MYR maximum pour 2",
          "drink": "Eau pour le vol.",
          "note": "Ce trajet commence le soir du 2 septembre, mais il appartient au retour du jeudi 3 septembre: départ hôtel à 21h45 et décollage à 02h15."
        },
        {
          "period": "Matin",
          "time": "En vol jusqu'a 14h35",
          "visit": "Vol retour vers Geneve",
          "address": "Correspondance -> Geneve",
          "metro": "Sans objet pendant le vol.",
          "taxi": "Sans objet pendant le vol.",
          "visitCost": "0 MYR pour 2",
          "eat": "Repas selon le service a bord.",
          "foodAddress": "En vol",
          "foodCost": "0 MYR",
          "drink": "Hydratation et repos.",
          "note": "Arrivee prevue a Geneve le jeudi 3 septembre a 14h35."
        },
        {
          "period": "Apres-midi",
          "time": "14h35 -> retour maison",
          "visit": "Bagages, voiture et retour maison",
          "address": "Aeroport de Geneve -> domicile",
          "metro": "Selon votre retour local.",
          "taxi": "Voiture recuperee au parking de l'aeroport.",
          "visitCost": "0 MYR pour 2",
          "eat": "Rien a prevoir dans le budget Malaisie.",
          "foodAddress": "Maison",
          "foodCost": "0 MYR",
          "drink": "Hydratation et repos.",
          "note": "Ranger doucement les papiers et souvenirs, puis repos."
        },
        {
          "period": "Soir / diner",
          "time": "19h30 -> 21h30",
          "visit": "Repas simple et repos",
          "address": "Maison",
          "metro": "Aucun.",
          "taxi": "Aucun.",
          "visitCost": "0 MYR pour 2",
          "eat": "Repas maison simple.",
          "foodAddress": "Maison",
          "foodCost": "0 MYR",
          "drink": "Eau et sommeil.",
          "note": "Aucun engagement important le soir du retour."
        }
      ]
    }
  ]
};

