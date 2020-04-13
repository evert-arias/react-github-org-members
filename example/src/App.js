import React from "react";
import Members from "react-github-org-members";

// Organization name
const org_name = "LoRaFlex";

// GitHub token
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const App = () => {
  return <Members org={org_name} token={GITHUB_TOKEN} />;
};

export default App;
