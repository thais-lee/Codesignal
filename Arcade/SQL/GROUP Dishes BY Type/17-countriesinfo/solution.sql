CREATE PROCEDURE solution()
BEGIN
	select count(*) as number,
        AVG(population) as average,
        SUM(population) as total
    from countries;
END
