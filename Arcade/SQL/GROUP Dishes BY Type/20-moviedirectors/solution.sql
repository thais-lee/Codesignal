CREATE PROCEDURE solution()
BEGIN
	select director
    from moviesinfo
    where `year` > 2000
    group by director
    having sum(oscars) > 2
    order by director asc;
END