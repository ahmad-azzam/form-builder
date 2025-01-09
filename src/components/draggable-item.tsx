import { FC } from "react";
import { TItem } from "../type";
import { useDraggable } from "@dnd-kit/core";
import { Card } from "antd";

const DraggableItem: FC<TItem> = ({ content, id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style: React.CSSProperties = {
    transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
    padding: "20px",
    border: "1px solid #d9d9d9",
    marginBottom: "10px",
    cursor: "grab",
    background: "#fafafa",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card title={`Draggable ${id}`} bordered>
        {content}
      </Card>
    </div>
  );
};

export default DraggableItem;
