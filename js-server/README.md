# Node.js Express Server Migration

This project now uses a new Node.js Express server, migrated from the previous implementation. The new setup is designed for improved maintainability and modern development workflows.

## Migration Details

- **Migrated to Node.js v18+** for better performance and long-term support.
- **Updated dependencies** to the latest stable versions.
- **Refactored server structure** for clarity and scalability.
- **Improved Docker support** for consistent containerized deployments.
- **Enhanced development experience** with ESLint, nodemon, and GitHub Actions integration.

## Features

- Express.js server listening on port 8001
- Nodemon for automatic server restart during development
- Docker support for containerized deployment
- Basic middleware setup (JSON and URL-encoded parsing)
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
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

## Additional Notes

- ESLint is pre-configured for code linting.
- The dev container includes Docker CLI, GitHub CLI, Node.js, npm, and an SSH server for enhanced development workflows.
- See `.devcontainer` documentation for more details on the development environment.
