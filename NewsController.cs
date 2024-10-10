public class NewsController : Controller
{
    private readonly ApplicationDbContext _context;

    public NewsController(ApplicationDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
        var news = _context.News.OrderByDescending(n => n.PublishedDate).ToList();
        return View(news);
    }

    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult Create(News news)
    {
        if (ModelState.IsValid)
        {
            news.PublishedDate = DateTime.Now;
            _context.News.Add(news);
            _context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }
        return View(news);
    }
}
