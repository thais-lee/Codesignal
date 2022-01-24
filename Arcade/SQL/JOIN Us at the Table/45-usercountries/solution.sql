CREATE PROCEDURE solution()
BEGIN
    SELECT
        u.`id`,
        IFNULL(c.`country`, 'unknown') AS `country`
    FROM
        users u
    LEFT JOIN
        cities c ON c.city = u.city
    ORDER BY
        u.`id`;
END