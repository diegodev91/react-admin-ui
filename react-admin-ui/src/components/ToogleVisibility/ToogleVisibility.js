import React from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./ToogleVisibility.css";

export default function ToogleVisibility() {
  return (
    <div>
      <Visibility></Visibility>
      <VisibilityOff></VisibilityOff>
    </div>
  );
}
