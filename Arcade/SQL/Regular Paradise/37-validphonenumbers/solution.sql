CREATE PROCEDURE solution()
BEGIN
	SELECT *
    FROM phone_numbers
    WHERE 
    (
        phone_number LIKE "1-___-___-____"
        OR
        phone_number LIKE "(1)___-___-____"
    )
    AND phone_number REGEXP "^[\(\)0-9-]*$"
    ORDER BY surname;
END
/* ^: Khớp các kí tự đứng đầu một chuỗi. Nếu có nhiều cờ này thì nó còn khớp được cả các kí tự đứng đầu của mỗi dòng (sau kí tự xuống dòng).
Ví dụ: /^a/ sẽ không khớp được với 'a' trong "bcd a" vì 'a' lúc này không đứng đầu chuỗi, nhưng nó sẽ khớp "abc d" vì lúc này 'a' đã đứng đầu chuỗi.*/
/* $: So khớp ở cuối chuỗi. Nếu có flag m (multiline) thì nó sẽ so khớp với kí tự nằm ngay trước kí tự xuống dòng.*/
/* *: 	Cho phép kí tự trước nó lặp lại 0 lần hoặc nhiều lần.*/
/* */
