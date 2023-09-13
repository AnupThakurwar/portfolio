import projectImage1 from "../Resources/Images/project image-1.jpg";
import projectImage2 from "../Resources/Images/project image-2.jpg";
import projectImage3 from "../Resources/Images/dark theme support.PNG";
import logo2 from "../Resources/logo/interminable info solution logo.jpg";
import logo1 from "../Resources/logo/spring computing technology logo.jpg";

export const workExperience = [
  {
    companyName: "Spring Computing Technologies",
    location: "pune",
    isWorking: true,
    role: "Software developer",
    startDate: "Mar 2022",
    endDate: "till present",
    projectImage: projectImage1,
    logo: logo1,
    servingNoticPeriod: true,
    projectName: "Intellivision Projects",
    summary: [
      " Worked in an Agile (Scrum) Development Team to deliver regular updates to business team and project managers.",
      "Develop Cross browser, cross device high quality, high performance, beautiful, maintainable front-end code using React JS, Html 5, Css3, Javascript",
      "Performed code review of other team members' work and recommended changes to improve code quality.",
      "Troubleshooting interface software and debugging application code in Timely manner.  Meet with the development team to discuss user interface ideas and applications.",
    ],
    projectDescription:
      "Inellivision projects are focused on delivering monitering and survellience in various domains such as public places, airports, official premises etc.",
    yourRole:
      "Worked upon 2 projects majorly, and was responsible for designing and developing modules and functionality in projects such as Intelligent videos, Intelligent Airport Surveillance and was given a chance to work with teammates to build project from scratch so was responsible for developing authentication process.",
  },
  {
    companyName: "Interminable Info Solution Pvt.Ltd",
    location: "hydrabad",
    isWorking: false,
    role: "UI developer",
    startDate: "Jan 2021",
    projectImage: projectImage2,
    logo: logo2,
    endDate: "Mar 2022",
    servingNoticPeriod: true,
    projectName: "Astropush",
    summary: [
      "Identifying web-based User Interaction.",
      "Develop and implement highly responsive user interface component using React Concepts.",
      "Create Reusable Components.",
      "Involved in Consuming API to render data to the pages using Library such as Redux Saga and Axios.",
      "Worked with code version tools such GitHub, Git Lab.",
      "Ensure Tight Cooperation with other engineers, designers, and artists through Active listening, systematic communication, and leadership skills.",
    ],
    projectDescription:
      "Astropush is webapplication designed for providing astrological services to customers. the services includes kundli matching, horoscope, numerology, paid items etc. the customer can have chat or call based on service availed.",
    yourRole:
      "Resposible for desiging and developing resposive UI modules for services such as kundli matching, numerology etc. the team size was 4-5 people and were assigned dedicated tasks for each module, so was given a chance in exploring backend services in absense of members.",
  },
];

export const personalProject = [
  {
    companyName: "React Movies",
    location: "Pune",
    isWorking: false,
    role: "UI developer",
    startDate: "Aug 2023",
    projectImage: projectImage3,
    logo: logo2,
    endDate: "Sep 2023",
    servingNoticPeriod: true,
    projectName: "React Movie",
    projectDescription:
      "React Movies is a web application designed to show popular movies and has feature of searching your favorite movie or adding your favorite movie to list. user can create its own playlist ,view movie collection, play movie trailers along with supported dark theme support.",
    yourRole: "designed the entire website",
    link: "https://reactmoviesbyat.netlify.app",
  },
];
