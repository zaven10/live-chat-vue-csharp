# Real-time Messenger Service

A lightweight real-time messaging service built with SignalR and ASP.NET Core, providing both WebSocket and REST API capabilities.

## Features

- Real-time message broadcasting using SignalR
- REST API endpoints for message sending
- Swagger API documentation
- Docker support
- Health monitoring endpoint
- Automated endpoint testing

## Tech Stack

- ASP.NET Core 9.0
- SignalR
- Docker
- Swagger/OpenAPI

## Prerequisites

- Docker
- .NET SDK 9.0 (for development)

## Quick Start

1. Clone the repository
```bash
# Clone the repository
git clone https://github.com/nicksuomi/AzureSignalRService.git
```

2. Run with Docker:
```bash
# Run the service
./run.sh
```

3. Access the application:
   - Messenger UI: http://localhost:3209/messenger
   - Swagger API: http://localhost:3209/swagger
   - Health Check: http://localhost:3209/api/messenger/health

## Development Setup

1. Clone the repository
2. Navigate to the src directory:
```bash
cd src
dotnet restore
dotnet run
```

## Testing

Run the automated endpoint tests:
```bash
./test.sh
```

This will verify:
- Container status
- All endpoint responses
- Redirect behaviors
- WebSocket endpoint
- Health check status


## API Endpoints

- `GET /` - Redirects to messenger interface
- `GET /messenger` - Messenger interface
- `GET /swagger` - API documentation
- `GET /api/messenger/health` - Health check
- `WS /messenger/hub` - SignalR WebSocket endpoint
- `POST /api/messenger/send` - Send message endpoint

## Configuration

The service runs on port 3209 by default. To change the port:
1. Modify the `run.sh` script
2. Update the Docker port mapping
