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
