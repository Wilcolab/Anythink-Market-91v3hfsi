# JavaScript Express Server

A simple Express server with no endpoints, ready for development.

## Features

- Express.js server listening on port 8001
- Nodemon for automatic server restart during development
- Docker support for containerized deployment
- Basic middleware setup (JSON and URL-encoded parsing)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

1. Navigate to the js-server directory:
   ```bash
   cd js-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server

#### Development Mode (with nodemon)
```bash
npm start
# or
yarn start
```

#### Production Mode
```bash
npm run prod
```

The server will start on `http://localhost:8001`

### Docker

#### Build the Docker image
```bash
docker build -t js-express-server .
```

#### Run the container
```bash
docker run -p 8001:8001 js-express-server
```

## Adding Routes

The server is ready for you to add your own routes. Simply add them to `server.js`:

```javascript
app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello World!' });
});
```
# Node.js Server and Migration details

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