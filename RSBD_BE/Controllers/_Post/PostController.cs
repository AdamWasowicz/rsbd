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

        [HttpPost]
        public ActionResult<Post> InsertData([FromBody] CreatePostDTO dto)
        {
            var data = _service.InsertData(dto);
            return Created(data.Id.ToString(), data);
        }

        [HttpPost("example/{regionId}")]
        public ActionResult<Post> InsertExampleData([FromRoute] string regionId)
        {
            var data = _service.InsertExampleData(regionId);
            return Created(data.Id.ToString(), data);
        }

        [HttpPatch]
        public ActionResult<Post> UpdateData([FromBody] UpdatePostDTO dto)
        {
            var data = _service.UpdateData(dto);
            return data;
        }

        [HttpDelete]
        public ActionResult<bool> DeleteData([FromBody] DeletePostDTO dto)
        {
            var result = _service.DeleteData(dto);
            return result;
        }

        [HttpGet("{regionName}")]
        public ActionResult<List<Post>> GetRegionAllData([FromRoute] string regionName)
        {
            var data = _service.GetRegionAllData(_region.getRegionId(regionName));
            return data;
        }

        [HttpGet]
        public ActionResult<AllDataDividedByLocationDTO> GetAllRegionBothServersAllData()
        {
            var data = _service.GetAllRegionsBothServersAllData();
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
