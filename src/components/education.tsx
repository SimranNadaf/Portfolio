import React from "react";
import japfa from "../../assets/japfa.png";
import byte from "../../assets/byteridge.png";

const Education: React.FC = () => {
  return (
    <div className="text-left font-bold text-black text-4xl m-16 h-[600px] ">
        <h1>Education</h1>
		<div className="flex flex-row justify-center items-center h-full my-10">
		{/*<div className="flex flex-col justify-center items-center h-full mt-10">
		<div className="bg-black p-2 w-1 h-1 rounded-lg "></div>
		<div className="bg-black p-1 w-1 h-1/2"> </div>
		<div className="bg-black p-2 w-1 h-1 rounded-lg "></div>
		<div className="bg-black p-1 w-1 h-1/2"> </div>
		</div>*/}
		
        <div className="flex flex-col m-10 item-center w-4/5 h-full">
		<div className="flex flex-row justify-start items-start gap-x-11"> 
		<div className="flex flex-col justify-center items-center h-full">
		<div className="bg-black p-1.5 w-1 h-1 rounded-lg "></div>
		<div className="bg-black w-0.5 h-full"> </div>
		</div>
          <div className="p-5 bg-exp-bg border hover:border-gray-200 text-left mb-10 hover:shadow-2xl">
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <h1 className="p-2 font-semibold text-xl">
                 Bachalor's of Engineering - Computer Engineering
                </h1>
              </div>
              <div>
                {" "}
                <img className="mr-3 w-auto h-8" src={japfa} alt="logo" />{" "}
              </div>
            </div>
            <div>
              <h1 className="pl-3 font-normal text-base">
                University of Mumbai
              </h1>
            </div>
			<div>
			<p className="p-4 font-normal text-base">
              During my time as a Software Engineer at [Company Name], I had the
              opportunity to work on a variety of projects that honed my
              technical skills and enhanced my problem-solving abilities. I
              collaborated with cross-functional teams to design, develop, and
              deploy scalable web applications using technologies such as React,
              Node.js, and MongoDB.
            </p>
			</div>
          </div>
		  </div>
		  <div className="flex flex-row justify-start items-start gap-x-11"> 
		<div className="flex flex-col justify-center items-center h-full">
		<div className="bg-black p-1.5 w-1 h-1 rounded-lg "></div>
		<div className="bg-black w-0.5 h-full"> </div>
		</div>
          <div className="p-5 bg-exp-bg hover:shadow-2xl border hover:border-gray-200">
            <div className="flex flex-row justify-left items-center gap-5">
              <h1 className="p-2 font-semibold text-xl">
              Dimploma in Computer Engineering
			  </h1>
              <img className="w-auto h-8" src={byte} alt="logo" />
            </div>
            <h1 className="pl-3 font-medium text-base">
			  Maharashtra State Board of Technical Education
            </h1>
			<div>
            <p className="p-4 font-normal text-base">
              During my time as a Software Engineer at [Company Name], I had the
              opportunity to work on a variety of projects that honed my
              technical skills and enhanced my problem-solving abilities. I
              collaborated with cross-functional teams to design, develop, and
              deploy scalable web applications using technologies such as React,
              Node.js, and MongoDB.
            </p>
			</div>
          </div>
		</div>
        </div>
		</div>
      </div>
  );
};

export default Education;
