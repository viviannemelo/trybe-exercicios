-- Requisito 1
SELECT city FROM sakila.city;
-- Requisito 2
SELECT * FROM sakila.city;
-- Requisito 3, A Primary_key geralmente e a primeira coluna da tabela.
SELECT city_id FROM sakila.city order by city_id;
-- Requisito 4
SELECT COUNT(city) FROM sakila.city;
-- Requisito 5
SELECT * FROM sakila.city LIMIT 10 OFFSET 3;
-- Requisito 6
SELECT actor_id, first_name FROM sakila.actor ORDER BY first_name;
-- segunda forma concatena nome e sobrenome e ordena por essa concatenação, 
-- requisito não pede isso foi só uma forma de fazer.
SELECT actor_id, CONCAT(first_name, ' ', last_name) AS name FROM sakila.actor 
ORDER BY name;
-- Requisito 7
SELECT actor_id FROM sakila.actor ORDER BY actor_id DESC LIMIT 5;
-- Requisito 8
SELECT CONCAT(first_name, ' ', last_name) AS full_name,
CONCAT(last_update,'-', actor_id) AS location FROM sakila.actor;
-- mostra como colocar vírgula e hífen.
SELECT CONCAT(address, '-', district, ', ', phone) AS location 
FROM sakila.address;
-- Requisito 9
SELECT address2 FROM sakila.address
WHERE address2 IS NOT NULL;
-- Requisito 10
SELECT postal_code FROM sakila.address
WHERE postal_code IS NOT NULL;
-- Requisito 11
SELECT rental_duration, film_id FROM sakila.film
WHERE rental_duration>=3
ORDER BY rental_duration DESC, film_id ASC;
-- Requisito 12
SELECT film_id FROM sakila.film
WHERE film_id>=30 AND film_id<=39;
-- Requisito 13
SELECT release_year FROM sakila.film
WHERE release_year='2006';
-- Requisito 14
SELECT film_id FROM sakila.film
WHERE film_id=1 OR film_id=3;


