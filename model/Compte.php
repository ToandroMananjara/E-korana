<?php

class Compte
{
    private $table = "compte";
    private $connexion = null;

    public $id;
    public $nom;
    public $prenom;
    public $email;
    public $password;

    public function __construct($db)
    {
        if ($this->connexion == null) {
            $this->connexion = $db;
        }
    }

    public function create()
    {
        $sql = "insert into $this->table (nom,prenom,email,password) values ('$this->nom',
                        '$this->prenom','$this->email',$this->password )";
        $query = $this->connexion->query($sql);
    }

    public function readAll()
    {
        $sql = "SELECT * FROM $this->table";
        $query = $this->connexion->query($sql);
        $datas = $query->fetchAll(PDO::FETCH_OBJ);
        return $datas;
    }

    public function readById($id)
    {
        $sql = "SELECT * FROM $this->table where id=$id";
        $query = $this->connexion->query($sql);
        $datas = $query->fetch(PDO::FETCH_ASSOC);
        return $datas;
    }

    public function update()
    {
        $sql = "UPDATE $this->table set nom='$this->nom',prenom='$this->prenom',email='$this->email',
            password=$this->password where id=$this->id";
        $query = $this->connexion->query($sql);
    }

    public function delete($id)
    {
        $sql = "DELETE from $this->table where id=$id";
        $query = $this->connexion->query($sql);
    }

    public function isAuthentify($email, $password)
    {
        // Préparer la requête
        $sql = "SELECT * FROM $this->table where email = '$email' and password = '$password'";
        $query = $this->connexion->query($sql);
        $result = $query->fetch(PDO::FETCH_OBJ);
        if ($result) {
            $this->id = $result->id;
            return true;
        } else
            return false;
    }
}
