export const personalDetails = {
  firstName: "Venakta Kishore Reddy",
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
    CGPA: 7.42
  },
  {
    qualification: "Intermediate",
    specification: "MPC",
    from: "2015",
    to: "2017",
    institute: "NRI Junior College",
    percentage: 94
  },
  {
    qualification: "Secondary School Certificate",
    specification: "",
    from: "",
    to: "2015",
    institute: "Sankhya Visionary School",
    CGPA: 8.5
  },
];