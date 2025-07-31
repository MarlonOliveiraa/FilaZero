<?php

require_once __DIR__ . "../../../config/database.php";

class Usuario
{
    public static function searchByEmail($email)
    {
        $conn = Database::Connect();
        $stmt = $conn->prepare("SELECT * FROM usuarios WHERE email = ?");
        $stmt->execute([$email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public static function Create($nome, $telephone, $email, $senhaHash)
    {
        $conn = Database::Connect();
        $stmt = $conn->prepare("INSERT INTO usuarios (nome, telefone, email, senha_hash) VALUES (?, ?, ?, ?)");
        return $stmt->execute([$nome, $telephone, $email, $senhaHash]);
    }

    public static function atualizarToken($token)
    {
        $conn = Database::Connect();
        $stmt = $conn->prepare("INSERT INTO usuarios (token) VALUES (?)");
        $stmt->execute([$token]);
        return $stmt->execute([$token]);
    }

    public static function searchByToken($token)
    {
        $conn = Database::Connect();
        $stmt = $conn->prepare("SELECT * FROM usuarios WHERE token = ?");
        $stmt->execute([$token]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
