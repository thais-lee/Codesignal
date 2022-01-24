CREATE PROCEDURE solution()
BEGIN
    select id, hostname
    from (
        select *, 
            SUBSTRING_index(hostname, '.', -1) as h1,
            SUBSTRING_index(hostname, '.', -2) as h2,
            SUBSTRING_index(hostname, '.', -3) as h3
        from hostnames
    ) host order by h1, if(h1=h2, "", h2), if(h2=h3, "", h3);
END