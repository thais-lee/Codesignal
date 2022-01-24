CREATE PROCEDURE solution()
BEGIN

    DROP TEMPORARY TABLE IF EXISTS l;
    CREATE TEMPORARY TABLE l (letter char(1) not null, primary key(letter));
    INSERT INTO l VALUES 
    ('a'),('b'),('c'),('d'),('e'),('f'),('g'),('h'),('i'),('j'),('k'),('l'),('m'),('n'),('o'),
    ('p'),('q'),('r'),('s'),('t'),('u'),('v'),('w'),('x'),('y'),('z');
    select letter, total, occurrence, max_occurrence, COUNT(*) max_occurrence_reached
    from (
        select letter, sum(oc) as total, count(*) as occurrence, max(oc) as max_occurrence
        from (
            select letter, str, char_length(str) - char_length(REPLACE(str, letter,'')) as oc 
            /*tìm số lần xuất hiện của mỗi chữ trong str*/
            from strs, l
        ) e 
        where e.oc > 0 group by letter
    ) g
    inner join strs on max_occurrence = char_length(str) - char_length(REPLACE(str, letter, ''))
    group by letter
    order by letter;
END