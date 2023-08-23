import Gmail from "./icons/Gmail";
import Youtube from "./icons/Youtube";
import Linkedin from "./icons/Linkedin";
import Instagram from "./icons/Instagram";
import Github from "./icons/Github";

const contactsDetails = [
  {
    icon: <Gmail />,
    code: "guttikondakishorereddy@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&source=mailto&to=guttikondakishorereddy@gmail.com",
  },
  {
    icon: <Linkedin />,
    code: "Venkata Kishore Reddy Guttikonda",
    link: "https://www.linkedin.com/in/venkata-kishore-reddy-guttikonda-423208201/",
  },
  {
    icon: <Instagram />,
    code: "kishore_reddy_g_v",
    link: "https://www.instagram.com/kishore_reddy_g_v/",
  },
  {
    icon: <Github />,
    code: "kishorereddy-7",
    link: "https://github.com/kishorereddy-7",
  },
  {
    icon: <Youtube />,
    code: "Kishore Reddy Guttikonda",
    link: "https://www.youtube.com/@kishorereddyguttikonda88",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-wrap justify-around items-center my-8">
      <h1 className="text-xl font-bold my-4">No copyright issues.</h1>
      <h1 className="text-sky-500 text-4xl header-start my-4">Kishore Reddy</h1>
      <div className="flex">
        {contactsDetails.map((contact) => (
          <a
            className="mx-2"
            href={contact.link}
            target="_blank"
            key={contact.code}
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
