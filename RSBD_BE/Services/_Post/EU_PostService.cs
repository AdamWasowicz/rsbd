using RSBD_BE.Entities.DbContexts.EU;
using RSBD_BE.Interfaces;

namespace RSBD_BE.Services
{
    public class EU_PostService : Base_PostService, IEU_PostService
    {
        public EU_PostService(EU_DbContext writeContext, EU_ReadOnlyDbContext readContext) : base(writeContext, readContext, "EU")
        {

        }
    }
}
