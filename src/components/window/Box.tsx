import { Resizable } from "re-resizable";

import "./box.style.css";
import { useState } from "react";

export interface ResizableProps {
  widthProp: number;
  heightProp: number;
  children?: React.ReactElement;
}

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
} as const;

const Box: React.FC<ResizableProps> = ({ widthProp = 200, heightProp = 300, children }) => {
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(300);

  return (
    <Resizable
      style={style}
      size={{ width, height }}
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
        setHeight(height + d.height);
      }}
    >
      {children}
    </Resizable>
  );
};

export default Box;
