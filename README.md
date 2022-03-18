# Welcome to NYT Bestsellers!

This application was built using the [NYT Developers API](https://developer.nytimes.com/) in order to showcase all of the New York Times bestsellers for the current week, give the user some amplifying information on the book, as well as hook them up with their favorite bookstore so they can look more up on the book, or buy it if they're feeling the thirst for knowledge!

## Running the application

### Prerequisites:

1. [Node](https://www.npmjs.com/get-npm)

### Steps:

1. Fork this repository by clicking on the "Fork" button on the top-right of this page.

1. Open your CLI of choice and navigate to the directory (for instructions on how to navigate through your terminal see [here](https://ccrma.stanford.edu/guides/planetccrma/terminal.html)) you want your new directory to be located, and enter the following command: `git clone https://github.com/<YOUR_GITHUB_USERNAME_HERE>/nyt-bestsellers`

1. Get into your new local copy of the nyt-bestsellers directory: `cd nyt-bestsellers`

1. Add an upstream remote that points to the main repo: `git remote add upstream https://github.com/<YOUR_GITHUB_USERNAME_HERE>/nyt-bestsellers`

1. Pull in the latest version of master from upstream (ie: the main repo): `git pull upstream main`

1. Install dependencies: `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

If you would like to contribute to this project, email Cody Price at ctprice11@gmail.com (For suggested issues see "Next Steps" at the bottom of this README)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Next Steps

- !IMPORTANT Refine Styling (as of right now the styling is very rough, Prioritize before deployment!)
- Implement Store/Redux/Thunks
- Make App a stateless functional component (After Store/Redux/Thunks)
- Add ability to select different weeks
- Implement hooks as an alternative to state (Only perform if preferred and "Implement Store/Redux/Thunks" has not been implemented)
- Refine types (Remove all instances of "any" type as these drastically reduce the advantages of using Typescript)
- Implement a copy service to assist with nationalization
- Increase accessability
- Implement better error messaging to the user
- Implement SCSS and animations
- Unit test (Start with App.tsx, then api, helpers, and lastly child components)
- E2e tested (I would suggest cucumber but open to suggestions)
- Deploy the code to a live environment (Refine styling first!!!)

#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
