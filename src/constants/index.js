import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front End",
      icon: web,
    },
    {
      title: "Responsive Design",
      icon: creator,
    },
    {
      title: "Clean Code",
      icon: web,
    },
    {
      title: "Dynamik Website",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Freelancing",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Yousif",
      image: "https://thumb.ac-illust.com/30/30fa090868a2f8236c55ef8c1361db01_t.jpeg"
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Ahmed Khaled",
      image : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Nourhan Atef",
      image: "https://thumb.ac-illust.com/30/30fa090868a2f8236c55ef8c1361db01_t.jpeg"
    },
  ];
  
  const projects = [
    {
      name: "Dashboard",
      description:
        "Integrated dashboard",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "some js",
          color: "text-teal-500",
        },
      ],
      image: "https://samehrefaayportfolio.netlify.app/static/8e73f0b1590110b6afa7ad6bb7aa4bc8/43fa5/elzero-dashboard-screens.png",
      source_code_link: "https://abdoahmed7765.github.io/pr6/index.html",
    },
    {
      name: "Clothing store",
      description:
        "simple Clothing store",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: "https://i.pinimg.com/originals/b7/3a/86/b73a8649b21aeda0ae92cf25954613b3.png",
      source_code_link: "https://abdoahmed7765.github.io/pr5/",
    },
    {
      name: "Abdo World",
      description:
        "Here is everything about my life. Books Iam reading, Games Iam Playing, Stories and Events",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: "data:image/jpeg;base64,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",
      source_code_link: "https://abdoahmed7765.github.io/pr3/",
    },
    {
      name: "Hangman game",
      description:
        "The game will choose a random word for you from movies, songs, etc., and you will guess what the word is.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "text-teal-500",
        },
      ],
      image: "https://i.ytimg.com/vi/hSSdc8vKP1I/hqdefault.jpg",
      source_code_link: "https://abdoelhashem.github.io/new/",
    },
    {
      name: "Saraha",
      description:
        "Saraha, a simple website that provides you with the service of communicating with Abdo without him knowing you.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "text-teal-500",
        },
      ],
      image: "https://kinsta.com/wp-content/uploads/2020/02/web-design-best-practices.jpg",
      source_code_link: "https://abdoelhashem.github.io/fav/",
    },
    {
      name: "Clothing store",
      description:
        "simple Clothing store",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "some js",
          color: "text-teal-100",
        },
      ],
      image: "https://i0.wp.com/themes.svn.wordpress.org/clothing-store/3.4/screenshot.png?w=572&strip=all",
      source_code_link: "https://abdoahmed7765.github.io/pr4/",
    },
    {
      name: "portfolio",
      description:
        "portfolio web siste for a company work in programming",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: "https://mostaql.hsoubcdn.com/uploads/portfolios/1379460/63bdc8cb1df76/1.png",
      source_code_link: "https://abdoahmed7765.github.io/abdo/",
    },
    {
      name: "portfolio",
      description:
        "kasper , portfolio web siste for a company work in programming",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: "https://pbs.twimg.com/media/E0aNywkXIAEJE51.jpg",
      source_code_link: "https://abdoahmed7765.github.io/pr2/",
    },
    {
      name: "Chat bot",
      description:
        "simple chat bot, have two words : hello - how are you",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "text-teal-100",
        },
      ],
      image: "https://assets-global.website-files.com/616fe00750360a032b04dfc1/62a89a32dfb91faec5bf9b2e_62a892b0d88f2cef55de0e6b_WA-WhatsApp-Opt-in.jpeg",
      source_code_link: "https://abdoahmed7765.github.io/pr7/chat",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };