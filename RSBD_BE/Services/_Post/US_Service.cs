using RSBD_BE.Entities.DbContexts.US;
using RSBD_BE.Interfaces;

namespace RSBD_BE.Services
{
    public class US_Service : Db_Service, IUS_PostService
    {
        public US_Service(US_DbContext writeContext, US_ReadOnlyDbContext readContext) : base(writeContext, readContext, "US")
        {

        }
    }
}
