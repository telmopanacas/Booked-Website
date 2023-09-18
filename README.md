# Booked-Website

# Description
This is the React based website for this project: [Booked](https://www.figma.com/community/file/1266829619368231584).


The corresponding RESTfull API can be found [here](https://github.com/telmopanacas/Booked-API).


# Change Log
Guide for writing change logs.

`Added` for new features.

`Changed` for changes in existing functionality.

`Deprecated` for soon-to-be removed features.

`Removed` for now removed features.

`Fixed`  for any bug fixes.

## 2023-09-18

### Added
- Added a new utility file `getCurrentUserEmail` that decodes the access_token in the axios configuration and returns the subject, the user email. It will be called in the `Create Review` page.


- Added a new service file `UserService` that will contain all the API calls related to the user.
    - Contains the function `getUserDetails` where it uses the user email to fetch the users id and username.


- Added a new hook `useUserDetails` that uses the new function `getUserDetails` and returns those values. It's used in the `Create Review` page.

### Changed
- Changed the background color of the username component in the `Create Review` form to grey to signalize its value cannot be changed. 


- Disabled the background color of the input field when its `disabled` in the username component of the `Create Review` form.


- Changed the padding of the `Landing Page` title to match the same of the `Navbar`.


- Changed the font-size of the `Navbar` title to match the one in the `Landing Page`.


- Changed the `Username` component so that its value is now defined through a props value.


- The fucntion `isAuthenticated` now also sets the `Bearer token` in the axios configuration.


- In the file `ReviewService` changed the functions `makePOSTReview` and `createReview` to now use the `userId` instead of an `author` filed.


- In the `Contact` page change the labels for the User name and Users email to be more cleaner.


- Changed the `Create Review` page to now use hook `useUserDetails`.

### Deprecated
- N/A.

### Removed
- N/A.

### Fixed
- N/A.

## 2023-09-13

### Added
- Added the `RequireAuth` component that will be used to protect the routes that require authentication, if the user is authenticated it redirects him to his desired route otherwise it redirects him to the signin page.

### Changed
- In the `AuthenticationService` file, changed the `authenticate` function to set the `access_token` in the response data to the `axios` configuration instead of returning the data and doing it in the `SignIn` component.


- In the `SignIn` component added the function handleRegister to handle the register form submit.


- In the `PageLayout` component, surrounded the routes that require authentication with the `RequireAuth` component.


- In the `SignIn` component added the `useLocation` hook to get the `from` location to redirect the user after he is authenticated or registered.
### Deprecated
- N/A.


### Removed
- N/A.


### Fixed
- N/A.


## 2023-09-12

### Added
- Added the file `AuthProvider` that will surround our application and provide the authentication context to all the components.


- Added the file `useAuth` that contains the hook `useAuth` that returns the authentication context.


- Added the file `useIsAuthenticated` which contains the hook that will verify is the user is authenticated by trying to refresh the `refresh_token` present in the cookies and returns a boolean value.


- Added the file `Root` that will be the root component of our application, makes verifies if the user is authenticated, updates the auth context and renders the application.


### Changed
- In the `Navbar` component, now a verification is made to check if the user is authenticated and if so, the `Sign In` is replaced by the `Sign Out` button.


- Also in the `Navbar` component, the `Sign Out` button now calls the `signout` function from the `AuthenticationService` and updates the authentication context.


- In the `AuthenticationService` file, added the function `isAuthenticated` that makes a call to the API endpoint `refresh-token` to verify if the user is authenticated by trying the generate a new `acess_token`.


- In the `AuthenticationService` file, changed the verification of the `response.status` code from `!= 200` to `!== 200`.
### Deprecated
- N/A.

### Removed
- Removed a console.log from the `useGetBookId` hook.

- Removed the `{withCredentials: true}` from the `axios` configuration in the `axios.js` file in the `POST` request of the interceptor.

### Fixed
- N/A.

## 2023-09-08

### Added
- Added the file `AuthenticationService` with the functions:
    - authenticate - Makes a POST request to the API to authenticate the user.
    
    - register - Makes a POST request to the API to register a new user.


- Added the file `axios` where these configurations are set:
    - The base URL for the API.
    
    - The `with credentials` option to allow the cookies to be sent from the API.
- Still in the file `axios` a interceptor was added to handle the `403 Forbidden` error and make a call to the API to refresh the access token.

- Added the hook `useAllBooks` in the file `useBook` that fetches all the books from the API. 

### Changed
- In both files `BookService` and `ReviewService` the `fetch` function was replaced by the `axios` function.


- In the file `Signin` implemented the `handleSignIn` function to handle the sign in form submit.


- The `Home` component now uses the authentication context to verify if the user is authenticated and if so, renders the `CreateReview` component. 


- The `SignIn` component now after the `authenticate` function is called, the authentication context is updated and the user is redirected to the home page.


- In the `index` file the `AuthProvider` was added to wrap the `Root` component instead of just rendering the `App` component.
### Deprecated
- N/A.

### Removed
- N/A.

### Fixed
- N/A.


## 2023-08-29

### Added
- Added the function `useGetBookId` the fetches the book data from the API with its title and author.

- Added the function `parseDate` that receives a date and hours string and returns a date object.
- Added the file `BookService.js` that contains functions who perform API calls related to books and contains the following functions:
    - `fetchBookId` - fetchs the book data from the API with its title and author.
    - `createBook` - makes a POST request to the API to create a new book.
- Added the function `makePOSTReview` to the `ReviewService.js` file that makes a POST request to the API to create a new review.
- Added the function `createReview` to the `ReviewService.js` file that contains all the logic to create a new review.
- Integrated the webservice `EmailJS` to send emails from the contact form.

### Changed
- Changed the component `FormTextArea` so now the `required` value is passed as a prop.

- In the `PostCard` component, removed the `.trim()` to the props as it was causing some problems with the API data.
- In the view `CreateReview`, changed the position of the post button to the side of the form to simplify the verification of the empty fields.

## 2023-08-23

### Added
- Added the Sign In and Register forms.

- Finished the Sign In page.
- Finished the 404 Page.

### Changed
- Changed the height of the navbar to 10vh to simplify the layout.

- Changed the form inputs border color.

### Deprecated
- N/A.

### Removed
- Removed the Register.js file, it's now a component to be used in the Sign In page.

### Fixed
- N/A.


## 2023-08-22

### Added
- Finished the Contact Us page.

### Changed
- N/A.

### Deprecated
- N/A.

### Removed
- N/A.

### Fixed
- N/A.


## 2023-08-21

### Added
- Stylized the create new review button in the home page.

- Added the reviews list component. ( For now are static reviews )
- Added the following util components:
    - getCurrentDate.js - Returns the current date in the format: `DD/MM/YYYY`.
    - getCurrentTime.js - Returns the current time in the format: `HH:MM PM/AM`.
### Changed
- N/A.

### Deprecated
- N/A.

### Removed
- N/A.

### Fixed
- N/A.


## 2023-08-18

### Added
- Added the input components for the create review page.

- Added the Review Card component.
- Finished the Create Review page.

### Changed
- Changed the website font to Roboto.

### Deprecated
- N/A.


### Removed
- N/A.

### Fixed
- N/A.


## 2023-08-15

### Added
- Added the Navbar component.
- Added the PageLayout component.
### Changed
- Changed the pages structure to externalize the Navbar component.
- Finalized the About page.

### Deprecated
- N/A.

### Removed
- N/A.

### Fixed
- N/A.


## 2023-08-11

### Added
- Completed the landing page, it now redirects the user to the home page.

### Changed
- N/A.

### Deprecated
- N/A.

### Removed
- N/A.

### Fixed
- N/A.


## 2023-08-10

### Added
- Added the base project structure.

- Added the base page components.
- Added the base routing.
    - `/` - Landing page.

    - `/home` - Home page.
    - `/create` - Create new review page.
    - `/about` - About page.
    - `/contact` - Contact page.
    - `/signin` - Sign in page.
    - `/register` - Register page.
    - `*` - 404 page.


### Changed
- N/A.


### Deprecated
- N/A.


### Removed
- N/A.


### Fixed
- N/A.

---
## Available Scripts

In the project directory, you can run:

### `npm run start`

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
