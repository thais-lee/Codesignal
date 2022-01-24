CREATE PROCEDURE solution()
BEGIN
	select Name, ID from Grades
    where 2 * final > midterm1 + midterm2
    order by left(name, 3) asc, id asc;
END