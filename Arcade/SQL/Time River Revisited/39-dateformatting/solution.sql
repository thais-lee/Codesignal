CREATE PROCEDURE solution()
BEGIN
	select DATE_FORMAT(date_str,'%Y-%m-%d') as date_iso
    from documents;
END