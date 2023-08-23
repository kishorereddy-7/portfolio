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
};
