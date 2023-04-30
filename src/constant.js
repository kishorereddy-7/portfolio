export const personalDetails = {
  firstName: "Venkata Kishore Reddy",
  lastName: "Guttikonda",
  description: "",
  age: () => {
    const today = new Date();
    const birthDate = new Date("1999-12-07");
    return today.getFullYear() - birthDate.getFullYear();
  },
  role: "Frontend Developer",
  socialMediaLinks: {
    linkedin: "https://www.linkedin.com/in/venkata-kishore-reddy-guttikonda-423208201/",
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
    location: "Rajahmundry"
  },
  {
    qualification: "Intermediate",
    specification: "MPC",
    from: "2015",
    to: "2017",
    institute: "NRI Junior College",
    percentage: 94,
    location: "Guntur"
  },
  {
    qualification: "Secondary School Certificate",
    specification: "",
    from: "2014",
    to: "2015",
    institute: "Sankhya Visionary School",
    CGPA: 8.5,
    location: "Ongole"
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
    location: "Noida"
  },
];