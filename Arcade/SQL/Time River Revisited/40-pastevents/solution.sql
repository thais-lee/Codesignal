CREATE PROCEDURE solution()
BEGIN
	select name, event_date
    from Events
    where datediff((select max(event_date) from Events), event_date) between 1 and 7
    order by event_date desc;
END