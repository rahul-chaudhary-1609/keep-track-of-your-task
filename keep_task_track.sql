-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: keep_task_track
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `task_status_history`
--

DROP TABLE IF EXISTS `task_status_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_status_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `task_id` int NOT NULL,
  `status` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `task_id` (`task_id`),
  CONSTRAINT `task_status_history_ibfk_1` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_status_history`
--

LOCK TABLES `task_status_history` WRITE;
/*!40000 ALTER TABLE `task_status_history` DISABLE KEYS */;
INSERT INTO `task_status_history` VALUES (1,2,1,'2023-06-25 06:55:35','2023-06-25 06:55:35'),(2,3,1,'2023-06-25 06:56:17','2023-06-25 06:56:17'),(3,4,1,'2023-06-25 06:56:31','2023-06-25 06:56:31'),(4,5,1,'2023-06-25 06:56:43','2023-06-25 06:56:43'),(5,6,1,'2023-06-25 06:57:24','2023-06-25 06:57:24'),(6,2,2,'2023-07-25 07:01:24','2023-07-25 07:01:24'),(7,3,2,'2023-08-25 07:01:28','2023-08-25 07:01:28'),(8,4,3,'2023-07-25 07:01:34','2023-07-25 07:01:34'),(9,5,3,'2023-08-25 07:01:38','2023-08-25 07:01:38'),(10,2,4,'2023-08-25 07:01:43','2023-08-25 07:01:43'),(11,3,4,'2023-08-25 07:21:34','2023-08-25 07:21:34'),(12,4,4,'2023-07-25 07:21:38','2023-07-25 07:21:38'),(13,4,2,'2023-08-25 07:21:45','2023-08-25 07:21:45'),(14,3,2,'2023-09-25 07:21:49','2023-09-25 07:21:49'),(15,2,2,'2023-09-25 07:21:53','2023-09-25 07:21:53');
/*!40000 ALTER TABLE `task_status_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `status` tinyint NOT NULL DEFAULT '1' COMMENT '0=> inactive, 1=> active, 2=> open, 3=> in_progress, 4=> completed',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (2,'post letter','need to post letter to delhi',2,'2023-06-25 06:55:35','2023-09-25 07:21:53'),(3,'goto gym','go to gym',2,'2023-06-25 06:56:17','2023-09-25 07:21:49'),(4,'play some game','play some game',2,'2023-06-25 06:56:31','2023-09-25 07:21:45'),(5,'have lunch','have lunch',3,'2023-06-25 06:56:43','2023-06-25 07:01:38'),(6,'learn somthing new','lern atleadt one new thing',1,'2023-06-25 06:57:24','2023-06-25 06:57:24');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-25 13:31:49
