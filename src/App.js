import * as React from "react";
import { Button, Menu, MenuItem, Divider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <>
      <Menu menuAlign="start">
        <MenuItem onClick={() => alert("Download")}>Download</MenuItem>
        <MenuItem onClick={() => alert("Create a Copy")}>
          Create a Copy
        </MenuItem>
        <MenuItem onClick={() => alert("Mark as Draft")}>
          Mark as Draft
        </MenuItem>
        <Divider />
        <MenuItem isDisabled onClick={() => alert("Delete")}>
          Delete
        </MenuItem>
        <MenuItem onClick={() => alert("Attend a workshop")}>
          Attend a workshop
        </MenuItem>
      </Menu>
      <Button variation="primary">Hello world</Button>{" "}
    </>
  );
}

export default App;
