import { FC, useState } from "react";
import TemplateOne from "../components/template-1";
import TemplateTwo from "../components/template-2";
import TemplateThree from "../components/template-3";
import TemplateFour from "../components/template-4";

const TestBuild: FC = () => {
  const [data, setData] = useState<{ type: 1 | 2 | 3 | 4 | 5 }[]>([]);

  const handleClickTemplate = (type: 1 | 2 | 3 | 4 | 5) => {
    setData((prev) => {
      return [...prev, { type }];
    });
  };

  return (
    <div className="border border-gray-500 rounded-lg h-full p-4 flex flex-col gap-4">
      {/* show data */}

      {data.map((item, index) => {
        if (item.type === 1)
          return (
            <div
              key={`${index}_template`}
              className="bg-teal-100 rounded-lg p-4"
            >
              <span className="">Section {index + 1}</span>
              <TemplateOne />
            </div>
          );

        if (item.type === 2)
          return (
            <div
              key={`${index}_template`}
              className="bg-red-100 rounded-lg p-4"
            >
              <span className="">Section {index + 1}</span>
              <TemplateTwo />
            </div>
          );

        if (item.type === 3)
          return (
            <div
              key={`${index}_template`}
              className="bg-yellow-100 rounded-lg p-4"
            >
              <span className="">Section {index + 1}</span>
              <TemplateThree />
            </div>
          );

        if (item.type === 4)
          return (
            <div
              key={`${index}_template`}
              className="bg-purple-100 rounded-lg p-4"
            >
              <span className="">Section {index + 1}</span>
              <TemplateFour />
            </div>
          );

        return <></>;
      })}

      <div className="flex flex-col items-center gap-3 mt-5">
        <div className="flex justify-center items-center gap-4">
          {/* Template 1 */}
          <div
            className="p-2 border group cursor-pointer"
            onClick={() => handleClickTemplate(1)}
          >
            <div className="w-10 h-16 bg-gray-300 group-hover:bg-gray-400 duration-300 " />
          </div>

          {/* Template 2 */}
          <div
            className="p-2 border group cursor-pointer"
            onClick={() => handleClickTemplate(2)}
          >
            <div className="flex gap-1 ">
              <div className="w-10 h-16 bg-gray-300 group-hover:bg-gray-400 duration-300 " />
              <div className="w-10 h-16 bg-gray-300 group-hover:bg-gray-400 duration-300 " />
            </div>
          </div>

          {/* Template 3 */}
          <div
            className="p-2 border group cursor-pointer"
            onClick={() => handleClickTemplate(3)}
          >
            <div className="flex gap-1 ">
              <div className="w-10 h-16 bg-gray-300 group-hover:bg-gray-400 duration-300 " />
              <div className="w-10 h-16 bg-gray-300 group-hover:bg-gray-400 duration-300 " />
              <div className="w-10 h-16 bg-gray-300 group-hover:bg-gray-400 duration-300 " />
            </div>
          </div>

          {/* Template 3 */}
          <div
            className="p-2 border group cursor-pointer"
            onClick={() => handleClickTemplate(4)}
          >
            <div className="flex flex-col w-24 h-16 gap-1">
              <div className="w-full h-1/2 bg-gray-300 group-hover:bg-gray-400 duration-300" />
              <div className="flex gap-1 h-1/2 ">
                <div className="w-1/2 h-full bg-gray-300 group-hover:bg-gray-400 duration-300 " />
                <div className="w-1/2 h-full bg-gray-300 group-hover:bg-gray-400 duration-300 " />
              </div>
            </div>
          </div>
        </div>
        <div>Choose your template</div>
      </div>
    </div>
  );
};

export default TestBuild;
