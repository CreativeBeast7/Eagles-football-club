using System.Linq;
using Microsoft.AspNetCore.Mvc;
using EagleFCWebsite.Data;
using EagleFCWebsite.Models;

namespace EagleFCWebsite.Controllers
{
    public class PlayersController : Controller
    {
        private readonly ApplicationDbContext _context;

        public PlayersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: /Players/
        public IActionResult Index()
        {
            var players = _context.Players.ToList();
            return View(players);
        }

        // GET: /Players/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: /Players/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Player player)
        {
            if (ModelState.IsValid)
            {
                _context.Players.Add(player);
                _context.SaveChanges();
                return RedirectToAction(nameof(Index));
            }
            return View(player);
        }
    }
}
