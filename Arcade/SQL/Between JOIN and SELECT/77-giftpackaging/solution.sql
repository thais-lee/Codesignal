CREATE PROCEDURE solution()
BEGIN
	select package_type, count(1) as number
    from packages, gifts g
    where package_type = (select package_type
                            from packages as p
                            where p.length >= g.length
                            and p.width >= g.width
                            and p.height >= g.height
                            order by length*height*width 
                            limit 1
                            )
    group by package_type order by package_type;
END