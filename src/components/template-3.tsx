import Card from "./card";
import Editor from "./editor";

const TemplateThree = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Card>
        <Editor />
      </Card>
      <Card>
        <Editor />
      </Card>
      <Card>
        <Editor />
      </Card>
    </div>
  );
};

export default TemplateThree;
