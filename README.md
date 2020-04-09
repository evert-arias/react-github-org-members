# react-github-org-members

> Small and simple React component to display GitHub organization members.

[![NPM](https://img.shields.io/npm/v/react-contributors.svg)](https://github.com/evert-arias/react-github-org-members) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

Live demo: https://evert-arias.github.io/react-github-org-members

## Install

```bash
npm install react-github-org-members
```

## Usage

```jsx
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
```

You must pass the following two props to the component:

**org**: The organization name

**token**: GitHub token to authenticate

## License

MIT © [Evert Arias](https://github.com/evert-arias)
