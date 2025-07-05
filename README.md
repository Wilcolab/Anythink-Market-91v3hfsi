# Node.js Task List Server

This project provides a Node.js server for managing a task list, migrated from the original Python FastAPI implementation. The Node.js server offers the same API routes and functionality, with improvements in performance and maintainability.

## Prerequisites

Before running the Node.js server, ensure you have the following installed:

- [Docker](https://www.docker.com/) (includes Docker Compose in recent versions)
- (Optional) [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) if you want to run the server locally outside Docker

> **Tip:** If any technical terms are unclear, feel free to ask for clarification or suggestions on making these instructions more user-friendly.

## Project Structure

The main files and directories for the Node.js server are:

- `node-server/src/index.js`: Main entry point implementing the task list API routes.
- `node-server/package.json`: Lists dependencies and scripts.
- `node-server/Dockerfile`: Builds the Docker image for the Node.js server.
- `node-server/.env`: Stores environment variables for configuration.
- `docker-compose.yml`: Defines and runs multi-container Docker applications.

## How to Start the Node.js Server

To start the Node.js server using Docker Compose:

1. Open a terminal in the project root directory.
2. Run the following command to build and start the containers:

  ```shell
  docker compose up
  ```

  This command builds the Docker image for the Node.js server and starts the containers defined in `docker-compose.yml`.

3. Once started, the server will be accessible at [http://localhost:8000](http://localhost:8000).

## Key API Routes

The Node.js server provides the following API routes (identical to the previous Python server):

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details in JSON format.
- `GET /tasks`: Retrieves the current list of tasks.

These endpoints ensure backward compatibility with any existing clients or integrations.

For more details on the Node.js implementation, see the `node-server/README.md`.

> **Feedback:** If you have suggestions for improving these instructions or need clarification on any part, please let us know!
