using Microsoft.EntityFrameworkCore;
using RSBD_BE.Entities.DbContexts.Base;

namespace RSBD_BE.Entities.DbContexts.US
{
    public class US_ReadOnlyDbContext : ReadOnlyBaseDbContext
    {
        public US_ReadOnlyDbContext(DbContextOptions<US_ReadOnlyDbContext> options) : base(options)
        {
        }
    }
}
