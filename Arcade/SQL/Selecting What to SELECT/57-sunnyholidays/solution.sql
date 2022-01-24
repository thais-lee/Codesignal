CREATE PROCEDURE solution()
BEGIN
	select h.holiday_date as ski_day
    from holidays h
    join weather w on w.sunny_date = h.holiday_date;
END