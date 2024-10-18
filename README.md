# Friends List App 👫✨

This is a simple **React app** that displays a list of people with their profession and image. You can mark people as your **friends** by clicking the "Add Friends" button, which changes the button text to "Friends" when clicked. 🎉

## Features 🔥

- Displays a **list of profiles** (name, profession, and image) 📜
- Ability to **add people as friends** by clicking the button 🖱️
- Button dynamically updates from "Add Friends" to "Friends" when a profile is marked as a friend 🔄

## Components 🛠️

### `App` Component

- Manages the state of the friends list.
- Maps through the data and renders a `Card` component for each person.
- Handles the logic for updating the "friend" status of each person.

### `Card` Component

- Displays a person's name, profession, and image.
- Contains a button to add the person as a friend.
- Updates the button label based on the person's current friend status.

## Usage 🚀

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/friends-list-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd friends-list-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open the app in your browser at `http://localhost:3000`.

## Technologies Used 💻

- **React
