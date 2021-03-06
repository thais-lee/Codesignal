CREATE PROCEDURE solution()
BEGIN
    SELECT summary
    FROM 
    (
        SELECT CONCAT(' Total miles driven by all drivers combined: ', 
             SUM(miles_logged)) summary, '                        ' extra, 0 ord
        FROM inspections
        UNION 
        SELECT CONCAT(' Name: ',driver_name,
             '; number of inspections: ',COUNT(miles_logged),
             '; miles driven: ',SUM(miles_logged)), driver_name extra, 1 ord
        FROM inspections 
        GROUP BY driver_name
        UNION 
        SELECT CONCAT('  date: ',date,'; miles covered: ',miles_logged),
             CONCAT(driver_name, date), 2 ord
        FROM inspections 
    ) D 
     ORDER BY extra, ord;
END