//hàm chuyển đổi định dạng thời gian
std::string l2sr_time(std::string time) {//time MM:SS.xx
    time = "00:" + time + "0";  // 00:MM:SS.xx0
    time[time.find('.')] = ',';  // 00:MM:SS,xx0
    if (time[3] >= '6') {
        time[1] = '1';  // 01:MM:SS,xx0
        time[3] -= 6;
    }
    return time;
}

std::vector<std::string> solution(std::vector<std::string> lrcLyrics, std::string songLength) {
    const int N = lrcLyrics.size();
    
    std::vector<std::string> times(N+1), lines(N);
    
    const int TIME_LENGTH = std::string("HH:MM.SS").length(), 
                PREFIX_LENGTH = std::string("[HH:MM.SS] ").length();
    
    for (int i = 0; i < N; ++i) {
        
        times[i] = l2sr_time(lrcLyrics[i].substr(1, TIME_LENGTH));
        // truyền vào hàm chuyển đổi subtring thời gian
        
        if (lrcLyrics[i].length() >= PREFIX_LENGTH) {
            lines[i] = lrcLyrics[i].substr(PREFIX_LENGTH);
        }
        //lấy phần lời bài hát
        
    }
    
    times[N] = songLength + ",000";
    
    std::vector<std::string> subrip;
    
    subrip.reserve(4*N-1);//cấp phát lại
    
    for (int i = 1; i <= N; ++i) {
        subrip.push_back(std::to_string(i));
        subrip.push_back(times[i-1] + " --> " + times[i]);//chèn thời gian
        subrip.push_back(lines[i-1]);//chèn lời
        if (i < N) subrip.push_back("");
    }
    
    return subrip;
}
