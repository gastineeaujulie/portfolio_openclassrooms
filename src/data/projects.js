export const projects = [
  {
    id: 1,
    title: 'Kasa',
    resume:
      "Application web de location immobilière développée avec React. Interface moderne avec carrousel d'images, collapse animés et navigation fluide via React Router.",
    description:
      "Kasa est une plateforme française de location d'appartements entre particuliers avec plus de 500 annonces par jour. Dans le cadre d'une refonte complète de leur site vieillissant (codé en ASP.NET), j'ai été missionné en tant que développeur front-end freelance pour reconstruire entièrement l'interface utilisateur avec une stack moderne JavaScript.",
    objectifs:
      "Développer l'application front-end de A à Z en React à partir de maquettes Figma responsives, en gérant la navigation multi-pages avec React Router et en affichant dynamiquement les données issues d'un fichier JSON simulant le back-end.",
    achievement:
      "Création de composants React réutilisables, gestion du routage avec React Router, implémentation de logiques d'interface complexes (galerie d'images avec navigation circulaire, composants Collapse animés), stylisation avancée avec Sass et respect strict de coding guidelines professionnelles.",
    result:
      "Application web responsive et fonctionnelle déployée en ligne, fidèle aux maquettes Figma, avec une galerie d'images interactive, des menus déroulants animés et une navigation fluide entre les pages.",
    propositions:
      "Connecter l'application à un vrai back-end Node.js pour remplacer les données JSON statiques, ajouter un système de recherche et de filtres sur les annonces, et améliorer les performances avec du lazy loading sur les images.",
    tech: [
      'React',
      'React Router',
      'Sass',
      'Vite',
      'JavaScript ES6+',
      'Figma',
      'GitHub',
    ],
    github: 'https://github.com/gastineeaujulie/kasa_project.git',
    live: 'https://gastineeaujulie.github.io/kasa_project/',
    image: '/assets/kasa.png',
    category: 'Front-end',
  },
  {
    id: 2,
    title: 'Nina Carducci',
    resume:
      "Optimisation SEO et accessibilité du site portfolio d'une photographe. Amélioration des performances, du référencement naturel et mise en place de données structurées.",
    description:
      "Nina Carducci est une photographe bordelaise dont le site web souffrait de performances médiocres et d'une visibilité limitée sur les moteurs de recherche. En tant que développeur freelance, je lui ai proposé une mission complète d'optimisation SEO, performance et accessibilité, accompagnée d'un rapport d'intervention détaillé.",
    objectifs:
      'Auditer et optimiser le site existant pour améliorer son temps de chargement, son référencement naturel et son accessibilité, tout en corrigeant des bugs fonctionnels identifiés sur la galerie photos.',
    achievement:
      "Audit de performance et d'accessibilité avec Lighthouse et Wave, optimisation des images et du code, mise en place du référencement local avec Schema.org, ajout des balises meta Open Graph pour les réseaux sociaux, correction de bugs JavaScript (navigation modale, filtres de galerie), et rédaction d'un rapport d'intervention professionnel avec comparatifs avant/après.",
    result:
      "Amélioration significative des scores Lighthouse en performance, accessibilité et SEO, temps de chargement réduit grâce à l'optimisation des images, référencement local activé et bugs fonctionnels corrigés — le tout documenté dans un rapport livré au client.",
    propositions:
      'Mettre en place un lazy loading plus poussé, convertir les images au format WebP, et automatiser les audits de performance via une intégration continue.',
    tech: [
      'HTML',
      'CSS',
      'Accessibilité',
      'Lighthouse',
      'Schema.org',
      'SEO',
      'Wave',
    ],
    github: 'https://github.com/gastineeaujulie/Nina-Carducci-Dev.git',
    live: 'https://gastineeaujulie.github.io/Nina-Carducci-Dev/',
    image: '/assets/nina.png',
    category: 'SEO',
  },
  {
    id: 3,
    title: 'Mon Vieux Grimoire',
    resume:
      'API RESTful pour un site de notation de livres. Authentification sécurisée, gestion CRUD complète et optimisation des images uploadées.',
    description:
      "Mon Vieux Grimoire est un site de référencement et de notation de livres développé pour une chaîne de librairies lilloise. Dans le cadre d'une collaboration avec un développeur front-end, j'ai pris en charge l'intégralité de la partie back-end, en charge de créer une API RESTful consommée par un front-end React déjà développé.",
    objectifs:
      "Concevoir et développer un serveur back-end sécurisé permettant aux utilisateurs de créer un compte, d'ajouter des livres avec photos, de les noter et de consulter les notes moyennes — le tout en respectant les bonnes pratiques du Green Code.",
    achievement:
      "Mise en place d'un serveur Express, modélisation des données avec Mongoose, implémentation des opérations CRUD, système d'authentification sécurisé, gestion de l'upload et optimisation automatique des images (Green Code), et structuration du code selon l'architecture MVC.",
    result:
      "API back-end complète et fonctionnelle, connectée avec succès au front-end React existant. Authentification sécurisée opérationnelle, gestion des livres et notations fonctionnelle, et images optimisées automatiquement pour réduire l'empreinte écologique du site. ",
    propositions:
      'Ajouter une pagination sur les listes de livres, mettre en place des tests unitaires sur les routes API, et renforcer la sécurité avec une gestion plus fine des rôles utilisateurs.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Multer', 'Bcrypt', 'JWT'],
    github: 'https://github.com/gastineeaujulie/Mon_vieux_grimoire.git',
    image: '/assets/grimoire.png',
    category: 'Back-end',
  },
];
