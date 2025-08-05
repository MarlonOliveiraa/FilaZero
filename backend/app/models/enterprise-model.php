<?php
class EnterpriseModel
{
    public static function searchByEnterprise($nome)
    {
        $conn = Database::Connect();
        $stmt = $conn->prepare("SELECT * FROM empresa WHERE nome LIKE ?");
        $stmt->execute(["%$nome%"]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC); // agora retorna array de várias empresas
    }
}
