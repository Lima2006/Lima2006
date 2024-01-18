import { classNameBuilder } from "@core/helpers";
import React from "react";


export interface PageBaseProps {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}
export const PageBase: React.FC<PageBaseProps> = ({
  className,
  children,
}) => {
  return <main className={classNameBuilder("flex min-h-screen flex-col", className)}>{children}</main>;
};

export default PageBase;
