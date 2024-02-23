
export const Socials = [
  {
    name: "Telegram",
    src: "/telegram.svg",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
  },
  {
    name: "Whatsapp",
    src: "/whatsapp.svg",
  },
  {
    name: "Twitter",
    src: "/twitter.svg",
  },
];
export const Features = [
  {
    title: "AI",
    text: "Projets basés sur l'IA",
    src: "/icon_ai.svg",
    selected: false,
  },
  {
    title: "Croissance",
    text: "Obtenez plus de clients avec notre accompagnement",
    src: "/icon_croissance.svg",
    selected: true,
  },
  {
    title: "IT",
    text: "Développement Site Web amélioré",
    src: "/icon_it.svg",
    selected: false,
  },
  {
    title: "Qualité",
    text: "Assurance qualité",
    src: "/icon_quality.svg",
    selected: false,
  },
  {
    title: "Soutien",
    text: "Gagnez du temps et de l'argent",
    src: "/icon_soutien.svg",
    selected: false,
  },
];
export const FeaturesApropos = [
  {
    title: "Construire",
    description: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
    icon: "/icon_ai.svg",
    selected: true,
  },
  {
    title: "Découvrir",
    description: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
    icon: "/icon_decouvrir.svg",
    selected: false,
  },
  {
    title: "Stratégie",
    description: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
    icon: "/icon_croissance.svg",
    selected: false,
  },
  {
    title: "Exécuter",
    description: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
    icon: "/icon_executer.svg",
    selected: false,
  },
];

export const NavLinks = [
  {
    name: "/",
    title: "Accueil",
    link: "/",
  },
//   {
//     name: "/projets",
//     title: "Projets",
//     link: "/projets",
//   },
  {
    name: "/services",
    title: "Services",
    link: "/services",
  },
  {
    name: "/propos",
    title: "à propos",
    link: "/propos",
  },
];

export const Projects = [
  {
    image: "/project_preview.webp",
    title: "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    description: "Lorem ipsum dolor concesoeur.",
    imageOrientation: "right",
    btnText: "Voir ce projet",
    projectUrl: "/projets/projet1",
    projectNum: "1",
    lightBG: true,
  },
  {
    image: "/project_preview.webp",
    title: "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    description: "Lorem ipsum dolor concesoeur.",
    imageOrientation: "left",
    btnText: "Voir ce projet",
    projectUrl: "/projets/projet1",
    projectNum: "2",
    lightBG: false,
  },
  {
    image: "/project_preview.webp",
    title: "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    description: "Lorem ipsum dolor concesoeur.",
    imageOrientation: "right",
    btnText: "Voir ce projet",
    projectUrl: "/projets/projet1",
    projectNum: "3",
    lightBG: true,
  },
]

export const Services = [
    {
      icon: "/icon_it.svg",
      image: "/project_preview.webp",
      title: "Site vitrine et applications",
      description: "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
      btnText: "Voir plus",
      serviceUrl: "/services/site-vitrine-et-applications",
      pageDetailContentSettings: [
        {
            componentName: "ImageTextSection",
            title: "Les avantages d'avoir un site web pour votre entreprise",
            subtitle: "Site vitrine et applications",
            description: "Un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
            image: "/exp_bg.webp",
            imageSide: "left",
            btnText: "Découvrir notre collection de modèle près à utiliser",
            btnUrl: "/services/site-vitrine-et-applications/models",
            btnSolid: true,
        },
        {
            componentName: "FeaturesSection",
            title: "Le processus est simple et facile",
            subtitle: "Découvrez comment concevoir un site web vitrine en 4 étapes simples et efficaces !",
            numberdFeatures: [
                {
                    icon:"/icon_decouvrir.svg",
                    title:"Etape",
                    description:"Planification et Conception",
                },
                {
                    icon:"/icon_ai.svg",
                    title:"Etape",
                    description:"Développement et Construction",
                },
                {
                    icon:"/icon_croissance.svg",
                    title:"Etape",
                    description:"Test et Révision",
                },
                {
                    icon:"/icon_executer.svg",
                    title:"Etape",
                    description:"Mise en ligne et Promotion",
                },
            ]
        },
        {
            componentName: "ImageTextSection",
            title: "booster votre activité",
            subtitle: "Les meilleures applications pour",
            description: "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
            image: "/booster_bg.webp",
            imageSide: "right",
        },
        {
            componentName: "FAQSection",
            title: "FAQ",
            subtitle: "Questions fréquemment posées",
            faq: [
                {
                    question: "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
                    answer: "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
                },
                {
                    question: "Besoin d'aide pour construire votre site vitrine ou votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Besoin d'informations sur les sites vitrines et les applications?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
            ]
        },
      ]
    },
    {
      icon: "/icon_quality.svg",
      image: "/project_preview.webp",
      title: "Réseau sociaux",
      description: "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
      btnText: "Voir plus",
      serviceUrl: "/services/service2",
      pageDetailContentSettings: [
        {
            componentName: "ImageTextSection",
            title: "Les avantages pour votre entreprise",
            subtitle: "Site vitrine et applications",
            description: "Découvrez comment un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
            image: "/exp_bg.webp",
            imageSide: "left",
        },
        {
            componentName: "FeaturesSection",
            title: "La meilleure plateforme pour votre site vitrine",
            subtitle: "Comment choisir",
            numberdFeatures: [
                {
                    icon:"/icon_ai.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_decouvrir.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_croissance.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_executer.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
            ]
        },
        {
            componentName: "ImageTextSection",
            title: "booster votre activité",
            subtitle: "Les meilleures applications pour",
            description: "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
            image: "/booster_bg.webp",
            imageSide: "right",
        },
        {
            componentName: "FAQSection",
            title: "FAQ",
            subtitle: "Questions fréquemment posées",
            faq: [
                {
                    question: "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
                    answer: "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
                },
                {
                    question: "Besoin d'aide pour construire votre site vitrine ou votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Besoin d'informations sur les sites vitrines et les applications?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
            ]
        },
      ]
    },
    {
      icon: "/icon_croissance.svg",
      image: "/project_preview.webp",
      title: "Maintenance applicative",
      description: "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
      btnText: "Voir plus",
      serviceUrl: "/services/service3",
      pageDetailContentSettings: [
        {
            componentName: "ImageTextSection",
            title: "Les avantages pour votre entreprise",
            subtitle: "Site vitrine et applications",
            description: "Découvrez comment un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
            image: "/exp_bg.webp",
            imageSide: "left",
        },
        {
            componentName: "FeaturesSection",
            title: "La meilleure plateforme pour votre site vitrine",
            subtitle: "Comment choisir",
            numberdFeatures: [
                {
                    icon:"/icon_ai.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_decouvrir.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_croissance.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_executer.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
            ]
        },
        {
            componentName: "ImageTextSection",
            title: "booster votre activité",
            subtitle: "Les meilleures applications pour",
            description: "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
            image: "/booster_bg.webp",
            imageSide: "right",
        },
        {
            componentName: "FAQSection",
            title: "FAQ",
            subtitle: "Questions fréquemment posées",
            faq: [
                {
                    question: "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
                    answer: "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
                },
                {
                    question: "Besoin d'aide pour construire votre site vitrine ou votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Besoin d'informations sur les sites vitrines et les applications?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
            ]
        },
      ]
    },
    {
      icon: "/icon_ai.svg",
      image: "/project_preview.webp",
      title: "Ecommerce",
      description: "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
      btnText: "Voir plus",
      serviceUrl: "/services/service1",
      pageDetailContentSettings: [
        {
            componentName: "ImageTextSection",
            title: "Les avantages pour votre entreprise",
            subtitle: "Site vitrine et applications",
            description: "Découvrez comment un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
            image: "/exp_bg.webp",
            imageSide: "left",
        },
        {
            componentName: "FeaturesSection",
            title: "La meilleure plateforme pour votre site vitrine",
            subtitle: "Comment choisir",
            numberdFeatures: [
                {
                    icon:"/icon_ai.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_decouvrir.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_croissance.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_executer.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
            ]
        },
        {
            componentName: "ImageTextSection",
            title: "booster votre activité",
            subtitle: "Les meilleures applications pour",
            description: "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
            image: "/booster_bg.webp",
            imageSide: "right",
        },
        {
            componentName: "FAQSection",
            title: "FAQ",
            subtitle: "Questions fréquemment posées",
            faq: [
                {
                    question: "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
                    answer: "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
                },
                {
                    question: "Besoin d'aide pour construire votre site vitrine ou votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Besoin d'informations sur les sites vitrines et les applications?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
            ]
        },
      ]
    },
    {
      icon: "/icon_quality.svg",
      image: "/project_preview.webp",
      title: "Intelligence artificielle",
      description: "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
      btnText: "Voir plus",
      serviceUrl: "/services/service2",
      pageDetailContentSettings: [
        {
            componentName: "ImageTextSection",
            title: "Les avantages pour votre entreprise",
            subtitle: "Site vitrine et applications",
            description: "Découvrez comment un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
            image: "/exp_bg.webp",
            imageSide: "left",
        },
        {
            componentName: "FeaturesSection",
            title: "La meilleure plateforme pour votre site vitrine",
            subtitle: "Comment choisir",
            numberdFeatures: [
                {
                    icon:"/icon_ai.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_decouvrir.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_croissance.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_executer.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
            ]
        },
        {
            componentName: "ImageTextSection",
            title: "booster votre activité",
            subtitle: "Les meilleures applications pour",
            description: "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
            image: "/booster_bg.webp",
            imageSide: "right",
        },
        {
            componentName: "FAQSection",
            title: "FAQ",
            subtitle: "Questions fréquemment posées",
            faq: [
                {
                    question: "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
                    answer: "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
                },
                {
                    question: "Besoin d'aide pour construire votre site vitrine ou votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Besoin d'informations sur les sites vitrines et les applications?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
            ]
        },
      ]
    },
    {
      icon: "/icon_croissance.svg",
      image: "/project_preview.webp",
      title: "Sourcing",
      description: "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
      btnText: "Voir plus",
      serviceUrl: "/services/service3",
      pageDetailContentSettings: [
        {
            componentName: "ImageTextSection",
            title: "Les avantages pour votre entreprise",
            subtitle: "Site vitrine et applications",
            description: "Découvrez comment un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
            image: "/exp_bg.webp",
            imageSide: "left",
        },
        {
            componentName: "FeaturesSection",
            title: "La meilleure plateforme pour votre site vitrine",
            subtitle: "Comment choisir",
            numberdFeatures: [
                {
                    icon:"/icon_ai.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_decouvrir.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_croissance.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    icon:"/icon_executer.svg",
                    title:"Etape",
                    description:"Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
            ]
        },
        {
            componentName: "ImageTextSection",
            title: "booster votre activité",
            subtitle: "Les meilleures applications pour",
            description: "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
            image: "/booster_bg.webp",
            imageSide: "right",
        },
        {
            componentName: "FAQSection",
            title: "FAQ",
            subtitle: "Questions fréquemment posées",
            faq: [
                {
                    question: "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
                    answer: "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
                },
                {
                    question: "Besoin d'aide pour construire votre site vitrine ou votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
                {
                    question: "Besoin d'informations sur les sites vitrines et les applications?",
                    answer: "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
                },
            ]
        },
      ]
    },
]
export const ServicesNav = [
    {
      title: "Développement d’application",
      url: "/services/service1",
    },
    {
      title: "Création des sites web",
      url: "/services/service2",
    },
    {
      title: "UI/UX design",
      url: "/services/service1",
    },
    {
      title: "Référencement / SEO",
      url: "/services/service1",
    },
    {
      title: "Audit",
      url: "/services/service1",
    },
    {
      title: "Maintenance",
      url: "/services/service1",
    },
]

export const AboutNav = [
    {
      title: "à propos de nous",
      url: "/propos",
    },
    {
      title: "Carrière",
      url: "/carriere",
    },
    {
      title: "Presse",
      url: "/presse",
    },
    {
      title: "Contact",
      url: "/Contact",
    },
]

export const TermsConditionsNav = [
    {
      title: "Termes et conditions",
      url: "/termes-condtions",
    },
    {
      title: "Politique de confidentialité",
      url: "/politique-confidentialite",
    },
]

export const MissionAndVision = [
    {
      question: "Perspectives et stratégie",
      answer: "Ac tincidunt vitae semper quis. Non odio euismod lacinia at quis risus. Integer quis auctor elit sed lacinia vita eru vulputate mi sit amet.",
      selected: true,
    },
    {
      question: "Planification et achat média",
      answer: "Ac tincidunt vitae semper quis. Non odio euismod lacinia at quis risus. Integer quis auctor elit sed lacinia vita eru vulputate mi sit amet.",
      selected: false,
    },
    {
      question: "Conseil et transformation des données",
      answer: "Ac tincidunt vitae semper quis. Non odio euismod lacinia at quis risus. Integer quis auctor elit sed lacinia vita eru vulputate mi sit amet.",
      selected: false,
    },
    {
      question: "L'intelligence artificielle pour tous",
      answer: "Ac tincidunt vitae semper quis. Non odio euismod lacinia at quis risus. Integer quis auctor elit sed lacinia vita eru vulputate mi sit amet.",
      selected: false,
    },
]

export const ContactAddresses = [
    {
        city: "Paris",
        address: "1 Rue des Fossés Saint-Bernard, 75005 Paris, France",
        tel: "+33 1 40 51 38 38",
        email: "paris@mmo.agency",
        position: {
            lat: 48.8563855,
            lng: 2.3464551,
        }
    },
    {
        city: "Casablanca",
        address: "44 Bd d'Anfa, Casablanca 20000 Maroc",
        tel: "+212 5 36 51 38 38",
        email: "casablanca@mmo.agency",
        position: {
            lat: 33.569273,
            lng: -7.625944,
        }
    },
    {
        city: "Rabat",
        address: "44 Bd d'Anfa, Rabat 20000 Maroc",
        tel: "+212 5 21 51 38 38",
        email: "rabat@mmo.agency",
        position: {
            lat: 33.9919462,
            lng: -6.8521352,
        }
    },
]
export const SiteVitrineModels = [
    {
        title: "Découvrir notre modèle de site web pour votre GYM",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: true,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_gym.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_gym.webp",
        modelUrl: "/service/site-vitrine-et-applications/gym",
        previewUrl: "/service/site-vitrine-et-applications/gym",
        lightBG: true,
        category: "Sport",
    },
    {
        title: "Découvrir notre modèle de site web pour votre Entreprise IT",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: true,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_it.webp",
        imageOrientation: "left",
        imageLandingFull: "/templates/modele_it.webp",
        modelUrl: "/service/site-vitrine-et-applications/it-entreprise",
        previewUrl: "/service/site-vitrine-et-applications/it-entreprise",
        lightBG: false,
        category: "Entreprise",
    },
    {
        title: "Découvrir notre modèle de site web pour votre Café",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: true,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_cafe.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_cafe.webp",
        modelUrl: "/service/site-vitrine-et-applications/cafe",
        previewUrl: "/service/site-vitrine-et-applications/cafe",
        lightBG: true,
        category: "E-commerce",
    },
    {
        title: "Découvrir notre modèle de site web pour votre Projet AI",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: false,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_ai.webp",
        imageOrientation: "left",
        imageLandingFull: "/templates/modele_ai.webp",
        modelUrl: "/service/site-vitrine-et-applications/ai",
        previewUrl: "/service/site-vitrine-et-applications/ai",
        lightBG: false,
        category: "AI",
    },
    {
        title: "Découvrir notre modèle de site web pour votre APP",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: false,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_app.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_app.webp",
        modelUrl: "/service/site-vitrine-et-applications/app",
        previewUrl: "/service/site-vitrine-et-applications/app",
        lightBG: true,
        category: "PME",
    },
    {
        title: "Découvrir notre modèle de site web pour votre Blog",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: false,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_blog_demo.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_blog_demo.webp",
        modelUrl: "/service/site-vitrine-et-applications/blog-demo",
        previewUrl: "/service/site-vitrine-et-applications/blog-demo",
        lightBG: true,
        category: "Personnel",
    },
    {
        title: "Découvrir notre modèle de site web pour votre Business",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: false,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_business.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_business.webp",
        modelUrl: "/service/site-vitrine-et-applications/business",
        previewUrl: "/service/site-vitrine-et-applications/business",
        lightBG: true,
        category: "Entreprise",
    },
    {
        title: "Découvrir notre modèle de site web pour Charité",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: false,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_charity.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_charity.webp",
        modelUrl: "/service/site-vitrine-et-applications/charite",
        previewUrl: "/service/site-vitrine-et-applications/charite",
        lightBG: true,
        category: "Événement",
    },
    {
        title: "Découvrir notre modèle de site web pour Christmas",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: false,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_christmas.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_christmas.webp",
        modelUrl: "/service/site-vitrine-et-applications/christmas",
        previewUrl: "/service/site-vitrine-et-applications/christmas",
        lightBG: true,
        category: "Événement",
    },
    {
        title: "Découvrir notre modèle de site web pour votre App",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: false,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_classic_app.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_classic_app.webp",
        modelUrl: "/service/site-vitrine-et-applications/classic-app",
        previewUrl: "/service/site-vitrine-et-applications/classic-app",
        lightBG: true,
        category: "PME",
    },
    {
        title: "Découvrir notre modèle de site web pour votre Business",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: false,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_classic_business.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_classic_business.webp",
        modelUrl: "/service/site-vitrine-et-applications/classic-business",
        previewUrl: "/service/site-vitrine-et-applications/classic-business",
        lightBG: true,
        category: "Entreprise",
    },
    {
        title: "Découvrir notre modèle de site web pour votre SAAS",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: false,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_classic_saas.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_classic_saas.webp",
        modelUrl: "/service/site-vitrine-et-applications/classic-saas",
        previewUrl: "/service/site-vitrine-et-applications/classic-saas",
        lightBG: true,
        category: "Entreprise",
    },
    {
        title: "Découvrir notre modèle de site web pour votre SAAS",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: false,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_modern_saas.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_modern_saas.webp",
        modelUrl: "/service/site-vitrine-et-applications/modern-saas",
        previewUrl: "/service/site-vitrine-et-applications/modern-saas",
        lightBG: true,
        category: "Entreprise",
    },
    {
        title: "Découvrir notre modèle de site web pour votre projet de construction",
        description: "Paramétrage faciles en simples cliques",
        btnText: "Voir la démo",
        featured: false,
        icon: "/icon_quality.svg",
        imageThumbnail: "/templates/modele_construction.webp",
        imageOrientation: "right",
        imageLandingFull: "/templates/modele_construction.webp",
        modelUrl: "/service/site-vitrine-et-applications/construction",
        previewUrl: "/service/site-vitrine-et-applications/construction",
        lightBG: true,
        category: "PME",
    },
]