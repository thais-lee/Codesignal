CREATE PROCEDURE solution()
BEGIN
   select * 
        from ips 
        where is_ipv4(ip) and ip not in ("1.1.1.1", "0.0.0.0")
        order by id;
END