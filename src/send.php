<?php

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    $email = $params->email;
    $firstname = $params->firstName;
    $lastname = $params->lastName;
    $phone = $params->phone;
    $comments = $params->comments;

    $message = "$comments\n\nPhone Number: $phone";

    $recipient = 'no-reply@libertylanedentistry.com';
    $subject = 'new message';
    $headers = "From: $name <$email>";

    mail($recipient,$subject,$message, $headers)
// switch($_SERVER['REQUEST_METHOD']){
//     case("OPTIONS"): //Allow preflighting to take place.
//         header("Access-Control-Allow-Origin: *");
//         header("Access-Control-Allow-Methods: POST");
//         header("Access-Control-Allow-Headers: content-type");
//         exit;
//     case("POST"): //Send the email;
//         header("Access-Control-Allow-Origin: *");

//         $json = file_get_contents('php://input');

//         $params = json_decode($json);

//         $email = $params->email;
//         $firstname = $params->firstName;
//         $lastname = $params->lastName;
//         $phone = $params->phone;
//         $message = $params->comments;

//         $recipient = 'no-reply@libertylanedentistry.com';
//         $subject = 'new message';
//         $headers = "From: $name <$email>";

//         echo $name

//         mail($recipient, $subject, $message, $headers, $phone);
//         break;
//     default: //Reject any non POST or OPTIONS requests.
//         header("Allow: POST", true, 405);
//         exit;
// }
?>