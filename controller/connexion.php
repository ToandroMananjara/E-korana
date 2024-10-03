<?php
class Connexion
{
    public function __construct() {}

    public function index()
    {
        include_once('view/index.php');
    }

    public function authenticate()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            session_start();
            $data = new Database();

            $conn = $data->getConnexion();

            $user = new Compte($conn);

            $email = $_POST['email'];
            $password = $_POST['password'];

            $isUser = $user->isAuthentify($email, $password); #

            if ($isUser) {
                $_SESSION['user_id'] = $user->id;
                $_SESSION['email'] = $email;

                header("Location: /social/home");
                exit;
            } else {
                // Rediriger vers la page de login avec un message d'erreur

                $error = "Nom d'utilisateur ou mot de passe incorrect.";
                $_SESSION['errorMessage'] = $error;
                include_once('view/index.php');
            }
        }
    }

    // Déconnexion
    public function logout()
    {
        session_start();
        session_destroy();
        header("Location: /social/connexion");
        exit;
    }
}
