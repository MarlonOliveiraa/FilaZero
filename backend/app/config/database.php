<?php
class Database
{
    private $server = "localhost";
    private $dbname = "filazero";
    private $user = "root";
    private $pass = "";

    public function Connect(){
        try {
            $conn = new PDO(
                "mysql:host=" . $this->server . ";dbname=" . $this->dbname,
                $this->user,$this->pass
            );
            
            $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
           return $conn;

        } catch (\Exception $th) {
            echo $th->getMessage();
        }
        
    }
}