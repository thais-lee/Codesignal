CREATE PROCEDURE solution()
BEGIN

    select size, 
        sum(shots = 0) as undamaged,
        sum(shots between 1 and size - 1) as partly_damaged,
        sum(shots = size) as sunk
    from (
        select (bottom_right_x - upper_left_x + bottom_right_y - upper_left_y) + 1 as size,
        sum((target_x between upper_left_x AND bottom_right_x) 
            AND (target_y between upper_left_y AND bottom_right_y)) as shots
        from locations_of_ships, opponents_shots
        group by locations_of_ships.id
    ) as t
    group by size
    order by size;
END
