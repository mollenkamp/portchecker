<?php

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.

$json = json_decode(file_get_contents("./url.json"), false);

foreach ($json as $url) {

    // Initialize a cURL session
    $ch = curl_init();

    // Set the URL to fetch
    curl_setopt($ch, CURLOPT_URL, "https://screenshot.freshupgrades.com?url=" . $url);

    // Return the transfer as a string instead of outputting it directly
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    // Execute the cURL session
    $output = curl_exec($ch);

    // Close the cURL session
    curl_close($ch);
    // Save the output to a file
    file_put_contents("./" . $url . ".png", $output);
}

