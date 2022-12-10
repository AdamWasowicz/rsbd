using RSBD_BE.Entities;

namespace RSBD_BE.Models
{
    public class AllDataDTO
    {
        public List<Post> EU_Write { get; set; }
        public List<Post> EU_Read { get; set; }

        public List<Post> US_Write { get; set; }
        public List<Post> US_Read { get; set; }

        public List<Post> AS_Write { get; set; }
        public List<Post> AS_Read { get; set; }
    }
}
