CREATE DATABASE MESA_COMPARTILHADA;
use MESA_COMPARTILHADA;

CREATE TABLE ENDERECO_ED (
  Endereco_Ed int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Logradouro_Ed varchar(50),
  Numero_Ed char(6),
  Cep_Ed char(8),
  Complemento_Ed varchar(20),
  Cidade_Ed varchar(20),
  Bairro_Ed varchar(20)
);

CREATE TABLE ENDERECO_ER(
  Endereco_Er int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Logradouro_Er varchar(50),
  Numero_Er char(6),
  Cep_Er char(8),
  Complemento_Er varchar(20),
  Cidade_Er varchar(20),
  Bairro_Er varchar(20)
);

CREATE TABLE EMPRESA_DOADORA(
 Cod_Ed int not null AUTO_INCREMENT PRIMARY KEY,
 Nome_Ed varchar(50),
 Cnpj_Ed char(14),
 Tipo_Ed varchar(20),
 Email_Ed varchar(30),
 Senha_Ed varchar(20),
 Status_Ed varchar(7),
 Endereco_Ed int,
 FOREIGN key (Endereco_Ed) REFERENCES ENDERECO_ED(Endereco_Ed)
);


CREATE TABLE EMPRESA_RECEBEDORA(
 Cod_Er int not null AUTO_INCREMENT PRIMARY KEY,
 Nome_Er varchar(50),
 Cnpj_Er char(14),
 Tipo_Er varchar(20),
 Email_Er varchar(30),
 Senha_Er varchar(20),
 Status_Er varchar(7),
 Endereco_Er int,
 FOREIGN key (Endereco_Er) REFERENCES ENDERECO_Er(Endereco_Er)
);

CREATE TABLE DOACAO(
 Cod_Doacao int not null AUTO_INCREMENT PRIMARY KEY,
 Nome_Doacao varchar(50),
 Nome_Doadora varchar(50),
 Desc_Doacao varchar(30),
 Qtd_Doacao int, 
 Status_Doacao varchar(10),
 Observacao_Doacao varchar(30),
 Data_Postada_Doacao datetime,
 Data_Encerrada_Doacao datetime,
 Cod_Ed int,
 Cod_Er int,
 FOREIGN KEY (Cod_Ed) REFERENCES EMPRESA_DOADORA(Cod_Ed),
 FOREIGN KEY (Cod_Er) REFERENCES EMPRESA_RECEBEDORA(Cod_Er)
  );
