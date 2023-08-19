import React from "react";
import { ButtonVariantProps } from "./types";

export default function OutlinedButton({
  className,
  content,
  onClick,
}: ButtonVariantProps) {
  return (
    <button
      className={`base-button--outlined ${className || ""}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
