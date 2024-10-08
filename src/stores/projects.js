import {writable} from 'svelte/store';

export let projects = [
  {
    "title": "AnimeFlix",
    "repo": "https://github.com/dipak-01/AnimeFlix",
    "stack": [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    "desc": "AnimeFlix is a streaming website where you can watch your favorite anime series and movies.",
    "pre": "Knowing Redux would be beneficial.",
    "maintainers": ["dipak-01"]
  },
  {
    "title": "Product-Customizer",
    "repo": "https://github.com/vivekup3424/Product-Customizer",
    "stack": [
      "JavaScript",
      "HTML",
      "CSS",
      "Documentation"
    ],
    "desc": "A website to customise your own clothes and order it online.",
    "pre": "Developers should have some idea of creating and working with 3D-assets.(hdr)",
    "maintainers": ["vivekup3424"]
  },
  {
    "title": "URL Shortner",
    "repo": "https://github.com/AdityaKrSingh26/git-init-FOSS---URL_Shortner",
    "stack": [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    "desc": "Convert URLs into concise shareable links in seconds. Effortlessly manage your links and unlock real-time IP address and location information of the target domain for enhanced tracking and analysis.",
    "pre": "Basic knowledge of Reactjs, Nodejs, Expressjs, and CRUD applications.",
    "maintainers": ["AdityaKrSingh26"]
  },
  {
    "title": "Bulk Mailer",
    "repo": "https://github.com/AdityaKrSingh26/git-init-FOSS---Bulk-Mailer",
    "stack": [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    "desc": "This project provides a RESTful API for managing lists and users, including creating lists, uploading users from CSV files, unsubscribing users, and sending emails to users on a list. The project is built using Node.js, Express, and MongoDB.",
    "pre": "",
    "maintainers": ["AdityaKrSingh26"]
  },
  {
    "title": "Corporate Thaali",
    "repo": "https://github.com/divyaagrawal261/Corporate-Thaali",
    "stack": [
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    "desc": "A platform that connects part-time 'cooks' with corporate employees seeking 'home-made meals'.",
    "pre": "",
    "maintainers": ["divyaagrawal261", "khushi505"]
  },
  {
    "title": "E-Commerce Backend",
    "repo": "https://github.com/divyaagrawal261/E-commerce-Backend",
    "stack": [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    "desc": "Backend for an e-commerce website.",
    "pre": "Node.js, Express.js, MongoDB",
    "maintainers": ["divyaagrawal261"]
  },
  {
    "title": "E-Commerce Frontend",
    "repo": "https://github.com/divyaagrawal261/E-Commerce-Frontend",
    "stack": [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "TailwindCSS"
    ],
    "desc": "Frontend for an E-commerce website.",
    "pre": "React",
    "maintainers": ["divyaagrawal261"]
  },
  {
    "title": "Omni-Wallet",
    "repo": "https://github.com/divyaagrawal261/Omni-Wallet",
    "stack": [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS"
    ],
    "desc": "A simple expense tracker where you can manage transactions from multiple wallets.",
    "pre": "React, Node.js, Express.js, MongoDB, JavaScript, Chart.js (optional)",
    "maintainers": ["divyaagrawal261"]
  },
  {
    "title": "Shortly-Frontend",
    "repo": "https://github.com/divyaagrawal261/Shortly-Frontend",
    "stack": [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "desc": "Frontend of a URL Shortener.",
    "pre": "",
    "maintainers": ["divyaagrawal261"]
  },
  {
    "title": "Shortly-Backend",
    "repo": "https://github.com/divyaagrawal261/Shortly-Backend",
    "stack": [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    "desc": "Shortly is a URL Shortener.",
    "pre": "Node.js, Express.js, MongoDB",
    "maintainers": ["divyaagrawal261"]
  },
  {
    "title": "Password-Keeper",
    "repo": "https://github.com/lata-11/Password-Keeper",
    "stack": [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    "desc": "A CLI-based application written in JavaScript using Node.js and MongoDB. It utilizes libraries such as Chalk, Inquirer, and Bcrypt. The purpose of this interactive application is to securely store passwords. Nowadays, we have numerous services that require sign-in credentials, and it's common to forget some passwords, leading to potential future troubles. To address this problem, we have developed a CLI-based secure app.",
    "pre": "JavaScript",
    "maintainers": ["lata-11", "codesmith25103"]
  },
  {
    "title": "PharmaVerse",
    "repo": "https://github.com/Team-Upsilon",
    "stack": [
      "JavaScript",
      "Solidity",
      "HTML",
      "CSS",
      "React",
      "MongoDB",
      "Documentation"
    ],
    "desc": "PharmaVerse is a decentralized blockchain application designed to streamline and enhance the production and tracking of medicines. This open-source project utilizes blockchain technology and smart contracts to maintain transparency and accountability throughout the medicine production process.",
    "pre": "",
    "maintainers": ["ujjwaljain13"]
  },
  {
    "title": "Taskwise",
    "repo": "https://github.com/22chiragmodh/task-managementApp",
    "stack": [
      "Dart",
      "C++",
      "Flutter",
      "Firebase"
    ],
    "desc": "This project is a Task Management Application designed to help users organize and manage their daily tasks efficiently. The application leverages Firebase for user authentication and database management, and integrates local push notifications to improve user engagement and task reminders.",
    "pre": "Firebase Auth, Flutter SDK, Push Notifications",
    "maintainers": ["22chiragmodh"]
  },
  {
    "title": "FoodFiesta",
    "repo": "https://github.com/joeyyy09/FoodFiesta",
    "stack": [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Documentation"
    ],
    "desc": "This is a food delivery website built using ReactJS, Tailwind CSS, NodeJS, Firebase, Express, REST APIs, Redux, and authentication implemented using Google authentication. Users can browse through a variety of food items, add them to cart, and place an order. Administrators can add new dishes to the menu as well.",
    "pre": "Create an admin dashboard for FoodFiesta. The user dashboard is already in place, and I need this admin dashboard to manage various aspects of the platform. Feel free to Ping me up if you're interested to learn the frontend and backend part to solve this issue.",
    "maintainers": ["joeyyy09"]
  },
  {
    "title": "Kanban Board",
    "repo": "https://github.com/joeyyy09/kanban-board",
    "stack": [
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Documentation"
    ],
    "desc": "Efficiently manage your tasks with this stylish Kanban board web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application enables users to seamlessly organize tasks by adding, deleting, editing, and effortlessly dragging tasks between columns: To Do, In Progress, and Completed.",
    "pre": "",
    "maintainers": ["joeyyy09"]
  },
  {
    "title": "CoinKeeper",
    "repo": "https://github.com/joeyyy09/CoinKeeper-Expense-Tracker",
    "stack": [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    "desc": "This is an expense tracker website built using ReactJS, MongoDB, NodeJS, Express, and styled using Styled Components.",
    "pre": "",
    "maintainers": ["joeyyy09"]
  },
  {
    "title": "Daily-Sync",
    "repo": "https://github.com/joeyyy09/Daily-Sync",
    "stack": [
      "Dart",
      "Firebase",
      "Documentation"
    ],
    "desc": "A to-do daily planner.",
    "pre": "",
    "maintainers": ["joeyyy09"]
  },
  {
    "title": "Movie Mojo",
    "repo": "https://github.com/believer-99/Movie_Mojo",
    "stack": [
      "Dart",
      "Firebase",
      "Flutter"
    ],
    "desc": "A movie search app curated for all the movie enthusiasts. One can search the movie of his choice, sort them according to their needs and also view more details about their favourite movie. Its a one stop destination for all movie lovers.",
    "pre": "Android App Development using Flutter.",
    "maintainers": ["believer-99"]
  },
  {
    "title": "Phalanx API",
    "repo": "https://github.com/orgs/phalanxAPI/repositories",
    "stack": [
      "JavaScript",
      "TypeScript",
      "Next",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Documentation"
    ],
    "desc": "A framework for API security and management composed of multiple microservices built using NodeJS, NextJS, MongoDB and gRPC.",
    "pre": "NodeJS, MongoDB, NextJS",
    "maintainers": ["kshitij-404", "RajVarsani", "22chiragmodh"]
  },
  {
    title: 'SocialMedia-App',
    repo: 'https://github.com/sidjaiswal2003/SocialMedia-App',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' ReactJS',
      ' NodeJS',
      ' ExpressJS',
      ' MongoDB'
    ],
    desc: 'Full stack social media website.',
    pre: '',
    maintainers: ['sidjaiswal2003']
  },
  // {
  //   title: 'GitFest',
  //   repo: 'https://github.com/sohan2410/GitFest',
  //   stack: [' Documentation'],
  //   desc: 'Git for beginners.',
  //   pre: '',
  //   maintainers: ['sohan2410']
  // },
  {
    title: 'AASF-API',
    repo: 'https://github.com/sohan2410/aasf-api',
    stack: ['TypeScript', ' NodeJS', ' ExpressJS', ' SQL'],
    desc: 'Backend for AASF App',
    pre: '',
    maintainers: ['sohan2410']
  },
  // {
  //   title: 'MediChain',
  //   repo: 'https://sadityakumar9211/medichain-hardhat',
  //   stack: ['JavaScript', ' TypeScript', ' Bash', ' Solidity', ' ReactJS', ' NextJS'],
  //   desc: 'A decentralized telecommunication and medical health record system on EVM compatible chains. Featuring DAO for inclusion of patients in governance.',
  //   pre: '',
  //   maintainers: ['sadityakumar9211']
  // },
  // {
  //   title: 'CoinKeeper',
  //   repo: 'https://github.com/joeyyy09/CoinKeeper-Expense-Tracker',
  //   stack: ['JavaScript', ' NodeJS', ' ExpressJS', ' MongoDB', 'HTML', 'CSS', 'ReactJS'],
  //   desc: 'This is an expense tracker website built using ReactJS, MongoDB, NodeJS, Express, and styled using Styled Components.',
  //   pre: '',
  //   maintainers: ['joeyyy09']
  // },
  // {
  //   title: 'Kankan Board',
  //   repo: 'https://github.com/joeyyy09/kanban-board',
  //   stack: ['JavaScript', ' HTML', ' CSS', ' NodeJS', ' ExpressJS', ' MongoDB', ' Documentation'],
  //   desc: 'Efficiently manage your tasks with this stylish Kanban board web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application enables users to seamlessly organize tasks by adding, deleting, editing, and effortlessly dragging tasks between columns: To Do, In Progress, and Completed.',
  //   pre: '',
  //   maintainers: ['joeyyy09']
  // },
  // {
  //   title: 'FoodFiesta',
  //   repo: 'https://github.com/joeyyy09/FoodFiesta',
  //   stack: ['JavaScript', ' NodeJS', ' ExpressJS', ' MongoDB', ' HTML', ' CSS', ' ReactJS', ' Firebase', ' Documentation'],
  //   desc: 'This is a food delivery website built using ReactJS, Tailwind CSS, NodeJS, Firebase, Express, REST APIs, Redux, and authentication implemented using Google authentication. Users can browse through a variety of food items, add them to cart, and place an order. Administrators can add new dishes to the menu as well.',
  //   pre: '',
  //   maintainers: ['joeyyy09']
  // },
  {
    title: 'MediBook',
    repo: 'https://github.com/Ishpreet-Kaur-Bedi/Hospital-Booking-Medibook',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' React',
      ' Node.js',
      ' Express.js',
      ' MongoDB',
      ' Typescript'
    ],
    desc: 'The Hospital Booking Platform is an innovative and user-friendly application that revolutionizes the way patients and doctors connect.  With our platform, patients can easily book appointments with their preferred hospitals and doctors, while doctors can efficiently manage their hospital listings and reservations.',
    pre: 'ReactJS, NextJS, Javascript',
    maintainers: ['Ishpreet-Kaur-bedi']
  },
  {
    title: 'TomperChat',
    repo: 'https://github.com/varunKT001/tomper-chat',
    stack: ['JavaScript',
    ' React',
    ' Node.js',
    ' Express.js',
    ' MongoDB',],
    desc:
      'A full-fleged whatsapp clone.',
    pre: '',
    maintainers: ['varunKT001']
  },
  {
    title: 'QuickLy Live Chat App',
    repo: 'https://github.com/HiRoaR2002/Quickly-Backend',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' NodeJS',
      ' ReactJS',
      ' ExpressJS',
      ' MongoDB',
    ],
    desc: 'It is a live chat app like whatsapp, providing many features.',
    pre: '',
    maintainers: ['HiRoaR2002']
  },
  {
    title: 'Video Social',
    repo: 'https://github.com/sadityakumar9211/travel-site-frontend',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' React',
    ],
    desc: 'This is a basic frontend project for a sample travel site.',
    maintainers: ['sadityakumar9211']
  },
  // {
  //   title: 'Diversified',
  //   repo: 'https://github.com/Spedrick/GitInit-Foss',
  //   stack: ['JavaScript', ' NodeJS', 'Typescript', 'Python', 'Java', 'C++', 'C', 'HTML', 'CSS', 'ReactJS', 'Angular', 'Vue', 'Kotlin', ],
  //   desc: 'Diversified',
  //   pre: '',
  //   maintainers: ['Spedrick']
  // }
];

export const pstringify = () => {
  projects.forEach(p => {
    p.pstr = p.title + ' ' + p.desc + ' ';
    p.stack.forEach(s => (p.pstr += s + ' '));
    p.maintainers.forEach(m => (p.pstr += m + ' '));
  });
};

export const searchQueryStore = writable('');

export const search = () => {
  let q = '';
  searchQueryStore.subscribe(data => (q = data.toLowerCase()));
  let keywords = q.split(' ');
  let results = [];
  keywords.forEach(keyword => {
    if (q == '' || keyword !== '') {
      results = results.concat(
        projects.filter(p => p.pstr.toLowerCase().includes(keyword))
      );
    }
  });

  let resultSet = new Set();

  results.forEach(r => {
    resultSet.add(r);
  });
  return Array.from(resultSet);
};
