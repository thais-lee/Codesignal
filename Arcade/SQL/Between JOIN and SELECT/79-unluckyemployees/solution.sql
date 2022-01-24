CREATE PROCEDURE solution()
BEGIN
    SET @i = 0;
    SELECT * 
    FROM (
      SELECT d.name AS dep_name
        ,COUNT(DISTINCT e.id) AS emp_number
        
        ,IFNULL(SUM(salary),0) AS total_salary
      FROM Department d
      LEFT JOIN Employee e ON e.department = d.id
      GROUP BY d.id
      HAVING COUNT(1) < 6
      ORDER BY total_salary DESC, emp_number DESC, d.id
    ) t
    HAVING (@i := @i + 1) % 2 = 1;
END