Download the zip file from the repository.
Unpack the file.
Move the folder to D:\ReactProjects,
run "npm install" in the terminal to install all the packages.
run "npm start" to start the program.

This is a front-end appplication.

After the application has begun it will move to the Home page.
Click on the Add Task on the Header it will move the page to the AddTask. It contains the form to fill all the required details. You can only add the task only after filling all the filds. I have also included the form validation to ensure it. After clicking on add if the task is successfully added it will redirect to the home page.

If you click on the View Task on the Header it will move the page to the ViewTasks. It will display all the tasks you have added or a message to add the task to view them. If there are tasks it will display them as cards. The card contains all the details of the task and two buttons to delete and edit the selected task. Clicking on the delete will delete the task you want to delete. Clicking on the edit it will navigate to the EditTask.

Edit page consists of a form to alter the data of the task you selected to edit. It will automatically prefilled with the data with which tou have seleted the task to edit. This form also have form validation like the add task. Same validations have applied to this form so same instructions as ass task.

If you enter a invalid url in the browser it will navigate to the NotFound page.

The technologies used in this project are HTML, CSS, JavaScrypt, React.Js

The main purpose of this project is to understand form validations, state management using react hooks, page navigation, media queries, flex box, local storage and random id creation using uuid.

I have used react hooks for state management. I used React Router for navigating within the application. 

I have used local storage as the storage mechanism to store the data.

To ensure the responsive design, I used media queries and flexbox for layouting.

I have planned to develop a backend using node.Js and Express.Js to replace the local storage. This will also allow me to have more control over the data.

The git repository is:  

I have used gh-pages to deploy the application
The deployed link is:

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
