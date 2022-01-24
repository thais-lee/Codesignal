CREATE PROCEDURE solution()
BEGIN
	select id, if(sum(expenditure_sum) < value ,0, sum(expenditure_sum) - value) as loss
    from 
        expenditure_plan, allowable_expenditure
    where WEEK(monday_date) BETWEEN left_bound AND right_bound
    group by 1;
END