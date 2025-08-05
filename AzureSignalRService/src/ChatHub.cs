using Microsoft.AspNetCore.SignalR;

namespace AzureSignalRService
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            var msg = new
            {
                User = user,
                Message = message,
                Timestamp = DateTime.UtcNow.ToString("o") // ISO 8601 format
            };

            await Clients.All.SendAsync("ReceiveMessage", msg.User, msg.Message, msg.Timestamp);
        }
    }
}