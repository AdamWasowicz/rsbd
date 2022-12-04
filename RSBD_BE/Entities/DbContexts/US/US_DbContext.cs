using Microsoft.EntityFrameworkCore;
using RSBD_BE.Entities.DbContexts.Base;

namespace RSBD_BE.Entities.DbContexts.US
{
    public class US_DbContext : BaseDbContext
    {
        public US_DbContext(DbContextOptions<US_DbContext> options) : base(options)
        {
        }
    }
}
