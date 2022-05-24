<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = "Name: {$name} {$phone} \n
    Email: {$email} \n
    Message: {$message}";
    
    mail('info@tvojpogled.rs', 'Contact form', $mail);
    print_r($mail);
?>
