using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class MainController : ApiController
    {

        [HttpGet]
        public string get()
        {
            return "get";
        }
        [HttpPost]
        public string post()
        {
            return "post";
        }
    }
}
