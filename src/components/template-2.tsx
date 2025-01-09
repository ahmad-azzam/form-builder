import { FC } from "react";
import Card from "./card";
import Editor from "./editor";

const TemplateTwo: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card>
        <Editor />
      </Card>
      <Card>
        <Editor />
      </Card>
    </div>
  );
};

export default TemplateTwo;
