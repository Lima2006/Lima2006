import { classNameBuilder } from "@core/helpers";
import React from "react";

export interface ColumnProps {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}
export const Column: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ColumnProps
> = ({ className, ...props }, ref) => {
  return (
    <div className={classNameBuilder("flex flex-col", className)} {...props} ref={ref} />
  );
};

export default React.forwardRef(Column);
