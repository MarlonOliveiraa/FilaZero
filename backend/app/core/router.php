<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

require_once 'auth-controller.php';

$method = $_SERVER['REQUEST_METHOD'];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$auth = new AuthController();

if ($method === 'POST' && $uri === '/register') {
    $auth->register();
} else {
    http_response_code(404);
    echo json_encode(['message' => 'Endpoint não encontrado']);
}

if ($method === 'POST' && $uri === '/login') {
    $auth->login();
} else {
    http_response_code(404);
    echo json_encode(['message' => 'Endpoint não encontrado']);
}
