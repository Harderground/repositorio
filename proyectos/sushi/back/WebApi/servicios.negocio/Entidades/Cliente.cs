using servicios.Comun;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace servicios.negocio.Entidades
{
    public class Cliente
    {
        [DbColumn("Nom_cliente")]
        public string nom_cliente { get; set; }
        [DbColumn("Direccion")]
        public string direccion { get; set; }
        [DbColumn("Email")]
        public string email { get; set; }
        [DbColumn("Id_Cliente")]
        public string id_cliente { get; set; }
        [DbColumn("Fono")]
        public string fono { get; set; }

    }
}
