CREATE PROCEDURE solution()
BEGIN
	select id, email_title, if(size<1024, CONCAT(0, ' Kb'), 
                if(size<1024*1024, CONCAT(FLOOR(size/1024), ' Kb'), 
                    CONCAT(FLOOR(size/(1024*1024)), ' Mb'))) as short_size
    from emails
    order by size desc;
END