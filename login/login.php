<?php
//COn esto decimos que todos los servidores pueden acceder a ello
header('Access-Control-Allow-Origin: *');

//Introducimos datos del servidor
define("SERVIDOR_BD", "localhost");
define("USUARIO_BD", "jose");
define("CLAVE_BD", "josefa");
define("NOMBRE_BD", "bd_loginjs");
try {
   $conexion = new PDO("mysql:host=" . SERVIDOR_BD . ";dbname=" . NOMBRE_BD, USUARIO_BD, CLAVE_BD, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
} catch (PDOException $e) {
   die("<p>Imposible conectar. Error:" . $e->getMessage() . "</p></body></html>");
}
try {
   $consulta = "select * from usuarios where usuario=? and clave=?";
   $sentencia = $conexion->prepare($consulta);
   $datos[] = $usuario;
   $datos[] = $clave;
   $sentencia->execute($datos);
   $tupla = array();
   if ($sentencia->rowCount() > 0) {
      $tupla = $sentencia->fetch(PDO::FETCH_ASSOC);
      // otras constantes: PDO::FETCH_NUM y PDO::FETCH_OBJ
   }
   var_dump($tupla);
   $sentencia = null;
   $conexion = null;
} catch (PDOException $e) {
   $sentencia = null;
   $conexion = null;
   die("<p>Imposible realizar la consulta. Error " . $e->getMessage() . "</p></body></html>");
}

$_POST = json_decode(file_get_contents("php://input"), true);
if ($_POST["telefono"] == "Myfpschool" && $_POST["password"] == md5("2023")) {
   $respuesta["usuario"] = "fulanico";
   $respuesta["mensaje"] = "Acceso correcto";
} else {
   $respuesta["mensaje"] = "Acceso incorrecto";
}
echo json_encode($respuesta);
?>