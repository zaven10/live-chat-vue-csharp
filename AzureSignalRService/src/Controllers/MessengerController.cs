using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using AzureSignalRService.Models;

namespace AzureSignalRService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessengerController : ControllerBase
    {
        private readonly IHubContext<ChatHub> _hubContext;

        public MessengerController(IHubContext<ChatHub> hubContext)
        {
            _hubContext = hubContext;
        }

        [HttpPost("send")]
        public async Task<IActionResult> SendMessage([FromBody] Message message)
        {
            if (string.IsNullOrEmpty(message.User) || string.IsNullOrEmpty(message.Text))
                return BadRequest("User and message text are required");


            await _hubContext.Clients.All.SendAsync("ReceiveMessage", message);
            return Ok(message);
        }

        [HttpGet("health")]
        public IActionResult Health()
        {
            return Ok(new { status = "healthy", timestamp = DateTime.UtcNow });
        }
    }
}