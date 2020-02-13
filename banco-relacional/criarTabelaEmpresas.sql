CREATE TABLE IF NOT EXISTS empresas (
    id INT unsigned not null auto_increment,
    nome VARCHAR(255) not null,
    cnpj int unsigned,
    PRIMARY KEY (id),
    UNIQUE key(cnpj)
);

-- cidaes_empresas

CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id INT unsigned not null,
    cidade_id int unsigned not null,
    sede TINYINT(1) not null,
    PRIMARY KEY (empresa_id,cidade_id)
);
