<?php 
    $userName = $_POST['name'];
    $userNumber = $_POST['number'];
    $Message = $_POST['message'];

    $to = "arturkaceli15@gmail.com";
    $body = "";

    $body .= "From: ".userName. "\r\n";
    $body .= "From: ".userNumber. "\r\n";
    $body .= "From: ".message. "\r\n";

    mail($to, $body);

?>