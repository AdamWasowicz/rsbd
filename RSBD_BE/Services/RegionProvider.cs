using RSBD_BE.Exceptions;
using RSBD_BE.Interfaces;

namespace RSBD_BE.Services
{
    public class RegionProvider : IRegionProvider
    {
        private readonly IEU_PostService _eu_service;
        private readonly IUS_PostService _us_service;
        private readonly IAS_PostService _as_service;

        private enum Regions
        {
            EU,
            US,
            AS,
        }

        public RegionProvider(
            IEU_PostService eu_service,
            IUS_PostService us_service,
            IAS_PostService as_service)
        {
            _eu_service = eu_service;
            _us_service = us_service;
            _as_service = as_service;
        }


        public IBase_PostService provide(int regionId)
        {
            switch (regionId)
            {
                case (int)Regions.EU:
                    return _eu_service;
                case (int)Regions.US:
                    return _us_service;
                case (int)Regions.AS:
                    return _as_service;
                default:
                    throw new InvalidRegionIdException();
            }
        }

        public int getRegionId(string regionName)
        {
            switch (0)
            {
                case int n when regionName == "eu" || regionName == "EU":
                    return (int)Regions.EU;
                case int n when regionName == "us" || regionName == "US":
                    return (int)Regions.US;
                case int n when regionName == "as" || regionName == "AS":
                    return (int)Regions.AS;
                default:
                    throw new InvalidRegionIdException();
            }
        }
    }
}
