CREATE PROCEDURE solution()
BEGIN
	select ifnull(sum(employees.salary = maxs)* maxs - sum(employees.salary = mins)* mins, 0) as salary_diff
    from employees, (
        select max(salary) maxs,
                min(salary) mins
        from 
            employees
    ) max_min ;
END