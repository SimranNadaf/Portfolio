import React, { useState } from "react";
import ProjectsFlutter from "./projectsFlutter";
import ProjectsWeb from "./projectWeb";
import ProjectsML from "./projectsML";

const ProjectsCat: React.FC = () => {
  const [isMob, setIsMob] = useState<boolean>(true);
  const [isWeb, setIsWeb] = useState<boolean>(false);
  const [isML, setIsML] = useState<boolean>(false);

  const onWeb = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsWeb(true);
    setIsMob(false);
    setIsML(false);
    console.log("Web Development");
  };
  const onMob = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsWeb(false);
    setIsMob(true);
    setIsML(false);
    console.log("Mobile Development");
  };
  const onML = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsWeb(false);
    setIsMob(false);
    setIsML(true);
    console.log("Machine Learning");
  };
  let content = <ProjectsWeb />;

  if (isMob) {
    content = <ProjectsFlutter />;
  } else if (isWeb) {
    content = <ProjectsWeb />;
  } else if (isML) {
    content = <ProjectsML />;
  }
  return (
    <>
      <div className="flex flex-col gap-10 p-10">
        <div className="flex flex-row gap-20 justify-center items-center">
          <div>
            <button
              onClick={onWeb}
			  className={`mt-6 text-lg font-medium px-5 py-2 rounded-xl border border-black ${
				isWeb ? 'text-white bg-black' : 'text-black bg-white'
			  }`}>
              Web Development
            </button>
          </div>
          <div>
            <button
              onClick={onMob}
			  className={`mt-6 text-lg font-medium px-5 py-2 rounded-xl border border-black ${
				isMob ? 'text-white bg-black' : 'text-black bg-white'
			  }`}
            >
              Mobile App Development
            </button>
          </div>
          <div>
            <button
              onClick={onML}
			  className={`mt-6 text-lg font-medium px-5 py-2 rounded-xl border border-black ${
				isML ? 'text-white bg-black' : 'text-black bg-white'
			  }`}            >
              Machine Learning
            </button>
          </div>
        </div>
        <div>{content}</div>
      </div>
    </>
  );
};

export default ProjectsCat;
