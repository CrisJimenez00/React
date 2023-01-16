<?php
header('Access-Control-Allow-Origin: *'); 

$_POST = json_decode(file_get_contents("php://input"),true);
 if ($_POST["telefono"]=="Myfpschool" && $_POST["password"]=="2023"){
    $respuesta["usuario"]="fulanico";
    $respuesta["mensaje"]="Acceso correcto";
 }else{
    $respuesta["mensaje"]="Acceso incorrecto";
 }
 echo json_encode($respuesta);
?>