CREATE PROCEDURE solution()
BEGIN
	select name from Products order by price * quantity desc, name asc limit 1;
END