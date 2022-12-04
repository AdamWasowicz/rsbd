using Microsoft.EntityFrameworkCore;
using RSBD_BE.Entities.DbContexts.Base;

namespace RSBD_BE.Entities.DbContexts.AS
{
    public class AS_ReadOnlyDbContext : ReadOnlyBaseDbContext
    {
        public AS_ReadOnlyDbContext(DbContextOptions<AS_ReadOnlyDbContext> options) : base(options)
        {
        }
    }
}
