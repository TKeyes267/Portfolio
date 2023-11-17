export const projectData = [
  {
    projectID: 0,
    projectTitle: "Air Pollution Checker",
    projectURL: "Air_Pollution_Checker",
    projectSummary:
      "Air Pollution Checker is a mobile application built with React Native designed to empower users by providing real-time information about air quality in their area.",
    projectDescription:
      "Air Pollution Checker is a mobile application built with React Native designed to empower users by providing real-time information about air quality in their area. Whether you're concerned about personal health or the environment, this app offers a straightforward and informative solution.",
    projectFeatureTitle1: "Location-based AQI: ",
    projectFeature1:
      "The app offers users the ability to check air pollution by inputting a postcode or allowing automatic geolocation. It displays an intuitive color-coded Air Quality Index (AQI) to quickly communicate the air quality level. ",
    projectFeatureTitle2: "Detailed Insights: ",
    projectFeature2:
      "Beyond the AQI, users can explore in-depth details about various pollutants present in the air. The app breaks down each pollutant type and presents comprehensive data for those seeking a more thorough understanding. ",
    projectFeatureTitle3: "Live Data Integration: ",
    projectFeature3:
      "The application dynamically fetches air quality data from an external API, ensuring that the information presented is up-to-date and accurate. Another API is employed to obtain coordinates from user-provided postcodes. ",
    projectFeatureTitle4: "User-Centered Design: ",
    projectFeature4:
      "The user interface was built using React Native and  TailwindCSS, the design is clear and readable to cater to accessibility needs. Informative use of colors and a user-friendly layout guarantee an inclusive experience for all users. ",
    projectStack: "Javascript, React-Native, Expo, TailwindCSS",
    projectLink: "https://uk-air-pollution-checker.netlify.app",
    projectGitHubLink: "https://github.com/TKeyes267/AirPollutionChecker",
    projectImage: new URL(
      "/src/assets/images/PortfolioMockupPollutionForecastMobilePortraitNavyBackground.png",
      import.meta.url
    ).href,
    projectImage2: new URL(
      "/src/assets/images/PortfolioMockupDoubleMobileAirPollution.png",
      import.meta.url
    ).href,
  },
  {
    projectID: 1,
    projectTitle: "Floater",
    projectURL: "Floater",
    projectSummary:
      "Floater allows you to find swimming sites and check they are safe. It features an interative map and a reviewing system. ",
    projectDescription:
      "Floater is a web app that allows users to find wild swimming sites through geolocation or a postcode search. Users can review and comment on specific sites and can use a dynamic map, built with Leaflet.js, to see whether the site is near any sewage overflow sites. This project pulls data from APIs including the Environment Agency and the Rivers Trust. This project was a group effort as part of a final project on my software development boot camp and was created in one week.",
    projectFeatureTitle1: "Wild Swimming Discovery: ",
    projectFeature1:
      "Floater connects nature enthusiasts with hidden gems for wild swimming adventures in lakes, rivers, and the sea. Users can easily locate these serene spots and evaluate their suitability for a dip. ",
    projectFeatureTitle2: "Environmental Awareness:  ",
    projectFeature2:
      "Beyond just finding beautiful swimming locations, the app empowers users with essential information. It checks if the chosen sites are polluted or located near sewage overflow points. ",
    projectFeatureTitle3: "Interactive Map Interface: ",
    projectFeature3:
      "We integrated Leaflet to craft an interactive map, enriched with markers for swimming sites and sewage overflow locations. Users can explore sites in their vicinity or search by postcode. ",
    projectFeatureTitle4: "Detailed Site Pages: ",
    projectFeature4:
      "Each swimming location is accompanied by a dedicated page, allowing users to share their experiences through comments and ratings. Users can also access comprehensive information about the site. ",
    projectStack: "Typescript, React, HTML, CSS, Leaflet.js, Mongo.DB",
    projectLink: "https://floater-wildswimming.netlify.app/",
    projectGitHubLink: "https://github.com/TKeyes267/Floater",
    projectImage: new URL(
      "/src/assets/images/PortfolioMockupLaptopAndMobileFloatr.png",
      import.meta.url
    ).href,
    projectImage2: new URL(
      "/src/assets/images/FloatrLaptop1.jpg",
      import.meta.url
    ).href,
  },
  {
    projectID: 2,
    projectTitle: "Ancoats Post",
    projectURL: "Ancoats_Post_Frontend",
    projectSummary:
      "The Ancoats Post is a C.R.U.D web app for news articles built using React. Includes a purpose built Backend API and database for managing news articles and user comments, built to be scalable and reliable.",
    projectDescription:
      "The Ancoats Post is a C.R.U.D web app for news articles built using React. Includes a purpose built Backend API and database for managing news articles and user comments, built to be scalable and reliable. It offers a comprehensive set of features for creating, reading, updating, and deleting news articles. This project served as the frontend interface for a comprehensive Reddit style news platform, seamlessly integrating with the backend.",

    projectFeatureTitle1: "Interactive User Engagement: ",
    projectFeature1:
      "I implemented features such as commenting and upvoting, fostering user interaction and community engagement around news articles. ",
    projectFeatureTitle2: "Optimistic Rendering: ",
    projectFeature2:
      "To enhance user experience, the app employs optimistic rendering for comments and votes, providing a smooth and responsive interface. ",
    projectFeatureTitle3: "Responsive Design: ",
    projectFeature3:
      "The application adapts gracefully to different screen sizes, ensuring that users can access the content seamlessly on various devices. ",
    projectFeatureTitle4: "Purpose built back-end API ",
    projectFeature4:
      "The API follows the Model-View-Controller (MVC) architectural pattern, promoting clean code separation and maintainability. With Express.js, routes and handlers are meticulously defined for each endpoint, enabling the efficient retrieval of data in a structured and organised manner. Rigorous testing using Jest.js ensures that each API endpoint consistently delivers relevant, requested, and complete content. This commitment to testing guarantees the reliability of the API. ",
    projectStack:
      "Javascript, React, TailwindCSS, Express.js, Node.js, PostgreSQL, Jest, Supertest",
    projectLink: "https://tkncnews.netlify.app/articles",
    projectGitHubLink: "https://github.com/TKeyes267/nc-news-frontend",
    projectImage: new URL(
      "/src/assets/images/PortfolioMockupLaptopAndMobileAncoatsPost.png",
      import.meta.url
    ).href,
    projectImage2: new URL(
      "/src/assets/images/PortfolioMockupLaptopAndMobileAncoatsPost.png",
      import.meta.url
    ).href,
  },
  // {
  //   projectID: 3,
  //   projectTitle: "Ancoats Post Back-end",
  //   projectURL: "Ancoats_Post_Backend",
  //   projectSummary:
  //     "The Ancoats Post Backend API is a robust foundation for managing news articles and user comments, built to be scalable and reliable.",
  //   projectDescription:
  //     "The Ancoats Post Backend API is a robust foundation for managing news articles and user comments, built to be scalable and reliable. This project was developed as part of my bootcamp, showcasing my proficiency in backend development.",
  //   projectFeatureTitle1: "Efficient Routing: ",
  //   projectFeature1:
  //     "With Express.js, routes and handlers are meticulously defined for each endpoint, enabling the efficient retrieval of data in a structured and organised manner. ",
  //   projectFeatureTitle2: "MVC Architecture: ",
  //   projectFeature2:
  //     "The API follows the Model-View-Controller (MVC) architectural pattern, promoting clean code separation and maintainability. ",
  //   projectFeatureTitle3: "Test-Driven Development (TDD): ",
  //   projectFeature3:
  //     "By adopting a TDD approach, the API was developed with a focus on robust functionality from the outset, minimising potential issues. ",
  //   projectFeatureTitle4: "Comprehensive Testing: ",
  //   projectFeature4:
  //     "Rigorous testing using Jest.js ensures that each API endpoint consistently delivers relevant, requested, and complete content. This commitment to testing guarantees the reliability of the API. ",
  //   projectStack:
  //     "Javascript, Express.js, Node.js, PostgreSQL, Jest, Supertest",
  //   projectLink: "https://tkncnews.netlify.app/articles",
  //   projectGitHubLink: "https://github.com/TKeyes267/NC-news-backend",
  //   projectImage: new URL(
  //     "/src/assets/images/AncoatsPostBackendLaptop.jpg",
  //     import.meta.url
  //   ).href,
  //   projectImage2: new URL(
  //     "/src/assets/images/AncoatsPostBackendLaptop.jpg",
  //     import.meta.url
  //   ).href,
  // },
];
