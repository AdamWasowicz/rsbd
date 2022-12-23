using RSBD_BE.Entities;
using RSBD_BE.Models;


namespace RSBD_BE.Interfaces
{
    public interface IBase_PostService
    {
        Post InsertData(CreatePostDTO dto);
        Post InsertExampleData();
        Post UpdateData(UpdatePostDTO dto);
        bool DeleteData(DeletePostDTO dto);

        List<Post> GetAllData();
        Tuple<List<Post>, List<Post>> GetDataFromBothServers();
        Post GetDataById(int id);

        bool IsServerPrimaryUp();
        bool IsServerSecondaryUp();
    }
}
