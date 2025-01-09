import { FC, ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

const DroppableArea: FC<{ children: ReactNode }> = ({ children }) => {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style: React.CSSProperties = {
    minHeight: "200px",
    border: "2px dashed #d9d9d9",
    padding: "20px",
    background: "#f0f2f5",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default DroppableArea;
