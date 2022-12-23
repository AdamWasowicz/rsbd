using RSBD_BE.Entities;
using RSBD_BE.Models;

namespace RSBD_BE.Interfaces
{
    public interface IPostService 
    {
        Post InsertData(CreatePostDTO dto);
        Post InsertExampleData(string regionId);

        Post UpdateData(UpdatePostDTO dto);
        bool DeleteData(DeletePostDTO dto);

        List<Post> GetRegionAllData(int regionId);
        Post GetDataById(int id, int regionId);
        AllDataDividedByLocationDTO GetAllRegionsBothServersAllData();
        List<Post> GetAllData();

        bool IsServerPrimaryUp(int regionId);
        bool IsServerSecondaryUp(int regionId);
    }
}
