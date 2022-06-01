USE Projeto_Spotify;

-- PROCEDURE SEM PARAMETRO NENHUM PARA RETORNAR A DATA ATUAL FORMATADA
DELIMITER $$
CREATE PROCEDURE SP_GET_DATE()
BEGIN
    -- CORPO DA SINTAXE SQL
    SELECT
       CONCAT(
         dayname(current_date()), ', ',
         DAY(current_date()), ', ',
         monthname(currente_date()), ', ',
         year(current_date()));
END $$

CALL SP_GET_DATE();

