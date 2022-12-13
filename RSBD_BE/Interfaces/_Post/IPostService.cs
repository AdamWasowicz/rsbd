using RSBD_BE.Entities;
using RSBD_BE.Models;

namespace RSBD_BE.Interfaces
{
    public interface IPostService 
    {
        int InsertData(CreatePostDTO dto);
        bool UpdateData(UpdatePostDTO dto);
        bool DeleteData(DeletePostDTO dto);

        List<Post> GetAllData(int regionId);
        Post GetDataById(int id, int regionId);

        bool IsServerPrimaryUp(int regionId);
        bool IsServerSecondaryUp(int regionId);
    }
}
