using servicios.negocio.Entidades;
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

        [HttpGet]
        public IHttpActionResult obtenerTablas()
        {
            try
            {
                return Ok(ProductoNeg.obtenerTablas());
            }
            catch (Exception ex)
            {
                return NotFound();
                throw;
            }
        }
        [HttpPost]
        public bool insertarProducto(Producto producto)
        {
            try
            {
                return ProductoNeg.insertarProducto(producto);
            }
            catch (Exception)
            {

                return false;
            }
        }
    }
}
