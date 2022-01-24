DROP FUNCTION IF EXISTS response;
CREATE FUNCTION response(name VARCHAR(40)) RETURNS VARCHAR(200) DETERMINISTIC
BEGIN
SET @fname := SUBSTRING_INDEX(name, ' ', 1);
    SET @lname := SUBSTRING_INDEX(name, ' ', -1);
    RETURN CONCAT('Dear ', 
        UPPER(MID(@fname, 1, 1)),
        LOWER(MID(@fname, 2)),
        ' ',
        UPPER(MID(@lname, 1, 1)),
        LOWER(MID(@lname, 2)),
        '! We received your message and will process it as soon as possible. Thanks for using our service. FooBar On! - FooBarIO team.');
END;

CREATE PROCEDURE customerMessages()
BEGIN
    SELECT id, name, response(name) AS response
    FROM customers;
END;
