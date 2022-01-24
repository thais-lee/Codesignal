CREATE PROCEDURE solution()
BEGIN
	select name 
    from people_hobbies
    where FIND_IN_SET('reading', hobbies) AND FIND_IN_SET('sports', hobbies);
END