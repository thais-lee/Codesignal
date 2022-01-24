create function trans (letter varchar(10)) returns int 
begin 
    return 
        case
            when letter = 'I' then 1
            when letter = 'V' then 5
            when letter = 'X' then 10
            when letter = 'L' then 50
            when letter = 'C' then 100
            when letter = 'D' then 500
            else 1000
        end;
end;
create function compile(sym varchar(100)) returns int
begin 
    set sym = REVERSE(sym);
    set @result = trans(SUBSTR(sym, 1, 1));
    while(LENGTH(sym) > 1) do 
        set @char1 = trans(SUBSTRING(sym, 1, 1));
        set @char2 = trans(SUBSTRING(sym, 2, 1));
        set @result = @result + if(@char1 > @char2, -@char2, @char2);
        set sym = SUBSTRING(sym, 2);
    end while;
    return @result;
end;
CREATE PROCEDURE solution()
BEGIN

SELECT chapter_name FROM book_chapters
ORDER BY compile(chapter_number);
END
