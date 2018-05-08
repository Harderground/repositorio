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
        public static IEnumerable<Producto> obtenerProductos()
        {
            try
            {
                DataTable dt = new DataTable();
                string query = string.Format("SELECT * FROM `producto`");
                return DataTableUtil.ConvertDataTable<Producto>(Conexion.conexionConsulta(query));
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
