<?php

$json = json_decode(file_get_contents("./db.json"), false);

foreach ($json as $url) {

    echo $url->host;

   // Initialize a cURL session
    $ch = curl_init();

    // Set the URL to fetch
    curl_setopt($ch, CURLOPT_URL, "https://screenshot.freshupgrades.com?url=" . $url->host);

    // Return the transfer as a string instead of outputting it directly
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    // Execute the cURL session
    $output = curl_exec($ch);

    // Close the cURL session
    curl_close($ch);
    // Save the output to a file
    file_put_contents("./" . $url->host . ".png", $output);
}

