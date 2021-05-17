// EXEMPLE DE COLLECTION
// {
//   collectionName: Le nom de la collection entre guillemets. Ex: 'Hibaa',
//   collectionDescription: Description de la collection entre guillemets. Ex: 'Pochettes 100% coton avec chainette',
//   category: 'crop-tops' ou 'sacs/pochettes' ou 'bonnets/headbands' ou 'maison/deco' ou 'bebe' ou 'animaux',
//   seasonality: 'ete' OU 'hiver',
//   isPermanent: true ou false (pas de guillemets! true si c'est une collection permanente, false si non
//   img: Le nom de l'image, qui doit être égal au nom de la collection sans la majuscule. L'image sera donc hibaa.jpg, et ici il faut écrire 'hibaa',
//   items: [
//     {
//       name: 'Hibia',
//       price: Le prix en chiffre. Ex: 60 (pas de guillemets!),
//       img: ['hibaahibia1'], (donc tu nommes l'image en faisant : nom de la collection + nom de l'article + numéro de l'image)
//       isSold: true OU false (pas de guillemets! true si l'objet est vendu, false si non),
//       description: Description de l'article. Ex: 'Pochette à rabat, 100% coton, avec chainette en bandoulière ou main\nFermeture composé de 2 boutons en bois\nDimensions : 30cm de largeur / 20cm de hauteur\nAvec ou sans pompon décoratif sur le coté' (chaque fois que tu veux sauter une ligne, comme dans l'exemple, tu ajoutes : \n )
//     },
//     {
//       name: 'Toto',
//       price: 50,
//       img: ['hibaatoto1', 'hibaatoto2', 'hibaatoto3'], (tu peux mettre plusieurs images à l'aricle comme ici)
//       isSold: false,
//       description: 'Pochette à rabat, 100% coton, avec chainette en bandoulière ou main\nFermeture composé de 2 boutons en bois\nDimensions : 30cm de largeur / 20cm de hauteur\nAvec ou sans pompon décoratif sur le coté'
//     }
//   ]
// }
// FIN DE L'EXEMPLE


export const collections = [
  // 1ère collection
  {
    collectionName: 'Yuka',
    collectionDescription: 'Pochettes à rabat, 100% fait main en forme de demi lune, avec une tenue à la main. Pochette formée de reliefs et d\'une anse poignée ornée de perles de bois. La matière utilisée est 100% Acrylique',
    category: 'sacs/Pochettes',
    seasonality: 'été / hiver',
    isPermanent: false,
    img:['yuka'] ,
    items: [
      {
        name: 'Pena',
        price: 40,
        img: ['pena'],
        isSold: false,
        description: 'Pochette a rabat, de la collection Yuka. Couleur tricolore bleu, blanc, rouge. Les dimensions sont de : 28cm de large et 18cm de hauteur.'
      },
      {
        name: 'Cora',
        price: 40,
        img: ['cora'],
        isSold: false,
        description: 'Pochette a rabat, de la collection Yuka. Couleur tricolore corail,moutarde et gris. Les dimensions sont de : 30cm de large et 20cm de hauteur.'
      },
      {
        name: 'Very',
        price: 40,
        img: ['very'],
        isSold: false,
        description: 'Pochette a rabat, de la collection Yuka. Couleur tricolore jaune, turquoise et bleu. Les dimensions sont de : 30cm de large et 20cm de hauteur.'
      },
      {
        name: 'Ora',
        price: 40,
        img: ['ora'],
        isSold: false,
        description: 'Pochette a rabat, de la collection Yuka. Couleur tricolore jaune, vieux rose et orange. Les dimensions sont de : 30cm de large et 20cm de hauteur.'
      },
      {
        name: 'Rosa',
        price: 40,
        img: ['rosa'],
        isSold: false,
        description: 'Pochette a rabat, de la collection Yuka. composé de quatre couleurs, jaune, vieux rose, orange et gris. Les dimensions sont de : 30cm de large et 20cm de hauteur.'
      },
      // Tu peux ajouter des ARTICLES ici
    ]
  },
  // FIN de la 1ère collection
  // 2ème collection
  {
    collectionName: 'Lima',
    collectionDescription: 'Pochette 100% coton recyclé. Elle se tient à la main, avec une fermeture composée de deux boutons pressions à l\'intérieur. Possibilité de rajouter une chainnette pour le porter à l\'épaule.',
    category: 'sacs/pochettes',
    seasonality: 'été',
    isPermanent: false,
    img: 'lima',
    items: [
      {
        name: 'Oni',
        price: 40,
        img: ['oni'],
        isSold: false,
        description: 'Pièce unique de la collection Lima. Matière, 100% coton recyclé, tenue main, avec double bouton à pression à l\intérieur pour la fermeture.'
      },
      {
        name: 'Ona',
        price: 40,
        img: ['ona'],
        isSold: false,
        description: 'Pièce unique de la collection Lima. Matière, 100% coton recyclé, tenue main, avec double bouton à pression à l\intérieur pour la fermeture.'
      },
      {
        name: 'Oney',
        price: 40,
        img: ['oney'],
        isSold: false,
        description: 'Pièce unique de la collection Lima. Matière, 100% coton recyclé, tenue main, avec double bouton à pression à l\intérieur pour la fermeture.'
      },
      {
        name: 'Uno',
        price: 40,
        img: ['uno'],
        isSold: false,
        description: 'Pièce unique de la collection Lima. Matière, 100% coton recyclé, tenue main, avec double bouton à pression à l\intérieur pour la fermeture.'
      },
      // Tu peux ajouter des ARTICLES ici
    ]
  },
  {
    collectionName: 'Home',
    collectionDescription: 'Articles Home décoration, vous trouverez des pièces uniques pour habiller tous vos espaces. Du tapis au plaid, découvrez ici les collections NiBii de pièces uniques et sur mesures entèrement fait main au crochet',
    category: 'home deco',
    seasonality: 'toute',
    isPermanent: false,
    img: 'home',
    items: [
      {
        name: 'Plaid rosa',
        price: 175,
        img: ['plaid'],
        isSold: false,
        description: 'Plaid multi-usage 100% fait main. Constitué de 30 carrés individuels assemblés. Carrés unis et mélangés dans une déclinaison de rose/beige/gris, possibilité d\ajouter une doublure en tissus sur la face intérieur.'
      },
      {
        name: 'Tapis spirale vert',
        price: 150,
        img: ['vert'],
        isSold: false,
        description: 'Tapis 100% fait main au crochet, diamètre 1.30m. Tapis en déclinaison de verts et bleus. Exemplaire unique'
      },
      {
        name: 'Tapis oeil grec',
        price: 130,
        img: ['greco'],
        isSold: false,
        description: 'Tapis 100% fait main au crochet, diamètre 1.10m. Tapis au style crétois dans les couleurs méditerrannéenes que l\on retrouve sur l\oeil grec'
            },
    ],
  },
  // FIN de la 2ème collection
  // 3ème collection (Est ce que du coup les collections permanentes n'ont pas d'articles ? Juste une photo qui présente le modèle ?)
  {
    collectionName: 'Bonnet pecheur',
    collectionDescription: 'Bonnet 100% fait main sur mesure en différents coloris. Couleur au choix à voir directement avec la céatrice qui se fera un plaisir de vous répondre dans les mielleurs délais, Bonnet en double maille, avec une ourlet simple ou double suivant la manière de le porter. 60% acrylique et 40% laine',
    category: 'Bonnet',
    seasonality: 'Hiver',
    price: 40,
    isPermanent: true,
    img: 'bonnet pecheur',
    items: []
  },
  {
    collectionName: 'Headband',
    collectionDescription: 'Head band sur mesure, en différents coloris. Couleur au choix à voir directment avec la créatrice qui se fera un plaisir de vous répondre dans les meilleurs délais',
    category: 'Bonnet',
    seasonality: 'Hiver',
    price: 25,
    isPermanent: true,
    img: 'headband',
    items: []
  },
  // FIN de la 3ème collection
  // Tu peux ajouter des COLLECTIONS ici si tu veux en mettre plus que 3
];
