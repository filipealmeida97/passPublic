<?php
    $tamanho = $_POST['tamanho'];
    $qtd = $_POST['qtd'];
    $esp="!@#$%&*()_-+={}[]?^~.,'";
    $esp=str_split($esp);
    $let="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    $let=str_split($let);
    $num="1234567890";
    $num=str_split($num);
    $vetor = [];
    $_POST['simbolo'] ? $vetor[]=$esp : null;
    $_POST['letra'] ? $vetor[]=$let : null;
    $_POST['numero'] ? $vetor[]=$num : null;

    for($q = 0 ; $q < $qtd ; $q++){
        $vet=[];
        for ($i = 0  ; $i < $tamanho ; $i++) {
            
            $aleatorio = rand(0,sizeof($vetor)-1);
            $pos = rand(0,sizeof($vetor[$aleatorio])-1);

            if(sizeof($vet)<$tamanho){

                $vet[]=$vetor[$aleatorio][$pos];
                
            }


        }

        echo implode('',$vet);
        echo "\n";
    }