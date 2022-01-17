//ý tưởng: làm trường hợp left_move, các trường hợp sẽ tương tự khi xoay left_move một số lần 90 độ
void rotate90(vector< vector<int> >& grid) {
    for(int i = 0; i < 3; i++)
        for(int j = i; j < 3 - i; j++) {
            int tmp = grid[i][j];
            grid[i][j] = grid[j][3 - i];
            grid[j][3 - i] = grid[3 - i][3 - j];
            grid[3 - i][3 - j] = grid[3 - j][i];
            grid[3 - j][i] = tmp;
        }
}

void move_left(vector< vector<int> >& grid) {
    //duyệt từng hàng từ trên xuống
    for(int i = 0; i < 4; i++) {
        stack<int> numbers;
        //các cột duyệt từ phải qua
        for(int j = 3; j >= 0; j--)
            if (grid[i][j] != 0)
                numbers.push(grid[i][j]);
        int index = 0;
        while(!numbers.empty()) {
            int number = numbers.top();
            numbers.pop();
            //2 số giống nhau thì num x2 
            if (!numbers.empty() && numbers.top() == number)    {
                number <<= 1;
                numbers.pop();
            }
            //gán các số sau bước di chuyển
            grid[i][index++] = number;
        }
        //nếu vẫn còn ô chưa điền số thì mặc định là 0
        while(index < 4)
            grid[i][index++] = 0;
    }
}

void rotate(int degree, vector< vector<int> >& grid) {
    while(degree)   { rotate90(grid); degree -= 90; }
}

std::vector<std::vector<int>> solution(std::vector<std::vector<int>> grid, std::string path) {
    for(int i = 0; i < path.size(); i++) {
        char direction = path[i];
        if (direction == 'L')   move_left(grid);
        else if (direction == 'R') { rotate(180, grid); move_left(grid); rotate(180, grid); }
        else if (direction == 'U') { rotate(90, grid); move_left(grid); rotate(270, grid); }
        else if (direction == 'D') { rotate(270, grid); move_left(grid); rotate(90, grid); }
    }
    return grid;
}
