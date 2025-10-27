import Link from "./Link";

let linksList = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/lurryputriaprilia/",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/LurryPutri",
  },
  {
    title: "Github",
    link: "https://github.com/lurapril12",
  }
];

const Links = () => {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center gap-6">
      {linksList.map((link, index) => (
        <Link key={index} title={link.title} to={link.link} />
      ))}
    </div>
  );
};

export default Links;
