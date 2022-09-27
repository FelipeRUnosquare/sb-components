import React from "react";
import "./mylabel.css";

export interface MyLabelProps {
  /**
   * This is the boolean to set all caps true or false
   */
  allCaps?: boolean;
  /**
   * This is the color
   */
  /**
   * this is the background color
   */
  backgroundColor: string;
  color?: "primary" | "secondary" | "tertiary";
  /**
   * This is the color of the font
   */
  customFontColor?: string;
  /**
   * This is the message
   */
  label: string;
  /**
   * This is the size of the label
   */
  size: "normal" | "h1" | "h2" | "h3";
}
export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "NoLabel",
  size = "normal",
  customFontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: customFontColor, backgroundColor: backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
