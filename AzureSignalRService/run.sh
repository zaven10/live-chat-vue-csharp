#!/bin/bash

echo "🔄 Stopping and removing existing container..."
docker rm -f signalr-chat-app 2>/dev/null || true

echo "🏗️  Building the image..."
docker build -t signalr-chat . --no-cache

echo "🚀 Starting the container..."
docker run -d -p 3209:80 --name signalr-chat-app signalr-chat

echo "📊 Container status:"
docker ps | grep signalr-chat-app

echo "⏳ Waiting for application to start..."
sleep 2

echo "📝 Showing logs (press Ctrl+C to exit)..."
docker logs -f signalr-chat-app