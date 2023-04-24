import React from "react";
import logo from "./content/logo_1.png";
import classes from "./hello.module.scss";
export const HelloComponent: React.FC = () => {
  return (
    <>
    <h2 className={classes.hello}>Hello World</h2>;
    <img src={logo} alt="logo"></img>
    </>
  ); 
  
};