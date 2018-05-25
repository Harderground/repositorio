using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Data;

namespace servicios.sushi.Conexion.DAO
{
    public class Conexion
    {
        private static MySqlConnection obtenerConexion()
        {
            try
            {
                MySqlConnection conexion = new MySqlConnection("server=127.0.0.1;database=sushi;Uid=root;pwd=ibsdigital;");
                conexion.Open();
                return conexion;
            }
            catch (Exception ex)
            {
                return new MySqlConnection();
            }           
        }

        public static DataTable conexionConsulta(string query)
        {
            try
            {
                MySqlConnection con = obtenerConexion();
                MySqlCommand cmd = new MySqlCommand(query, con);
                MySqlDataReader reader = cmd.ExecuteReader();
                DataTable dt = new DataTable();
                dt.Load(reader);
                con.Close();
                return dt;
            }
            catch (Exception)
            {
                return new DataTable();
            }

        }
        public static bool conexionAccion(string query)
        {
            try
            {
                MySqlConnection con = obtenerConexion();
                MySqlCommand cmd = new MySqlCommand(query, con);
                MySqlDataReader reader = cmd.ExecuteReader();
                con.Close();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;

            }

        }
    }
}
