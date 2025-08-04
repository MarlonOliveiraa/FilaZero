<?php

class EnterpriseModel
{
    public static function searchByEnterprise($nome)
    {
        $conn = Database::Connect();
        $stmt = $conn->prepare("SELECT * FROM empresa WHERE nome = ?");
        $stmt->execute([$nome]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
