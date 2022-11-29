import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LogginControl from "./loginControl.service";
import { Mailbox, messages } from "./mailbox.service";
import Page from "./preventingComponent.service";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LogginControl user={"Galih"} />
    <Mailbox unreadMessages={messages} />
    <Page />
  </React.StrictMode>
);
