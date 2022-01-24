CREATE PROCEDURE solution()
BEGIN
	SELECT ROUND(EXP(sum(LOG(LENGTH(characters))))) AS combinations FROM discs;
END
-- để nhân liên tiếp thì tính tổng của các log(logarit) rồi dùng exp để làm mất loga sẽ được phép nhân liên tiếp