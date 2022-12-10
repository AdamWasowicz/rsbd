using RSBD_BE.Entities;
using RSBD_BE.Interfaces;
using RSBD_BE.Models;

namespace RSBD_BE.Services
{
    public class PostService : IPostService
    {
        private IRegionProvider _region;

        public PostService(IRegionProvider regionProvider)
        {
            _region = regionProvider;
        }

        public int InsertData(CreatePostDTO dto, int regionId)
        {
            return _region.provide(regionId).InsertData(dto);
        }

        public bool UpdateData(UpdatePostDTO dto, int regionId)
        {
            return _region.provide(regionId).UpdateData(dto);
        }

        public bool DeleteData(DeletePostDTO dto, int regionId)
        {
            return _region.provide(regionId).DeleteData(dto);
        }

        public List<Post> GetAllData(int regionId)
        {
            return _region.provide(regionId).GetAllData();
        }

        public Post GetDataById(int id, int regionId)
        {
            return _region.provide(regionId).GetDataById(id);
        }

        public bool IsServerPrimaryUp(int regionId)
        {
            return _region.provide(regionId).IsServerPrimaryUp();
        }
        public bool IsServerSecondaryUp(int regionId)
        {
            return _region.provide(regionId).IsServerSecondaryUp();
        }
    }
}
