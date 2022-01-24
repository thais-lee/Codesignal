DROP PROCEDURE IF EXISTS orderAnalytics;
CREATE PROCEDURE orderAnalytics()
BEGIN
    drop table  if exists order_analytics;
    create table order_analytics AS
    select id, YEAR(order_date) as year, QUARTER(order_date) as quarter, type, price*quantity as total_price
    from orders
    order by id;

    SELECT *
    FROM order_analytics
    ORDER by id;
END;
