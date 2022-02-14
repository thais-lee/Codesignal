string solution(string notation) {
    vector<vector<char>> board(8,vector<char>(8));
    int x = 0, y = 0;
    //chuyển đổi string đầu vào thành mảng 2 chiều 
    //mỗi vị trí không có quân cờ sẽ được thay bằng ' '
    for (int c : notation)
    {
        if (c == '/') {
            x++;
            y = 0;
        } else if ('1' <= c && c <= '8') {
            while (c > '0') {
                board[x][y++] = ' ';
                c--;
            }
        } else {
            board[x][y++] = c;
        }
    }
    
    string ans;
    //vì xoay bàn cờ 90độ nên sẽ duyệt từng cột từ dưới lên
    for (int i = 0; i < 8; i++)
    {
        int space = 0;
        for (int j = 7; j >= 0; j--)
            if (board[j][i] != ' ') {
                if (space > 0) {
                    ans += '0' + space;
                    space = 0;
                }
                ans += board[j][i];
            } else {
                space++;
            }
        if (space > 0)
            ans += '0' + space;
        if (i < 7)
            ans += '/';
    }
    return ans;
}
