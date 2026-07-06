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
  bookingChecklist: string[];
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
    "subtitle": "Carnet d'itineraire final a valider avant export PDF",
    "travelers": "2 adultes",
    "travelWindow": "16 aout 2026 -> 3 septembre 2026",
    "exchangeRateMyrPerEur": 4.6605,
    "exchangeRateLabel": "1 EUR = 4,6605 MYR",
    "exchangeRateDate": "3 juillet 2026",
    "verifiedOn": "4 juillet 2026",
    "budgetStyle": "Budgets affiches pour 2 personnes",
    "budgetLimitEur": 3400,
    "disclaimer": "Tarifs publics, horaires et trajets reverifies le 4 juillet 2026 quand une source officielle est disponible. Les vols, logements, Grab, meteo et disponibilites restent dynamiques: verifier a nouveau avant paiement."
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
      "days": "31 aout-2 sept.",
      "nights": 2,
      "color": "teal"
    }
  ],
  "citySummaries": [
    {
      "name": "Kuala Lumpur",
      "nights": "4 nuits a l'aller + 2 nuits a la fin",
      "vibe": "Base urbaine tres simple pour alterner metro, temples, musees, quartiers vivants et fermeture sans stress avant le vol retour.",
      "stay": "4 premières nuits : The Platinum Kuala Lumpur by Whitfield du 17 au 21 août. Fin de voyage : The Colony By Infinitum KLCC - Aura Suites du 31 août au 2 septembre.",
      "move": "MRT/LRT quand la station est proche, Grab pour les temples et les transferts avec bagages.",
      "budgetHint": "Platinum Suites: 225 EUR / environ 1 048 MYR pour 4 nuits (262 MYR / nuit). Retour à The Colony KLCC : 100 EUR / environ 464 MYR pour 2 nuits (232 MYR / nuit). Total KL = 325 EUR.",
      "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Kuala_Lumpur_Malaysia_Skyline-01.jpg",
      "photoAlt": "Vue sur la skyline de Kuala Lumpur"
    },
    {
      "name": "Langkawi",
      "nights": "5 nuits",
      "vibe": "Bloc ile actif: plage, cable car, mangroves, artisanat et routes faciles, avec une marge meteo assumee.",
      "stay": "Rebungan Resort Langkawi du 21 au 26 aout 2026, base ile pour les 5 nuits.",
      "move": "Location de scooter prévue pour être tranquille et explorer l'île librement.",
      "budgetHint": "Rebungan Resort Langkawi: 159 EUR pour 5 nuits, soit 31.8 EUR / nuit et environ 148 MYR / nuit.",
      "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Langkawi_beach.jpg",
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
      "id": "kl-arrival-platinum",
      "city": "Kuala Lumpur",
      "name": "The Platinum Kuala Lumpur by Whitfield",
      "subtitle": "Suite Premier - Appartement de 79 m² proche des tours Petronas",
      "dates": "17 aout 2026 -> 21 aout 2026",
      "nights": "4 nuits",
      "price": "225 EUR au total",
      "priceMyr": "Environ 1 048 MYR au total, soit 262 MYR / nuit",
      "link": "https://www.booking.com/searchresults.fr.html?ss=The+Platinum+Kuala+Lumpur+by+Whitfield",
      "photo": "assets/photos/accommodations/kl-arrival-airbnb.jpg",
      "photoAlt": "Infinity pool rooftop avec vue spectaculaire sur la KL Tower",
      "host": "Whitfield (Géré par professionnel)",
      "rating": "8,3 / 10 Très bien (587 avis sur Booking)",
      "capacity": "Suite de 79 m², 1 chambre à coucher, 1 lit king size, 1 salle de bain",
      "checkInOut": "Arrivée à partir de 15h00, départ avant 12h00 (à confirmer)",
      "cancellation": "Selon conditions de la promotion sur Booking",
      "area": "Proximité de Petronas Twin Towers et de Pavilion Kuala Lumpur",
      "route": "Depuis KLIA : SIM/cash, KLIA Ekspres jusqu'à KL Sentral, puis Grab vers l'hôtel. Confort : Grab direct KLIA -> The Platinum.",
      "highlights": [
        "Infinity pool rooftop remarquable avec vue imprenable sur la skyline et la KL Tower.",
        "Suite Premier très spacieuse de 79 m² avec chambre séparée et lit king size.",
        "Rapport qualité/prix exceptionnel à 225 EUR les 4 nuits (promotion de -46%).",
        "Emplacement idéal à proximité immédiate des Petronas Twin Towers et de Pavilion."
      ],
      "watchouts": [
        "Vérifier les frais, taxes et conditions d'annulation applicables sur Booking.",
        "Disponibilités limitées à ce prix promotionnel."
      ],
      "usedForDays": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "id": "kl-final-colony",
      "city": "Kuala Lumpur",
      "name": "The Colony By Infinitum KLCC - Aura Suites",
      "subtitle": "Studio avec lit queen size et balcon - Résidence 4 étoiles avec rooftop infinity pool",
      "dates": "31 aout 2026 -> 2 septembre 2026",
      "nights": "2 nuits",
      "price": "100 EUR au total",
      "priceMyr": "Environ 464 MYR au total, soit 232 MYR / nuit",
      "link": "https://www.booking.com/searchresults.fr.html?ss=The+Colony+By+Infinitum+KLCC+-+Aura+Suites",
      "photo": "assets/photos/accommodations/kl-arrival-airbnb.jpg",
      "photoAlt": "Piscine à débordement sur le toit avec vue spectaculaire sur les tours Petronas",
      "host": "Aura Suites Staff",
      "rating": "9,1 / 10 Excellent (127 avis sur Booking)",
      "capacity": "Studio, 1 lit queen size, 1 salle de bain, balcon",
      "checkInOut": "Arrivée à partir de 15h00, départ avant 12h00 (à confirmer)",
      "cancellation": "Non remboursable, prépaiement en ligne",
      "area": "Jalan Dewan Sultan Sulaiman, Kuala Lumpur - Emplacement central",
      "route": "Depuis la gare de KL Sentral (après l'ETS Ipoh -> KL) : Grab vers l'hôtel. Pour le retour : Grab ou KLIA Ekspres via KL Sentral.",
      "highlights": [
        "Tarif excellent à 100 EUR pour les 2 dernières nuits.",
        "Superbe piscine à débordement sur le toit avec vue panoramique sur les tours jumelles Petronas.",
        "Hébergement classé 9,1/10 (Excellent) avec balcon privé.",
        "Situation centrale très pratique pour boucler les valises et faire les derniers achats."
      ],
      "watchouts": [
        "Tarif Booking non remboursable."
      ],
      "usedForDays": [
        15,
        16
      ]
    },
    {
      "id": "langkawi-rebungan-resort",
      "city": "Langkawi",
      "name": "Rebungan Resort Langkawi",
      "subtitle": "Chambre Lits Jumeaux de Luxe - base simple pour 5 nuits sur l'ile.",
      "dates": "21 aout 2026 -> 26 aout 2026",
      "nights": "5 nuits",
      "price": "159 EUR au total",
      "priceMyr": "Environ 741 MYR au total, soit 148 MYR / nuit",
      "link": "https://www.booking.com/searchresults.fr.html?ss=Rebungan+Resort+Langkawi",
      "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Langkawi_beach.jpg",
      "photoAlt": "Plage de Langkawi et palmiers",
      "host": "Rebungan Resort Langkawi",
      "rating": "Note Booking a reverifier avant paiement final",
      "capacity": "Chambre pour 2 adultes, configuration lits jumeaux selon reservation.",
      "checkInOut": "Arrivee et depart a confirmer dans la reservation Booking.",
      "cancellation": "Annulation gratuite indiquee dans le plan initial, a reconfirmer dans Booking.",
      "area": "Base ile pour rayonner vers Cenang, SkyCab, Kilim, Kuah et le nord.",
      "route": "Depuis l'aeroport de Langkawi: Grab vers le resort, puis location du scooter pour toute la durée du séjour sur l'île.",
      "highlights": [
        "Bloc coherent avec le budget final: 159 EUR pour 5 nuits, soit environ 148 MYR par nuit.",
        "Couvre toutes les nuits Langkawi du 21 au 26 aout.",
        "Permet de garder SkyCab, Kilim, Cenang et Kuah dans une logique de sorties simples.",
        "Option nettement moins chere que l'ancienne option de logement laissee dans le fichier."
      ],
      "watchouts": [
        "Relire taxes, caution, frais et conditions d'annulation avant paiement final.",
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
      "link": "https://www.booking.com/searchresults.fr.html?ss=The+Horizon+Ipoh+By+Iconique+Espace",
      "photo": "assets/photos/visits/tasik-cermin.jpg",
      "photoAlt": "Infinity pool rooftop avec vue sur les montagnes à Ipoh",
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
        "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Petronas_Twin_Towers_Kuala_Lumpur_Malaysia.jpg",
        "alt": "Tours Petronas a Kuala Lumpur",
        "label": "Kuala Lumpur"
      },
      {
        "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Langkawi_beach.jpg",
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
        "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Kuala_Lumpur_Malaysia_Skyline-01.jpg",
        "alt": "Skyline de Kuala Lumpur",
        "title": "Kuala Lumpur",
        "text": "La base urbaine du voyage, entre tours, forets en pleine ville et quartiers contrastes."
      },
      {
        "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Langkawi_beach.jpg",
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
        "src": "https://commons.wikimedia.org/wiki/Special:FilePath/KL_Perdana_Botanical_Garden_5.jpg",
        "alt": "Vegetation luxuriante a Kuala Lumpur",
        "city": "Kuala Lumpur",
        "text": "Une poche de foret tropicale dans la ville, interessante tot le matin.",
        "detail": "A garder simple: marche, canopy si ouvert, puis bascule douce vers les jardins Perdana."
      },
      {
        "title": "SkyCab et SkyBridge",
        "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Langkawi_(Unsplash).jpg",
        "alt": "Relief et vegetation de Langkawi",
        "city": "Langkawi",
        "text": "L'image carte postale du voyage, a placer en debut de journee.",
        "detail": "Prevoir un plan B plage si les sommets sont caches par les nuages."
      },
      {
        "title": "Kilim Geoforest",
        "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Langkawi_beach.jpg",
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
  "bookingChecklist": [
    "Vols long-courriers Genève -> Kuala Lumpur: 1 489 EUR pour 2 (environ 6 940 MYR) via Saudi Arabian Airlines + Parking et péage (Genève): 150 EUR (699 MYR).",
    "The Platinum Kuala Lumpur by Whitfield (Suite Premier) réservé pour les 4 premières nuits (225 EUR) + The Colony By Infinitum KLCC (Studio) réservé pour les 2 dernières nuits (100 EUR).",
    "Rebungan Resort Langkawi (Chambre Lits Jumeaux de Luxe) réservé pour le 21 -> 26 aout: 159 EUR pour 5 nuits (taxes incluses, annulation gratuite).",
    "The Horizon Ipoh By Iconique Espace (Studio) réservé pour le 26 -> 31 aout: 212 EUR pour 5 nuits (taxes incluses, annulation gratuite).",
    "Vol AirAsia Kuala Lumpur -> Langkawi avec bagages inclus dans le prix final, pas seulement le tarif d'appel.",
    "Ferry Kuah -> Kuala Perlis et ETS Arau -> Ipoh a reverifier ensemble avant achat.",
    "Train ETS Ipoh -> Kuala Lumpur a reserver des que les billets ouvrent.",
    "Hebergements en quartiers valides, avec annulation souple autour du 2 septembre.",
    "Assurance voyage, permis international si scooter, photos du scooter et casque correct a verifier.",
    "Prevoir un plan pluie pour Langkawi: SkyCab et sorties bateau dependent beaucoup de la meteo."
  ],
  "practicalBlocks": [
    {
      "title": "Transports sur place",
      "lines": [
        "KL: metro utile sur les axes principaux, Grab pour les visites dispersees et les sacs.",
        "KL -> Langkawi: vol direct depuis KLIA2, avec marge aeroport et bagages inclus au devis.",
        "Langkawi: scooter loué pour rayonner en toute liberté vers SkyCab, Kilim et le nord.",
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
        "Tous les budgets sont pour 2 personnes et incluent une marge de prudence plus forte qu'avant.",
        "Les vols internes peuvent grimper avec bagages, horaires pratiques et frais AirAsia.",
        "Prevoir 20 a 40% de marge logement autour du 31 aout et des week-ends.",
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
        "Photos du scooter au depart et au retour si location a Langkawi."
      ]
    }
  ],
  "ultraBriefing": [
    {
      "title": "J-90 a J-45",
      "kicker": "Verrouiller l'ossature",
      "lines": [
        "Bloquer les vols long-courriers avec une arrivee KL assez tot pour garder le 17 aout leger.",
        "Confirmer les deux blocs logement de Kuala Lumpur, puis Langkawi et Ipoh avec annulation lisible.",
        "Verifier passeports, assurance voyage, plafonds carte bancaire et conditions scooter si Langkawi se fait en deux-roues.",
        "Garder une enveloppe de marge pour bagages AirAsia, Grab plus chers, pluie et petits tickets."
      ],
      "action": "Objectif: figer les bases sans figer chaque minute."
    },
    {
      "title": "J-30 a J-15",
      "kicker": "Preparer le terrain",
      "lines": [
        "Telecharger cartes hors ligne KL, Langkawi et Ipoh, puis sauvegarder toutes les adresses de logements.",
        "Creer une pochette numerique: passeports, assurances, vols, logements, billets train/ferry, permis international si scooter.",
        "Regarder les horaires KLIA, AirAsia, ferry Kuah -> Kuala Perlis et ETS Arau -> Ipoh sur une meme feuille.",
        "Lister les restaurants utiles par zone au lieu de chercher au hasard quand la fatigue monte."
      ],
      "action": "Objectif: pouvoir voyager meme avec une connexion mediocre."
    },
    {
      "title": "J-7",
      "kicker": "Choisir les plans B",
      "lines": [
        "Regarder la tendance meteo de Langkawi: SkyCab et bateau doivent rester inversables.",
        "Prevoir une journee pluie simple: cafe, massage, duty free, marche couvert ou repos logement.",
        "Pour Gua Tempurung, garder un niveau de visite adapte a l'energie reelle et aux conditions du jour.",
        "Controler les bagages: chaussures qui accrochent, sac leger, anti-moustique, creme solaire, adaptateur type G."
      ],
      "action": "Objectif: ne pas transformer la meteo en probleme."
    },
    {
      "title": "J-3 a J-1",
      "kicker": "Entree en Malaisie",
      "lines": [
        "Completer la Malaysia Digital Arrival Card sur le portail officiel dans les 3 jours avant l'arrivee.",
        "Verifier que les infos MDAC correspondent exactement au passeport, au vol et a l'adresse du premier logement.",
        "Garder billet retour, reservations et preuve d'assurance accessibles hors ligne.",
        "Verifier sur le site officiel Immigration que la nationalite des voyageurs n'exige pas de visa pour ce sejour touristique court."
      ],
      "action": "Objectif: passer l'arrivee sans stress administratif."
    },
    {
      "title": "Tous les matins",
      "kicker": "Routine terrain",
      "lines": [
        "Depart avec eau, cash, carte bancaire secondaire, batterie, mouchoirs, veste legere et capture de l'itineraire.",
        "Regarder le premier trajet retour avant de partir, surtout a Langkawi et autour d'Ipoh.",
        "Faire les visites exterieures tot, garder les cafes et musees pour les heures chaudes.",
        "Si une visite saute, ne pas compresser: garder le coeur du jour et laisser tomber le bonus."
      ],
      "action": "Objectif: garder le voyage fluide plutot que parfait."
    },
    {
      "title": "Tous les soirs",
      "kicker": "Reset discret",
      "lines": [
        "Recharger batterie, verifier meteo, mettre les billets du lendemain hors ligne.",
        "Noter le premier transport du lendemain et le point de rendez-vous exact.",
        "Faire lessive ou tri sac des que deux jours humides s'enchainent.",
        "Avant transfert: sacs prets, passeports visibles, cash suffisant et aucun diner trop loin."
      ],
      "action": "Objectif: se coucher avec le lendemain deja simple."
    }
  ],
  "stageDeepDives": [
    {
      "city": "Kuala Lumpur ouverture",
      "days": "Jours 1 a 4",
      "role": "Sas d'arrivee + premiere vraie lecture de la ville.",
      "rhythm": "Matins dehors, apres-midis plus culturels ou climatises, soirees courtes pour absorber le decalage.",
      "details": [
        "Le premier soir reste volontairement vide: la reussite du voyage commence par une bonne arrivee.",
        "Les visites KL sont organisees par zones pour eviter de traverser la ville trois fois dans la meme journee.",
        "Grab est assume pour les jardins Perdana, Batu Caves et les retours fatigues; le metro sert surtout quand il evite vraiment du trafic."
      ],
      "planB": "Si la chaleur tape trop fort, garder seulement un gros bloc le matin et remplacer le reste par cafe, KLCC ou retour piscine."
    },
    {
      "city": "Langkawi",
      "days": "Jours 5 a 9",
      "role": "Bloc ile actif, mais pilote par la meteo.",
      "rhythm": "Un gros objectif le matin, puis plage, route courte ou diner simple. Le scooter ne doit pas devenir une obligation.",
      "details": [
        "SkyCab se decide avec le ciel du matin: sommet couvert = on bascule plage, craft, Laman Padi ou repos.",
        "Kilim et le nord doivent se faire avec un horaire clair, pas en improvisation tardive.",
        "Le logement cote Tanjung Rhu donne du calme, mais impose d'assumer les distances vers Cenang."
      ],
      "planB": "Si pluie durable: massage, cafe, duty free, repas long et inversion avec une journee plage plus tard."
    },
    {
      "city": "Ipoh",
      "days": "Jours 10 a 14",
      "role": "Heritage, food et falaises calcaires sans courir.",
      "rhythm": "Une zone par jour: Old Town, Gunung Rapat, Gua Tempurung, journee tampon, puis retour progressif.",
      "details": [
        "Le vrai confort vient du Grab et de la simplicite: pas besoin de scooter dans cette etape.",
        "Tasik Cermin + Sam Poh Tong forment une boucle propre, alors que Gua Tempurung merite sa propre demi-journee.",
        "Le jour tampon du 30 aout protege le voyage si une visite glisse, si la pluie arrive ou si la fatigue monte."
      ],
      "planB": "Si Gua Tempurung devient trop lourd, garder Ipoh centre + cafe blanc + Han Chin ou une seule grotte-temple."
    },
    {
      "city": "Kuala Lumpur final",
      "days": "Jours 15 a 19",
      "role": "Fermeture simple avant le vol retour.",
      "rhythm": "Encore une vraie journee patrimoine, puis achats, valises, dernier diner et sortie aeroport avec marge.",
      "details": [
        "Garder une base KLCC deja reperee reduit les surprises et rend la fin plus calme.",
        "Merdeka, Masjid Negara et IAMM suffisent pour une derniere vraie boucle de visite.",
        "Les deux derniers jours ne doivent pas etre remplis: ils servent a rentrer proprement."
      ],
      "planB": "Si un retard apparait, supprimer d'abord les visites bonus et conserver seulement valises, repas et KLIA Ekspres."
    }
  ],
  "criticalDecisions": [
    {
      "title": "MDAC et entree",
      "trigger": "Dans les 3 jours avant l'arrivee du 17 aout 2026",
      "decision": "Faire la Malaysia Digital Arrival Card uniquement via le portail officiel Immigration et sauvegarder la confirmation.",
      "fallback": "Si le site bloque, reessayer avec un autre navigateur et garder assez de marge aeroport; ne pas payer un site tiers qui promet le meme formulaire."
    },
    {
      "title": "Scooter ou Grab a Langkawi",
      "trigger": "Avant de payer une location",
      "decision": "Location confirmée. Assurez-vous d'avoir le permis international, un casque correct et prenez des photos du scooter au départ.",
      "fallback": "Sinon, garder Grab pour les trajets courts et taxi prive demi-journee pour SkyCab, Kilim ou la boucle nord."
    },
    {
      "title": "SkyCab",
      "trigger": "Matin du Jour 6",
      "decision": "Regarder le ciel avant de partir: si le sommet est clair, monter tot; si les nuages accrochent, inverser avec plage ou visites basses.",
      "fallback": "Reporter SkyCab au premier matin clair et garder Pantai Kok, Craft Complex ou Laman Padi en plan bas."
    },
    {
      "title": "Kilim Geoforest",
      "trigger": "Veille du Jour 7",
      "decision": "Confirmer horaire, point de depart, contenu du bateau, duree et retour avant de bloquer le reste de la journee.",
      "fallback": "Si la mer ou la pluie ne collent pas, passer sur Kuah, Eagle Square, cafe long et route courte."
    },
    {
      "title": "Ferry + ETS vers Ipoh",
      "trigger": "Avant de quitter Langkawi",
      "decision": "Acheter ferry Kuah -> Kuala Perlis et ETS Arau -> Ipoh comme une seule chaine, avec taxi entre les deux.",
      "fallback": "Si le train ne colle pas, choisir une nuit tampon ou un trajet routier plus direct plutot que courir entre jetty et gare."
    },
    {
      "title": "Gua Tempurung",
      "trigger": "Matin du Jour 12",
      "decision": "Choisir le niveau de visite selon energie, chaussures, humidite et timing retour Grab.",
      "fallback": "Si le bloc devient trop sportif, faire Kellie's Castle + Ipoh centre et garder la grotte pour une autre fois."
    }
  ],
  "sources": [
    {
      "title": "ECB - taux EUR/MYR",
      "url": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
      "note": "Reference du 3 juillet 2026 retenue pour les conversions: 1 EUR = 4,6605 MYR."
    },
    {
      "title": "KLIA Ekspres - fares",
      "url": "https://www.kliaekspres.com/products-fares/klia-ekspres/",
      "note": "Tarif adulte KLIA Ekspres observe a RM55."
    },
    {
      "title": "Immigration Department of Malaysia - MDAC",
      "url": "https://imigresen-online.imi.gov.my/mdac/register",
      "note": "Portail officiel retenu pour la Malaysia Digital Arrival Card a remplir dans les 3 jours avant l'arrivee."
    },
    {
      "title": "Immigration Department of Malaysia - Visa Requirement by Country",
      "url": "https://www.imi.gov.my/index.php/en/main-services/visa/visa-requirement-by-country/",
      "note": "Point de controle officiel avant depart pour verifier si une nationalite exige un visa touristique."
    },
    {
      "title": "KTMB - ETS",
      "url": "https://www.ktmb.com.my/ets.html",
      "note": "Repere officiel pour garder les trajets Arau -> Ipoh et Ipoh -> Kuala Lumpur coherents avec les billets ETS."
    },
    {
      "title": "KTMB - ETS timetable 1 June 2026",
      "url": "https://www.ktmb.com.my/traintime.html",
      "note": "Horaires ETS officiels applicables depuis le 1er juin 2026; billets et classes a confirmer dans KITS."
    },
    {
      "title": "Langkawi Ferry Line - online tickets",
      "url": "https://ticket.langkawiferryline.com/",
      "note": "Tarifs et horaires ferry sujets a changement; budget garde RM110 pour deux vers Kuala Perlis."
    },
    {
      "title": "KL Forest Eco Park - Malaysia.travel",
      "url": "https://www.malaysia.travel/explore/kl-forest-eco-park-2",
      "note": "Repere officiel pour horaires; entree non-MyKad observee a RM40/adulte via references tarifaires locales."
    },
    {
      "title": "YouTube - 10 Best Things to do in Kuala Lumpur Malaysia",
      "url": "https://www.youtube.com/watch?v=u2VZQgY47LE",
      "note": "Video utilisee comme inspiration pour recaler les incontournables KL, en respectant les exclusions demandees."
    },
    {
      "title": "Aquaria KLCC - official website",
      "url": "https://aquariaklcc.com/",
      "note": "Repere officiel pour integrer Aquaria KLCC comme visite interieure climatisee."
    },
    {
      "title": "Suria KLCC - Esplanade Lake Symphony",
      "url": "https://www.suriaklcc.com.my/attractions/esplanade-lake-symphony/",
      "note": "Repere officiel pour le spectacle jets d'eau, lumieres et musique devant les tours Petronas."
    },
    {
      "title": "KL Tower - official website",
      "url": "https://kltower.com.my/",
      "note": "Repere officiel pour KL Tower / Menara Kuala Lumpur et les vues panoramiques."
    },
    {
      "title": "Perdana Botanical Garden - Kuala Lumpur",
      "url": "https://www.dbkl.gov.my/",
      "note": "Alternative verte et peu couteuse; budget garde seulement une petite marge transport/boissons."
    },
    {
      "title": "Islamic Arts Museum Malaysia - Visit Us",
      "url": "https://iamm.org.my/visit-us",
      "note": "Tarif adulte observe a RM20."
    },
    {
      "title": "Panorama Langkawi - SkyGlide",
      "url": "https://panoramalangkawi.com/skyglide/",
      "note": "Repere officiel observe pour SkyGlide adulte a RM16."
    },
    {
      "title": "Kilim Geoforest Park - official mangrove tour",
      "url": "https://kilimgeoforestpark.com/kilim-mangrove-tour/",
      "note": "Tour prive publie a RM400 par bateau pour 2h; budget corrige en consequence."
    },
    {
      "title": "Kota Mahsuri - Plan a Visit",
      "url": "https://kotamahsuri.com/plan-a-visit/",
      "note": "Tarif international observe: RM20/adulte, theatre RM25/adulte."
    },
    {
      "title": "Naturally Langkawi - Getting Here",
      "url": "https://naturallylangkawi.my/getting-here-2/",
      "note": "Repere pour garder la logique vols et ferries de Langkawi lisible."
    },
    {
      "title": "Malaysia Travel - Tasik Cermin",
      "url": "https://www.malaysia.travel/explore/tasik-cermin",
      "note": "Repere officiel pour Tasik Cermin dans le bloc Ipoh; ouverture observee 09h00-18h00."
    },
    {
      "title": "Malaysia Travel - Tempurung Cave",
      "url": "https://www.malaysia.travel/explore/tempurung-cave",
      "note": "Source officielle retenue pour Gua Tempurung."
    },
    {
      "title": "Malaysia Travel - Kellie's Castle",
      "url": "https://www.malaysia.travel/explore/kellie-s-castle",
      "note": "Repere officiel pour le stop heritage exterieur autour d'Ipoh."
    },
    {
      "title": "Kellie's Castle - ticketing official",
      "url": "https://www.kelliesfisb.com.my/ticket/kellies-castle",
      "note": "Horaires observes: 09h30-22h00, derniere entree 21h30; tarif etranger a verifier au paiement."
    },
    {
      "title": "Booking - The Platinum Kuala Lumpur by Whitfield",
      "url": "https://www.booking.com/searchresults.fr.html?ss=The+Platinum+Kuala+Lumpur+by+Whitfield",
      "note": "Suite Premier retenue pour les 4 premieres nuits a Kuala Lumpur, du 17 au 21 aout 2026 (225 EUR)."
    },
    {
      "title": "Booking - The Colony By Infinitum KLCC - Aura Suites",
      "url": "https://www.booking.com/searchresults.fr.html?ss=The+Colony+By+Infinitum+KLCC+-+Aura+Suites",
      "note": "Studio réservé pour les 2 dernières nuits à Kuala Lumpur, du 31 août au 2 septembre 2026 (100 EUR)."
    },
    {
      "title": "Booking - Rebungan Resort Langkawi",
      "url": "https://www.booking.com/searchresults.fr.html?ss=Rebungan+Resort+Langkawi",
      "note": "Chambre Lits Jumeaux de Luxe réservée pour Langkawi du 21 au 26 aout 2026: 159 EUR pour 5 nuits."
    },
    {
      "title": "Booking - The Horizon Ipoh By Iconique Espace",
      "url": "https://www.booking.com/searchresults.fr.html?ss=The+Horizon+Ipoh+By+Iconique+Espace",
      "note": "Studio réservé pour Ipoh du 26 au 31 aout 2026: 212 EUR pour 5 nuits."
    }
  ],
  "days": [
    {
      "id": 1,
      "slug": "jour-01",
      "dayLabel": "Jour 1",
      "dateLabel": "Dimanche 16 aout 2026 -> Lundi 17 aout 2026",
      "city": "Genève -> Kuala Lumpur",
      "overnight": "The Platinum Kuala Lumpur by Whitfield",
      "highlight": "Vol au départ de Genève puis arrivée à Kuala Lumpur en fin d'après-midi, avec installation douce.",
      "transportSummary": "Vol international (Genève) + KLIA Ekspres + Grab",
      "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Kuala_Lumpur_Malaysia_Skyline-01.jpg",
      "photoAlt": "Skyline de Kuala Lumpur au debut du voyage",
      "deepDive": "Ce jour sert de sas: sortir proprement de l'aeroport, recuperer une SIM, manger simple et poser les sacs sans ajouter de grosse visite.",
      "segments": [
        {
          "label": "16 aout",
          "title": "Départ de Genève",
          "bullets": [
            "Prévoir le trajet vers Genève et le stationnement de 20 jours.",
            "Prevoir une vraie marge aeroport et garder passeports, billets et cartes dans une pochette unique.",
            "Voyager leger en cabine pour que l'arrivee a KL reste simple."
          ]
        },
        {
          "label": "17 aout fin d'après-midi",
          "title": "Arrivee a KL",
          "bullets": [
            "Atterrissage à 16h50.",
            "SIM, retrait de cash, KLIA Ekspres jusqu'a KL Sentral, puis Grab vers The Platinum Kuala Lumpur."
          ]
        },
        {
          "label": "Soir",
          "title": "Premier repas simple",
          "bullets": [
            "Rester proche du logement ou manger a KL Sentral selon l'heure d'arrivee et la fatigue.",
            "Aucun objectif culturel fixe ce premier soir."
          ]
        }
      ],
      "access": {
        "metro": "Parcours conseille: départ de Genève, arrivée KLIA, SIM / cash, KLIA Ekspres jusqu'a KL Sentral, puis Grab vers The Platinum Kuala Lumpur.",
        "taxi": "Option confort: Grab direct KLIA -> logement si vous etes tres charges ou trop fatigues, plus simple mais nettement plus cher."
      },
      "tips": [
        "Ne programme rien de culturel ce premier jour reel.",
        "Garde billets et adresse du logement accessibles hors ligne.",
        "Retire un peu de cash des l'aeroport pour les petites depenses."
      ],
      "toiletStops": [
        {
          "label": "KLIA - toilettes terminal",
          "query": "toilets near KLIA Terminal Kuala Lumpur International Airport",
          "note": "A utiliser avant KLIA Ekspres ou Grab: le plus fiable juste apres le vol."
        },
        {
          "label": "KL Sentral / NU Sentral",
          "query": "toilets near KL Sentral NU Sentral Kuala Lumpur",
          "note": "Point de securite pendant la correspondance train / Grab."
        },
        {
          "label": "The Platinum / logement",
          "query": "toilets near The Platinum Kuala Lumpur by Whitfield",
          "note": "Repere proche du logement pour le premier soir."
        }
      ],
      "budget": [
        {
          "label": "Vols long-courriers Genève -> Kuala Lumpur (2 adultes)",
          "myr": 7454,
          "kind": "estimate"
        },
        {
          "label": "Parking et péage (Genève)",
          "myr": 699,
          "kind": "estimate"
        },
        {
          "label": "SIM / eSIM et retrait initial",
          "myr": 80,
          "kind": "estimate"
        },
        {
          "label": "KLIA Ekspres (2 adultes)",
          "myr": 110,
          "kind": "official"
        },
        {
          "label": "Grab KL Sentral -> logement",
          "myr": 30,
          "kind": "estimate"
        },
        {
          "label": "Première nuit The Platinum KL",
          "myr": 262,
          "kind": "estimate"
        },
        {
          "label": "Repas et boissons simples",
          "myr": 50,
          "kind": "estimate"
        },
        {
          "label": "Marge arrivee (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "KLIA -> KL Sentral",
          "timing": "17 aout fin d'après-midi",
          "ticket": "RM55/adulte observe",
          "gettingThere": "KLIA Ekspres jusqu'a KL Sentral, puis Grab vers The Platinum Kuala Lumpur",
          "whyGo": "La sortie la plus fiable apres un long-courrier, avec un seul changement avant le logement."
        },
        {
          "name": "The Platinum Kuala Lumpur by Whitfield",
          "timing": "Installation du 17 aout",
          "ticket": "225 EUR / environ 1 048 MYR pour 4 nuits, soit 262 MYR / nuit",
          "gettingThere": "Grab direct depuis KL Sentral",
          "whyGo": "Base retenue pour les 4 premieres nuits, avec vue KLCC et piscine."
        }
      ],
      "ultraPlan": [
        {
          "period": "17 aout fin d'après-midi",
          "time": "16h50 -> 19h00",
          "visit": "KLIA, SIM et transfert",
          "address": "Kuala Lumpur International Airport, Sepang",
          "metro": "KLIA Ekspres: KLIA -> KL Sentral, puis Grab KL Sentral -> The Platinum Kuala Lumpur.",
          "taxi": "Alternative directe: Grab KLIA -> logement si les sacs ou la fatigue rendent le train penible.",
          "visitCost": "KLIA Ekspres: 110 MYR pour 2 + Grab KL Sentral -> logement: environ 30 MYR",
          "eat": "Snack ou repas rapide a KL Sentral.",
          "foodAddress": "KLIA / KL Sentral",
          "foodCost": "40 MYR pour 2",
          "drink": "Eau + boisson froide.",
          "note": "Parcours simple: aeroport -> KL Sentral -> logement. Ne pas ajouter de visite avant d'avoir pose les sacs."
        },
        {
          "period": "Soir",
          "time": "Installation et repas",
          "visit": "The Platinum Kuala Lumpur by Whitfield",
          "address": "The Platinum Kuala Lumpur by Whitfield, KLCC",
          "metro": "Aucun besoin si vous venez avec les sacs.",
          "taxi": "Grab depuis KL Sentral.",
          "visitCost": "Transfert urbain: 30 MYR pour 2",
          "eat": "Repas simple proche du logement.",
          "foodAddress": "Secteur logement / KL Sentral selon fatigue",
          "foodCost": "50 MYR pour 2",
          "drink": "Teh tarik, eau ou jus frais.",
          "note": "Ne pas charger cette journee, c'est ce qui protege la suite."
        }
      ]
    },
    {
      "id": 2,
      "slug": "jour-02",
      "dayLabel": "Jour 2",
      "dateLabel": "Mardi 18 aout 2026",
      "city": "Kuala Lumpur",
      "overnight": "The Platinum Kuala Lumpur by Whitfield",
      "highlight": "Foret urbaine et jardins Perdana pour lancer KL sans se disperser ni payer une visite trop chere.",
      "transportSummary": "Monorail/MRT + Grab",
      "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/KL_Perdana_Botanical_Garden_5.jpg",
      "photoAlt": "Vegetation luxuriante au KL Forest Eco Park et jardins Perdana",
      "deepDive": "Beaucoup de vert, une visite forte et un temple photogenique: la journee installe KL tout en restant simple.",
      "segments": [
        {
          "label": "Matin",
          "title": "KL Forest Eco Park",
          "bullets": [
            "Partir vers 7h30 pour eviter chaleur et humidite.",
            "Canopy si ouvert, sinon boucle verte courte."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Perdana Botanical Gardens + Orchid Garden",
          "bullets": [
            "Grab direct depuis le parc forestier.",
            "Balade gratuite ou peu couteuse: Lake Gardens, zones ombragees, Orchid Garden si ouvert."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Retour logement, piscine ou pause fraiche",
          "bullets": [
            "Garder une vraie pause apres les jardins.",
            "Diner simple le soir pres du logement."
          ]
        }
      ],
      "access": {
        "metro": "Raja Chulan ou Dang Wangi pour approcher le parc.",
        "taxi": "Grab conseille entre Forest Eco Park, Perdana Gardens et le logement."
      },
      "tips": [
        "Eau, chapeau et chaussures qui accrochent.",
        "Le jour 3 se concentre sur KL Tower, Aquaria KLCC, Petronas/KLCC et Jalan Alor."
      ],
      "toiletStops": [
        {
          "label": "Avant KL Forest Eco Park",
          "query": "toilets near KL Forest Eco Park Kuala Lumpur",
          "note": "A verifier avant d'entrer dans le parc; ne pas attendre d'etre au milieu de la balade."
        },
        {
          "label": "Perdana Botanical Gardens",
          "query": "toilets near Perdana Botanical Gardens Kuala Lumpur",
          "note": "Repere principal pour la partie jardins / pause verte."
        },
        {
          "label": "Retour Bukit Bintang / Lot 10",
          "query": "toilets near Lot 10 Hutong Bukit Bintang",
          "note": "Option plus propre et facile si vous revenez manger ou faire une pause en ville."
        }
      ],
      "budget": [
        {
          "label": "Nuit The Platinum KL",
          "myr": 262,
          "kind": "estimate"
        },
        {
          "label": "KL Forest Eco Park / marge entree",
          "myr": 80,
          "kind": "estimate"
        },
        {
          "label": "Perdana Botanical Gardens / Orchid Garden (marge pour 2)",
          "myr": 20,
          "kind": "estimate"
        },
        {
          "label": "Grabs du jour (métro + Grab)",
          "myr": 30,
          "kind": "estimate"
        },
        {
          "label": "Repas et boissons",
          "myr": 80,
          "kind": "estimate"
        },
        {
          "label": "Marge chaleur / pauses (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "KL Forest Eco Park",
          "timing": "1h30 a 2h",
          "ticket": "Canopy walk a verifier sur place",
          "gettingThere": "Bukit Nanas / Raja Chulan puis marche",
          "whyGo": "Une respiration tropicale dans la ville."
        },
        {
          "name": "Perdana Botanical Gardens + Orchid Garden",
          "timing": "1h30 a 2h tranquilles",
          "ticket": "Gratuit ou petite marge selon zones ouvertes",
          "gettingThere": "Grab depuis le parc forestier",
          "whyGo": "Une alternative verte, calme et beaucoup plus raisonnable pour cette journee."
        },
        {
          "name": "Retour logement / piscine",
          "timing": "Fin d'apres-midi libre",
          "ticket": "Libre",
          "gettingThere": "Grab ou retour simple",
          "whyGo": "Eviter de surcharger le premier vrai jour a Kuala Lumpur."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "07h30 -> 10h30",
          "visit": "KL Forest Eco Park",
          "address": "Jalan Raja Chulan, Kuala Lumpur",
          "metro": "Monorail Raja Chulan ou Bukit Nanas.",
          "taxi": "Grab depuis Bukit Bintang: 12 a 18 MYR.",
          "visitCost": "Marge entree/canopy: 80 MYR pour 2",
          "eat": "Petit-dej avant depart dans le quartier.",
          "foodAddress": "Bukit Bintang / Chow Kit",
          "foodCost": "45 MYR pour 2",
          "drink": "Cafe et eau avant la marche.",
          "note": "Faire le vert en premier protege la journee de la chaleur."
        },
        {
          "period": "Apres-midi",
          "time": "13h30 -> 16h00",
          "visit": "Perdana Botanical Gardens + Orchid Garden",
          "address": "Perdana Botanical Garden, Kuala Lumpur",
          "metro": "Peu pratique en transport lourd.",
          "taxi": "Grab direct depuis le parc forestier.",
          "visitCost": "20 MYR pour 2 en marge prudente",
          "eat": "Lunch local simple avant Perdana: Lot 10 Hutong, food court proche Bukit Bintang ou kopitiam sur le trajet.",
          "foodAddress": "Lot 10 Hutong / Bukit Bintang",
          "foodCost": "55 MYR pour 2",
          "drink": "Boissons fraiches et pause a l'ombre.",
          "note": "On garde une vraie respiration verte sans payer une visite secondaire trop chere."
        },
        {
          "period": "Soir / diner",
          "time": "19h30 -> 21h30",
          "visit": "Diner simple + piscine/logement",
          "address": "The Platinum Kuala Lumpur by Whitfield",
          "metro": "Retour simple selon fatigue.",
          "taxi": "Grab Perdana Gardens -> logement.",
          "visitCost": "Libre",
          "eat": "Diner simple le soir pres du logement, Lot 10 Hutong ou Jalan Alor.",
          "foodAddress": "Bukit Bintang",
          "foodCost": "85 MYR pour 2",
          "drink": "Dessert ou boisson au retour.",
          "note": "Le soir reste tranquille: piscine, logement, marche courte si envie."
        }
      ]
    },
    {
      "id": 3,
      "slug": "jour-03",
      "dayLabel": "Jour 3",
      "dateLabel": "Mercredi 19 aout 2026",
      "city": "Kuala Lumpur",
      "overnight": "The Platinum Kuala Lumpur by Whitfield",
      "highlight": "KL Tower le matin, Aquaria KLCC au frais l'apres-midi, puis Petronas / KLCC et spectacle Lake Symphony le soir.",
      "transportSummary": "Monorail/LRT + marche KLCC + Grab ponctuel",
      "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Petronas_Twin_Towers_Kuala_Lumpur_Malaysia.jpg",
      "photoAlt": "Tours Petronas et skyline de Kuala Lumpur",
      "deepDive": "Journee construite avec les classiques de la video: vue haute sur la ville, aquarium, KLCC/Petronas et spectacle des jets d'eau Lake Symphony. Tout reste proche du logement pour eviter les grands trajets deux jours de suite.",
      "segments": [
        {
          "label": "Matin",
          "title": "KL Tower / Menara Kuala Lumpur",
          "bullets": [
            "Partir le matin pour la vue sur la skyline.",
            "Choisir observation deck simple; Sky Deck seulement si meteo claire."
          ]
        },
        {
          "label": "Repas du midi",
          "title": "Bukit Bintang / Lot 10 Hutong",
          "bullets": [
            "Food court local et simple pour garder le budget.",
            "Revenir ensuite vers KLCC pour Aquaria."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Aquaria KLCC + KLCC Park",
          "bullets": [
            "Aquaria au frais pendant les heures chaudes.",
            "Finir par KLCC Park et les tours Petronas quand la lumiere baisse."
          ]
        },
        {
          "label": "Soir",
          "title": "Lake Symphony / jets d'eau Petronas",
          "bullets": [
            "Se placer cote esplanade de Suria KLCC.",
            "Viser le show son et lumiere de 20h00 ou 20h30, puis retour simple au logement."
          ]
        }
      ],
      "access": {
        "metro": "Monorail Raja Chulan / Bukit Nanas pour KL Tower, puis LRT ou marche vers KLCC selon chaleur.",
        "taxi": "Grab court utile entre KL Tower, Bukit Bintang et KLCC si humidite ou pluie."
      },
      "tips": [
        "Aquaria KLCC remplace les visites exterieures pendant les heures chaudes.",
        "Garder Petronas / KLCC pour la fin de journee: meilleur rendu visuel et trajet simple depuis l'hotel.",
        "Pour Lake Symphony, viser 20h00 ou 20h30 et verifier les horaires le jour meme."
      ],
      "toiletStops": [
        {
          "label": "KL Tower",
          "query": "toilets near KL Tower Kuala Lumpur",
          "note": "A utiliser pendant le bloc du matin avant de redescendre vers Bukit Bintang."
        },
        {
          "label": "Aquaria KLCC / Convention Centre",
          "query": "toilets near Aquaria KLCC Kuala Lumpur Convention Centre",
          "note": "Point le plus pratique pendant la visite climatisee."
        },
        {
          "label": "Suria KLCC / Lake Symphony",
          "query": "toilets near Suria KLCC Lake Symphony",
          "note": "Le meilleur repere avant le spectacle des jets d'eau et le retour hotel."
        }
      ],
      "budget": [
        {
          "label": "Nuit The Platinum KL",
          "myr": 262,
          "kind": "estimate"
        },
        {
          "label": "Repas, snacks et cafes",
          "myr": 80,
          "kind": "estimate"
        },
        {
          "label": "Transports urbains / Grab",
          "myr": 45,
          "kind": "estimate"
        },
        {
          "label": "KL Tower + Aquaria KLCC",
          "myr": 260,
          "kind": "estimate"
        },
        {
          "label": "Marge pluie / pauses (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "KL Tower / Menara Kuala Lumpur",
          "timing": "Matin, 1h a 1h30",
          "ticket": "Observation deck ou Sky Deck selon budget et meteo",
          "gettingThere": "Monorail Raja Chulan / Bukit Nanas puis marche ou Grab court",
          "whyGo": "Vue panoramique sur Kuala Lumpur, bon repere pour comprendre la ville."
        },
        {
          "name": "Aquaria KLCC",
          "timing": "Apres-midi, 1h30 a 2h",
          "ticket": "Billets a reserver/verifier selon promo",
          "gettingThere": "KLCC / Kuala Lumpur Convention Centre",
          "whyGo": "Bonne visite interieure et climatisee, parfaite entre deux blocs exterieurs."
        },
        {
          "name": "Lake Symphony / Petronas de nuit",
          "timing": "Soir, viser 20h00 ou 20h30",
          "ticket": "Spectacle libre; diner selon consommation",
          "gettingThere": "A pied / Grab court depuis KLCC ou logement",
          "whyGo": "Voir les tours Petronas de nuit avec le spectacle des jets d'eau, lumieres et musique de KLCC."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "08h30 -> 11h00",
          "visit": "KL Tower / Menara Kuala Lumpur",
          "address": "2 Jalan Punchak, Kuala Lumpur",
          "metro": "Monorail Raja Chulan ou Bukit Nanas, puis marche courte si la chaleur reste correcte.",
          "taxi": "Grab court depuis l'hotel si vous voulez eviter la montee.",
          "visitCost": "Prevoir selon niveau choisi: observation deck simple ou Sky Deck",
          "eat": "Petit-dej simple avant depart ou cafe proche KL Tower.",
          "foodAddress": "Hotel / KL Tower",
          "foodCost": "35 MYR pour 2",
          "drink": "Eau, cafe ou boisson fraiche.",
          "note": "Vue le matin avant chaleur et nuages de fin de journee."
        },
        {
          "period": "Repas du midi",
          "time": "12h30 -> 13h30",
          "visit": "Lot 10 Hutong / Bukit Bintang",
          "address": "Lot 10 Hutong, Bukit Bintang",
          "metro": "Monorail Bukit Bintang ou Grab court depuis KL Tower.",
          "taxi": "Grab court si chaleur.",
          "visitCost": "Libre",
          "eat": "Char kway teow, noodles, rice plate ou chicken rice au food court.",
          "foodAddress": "Lot 10 Hutong",
          "foodCost": "55 MYR pour 2",
          "drink": "Jus frais ou teh ais.",
          "note": "Repas local simple avant Aquaria KLCC."
        },
        {
          "period": "Apres-midi",
          "time": "14h00 -> 18h00",
          "visit": "Aquaria KLCC + KLCC Park / Petronas",
          "address": "Kuala Lumpur Convention Centre / KLCC Park",
          "metro": "MRT/LRT vers KLCC ou Grab court depuis Bukit Bintang.",
          "taxi": "Grab court si pluie ou fatigue.",
          "visitCost": "Aquaria KLCC: billet a verifier selon date et promo",
          "eat": "Pause ou boisson a Suria KLCC; diner cale apres le spectacle.",
          "foodAddress": "KLCC / Bukit Bintang",
          "foodCost": "45 MYR pour 2",
          "drink": "Dessert ou boisson climatisee.",
          "note": "Aquaria sert de pause fraiche; Petronas et KLCC Park se gardent pour la lumiere du soir."
        },
        {
          "period": "Soir / diner",
          "time": "19h30 -> 21h30",
          "visit": "Lake Symphony / spectacle jets d'eau KLCC",
          "address": "Esplanade, Suria KLCC / KLCC Park",
          "metro": "A pied depuis KLCC ou retour simple via LRT KLCC.",
          "taxi": "Grab court au retour si pluie, fatigue ou forte affluence.",
          "visitCost": "Spectacle libre; show son et lumiere indique a 20h00, 20h30, 21h00, 21h30 et 22h00 selon Suria KLCC",
          "eat": "Diner simple a Suria KLCC avant/apres le show, ou Jalan Alor si vous voulez prolonger.",
          "foodAddress": "Suria KLCC / Jalan Alor",
          "foodCost": "85 MYR pour 2",
          "drink": "Eau ou boisson douce.",
          "note": "Se placer cote esplanade du lac pour voir les jets d'eau avec les tours Petronas en arriere-plan."
        }
      ]
    },
    {
      "id": 4,
      "slug": "jour-04",
      "dayLabel": "Jour 4",
      "dateLabel": "Jeudi 20 aout 2026",
      "city": "Kuala Lumpur",
      "overnight": "The Platinum Kuala Lumpur by Whitfield",
      "highlight": "Batu Caves le matin, puis Chinatown / Petaling Street et Central Market en apres-midi souple.",
      "transportSummary": "KTM/MRT + marche + Grab ponctuel",
      "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Batu_Caves_stairs_2022-05.jpg",
      "photoAlt": "Escaliers colores de Batu Caves",
      "deepDive": "Cette journee garde Batu Caves en premier, car c'est le deplacement le plus long et la chaleur monte vite. L'apres-midi revient vers Chinatown, Petaling Street et Central Market: plus facile, plus urbain, et simple a couper si vous devez preparer Langkawi.",
      "segments": [
        {
          "label": "Matin",
          "title": "Batu Caves",
          "bullets": [
            "Partir tot directement depuis l'hotel.",
            "Monter les 272 marches avant la grosse chaleur."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Chinatown / Petaling Street / Central Market",
          "bullets": [
            "Retour en ville pour une boucle courte et vivante.",
            "Central Market au frais si la chaleur ou la pluie montent."
          ]
        },
        {
          "label": "Soir",
          "title": "Retour logement / preparation Langkawi",
          "bullets": [
            "Diner simple proche logement ou Jalan Alor si energie.",
            "Verifier vol, bagages et depart KLIA2."
          ]
        }
      ],
      "access": {
        "metro": "KTM Komuter jusqu'a Batu Caves via KL Sentral; retour possible vers Pasar Seni pour Chinatown / Central Market.",
        "taxi": "Grab possible hotel -> Batu Caves le matin, puis Grab ou MRT/KTM selon fatigue au retour."
      },
      "tips": [
        "Tenue respectueuse pour Batu Caves: epaules couvertes et short tres court a eviter.",
        "Apres Batu Caves, Chinatown / Central Market reste optionnel si la chaleur ou la fatigue montent.",
        "Verifier bagages AirAsia avant de dormir."
      ],
      "toiletStops": [
        {
          "label": "Batu Caves",
          "query": "toilets near Batu Caves Kuala Lumpur",
          "note": "A reperer en arrivant; qualite variable, prevoir mouchoirs et gel."
        },
        {
          "label": "Central Market",
          "query": "toilets near Central Market Kuala Lumpur",
          "note": "Meilleur point toilette pour Chinatown / Petaling Street."
        },
        {
          "label": "NU Sentral / KL Sentral",
          "query": "toilets near NU Sentral KL Sentral",
          "note": "Plan de secours fiable si vous repassez par KL Sentral."
        }
      ],
      "budget": [
        {
          "label": "Nuit The Platinum KL",
          "myr": 262,
          "kind": "estimate"
        },
        {
          "label": "Batu Caves / petites donations",
          "myr": 20,
          "kind": "estimate"
        },
        {
          "label": "Repas du jour",
          "myr": 130,
          "kind": "estimate"
        },
        {
          "label": "Transports Batu Caves / KLCC",
          "myr": 80,
          "kind": "estimate"
        },
        {
          "label": "Marge bagages / courses utiles (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Batu Caves",
          "timing": "Matin, 1h30 a 2h",
          "ticket": "Temple Cave libre; petites donations / grottes annexes selon envie",
          "gettingThere": "KTM Komuter jusqu'a Batu Caves ou Grab tot depuis l'hotel",
          "whyGo": "Un des sites les plus iconiques de Kuala Lumpur: grottes calcaires, temple hindou et escaliers colores."
        },
        {
          "name": "Chinatown / Petaling Street / Central Market",
          "timing": "Apres-midi, 1h30 a 2h",
          "ticket": "Libre hors achats",
          "gettingThere": "MRT Pasar Seni ou retour via KL Sentral",
          "whyGo": "Quartier vivant, marche, street food, temples de quartier et option climatisee a Central Market."
        },
        {
          "name": "Retour hotel / Jalan Alor si energie",
          "timing": "Soiree courte",
          "ticket": "Libre hors repas",
          "gettingThere": "Grab court ou monorail selon fatigue",
          "whyGo": "Proteger le vol vers Langkawi du lendemain sans perdre la derniere soiree KL."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "07h30 -> 11h30",
          "visit": "Batu Caves",
          "address": "Gombak, Batu Caves, Selangor",
          "metro": "KTM Komuter vers Batu Caves via KL Sentral si vous voulez eviter le trafic.",
          "taxi": "Grab tot depuis l'hotel possible; retour en Grab si chaleur.",
          "visitCost": "Temple Cave libre; prevoir 20 MYR de marge pour donation / grotte annexe",
          "eat": "Petit-dej simple avant depart ou roti / boisson pres de Batu Caves.",
          "foodAddress": "Hotel / Batu Caves",
          "foodCost": "45 MYR pour 2",
          "drink": "Eau avant les marches.",
          "note": "Visite a faire en premier: long deplacement, escaliers et chaleur."
        },
        {
          "period": "Apres-midi",
          "time": "13h00 -> 16h00",
          "visit": "Chinatown / Petaling Street / Central Market",
          "address": "Petaling Street / Central Market, Kuala Lumpur",
          "metro": "Retour via KL Sentral puis MRT Pasar Seni si l'energie suit.",
          "taxi": "Grab Batu Caves -> Pasar Seni si vous voulez simplifier.",
          "visitCost": "Libre hors achats",
          "eat": "Lunch local simple autour de Petaling Street: chicken rice, noodles ou kopitiam.",
          "foodAddress": "Petaling Street / Pasar Seni",
          "foodCost": "55 MYR pour 2",
          "drink": "Boisson froide, cafe ou pause climatisee.",
          "note": "Option modulable: si Batu Caves a fatigue, couper Chinatown et rentrer piscine/logement."
        },
        {
          "period": "Soir / diner",
          "time": "19h30 -> 21h30",
          "visit": "Diner proche + preparation Langkawi",
          "address": "The Platinum / Bukit Bintang",
          "metro": "Monorail ou Grab selon fatigue.",
          "taxi": "Grab court au retour si pluie.",
          "visitCost": "Libre",
          "eat": "Diner simple proche logement ou Jalan Alor si vous voulez une derniere ambiance street food.",
          "foodAddress": "Bukit Bintang / Jalan Alor",
          "foodCost": "75 MYR pour 2",
          "drink": "Boisson douce, puis retour sacs.",
          "note": "Soiree courte: sacs, vol AirAsia, depart KLIA2 et repos."
        }
      ]
    },
    {
      "id": 5,
      "slug": "jour-05",
      "dayLabel": "Jour 5",
      "dateLabel": "Vendredi 21 aout 2026",
      "city": "Kuala Lumpur -> Langkawi",
      "overnight": "Rebungan Resort Langkawi",
      "highlight": "Vol court vers Langkawi, depot des affaires a l'hotel, recuperation du scooter, puis premiere plage.",
      "transportSummary": "Grab + vol AirAsia + scooter/Grab",
      "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Langkawi_Pantai_Cenang.jpg",
      "photoAlt": "Bord de plage a Pantai Cenang",
      "deepDive": "Le changement de rythme doit rester respirable: aeroport, depot des affaires au Rebungan Resort Langkawi, recuperation du scooter chez Langkawi Paradise Enterprise, puis plage douce sans grosse boucle le premier soir.",
      "segments": [
        {
          "label": "Matin",
          "title": "Depart KLIA2",
          "bullets": [
            "Partir large vers KLIA2.",
            "Verifier bagages inclus, cartes d'embarquement et passeports."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Depot hotel puis scooter",
          "bullets": [
            "Aller d'abord au Rebungan Resort Langkawi pour poser les affaires.",
            "Ensuite recuperer le scooter chez Langkawi Paradise Enterprise, Pantai Cenang, Kampung Lubok Buaya, 07000 Langkawi, Kedah.",
            "Faire photos/video du scooter avant depart: rayures, compteur, pneus, freins, casque et niveau d'essence."
          ]
        },
        {
          "label": "Soir",
          "title": "Cenang easy mode",
          "bullets": [
            "Promenade de reperage.",
            "Diner simple proche du logement."
          ]
        }
      ],
      "access": {
        "metro": "A KL, Grab jusqu'a KLIA2 avec les sacs.",
        "taxi": "A Langkawi: Grab aeroport -> Rebungan Resort pour poser les sacs, puis Grab court vers Langkawi Paradise Enterprise si le scooter n'est pas livre a l'hotel."
      },
      "tips": [
        "Loueur retenu: Langkawi Paradise Enterprise, Pantai Cenang, Kampung Lubok Buaya, 07000 Langkawi, Kedah; bon volume d'avis positifs, environ 4,8/5 avec plus de 160 avis Google selon Wanderlog.",
        "Contacter le loueur avant l'arrivee pour confirmer disponibilite, prix, caution, permis demande et possibilite de livraison au Rebungan Resort.",
        "Verifier freins, pneus, casque, photos et caution du scooter.",
        "Ne pas conduire de nuit si vous ne le sentez pas."
      ],
      "budget": [
        {
          "label": "Nuit Rebungan Resort Langkawi",
          "myr": 148,
          "kind": "estimate"
        },
        {
          "label": "Vol KL -> Langkawi (2 adultes, bagages prudents)",
          "myr": 260,
          "kind": "estimate"
        },
        {
          "label": "Grab vers KLIA2",
          "myr": 55,
          "kind": "estimate"
        },
        {
          "label": "Transfert Langkawi + scooter jour 1",
          "myr": 75,
          "kind": "estimate"
        },
        {
          "label": "Repas du jour",
          "myr": 130,
          "kind": "estimate"
        },
        {
          "label": "Marge aeroport / snacks",
          "myr": 60,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Vol KL -> Langkawi",
          "timing": "55 min de vol",
          "ticket": "Prevoir bagages et frais AirAsia",
          "gettingThere": "KLIA2 puis aeroport de Langkawi",
          "whyGo": "La bascule la plus nette du bloc urbain au bloc ile."
        },
        {
          "name": "Langkawi Paradise Enterprise",
          "timing": "Apres depot des affaires a l'hotel",
          "ticket": "Scooter a confirmer avant arrivee; prix/caution selon modele",
          "gettingThere": "Grab depuis Rebungan Resort ou livraison a l'hotel si le loueur accepte",
          "whyGo": "Loueur a Pantai Cenang avec beaucoup d'avis positifs, pratique pour demarrer les 5 nuits sur l'ile."
        },
        {
          "name": "Pantai Cenang",
          "timing": "Fin d'apres-midi libre",
          "ticket": "Libre",
          "gettingThere": "Scooter depuis le loueur ou Grab si vous preferez attendre",
          "whyGo": "La plage la plus simple pour commencer Langkawi."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "08h00 -> 12h00",
          "visit": "KLIA2 puis vol Langkawi",
          "address": "KLIA2 -> Langkawi International Airport",
          "metro": "Pas utile avec les sacs.",
          "taxi": "Grab logement -> KLIA2.",
          "visitCost": "Vol + bagages: 260 MYR pour 2",
          "eat": "Petit-dej aeroport ou snack.",
          "foodAddress": "KLIA2",
          "foodCost": "55 MYR pour 2",
          "drink": "Eau et cafe.",
          "note": "Compter large pour ne pas transformer ce transfert en stress."
        },
        {
          "period": "Apres-midi",
          "time": "14h00 -> 18h00",
          "visit": "Depot hotel, recuperation scooter, puis Pantai Cenang",
          "address": "Rebungan Resort Langkawi -> Langkawi Paradise Enterprise, Pantai Cenang, Kampung Lubok Buaya, 07000 Langkawi, Kedah -> Pantai Cenang",
          "metro": "Aucun transport lourd.",
          "taxi": "Grab aeroport -> hotel, puis Grab court vers le loueur si le scooter n'est pas livre.",
          "visitCost": "Transfert + scooter jour 1: 75 MYR pour 2",
          "eat": "Lunch tardif simple: Tomato Nasi Kandar, Amani Cafeteria ou warung de Cenang.",
          "foodAddress": "Pantai Cenang",
          "foodCost": "55 MYR pour 2",
          "drink": "Noix de coco ou boisson froide.",
          "note": "Ordre important: sacs poses a l'hotel d'abord, scooter ensuite, puis plage seulement si vous etes encore frais."
        }
      ]
    },
    {
      "id": 6,
      "slug": "jour-06",
      "dayLabel": "Jour 6",
      "dateLabel": "Samedi 22 aout 2026",
      "city": "Langkawi",
      "overnight": "Rebungan Resort Langkawi",
      "highlight": "SkyCab, SkyBridge et plage: la grande image de Langkawi.",
      "transportSummary": "Scooter ou Grab",
      "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Langkawi_(Unsplash).jpg",
      "photoAlt": "Relief et ciel de Langkawi",
      "deepDive": "SkyCab d'abord, plage ensuite: l'ordre garde la journee lisible et laisse une option meteo si les sommets sont couverts.",
      "segments": [
        {
          "label": "Matin",
          "title": "SkyCab avant la foule",
          "bullets": [
            "Partir assez tot vers Oriental Village.",
            "Verifier visibilite avant d'acheter tous les extras."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Pantai Kok ou Tanjung Rhu",
          "bullets": [
            "Pause dejeuner puis plage.",
            "Ne pas empiler trop d'arrets secondaires."
          ]
        },
        {
          "label": "Soir",
          "title": "Sunset Cenang",
          "bullets": [
            "Retour avant la fatigue.",
            "Diner simple et coucher raisonnable."
          ]
        }
      ],
      "access": {
        "metro": "Aucun transport collectif lourd.",
        "taxi": "Sans scooter, faire SkyCab en Grab puis plage avec second trajet."
      },
      "tips": [
        "La meteo decide beaucoup ce jour-la.",
        "Arriver avant 11h si possible."
      ],
      "budget": [
        {
          "label": "Nuit Rebungan Resort Langkawi",
          "myr": 148,
          "kind": "estimate"
        },
        {
          "label": "SkyCab / SkyBridge / SkyGlide (2 adultes)",
          "myr": 180,
          "kind": "estimate"
        },
        {
          "label": "Scooter / Grab du jour",
          "myr": 70,
          "kind": "estimate"
        },
        {
          "label": "Repas du jour",
          "myr": 140,
          "kind": "estimate"
        },
        {
          "label": "Carburant / parking (optimisé)",
          "myr": 10,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "SkyCab",
          "timing": "2h a 3h",
          "ticket": "Tarif a reverifier selon package; base SkyCab + SkyBridge/SkyGlide, enveloppe prudente RM180 pour 2",
          "gettingThere": "Scooter ou Grab jusqu'a Oriental Village",
          "whyGo": "La grande image carte postale de Langkawi."
        },
        {
          "name": "SkyBridge / SkyGlide",
          "timing": "30 a 45 min supplementaires",
          "ticket": "SkyGlide adulte observe a RM16",
          "gettingThere": "Depuis la station haute du SkyCab",
          "whyGo": "Le prolongement naturel si la meteo est bonne."
        },
        {
          "name": "Plage en deuxieme temps",
          "timing": "2h souples",
          "ticket": "Libre",
          "gettingThere": "Route vers Pantai Kok, Tanjung Rhu ou Cenang",
          "whyGo": "Redonner de l'air apres la montagne."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "08h30 -> 12h00",
          "visit": "SkyCab et SkyBridge",
          "address": "Oriental Village, Langkawi",
          "metro": "Sans objet.",
          "taxi": "Scooter ou Grab depuis Cenang.",
          "visitCost": "180 MYR pour 2 en enveloppe prudente selon package",
          "eat": "Petit-dej avant depart.",
          "foodAddress": "Cenang / Oriental Village",
          "foodCost": "55 MYR pour 2",
          "drink": "Eau et boisson fraiche.",
          "note": "Si les sommets sont couverts, inverser avec une plage."
        },
        {
          "period": "Apres-midi",
          "time": "13h00 -> 17h30",
          "visit": "Pantai Kok ou Tanjung Rhu",
          "address": "Cote ouest ou nord de Langkawi",
          "metro": "Sans objet.",
          "taxi": "Scooter ou Grab.",
          "visitCost": "Libre",
          "eat": "Lunch simple en route: warung, nasi campur ou Tomato Nasi Kandar au retour vers Cenang.",
          "foodAddress": "Pantai Kok / Cenang",
          "foodCost": "55 MYR pour 2",
          "drink": "Noix de coco ou jus frais.",
          "note": "Une seule vraie plage suffit."
        }
      ]
    },
    {
      "id": 7,
      "slug": "jour-07",
      "dayLabel": "Jour 7",
      "dateLabel": "Dimanche 23 aout 2026",
      "city": "Langkawi",
      "overnight": "Rebungan Resort Langkawi",
      "highlight": "Kilim Geoforest le matin, puis Kuah et Eagle Square en apres-midi court, retour avant le diner.",
      "transportSummary": "Scooter + bateau",
      "photo": "assets/photos/visits/eagle-square.jpg",
      "photoAlt": "Eagle Square a Kuah",
      "deepDive": "La journee donne deux visages de Langkawi: mangroves et relief karstique, puis Kuah plus urbain et local.",
      "segments": [
        {
          "label": "Matin",
          "title": "Route vers Kilim",
          "bullets": [
            "Partir tot avec sac etanche et eau.",
            "Choisir un tour clair plutot qu'un package surcharge."
          ]
        },
        {
          "label": "Milieu de journee",
          "title": "Tour mangroves Kilim",
          "bullets": [
            "Compter 3 a 4h selon formule.",
            "Retour via Kuah si l'energie suit."
          ]
        },
        {
          "label": "Fin d'apres-midi",
          "title": "Eagle Square",
          "bullets": [
            "Bloc photo court apres Kilim, pas une sortie de nuit.",
            "Retour avant le diner si scooter."
          ]
        }
      ],
      "access": {
        "metro": "Aucun.",
        "taxi": "Sans scooter, organiser un retour avec l'agence ou reserver un taxi."
      },
      "tips": [
        "Prevoir cash et protection etanche.",
        "Si la mer est agitee, enlever les options annexes."
      ],
      "budget": [
        {
          "label": "Nuit Rebungan Resort Langkawi",
          "myr": 148,
          "kind": "estimate"
        },
        {
          "label": "Tour mangroves Kilim prive 2h (bateau)",
          "myr": 400,
          "kind": "official"
        },
        {
          "label": "Scooter / Grab du jour",
          "myr": 70,
          "kind": "estimate"
        },
        {
          "label": "Repas du jour",
          "myr": 150,
          "kind": "estimate"
        },
        {
          "label": "Cash bateau / eau",
          "myr": 20,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Kilim Geoforest",
          "timing": "3h a 4h",
          "ticket": "Tour prive officiel 2h: RM400/bateau; partage possible moins cher selon agence",
          "gettingThere": "Scooter, Grab ou taxi prive",
          "whyGo": "Voir une autre Langkawi: eau, mangroves et relief karstique."
        },
        {
          "name": "Kuah et Eagle Square",
          "timing": "Fin d'apres-midi",
          "ticket": "Libre",
          "gettingThere": "Route logique apres Kilim",
          "whyGo": "Ajouter un visage plus local et urbain a l'ile."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "08h00 -> 12h30",
          "visit": "Kilim Geoforest",
          "address": "Kilim Geoforest Park, Langkawi",
          "metro": "Sans objet.",
          "taxi": "Scooter, Grab ou taxi reserve.",
          "visitCost": "Tour prive officiel 2h: 400 MYR par bateau",
          "eat": "Petit-dej avant depart.",
          "foodAddress": "Cenang / Kilim",
          "foodCost": "55 MYR pour 2",
          "drink": "Eau, cafe, boisson froide.",
          "note": "Le tour doit etre clair et pas trop charge."
        },
        {
          "period": "Apres-midi",
          "time": "14h30 -> 17h30",
          "visit": "Kuah et Eagle Square",
          "address": "Dataran Lang, Kuah",
          "metro": "Sans objet.",
          "taxi": "Retour Grab si conduite de nuit inconfortable.",
          "visitCost": "Libre",
          "eat": "Lunch ou snack local a Kuah: nasi campur, roti ou plat simple avant retour vers Cenang.",
          "foodAddress": "Kuah / Cenang",
          "foodCost": "55 MYR pour 2",
          "drink": "Boisson legere.",
          "note": "Bloc photo court apres Kilim: retour avant 18h pour eviter conduite de nuit et fatigue."
        }
      ]
    },
    {
      "id": 8,
      "slug": "jour-08",
      "dayLabel": "Jour 8",
      "dateLabel": "Lundi 24 aout 2026",
      "city": "Langkawi",
      "overnight": "Rebungan Resort Langkawi",
      "highlight": "Laman Padi, Kota Mahsuri et temps plage: culture locale sans surcharger.",
      "transportSummary": "Scooter ou Grab",
      "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Langkawi_beach.jpg",
      "photoAlt": "Ambiance insulaire a Langkawi",
      "deepDive": "Cette journee ajoute une touche locale a Langkawi sans redevenir une course aux attractions.",
      "segments": [
        {
          "label": "Matin",
          "title": "Laman Padi",
          "bullets": [
            "Stop court pres de Cenang.",
            "Bien si vous voulez autre chose que plage et bateau."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Kota Mahsuri",
          "bullets": [
            "Route centrale de l'ile.",
            "Ticket a reverifier selon formule."
          ]
        },
        {
          "label": "Soir",
          "title": "Retour plage",
          "bullets": [
            "Sunset facile.",
            "Diner proche du logement."
          ]
        }
      ],
      "access": {
        "metro": "Aucun.",
        "taxi": "Grab point a point possible, mais taxi prive plus simple si vous ne conduisez pas."
      },
      "tips": [
        "Journee modulable selon meteo.",
        "Gardez une vraie pause plage."
      ],
      "budget": [
        {
          "label": "Nuit Rebungan Resort Langkawi",
          "myr": 148,
          "kind": "estimate"
        },
        {
          "label": "Laman Padi / Kota Mahsuri (2 adultes)",
          "myr": 90,
          "kind": "estimate"
        },
        {
          "label": "Scooter / Grab du jour",
          "myr": 60,
          "kind": "estimate"
        },
        {
          "label": "Repas du jour",
          "myr": 140,
          "kind": "estimate"
        },
        {
          "label": "Marge meteo / achats (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Laman Padi",
          "timing": "45 min a 1h",
          "ticket": "Laman Padi: activites souvent 20 a 25 MYR/adulte, a verifier sur place",
          "gettingThere": "Facile depuis Cenang",
          "whyGo": "Ajouter une touche locale proche de la plage."
        },
        {
          "name": "Kota Mahsuri",
          "timing": "1h a 1h30",
          "ticket": "Kota Mahsuri: RM20/adulte international, theatre RM25/adulte",
          "gettingThere": "Scooter ou Grab vers le centre de l'ile",
          "whyGo": "Un stop legende/patrimoine pour varier Langkawi."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "09h00 -> 11h30",
          "visit": "Laman Padi",
          "address": "Pantai Cenang, Langkawi",
          "metro": "Sans objet.",
          "taxi": "Tres facile depuis Cenang.",
          "visitCost": "Prevoir 40 a 50 MYR pour 2 selon activite",
          "eat": "Petit-dej long dans votre quartier.",
          "foodAddress": "Pantai Cenang",
          "foodCost": "55 MYR pour 2",
          "drink": "Cafe ou jus frais.",
          "note": "Court, local et sans logistique lourde."
        },
        {
          "period": "Apres-midi",
          "time": "13h30 -> 16h30",
          "visit": "Kota Mahsuri",
          "address": "Kota Mahsuri, Langkawi",
          "metro": "Sans objet.",
          "taxi": "Scooter ou Grab.",
          "visitCost": "Kota Mahsuri: 40 a 50 MYR pour 2 selon formule",
          "eat": "Repas local avant la route: Nasi Campur Kak Yan ou warung proche de Cenang selon timing.",
          "foodAddress": "Route centrale de Langkawi",
          "foodCost": "55 MYR pour 2",
          "drink": "Boisson fraiche.",
          "note": "Visite courte apres le repas, puis retour plage/logement sans ajouter d'autres stops."
        }
      ]
    },
    {
      "id": 9,
      "slug": "jour-09",
      "dayLabel": "Jour 9",
      "dateLabel": "Mardi 25 aout 2026",
      "city": "Langkawi",
      "overnight": "Rebungan Resort Langkawi",
      "highlight": "Craft Complex, route nord et sacs: derniere journee Langkawi sans sprint.",
      "transportSummary": "Scooter ou taxi prive",
      "photo": "assets/photos/visits/eagle-square.jpg",
      "photoAlt": "Repere de Langkawi avant la bascule",
      "deepDive": "Une derniere boucle d'ile, puis retour avec de l'avance pour verifier ferry, ETS, passeports et sacs.",
      "segments": [
        {
          "label": "Matin",
          "title": "Langkawi Craft Complex",
          "bullets": [
            "Visite artisanat/culture.",
            "Bon remplacement d'une journee trop immobile."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Route nord ou plage",
          "bullets": [
            "Tanjung Rhu si meteo correcte.",
            "Sinon pause Cenang et preparation depart."
          ]
        },
        {
          "label": "Soir",
          "title": "Sacs et billets",
          "bullets": [
            "Ferry et ETS confirmes hors ligne.",
            "Ne pas acheter le ferry trop tard."
          ]
        }
      ],
      "access": {
        "metro": "Aucun.",
        "taxi": "Sans scooter, taxi prive demi-journee plus confortable que plusieurs Grabs isoles."
      },
      "tips": [
        "Verifier ferry et ETS avant la veille au soir.",
        "Rendre le scooter ce soir si le depart du lendemain est matinal."
      ],
      "budget": [
        {
          "label": "Nuit Rebungan Resort Langkawi",
          "myr": 148,
          "kind": "estimate"
        },
        {
          "label": "Craft Complex / petites visites",
          "myr": 40,
          "kind": "estimate"
        },
        {
          "label": "Scooter / taxi du jour",
          "myr": 50,
          "kind": "estimate"
        },
        {
          "label": "Repas du jour",
          "myr": 150,
          "kind": "estimate"
        },
        {
          "label": "Marge billets / achats utiles (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Langkawi Craft Complex",
          "timing": "1h a 1h30",
          "ticket": "Libre hors achats",
          "gettingThere": "Route nord de l'ile",
          "whyGo": "Une vraie visite artisanat si vous voulez encore bouger."
        },
        {
          "name": "Route nord / Tanjung Rhu",
          "timing": "2h souples",
          "ticket": "Libre",
          "gettingThere": "Scooter ou taxi prive",
          "whyGo": "Finir Langkawi par une boucle douce plutot qu'une journee vide."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "09h00 -> 12h00",
          "visit": "Langkawi Craft Complex",
          "address": "Teluk Yu, Langkawi",
          "metro": "Sans objet.",
          "taxi": "Scooter ou taxi prive.",
          "visitCost": "Libre hors achats",
          "eat": "Petit-dej simple avant de partir.",
          "foodAddress": "Cenang / route nord",
          "foodCost": "55 MYR pour 2",
          "drink": "Eau / cafe.",
          "note": "Bon stop pour donner de la matiere a la derniere journee ile."
        },
        {
          "period": "Apres-midi",
          "time": "13h30 -> 16h30",
          "visit": "Route nord douce ou plage Cenang",
          "address": "Tanjung Rhu / Pantai Cenang, Langkawi",
          "metro": "Sans objet.",
          "taxi": "Scooter ou taxi prive, retour logement avant 17h.",
          "visitCost": "Libre",
          "eat": "Repas local simple ou snack de plage: warung, roti ou nasi campur selon la zone.",
          "foodAddress": "Tanjung Rhu / Pantai Cenang",
          "foodCost": "55 MYR pour 2",
          "drink": "Eau, noix de coco ou jus frais.",
          "note": "Bloc souple: plage si la meteo est bonne, sinon pause Cenang et sacs sans courir."
        },
        {
          "period": "Soir / diner",
          "time": "19h30 -> 21h30",
          "visit": "Sacs, billets et dernier diner",
          "address": "Pantai Cenang / logement",
          "metro": "Sans objet.",
          "taxi": "Retour simple a la base.",
          "visitCost": "Libre",
          "eat": "Dernier diner facile.",
          "foodAddress": "Autour du logement",
          "foodCost": "90 MYR pour 2",
          "drink": "Boisson douce de cloture.",
          "note": "Passeports, QR codes ferry/ETS et sacs presque fermes."
        }
      ]
    },
    {
      "id": 10,
      "slug": "jour-10",
      "dayLabel": "Jour 10",
      "dateLabel": "Mercredi 26 aout 2026",
      "city": "Langkawi -> Ipoh",
      "overnight": "The Horizon Ipoh By Iconique Espace",
      "highlight": "Bascule ferry + taxi vers Arau + ETS vers Ipoh, avec soiree douce en Old Town.",
      "transportSummary": "Grab + ferry + taxi/Grab + ETS",
      "photo": "assets/photos/visits/tasik-cermin.jpg",
      "photoAlt": "Foret et falaises calcaires autour de Tasik Cermin a Ipoh",
      "deepDive": "C'est le jour logistique le plus sensible. Il faut verifier ferry et ETS ensemble, puis garder la soiree Ipoh tres simple.",
      "segments": [
        {
          "label": "Matin",
          "title": "Kuah Jetty",
          "bullets": [
            "Check-out tot.",
            "Arriver idealement 1h avant le ferry avec passeports et QR codes."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Kuala Perlis -> Arau -> Ipoh",
          "bullets": [
            "Taxi/Grab direct jusqu'a Arau.",
            "ETS a confirmer selon horaires ouverts."
          ]
        },
        {
          "label": "Soir",
          "title": "Old Town Ipoh",
          "bullets": [
            "Grab gare -> logement.",
            "White coffee, diner simple et petite marche."
          ]
        }
      ],
      "access": {
        "metro": "Pas de metro utile sur cette bascule.",
        "taxi": "Grab/taxi a Langkawi, taxi/Grab Kuala Perlis -> Arau, Grab gare d'Ipoh -> Old Town."
      },
      "tips": [
        "Reverifier les horaires reels ferry + ETS avant achat.",
        "Garder l'ETS de secours si le ferry glisse.",
        "Aucune grosse visite prevue ce soir."
      ],
      "budget": [
        {
          "label": "Nuit The Horizon Ipoh",
          "myr": 198,
          "kind": "estimate"
        },
        {
          "label": "Ferry Langkawi -> Kuala Perlis (2 adultes)",
          "myr": 110,
          "kind": "estimate"
        },
        {
          "label": "ETS Arau -> Ipoh (2 adultes)",
          "myr": 150,
          "kind": "estimate"
        },
        {
          "label": "Grabs / taxis de liaison",
          "myr": 90,
          "kind": "estimate"
        },
        {
          "label": "Repas et snacks transit",
          "myr": 80,
          "kind": "estimate"
        },
        {
          "label": "Marge horaire / billets (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Ferry Kuah -> Kuala Perlis",
          "timing": "Depart du matin a viser",
          "ticket": "Tarif et disponibilite a reverifier",
          "gettingThere": "Grab ou scooter rendu avant Kuah Jetty",
          "whyGo": "La sortie la plus lisible de Langkawi vers le train."
        },
        {
          "name": "Arau -> Ipoh en ETS",
          "timing": "Horaire cible a confirmer",
          "ticket": "Cadre prudent: 150 MYR pour 2",
          "gettingThere": "Taxi/Grab depuis Kuala Perlis",
          "whyGo": "Le train rend la seconde moitie du jour plus propre qu'un long bus."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "07h00 -> 11h30",
          "visit": "Kuah Jetty puis ferry",
          "address": "Kuah Jetty -> Kuala Perlis",
          "metro": "Sans objet.",
          "taxi": "Grab jusqu'au jetty si scooter rendu.",
          "visitCost": "Ferry: 110 MYR pour 2 en marge prudente",
          "eat": "Petit-dej leger avant depart.",
          "foodAddress": "Kuah Jetty",
          "foodCost": "45 MYR pour 2",
          "drink": "Cafe ou eau pendant l'attente.",
          "note": "Arriver 1h avant avec passeports et QR codes."
        },
        {
          "period": "Apres-midi",
          "time": "13h30 -> 18h00",
          "visit": "Kuala Perlis -> Arau -> Ipoh",
          "address": "Kuala Perlis Jetty -> KTM Arau -> Ipoh",
          "metro": "Sans objet.",
          "taxi": "Taxi/Grab direct jusqu'a Arau puis Grab final a Ipoh.",
          "visitCost": "ETS + transferts: 240 MYR pour 2",
          "eat": "Repas court en transit: nasi kandar, roti ou rice plate simple; garder snacks et eau pour le train.",
          "foodAddress": "Arau station / Ipoh",
          "foodCost": "55 MYR pour 2",
          "drink": "White coffee de reprise a Ipoh.",
          "note": "Le gain du jour est la marge, pas la performance."
        }
      ]
    },
    {
      "id": 11,
      "slug": "jour-11",
      "dayLabel": "Jour 11",
      "dateLabel": "Jeudi 27 aout 2026",
      "city": "Ipoh",
      "overnight": "The Horizon Ipoh By Iconique Espace",
      "highlight": "Tasik Cermin, un seul temple a Gunung Rapat, puis retour Old Town.",
      "transportSummary": "Grab uniquement",
      "photo": "assets/photos/visits/tasik-cermin.jpg",
      "photoAlt": "Tasik Cermin et ses falaises calcaires",
      "deepDive": "Un secteur sud, un lac fort, un temple maximum, puis retour definitif au centre: c'est clair et sans repetition.",
      "segments": [
        {
          "label": "Matin",
          "title": "Tasik Cermin",
          "bullets": [
            "Partir tot pour le tunnel et le lac.",
            "Garder la visite courte et nette."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Sam Poh Tong",
          "bullets": [
            "Un seul temple suffit.",
            "Retour ensuite vers Old Town pour lunch et cafe."
          ]
        },
        {
          "label": "Soir",
          "title": "Old Town a pied",
          "bullets": [
            "Concubine Lane, Kinta Riverwalk ou dinner simple.",
            "Pas de deuxieme grande sortie."
          ]
        }
      ],
      "access": {
        "metro": "Pas de metro a Ipoh.",
        "taxi": "Compter 35 a 50 MYR de Grabs selon attente et retour."
      },
      "tips": [
        "Ne cherchez pas a empiler plusieurs grottes/temples.",
        "Reserver un Grab retour si l'attente semble incertaine."
      ],
      "budget": [
        {
          "label": "Nuit The Horizon Ipoh",
          "myr": 198,
          "kind": "estimate"
        },
        {
          "label": "Tasik Cermin (2 adultes, entree + option bateau)",
          "myr": 50,
          "kind": "estimate"
        },
        {
          "label": "Temple / donations",
          "myr": 20,
          "kind": "estimate"
        },
        {
          "label": "Grabs du jour",
          "myr": 50,
          "kind": "estimate"
        },
        {
          "label": "Repas et cafes",
          "myr": 130,
          "kind": "estimate"
        },
        {
          "label": "Marge chaleur / pluie (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Tasik Cermin",
          "timing": "1h30 a 2h",
          "ticket": "Ouvert 09h00-18h00; entree Non-MyKad observee RM8/adulte, bateau souvent RM25/adulte",
          "gettingThere": "Grab direct depuis Old Town",
          "whyGo": "Le stop nature le plus net du bloc Ipoh."
        },
        {
          "name": "Sam Poh Tong",
          "timing": "45 min a 1h",
          "ticket": "Donation ou petit ticket",
          "gettingThere": "Grab court depuis Tasik Cermin",
          "whyGo": "Garder l'ambiance grotte-temple sans repetition."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "08h30 -> 11h30",
          "visit": "Tasik Cermin",
          "address": "Tasik Cermin, Gunung Rapat, Ipoh",
          "metro": "Sans objet.",
          "taxi": "Grab depuis Old Town.",
          "visitCost": "50 MYR pour 2 si vous ajoutez l'option bateau",
          "eat": "Petit-dej simple en ville.",
          "foodAddress": "Old Town Ipoh",
          "foodCost": "45 MYR pour 2",
          "drink": "Eau / cafe a emporter.",
          "note": "Faire le lac en premier simplifie toute la journee."
        },
        {
          "period": "Apres-midi",
          "time": "13h30 -> 16h00",
          "visit": "Sam Poh Tong",
          "address": "Gunung Rapat, Ipoh",
          "metro": "Sans objet.",
          "taxi": "Grab court puis retour centre.",
          "visitCost": "Donation / petit budget: 20 MYR pour 2",
          "eat": "Lunch Old Town au retour: Thean Chun, Kong Heng, Nam Heong ou kopitiam simple.",
          "foodAddress": "Old Town Ipoh",
          "foodCost": "55 MYR pour 2",
          "drink": "White coffee ou boisson fraiche.",
          "note": "Un seul temple, puis retour en ville."
        },
        {
          "period": "Soir / diner",
          "time": "19h30 -> 21h30",
          "visit": "Old Town a pied + diner",
          "address": "Old Town Ipoh",
          "metro": "Sans objet.",
          "taxi": "Marche depuis le centre.",
          "visitCost": "Libre",
          "eat": "Diner simple en Old Town.",
          "foodAddress": "Concubine Lane / Old Town Ipoh",
          "foodCost": "80 MYR pour 2",
          "drink": "Dessert ou cafe apres le repas.",
          "note": "Balade digestive dans les ruelles, puis retour logement."
        }
      ]
    },
    {
      "id": 12,
      "slug": "jour-12",
      "dayLabel": "Jour 12",
      "dateLabel": "Vendredi 28 aout 2026",
      "city": "Ipoh",
      "overnight": "The Horizon Ipoh By Iconique Espace",
      "highlight": "Gua Tempurung le matin; Kellie's Castle seulement si le timing reste bon, sinon retour Ipoh.",
      "transportSummary": "Grab longue distance",
      "photo": "assets/photos/visits/kellies-castle.jpg",
      "photoAlt": "Facade de Kellie's Castle",
      "deepDive": "La seule vraie journee exterieure d'Ipoh: elle marche si vous anticipez le retour Grab et refusez un troisieme stop.",
      "segments": [
        {
          "label": "Matin",
          "title": "Gua Tempurung",
          "bullets": [
            "Partir tot.",
            "Confirmer retour ou chauffeur avant d'entrer."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Kellie's Castle optionnel",
          "bullets": [
            "A faire seulement si Gua Tempurung finit sans retard.",
            "Sinon retour Old Town et repos."
          ]
        },
        {
          "label": "Soir",
          "title": "Retour Old Town",
          "bullets": [
            "Diner sans programme supplementaire.",
            "Recuperation."
          ]
        }
      ],
      "access": {
        "metro": "Sans objet.",
        "taxi": "Grab aller-retour a prevoir: Ipoh -> Gua Tempurung -> Kellie's -> Ipoh."
      },
      "tips": [
        "Si un stop saute, gardez Gua Tempurung.",
        "Chaussures qui accrochent et eau."
      ],
      "budget": [
        {
          "label": "Nuit The Horizon Ipoh",
          "myr": 198,
          "kind": "estimate"
        },
        {
          "label": "Gua Tempurung (2 adultes)",
          "myr": 100,
          "kind": "estimate"
        },
        {
          "label": "Kellie's Castle (2 adultes)",
          "myr": 46,
          "kind": "official"
        },
        {
          "label": "Grabs longue distance",
          "myr": 100,
          "kind": "estimate"
        },
        {
          "label": "Repas du jour",
          "myr": 130,
          "kind": "estimate"
        },
        {
          "label": "Marge retour / eau (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Gua Tempurung",
          "timing": "1h30 a 2h",
          "ticket": "Horaires usuels 09h00-17h00; prix variable selon parcours, prevoir jusqu'a RM50/adulte etranger",
          "gettingThere": "Grab longue distance depuis Ipoh",
          "whyGo": "Le grand changement de decor du bloc Ipoh."
        },
        {
          "name": "Kellie's Castle optionnel",
          "timing": "1h30",
          "ticket": "RM23/adulte etranger observe",
          "gettingThere": "Route logique depuis la grotte",
          "whyGo": "Bon contrepoint heritage si la grotte et les transports n'ont pas mange la marge."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "09h00 -> 12h30",
          "visit": "Gua Tempurung",
          "address": "Gua Tempurung, Gopeng",
          "metro": "Sans objet.",
          "taxi": "Grab longue distance depuis Ipoh.",
          "visitCost": "100 MYR pour 2 si vous prenez un parcours sec plus complet",
          "eat": "Petit-dej rapide avant depart.",
          "foodAddress": "Old Town Ipoh",
          "foodCost": "45 MYR pour 2",
          "drink": "Eau + boisson de route.",
          "note": "Confirmez le retour avant d'entrer si possible."
        },
        {
          "period": "Apres-midi",
          "time": "14h00 -> 16h30",
          "visit": "Kellie's Castle optionnel",
          "address": "Batu Gajah, Perak",
          "metro": "Sans objet.",
          "taxi": "Suite logique du meme Grab si possible.",
          "visitCost": "46 MYR pour 2",
          "eat": "Repas court apres la grotte: warung, mamak ou rice plate sur Batu Gajah / retour Ipoh.",
          "foodAddress": "Batu Gajah / retour Ipoh",
          "foodCost": "55 MYR pour 2",
          "drink": "Boisson fraiche avant retour.",
          "note": "Option seulement si le retour Grab est clair et si Gua Tempurung n'a pas deborde."
        }
      ]
    },
    {
      "id": 13,
      "slug": "jour-13",
      "dayLabel": "Jour 13",
      "dateLabel": "Samedi 29 aout 2026",
      "city": "Ipoh",
      "overnight": "The Horizon Ipoh By Iconique Espace",
      "highlight": "Birch Memorial, Han Chin si envie, Kong Heng et Gunung Lang en option.",
      "transportSummary": "Marche + Grab court",
      "photo": "assets/photos/visits/birch-clock-tower.jpg",
      "photoAlt": "Birch Memorial Clock Tower a Ipoh",
      "deepDive": "Finir Ipoh par le centre et une option nature courte, sans relancer une grosse sortie.",
      "segments": [
        {
          "label": "Matin",
          "title": "Birch Memorial et Kong Heng",
          "bullets": [
            "Boucle a pied.",
            "Han Chin Pet Soo seulement si l'envie est la."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Gunung Lang ou pause",
          "bullets": [
            "Option nature courte.",
            "Sinon cafe long et Old Town."
          ]
        },
        {
          "label": "Soir",
          "title": "Dernier soir Ipoh",
          "bullets": [
            "Diner signature.",
            "Soiree facile: il reste encore une journee a Ipoh."
          ]
        }
      ],
      "access": {
        "metro": "Non applicable a Ipoh.",
        "taxi": "Tout a pied sauf Gunung Lang, qui demande un court Grab."
      },
      "tips": [
        "Journee respiration au coeur du bloc Ipoh.",
        "Gunung Lang est optionnel."
      ],
      "budget": [
        {
          "label": "Nuit The Horizon Ipoh",
          "myr": 198,
          "kind": "estimate"
        },
        {
          "label": "Han Chin / micro-visites",
          "myr": 30,
          "kind": "estimate"
        },
        {
          "label": "Gunung Lang / petits tickets",
          "myr": 30,
          "kind": "estimate"
        },
        {
          "label": "Grabs du jour",
          "myr": 35,
          "kind": "estimate"
        },
        {
          "label": "Repas du jour",
          "myr": 140,
          "kind": "estimate"
        },
        {
          "label": "Marge derniere soiree (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Birch Memorial Clock Tower",
          "timing": "Debut de matinee",
          "ticket": "Libre",
          "gettingThere": "A pied dans le centre",
          "whyGo": "Point d'ancrage simple pour finir Ipoh."
        },
        {
          "name": "Han Chin Pet Soo",
          "timing": "45 min a 1h",
          "ticket": "Ticket a verifier",
          "gettingThere": "A pied depuis Kong Heng",
          "whyGo": "Donner du contexte humain et minier a la ville."
        },
        {
          "name": "Gunung Lang",
          "timing": "Option courte",
          "ticket": "Petit budget selon barque / acces",
          "gettingThere": "Petit Grab depuis le centre",
          "whyGo": "Derniere respiration calcaire si vous avez envie."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "09h00 -> 12h30",
          "visit": "Birch Memorial + Kong Heng",
          "address": "Old Town, Ipoh",
          "metro": "Sans objet.",
          "taxi": "Tout a pied dans le centre.",
          "visitCost": "Libre ou petit ticket Han Chin",
          "eat": "Petit-dej white coffee ou toast.",
          "foodAddress": "Old Town Ipoh",
          "foodCost": "55 MYR pour 2",
          "drink": "Cafe blanc.",
          "note": "Finir Ipoh par son coeur heritage."
        },
        {
          "period": "Apres-midi",
          "time": "13h30 -> 16h30",
          "visit": "Gunung Lang optionnel ou cafe Old Town",
          "address": "Gunung Lang / Old Town Ipoh",
          "metro": "Sans objet.",
          "taxi": "Grab court uniquement si vous choisissez Gunung Lang.",
          "visitCost": "0 a 30 MYR pour 2 selon option",
          "eat": "Lunch Old Town: noodles, chicken rice, dim sum simple ou kopitiam avant la pause cafe.",
          "foodAddress": "Old Town Ipoh",
          "foodCost": "55 MYR pour 2",
          "drink": "White coffee, jus ou eau.",
          "note": "Choisir un seul scenario: Gunung Lang court ou repos/cafe, pas les deux."
        },
        {
          "period": "Soir / diner",
          "time": "19h30 -> 21h30",
          "visit": "Dernier diner Ipoh",
          "address": "Old Town / Heritage Lane",
          "metro": "Sans objet.",
          "taxi": "Marche.",
          "visitCost": "Libre",
          "eat": "Dernier bon diner a Ipoh.",
          "foodAddress": "Old Town Ipoh",
          "foodCost": "90 MYR pour 2",
          "drink": "Dessert ou white coffee.",
          "note": "Garder la soiree souple: le train vers KL est maintenant prevu le 31 aout."
        }
      ]
    },
    {
      "id": 14,
      "slug": "jour-14",
      "dayLabel": "Jour 14",
      "dateLabel": "Dimanche 30 aout 2026",
      "city": "Ipoh",
      "overnight": "The Horizon Ipoh By Iconique Espace",
      "highlight": "Journee ajoutee a Ipoh: marche du dimanche, cafes, heritage et vraie respiration avant l'ETS.",
      "transportSummary": "Marche + Grab court",
      "photo": "assets/photos/visits/tasik-cermin.jpg",
      "photoAlt": "Foret et falaises calcaires autour de Tasik Cermin a Ipoh",
      "deepDive": "Cette journee supplementaire enleve de la pression a la fin du voyage: Ipoh respire mieux, et KL final reste plus court mais plus propre.",
      "segments": [
        {
          "label": "Matin",
          "title": "Memory Lane / marche du dimanche",
          "bullets": [
            "Sortie courte et locale le matin.",
            "Rester libre: achats seulement si quelque chose vous plait."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Gare d'Ipoh, Padang et cafes",
          "bullets": [
            "Boucle heritage facile.",
            "Pause longue en Old Town si chaleur ou pluie."
          ]
        },
        {
          "label": "Soir",
          "title": "Diner et sacs",
          "bullets": [
            "Dernier diner tranquille a Ipoh.",
            "Verifier billets ETS, horaires et bagages pour demain."
          ]
        }
      ],
      "access": {
        "metro": "Non applicable a Ipoh.",
        "taxi": "Marche pour Old Town, Grab court si vous ajoutez Gunung Lang, spa ou retour sous la pluie."
      },
      "tips": [
        "Memory Lane vaut surtout le dimanche matin: garder ce bloc optionnel et verifier l'ambiance sur place.",
        "Ne relancez pas une grosse sortie exterieure: le vrai gain est d'avoir une journee douce avant KL."
      ],
      "budget": [
        {
          "label": "Nuit The Horizon Ipoh",
          "myr": 198,
          "kind": "estimate"
        },
        {
          "label": "Memory Lane / micro-visites",
          "myr": 30,
          "kind": "estimate"
        },
        {
          "label": "Grabs courts",
          "myr": 40,
          "kind": "estimate"
        },
        {
          "label": "Repas et cafes",
          "myr": 140,
          "kind": "estimate"
        },
        {
          "label": "Marge massage / pluie (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Memory Lane / Pasar Karat",
          "timing": "Dimanche matin",
          "ticket": "Libre hors achats",
          "gettingThere": "Marche ou Grab court depuis Old Town",
          "whyGo": "Un stop local parfait pour utiliser le jour ajoute sans creer de fatigue."
        },
        {
          "name": "Ipoh Railway Station / Padang Ipoh",
          "timing": "Apres-midi souple",
          "ticket": "Libre",
          "gettingThere": "A pied dans le centre",
          "whyGo": "Revoir le coeur heritage d'Ipoh avec plus de calme."
        },
        {
          "name": "Old Town cafes",
          "timing": "Pause longue",
          "ticket": "Selon consommation",
          "gettingThere": "A pied",
          "whyGo": "Assumer Ipoh comme etape food et respiration, pas seulement transit."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "08h30 -> 12h30",
          "visit": "Memory Lane + Old Town",
          "address": "Jalan Horley / Old Town, Ipoh",
          "metro": "Sans objet.",
          "taxi": "Marche ou Grab court selon logement.",
          "visitCost": "Libre hors achats",
          "eat": "Petit-dej white coffee ou dim sum.",
          "foodAddress": "Old Town Ipoh",
          "foodCost": "55 MYR pour 2",
          "drink": "Cafe blanc ou boisson fraiche.",
          "note": "Le marche est un bonus du dimanche, pas une obligation."
        },
        {
          "period": "Apres-midi",
          "time": "14h00 -> 17h00",
          "visit": "Gare d'Ipoh + Padang + cafe",
          "address": "Ipoh Railway Station / Padang Ipoh",
          "metro": "Sans objet.",
          "taxi": "A pied ou Grab court si pluie.",
          "visitCost": "Libre",
          "eat": "Lunch simple en Old Town.",
          "foodAddress": "Old Town Ipoh",
          "foodCost": "55 MYR pour 2",
          "drink": "Longue pause climatisee.",
          "note": "Cette journee sert a respirer avant la derniere semaine."
        },
        {
          "period": "Soir / diner",
          "time": "19h30 -> 21h30",
          "visit": "Dernier diner et sacs",
          "address": "Old Town / Heritage Lane",
          "metro": "Sans objet.",
          "taxi": "Marche ou Grab court.",
          "visitCost": "Libre",
          "eat": "Dernier diner Ipoh.",
          "foodAddress": "Old Town Ipoh",
          "foodCost": "90 MYR pour 2",
          "drink": "Dessert ou boisson douce.",
          "note": "Verifier billets ETS, horaires du 31 aout et check-in KL."
        }
      ]
    },
    {
      "id": 15,
      "slug": "jour-15",
      "dayLabel": "Jour 15",
      "dateLabel": "Lundi 31 aout 2026",
      "city": "Ipoh -> Kuala Lumpur",
      "overnight": "The Colony By Infinitum KLCC - Aura Suites",
      "highlight": "Retour simple vers Kuala Lumpur en ETS, installation à l'hôtel The Colony KLCC pour fermer le séjour et soirée très légère.",
      "transportSummary": "Grab + ETS + Grab",
      "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Kuala_Lumpur_Malaysia_Skyline-01.jpg",
      "photoAlt": "Retour sur Kuala Lumpur",
      "deepDive": "Le 31 aout devient la bascule Ipoh -> KL: on garde le benefice du jour ajoute a Ipoh et on reduit Kuala Lumpur final sans fragiliser le retour.",
      "segments": [
        {
          "label": "Matin",
          "title": "Check-out et gare d'Ipoh",
          "bullets": [
            "Grab vers la gare.",
            "Train ETS avec marge, surtout le jour de Merdeka."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "KL Sentral -> The Colony KLCC",
          "bullets": [
            "Grab vers le logement final The Colony KLCC.",
            "Check-in, pause, lessive ou cafe."
          ]
        },
        {
          "label": "Soir",
          "title": "Diner simple",
          "bullets": [
            "Rester proche du logement.",
            "Eviter les longs trajets un jour ferie."
          ]
        }
      ],
      "access": {
        "metro": "ETS jusqu'a KL Sentral, puis MRT ou Grab selon sacs.",
        "taxi": "Grab gare d'Ipoh -> ETS puis Grab KL Sentral -> logement."
      },
      "tips": [
        "Le 31 aout 2026 tombe un lundi et correspond a Hari Merdeka: reserver l'ETS tot et garder de la marge.",
        "Journee bascule, pas journee visite.",
        "Si KL est chargee le soir, rester autour du logement / KLCC suffit."
      ],
      "toiletStops": [
        {
          "label": "Gare d'Ipoh avant ETS",
          "query": "toilets near Ipoh Railway Station",
          "note": "A utiliser avant de monter dans le train."
        },
        {
          "label": "KL Sentral / NU Sentral",
          "query": "toilets near KL Sentral NU Sentral Kuala Lumpur",
          "note": "Repere important a l'arrivee avec les sacs."
        },
        {
          "label": "The Colony KLCC / logement",
          "query": "toilets near The Colony By Infinitum KLCC Kuala Lumpur",
          "note": "Point proche du logement final."
        }
      ],
      "budget": [
        {
          "label": "Nuit The Colony KLCC",
          "myr": 232,
          "kind": "estimate"
        },
        {
          "label": "ETS Ipoh -> KL (2 adultes)",
          "myr": 70,
          "kind": "estimate"
        },
        {
          "label": "Grabs gares et logement",
          "myr": 55,
          "kind": "estimate"
        },
        {
          "label": "Repas du jour",
          "myr": 130,
          "kind": "estimate"
        },
        {
          "label": "Lessive / marge douce (supprimée)",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "Train ETS Ipoh -> KL",
          "timing": "Environ 2h",
          "ticket": "Tarif a reverifier selon classe",
          "gettingThere": "Depart Ipoh Railway Station",
          "whyGo": "Le retour le plus propre vers KL."
        },
        {
          "name": "The Colony By Infinitum KLCC - Aura Suites",
          "timing": "Apres-midi souple",
          "ticket": "199 EUR / environ 927 MYR pour 4 nuits, soit 232 MYR / nuit",
          "gettingThere": "Grab depuis KL Sentral",
          "whyGo": "Base simple pour fermer le voyage."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "08h00 -> 12h00",
          "visit": "Ipoh -> KL en ETS",
          "address": "Ipoh Railway Station -> KL Sentral",
          "metro": "Grab vers la gare.",
          "taxi": "Grab court vers gare d'Ipoh.",
          "visitCost": "ETS: 70 MYR pour 2 en marge prudente",
          "eat": "Petit-dej leger avant check-out.",
          "foodAddress": "Old Town / gare d'Ipoh",
          "foodCost": "45 MYR pour 2",
          "drink": "Cafe de gare / eau.",
          "note": "Le 31 aout peut etre plus charge: gardez de la marge."
        },
        {
          "period": "Apres-midi",
          "time": "13h30 -> 17h00",
          "visit": "Reinstallation a KL",
          "address": "The Colony By Infinitum KLCC - Aura Suites",
          "metro": "MRT possible selon sacs.",
          "taxi": "Grab KL Sentral -> logement.",
          "visitCost": "Transferts: 55 MYR pour 2",
          "eat": "Lunch de retour simple: KL Sentral food court, NU Sentral ou rice plate proche du logement.",
          "foodAddress": "KLCC / autour du logement",
          "foodCost": "55 MYR pour 2",
          "drink": "Boisson climatisee.",
          "note": "Ne relancez pas une grosse visite aujourd'hui."
        }
      ]
    },
    {
      "id": 16,
      "slug": "jour-16",
      "dayLabel": "Jour 16",
      "dateLabel": "Mardi 1 septembre 2026",
      "city": "Kuala Lumpur",
      "overnight": "The Colony By Infinitum KLCC - Aura Suites",
      "highlight": "Merdeka Square, Masjid Negara et Islamic Arts Museum pour une boucle patrimoine claire.",
      "transportSummary": "Metro + marche + Grab ponctuel",
      "photo": "assets/photos/visits/masjid-negara.jpg",
      "photoAlt": "Architecture de la Mosquee nationale",
      "deepDive": "Derniere vraie journee patrimoine a KL: une seule grande boucle suffit, sans ajouter un deuxieme musee.",
      "segments": [
        {
          "label": "Matin",
          "title": "Merdeka Square",
          "bullets": [
            "Partir avant la chaleur.",
            "Facades coloniales et lecture historique."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Masjid Negara + IAMM",
          "bullets": [
            "Boucle logique a pied ou Grab court.",
            "Ralentir une fois dans le musee."
          ]
        },
        {
          "label": "Soir",
          "title": "Retour simple",
          "bullets": [
            "Diner proche logement.",
            "Pas de grande traversee inutile."
          ]
        }
      ],
      "access": {
        "metro": "Pasar Seni, Masjid Negara et secteur musee se gerent bien avec metro + marche.",
        "taxi": "Grab seulement si chaleur ou fatigue cassent la boucle."
      },
      "tips": [
        "Tenue respectueuse pour la mosquee.",
        "Ne rajoutez pas un second musee."
      ],
      "toiletStops": [
        {
          "label": "Merdeka / Masjid Jamek",
          "query": "toilets near Masjid Jamek LRT Dataran Merdeka Kuala Lumpur",
          "note": "A chercher au debut de la boucle patrimoine."
        },
        {
          "label": "Islamic Arts Museum Malaysia",
          "query": "toilets near Islamic Arts Museum Malaysia Kuala Lumpur",
          "note": "Repere le plus fiable pendant le bloc musee / Masjid Negara."
        },
        {
          "label": "Central Market / Pasar Seni",
          "query": "toilets near Central Market Pasar Seni Kuala Lumpur",
          "note": "Plan de secours propre si vous revenez vers Pasar Seni."
        }
      ],
      "budget": [
        {
          "label": "Nuit The Colony KLCC",
          "myr": 232,
          "kind": "estimate"
        },
        {
          "label": "IAMM / visites patrimoine",
          "myr": 40,
          "kind": "official"
        },
        {
          "label": "Micro-transports KL",
          "myr": 40,
          "kind": "estimate"
        },
        {
          "label": "Repas du jour",
          "myr": 140,
          "kind": "estimate"
        },
        {
          "label": "Cafes / boissons",
          "myr": 45,
          "kind": "estimate"
        },
        {
          "label": "Marge chaleur (supprimée)",
          "myr": 0,
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
          "whyGo": "Architecture claire et respiration avant le musee."
        },
        {
          "name": "Islamic Arts Museum Malaysia",
          "timing": "1h30 a 2h",
          "ticket": "RM20/adulte observe",
          "gettingThere": "A pied depuis la mosquee",
          "whyGo": "La pause culturelle dense du bloc final KL."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "08h30 -> 11h30",
          "visit": "Merdeka Square",
          "address": "Dataran Merdeka, Kuala Lumpur",
          "metro": "MRT / LRT puis marche.",
          "taxi": "Grab si depart direct hotel.",
          "visitCost": "Libre",
          "eat": "Petit-dej ou cafe dans le secteur heritage.",
          "foodAddress": "Centre heritage",
          "foodCost": "55 MYR pour 2",
          "drink": "Cafe / eau.",
          "note": "Commencer par la grande place."
        },
        {
          "period": "Apres-midi",
          "time": "13h30 -> 16h30",
          "visit": "Masjid Negara + IAMM",
          "address": "Jalan Perdana, Kuala Lumpur",
          "metro": "Marche logique depuis Merdeka.",
          "taxi": "Grab court si besoin.",
          "visitCost": "IAMM: 40 MYR pour 2",
          "eat": "Lunch heritage simple: kopitiam autour de Pasar Seni / Masjid Negara avant le musee.",
          "foodAddress": "Secteur Masjid Negara / IAMM",
          "foodCost": "55 MYR pour 2",
          "drink": "Boisson fraiche avant le musee.",
          "note": "Une seule grande boucle patrimoine."
        }
      ]
    },
    {
      "id": 17,
      "slug": "jour-17",
      "dayLabel": "Jour 17",
      "dateLabel": "Mercredi 2 septembre 2026",
      "city": "Kuala Lumpur -> vol retour",
      "overnight": "Nuit en vol",
      "highlight": "Dernier jour a Kuala Lumpur, sortie propre vers KLIA et vol retour.",
      "transportSummary": "Grab / metro local + KLIA Ekspres + vol",
      "photo": "assets/photos/visits/klia.jpg",
      "photoAlt": "Terminal aeroportuaire de Kuala Lumpur",
      "deepDive": "Ne rien programmer de fixe. Le but est de sortir de KL proprement et d'arriver a l'aeroport avec de la marge.",
      "segments": [
        {
          "label": "Matin",
          "title": "Matinee souple",
          "bullets": [
            "Petit-dej sans stress.",
            "Check-out et depot bagages si necessaire."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Route vers KLIA",
          "bullets": [
            "KL Sentral puis KLIA Ekspres.",
            "Arriver 3h avant vol international."
          ]
        },
        {
          "label": "Soir",
          "title": "Vol de retour",
          "bullets": [
            "Repas aeroport.",
            "Sommeil fragmente et escale."
          ]
        }
      ],
      "access": {
        "metro": "MRT/Grab vers KL Sentral, puis KLIA Ekspres.",
        "taxi": "Avec valises, Grab vers KL Sentral puis train aeroport reste simple."
      },
      "tips": [
        "Aucun rendez-vous fixe ce jour-la.",
        "Garder veste legere et accessoires sommeil en cabine."
      ],
      "toiletStops": [
        {
          "label": "The Colony / KLCC matin",
          "query": "toilets near The Colony By Infinitum KLCC Kuala Lumpur",
          "note": "Point de depart avant check-out ou dernier achat."
        },
        {
          "label": "KL Sentral avant KLIA Ekspres",
          "query": "toilets near KL Sentral KLIA Ekspres",
          "note": "A utiliser avant le train aeroport."
        },
        {
          "label": "KLIA depart international",
          "query": "toilets near KLIA international departures",
          "note": "Dernier repere fiable avant controles, repas et embarquement."
        }
      ],
      "budget": [
        {
          "label": "KLIA Ekspres (2 adultes)",
          "myr": 110,
          "kind": "official"
        },
        {
          "label": "Repas du jour",
          "myr": 100,
          "kind": "estimate"
        },
        {
          "label": "Transfert urbain vers KL Sentral",
          "myr": 40,
          "kind": "estimate"
        },
        {
          "label": "Marge aeroport / snacks",
          "myr": 80,
          "kind": "estimate"
        }
      ],
      "visitCards": [
        {
          "name": "KL Sentral -> KLIA",
          "timing": "3h avant le vol international",
          "ticket": "RM55/adulte observe",
          "gettingThere": "KLIA Ekspres",
          "whyGo": "Sortir proprement de Kuala Lumpur sans risque de circulation."
        },
        {
          "name": "Vol retour",
          "timing": "Soiree / nuit",
          "ticket": "Inclus dans le budget long-courrier",
          "gettingThere": "Terminal selon compagnie",
          "whyGo": "Fermeture logistique du voyage."
        }
      ],
      "ultraPlan": [
        {
          "period": "Matin",
          "time": "09h00 -> 12h30",
          "visit": "Matinee souple, check-out et bagages",
          "address": "The Colony KLCC / quartier final",
          "metro": "Rester proche du logement.",
          "taxi": "Grab seulement si depot bagages ou dernier achat utile.",
          "visitCost": "Libre",
          "eat": "Petit-dej simple ou brunch proche.",
          "foodAddress": "KLCC / Bukit Bintang",
          "foodCost": "45 MYR pour 2",
          "drink": "Cafe, eau et hydratation avant vol.",
          "note": "Aucune visite fixe: garder l'energie pour le trajet aeroport."
        },
        {
          "period": "Apres-midi",
          "time": "H-4 -> H-3",
          "visit": "KL Sentral puis KLIA Ekspres",
          "address": "KL Sentral -> KLIA",
          "metro": "MRT ou Grab vers KL Sentral.",
          "taxi": "Grab si vous avez les valises.",
          "visitCost": "KLIA Ekspres: 110 MYR pour 2",
          "eat": "Dernier repas simple a l'aeroport.",
          "foodAddress": "KLIA",
          "foodCost": "80 MYR pour 2",
          "drink": "Eau pour le vol.",
          "note": "Le confort vient de la marge, pas d'une derniere visite."
        },
        {
          "period": "Soir / diner",
          "time": "19h30 -> 21h30",
          "visit": "Repas aeroport et embarquement",
          "address": "KLIA",
          "metro": "Deja a l'aeroport.",
          "taxi": "Sans objet une fois a KLIA.",
          "visitCost": "Inclus dans marge aeroport",
          "eat": "Repas simple a KLIA avant l'embarquement.",
          "foodAddress": "KLIA",
          "foodCost": "80 MYR pour 2",
          "drink": "Eau pour le vol.",
          "note": "Diner aeroport, controles, embarquement et nuit en vol."
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
      "highlight": "Atterrissage le 3 septembre, retour a Genève (récupération voiture) et journée blanche.",
      "transportSummary": "Arrivee Suisse",
      "photo": "assets/photos/visits/geneve.jpg",
      "photoAlt": "Retour a Genève",
      "deepDive": "Le site garde ce jour pour respecter les vraies dates du retour et ne rien programmer d'important.",
      "segments": [
        {
          "label": "Matin",
          "title": "Arrivee et bagages",
          "bullets": [
            "Formalites et recuperation des sacs.",
            "Recuperation voiture au parking et retour maison tranquille."
          ]
        },
        {
          "label": "Apres-midi",
          "title": "Debrief a chaud",
          "bullets": [
            "Ranger papiers et souvenirs fragiles.",
            "Verifier les derniers debits."
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
        "metro": "Pas de transport malaisien ce jour-la.",
        "taxi": "Budget voyage considere clos a l'arrivee en France/Suisse."
      },
      "tips": [
        "Ne rien programmer d'important le jour du retour."
      ],
      "budget": [
        {
          "label": "Budget du jour",
          "myr": 0,
          "kind": "estimate"
        }
      ],
      "visitCards": [
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
          "period": "Matin",
          "time": "Selon arrivee",
          "visit": "Arrivee, bagages et retour maison",
          "address": "Geneve / domicile",
          "metro": "Selon votre retour local.",
          "taxi": "Voiture ou navette depuis l'aéroport de Genève.",
          "visitCost": "Budget clos",
          "eat": "Repas simple a l'arrivee si besoin.",
          "foodAddress": "Maison",
          "foodCost": "0 MYR",
          "drink": "Hydratation et repos.",
          "note": "La meilleure decision est de garder une vraie journee blanche."
        },
        {
          "period": "Apres-midi",
          "time": "Repos",
          "visit": "Journee blanche",
          "address": "Maison",
          "metro": "Aucun.",
          "taxi": "Aucun.",
          "visitCost": "Budget clos",
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
          "visitCost": "Budget clos",
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
