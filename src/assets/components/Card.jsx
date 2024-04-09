import React, { useId, useState } from "react";
import Input from "./Input";

function Card({ imgSrc, label = "", content = "" }) {
  const id = useId();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div
        className={`w-60 h-60 p-3 flex flex-col items-center justify-center gap-3 border-2 ${
          isChecked ? "border-primary" : "border-gray-200"
        } rounded-xl cursor-pointer relative`}
        onClick={(e) => setIsChecked(!isChecked)}
      >
        <img
          src={imgSrc}
          alt="card-image"
          className={`w-[80%] ${isChecked ? "absolute  top-[-55px]" : ""}`}
        />

        <label
          htmlFor={id}
          className="text-[15px] text-center font-black cursor-pointer"
        >
          {label}
        </label>

        <p
          className={`text-xs text-textLight font-semibold text-center ${
            isChecked ? "" : "hidden"
          }`}
        >
          {content}
        </p>

        <div className="absolute inset-x-0 bottom-3">
          <Input
            type="checkbox"
            className="h-4 w-4 cursor-pointer text-green-500"
            checked={isChecked}
            onChange={(e) => setIsChecked(!isChecked)}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
