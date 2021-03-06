// EXEMPLE DE COLLECTION
// {
//   collectionName: Le nom de la collection entre guillemets. Ex: 'Hibaa',
//   collectionDescription: Description de la collection entre guillemets. Ex: 'Pochettes 100% coton avec chainette',
//   category: /!\ toujours en minuscules - il faut que la catégorie soit exactement égale à : 'crop-tops' ou 'sacs/pochettes' ou 'bonnets/headbands' ou 'maison/deco' ou 'animaux',
//   seasonality: /!\ respecter les minuscules, les crochets et l'absence d'accent ! Donc soit exactement ['ete'] OU ['hiver'] OU ['ete', 'hiver'],
//   isPermanent: true ou false (pas de guillemets! true si c'est une collection permanente, false si non
//   img: ['hibaa']  => Donc c'est le nom de la collection SANS LA MAJUSCULE, avec guillemets et crochets. Le fichier de l'image dans le dossier data devra s'appeler hibaa.jpg. Quand c'est une collection NON permanente, il n'y a qu'une seule image ; quand c'est une collection permanente, il y en a plusieurs, on met donc des numéros ; ex: ['headband1', 'headband2', 'headband3']
//   price: /!\ cette ligne n'est présente que dans les collections permanentes (sans guillements, ex: 40) !!! Si c'est pas une collection permanente, supprimer la ligne !
//
//   /!\ Si c'est une collection permanente, il n'y a pas d'items : on rempli donc comme ça=>  items: []
//   items: [
//     {
//       name: 'Hibia',
//       price: Le prix en chiffre. Ex: 60 (pas de guillemets!),
//       img: ['hibaahibia'], (donc tu nommes l'image en faisant : nom de la collection + nom de l'article, le tout entre guillemets et crochets) Toujours une seule image !
//       isSold: true OU false (pas de guillemets! true si l'objet est vendu, false si non),
//       description: Description de l'article. Ex: 'Pochette à rabat, 100% coton, avec chainette en bandoulière ou main\nFermeture composé de 2 boutons en bois\nDimensions : 30cm de largeur / 20cm de hauteur\nAvec ou sans pompon décoratif sur le coté' (chaque fois que tu veux sauter une ligne, comme dans l'exemple, tu ajoutes : \n )
//     },
//     {
//       name: 'Toto',
//       price: 50,
//       img: ['hibaatoto'],
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
    category: 'sacs/pochettes',
    seasonality: ['ete', 'hiver'],
    isPermanent: false,
    img: ['yuka'],
    items: [
      {
        name: 'Pena',
        price: 40,
        img: ['yukapena'],
        isSold: false,
        description: 'Pochette a rabat, de la collection Yuka. Couleur tricolore bleu, blanc, rouge. Les dimensions sont de : 28cm de large et 18cm de hauteur.'
      },
      {
        name: 'Cora',
        price: 40,
        img: ['yukacora'],
        isSold: false,
        description: 'Pochette a rabat, de la collection Yuka. Couleur tricolore corail,moutarde et gris. Les dimensions sont de : 30cm de large et 20cm de hauteur.'
      },
      {
        name: 'Very',
        price: 40,
        img: ['yukavery'],
        isSold: false,
        description: 'Pochette a rabat, de la collection Yuka. Couleur tricolore jaune, turquoise et bleu. Les dimensions sont de : 30cm de large et 20cm de hauteur.'
      },
      {
        name: 'Ora',
        price: 40,
        img: ['yukaora'],
        isSold: false,
        description: 'Pochette a rabat, de la collection Yuka. Couleur tricolore jaune, vieux rose et orange. Les dimensions sont de : 30cm de large et 20cm de hauteur.'
      },
      {
        name: 'Rosa',
        price: 40,
        img: ['yukarosa'],
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
    seasonality: ['ete'],
    isPermanent: false,
    img: ['lima'],
    items: [
      {
        name: 'Oni',
        price: 40,
        img: ['limaoni'],
        isSold: false,
        description: 'Pièce unique de la collection Lima. Matière, 100% coton recyclé, tenue main, avec double bouton à pression à l\intérieur pour la fermeture.'
      },
      {
        name: 'Ona',
        price: 40,
        img: ['limaona'],
        isSold: false,
        description: 'Pièce unique de la collection Lima. Matière, 100% coton recyclé, tenue main, avec double bouton à pression à l\intérieur pour la fermeture.'
      },
      {
        name: 'Oney',
        price: 40,
        img: ['limaoney'],
        isSold: false,
        description: 'Pièce unique de la collection Lima. Matière, 100% coton recyclé, tenue main, avec double bouton à pression à l\intérieur pour la fermeture.'
      },
      {
        name: 'Uno',
        price: 40,
        img: ['limauno'],
        isSold: false,
        description: 'Pièce unique de la collection Lima. Matière, 100% coton recyclé, tenue main, avec double bouton à pression à l\intérieur pour la fermeture.'
      },
      // Tu peux ajouter des ARTICLES ici
    ]
  }, // fin de la 2e collection
  {  // 3ème collection
    collectionName: 'Home',
    collectionDescription: 'Articles Home décoration, vous trouverez des pièces uniques pour habiller tous vos espaces. Du tapis au plaid, découvrez ici les collections NiBii de pièces uniques et sur mesures entèrement fait main au crochet',
    category: 'maison/deco',
    seasonality: ['ete', 'hiver'],
    isPermanent: false,
    img: ['home'],
    items: [
      {
        name: 'Plaid rosa',
        price: 175,
        img: ['homeplaidrosa'],
        isSold: false,
        description: 'Plaid multi-usage 100% fait main. Constitué de 30 carrés individuels assemblés. Carrés unis et mélangés dans une déclinaison de rose/beige/gris, possibilité d\ajouter une doublure en tissus sur la face intérieur.'
      },
      {
        name: 'Tapis spirale vert',
        price: 150,
        img: ['hometapisspiralevert'],
        isSold: false,
        description: 'Tapis 100% fait main au crochet, diamètre 1.30m. Tapis en déclinaison de verts et bleus. Exemplaire unique'
      },
    ],
  },
  // FIN de la 3ème collection
  // 4ème collection
  {
    collectionName: 'Bonnet pecheur',
    collectionDescription: 'Bonnet 100% fait main sur mesure en différents coloris. Couleur au choix à voir directement avec la céatrice qui se fera un plaisir de vous répondre dans les mielleurs délais, Bonnet en double maille, avec une ourlet simple ou double suivant la manière de le porter. 60% acrylique et 40% laine',
    category: 'bonnets/headbands',
    seasonality: ['hiver'],
    price: 40,
    isPermanent: true,
    img: ['bonnetpecheur1', 'bonnetpecheur2', 'bonnetpecheur3', 'bonnetpecheur4'],
    items: []
  },
  // FIN de la 4ème collection
  // 5ème collection
  {
    collectionName: 'Headband',
    collectionDescription: 'Head band sur mesure, en différents coloris. Couleur au choix à voir directment avec la créatrice qui se fera un plaisir de vous répondre dans les meilleurs délais',
    category: 'bonnets/headbands',
    seasonality: ['hiver'],
    price: 25,
    isPermanent: true,
    img: ['headband1', 'headband2', 'headband3'],
    items: []
  },
  // FIN de la 5ème collection
  // Tu peux ajouter des COLLECTIONS ici si tu veux en mettre plus
];
