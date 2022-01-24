CREATE PROCEDURE solution()
BEGIN
    select f.flight_id, number_of_seats - ifnull(pc.c, 0) as free_seats
    from flights f 
    left join planes p on p.plane_id = f.plane_id
    left join (
        select count(*) c, flight_id
        from purchases 
        group by flight_id) pc
    on pc.flight_id = f.flight_id
    order by f.flight_id;
END