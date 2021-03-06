CREATE PROCEDURE tableSecurity()
BEGIN
    CREATE OR REPLACE VIEW emp
    AS SELECT id, name, year(date_joined) as date_joined, '-' as salary
    from employees;

    SELECT id, name, date_joined, salary
    FROM emp
    ORDER BY id;
END
