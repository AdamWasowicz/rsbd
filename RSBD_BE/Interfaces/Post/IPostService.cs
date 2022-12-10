using RSBD_BE.Entities;
using RSBD_BE.Models;

namespace RSBD_BE.Interfaces
{
    public interface IPostService 
    {
        int InsertData(CreatePostDTO dto, int regionId);
        bool UpdateData(UpdatePostDTO dto, int regionId);
        bool DeleteData(DeletePostDTO dto, int regionId);

        List<Post> GetAllData(int regionId);
        Post GetDataById(int id, int regionId);

        bool IsServerPrimaryUp(int regionId);
        bool IsServerSecondaryUp(int regionId);

    }
}
