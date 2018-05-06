using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
namespace servicios.sushi.Conexion.DAO
{
    public class Conexion
    {
        public static MySqlConnection obtenerConexion()
        {
            try
            {
                MySqlConnection conexion = new MySqlConnection("server=127.0.0.1;database=vinyl;Uid=root;pwd=;");
                conexion.Open();
                return conexion;
            }
            catch (Exception ex)
            {
                string a = ex.ToString();
                return new MySqlConnection();
            }           
        }
    }
}
