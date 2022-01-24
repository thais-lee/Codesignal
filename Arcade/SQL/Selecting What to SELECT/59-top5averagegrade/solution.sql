CREATE PROCEDURE solution()
BEGIN
	select round(avg(grade), 2) as average_grade
    from (
        select grade
        from students
        order by grade DESC
        limit 5
    ) as a;
END