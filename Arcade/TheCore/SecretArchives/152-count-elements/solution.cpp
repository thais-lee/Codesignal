int solution(string s) {
    int ans = 0;
    for(int i = 0; i < s.size(); i++) {
        if(s[i] >= '0' && s[i] <= '9') {//đếm số
            ans++; 
            while(i + 1 < s.size() && (s[i + 1] >= '0' && s[i + 1] <='9'))
                i++;
        }else if(s[i] == '"') {//đếm string
            ans++; 
            while(i + 1 < s.size() && s[i + 1] != '"')
                i++;
            i++;
        }else if((i + 4 <= s.size() && s.substr(i, 4) == "true") || 
                 (i + 5 <= s.size() && s.substr(i, 5) == "false")) ans++;
    }
    return ans;
}
