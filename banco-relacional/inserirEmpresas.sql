INSERT INTO EMPRESAS
    (nome, cnpj)
VALUES
    ('Bradesco',953292492342),
    ('Vale', 2313123123123),
    ('Cielo',3213131231);

ALTER Table empresas Modify cnpj VARCHAR(14)

SELECT * From empresas
SELECT * From cidades

INSERT into empresas_unidades
    (empresa_id,cidade_id,sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1)