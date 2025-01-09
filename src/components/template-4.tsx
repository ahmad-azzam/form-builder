import Card from "./card";
import Editor from "./editor";

const TemplateFour = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1">
        <Card>
          <Editor />
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <Editor />
        </Card>
        <Card>
          <Editor />
        </Card>
      </div>
    </div>
  );
};

export default TemplateFour;
