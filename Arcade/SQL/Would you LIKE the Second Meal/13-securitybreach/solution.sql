CREATE PROCEDURE solution()
BEGIN
    select * FROM users 
    WHERE attribute LIKE BINARY CONCAT('_%\%', first_name, '_', second_name, '\%%')
    order by attribute asc;
END