<?php
class Database
{
    private static $server = "localhost";
    private static $dbname = "filazero";
    private static $user = "root";
    private static $pass = "";

    public static function Connect()
    {
        try {
            $conn = new PDO(
                "mysql:host=" . self::$server . ";dbname=" . self::$dbname,
                self::$user,
                self::$pass
            );
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (Exception $th) {
            die("Erro na conexão: " . $th->getMessage());
        }
    }
}
