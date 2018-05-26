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
        [HttpGet]
        public IHttpActionResult obtenerCliente(string id)
        {
            try
            {
                return Ok(ClienteNeg.obtenerCliente(id));
            }
            catch (Exception ex)
            {
                return NotFound();
                throw;
            }
        }

        [HttpPost]
        public IHttpActionResult insertarCliente(Cliente cliente)
        {
            try
            {
                return Ok(ClienteNeg.insertarCliente(cliente));
            }
            catch (Exception ex)
            {
                return NotFound();
                throw;
            }
        }

    }
}
