<?php
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

        $nome  = $data['nome'] ?? '';
        $telefone = $data['telefone'] ?? '';
        $email = $data['email'] ?? '';
        $senha = $data['senha'] ?? '';

        if (!$nome || !$email || !$senha) {
            return $this->jsonResponse(['success' => false, 'message' => 'Nome, email e senha são obrigatórios'], 400);
        }

        if (Usuario::searchByEmail($email)) {
            return $this->jsonResponse(['success' => false, 'message' => 'Email já cadastrado'], 409);
        }

        $senhaHash = password_hash($senha, PASSWORD_DEFAULT);
        Usuario::Create($nome, $telefone, $email, $senhaHash);

        return $this->jsonResponse(['success' => true, 'message' => 'Usuário cadastrado com sucesso']);
    }
}
