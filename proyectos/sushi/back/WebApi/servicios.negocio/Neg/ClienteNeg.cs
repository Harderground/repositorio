using MySql.Data.MySqlClient;
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

        public static IEnumerable<Cliente> obtenerCliente(string id)
        {
            try
            {
                DataTable dt = new DataTable();
                string query = string.Format("SELECT * FROM `cliente` WHERE id_cliente='{0}'",id);
                return DataTableUtil.ConvertDataTable<Cliente>(Conexion.conexionConsulta(query));
            }
            catch (Exception)
            {

                throw;
            }
        }

        public static Cliente insertarCliente(Cliente cliente)
        {
            Conexion conexion = new Conexion();
            try
            {

                string query = string.Format("INSERT INTO cliente values ('{0}','{1}','{2}','{3}')",cliente.nom_cliente,cliente.direccion,cliente.fono,cliente.email);
                Conexion.conexionAccion(query);
                return cliente;
      
               

            }
            catch (Exception ex)
            {

                return cliente;

            }


        }
    }
}
