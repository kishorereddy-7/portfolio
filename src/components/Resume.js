const logo = new URL("./assets/Kishore-Frontend.pdf", import.meta.url);

const downloadIcon = "https://akshaysaini.in/img/dwnld.png";

const Resume = () => {
  return (
    <div className="flex justify-center flex-col items-center my-8">
      <h1 className="text-4xl">Download my Resume.</h1>
      <a href={logo} target="_blank" rel="noopener noreferrer">
        <img src={downloadIcon} alt="resume-download" />
      </a>
    </div>
  );
};

export default Resume;
