<?php
class Post
{
    public function __construct() {}
    public function index($posts) {}

    public function createPublication()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            session_start();
            $data = new Database();

            $conn = $data->getConnexion();

            $publication = new Publication($conn);

            $id_compte = $_SESSION['user_id'];
            $contenu = $_POST['contenu'];

            if (isset($id_compte) &&  isset($contenu)) {


                $publication->id_compte = $id_compte;
                $publication->contenu = $contenu;

                $publication->create();

                header('Location: /social/home');
            }
        }
    }

    public function deletePost()
    {
        if (isset($_POST['id'])) {
            $id = $_POST['id'];
            $data = new Database();

            $conn = $data->getConnexion();

            $commentaire = new Commentaire($conn);
            $publication = new Publication($conn);
            $reaction_publication = new Reaction_publication($conn);

            $commentaire->deleteAll($id);
            $reaction_publication->deleteAll($id);
            $publication->delete($id);
            // header('Location: /social/home');
        }
    }
}
