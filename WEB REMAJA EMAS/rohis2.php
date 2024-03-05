<?php 
    $nama $_POST['nama'];
    $nis $_POST['nis'];
    $gender $_POST['gender'];

    $conn = new mysql('localhost','root','','form_login');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(nama, nis, gender) values(?, ?, ?)");
        $stmt->bind_param("sis",$nama, $nis, $gender);
        $stmt->execute();
        echo "login succes...";
        $stmt->close();
        $conn->close();
    }
   
?>