# Real-Time Chat Application

In incognito tab currently sound of messaage is not coming.

## Note:

    user can upload there images and signup it is to make sure that currently I have old build this server depenedent, that means images which user upload is on the server only which he/she is using as it is not on the cloud hosting platformcurrently is it uplaoding using multer

    I upcoming days I will make it fix by using firebase.

    In this application use can chat with each other realtime.

## Overview

This Real-Time Chat Application allows users to communicate instantly over the web. This project uses technologies such as [insert technology stack here, e.g., Node.js, Socket.io, React] to provide a seamless and responsive user experience.

## Overview

This Real-Time Chat Application provides a platform for users to communicate in real time, share images, and more. The application currently supports image uploads and user authentication, facilitating interactive and engaging user experiences.

## Current Features

- **Real-time Chat**: Users can chat with each other in real time.
- **Image Upload**: Users can upload images to their chat sessions. Currently, these images are stored on the server where the application is hosted. This is implemented using Multer, a Node.js middleware for handling `multipart/form-data`, which is mainly used for uploading files.

## Data Handling

- **Server-Dependent Storage**: As of now, the uploaded images are stored on the same server that hosts the application. This means that the data is not stored on a cloud platform, and accessibility is limited to the server's storage capabilities and availability.

## Planned Upgrades

- **Cloud Integration**: In the upcoming days, there are plans to transition the storage of uploaded images to Firebase. This will allow for better scalability, reliability, and accessibility of the user data across different platforms and devices.

### Home.jsx

This is the main component of the application, typically serving as the landing page. It orchestrates other components and manages the primary routes, providing navigation to different parts of the application.

### Login.jsx

This component handles the user login functionality. It includes forms for users to enter their credentials and manages authentication processes by interacting with a backend server to verify user details.

### GenderCheckbox.jsx

A reusable component that provides a checkbox interface for selecting gender. It is commonly used in registration or profile setting forms to capture gender information from the user.

### SignUp.jsx

Despite the unusual labeling, this is indeed a JavaScript/JSX component responsible for the user registration process. It features forms for entering various user details, such as name, email, and password, and integrates components like `GenderCheckbox.jsx` for gender selection.

## Additional Context Components

### AuthContext.jsx

This component likely sets up a React context for authentication, providing a way to share authentication status and user information across various parts of the application without prop drilling.

### SocketContext.jsx

This component is expected to set up a React context for WebSocket connections, facilitating real-time communication features across the application by providing a shared socket connection instance.

## Custom Hooks Description

### useGetConversations

Fetches the list of conversations for a user. It handles loading states and displays errors using toasts.

### useGetMessages

Retrieves messages for a selected conversation. It ensures the conversation ID is valid and updates the message list in the global state.

### useListenMessages

Listens for new messages using a WebSocket connection. Upon receiving a new message, it plays a notification sound and updates the conversation's message list.

### useLogin

Handles the user login functionality. It validates input fields and performs an API call to authenticate the user, updating the global user state on success.

### useLogout

Manages the user logout process. It clears user data from local storage and updates the authentication state to reflect that the user has logged out.

### useSendMessage

Sends new messages in a conversation. It performs an API call to send messages and updates the message list upon successful transmission.

### useSignup

Handles new user registrations. It validates input data, prepares form data for submission, and updates the global user state upon successful registration.

## Installation and Usage

## Features

- Real-time messaging
- User authentication
- Group chat options
- Ability to send images and files
- Notifications for new messages

## Installation

To get this project running locally, follow these steps:

### Prerequisites

- [Insert prerequisite here, e.g., Node.js installed on your machine]
- [Another prerequisite]

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/HrithikRaj1999/Chat-Application.git
   ```
2. Install dependencies:
   ```bash
   cd Chat-Application
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:3000`.

## Usage

Describe how to use the application, including any special commands or features users should know about.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Mention any collaborators, third-party libraries, or tutorials followed here
