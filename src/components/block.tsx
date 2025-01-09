import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export interface BlockData {
  id: number;
  type: "paragraph" | "header";
  content: string;
  level?: number;
}

interface BlockProps {
  data: BlockData;
  onChange: (id: number, content: string) => void;
}

const Block: React.FC<BlockProps> = ({ data, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: data.content,
    onUpdate: ({ editor }) => onChange(data.id, editor.getHTML()),
  });

  if (data.type === "header") {
    const HeaderTag = `h${data.level}` as keyof JSX.IntrinsicElements;
    return (
      <HeaderTag
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onChange(data.id, e.currentTarget.textContent || "")}
        className="text-2xl font-bold mb-4"
      >
        {data.content}
      </HeaderTag>
    );
  }

  return (
    <div className="mb-4">
      <EditorContent editor={editor} className="prose" />
    </div>
  );
};

export default Block;
