import React from "react";
import { Button } from "@material-ui/core";
import Example from "./Example/Example";
import "./Options.css";

export default function Options(props) {
  return (
    <div>
      <Button color="primary">Add {`${props.numberOfUser}`} User</Button>
      <Example></Example>
    </div>
  );
}
