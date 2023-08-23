import Desktop from "./icons/Desktop";
import Star from "./icons/Star";
import Columns from "./icons/Columns";
import Tag from "./icons/Tag";
import JS from "./icons/JS";
import Angular from "./icons/Angular";
import Redux from "./icons/Redux";

const skillsList = [
  {
    id: 1,
    title: "HTML",
    icon: <Desktop />,
    rating: [1, 2, 3, 4],
  },
  {
    id: 2,
    title: "CSS",
    icon: <Columns />,
    rating: [1, 2, 3, 4],
  },
  {
    id: 3,
    title: "JAVASCRIPT",
    icon: <JS />,
    rating: [1, 2, 3, 4],
  },
  {
    id: 4,
    title: "REACT",
    icon: <Tag />,
    rating: [1, 2, 3, 4],
  },
  {
    id: 5,
    title: "ANGULAR",
    icon: <Angular />,
    rating: [1, 2, 3],
  },
  {
    id: 6,
    title: "REDUX",
    icon: <Redux />,
    rating: [1, 2, 3, 4],
  },
];

const Skills = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl my-6">Skills.</h1>
      <div className="flex flex-wrap justify-around px-6">
        {skillsList?.map((skill) => (
          <div key={skill?.id} className="flex flex-col items-center my-8">
            {skill?.icon}
            <h1 className="font-black">{skill?.title}</h1>
            <div className="flex text-green-500">
              {skill?.rating?.map((star) => (
                <Star key={star.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
