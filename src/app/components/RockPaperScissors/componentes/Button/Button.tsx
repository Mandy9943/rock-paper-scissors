import React from "react";
import { CSSProperties } from "styled-components";
import { ButtonS } from "./Button.style";

interface IProps {
  children: React.ReactNode;
  theme?: "primary" | "secondary";
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
}

const Button = ({ children, theme = "primary", ...rest }: IProps) => {
  let buttonStyle = {
    background: "transparent",
    text: "white",
    hoverBackground: "white",
    hovertext: "hsl(214, 47%, 23%)",
  };

  if (theme === "primary") {
    buttonStyle = {
      ...buttonStyle,
      background: "transparent",
      text: "white",
      hoverBackground: "white",
      hovertext: "hsl(214, 47%, 23%)",
    };
  }
  if (theme === "secondary") {
    buttonStyle = {
      ...buttonStyle,
      background: "white",
      text: "var(--Dark_Text)",
      hoverBackground: "white",
      hovertext: "red",
    };
  }
  return (
    <ButtonS
      backgroundColor={buttonStyle.background}
      textColor={buttonStyle.text}
      hoverBackgroundColor={buttonStyle.hoverBackground}
      hoverTextColor={buttonStyle.hovertext}
      {...rest}
    >
      {children}
    </ButtonS>
  );
};

export default Button;
