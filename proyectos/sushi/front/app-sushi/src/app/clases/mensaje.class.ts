export class Mensaje{
    public success:any="operación ejecutada con existo";
    public error_backend:any="Ocurrio un error en el servidor";
    public error_conexion:any="No se puede conectar al servidor, verifique su conexión";

    public Success(){
        return this.success;
    }
    public Error_BackEnd(){
        return this.error_backend;
    }
    public Error_Conexion(){
        return this.error_conexion;
    }
}