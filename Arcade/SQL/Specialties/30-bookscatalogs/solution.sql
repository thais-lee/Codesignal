CREATE PROCEDURE solution()
BEGIN
	    SELECT
        ExtractValue(catalogs.`xml_doc`, '//book[$1]//author') AS `author`
    FROM
        catalogs
    ORDER BY
        `author` ASC;
END