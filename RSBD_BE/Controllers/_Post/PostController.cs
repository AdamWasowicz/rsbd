using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RSBD_BE.Entities;
using RSBD_BE.Interfaces;
using RSBD_BE.Models;

namespace RSBD_BE.Controllers
{
    [ApiController]
    [Route("api/compact/post")]
    public class PostController : Controller
    {
        private readonly IPostService _service;
        private readonly IRegionProvider _region;

        public PostController(IPostService service, IRegionProvider region)
        {
            _service = service;
            _region = region;
        }

        [HttpPost("{regionName}")]
        public ActionResult InsertData([FromBody] CreatePostDTO dto, [FromRoute] string regionName)
        {
            int id = _service.InsertData(dto, _region.getRegionId(regionName));

            return Created(id.ToString(), null);
        }

        [HttpPatch("{regionName}")]
        public ActionResult UpdateData([FromBody] UpdatePostDTO dto, [FromRoute] string regionName)
        {
            bool result = _service.UpdateData(dto, _region.getRegionId(regionName));

            if (result == false)
                return NotFound();

            return Ok();
        }

        [HttpDelete("{regionName}")]
        public ActionResult DeleteData([FromBody] DeletePostDTO dto, [FromRoute] string regionName)
        {
            bool result = _service.DeleteData(dto, _region.getRegionId(regionName));

            if (result == false)
                return NotFound();

            return Ok();
        }

        [HttpGet("{regionName}")]
        public ActionResult<List<Post>> GetAllRegionData([FromRoute] string regionName)
        {
            var data = _service.GetAllData(_region.getRegionId(regionName));

            return data;
        }

        [HttpGet("{regionName}/{id}")]
        public ActionResult<Post> GetDataById([FromRoute] int id, [FromRoute] string regionName)
        {
            var data = _service.GetDataById(id, _region.getRegionId(regionName));

            if (data == null)
                return NotFound();

            return data;
        }

        [HttpGet("{regionName}/status/primary")]
        public ActionResult<bool> IsServerPrimaryUp([FromRoute] string regionName)
        {
            return _service.IsServerPrimaryUp(_region.getRegionId(regionName));
        }

        [HttpGet("{regionName}/status/secondary")]
        public ActionResult<bool> IsServerSecondaryUp([FromRoute] string regionName)
        {
            return _service.IsServerSecondaryUp(_region.getRegionId(regionName));
        }
    }
}
