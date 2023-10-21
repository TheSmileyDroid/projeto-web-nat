<?php
echo "Requisição: " . $_SERVER['REQUEST_METHOD'] . "<br>";
echo "IP: " . $_SERVER['REMOTE_ADDR'] . "<br>";
echo "Porta: " . $_SERVER['REMOTE_PORT'] . "<br>";
echo "Protocolo: " . $_SERVER['SERVER_PROTOCOL'] . "<br>";
echo "Host: " . $_SERVER['HTTP_HOST'] . "<br>";
echo "User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "<br>";
echo "Data: " . date("Y-m-d") . "<br>";
echo "Hora: " . date("h:i:sa") . "<br>";
