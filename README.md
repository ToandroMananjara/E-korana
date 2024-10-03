# E-korana

## Description

Ce projet est une application web de réseau social développée en PHP. Les utilisateurs peuvent interagir via des commentaires, des publications, et d'autres fonctionnalités sociales.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [XAMPP](https://www.apachefriends.org/) ou tout autre serveur local avec Apache, PHP et MySQL.
- [Git](https://git-scm.com/) pour cloner le projet et gérer le code.

## Installation

1. Cloner le dépôt

Clonez ce dépôt dans le dossier racine de votre serveur local (par exemple, `htdocs` pour XAMPP) :

```bash
git clone https://github.com/username/mon-projet-php.git

```

2. Configuration de la base de données
   Créez une base de données MySQL pour le projet.
   Importez le fichier SQL fourni dans le dossier database :

```bash
mysql -u nom_utilisateur -p nom_de_la_base < database/mon_projet.sql
```

Ou, depuis phpMyAdmin, allez dans l'onglet Importer, sélectionnez le fichier mon_projet.sql et cliquez sur Exécuter.

Mettez à jour les informations de connexion dans le fichier config.php :
php

```bash
<?php
// config.php
$host = 'localhost';
$dbname = 'nom_de_la_base';
$username = 'votre_nom_utilisateur';
$password = 'votre_mot_de_passe';
?>
```

4. Lancer le serveur
   Si vous utilisez XAMPP, démarrez Apache et MySQL via le panneau de contrôle de XAMPP. Ensuite, accédez au projet via votre navigateur en allant à l'URL suivante :

```
http://localhost/social/
```
