CREATE PROCEDURE solution()
BEGIN
	select aa.actor actor, age
    from actor_ages aa
    inner join starring_actors sa 
        on sa.actor = aa.actor
    inner join movies m 
        on m.movie = sa.movie_name
    where m.genre = (
        select genre 
        from movies
        group by genre
        order by count(*) desc 
        limit 1
    ) 
    order by age desc, aa.actor;
END