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

const Box: React.FC<ResizableProps> = ({ widthProp, heightProp, children }) => {
  const [width, setWidth] = useState<number>(widthProp);
  const [height, setHeight] = useState<number>(heightProp);

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
