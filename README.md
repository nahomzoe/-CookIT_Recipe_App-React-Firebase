# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

npm install react-router-dom@6
npm install firebase
This is simple recipe app. Built with React and Firebase(Firestore) is used for database solution.

CookIT_Recipe_App-React-Firebase

'''''''''''''''''''''''''''''''''''''''''''''''''''''''

import React from "react";

const Footer = () => {
return (
<footer>
<div className="content">
<div className="left box">
<div className="upper">
<div className="topic">
<h5>Contact us</h5>{" "}
</div>
<div className="phone">
<a href="#">
<i className="fas fa-phone-volume"></i>+358 0444 4444
</a>
</div>
<div className="email">
<a href="#">
<i className="fas fa-envelope"></i>nahom130g@gmail.com
</a>
</div>
</div>
<div className="lower"></div>
<div className="middle box"></div>
</div>
<div className="middle box">
<div className="media-icons">
<a href="#">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#">
<i className="fab fa-instagram"></i>
</a>
<a href="#">
<i className="fab fa-twitter"></i>
</a>
<a href="#">
<i className="fab fa-youtube"></i>
</a>
<a href="#">
<i className="fab fa-linkedin-in"></i>
</a>
</div>
</div>
<div className="right box">
<div className="topic">
{" "}
<h5>Subscribe us</h5>
</div>
<form action="#">
<input type="text" placeholder="Enter email address" />
<input type="submit" name="email" value="Send" />
</form>
</div>
</div>
<div className="bottom">
<p>
Copyright © 2022 <a href="https://github.com/nahomzoe">nahom</a> All
rights reserved
</p>
</div>
</footer>
);
};

export default Footer;
