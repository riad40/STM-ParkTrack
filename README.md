# App Context

STM ParkTrack is a React app for managing vehicle entries and exits at a parking garage. It uses a custom backend API built with Express.js, which you can find [here](https://github.com/riad40/stm-parktrack-api).

## App Requirements

-   **User**

    -   Perform registration and login actions.
    -   View the current state of the parking lot.
    -   View its own vehicle's logs (entries and exits).

-   **Super Admin**
    -   Perform the login action.
    -   View the current state of the parking lot.
    -   View all the logs of the garage.
    -   Perform add, edit, delete actions on the garage logs.
    -   Filter the logs by the license plate.

## App Realisation

The app is based on two main resources

-   `User`: Represents a user account in the system. Fields include `_id`, `username`, `email`, `password`, and `roles`.
-   `Log`: Represents a vehicle entry or exit. Fields include `_id`, `licensePlate`, `timeIn`, `timeOut`, and `user`.

### Technologies Used

-   **React.js**: For creating reusable UI components and managing the state of the app efficiently.
-   **TypeScript**: For better type control.

### Folder Structure

The `src` folder contains all of the app's logic:

-   `@types`: Contains custom types, such as API response types.
-   `components`: Contains all of the partials and components used in the app.
-   `configs`: Contains the API configs.
-   `contexts`: Contains the global state management configs.
-   `helpers`: Contains helper functions, such as input validators.
-   `hooks`: Contains all of the custom hooks created for the app.
-   `pages`: Contains the views/UI of the app.
-   `services`: Contains all requests for different API endpoints.

## Getting Started

Before running the app, you'll need to have Node.js and MongoDB installed on your machine. You'll also need to clone the repository and run the backend API server, The full guide is [here](https://github.com/riad40/stm-parktrack-api#readme). you'll also need to create a `.env` file in the root directory and paste in this code below.

```bash
REACT_APP_API_URL= // probably something like that: http://localhost:5000/api
```

1. Clone the repo

```bash
git clone https://github.com/riad40/STM-ParkTrack.git
```

2. Navigate to the repository

```bash
cd STM-ParkTrack
```

3. Install NPM packages

```bash
npm install
```

4. Run the app

```bash
npm start
```

## Issues && Points of Improvments

-   The route protection is handled only by the auth state, so every time the app is refreshed, the state gets back to its initial value, which will redirect the user to the home page.
-   The auth system needs some security improvements, such as adding the refresh token functionality.
-   Some markup and styling improvements are needed.
