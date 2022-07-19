-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: nexus-carrier
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user_device`
--

DROP TABLE IF EXISTS `user_device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_device` (
  `iduser_device` int NOT NULL AUTO_INCREMENT,
  `device_name_d` varchar(45) DEFAULT NULL,
  `phone_number_d` varchar(45) DEFAULT NULL,
  `plan_id_d` int DEFAULT NULL,
  `user_device_first_name` varchar(45) DEFAULT NULL,
  `user_device_last_name` varchar(45) DEFAULT NULL,
  `id` bigint NOT NULL,
  `plan_name_d` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`iduser_device`),
  UNIQUE KEY `iduser_device_UNIQUE` (`iduser_device`),
  UNIQUE KEY `phone_number_d_UNIQUE` (`phone_number_d`),
  KEY `device_name_idx` (`device_name_d`) /*!80000 INVISIBLE */,
  KEY `phone_number_idx` (`phone_number_d`),
  KEY `plan_name_idx` (`plan_id_d`),
  CONSTRAINT `device_name` FOREIGN KEY (`device_name_d`) REFERENCES `device_model` (`device_name`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `phonenumber` FOREIGN KEY (`phone_number_d`) REFERENCES `phone_number` (`phone_number`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `planID` FOREIGN KEY (`plan_id_d`) REFERENCES `user_plan` (`iduser_plan`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1102039435 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_device`
--

LOCK TABLES `user_device` WRITE;
/*!40000 ALTER TABLE `user_device` DISABLE KEYS */;
INSERT INTO `user_device` VALUES (1102039425,'Google Pixel 5a','2105555556',12345685,'Robbie','Perez',0,NULL),(1102039426,'Apple iPhone13','9132223344',12345685,'David','Perez',0,NULL),(1102039427,'Apple iPhone13','9569269082',12345685,'David','Perez',0,NULL),(1102039428,'Apple iPhone13','7777772222',12345684,'Paul','Lee',0,NULL),(1102039430,'Apple iPhone13','2223134456',12345684,'Paul','Lee',0,NULL),(1102039431,'Google Pixel 5a','3331112232',12345684,'Robert','Lee',0,NULL),(1102039433,'Apple iPhone13','9993134456',12345683,'Paul','Lee',0,NULL),(1102039434,'Google Pixel 5a','9991112232',12345683,'Robert','Lee',0,NULL);
/*!40000 ALTER TABLE `user_device` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-18 23:07:54
