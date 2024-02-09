-- Problem 1:
SELECT email FROM customers ORDER BY (email);

-- Problem 2:
SELECT id FROM orders 
WHERE customer_id=( -- Finds all the order Ids that relate to Elizabeths Id
    SELECT id FROM customers WHERE fname = 'Elizabeth' AND lname = 'Crocker' -- Gets Id of Elizabeth Crocker
);

-- Problem 3
SELECT SUM(num_cupcakes) FROM orders WHERE processed=false;

-- Problem 4
SELECT name, SUM(orders.num_cupcakes) FROM cupcakes
LEFT JOIN orders ON (cupcakes.id = orders.cupcake_id) -- LEFT JOIN shows all the rows from the cupcakes table, even if
GROUP BY(name)                                        -- the order for it is NULL.
ORDER BY(name);

-- Problem 5
SELECT email, SUM(orders.num_cupcakes) AS amount FROM customers 
JOIN orders ON (customers.id = orders.customer_id)
GROUP BY(email)
ORDER BY(amount) DESC;

-- Problem 6
SELECT DISTINCT fname, lname, email FROM customers -- distinct makes it so duplicates won't appear.
JOIN orders ON (customers.id = orders.customer_id) -- joins and gives us access to be able to see if the order is processed
JOIN cupcakes ON (orders.cupcake_id = cupcakes.id) -- joins and gives us access to check if the cupcake is funfetti
WHERE cupcakes.name = 'funfetti' AND orders.processed = true;
