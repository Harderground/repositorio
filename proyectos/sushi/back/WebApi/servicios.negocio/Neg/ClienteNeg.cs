using servicios.Comun;
using servicios.negocio.Entidades;
using servicios.sushi.Conexion.DAO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace servicios.negocio.Neg
{
    public class ClienteNeg
    {
        public static IEnumerable<Cliente> obtenerClientes()
        {
            try
            {
                DataTable dt = new DataTable();
                string query = string.Format("SELECT * FROM `cliente`");
                return DataTableUtil.ConvertDataTable<Cliente>(Conexion.conexionConsulta(query));
            }
            catch (Exception)
            {

                throw;
            }
        }

        public static Cliente insertarClientes(Cliente cliente)
        {
            return cliente;
        }
    }
}
