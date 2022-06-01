USE Projeto_Spotify;

-- PROCEDURE PARA VERIFICAR SE DUAS STRING SÃO IGUAIS 
DELIMITER $$
CREATE PROCEDURE SP_VALIDA_STRINGS_IGUAIS(
	IN paramPrimeiraString VARCHAR(255),
    INOUT paramSegundaString VARCHAR(255)
)
BEGIN
	IF paraPrimeiraString = paramSegundaString
		THEN SET paramSegundaString = 'String são iguais';
	ELSE
		SET paramSegundaString = 'String são diferentes';
    END IF;
END $$

SET @paramSegundaString = 'MILENA';
CALL SP_VALIDA_STRINGS_IGUAIS ('MILENA', @paramSegundaString);
SELECT @paramSegundaString;