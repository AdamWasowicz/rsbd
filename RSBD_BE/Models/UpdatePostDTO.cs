namespace RSBD_BE.Models
{
    public class UpdatePostDTO
    {
        public int Id { get; set; }

        public string? RegionId { get; set; }

        //Updated content
        public string? TextContent { get; set; }
    }
}
