# MUI V5 Refresher
This project is an example of how to customize various components when using Material UI version 5. 
There are four major deep dives in a sense that go over the following:
- Input form
- Cards
- Table
- Data Grid

___
## Up and running with this repo
There are two ways to actually start this project which also has comments in the code for later reference. I love to keep running notes on things that I work on that can be referenced at a later time. 
With that in mind you can either:
- (1) clone this to a location on your local machine and install all of the needed dependencies for the project.
- (2) Download the zipped file and install all of the needed dependecies then run the project

___
## Requirements
We will need the following before installing the needed dependencies:
- [ ] [React 18](https://react.dev/learn)
- [ ] [Node JS](https://nodejs.org/en/download)
- [ ] [NPM Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [ ] [Material UI](https://mui.com/material-ui/material-icons/)
- [ ] [TypeScript](https://www.typescriptlang.org/)


- To make the process faster as the information can be found on documentation we can go ahead a create a new project in a directory of your choice
- 
- To accomplish this we can scaffold a project rather quickly and we can use various options such as:
- [Create React App](https://create-react-app.dev/) command is `npx create-react-app app-name`
- [Vite](https://vitejs.dev/guide/) command is `npm create vite@latest`
- Open up the newly ran project in the IDE of your choice
- Look for the `package.json` file and replace the `dependencies object` with the code below
- Take the `package.json` file from this repository and then install with either `npm` or `yarn`

```
"dependencies": {
    "@date-io/dayjs": "^2.15.0",
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@mui/icons-material": "^5.10.2",
    "@mui/material": "^5.10.2",
    "@mui/x-data-grid": "^5.15.3",
    "@mui/x-date-pickers": "5.0.0-beta.5",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "dayjs": "^1.11.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.7.4",
    "web-vitals": "^2.1.4"
  },
```

- Once the project is up and running your should see the following project in the browser


<img width="1054" alt="mui-v5-default-screen" src="https://github.com/redeyedev-208/ga-mui-styling-demo/assets/60634649/4e430d52-0527-42d6-baec-57a1d5e34c8a">


___

## Thanks for stopping by
Hopefully this makes working with Material UI a bit more enjoyable. It is all about the nesting and investigation from the console to try and target the appropriate classes. 
Once you've become comfortable with MUI and differences between MUI V4 and MUI V5 you will be on your way. You got this, stay positive and let your creative juices flow. 
Cheers ☕

Gil

