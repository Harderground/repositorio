namespace servicios.Comun
{
    using System;
    public class DbColumnAttribute : Attribute
    {
        public string Name { get; private set; }
        //IdItem { set; get; }
        public DbColumnAttribute(string name)
        {
            this.Name = name;
        }

    }
}
