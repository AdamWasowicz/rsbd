using Microsoft.AspNetCore.Mvc;
using RSBD_BE.Interfaces;


namespace RSBD_BE.Controllers
{
    [ApiController]
    [Route("api/singe/post/eu")]
    public class EU_PostController : Base_PostController
    {
        public EU_PostController(IEU_PostService service) : base(service)
        {

        }
    }
}
