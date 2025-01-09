import { FC, useState } from "react";
import { TItem } from "../type";
import { Button, Row, Col } from "antd";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import DraggableItem from "../components/draggable-item";
import DroppableArea from "../components/droppable-area";

const Builder: FC = () => {
  const [items, setItems] = useState<TItem[]>([
    { id: "1", content: "Box 1" },
    { id: "2", content: "Box 2" },
  ]);

  const [droppedItems, setDroppedItems] = useState<TItem[]>([]);

  const addNewBox = (): void => {
    const newId = (items.length + 1).toString();
    setItems([...items, { id: newId, content: `Box ${newId}` }]);
  };

  const handleDragEnd = (event: DragEndEvent): void => {
    const { over, active } = event;
    if (over && over.id === "droppable") {
      const draggedItem = items.find((item) => item.id === active.id);
      if (draggedItem) {
        setDroppedItems([...droppedItems, draggedItem]);
        setItems(items.filter((item) => item.id !== active.id));
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Modern Page Builder with dnd-kit and Ant Design</h1>
      <Button
        type="primary"
        onClick={addNewBox}
        style={{ marginBottom: "20px" }}
      >
        Add New Box
      </Button>
      <DndContext onDragEnd={handleDragEnd}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <h3>Draggable Items</h3>
            {items.map((item) => (
              <DraggableItem
                key={item.id}
                id={item.id}
                content={item.content}
              />
            ))}
          </Col>
          <Col span={12}>
            <h3>Droppable Area</h3>
            <DroppableArea>
              {droppedItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: "10px",
                    border: "1px solid #d9d9d9",
                    marginBottom: "10px",
                  }}
                >
                  {item.content}
                </div>
              ))}
            </DroppableArea>
          </Col>
        </Row>
      </DndContext>
    </div>
  );
};

export default Builder;
