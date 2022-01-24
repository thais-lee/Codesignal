CREATE PROCEDURE solution()
BEGIN
	select name
    from (
        (select 1 as department, name from pr_department order by date_joined desc limit 5)
        UNION ALL
       ( select 2 as department, name from it_department order by date_joined desc limit 5)
        UNION ALL
        (select 3 as department, name from sales_department order by date_joined desc limit 5)
    ) y
    order by department asc , name;
END