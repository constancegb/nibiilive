// EXEMPLE DE COLLECTION
// {
//   collectionName: Le nom de la collection. Ex: 'Hibaa',
//   collectionDescription: Description de la collection. Ex: 'Pochettes 100% coton avec chainette',
//   category: 'Accessoires' OU 'Vêtements' OU 'Maison & Déco',
//   subCategory: 'Sacs & pochettes' OU 'Bonnets' OU 'Headbands' OU 'Crop tops' // A préciser
//   seasonality: 'ete' OU 'hiver',
//   items: [
//     {
//       name: Le nom de l'article. Ex: Hibia',
//       price: Le prix en chiffre. Ex: 60 (pas de guillemets!),
//       img: '',
//       isSold: true OU false (pas de guillemets!),
//       description: Description de l'article. Ex: 'Pochette à rabat, 100% coton, avec chainette en bandoulière ou main\nFermeture composé de 2 boutons en bois\nDimensions : 30cm de largeur / 20cm de hauteur\nAvec ou sans pompon décoratif sur le coté'
//     },
//     { ... }
//   ]
// }
// FIN DE L'EXEMPLE


export const collections = [
  // 1ère collection
  {
    collectionName: 'HiBaa',
    collectionDescription: 'Pochettes 100% coton avec chainette',
    category: 'sacs/pochettes',
    seasonality: 'ete',
    sex: ['femmes', 'hommes'],
    img: 'hibaa',
    items: [
      {
        name: 'Hibia',
        price: 60,
        img: '',
        isSold: false,
        description: 'Pochette à rabat, 100% coton, avec chainette en bandoulière ou main\nFermeture composé de 2 boutons en bois\nDimensions : 30cm de largeur / 20cm de hauteur\nAvec ou sans pompon décoratif sur le coté'
      },
      {
        name: 'Bahi',
        price: 60,
        img: '',
        isSold: false,
        description: 'Pochette à rabat, 100% coton, avec chainette en bandoulière ou main\nFrange sur le rabat de la pochette, fermeture composé d\'un bouton clipsé\nDimensions : 30cm de largeur / 20cm de hauteur\nAvec ou sans pompon décoratif sur le coté'
      },
      {
        name: 'Habi',
        price: 45,
        img: '',
        isSold: false,
        description: 'Pochette à rabat, 100% coton, avec chainette en bandoulière ou main\nFermeture composé d\'un fermoire en acier\nDimensions : 25cm de largeur / 16cm de hauteur\nAvec ou sans décoration sur le coté'
      },
      {
        name: 'Bihaa',
        price: 50,
        img: '',
        isSold: false,
        description: 'Pochette, 100% coton, avec chainette en bandoulière uniquement\nFermeture avec rabat et bouton de fermeture apparent couleur corail\nDimensions : 25cm de largeur / 16cm de hauteur\nDécoré de perles en céramiques sur le côté'
      }
    ]
  }, // FIN de la 1ère collection
  // 2ème collection
  {
    collectionName: 'Yuka',
    collectionDescription: 'Pochettes acrylique avec poignée main',
    category: 'sacs/pochettes',
    seasonality: 'ete',
    sex: ['femmes'],
    img: 'hibaa',
    items: [
      {
        name: 'Euya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\nCouleurs tricolore Bleu, type Oeil grec, dans les tendance du moment.\nDimensions : 33cm de large / 22cm de haut\nMatière : 100% Acrylique'
      },
      {
        name: 'Francya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\nCouleur tricolore Bleu / Blanc / Rouge\nDimensions : 28cm de large / 18cm de haut\nMatière : 100% Acrylique'
      },
      {
        name: 'Corya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\nCouleur tricolore : corail / moutarde / gris\nDimensions : 30cm de large / 20cm de haut\nMatière : 100% Acrylique'
      },
      {
        name: 'Verya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\nCouleur tricolore : jaune / bleu vert / bleu\nDimensions : 30cm de large / 20cm de haut\nMatière : 100% Acrylique'
      },
      {
        name: 'Orya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\nCouleur tricolore : Jaune/ vieux rose / orange\nDimensions : 30cm de large / 20cm de haut\nMatière : 100% Acrylique'
      },
      {
        name: 'Rozya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\n4 Couleurs : Jaune/ vieux rose / orange / gris\nDimensions : 30cm de large / 20cm de haut\nMatière : 100% Acrylique'
      }
    ]
  }, // FIN de la 2ème collection

  // 3ème collection
  {
    collectionName: 'HiBaa',
    collectionDescription: 'Pochettes 100% coton avec chainette',
    category: 'sacs/pochettes',
    seasonality: 'hiver',
    sex: ['femmes'],
    img: 'hibaa',
    items: [
      {
        name: 'Hibia',
        price: 60,
        img: '',
        isSold: false,
        description: 'Pochette à rabat, 100% coton, avec chainette en bandoulière ou main\nFermeture composé de 2 boutons en bois\nDimensions : 30cm de largeur / 20cm de hauteur\nAvec ou sans pompon décoratif sur le coté'
      },
      {
        name: 'Bahi',
        price: 60,
        img: '',
        isSold: false,
        description: 'Pochette à rabat, 100% coton, avec chainette en bandoulière ou main\nFrange sur le rabat de la pochette, fermeture composé d\'un bouton clipsé\nDimensions : 30cm de largeur / 20cm de hauteur\nAvec ou sans pompon décoratif sur le coté'
      },
      {
        name: 'Habi',
        price: 45,
        img: '',
        isSold: false,
        description: 'Pochette à rabat, 100% coton, avec chainette en bandoulière ou main\nFermeture composé d\'un fermoire en acier\nDimensions : 25cm de largeur / 16cm de hauteur\nAvec ou sans décoration sur le coté'
      },
      {
        name: 'Bihaa',
        price: 50,
        img: '',
        isSold: false,
        description: 'Pochette, 100% coton, avec chainette en bandoulière uniquement\nFermeture avec rabat et bouton de fermeture apparent couleur corail\nDimensions : 25cm de largeur / 16cm de hauteur\nDécoré de perles en céramiques sur le côté'
      }
    ]
  }, // FIN de la 3ème collection
  // 4ème collection
  {
    collectionName: 'Yuka',
    collectionDescription: 'Pochettes acrylique avec poignée main',
    category: 'maison/deco',
    seasonality: 'hiver',
    sex: ['femmes'],
    img: 'hibaa',
    items: [
      {
        name: 'Euya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\nCouleurs tricolore Bleu, type Oeil grec, dans les tendance du moment.\nDimensions : 33cm de large / 22cm de haut\nMatière : 100% Acrylique'
      },
      {
        name: 'Francya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\nCouleur tricolore Bleu / Blanc / Rouge\nDimensions : 28cm de large / 18cm de haut\nMatière : 100% Acrylique'
      },
      {
        name: 'Corya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\nCouleur tricolore : corail / moutarde / gris\nDimensions : 30cm de large / 20cm de haut\nMatière : 100% Acrylique'
      },
      {
        name: 'Verya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\nCouleur tricolore : jaune / bleu vert / bleu\nDimensions : 30cm de large / 20cm de haut\nMatière : 100% Acrylique'
      },
      {
        name: 'Orya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\nCouleur tricolore : Jaune/ vieux rose / orange\nDimensions : 30cm de large / 20cm de haut\nMatière : 100% Acrylique'
      },
      {
        name: 'Rozya',
        price: 40,
        img: '',
        isSold: false,
        description: 'Pochettes à rabat, demi lune, tenu à la main\nLa pochette est formée de reliefs en laine et d\'une anse poignée en laine et perles de bois.\n4 Couleurs : Jaune/ vieux rose / orange / gris\nDimensions : 30cm de large / 20cm de haut\nMatière : 100% Acrylique'
      }
    ]
  }, // FIN de la 4ème collection
];
// HEADBAND (Exemple d'une pièce, mais 12 couleurs déjà faites, sur le même modèle)
