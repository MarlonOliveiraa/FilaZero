<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . "/../app/controllers/auth-controller.php";
require_once __DIR__ . "/../app/controllers/enterprise-controller.php";

$auth = new AuthController();
$enterprise = new Enterprise();

$basePath = '/FilaZero/backend/public';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];


if (strpos($uri, $basePath) === 0) {
    $uri = substr($uri, strlen($basePath));
}

if (strpos($uri, '/index.php') === 0) {
    $uri = substr($uri, strlen('/index.php'));
}

$uri = trim($uri);
if ($uri === '') {
    $uri = '/';
}


if ($method === 'POST' && $uri === '/register') {
    $auth->register();
    exit;
}

if ($method === 'POST' && $uri === '/login') {
    $auth->login();
    exit;
}

if ($method === 'GET' && $uri === '/search') {
    $enterprise->searchEnterprise();
    exit;
} else {
    return json_encode(
        [
            'success' => false,
            'message' => 'endpoint de busca nao encontrado',
        ],
        404
    );
}

http_response_code(404);
echo json_encode(['message' => 'Rota não encontrada', 'uri' => $uri]);
exit;
