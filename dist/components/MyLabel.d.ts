/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, label, size, customFontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
