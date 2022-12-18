using RSBD_BE.Entities;
using RSBD_BE.Models;

namespace RSBD_BE.Interfaces
{
    public interface IPostService 
    {
        int InsertData(CreatePostDTO dto);
        int InsertExampleData(string regionId);

        bool UpdateData(UpdatePostDTO dto);
        bool DeleteData(DeletePostDTO dto);

        List<Post> GetRegionAllData(int regionId);
        Post GetDataById(int id, int regionId);
        AllDataDividedByLocationDTO GetAllRegionsBothServersAllData();

        bool IsServerPrimaryUp(int regionId);
        bool IsServerSecondaryUp(int regionId);
    }
}
