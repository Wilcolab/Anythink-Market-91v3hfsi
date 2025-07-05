# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

## Migration to Node.js Server

We have migrated from the original Python FastAPI server to a new Node.js server. The Node.js server provides the same functionality for managing a task list, while leveraging the Node.js ecosystem for improved performance and maintainability.

### Prerequisites

Before running the Node.js server, ensure you have the following prerequisites:

- [Docker](https://www.docker.com/) installed on your machine (Docker Compose is included with recent Docker versions).
- (Optional) [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed if you want to run the server locally outside Docker.

### Node.js Server Structure

- `node-server/src/index.js`: Main entry point for the Node.js server, implementing the task list API routes.
- `node-server/package.json`: Lists dependencies and scripts for the Node.js server.
- `node-server/Dockerfile`: Builds the Docker image for the Node.js server.
- `node-server/.env`: Environment variables for configuration.

### How to Start the Node.js Server

To start the Node.js server using Docker Compose:

1. Open a terminal in the project root directory.
2. Run the following command to build and start the containers:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the Node.js server and start the containers defined in the `docker-compose.yml` file.

3. Once started, the server will be accessible at [http://localhost:8000](http://localhost:8000).

### Key API Routes

The Node.js server implements the following API routes (identical to the previous Python server):

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details in JSON format.
- `GET /tasks`: Retrieves the current list of tasks.

These endpoints ensure backward compatibility with any existing clients or integrations.

For more details on the Node.js implementation, see the `node-server/README.md`.

If you have suggestions for making these instructions clearer or more user-friendly, or if you need clarification on any technical terms, please let us know!
