import { classNameBuilder } from "@core/helpers";
import React from "react";

export interface RowProps {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}
export const Row: React.ForwardRefRenderFunction<HTMLDivElement, RowProps> = ({
  className,
  ...props
}, ref) => {
  return (
    <div className={classNameBuilder("flex flex-row", className)} {...props} ref={ref} />
  );
};

export default React.forwardRef(Row);
