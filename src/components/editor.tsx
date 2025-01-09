import React, { useState } from "react";
import Block, { BlockData } from "./block";

const initialBlocks: BlockData[] = [];

const Editor: React.FC = () => {
  const [blocks, setBlocks] = useState<BlockData[]>(initialBlocks);

  const addBlock = (type: "paragraph" | "header") => {
    setBlocks([
      ...blocks,
      {
        id: Date.now(),
        type,
        content: type === "paragraph" ? "New text" : "New header",
        level: 1,
      },
    ]);
  };

  const updateBlock = (id: number, newContent: string) => {
    setBlocks(
      blocks.map((block) =>
        block.id === id ? { ...block, content: newContent } : block
      )
    );
  };

  return (
    <div className="">
      {blocks.map((block) => (
        <Block key={block.id} data={block} onChange={updateBlock} />
      ))}
      <div className="flex space-x-2 mt-4">
        <button
          onClick={() => addBlock("paragraph")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Text Block
        </button>
        <button
          onClick={() => addBlock("header")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Header Block
        </button>
      </div>
    </div>
  );
};

export default Editor;
