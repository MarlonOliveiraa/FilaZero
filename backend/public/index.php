<?php

require_once __DIR__ . "/../app/controllers/auth-controller.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$auth = new AuthController();

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

$basePath = '/FilaZero/backend/public/index.php';

if (strpos($uri, $basePath) === 0) {
    $uri = substr($uri, strlen($basePath));
    if ($uri === '') {
        $uri = '/';
    }
}

// Roteamento
if ($method === 'POST' && $uri === '/register') {
    $auth->Register();
    exit;
}

if ($method === 'POST' && $uri === '/login') {
    $auth->Login(); // use lowercase (se o método é assim no controller)
    exit;
}

// Se nenhuma rota for encontrada
http_response_code(404);
echo json_encode(['message' => 'Rota não encontrada', 'uri' => $uri]);
