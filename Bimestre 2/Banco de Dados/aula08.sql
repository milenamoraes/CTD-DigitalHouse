CREATE TABLE usuario (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	sobrenome VARCHAR(50),
	email VARCHAR(100) NOT NULL UNIQUE,
	data_nascimento DATE
);

ALTER TABLE usuario 
ADD telefone VARCHAR(50);

INSERT INTO usuario (nome, sobrenome, email, data_nascimento, telefone)
VALUES ('Milena', 'Moraes', 'milena@gmail.com', '1998-01-19', 953322344);

UPDATE usuario SET 
nome = "Karina",
sobrenome= "Martins"
WHERE id = 1;

DELETE FROM usuario WHERE id = 1;