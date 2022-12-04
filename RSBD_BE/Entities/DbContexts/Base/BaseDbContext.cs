using Microsoft.EntityFrameworkCore;

namespace RSBD_BE.Entities.DbContexts.Base
{
    public class BaseDbContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }


        public BaseDbContext(DbContextOptions options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Post
            modelBuilder.Entity<Post>()
                .Property(p => p.Email)
                    .IsRequired();
            modelBuilder.Entity<Post>()
                .Property(p => p.TextContent)
                    .IsRequired();
        }
    }
}
