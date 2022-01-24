CREATE PROCEDURE solution()
BEGIN
    select distinct buyer_name winner
    from(
        select *, (select count(*) from purchases p2 where p.timestamp >= p2.timestamp) % 4 as cnt
        from purchases p
        order by 1
    ) b
    where cnt = 0
    order by 1;
END