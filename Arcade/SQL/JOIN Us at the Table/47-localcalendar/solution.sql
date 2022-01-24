CREATE PROCEDURE solution()
BEGIN
	SELECT e.event_id, date_format(
               date_add(e.date, interval timeshift minute),
               if(hours = 24, "%Y-%m-%d %H:%i", "%Y-%m-%d %I:%i %p")
           ) formatted_date
    from events as e
    join settings as s on e.user_id=s.user_id;
END