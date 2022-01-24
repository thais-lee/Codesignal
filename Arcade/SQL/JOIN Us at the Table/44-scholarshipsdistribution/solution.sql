CREATE PROCEDURE solution()
BEGIN
    select candidate_id as student_id
    from candidates as c
    left join detentions as d on (c.`candidate_id`=d.`student_id`)
    where d.detention_date <=> NULL;
END