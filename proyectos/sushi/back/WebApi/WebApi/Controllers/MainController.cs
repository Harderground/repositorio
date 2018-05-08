using servicios.negocio.Neg;
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
        public IHttpActionResult obtenerClientes()
        {
            try
            {
                return Ok(ClienteNeg.obtenerClientes());
            }
            catch (Exception ex)
            {
                return NotFound();
                throw;
            }
        }

        [HttpGet]
        public IHttpActionResult obtenerProductos()
        {
            try
            {
                return Ok(ProductoNeg.obtenerProductos());
            }
            catch (Exception ex)
            {
                return NotFound();
                throw;
            }
        }
        [HttpPost]
        public string post()
        {
            return "post";
        }
        [HttpGet]
        public string get2()
        {
            return "get";
        }
    }
}
