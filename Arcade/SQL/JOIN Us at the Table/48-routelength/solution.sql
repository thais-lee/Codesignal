CREATE PROCEDURE solution()
BEGIN
	select format(SUM(SQRT(POWER(a.x-b.x, 2)+POWER(a.y-b.y, 2))), 9) as total
    from cities as a
    join cities as b on a.id - b.id = 1 ;
END