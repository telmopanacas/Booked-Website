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
