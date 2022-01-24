CREATE PROCEDURE solution()
BEGIN
    SELECT project_name, team_lead, income FROM Projects ORDER by internal_id;
END