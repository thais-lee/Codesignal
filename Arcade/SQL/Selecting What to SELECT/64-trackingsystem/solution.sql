CREATE PROCEDURE solution()
BEGIN
    select distinct anonymous_id as anonym_id,
    (
        SELECT event_name 
        from tracks b 
        where a.anonymous_id = b.anonymous_id and b.user_id is NULL
        order by received_at desc 
        limit 1
    ) last_null,
    (
        SELECT event_name
        from tracks b
        where a.anonymous_id = b.anonymous_id and b.user_id is not NULL
        order by received_at ASC
        limit 1
    ) first_notnull
    from tracks a
    order by anonym_id;
END