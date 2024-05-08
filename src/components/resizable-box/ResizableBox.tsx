import { Resizable } from "re-resizable";
import { useState } from "react";

export interface ResizableProps {
  widthProp: string;
  heightProp: string;
  children?: React.ReactElement;
}

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
} as const;

const ResizableBox: React.FC<ResizableProps> = ({
  widthProp,
  heightProp,
  children,
}) => {
  const [width, setWidth] = useState<string>(widthProp);
  const [height, setHeight] = useState<string>(heightProp);

  return (
    <Resizable
      style={style}
      size={{ width, height }}
      onResizeStop={(_e: any, _direction: any, _ref: any, d) => {
        setWidth(width + d.width);
        setHeight(height + d.height);
      }}
    >
      {children}
    </Resizable>
  );
};

export default ResizableBox;
