using Microsoft.EntityFrameworkCore;
using RSBD_BE.Entities.DbContexts.Base;

namespace RSBD_BE.Entities.DbContexts.EU
{
    public class EU_ReadOnlyDbContext : ReadOnlyBaseDbContext
    {
        public EU_ReadOnlyDbContext(DbContextOptions<EU_ReadOnlyDbContext> options) : base(options)
        {
        }
    }
}
