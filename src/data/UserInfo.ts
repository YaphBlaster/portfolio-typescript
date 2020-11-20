import figma from "../assets/logos/figma.svg";
import framer from "../assets/logos/framer.svg";
import react from "../assets/logos/react.svg";
import amazonAws from "../assets/logos/amazonaws.svg";
import csharp from "../assets/logos/csharp.svg";
import godotEngine from "../assets/logos/godotengine.svg";
import python from "../assets/logos/python.svg";
import redux from "../assets/logos/redux.svg";
import serverless from "../assets/logos/serverless.svg";
import unity from "../assets/logos/unity.svg";
import unrealEngine from "../assets/logos/unrealengine.svg";
import styledComponents from "../assets/logos/styled-components.svg";
import javaScript from "../assets/logos/javascript.svg";
import typeScript from "../assets/logos/typescript.svg";

import prequelMemes from "../assets/projectThumbnails/PrequelMemes.webp";
import wowVr from "../assets/projectThumbnails/WowVr.webp";
import CSHOF from "../assets/projectThumbnails/CSHOF.webp";
import patioBuilder from "../assets/projectThumbnails/PatioBuilder.webp";
import garageBuilder from "../assets/projectThumbnails/GarageBuilder.webp";
import innovationLab from "../assets/projectThumbnails/InnovationLab.webp";
import wawanesa from "../assets/projectThumbnails/WawanesaLogo.svg";
import hypemoji from "../assets/projectThumbnails/HypeMoji.webp";
import arHouse from "../assets/projectThumbnails/ARHouse.webp";
import iQmetrix from "../assets/projectThumbnails/iQmetrix.webp";
// import peggoARImage from "../assets/projectThumbnails/PeggoARImage.webp";
import ReactCrashCourse from "../assets/projectThumbnails/ReactLogo.webp";

export const portfolioImageFileNames = ["sweater.svg", "tie.svg", "jacket.svg"];

export const fontAndAccentColour = "#2b2b2b";

export const summary = `I am a developer in Winnipeg, Manitoba. 
I've worked with various technologies ranging from frontend applications using React and JavaScript to backend services using Serverless and AWS Lambda to virtual reality using Unity and Unreal Engine. 
I love working on projects that challenge and help me grow to become a better programmer. 
Thanks for visiting my portfolio and please check out my projects down below!`;

export const name = "Yaphet Abraha";

export const projects = [
  {
    title: "Aether",
    description:
      "Frontend application built with React. This application was created as an option for customers to pay for merchandise with zero physical contact. A store associate can send an Aether link to a customer, who can complete a purchase on their mobile phone or computer. Customers can pay via manual card entry, Google Pay or Apple Pay.",
    techStack: ["ReactJS", "JavaScript", "Styled Components"],
    year: 2020,
    image: iQmetrix,
  },
  {
    title: "React Crash Course",
    description:
      "Made with ReactJS, this application was initially made to onboard front end developers at Wawanesa that would work on React projects, but was later expanded to the public in order to give anyone a quick crash course for React. Developers can go through a small tutorial where the basics of React are explained with practical examples with code breakdowns and screenshots to easily follow along.",
    techStack: ["ReactJS", "JavaScript", "Styled Components"],
    year: 2019,
    image: ReactCrashCourse,
    codeLink: "https://github.com/YaphBlaster/react-crash-course",
    demoLink: "http://reactcrashcourse.surge.sh/",
  },
  {
    title: "Wawanesa Augmented Reality House",
    description:
      "Built in Unity3D, this application is made to engage users, help with customer retention and act as a self promoting marketing tool. The proposed use case is that brokers can give a customer a business card with a custom logo on the back and a QR code on the front that would allow the user to download a companion application. When the user runs the application and points their camera at the business card, a virtual house will appear in augmented reality. Users can then explore the house by pinching to zoom, rotating the house with a slider, and physically moving their device to view the house from different angles. Users can also tap on glowing items, giving the user more information about the different insurance options Wawanesa offers. As the sole developer of this application, I was responsible for all the animation, game design, and logic.",
    techStack: ["Unity", "Mecanim", "C#", "Vuforia"],
    year: 2019,
    image: arHouse,
    // codeLink:
    //   "https://s3-us-west-2.amazonaws.com/yaphet-uploaded-files/Wawanesa_AR_House.apk",

    demoLink: "https://www.youtube.com/watch?v=E9lGHy3dBO0",
  },
  {
    title: "Claims Fast Track",
    description:
      "Made in ReactJS, Claims Fast Track is an application made to streamline the claims process. Built for adjusters, this application allows them to add customers, claims, estimates and manage the status of a claim. Adjusters can also send a custom URL to a client where they can add images of a damaged asset at the their convenience to be later viewed by the adjuster.",
    techStack: ["ReactJS", "Redux", "Sass", "Javascript", "AWS"],
    year: 2018,
    image: wawanesa,
  },
  {
    title: "WowVR",
    description:
      "WOWVR is a fun and creative tool that allows you to design your dream patio with Outdoor living products in a fully 3D environment. With over 100+ high definition products to choose from including BBQs, Seating, Tables, Rugs, Accessories, Umbrellas and Gazebos, you can arrange them into ANY possible way that fits your Outdoor lifestyle. Want to see your design up-close? Using WOWVR’s built-in Virtual Reality engine, you can take a virtual walk through your patio designs in a fully immersive 3D environment. WOWVR also supports Google Cardboard viewers, so you can get a Fully Immersive VR Experience using your mobile device.",
    techStack: ["C#", "Unity", "GoogleVr", "Android", "IOS"],
    year: 2016,
    image: wowVr,
  },
  {
    title: "Hypemoji",
    description:
      "With ReactJS running the frontend and Serverless + Amazon Web Services in the backend, this application traverses Snapchat's Bitmoji API to create custom Bitmoji comics with text input from the user. Users also can copy and paste their Bitmoji url into the application and be granted access to all Bitmoji and Friendmoji images to edit and share!",
    techStack: [
      "ReactJS",
      "Redux",
      "Javascript",
      "Styled Components",
      "Python",
      "Serverless",
      "Amazon Web Services",
    ],
    codeLink: [
      "https://github.com/YaphBlaster/hypemoji",
      "https://github.com/YaphBlaster/hypemoji_sls",
    ],
    demoLink: "http://hypemoji.surge.sh/",
    year: 2019,
    image: hypemoji,
  },
  {
    title: "Portfolio",
    description:
      "This website! I wanted some more experience working with ReactJS, TypeScript, and web in general so I decided a portfolio page would be a great learning experience! Feel free to view the github repository linked on the top right corner.",
    techStack: ["ReactJS", "TypeScript", "Styled Components", "Netlify"],
    codeLink: "https://github.com/YaphBlaster/portfolio-typescript",
    year: 9999,
    image: `${process.env.PUBLIC_URL}/images/${portfolioImageFileNames[Math.floor(Math.random() * portfolioImageFileNames.length)]}`,
  },
  {
    title: "Wawanesa Innovation Dashboard",
    description:
      "Developed in ReactJS, this web application is used as a central hub for the prototypes made in Wawanesa's Innovation Lab. The Innovation Lab is heavily focused on creating insurance solutions using the most cutting edge technologies, however, these technologies are backend heavy so the Innovation Dashboard was created to give a face to all the proof of concepts at the lab. As the Lead Developer for this project, I mentored junior developers to learn ReactJS, established version control workflows and  set up the groundwork to expedite tedious tasks such as routing, component building, and hosting/deployment solutions.",
    techStack: ["ReactJS", "Redux", "Sass", "Javascript", "AWS"],
    year: 2018,
    image: innovationLab,
  },
  {
    title: "Prequel Memes",
    description:
      "A web application developed in React. This application was made to streamline the process of creating images for social media. The user can choose a character and will be given multiple screenshots that are pulled from a server where that character is featured. The user can then choose to add text and then finally create an image with their text implanted onto it.",
    techStack: ["ReactJS", "Redux", "Sass", "Javascript"],
    codeLink: "https://github.com/YaphBlaster/pm3",
    year: 2018,
    image: prequelMemes,
  },
  {
    title: "Hall of Fame VR Invitation",
    description:
      "This app was created to invite members to the 2016 Canadian Sports Hall of Fame induction using Google Cardboard/VR. Upon putting a device in a vr headset, users find themselves in a full auditorium where they would be invited to the sports event via a video playing on a theatre screen",
    techStack: ["C#", "Unity", "GoogleVr"],
    year: 2016,
    image: CSHOF,
  },
  {
    title: "Canada’s Dream Garage Builder",
    description:
      "Developed in Unity, this app allows a user to create their garage in a controlled first person experience and allows them to move products around. Users can then can explore their space by moving around using a touch screen, or by putting on an Oculus Rift to see their garage in Virtual Reality.",
    techStack: ["C#", "Unity", "Oculus"],
    year: 2015,
    image: garageBuilder,
  },
  {
    title: "Canada’s Dream Patio Builder",
    description:
      "Developed in Unity, this application lets users create a patio through a top down builder on a touch screen television. Users can then can explore their space by moving around using the touch screen, or putting on an Oculus Rift to see it in Virtual Reality.",
    techStack: ["C#", "Unity", "Oculus"],
    year: 2016,
    image: patioBuilder,
  },
];

export const skillList = [
  {
    name: "React",
    image: react,
  },
  {
    name: "Redux",
    image: redux,
  },
  {
    name: "Styled Components",
    image: styledComponents,
  },
  {
    name: "JavaScript",
    image: javaScript,
  },
  {
    name: "TypeScript",
    image: typeScript,
  },
  {
    name: "Framer Motion",
    image: framer,
  },
  {
    name: "Figma",
    image: figma,
  },
  {
    name: "Python",
    image: python,
  },
  {
    name: "Amazon Web Services",
    image: amazonAws,
  },
  {
    name: "Serverless",
    image: serverless,
  },
  {
    name: "C Sharp",
    image: csharp,
  },
  {
    name: "Godot",
    image: godotEngine,
  },
  {
    name: "Unreal Engine",
    image: unrealEngine,
  },
  {
    name: "Unity",
    image: unity,
  },
];
