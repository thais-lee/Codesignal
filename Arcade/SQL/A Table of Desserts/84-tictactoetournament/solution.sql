CREATE PROCEDURE solution()
BEGIN
	    SELECT
        name,
        SUM(result) points,
        COUNT(*) played,
        SUM(CASE result WHEN 2 THEN 1 ELSE 0 END) won,
        SUM(CASE result WHEN 1 THEN 1 ELSE 0 END) draw,
        SUM(CASE result WHEN 0 THEN 1 ELSE 0 END) lost
    FROM
    (
    SELECT name_naughts name,
        CASE
            WHEN board LIKE 'OOO______' THEN -1
            WHEN board LIKE '___OOO___' THEN -1
            WHEN board LIKE '______OOO' THEN -1
            WHEN board LIKE 'O__O__O__' THEN -1
            WHEN board LIKE '_O__O__O_' THEN -1
            WHEN board LIKE '__O__O__O' THEN -1
            WHEN board LIKE 'O___O___O' THEN -1
            WHEN board LIKE '__O_O_O__' THEN -1
            WHEN board LIKE 'XXX______' THEN  1
            WHEN board LIKE '___XXX___' THEN  1
            WHEN board LIKE '______XXX' THEN  1
            WHEN board LIKE 'X__X__X__' THEN  1
            WHEN board LIKE '_X__X__X_' THEN  1
            WHEN board LIKE '__X__X__X' THEN  1
            WHEN board LIKE 'X___X___X' THEN  1
            WHEN board LIKE '__X_X_X__' THEN  1
            ELSE 0
        END * -1 + 1 result
    FROM results
    UNION ALL
    SELECT name_crosses name,
        CASE
            WHEN board LIKE 'OOO______' THEN -1
            WHEN board LIKE '___OOO___' THEN -1
            WHEN board LIKE '______OOO' THEN -1
            WHEN board LIKE 'O__O__O__' THEN -1
            WHEN board LIKE '_O__O__O_' THEN -1
            WHEN board LIKE '__O__O__O' THEN -1
            WHEN board LIKE 'O___O___O' THEN -1
            WHEN board LIKE '__O_O_O__' THEN -1
            WHEN board LIKE 'XXX______' THEN  1
            WHEN board LIKE '___XXX___' THEN  1
            WHEN board LIKE '______XXX' THEN  1
            WHEN board LIKE 'X__X__X__' THEN  1
            WHEN board LIKE '_X__X__X_' THEN  1
            WHEN board LIKE '__X__X__X' THEN  1
            WHEN board LIKE 'X___X___X' THEN  1
            WHEN board LIKE '__X_X_X__' THEN  1
            ELSE 0
        END + 1 result
    FROM results
    ) a
    GROUP BY name
    ORDER BY points DESC, played, won DESC, name
    ;
   
END