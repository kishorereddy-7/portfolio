export const personalDetails = {
  firstName: "Venkata Kishore Reddy",
  lastName: "Guttikonda",
  description:
    "Hello! I'm a passionate frontend developer with expertise in crafting delightful user experiences for web applications. With a keen eye for design and a strong command of front-end technologies, I bring ideas to life through clean and efficient code.",
  contactDescription:
    "I'm excited to connect with fellow frontend developers and industry professionals who share a passion for creating exceptional user experiences. Whether you're interested in discussing the latest frontend frameworks, exchanging ideas on responsive design techniques, or collaborating on innovative projects, I believe that connecting and learning from each other is key to personal and professional growth. Let's forge meaningful connections, share insights, and inspire one another to push the boundaries of what's possible in the frontend development world. Feel free to reach out, and let's embark on a journey of collaboration and knowledge exchange!",
  age: () => {
    const today = new Date();
    const birthDate = new Date("1999-12-07");
    return today.getFullYear() - birthDate.getFullYear();
  },
  role: "Frontend Developer",
  socialMediaLinks: {
    linkedin:
      "https://www.linkedin.com/in/venkata-kishore-reddy-guttikonda-423208201/",
    instagram: "",
    twitter: "",
    github: "",
  },
};

export const educationDetails = [
  {
    qualification: "Bachelor of Technology",
    specification: "Electronics and Communications Engineering (ECE)",
    from: "2017",
    to: "2021",
    institute: "Godavari Institute of Engineering and Technology",
    CGPA: 7.42,
    location: "Rajahmundry",
  },
  {
    qualification: "Intermediate",
    specification: "MPC",
    from: "2015",
    to: "2017",
    institute: "NRI Junior College",
    percentage: 94,
    location: "Guntur",
  },
  {
    qualification: "Secondary School Certificate",
    specification: "",
    from: "2014",
    to: "2015",
    institute: "Sankhya Visionary School",
    CGPA: 8.5,
    location: "Ongole",
  },
];

export const workDetails = [
  {
    company: "TECHstile",
    designation: "Software Developer",
    from: "Nov 2022",
    to: "Present",
    location: "Mumbai",
  },
  {
    company: "InnoVaccer",
    designation: "Associate Software Engineer",
    from: "Sep 2021",
    to: "Nov 2022",
    location: "Noida",
  },
];
