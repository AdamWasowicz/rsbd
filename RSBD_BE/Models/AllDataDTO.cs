using RSBD_BE.Entities;

namespace RSBD_BE.Models
{
    public class AllDataDividedByLocationDTO
    {
        public List<Post> eu_Write { get; set; }
        public List<Post> eu_Read { get; set; }

        public List<Post> us_Write { get; set; }
        public List<Post> us_Read { get; set; }

        public List<Post> as_Write { get; set; }
        public List<Post> as_Read { get; set; }
    }
}
