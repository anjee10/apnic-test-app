# React in WordPress and Docker container

This React project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and build was tested in WordPress latest version, running as Docker container.

## How to test?

### Spin up WordPress instance

Find `docker-compose.yml` on root directory of this project, and spin up wordpress instance.

Please check few things before you execute below command:
- Docker installed
- Ports mentioned in docker-compose should be available
  - Default port for WordPress is `8000`
- You will not need `phpmyadmin` here, but in case if you need to access it, it is set on port `8080`
- You will get access to WordPress files

```
docker-compose up -d
```

Once all containers are ready, you can access WordPress instance on your [localhost:8000](http://localhost:8000).

Follow all instructions there to setup WordPress.

### Get the test build

You can `build` this `React` project to get the build files. Alternatively, you can use compressed build copy committed here in root directory, `build.zip`.

To build the project and start in your local, simply follow below `Available Scripts` section.

### Set React build in WordPress

- Make `react` directory in root of WordPress
- Place all build contents to this `react` directory

### Make React page / post in WordPress

- Go to WordPress admin, [http://localhost:8000/wp-admin](http://localhost:8000/wp-admin)
- Create a new page or new post
- Select `Code Editor` from right side menu (or Ctrl + Shft + Alt + M)
- Add some title and Paste below code
```javascript
<noscript>
You need to enable JavaScript to view this page.
</noscript>
<div id="root"></div>
<script src="/react/static/js/main.fdbaff59.js"></script>
```
- Please check your build JavaScript file name above, it might be different if you have run the build and not using build from this repository.
- Change to `Visual Editor` and add any contents
- Preview / Publish this new post / page

### ToDos

- [] Unit test
- [] CSS is not set if you test in WordPress, but when you test in local, you can see something like ~[capture screen](https://github.com/anjee10/apnic-test-app/blob/master/resources/capture-react-app-localhost.png "this capture screen")
- [] Sortable React package is used here to drag and drop sorting, it drags but fails while you drop, it goes back.

## Available Scripts for local setup

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
