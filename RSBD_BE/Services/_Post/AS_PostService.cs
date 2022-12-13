using RSBD_BE.Entities.DbContexts.AS;
using RSBD_BE.Interfaces;

namespace RSBD_BE.Services
{
    public class AS_PostService : Base_PostService, IAS_PostService
    {
        public AS_PostService(AS_DbContext writeContext, AS_ReadOnlyDbContext readContext) : base(writeContext, readContext, "AS")
        {
            
        }
    }
}
