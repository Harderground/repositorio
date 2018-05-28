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

        public static Cliente obtenerCliente(string id)
        {
            try
            {
                List<Cliente> lst_cliente = new List<Cliente>();
                DataTable dt = new DataTable();
                string query = string.Format("SELECT * FROM `cliente` WHERE id_cliente='{0}'",id);
                lst_cliente=DataTableUtil.ConvertDataTable<Cliente>(Conexion.conexionConsulta(query));
                return lst_cliente[0];
            }
            catch (Exception)
            {

                throw;
            }
        }

        public static bool insertarCliente(Cliente cliente)
        {
            try
            {
                string query = string.Format("INSERT INTO cliente values ('{0}','{1}','{2}','{3}','{4}')",
                    cliente.id_cliente, cliente.nom_cliente,cliente.direccion,cliente.fono,cliente.email);
                Conexion.conexionAccion(query);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public static bool modificarCliente(Cliente cliente)
        {
            try
            {
                string query = string.Format ("UPDATE cliente SET Nom_cliente='{1}',Direccion='{2}',Fono='{3}',Email='{4}' WHERE Id_cliente='{0}'",
                    cliente.id_cliente, cliente.nom_cliente, cliente.direccion, cliente.fono, cliente.email);
                Conexion.conexionAccion(query);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public static bool eliminarCliente(string id)
        {
            try
            {
                string query = string.Format("DELETE FROM `cliente` WHERE `Id_Cliente`='{0}'",id);
                Conexion.conexionAccion(query);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }


        }
    }
}
