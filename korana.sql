-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 02 oct. 2024 à 15:24
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `korana`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

CREATE TABLE `commentaire` (
  `id` int(11) NOT NULL,
  `contenu` text NOT NULL,
  `date_commentaire` datetime NOT NULL DEFAULT current_timestamp(),
  `id_compte` int(11) DEFAULT NULL,
  `id_pub` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commentaire`
--

INSERT INTO `commentaire` (`id`, `contenu`, `date_commentaire`, `id_compte`, `id_pub`) VALUES
(102, 'new commentaire', '2024-10-02 16:16:24', 5, 35),
(103, 'second commentaire', '2024-10-02 16:16:41', 5, 35),
(104, 'com de datoa ', '2024-10-02 16:19:41', 4, 36);

-- --------------------------------------------------------

--
-- Structure de la table `compte`
--

CREATE TABLE `compte` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `compte`
--

INSERT INTO `compte` (`id`, `nom`, `prenom`, `email`, `password`) VALUES
(2, 'rambola', 'fely', 'rambola@gmail.com', '123456'),
(4, 'datoa', 'fely', 'datoafely@gmail.com', '123456'),
(5, 'toandro', 'mananjara', 'toandro@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Structure de la table `mponina`
--

CREATE TABLE `mponina` (
  `id` int(11) NOT NULL,
  `anarana` varchar(50) NOT NULL,
  `adiresy` varchar(100) DEFAULT NULL,
  `karama` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `publication`
--

CREATE TABLE `publication` (
  `id` int(11) NOT NULL,
  `contenu` text NOT NULL,
  `date_publication` datetime DEFAULT current_timestamp(),
  `id_compte` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `publication`
--

INSERT INTO `publication` (`id`, `contenu`, `date_publication`, `id_compte`) VALUES
(35, 'new post ', '2024-10-02 16:16:07', 5),
(36, 'post pour datoa fely', '2024-10-02 16:17:54', 4);

-- --------------------------------------------------------

--
-- Structure de la table `reaction_publication`
--

CREATE TABLE `reaction_publication` (
  `id` int(11) NOT NULL,
  `type` enum('aime','adore','haha','triste','colere') DEFAULT NULL,
  `id_pub` int(11) DEFAULT NULL,
  `id_compte` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reaction_publication`
--

INSERT INTO `reaction_publication` (`id`, `type`, `id_pub`, `id_compte`) VALUES
(12, 'adore', 35, 5),
(13, 'adore', 35, 4),
(14, 'adore', 36, 4);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_compte` (`id_compte`),
  ADD KEY `id_pub` (`id_pub`);

--
-- Index pour la table `compte`
--
ALTER TABLE `compte`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `mponina`
--
ALTER TABLE `mponina`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `publication`
--
ALTER TABLE `publication`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_compte` (`id_compte`);

--
-- Index pour la table `reaction_publication`
--
ALTER TABLE `reaction_publication`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pub` (`id_pub`),
  ADD KEY `id_compte` (`id_compte`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `commentaire`
--
ALTER TABLE `commentaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT pour la table `compte`
--
ALTER TABLE `compte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `mponina`
--
ALTER TABLE `mponina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `publication`
--
ALTER TABLE `publication`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT pour la table `reaction_publication`
--
ALTER TABLE `reaction_publication`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `commentaire_ibfk_1` FOREIGN KEY (`id_compte`) REFERENCES `compte` (`id`),
  ADD CONSTRAINT `commentaire_ibfk_2` FOREIGN KEY (`id_pub`) REFERENCES `publication` (`id`);

--
-- Contraintes pour la table `publication`
--
ALTER TABLE `publication`
  ADD CONSTRAINT `publication_ibfk_1` FOREIGN KEY (`id_compte`) REFERENCES `compte` (`id`);

--
-- Contraintes pour la table `reaction_publication`
--
ALTER TABLE `reaction_publication`
  ADD CONSTRAINT `reaction_publication_ibfk_1` FOREIGN KEY (`id_pub`) REFERENCES `publication` (`id`),
  ADD CONSTRAINT `reaction_publication_ibfk_2` FOREIGN KEY (`id_compte`) REFERENCES `compte` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
