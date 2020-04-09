import React from "react";
import Members from "react-github-org-members";

// Organization name
const org_name = "LoRaFlex";

// GitHub token
const github_token = process.env.REACT_APP_GITHUB_TOKEN;

const App = () => {
  return <Members org={org_name} token={github_token} />;
};

export default App;
