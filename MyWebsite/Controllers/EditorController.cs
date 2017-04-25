using Microsoft.AspNetCore.Mvc;
using MyWebsite.Models;

namespace MyWebsite.Controllers
{
    [Route("api/[controller]")]
    public class EditorController : Controller
    {
        private static string _content = string.Empty;

        [HttpGet]
        public ResultModel Get()
        {
            var result = new ResultModel();
            result.Data = _content;
            result.IsSuccess = result.Data != null;
            return result;
        }

        [HttpPut]
        public ResultModel Put([FromBody]string content)
        {
            var result = new ResultModel();
            _content = content;
            result.IsSuccess = true;
            return result;
        }
    }
}