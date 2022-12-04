using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RSBD_BE.Entities
{
    public class Post
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string TextContent { get; set; }
    }
}
