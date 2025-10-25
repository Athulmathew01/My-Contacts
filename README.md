# 📞 My-Contacts API

A simple REST API built with Express.js to manage a personal contact list. This project was created as a learning exercise to understand the fundamentals of building backend applications with Node.js and Express.

![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 🚀 Features

This API provides full **CRUD** (Create, Read, Update, Delete) functionality for contacts.

* **Create** a new contact.
* **Read** (get) a list of all contacts.
* **Read** (get) a single contact by its ID.
* **Update** an existing contact.
* **Delete** a contact.

---

## 🛠️ Tech Stack

* **[Node.js](https://nodejs.org/)** - The runtime environment.
* **[Express.js](https://expressjs.com/)** - The web framework for building the API.
* **[Postman](https://www.postman.com/) / [Thunder Client]** - Used for testing the API endpoints.
* *(Add any others you used, e.g., "Nodemon" for development, or "MongoDB" if you added a database)*

---

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/en/download/) (which includes npm) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Athulmathew01/My-Contacts.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd My-Contacts
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **(Optional) Create an environment file:**
    If you are using environment variables (like a `PORT`), create a `.env` file in the root directory.
    ```
    PORT=5000
    ```

### Running the Application

Run the server with this command:

```sh
npm start
```
For local development
```sh
npm i -D nodemon
npm run dev