This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### What is this Project

Well, this is a simple, yet professional with a modular and advanced structure to get you then <br />
fundamentals structure of a frontend web-app using react.

Its offering an easily scalable structure.

So all you need is to clone and starting imlementing your components and pages without <br />
worrying about the basics.

### What does it provide

## Authentication

Already setup the authentication/signin component with the corresponding redux action, actionType <br />
and reducer. Its currently made to work with a rest API.

## Setup Redux

Redux is already setup and ready to add new reducers with actions and actionTypes very easily with <br />
so no need to worry about all that boring hustle to set it up.

## Setup Testing

Testing is also prepared and even couple of testing on components, reducers, action and actionTypes <br />
is written so whenever you have a unit test, simple add your file in the appropriate <br />
`__test__` directory and save your time.

## Multiple Working Routes

For now the routes are not yet protected, but once the authentication is setup working, you can <br />
use the example in the `Route.js` file, so have an idea of protecting routes.
**Example** To goto any routes, simply start the server and
~ `/` to goto **home** route
~ `/about` to goto **about** route
~ `/signin` to goto **sigin** route

### What are the available components

`Auth`
`Loader`
`About`
`Header`
`Home`
`PageNotFound`

## What is the Loader

`Loader` is a just a simple animation component to show whenever there is an event or task thats<br />
not completing in minmal time.
**Example**
Whenever the user is loggin, or fetching data from a certain database.
**Application**
~ Import the Loader component from components/Loader/Loader
~ Then simpley call `<Loader />`

## What are About & Home

This are 2 components that are for now basically serving the same functionalitity, but can be editted<br />
to show the content you want by replacing the code as needed.
**Application**
~ They are already implemented so, all you need is to customize them to your needs or remove them.

## What is the Header

This is the navigation that is seen on all pages execpt `SignIn` & `PageNotFound` and provides links for
routing to different pages.
**Application**
~ Its already implemented but inorder to add, edit or remove links, open up the `Header` file and customize<br />
in the `render()` method.

## What is PageNotFound

This is a page that is shown whenever the user navigates to page that does not exist.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
