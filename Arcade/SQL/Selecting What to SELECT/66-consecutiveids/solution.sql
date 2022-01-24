CREATE PROCEDURE solution()
BEGIN
	alter table itemIds add newId INT not null auto_increment unique;
    select id oldId, newId
    from itemIds;
END