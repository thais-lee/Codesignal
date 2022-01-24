create FUNCTION a(c text) returns int 
loop 
    set c = (select base from inheritance where derived = c);
    if c is null or c = 'NUMBER' then return ORD(c);
    end if;
end loop;
/*ord function return numeric value*/
CREATE PROCEDURE solution()
BEGIN
    SELECT var_name, type var_type
    FROM variables
    WHERE a(type);
END