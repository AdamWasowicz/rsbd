using Microsoft.AspNetCore.Mvc;
using RSBD_BE.Interfaces;


namespace RSBD_BE.Controllers
{
    [ApiController]
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/singe/post/as")]
    public class AS_PostController : Base_PostController
    {
        public AS_PostController(IAS_PostService service) : base(service)
        {

        }
    }
}
