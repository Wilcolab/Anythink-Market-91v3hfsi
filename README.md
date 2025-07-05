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
# Node.js Server and Migration

We have introduced a new Node.js server alongside the Python FastAPI server. The Node.js server provides the same task management API routes and is implemented using Express.

## Migration Details

- The Node.js server code is located in `node-server/src/index.js`.
- Dependencies for the Node.js server are listed in `node-server/package.json`.
- A separate `node-server/Dockerfile` is provided for building the Node.js server image.
- The `docker-compose.yml` file has been updated to include both the Python and Node.js servers as services.
- Both servers expose the same API endpoints (`/tasks`) for adding and retrieving tasks.

### Running the Node.js Server

To run the Node.js server with Docker:

```shell
docker compose up
```

This will start both the Python and Node.js servers. You can access the Node.js server at port `3000`.

### Migration Steps

1. Update your client applications to point to the Node.js server endpoint (`http://localhost:3000/tasks`).
2. Verify that the API contract remains consistent between both servers.
3. Once migration is complete and stable, you may deprecate the Python FastAPI server if desired.