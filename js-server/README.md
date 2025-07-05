# Node.js Express Server - Task Management API

This project features a Node.js Express server that has been migrated from a Python FastAPI implementation. The server provides a simple task management API with endpoints for managing a list of tasks.

## Migration Details

- **Migrated from Python FastAPI to Node.js Express** for JavaScript ecosystem consistency
- **Preserved all original endpoints** with equivalent functionality
- **Enhanced with proper error handling** and validation
- **Improved Docker support** for consistent containerized deployments
- **Added development workflow** with nodemon for automatic restarts

## Features

- Express.js server listening on port 8001
- Task management API with CRUD operations
- Pre-populated with sample time-travel themed tasks
- Nodemon for automatic server restart during development
- Docker support for containerized deployment
- Basic middleware setup (JSON and URL-encoded parsing)
- Input validation and error handling

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

## API Endpoints

The server provides the following endpoints:

### GET /
- **Description**: Welcome endpoint
- **Response**: "Hello World"
- **Example**: `curl http://localhost:8001/`

### GET /tasks
- **Description**: Retrieve all tasks
- **Response**: JSON object with tasks array
- **Example**: `curl http://localhost:8001/tasks`
- **Sample Response**:
  ```json
  {
    "tasks": [
      "Write a diary entry from the future",
      "Create a time machine from a cardboard box",
      "Plan a trip to the dinosaurs",
      "Draw a futuristic city",
      "List items to bring on a time-travel adventure"
    ]
  }
  ```

### POST /tasks
- **Description**: Add a new task
- **Request Body**: JSON with `text` field
- **Response**: Success message
- **Example**: 
  ```bash
  curl -X POST http://localhost:8001/tasks \
    -H "Content-Type: application/json" \
    -d '{"text": "Build a robot companion"}'
  ```
- **Sample Response**:
  ```json
  {
    "message": "Task added successfully"
  }
  ```
- **Error Response** (400 if text is missing):
  ```json
  {
    "error": "Task text is required"
  }
  ```

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

The server already includes a task management API, but you can easily add more routes to `server.js`:

```javascript
// Add a new endpoint
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'running',
    timestamp: new Date().toISOString(),
    tasksCount: tasks.length
  });
});

// Add a DELETE endpoint for tasks
app.delete('/tasks/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < tasks.length) {
    const removedTask = tasks.splice(index, 1)[0];
    res.json({ message: 'Task removed successfully', task: removedTask });
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});
```

## Testing the API

You can test the API using curl commands:

```bash
# Get all tasks
curl http://localhost:8001/tasks

# Add a new task
curl -X POST http://localhost:8001/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "Your new task here"}'

# Test the welcome endpoint
curl http://localhost:8001/
```

## Additional Notes

- The server includes pre-populated sample tasks with a time-travel theme
- Tasks are stored in memory and will reset when the server restarts
- For production use, consider implementing persistent storage (database)
- The server includes basic error handling and input validation
- The dev container includes Docker CLI, GitHub CLI, Node.js, npm, and an SSH server for enhanced development workflows
- Both individual server and Docker Compose configurations are available for deployment

## Docker Compose

The project includes a `docker-compose.yml` file that runs both the Node.js server (port 8001) and the original Python server (port 8000) simultaneously:

```bash
# Run both servers
docker-compose up

# Build and run both servers
docker-compose up --build
```
