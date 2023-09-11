--Instructions
--Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

--Solution
SELECT month, 
CASE
    WHEN month < 4 
        THEN 1
    WHEN month < 7 
        THEN 2
    WHEN month < 10  
        THEN 3
    ELSE 4
END AS res
FROM quarterof;