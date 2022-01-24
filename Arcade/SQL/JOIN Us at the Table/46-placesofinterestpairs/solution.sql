CREATE PROCEDURE solution()
BEGIN
	select a.name as place1, b.name as place2
    from sights as a
    join sights as b on (a.name<b.name )
    where   POWER(a.x-b.x, 2) + POWER(a.y- b.y, 2) < 25
    order by place1, place2;
END