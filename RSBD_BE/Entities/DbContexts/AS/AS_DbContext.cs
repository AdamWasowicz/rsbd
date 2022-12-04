using Microsoft.EntityFrameworkCore;
using RSBD_BE.Entities.DbContexts.Base;

namespace RSBD_BE.Entities.DbContexts.AS
{
    public class AS_DbContext : BaseDbContext
    {
        public AS_DbContext(DbContextOptions<AS_DbContext> options) : base(options)
        {
        }
    }
}
