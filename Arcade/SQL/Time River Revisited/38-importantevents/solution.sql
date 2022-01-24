CREATE PROCEDURE solution()
BEGIN
    select *
    from `events`
    order by WEEKDAY(event_date) ASC, participants DESC;
END