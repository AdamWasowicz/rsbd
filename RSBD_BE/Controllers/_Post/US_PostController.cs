using Microsoft.AspNetCore.Mvc;
using RSBD_BE.Interfaces;


namespace RSBD_BE.Controllers
{
    [ApiController]
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/singe/post/us")]
    public class US_PostController : Base_PostController
    {
        public US_PostController(IUS_PostService service) : base(service)
        {

        }
    }
}
