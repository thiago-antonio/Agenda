<?php

    $servidor = "localhost";
    $user = "root";
    $senha = "";
    $db = "agenda1_js";
    $con = new mysqli($servidor,$user,$senha,$db);

    $dados = array(
        "id" => "1",
        "nome" => "bruno"
    );

    echo json_encode($dados);





?>