CREATE PROCEDURE solution()
BEGIN
	select YEAR(date) as `year`, 
        QUARTER(date) AS quarter, 
        sum(profit)-sum(loss) as net_profit
    from accounting
    group by `year`, quarter;

END