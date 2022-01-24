CREATE PROCEDURE solution()
BEGIN
    SET @points = CONCAT('MULTIPOINT(',
        (SELECT GROUP_CONCAT(CONCAT(x, ' ', y) )
        FROM places),
        ')');  
    SELECT ST_AREA(ST_ConvexHull(ST_GeomFromText(@points))) AS area;  
END
/*
Group_concat -> 0 0;1 2;2 1;5 1;5 2
concat -> Multipoint(0 0;1 2;2 1;5 1;5 2)
points = " Multipoint(0 0;1 2;2 1;5 1;5 2)"
ST_Geom -> trả về hình dạng của points
ST_convex-> tìm hình bao
St_area -> trả về diện tích của hình 
*/