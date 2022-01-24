CREATE PROCEDURE solution()
BEGIN
	select id, name, surname
    from Suspect
    where LOWER(name) like 'b%'
        and LOWER(surname) like 'Gre_n'
        and height <= 170
    order by id asc;
END