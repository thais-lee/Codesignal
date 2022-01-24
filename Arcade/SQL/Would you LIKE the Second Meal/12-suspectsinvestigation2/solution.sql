CREATE PROCEDURE solution()
BEGIN
	select id, name, surname
    from Suspect
    where height <= 170
        or LOWER(name) not like 'b%'
        or LOWER(surname) not like 'Gre_n'
    order by id asc;
END