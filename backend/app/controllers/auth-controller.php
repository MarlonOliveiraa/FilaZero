<?php

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    http_response_code(200);
    exit();
}


require_once __DIR__ . '/../models/usuario-model.php';

class AuthController
{
    private function jsonResponse($data, $status = 200)
    {
        http_response_code($status);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit;
    }

    public function register()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $nome     = $data['nome'] ?? '';
        $telefone = $data['telefone'] ?? '';
        $email    = $data['email'] ?? '';
        $senha    = $data['senha'] ?? '';

        if (!$nome || !$email || !$senha) {
            return $this->jsonResponse(['success' => false, 'message' => 'Nome, email e senha são obrigatórios'], 400);
        }

        if (Usuario::searchByEmail($email)) {
            return $this->jsonResponse(['success' => false, 'message' => 'Email já cadastrado'], 409);
        }

        $senhaHash = password_hash($senha, PASSWORD_DEFAULT);
        Usuario::Create($nome, $telefone, $email, $senhaHash);

        return $this->jsonResponse(['success' => true, 'message' => 'Usuário cadastrado com sucesso'], 201);
    }

    public function login()
    {
        $data  = json_decode(file_get_contents('php://input'), true);
        $email = $data['email'] ?? '';
        $senha = $data['senha'] ?? '';

        $user = Usuario::searchByEmail($email);
        if (!$user) {
            return $this->jsonResponse(['success' => false, 'message' => 'Usuário não encontrado'], 404);
        }

        if (!password_verify($senha, $user['senha_hash'])) {
            if ($senha !== $user['senha_hash']) {
                return $this->jsonResponse(['success' => false, 'message' => 'Senha inválida'], 401);
            }
        }

        if (is_array($user) && isset($user['senha_hash'])) {
            unset($user['senha_hash']);
        }

        $token = bin2hex(random_bytes(16));
        Usuario::atualizarToken($user['id'], $token);

        return $this->jsonResponse([
            'success' => true,
            'message' => 'Login feito com sucesso',
            'user'    => $user,
            'token' => $token,
        ]);
    }

    public function userAuthentication()
    {
        $headers = getallheaders();
        if (isset($headers['Authorization'])) {
            $authorizationHeader = $headers['Authorization'];
            $token = str_replace('Bearer ', '', $authorizationHeader);

            $usuario = Usuario::searchByToken($token);

            if ($usuario) {
                return $this->jsonResponse([
                    'success' => true,
                    'message' => 'Autenticado com sucesso',
                    'token'   => $token
                ], 200);
            } else {
                return $this->jsonResponse([
                    'success' => false,
                    'message' => 'Token inválido'
                ], 401);
            }
        } else {
            return $this->jsonResponse([
                'success' => false,
                'message' => 'Token não encontrado nos headers'
            ], 401);
        }
    }
}
