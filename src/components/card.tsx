import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

const Card: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...props }) => {
  return (
    <div {...props} className="bg-white p-2 rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default Card;
