#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color
BLUE='\033[0;34m'

echo -e "${BLUE}🔍 Testing SignalR Messenger Service Endpoints...${NC}\n"

# Function to test endpoint
test_endpoint() {
    local endpoint=$1
    local expected_status=$2
    local description=$3
    echo -e "${BLUE}Testing ${endpoint}...${NC}"
    
    # Send request and capture response code
    response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3209${endpoint})
    
    if [ "$response" = "$expected_status" ]; then
        echo -e "${GREEN}✅ Success! ${endpoint} returned ${response} ${description}${NC}"
    else
        echo -e "${RED}❌ Failed! ${endpoint} returned ${response}, expected ${expected_status}${NC}"
    fi
    echo ""
}

# Test container status
echo -e "${BLUE}Checking container status...${NC}"
if docker ps | grep -q signalr-chat-app; then
    echo -e "${GREEN}✅ Container is running${NC}"
else
    echo -e "${RED}❌ Container is not running${NC}"
    exit 1
fi
echo ""

# Test endpoints with correct expected status codes
test_endpoint "/" 302 "(redirect to /messenger/index.html)"
test_endpoint "/messenger" 301 "(redirect to /messenger/)"
test_endpoint "/swagger" 301 "(redirect to /swagger/)"
test_endpoint "/api/messenger/health" 200 "(health check endpoint)"
test_endpoint "/messenger/hub" 400 "(WebSocket endpoint)"

# Show container logs
echo -e "${BLUE}📝 Recent container logs:${NC}"
docker logs --tail 10 signalr-chat-app

echo -e "\n${BLUE}🔍 Test complete!${NC}" 