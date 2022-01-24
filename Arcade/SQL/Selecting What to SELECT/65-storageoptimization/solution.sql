CREATE PROCEDURE solution()
BEGIN
	select id, 'name' as column_name, name as value 
    from workers_info
    where name is not null
    
    union 
    
    select id, 'date_of_birth' as column_name, date_of_birth as value
    from workers_info
    where date_of_birth is not NULL
    
    UNION
    
    select id, 'salary' as column_name, salary as value
    from workers_info
    where salary is not NULL
    
    order by id, field(column_name, 'name', 'date_of_birth', 'salary');
END