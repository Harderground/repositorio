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
        public Cliente obtenerCliente(string id)
        {
            try
            {
                return ClienteNeg.obtenerCliente(id);
            }
            catch (Exception ex)
            {
                return new Cliente();
                throw;
            }
        }

        [HttpPost]
        public bool insertarCliente(Cliente cliente)
        {
            try
            {
                return ClienteNeg.insertarCliente(cliente);
            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }

        [HttpPost]
        public bool modificarCliente(Cliente cliente)
        {
            try
            {
                return ClienteNeg.modificarCliente(cliente);
            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }

        [HttpPost]
        public bool eliminarCliente(string id)
        {
            try
            {
                return ClienteNeg.eliminarCliente(id);
            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }

    }
}
