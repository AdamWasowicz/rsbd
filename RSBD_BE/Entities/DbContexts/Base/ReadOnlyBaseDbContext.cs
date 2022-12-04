using Microsoft.EntityFrameworkCore;
using System.Data.Entity.Infrastructure;

namespace RSBD_BE.Entities.DbContexts.Base
{
    public class ReadOnlyBaseDbContext : BaseDbContext
    {
        public ReadOnlyBaseDbContext(DbContextOptions options) : base(options)
        {

        }

        public override int SaveChanges()
        {
            throw new InvalidOperationException("This context is read-only.");
        }

        Task SaveChangesAsync()
        {
            return Task.CompletedTask;
        }
    }
}
