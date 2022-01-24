CREATE PROCEDURE solution()
BEGIN
	select dep_name from departments d
    where not exists (
        select * from employees e where e.department = d.id 
    );
END