using RSBD_BE.Entities.DbContexts.US;
using RSBD_BE.Interfaces;

namespace RSBD_BE.Services
{
    public class US_PostService : Base_PostService, IUS_PostService
    {
        public US_PostService(US_DbContext writeContext, US_ReadOnlyDbContext readContext) : base(writeContext, readContext, "US")
        {

        }
    }
}
