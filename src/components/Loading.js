import React from "react";
import { spiral } from "ldrs";

spiral.register();

export const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <l-spiral size="70" speed="0.8" color="#9a4e3d"></l-spiral>
    </div>
  );
};
