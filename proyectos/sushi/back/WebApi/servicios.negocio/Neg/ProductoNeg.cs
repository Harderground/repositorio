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
    public class ProductoNeg
    {
        public static IEnumerable<Producto> obtenerRolls()
        {
            try
            {
                DataTable dt = new DataTable();
                string query = string.Format("SELECT * FROM `producto` WHERE categoria='Roll'");
                return DataTableUtil.ConvertDataTable<Producto>(Conexion.conexionConsulta(query));
            }
            catch (Exception)
            {

                throw;
            }
        }
        public static IEnumerable<Producto> obtenerTablas()
        {
            try
            {
                DataTable dt = new DataTable();
                string query = string.Format("SELECT * FROM `producto` WHERE categoria='Tabla'");
                return DataTableUtil.ConvertDataTable<Producto>(Conexion.conexionConsulta(query));
            }
            catch (Exception)
            {

                throw;
            }
        }

        public static bool insertarProducto(Producto producto)
        {
            try
            {
               
                string query = string.Format("INSERT INTO producto VALUES ({0},'{1}','{2}','{3}',{4},'{5}')",
                    producto.id_producto,producto.categoria,producto.nombre,producto.descripcion,producto.precio,producto.imagen );

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
