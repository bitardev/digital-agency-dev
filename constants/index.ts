
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