import { FC } from "react";
import Card from "./card";
import Editor from "./editor";

const TemplateOne: FC = () => {
  return (
    <div className="grid grid-cols-1">
      <Card>
        <Editor />
      </Card>
    </div>
  );
};

export default TemplateOne;
