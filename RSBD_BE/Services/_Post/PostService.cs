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

        public int InsertData(CreatePostDTO dto)
        {
            if (dto != null && dto.RegionId != null)
            {
                int regionId = _region.getRegionId(dto.RegionId);
                return _region.provide(regionId).InsertData(dto);
            }
            
            throw new ArgumentNullException(nameof(dto));
        }

        public int InsertExampleData(string regionId)
        {
            int myRegionId = _region.getRegionId(regionId);
            return _region.provide(myRegionId).InsertExampleData();
        }

        public bool UpdateData(UpdatePostDTO dto)
        {
            if (dto != null && dto.RegionId != null)
            {
                int regionId = _region.getRegionId(dto.RegionId);
                return _region.provide(regionId).UpdateData(dto);
            }

            throw new ArgumentNullException(nameof(dto));
        }

        public bool DeleteData(DeletePostDTO dto)
        {
            if (dto != null && dto.RegionId != null)
            {
                int regionId = _region.getRegionId(dto.RegionId);
                return _region.provide(regionId).DeleteData(dto);
            }

            throw new ArgumentNullException(nameof(dto));
        }

        public List<Post> GetRegionAllData(int regionId)
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

        public AllDataDividedByLocationDTO GetAllRegionsBothServersAllData()
        {
            var eu = _region.provide(_region.getRegionId("eu")).GetDataFromBothServers();
            var us = _region.provide(_region.getRegionId("us")).GetDataFromBothServers();
            var asServer = _region.provide(_region.getRegionId("as")).GetDataFromBothServers();

            AllDataDividedByLocationDTO data = new AllDataDividedByLocationDTO()
            {
                EU_Write = eu.Item1,
                EU_Read = eu.Item2,

                US_Write = us.Item1,
                US_Read = us.Item2,

                AS_Write = asServer.Item1,
                AS_Read = asServer.Item2,
            };

            return data;
        }
    }
}
