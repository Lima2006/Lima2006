import { classNameBuilder } from "@core/helpers";
import React from "react";

export interface HomePageBackgroundProps {
  className?: string;
}
export const HomePageBackground: React.FC<HomePageBackgroundProps> = ({
  className,
}) => {
  return (
    <div className={classNameBuilder("relative", className ?? "h-full w-full")}>
      <div
        className={classNameBuilder(
          "before:absolute before:inset-[40px] before:h-[400px] before:w-[400px] before:bg-green-900/30",
          "absolute right-[600px] top-48 h-[400px] w-[400px] rotate-12 bg-green-900",
          "after:absolute after:-inset-[40px] after:h-[400px] after:w-[400px] after:bg-green-400",
        )}
      />
      <div
        className={classNameBuilder(
          "before:absolute before:inset-[60px] before:h-[600px] before:w-[600px] before:bg-green-900/30",
          "absolute -right-[150px] top-[250px] h-[600px] w-[600px] rotate-12 bg-green-900",
          "after:absolute after:-inset-[60px] after:h-[600px] after:w-[600px] after:bg-green-400",
        )}
      />
      <div
        className={classNameBuilder(
          "before:absolute before:inset-[10px] before:h-[100px] before:w-[100px] before:bg-green-900/30",
          "absolute right-[500px] top-0 h-[100px] w-[100px] rotate-12 bg-green-900",
          "after:absolute after:-inset-[10px] after:h-[100px] after:w-[100px] after:bg-green-400",
        )}
      />
      <div
        className={classNameBuilder(
          "before:absolute before:inset-[20px] before:h-[200px] before:w-[200px] before:bg-green-900/30",
          "absolute -top-[50px] right-0 h-[200px] w-[200px] rotate-12 bg-green-900",
          "after:absolute after:-inset-[20px] after:h-[200px] after:w-[200px] after:bg-green-400",
        )}
      />
      <div
        className={classNameBuilder(
          "before:absolute before:inset-[15px] before:h-[150px] before:w-[150px] before:bg-green-900/30",
          "absolute right-[750px] top-[700px] h-[150px] w-[150px] rotate-12 bg-green-900",
          "after:absolute after:-inset-[15px] after:h-[150px] after:w-[150px] after:bg-green-400",
        )}
      />
    </div>
  );
};

export default HomePageBackground;
