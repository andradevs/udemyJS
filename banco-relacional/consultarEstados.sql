SELECT * FROM estados

SELECT nome as 'Nome do Estado', sigla from estados
WHERE regiao = 'Sul'

SELECT nome, regiao, populacao FROM estados
WHERE populacao >=10
ORDER BY populacao desc