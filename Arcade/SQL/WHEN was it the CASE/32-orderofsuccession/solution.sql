CREATE PROCEDURE solution()
BEGIN
    select if(gender='F', CONCAT('Queen ',name), CONCAT('King ', name)) as name
    from Successors
    order by birthday asc;
END