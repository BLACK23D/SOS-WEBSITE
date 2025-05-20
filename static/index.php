<?php
// This is a fallback for hosting on True Host
// It ensures all routes are properly handled by the SPA

// Get the requested URI
$request_uri = $_SERVER['REQUEST_URI'];

// If the request is for an existing file or directory, serve it directly
if (file_exists(__DIR__ . $request_uri) && !is_dir(__DIR__ . $request_uri)) {
    return false; // Let the server handle the request
}

// Otherwise, serve the index.html file for SPA routing
include_once __DIR__ . '/index.html';
?>
