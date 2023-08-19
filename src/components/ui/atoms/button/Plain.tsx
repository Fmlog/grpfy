import React from "react";
import { ButtonVariantProps } from "./types";

export default function PlainButton({
  className,
  content,
  onClick,
}: ButtonVariantProps) {
  return (
    <button
      className={`base-button--plain ${className || ""}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
