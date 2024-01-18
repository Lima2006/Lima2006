import { classNameBuilder } from "@core/helpers";
import React from "react";

type TextAsType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export interface TextProps {
  as?: TextAsType;
  className?: string;
  children?: React.ReactNode | React.ReactNode[]
}
export const Text: React.ForwardRefRenderFunction<any, TextProps> = ({
  as: TextElement = "span",
  ...props
}, ref) => {
  return <TextElement {...props} ref={ref} />;
};

export default React.forwardRef(Text);
