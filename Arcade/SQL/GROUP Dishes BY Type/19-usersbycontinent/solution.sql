CREATE PROCEDURE solution()
BEGIN
    SELECT continent, sum(users) as user
    from countries
    group by continent
    order by user DESC;
END