<?php
require_once __DIR__ . "/../app/controllers/auth-controller.php";

$auth = new AuthController();

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Remove prefixo até "index.php" para pegar só a rota real
// Exemplo: "/FilaZero/backend/public/index.php/register" vira "/register"
$basePath = '/FilaZero/backend/public/index.php';

if (strpos($uri, $basePath) === 0) {
    $uri = substr($uri, strlen($basePath));
    if ($uri === '') {
        $uri = '/';
    }
}

if ($method === 'POST' && $uri === '/register') {
    $auth->register();
} else {
    http_response_code(404);
    echo json_encode(['message' => 'Rota não encontrada', 'uri' => $uri]);
}
