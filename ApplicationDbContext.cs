using Microsoft.EntityFrameworkCore;

namespace EagleFCWebsite.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Player> Players { get; set; }
        // Add other entities like Matches, News, etc.
    }
}