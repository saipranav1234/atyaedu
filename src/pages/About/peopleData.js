import stark from './Zstark.jpg';
import sasuke from './sas.png'
import hars from './harsh.jpg';
import sah from './sahaj.jpg'
import gurl1 from './girlunknown1.jpg'
import gurl2 from './girlunknown 2.jpg'


const peopleData = [
  {
    name: "Mr. Harsha",
    position: "Founder",
    image: hars, // Use imported variable
    details : "Speaker – E Cell IIT Bombay" ,
    social: {
      linkedin: "",
      twitter: "",
      github: ""
    },
  },
  {
    name: "Mr. Sahaj Tej",
    position: "Co-Founder",
    image: sah, // Use imported variable
    details : "Member- Entreprener Tribe(AP)" ,
    social: {
      linkedin: "https://linkedin.com/in/m-sahaj-tej-662004252",
      twitter: "",
      github: ""
    }
  },
  {
    name: "Mr. Zuber",
    position: "CTO",
    image: stark, // Use imported variable
    details : "Full Stack Developer & IoT Innovator" ,
    social: {
      linkedin: "https://www.linkedin.com/in/mohammed-zuber-ahamad/",
      twitter: "https://x.com/mdzuberahamad",
      github: "https://github.com/web-cracker"
    }
  },
  {
    name: "Mr. Pranav",
    position: "CDO",
    image: sasuke, // Use imported variable
    details : "Full Stack Developer & Data Analyst" ,
    social: {
      linkedin: "https://www.linkedin.com/in/sai-pranav-mallineni/",
      twitter: "https://x.com/SaiPranav2004",
      github: "https://github.com/saipranav1234"
    }
  },
  // {
  //   name: "Miss. Susritha",
  //   position: "TECH Lead ,Social Media Manager",
  //   image: gurl1, // Use imported variable
  //   details : "Jr Developer – Oyasis Infobyte" ,
  //   social: {
  //     linkedin: "",
  //     twitter: "",
  //     github: ""
  //   }
  // },
  // {
  //   name: "Miss. Lalaekhya",
  //   position: "Content Writer, Growth Advisor",
  //   image: gurl2, // Use imported variable
  //   details : "Growth – Lakya Incubator" ,
  //   social: {
  //     linkedin: "",
  //     twitter: "",
  //     github: ""
  //   }
  // },

  // Add more members as needed...
];

export default peopleData;
