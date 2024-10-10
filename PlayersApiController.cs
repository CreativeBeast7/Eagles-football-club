using Microsoft.AspNetCore.Mvc;
using EagleFCWebsite.Data;
using EagleFCWebsite.Models;
using System.Linq;

namespace EagleFCWebsite.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayersApiController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PlayersApiController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Players
        [HttpGet]
        public IActionResult GetPlayers()
        {
            var players = _context.Players.ToList();
            return Ok(players);
        }

        // POST: api/Players
        [HttpPost]
        public IActionResult CreatePlayer([FromBody] Player player)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Players.Add(player);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetPlayers), new { id = player.Id }, player);
        }
    }
}
