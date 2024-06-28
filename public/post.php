<?php
    use PHPMailer\PHPMailer;
    use PHPMailer\Exception;
    $mail = new PHPMailer(true);
    
    try {
       $mail->SMTPDebug = 0; 
       $mail->isSMTP(); 
       $mail->Host = 'smtp.titan.email'; 
       $mail->SMTPAuth = true; 
       $mail->Password = 'wX'; 
       $mail->SMTPSecure = 'tls';
       $mail->Port = 465; 

       $mail->addAddress('contacto@cobbcapital.mx'); 

        $inputJSON = file_get_contents('php://input');
        $input = json_decode($inputJSON, TRUE);
        $name = $input['name'];
        $appaterno = $input['appaterno'];
        $apmaterno = $input['apmaterno'];
        $email = $input['email'];
        
        $checkbox = $input['checkbox'];
    
        $mail->isHTML(true); 
        $mail->Subject = $select;
        $mail->Charset = 'UTF-8';
        $mail->Body    = '
         <p>Mensaje recibido de '.$nombre. ' '. $appaterno. ' ' . $apmaterno. '</p><p>Con el correo '. $email.
         '<p>'.$mensaje .'</p>'.
         '';
       
       $mail->send();
       echo 'Mensaje enviado';
    } catch (Exception $e) {
       echo "Mensaje no enviado. Mailer Error: {$mail->ErrorInfo}";
    }