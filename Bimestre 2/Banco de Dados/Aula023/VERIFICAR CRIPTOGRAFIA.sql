USE Projeto_Spotify;

-- PROCEDURE PARA VERIFICAR SE A SENHA EM TEXTO BRUTO, CONFERE COM A SENHA CRIPTOGRAFADA.
-- SE POSITIVO = LOGGIN REALIZADO COM SUCESSO.
--
DELIMITER $$
CREATE PROCEDURE SP_VALIDA_LOGIN(
	IN paramIdUsuario INT,
    IN paramSenha VARCHAR(255), -- PARAMETRO QUE RECEBE A SENHA EM TEXTO BRUTO
    OUT retorno VARCHAR(255)
)
BEGIN
	SELECT
		CASE WHEN MD5(paramSenha) = senha
			THEN 'Loggin realizado com sucesso'
			ELSE 'Falha na autenticação'
		END
	INTO retorno
    FROM usuario
    WHERE
		idUsuario = paramIdUsuario;
END $$

CALL SP_VALIDA_LOGIN(3, 'RAMIREZ&88', @retorno);
SELECT @retorno;