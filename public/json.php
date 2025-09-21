<?php

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.

$host = json_decode(file_get_contents("./url.json"), false);

$jsonupdate = array();

foreach($host as $url) {
    $jsonupdate []= array(
        "host" => $url,
        "port" => 443,
        "timeout" => 5,
        "expect_open" => true
    );
}

echo json_encode($jsonupdate);