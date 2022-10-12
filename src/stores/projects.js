import {writable} from 'svelte/store';

export let projects = [
  {
    title: 'E-Market',
    repo: 'https://github.com/kailash360/e-market',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' NodeJS',
      ' ExpressJS',
      ' PostgreSQL'
    ],
    desc: 'A simple but useful e-commerce platform to buy and sell products.',
    pre: '',
    maintainers: ['kailash360', 'gurpreet-legend']
  },
  {
    title: 'Snap Stock',
    repo: 'https://github.com/kailash360/Snap-Stock',
    stack: ['JavaScript', ' Solidity', ' CSS', ' ReactJS'],
    desc: 'Snap Stock is a decentralized application that allows users to upload their images over the platform at the cost of gas fee, and display it to the other users who can then tip the creators based on their choice.',
    pre: 'Blockchain, ReactJS',
    maintainers: ['kailash360']
  },
  {
    title: 'Alan-Feed',
    repo: 'https://github.com/gurpreet-legend/Alan-Feed',
    stack: ['JavaScript', ' HTML', ' CSS', ' ReactFS'],
    desc: 'A Voice-Assistant News Application',
    pre: 'ReactJS, JavaScript',
    maintainers: ['gurpreet-legend']
  },
  {
    title: 'Uthaan Frontend Repository',
    repo: 'https://github.com/Uthaan-IIITM/Uthaan-Frontend',
    stack: ['JavaScript', ' HTML', ' CSS', ' ReactJS', ' Documentation'],
    desc: 'Uthaan is journalism and recreation club of IIIT Gwalior. Frontend of Uthaan website is based on reactJS and redux.',
    pre: '',
    maintainers: ['akashgupta1909', 'RajVarsani']
  },
  {
    title: 'Uthaan backend',
    repo: 'https://github.com/Uthaan-IIITM/uthaan-backend',
    stack: ['JavaScript', ' NodeJS', ' ExpressJS', ' MongoDB'],
    desc: 'Uthaan is the journalism and recreation club of IIIT Gwalior. Uthaan backend is based on nodeJS, expressJS and mongoDB.',
    pre: '',
    maintainers: ['akashgupta1909', 'RajVarsani', 'kailash360']
  },
  {
    title: 'Brainiac-Frontend',
    repo: 'https://github.com/gurpreet-legend/Face-Recognition-Brainiac-Frontend',
    stack: ['JavaScript', ' HTML', ' CSS', ' ReactJS'],
    desc: 'Face Detection Application',
    pre: 'JavaScript, ReactJS',
    maintainers: ['gurpreet-legend']
  },
  {
    title: 'Brainiac-Backend',
    repo: 'https://github.com/gurpreet-legend/Face-Recognition-Braniac-Backend',
    stack: ['JavaScript', ' NodeJS', ' ExpressJS', ' PostgreSQL'],
    desc: 'Backend of Face Detection Brainiac Application',
    pre: 'JavaScript, NodeJS, ExpressJS',
    maintainers: ['gurpreet-legend']
  },
  {
    title: 'Whatsapp Clone',
    repo: 'https://github.com/gurpreet-legend/whatsapp-clone',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' React',
      ' Node.js',
      ' Express.js',
      ' Firebase'
    ],
    desc: 'A web chatting application that replicates Whatsapp',
    pre: 'ReactJS, NodeJS, ExpressJS, Socket.io',
    maintainers: ['gurpreet-legend']
  },
  {
    title: 'IIITM-Tracker',
    repo: 'https://github.com/pratul20/IIITM-Tracker',
    stack: ['Java'],
    desc:
      'IIITM Tracker is an intuitive user interface (UI) Android App. On campus, students may\n' +
      'look up locations and acquire directions. The app contains information about every faculty, including their office address and phone number, allowing students to contact them easily. Additionally, students may view all of the users who have signed up thus far and identify the appropriate senior with whom they can consult. Students may now locate routinely checked documents including schedules and mess menus in one convenient location.',
    pre: 'Android Development',
    maintainers: ['pratul20']
  },
  {
    title: 'Spotify Hit Predictor',
    repo: 'https://github.com/ashok-arora/spotify-hit-predictor',
    stack: [
      'JavaScript',
      ' Python',
      ' HTML',
      ' CSS',
      ' NodeJS',
      ' Flask',
      ' Documentation'
    ],
    desc: 'The aim of the project is to classify Spotify songs to Hit or Not-Hit using the attributes of the songs that can be fetched using the Spotify API.',
    pre: '',
    maintainers: ['ashok-arora']
  },
  {
    title: 'Video Social',
    repo: 'https://github.com/TheNinza/vc-room',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' React',
      ' NodeJS',
      ' ExpressJS',
      ' Firebase',
      ' Documentation'
    ],
    desc: 'A secure P2P video call application made with ReactJS + Firebase + WebRTC + ExpressJS.',
    pre: 'Other than the tech stack mentioned, basic WebRTC, if you are thinking of tinkering with the video call aspect of the code.',
    maintainers: ['theninza']
  },
  {
    title: 'Imcrypt',
    repo: 'https://github.com/TheNinza/imcrypt',
    stack: ['JavaScript', ' NodeJS'],
    desc: 'An image encryption nodeJS command line interface',
    pre: '',
    maintainers: ['theninza']
  },
  {
    title: 'DSA Visualizer',
    repo: 'https://github.com/TheNinza/dsa-visualizer',
    stack: ['JavaScript', ' Python', ' C++', ' C', ' HTML', ' CSS', ' ReactJS'],
    desc: 'A DSA Visualizer',
    pre: '',
    maintainers: ['theninza']
  },
  {
    title: 'Crypto Transactions',
    repo: 'https://github.com/sohan2410/crypto-transactions',
    stack: [
      'JavaScript',
      ' NodeJS',
      ' ExpressJS',
      ' MongoDB',
      ' Documentation'
    ],
    desc: 'Get Ether related data using Etherscan APIs',
    pre: 'NodeJs',
    maintainers: ['sohan2410']
  },
  {
    title: 'Pokedex',
    repo: 'https://github.com/XDRAGON2002/POKEDEX',
    stack: ['JavaScript', ' HTML', ' CSS', ' ReactJS', ' Documentation'],
    desc: 'ReactJS frontend project that fetches pokemon data from an API and displays them to the user.',
    pre: 'HTML, CSS, JS',
    maintainers: ['XDRAGON2002']
  },
  {
    title: 'IIIT-Gram',
    repo: 'https://github.com/XDRAGON2002/iiiit-gram',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' ReactJS',
      ' NodeJS',
      ' ExpressJS',
      ' MongoDB',
      ' Documentation'
    ],
    desc: 'A social media application based on the MERN stack',
    pre: 'HTML, CSS, JS. Knowledge of MERN would be helpful but is not necessary.',
    maintainers: ['XDRAGON2002']
  },
  {
    title: 'TomperJS',
    repo: 'https://github.com/varunKT001/tomperjs',
    stack: ['TypeScript'],
    desc: 'TomperJS is a web-framework based on MVC(Model-View-Controller) architecture pattern. It is very similar to one of the most popular web-framework BackboneJS.',
    pre: 'A good understanding of design patterns such as Inheritance and Composition.',
    maintainers: ['varunKT001']
  },
  {
    title: 'Tomper-Readmify',
    repo: 'https://github.com/varunKT001/tomper-readmify',
    stack: ['TypeScript', ' ReactJS', ' NodeJS', ' ExpressJS'],
    desc: "A simple editor allows you to easily add and customize all the sections you need for your profile's readme.",
    pre: '',
    maintainers: ['varunKT001']
  },
  {
    title: 'Tomper-Chat',
    repo: 'https://github.com/varunKT001/tomper-chat',
    stack: ['JavaScript', ' ReactJS', ' NodeJS', ' ExpressJS', ' MongoDB'],
    desc: 'TomperChat is a clone of WhatsApp. Its build using MERN stack and uses socket.io for realtime messaging, online statuses, typing indicators, notifications etc.',
    pre: 'A basic understanding of WebSockets and socket.io is a must.',
    maintainers: ['varunKT001']
  },
  {
    title: 'TLOC',
    repo: 'https://github.com/varunKT001/tloc',
    stack: ['TypeScript', ' NodeJS'],
    desc: 'A CLI tool to determine how many lines of code you have written for your project.',
    pre: '',
    maintainers: ['varunKT001']
  },
  {
    title: 'TomperWear: Frontend',
    repo: 'https://github.com/varunKT001/tomper-wear-ecommerce',
    stack: [
      'JavaScript',
      ' React',
      ' NodeJS',
      ' ExpressJS',
      ' MongoDB',
      ' Firebase'
    ],
    desc: 'TomperWear is an E-commerce platform for small business owners who want to expand their business by providing an online purchase solution to their customers.',
    pre: '',
    maintainers: ['varunKT001']
  },
  {
    title: 'TomperWear: Backend',
    repo: 'https://github.com/varunKT001/tomper-wear-ecommerce-backend',
    stack: ['JavaScript', ' NodeJS', ' ExpressJS', ' MongoDB'],
    desc: 'TomperWear is an E-commerce platform for small business owners who want to expand their business by providing an online purchase solution to their customers.',
    pre: '',
    maintainers: ['varunKT001']
  },
  {
    title: 'TomperWear: Admin Dashboard',
    repo: 'https://github.com/varunKT001/tomper-wear-ecommerce-admin',
    stack: ['JavaScript', ' ReactJS'],
    desc: 'TomperWear is an E-commerce platform for small business owners who want to expand their business by providing an online purchase solution to their customers.',
    pre: '',
    maintainers: ['varunKT001']
  },
  {
    title: 'NFT Marketplace',
    repo: 'https://github.com/sadityakumar9211/nextjs-nft-marketplace',
    stack: [
      'JavaScript',
      ' TypeScript',
      ' Solidity',
      ' Next',
      ' NodeJS',
      ' Documentation'
    ],
    desc: "NFT marketplace is a digital platform to create and trade digital assets. There are several marketplaces to create, sell, buy and trade NFTs. This is one small implementation of such platforms. The platform can allow you to buy and sell NFTs. You can also withdraw funds which you earned after selling the NFTs. For supporting fast and complex queries, this system uses a decentralised indexing protocol, 'The Graph'. The smart contract is currently deployed on Rinkeby Testnet.",
    pre: 'Hardhat, The Graph, ERC-721',
    maintainers: ['sadityakumar9211']
  },
  {
    title: 'GitFest',
    repo: 'https://github.com/sohan2410/GitFest',
    stack: ['Documentation'],
    desc: "As part of Git-Init-FOSS'22, the GitFest project intends to help contributors become more proficient with Git and GitHub by having them complete some challenges. The tasks will be listed in this repository's issue area.",
    pre: '',
    maintainers: ['sohan2410']
  },
  {
    title: 'ConnectX-Frontend',
    repo: 'https://github.com/ConnectX-IIIT/connectx-frontend',
    stack: ['JavaScript', 'HTML', 'CSS', 'React'],
    desc: 'ConnectX - Create your own connections with us. We give you the opportunity to strengthen your bond with alumni.\nWith Alumni’s help, you may improve your abilities and build a better future.',
    pre: '',
    maintainers: ['UjjawalGupta30', 'RajVarsani', 'akashgupta1909', 'HarshilMendpara']
  },
  {
    title: 'ConnectX-Backend',
    repo: 'https://github.com/ConnectX-IIIT/connectx-backend',
    stack: ['JavaScript', 'Node', 'ExpressJS', 'AWS'],
    desc: 'ConnectX - Create your own connections with us. We give you the opportunity to strengthen your bond with alumni.\nWith Alumni’s help, you may improve your abilities and build a better future.',
    pre: '',
    maintainers: ['UjjawalGupta30', 'RajVarsani', 'akashgupta1909', 'HarshilMendpara']
  },
  {
    title: 'Horario',
    repo: 'https://github.com/hs2361/horario',
    stack: ['Dart', 'Flutter', 'Firebase'],
    desc: 'Horario is a Class Management and Notes Sharing App for students. Users can add classes to their weekly schedule, along with their timings and the link to join the class. Users can also add assignments to their schedule along with the deadline. Horario will remind the user of their class or assignment using a push notification. Users can upload notes with their group of fellow students. Users can also send requests for notes from their group. Horario organizes notes in a systematic manner, arranged by subject. Users can also search for notes by subject, notes name or file name.',
    pre: 'Flutter',
    maintainers: ['hs2361', 'kc611', 'DebadityaPal']
  },
  {
    title: 'Image Processing Library',
    repo: 'https://github.com/hs2361/k-means-compressor',
    stack: ['C++', 'C'],
    desc: 'It is an image processing and compression library written in C/C++. It supports basic image editing tools. Image compression is done using K-Means Algorithm. Seam Carving for image resizing has also been implemented. Contributors can implement new algorithms for image processing and increase the coverage of the library as a whole.',
    pre: 'C++, STL Algorithms, Data Structures.',
    maintainers: ['hs2361', 'DebadityaPal']
  }
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
