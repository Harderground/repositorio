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
    public class ClienteController : ApiController
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

        [HttpPost]
        public IHttpActionResult insertarClientes(Cliente cliente)
        {
            try
            {
                return Ok(ClienteNeg.insertarClientes(cliente));
            }
            catch (Exception ex)
            {
                return NotFound();
                throw;
            }
        }

    }
}
