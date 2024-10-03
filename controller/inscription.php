<?php

class Inscription
{
    public function __construct() {}

    public function createUser()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            session_start();
            $data = new Database();

            $conn = $data->getConnexion();

            $user = new Compte($conn);

            $nom = $_POST['nom'];
            $prenom = $_POST['prenom'];
            $email = $_POST['email'];
            $password = $_POST['password'];

            if (isset($nom) &&  isset($prenom) && isset($email) && isset($password)) {
                $_SESSION['email'] = $email;

                $user->nom = $nom;
                $user->prenom = $prenom;
                $user->email = $email;
                $user->password = $password;

                $user->create();

                header('Location: /social/home');
            }
        }
    }
}
