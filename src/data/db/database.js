import Mock from "../mock";

const database = {
  information: {
    name: 'Luis Alonso Otero',
    aboutContent: "Civil Engineer and Full Stack Software Developer. I build solutions for the AEC industry to automate workflows during design and coordination. I am passionate about soilving problems to help teams.",
    age: 32,
    phone: '',
    nationality: 'Peruvian & Chilean',
    language: 'Spanish & English',
    email: 'alonsooteroseminario@gmail.com',
    address: 'Vancouver, BC. Canada',
    freelanceStatus: 'Available Worldwide (Remotely)',
    socialLinks: {
      facebook: '',
      twitter: 'https://twitter.com/luis_alo13',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/luisalonsooteroseminario',
      dribbble: '',
      github: 'https://github.com/alonsooteroseminario',
      medium: 'https://alonsooteroseminario.medium.com'
    },
    brandImage: '/images/profil-laos.jpg',
    aboutImage: '/images/laosprofile2.jpeg',
    aboutImageLg: '/images/laosprofile2.jpeg',
    cvfile: '/files/Luis_Alonso_Otero_Seminario_CV-October-2022-English.pdf'
  },
  services: [
    {
      title: "Revit Add-ins",
      icon: 'code',
      details: "Development of .NET libraries to extend Revit functionalities and automate time consuming tasks. Using C# and Revit API."
    },
    {
      title: "AutoCAD Macros",
      icon: 'code',
      details: "Development of .NET libraries to extend AutoCAD functionalities. Using C#, ObjectARX API and AutoCAD API."
    },
    {
      title: "3D Web Applications",
      icon: 'code',
      details: "Development of CRUD web applications. Integration with IFC.js, ThreeJS, Forge API Design Automation and other libraries."
    },
    {
      title: "Dynamo Scripts",
      icon: 'code',
      details: "Development of Dynamo scripts to automate workflows within Revit. Using Dynamo API and Python Scripts."
    },
    {
      title: "BIM Coordination",
      icon: 'code',
      details: "Coordination of 3D BIM models using Clash Detection tools. Creation of Clash reports and manage coordination meetings."
    },
    {
      title: "CAD Drawings to BIM models",
      icon: 'code',
      details: "Conversion of your drawings from 2D CAD files to 3D BIM files. Using AutoCAD and Revit."
    }
  ],
  reviews: [
    // {
    //   id: 1,
    //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
    //   author: {
    //     name: 'Burdette Turner',
    //     designation: 'Web Developer, Abc Company'
    //   }
    // },
    // {
    //   id: 2,
    //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
    //   author: {
    //     name: 'Susan Yost',
    //     designation: 'Client'
    //   }
    // },
    // {
    //   id: 3,
    //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //   author: {
    //     name: 'Irving Feeney',
    //     designation: 'Fiverr Client'
    //   }
    // }
  ],
  skills: [
    {
      title: "Revit API",
      value: 100
    },
    {
      title: "Dynamo Scripts",
      value: 95
    },
    {
      title: "Forge API",
      value: 95
    },
    {
      title: "AutoCAD API",
      value: 85
    },
    {
      title: "IFC.js",
      value: 80
    },
    {
      title: "C#",
      value: 100
    },
    {
      title: ".NET",
      value: 90
    },
    {
      title: "Python",
      value: 70
    },
    {
      title: "JavaScript",
      value: 100
    },
    {
      title: "ReactJS",
      value: 100
    },
    {
      title: "NodeJS",
      value: 100
    },
    {
      title: "Docker",
      value: 70
    },
    {
      title: "Revit User",
      value: 100
    },
    {
      title: "Navisworks User",
      value: 90
    },
    {
      title: "English",
      value: 100
    },
    {
      title: "Spanish",
      value: 100
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "WeClash",
      subtitle: "Cloud-based 3d Viewer for sharing plans 2D or 3D.",
      imageUrl: "/images/WeClash3Draft.PNG",
      largeImageUrl: ["/images/WeClash3Draft.PNG", "/images/Weclash-plano2D.PNG", "/images/weclash mobile 3d.PNG", "/images/weclash mobile 3d_2.PNG"],
      url: 'https://www.weclash.app/'
    },
    {
      id: 6,
      title: "Web-Clash 3D Viewer",
      subtitle: "BIM360 Account Free Viewer",
      imageUrl: "/images/webclash-bim360.png",
      largeImageUrl: ["/images/webclash-bim360.png", 
      "/images/webclash1.jpeg", 
      "/images/webclash2.jpeg", 
      "/images/VIDEO-2022-04-21-19-09-04.mp4",
      "/images/VIDEO-2022-04-21-19-09-05.mp4"],
      url: 'https://webclash-bim360.herokuapp.com/'
    },
    // {
    //   id: 2,
    //   title: "Quida Marketplace Platform",
    //   subtitle: "Marketplace to connect holistic wellness professionals and nutritionists with clients.",
    //   imageUrl: "/images/Captura-nomade-quida.PNG",
    //   largeImageUrl: ["/images/Captura-nomade-quida.PNG","/images/Quidalading.PNG"],
    //   url: 'https://quida.herokuapp.com/'
    // },
    {
      id: 4,
      title: "QuickClash Revit Add-in",
      subtitle: "Add-in to find clashes between elements in a Revit model.",
      imageUrl: "/images/Sin títulfsfsdo.png",
      largeImageUrl: [
        "/images/Sin títulfsfsdo.png",
        "/images/Sin título2gfgf.png",
        "/images/Sin título4gfgf.png",
        "/images/Sin título5gfgf.png",
        "/images/Sin título6gff.png"
      ],
      url: 'https://github.com/alonsooteroseminario/QuickClash'
    },
    {
      id: 10,
      title: "Split Walls Revit Add-in",
      subtitle: "Add-in to split walls according with some pre -rules in a Revit model. (Private Client)",
      imageUrl: "/images/splitwall1.png",
      largeImageUrl: ["/images/splitwall1.png", "/images/splitwall2.png"],
      url: ''
    },
    {
      id: 5,
      title: "CDW Estimation Revit Add-in",
      subtitle: "Add-in to estimate the waste of materials in a Revit model. (Private Client)",
      imageUrl: "/images/cdwestimation3.png",
      largeImageUrl: ["/images/cdwestimation1.png", 
      "/images/cdwestimation2.png",
      "/images/cdwestimation3.png",
      "/images/cdwestimation4.png",
      "/images/cdwestimation5.png"],
      url: 'https://github.com/alonsooteroseminario/AddinExportCDW'
    },
    {
      id: 7,
      title: "Hotel Booking Reservation App",
      subtitle: "Form to book a hotel room and synchronize with a database and notify the admin and user.",
      imageUrl: "/images/residencial-1.PNG",
      largeImageUrl: ["/images/residencial-1.PNG"],
      url: 'https://resi-sangabriel.herokuapp.com/'
    },
    {
      id: 3,
      title: "Portfolio App",
      subtitle: "This portfolio app is built with ReactJS and NodeJS.",
      imageUrl: "/images/Captura-POrtofolio.PNG",
      largeImageUrl: ["/images/Captura-POrtofolio.PNG"],
      url: 'https://portfolio-laos.herokuapp.com/'
    },
    {
      id: 8,
      title: "AutoCAD Macro - Quick Block Manager",
      subtitle: "Application to draw blocks in AutoCAD with a simple interface. (Private Client)",
      imageUrl: "/images/",
      largeImageUrl: ["/images/"]
    },
    {
      id: 9,
      title: "Dynamo Scripts",
      subtitle: "Development of Custom Dynamo Scripts to automate tasks within Revit.",
      imageUrl: "/images/Sin título28.png",
      largeImageUrl: ["/images/Sin título28.png"],
      url: 'https://www.dynoscript.xyz/shop?lang=en'
    },
    // {
    //   id: 11,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: '#'
    // },
    // {
    //   id: 12,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg"
    //   ],
    //   url: 'https://facebook.com'
    // },
    // {
    //   id: 13,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: 'https://pinterest.com'
    // },
    // {
    //   id: 14,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: 'https://dribbble.com'
    // },
    // {
    //   id: 15,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    // },
    // {
    //   id: 16,
    //   title: "Pendrive",
    //   subtitle: "Free pendrive mockup design.",
    //   imageUrl: "/images/portfolio-image-6.jpg",
    //   largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    // },
    // {
    //   id: 17,
    //   title: "Beautiful Pendrive",
    //   subtitle: "Pendrive with great design & flexible.",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    //   url: 'https://twitter.com'
    // },
    // {
    //   id: 18,
    //   title: "Sticker",
    //   subtitle: "Clip sticker mockup design.",
    //   imageUrl: "/images/portfolio-image-8.jpg",
    //   largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    // },
    // {
    //   id: 19,
    //   title: "Packet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    // },
    // {
    //   id: 20,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: 'https://dribbble.com'
    // },
    // {
    //   id: 21,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg"
    //   ],
    //   url: 'https://facebook.com'
    // },
    // {
    //   id: 22,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: 'https://pinterest.com'
    // },
    // {
    //   id: 23,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: '#'
    // },
    // {
    //   id: 24,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    // }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "AutoCAD & Revit API Developer",
        company: "Dynoscript Freelance (Worldwide)",
        details: "Freelance Consulting for automation solutions within the BIM workflow. Development of custom Revit or AutoCAD Add-ins following client’s requirements. Using .Net with C# for desktop applications or MERN stack for web applications."
      },
      {
        id: 2,
        year: "2021 – 2022",
        position: "VDC Automation",
        company: "True Mechanical Ltd. (Vancouver, Canada)",
        details: "Development of C# Macros, .NET Add-ins, and Dynamo script to automate manual time-consuming tasks."
      },
      {
        id: 3,
        year: "2021 - 2022",
        position: "Full Stack Web Developer",
        company: "WeClash - App to improve Construction Industry",
        details: "Cloud-based 3d Viewer for sharing plans 2D or 3D. Using MERN stack."
      },
      {
        id: 4,
        year: "2019 - 2021",
        position: "BIM Coordinator",
        company: "Cypco Constructora (Santiago, Chile)",
        details: "BIM Coordination of MEP Specialties in construction site."
      },
      {
        id: 5,
        year: "2017 - 2019",
        position: "BIM Modeler",
        company: "IDOM Consulting, Engineering, Architecture (Santiago, Chile)",
        details: "Detailed MEP engineering in New Pudahuel Expansion and Modernization of the Arturo Merino Benítez International Airport, Santiago de Chile. "
      },
      {
        id: 6,
        year: "2015 - 2015",
        position: "Production Engineer Intern",
        company: "Izquierdo & Casafranca Construcciones Metálicas S.A. (Piura, Perú)",
        details: "Build Gantt Chart and track project progress according to the master plan."
      },
      {
        id: 7,
        year: "Nov 2022 - Present",
        position: "Digital Development Lead",
        company: "WSP in Canada (Vancouver, British Columbia, Canada)",
        details: "Part of Buildings Digital Solutions Team (national). Responsible for the development of BIM and Engineering tools and customizing solutions. Design and development of customized desktop and web applications, like tools, and components for internal and external clients. Design, test, deploy and support application tools and components, in partnership with other members of the team and user groups. Promote new technology-based tools and solutions internally to drive awareness, adoption, and use. Automated solutions will also encompass various design and analysis applications used in engineering projects. Skills: Software Development, Web Development, Microservices, Autodesk Platforms Service, .NET, TypeScript, CSS3, HTML5, Git, JavaScript, Node.js, C#."
      }      
    ],
    educationExperience: [
      {
        id: 1,
        year: "2021",
        graduation: "Bootcamp Full-stack Web Developer",
        university: "Coderhouse Academy"
      },
      {
        id: 2,
        year: "2016 - 2016",
        graduation: "Diploma in advanced BIM for building projects. ",
        university: "Pontifical Catholic University of Chile"
      },
      {
        id: 3,
        year: "2016 - 2016",
        graduation: "Diploma in New Digital Technologies in Architecture: Modeling and Development of BIM Projects. ",
        university: "Pontifical Catholic University of Chile"
      },
      {
        id: 4,
        year: "2008 - 2014",
        graduation: "Civil Engineer Degree",
        university: "University of Piura (Perú)"
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Boilerplate for BIM Application',
      featuredImage: '/images/Untitled-(6).png',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "9",
      createMonth: 'August',
      createYear: "2022",
      url:'https://alonsooteroseminario.medium.com/boilerplate-for-bim-applications-cb5ad96a9938'
    },
    {
      id: 2,
      title: 'Rutinas de Dynamo hacia un Add-Ins desarrollados en C#: Automatizando procesos en Revit API',
      featuredImage: '/images/Spring Collection_2.png',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "11",
      createMonth: 'December',
      createYear: "2020"
    },
    {
      id: 3,
      title: '¿Automatización + BIM? 🤖Construcción y fabricación de 🏠 Casas Pre-fabricadas.',
      featuredImage: '/images/Should I automate my job_2_portada.png',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "25",
      createMonth: 'September',
      createYear: "2020"
    },
    // {
    //   id: 4,
    //   title: 'Revit + Dynamo + Excel: Through a ‘Key Schedule’ directly import any Excel table into Revit using Dynamo:',
    //   featuredImage: '/images/blog-image-4.jpg',
    //   filesource: '../../blog/boost-your-post-for-increasing-sales.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    {
      id: 5,
      title: 'Revit + Dynamo: BIM MEP automation to find the entry and exit dimensions of all the pipes that intercept with the Sanitary Chambers.',
      featuredImage: '/images/Sin título8.png',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "25",
      createMonth: 'Marzo',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'Revit + Dynamo + Python: Create your own Plug-ins by automating interference correction between MEP specialties within BIM models: Part 1',
      featuredImage: '/images/portada4_english.png',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "27",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Video Tutorial: Turn your Dynamo Scripts into Add-Ins using C#',
      featuredImage: '/images/Capture8.png',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "27",
      createMonth: 'February',
      createYear: "2020"
    },
    // {
    //   id: 8,
    //   title: 'Time to use latest technology for creating a website.',
    //   featuredImage: '/images/blog-image-8.jpg',
    //   filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 9,
    //   title: 'Think out of the box.',
    //   featuredImage: '/images/blog-image-9.jpg',
    //   filesource: '../../blog/think-out-of-the-box.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 10,
    //   title: 'Trending designs in 2020.',
    //   featuredImage: '/images/blog-image-1.jpg',
    //   filesource: '../../blog/trending-designs-in-2020.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 11,
    //   title: 'How to get 10k instagram followers?',
    //   featuredImage: '/images/blog-image-2.jpg',
    //   filesource: '../../blog/how-to-get-10k-instagram-followers.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 12,
    //   title: 'What NodeJS can do?',
    //   featuredImage: '/images/blog-image-3.jpg',
    //   filesource: '../../blog/what-nodejs-can-do.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 13,
    //   title: 'Futures of javascript.',
    //   featuredImage: '/images/blog-image-4.jpg',
    //   filesource: '../../blog/future-of-javascript.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 14,
    //   title: 'Popular javascript library in 2020.',
    //   featuredImage: '/images/blog-image-5.jpg',
    //   filesource: '../../blog/popular-javascript-library-in-2020.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 15,
    //   title: 'Promrammers must read books.',
    //   featuredImage: '/images/blog-image-6.jpg',
    //   filesource: '../../blog/programmers-must-read-books.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // }
  ],
  contactInfo: {
    phoneNumbers: ['+1 778 989 2823', '+56 9 5694 2823'],
    emailAddress: ['alonsooteroseminario@gmail.com'],
    address: ["2242 7th Ave W. Vancouver V6K 1Y2."],
    // address: ["2242 7th Ave, Vancouver, BC, Canada."]
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});