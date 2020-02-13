--Soma
select 
    regiao as 'Região',
    sum(populacao) as Total
from estados
group by regiao
order by Total desc
--Media
select 
    regiao as 'Região',
    avg(populacao) as Total
from estados
group by regiao
order by Total desc