CREATE PROCEDURE solution()
BEGIN
	select p1.id id1, (
        select p2.id
        from positions p2
        where p2.id <> p1.id
        order by power(p1.x-p2.x, 2) + power(p1.y-p2.y, 2) asc limit 1
        ) id2
    from positions p1;
END