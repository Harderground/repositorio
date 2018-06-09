using servicios.Comun;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace servicios.negocio.Entidades
{
    public class Producto
    {
        [DbColumn("id_producto")]
        public int id_producto { get; set; }
        [DbColumn("categoria")]
        public string categoria { get; set; }
        [DbColumn("nombre")]
        public string nombre { get; set; }
        [DbColumn("descripcion")]
        public string descripcion { get; set; }
        [DbColumn("precio")]
        public int precio { get; set; }
        [DbColumn("imagen")]
        public string imagen { get; set; }
    }
}
