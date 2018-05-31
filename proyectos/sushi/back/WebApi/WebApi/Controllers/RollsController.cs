using servicios.negocio.Neg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class RollsController : ApiController
    {
        [HttpGet]
        public IHttpActionResult obtenerRolls()
        {
            try
            {
                return Ok(ProductoNeg.obtenerRolls());
            }
            catch (Exception ex)
            {
                return NotFound();
                throw;
            }
        }
    }
}
