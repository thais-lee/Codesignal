CREATE PROCEDURE solution()
BEGIN
	select country, 
    sum((leisure_activity_type='Adventure park')*number_of_places) AS adventure_park,
    sum((leisure_activity_type='Golf')*number_of_places) AS golf,
    sum((leisure_activity_type='River cruise')*number_of_places) AS river_cruise,
    sum((leisure_activity_type='Kart racing')*number_of_places) AS kart_racing
    from countryActivities
    group by country
    order by country;
    
END