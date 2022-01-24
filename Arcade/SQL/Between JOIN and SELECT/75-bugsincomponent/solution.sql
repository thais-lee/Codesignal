CREATE PROCEDURE solution()
BEGIN
	SELECT b.title bug_title,
            c.title component_title,
            (SELECT COUNT(*) 
                FROM BugComponent 
                WHERE component_id = id) bugs_in_component
    
    FROM Bug b, Component c, BugComponent
    WHERE id = component_id 
        AND bug_num = num 
        AND (select count(*) 
            from BugComponent 
            where bug_num = num)>1
    order by bugs_in_component desc, id, num;
END