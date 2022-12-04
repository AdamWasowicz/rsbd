using Microsoft.AspNetCore.Mvc;
using RSBD_BE.Interfaces;

namespace RSBD_BE.Controllers
{
    [ApiController]
    [Route("api/eu")]
    public class EU_Controller : Controller
    {
        private readonly IEU_Service _service;


        public EU_Controller(IEU_Service service)
        {
            _service = service;
        }

        [HttpGet("{db}")]
        public bool IsAnythingInDatabase([FromRoute] int db)
        {
            return _service.IsAnythingInDatabase(db);
        }

        [HttpPost("{db}")]
        public bool InsertExampleData([FromRoute] int db)
        {
            _service.InsertExampleData(db);
            return true;
        }

        [HttpDelete("{db}")]
        public bool ClearData([FromRoute] int db)
        {
            _service.ClearData(db);
            return true;
        }
    }
}
