-- MySQL Script generated by MySQL Workbench
-- Wed Apr 27 14:55:58 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_latinos
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_latinos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_latinos` DEFAULT CHARACTER SET utf8 ;
USE `db_latinos` ;

-- -----------------------------------------------------
-- Table `db_latinos`.`LATINOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_latinos`.`LATINOS` (
  `nome` VARCHAR(50) NOT NULL,
  `titulo_album` VARCHAR(50) NULL,
  `musica` VARCHAR(50) NULL,
  `genero` VARCHAR(50) NULL,
  PRIMARY KEY (`nome`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
