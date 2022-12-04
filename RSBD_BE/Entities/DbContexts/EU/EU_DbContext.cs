using Microsoft.EntityFrameworkCore;
using RSBD_BE.Entities.DbContexts.Base;

namespace RSBD_BE.Entities.DbContexts.EU
{
    public class EU_DbContext : BaseDbContext
    {
        public EU_DbContext(DbContextOptions<EU_DbContext> options) : base(options)
        {
        }
    }
}
