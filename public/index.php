<?php

header('Content-Type: application/json');
header('Accept: application/json');
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.

$json = json_decode(file_get_contents("php://input"), false);

$hostname = $json->host;
$ip =  gethostbyname($json->host);
$timeout = $json->timeout > 60 ? 60 : $json->timeout;
$port = $json->port;

$socket = fsockopen($hostname, $port, $errno, $errstr, $timeout);
if($socket) fclose($socket);

$return['host'] = $hostname;
$return['ip'] = $ip;
$return['port'] = $port;
$return['errno'] = $errno;
$return['errstr'] = $errstr;
$return['date'] = date("Y-m-d h:i:s");

echo json_encode($return, JSON_PRETTY_PRINT);

exit();
