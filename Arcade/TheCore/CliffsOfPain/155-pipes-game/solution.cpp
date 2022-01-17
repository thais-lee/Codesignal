

int solution(std::vector<std::string> state) {
  vector<vector<int>> sources, 
                directions, 
                temp, 
                possibleDir = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};//up, right, down, left
  set<vector<int>> cellsWithWater;
  

  // thêm các nguồn và các hướng khả thi, có tối đa 4 hướng với mỗi nguồn
  for (int i = 0; i < state.size(); i++) {
    for (int j = 0; j < state[i].size(); j++) {
      if (state[i][j] >= 'a' && state[i][j] <= 'z') {
        if (i != 0) {
            
        //bot
        //nếu ô hàng trên có đường ống hướng xuống thì ô hiện tại có thể hướng lên
          if (state[i-1][j] == '1' || state[i-1][j] == '7' || state[i-1][j] == '3' || state[i-1][j] == '4') {
            sources.push_back({i, j, state[i][j]});
            directions.push_back(possibleDir[0]);    
          }
        }
        
        //top
        if (i != state.size()-1) {
          if (state[i+1][j] == '1' || state[i+1][j] == '5' || state[i+1][j] == '6' || state[i+1][j] == '7') {
            sources.push_back({i, j, state[i][j]});
            directions.push_back(possibleDir[2]);    
          }
        }
        
        //right
        if (j != 0) {
          if (state[i][j-1] == '2' || state[i][j-1] == '3' || state[i][j-1] == '6' || state[i][j-1] == '7') {
            sources.push_back({i, j, state[i][j]});
            directions.push_back(possibleDir[3]);
          }
        }
        
        //left
        if (j != state[i].size()-1) {
          if (state[i][j+1] == '2' || state[i][j+1] == '4' || state[i][j+1] == '5' || state[i][j+1] == '7') {
            sources.push_back({i, j, state[i][j]});
            directions.push_back(possibleDir[1]);
          }
        }
      }
    }
  }
  
  // mỗi lần lặp sẽ là 1 bước đi đối với các trường hợp
  for (int count = 0; count < 69; count++) {
    temp.empty();
    
    // Start 
    for (int i = 0; i < sources.size(); i++) {
      int x = sources[i][1], y = sources[i][0];
      
      // Only check if source not reached
      if (state[y][x] < 'A' || state[y][x] > 'Z') {
        // Check edges first
        if (y == 0 && directions[i][0] == -1) return -cellsWithWater.size();
        if (y == state.size()-1 && directions[i][0] == 1) return -cellsWithWater.size();
        if (x == 0 && directions[i][1] == -1) return -cellsWithWater.size();
        if (x == state[0].size()-1 && directions[i][1] == 1) return -cellsWithWater.size();

        // bước đi mỗi lượt
        sources[i][0] += directions[i][0];
        sources[i][1] += directions[i][1];
        
        // Update temp
        if (!isalpha(state[sources[i][0]][sources[i][1]]))
          temp.push_back({sources[i][0], sources[i][1]});

        //kiểm tra lỗi và cập nhật hướng đi        
        //top
        if (directions[i][0] == -1) {
            //kiểm tra nếu ô tiếp theo là nguồn
          if (isalpha(state[y-1][x])) {
            if (state[y-1][x] + 32 != sources[i][2]) return -cellsWithWater.size();
          }
          //kiểm tra nếu ô bên trên có đường ống hướng xuống
          else if (state[y-1][x] != '1' && state[y-1][x] != '3' && state[y-1][x] != '4' && state[y-1][x] != '7') 
            return -cellsWithWater.size();
            //if next cell is pipe '3' or '4' must change direction
          if (state[y-1][x] == '3') directions[i] = {0, 1};
          if (state[y-1][x] == '4') directions[i] = {0, -1};
        }
        
        //bot
        //tương tự như trên
        else if (directions[i][0] == 1) {
          if (isalpha(state[y+1][x])) {
            if (state[y+1][x] + 32 != sources[i][2]) return -cellsWithWater.size();
          }
          else if (state[y+1][x] != '1' && state[y+1][x] != '5' && state[y+1][x] != '6' && state[y+1][x] != '7') 
            return -cellsWithWater.size();
          if (state[y+1][x] == '5') directions[i] = {0, -1};
          if (state[y+1][x] == '6') directions[i] = {0, 1};
        }
        
        //left
        else if (directions[i][1] == -1) {
          if (isalpha(state[y][x-1])) {
            if (state[y][x-1] + 32 != sources[i][2]) return -cellsWithWater.size();
          }
          else if (state[y][x-1] != '2' && state[y][x-1] != '3' && state[y][x-1] != '6' && state[y][x-1] != '7') 
            return -cellsWithWater.size();          
          if (state[y][x-1] == '3') directions[i] = {1, 0};
          if (state[y][x-1] == '6') directions[i] = {-1, 0};
        }
        
        //right
        else if (directions[i][1] == 1) {
          if (isalpha(state[y][x+1])) {
            if (state[y][x+1] + 32 != sources[i][2]) return -cellsWithWater.size();
          }
          else if (state[y][x+1] != '2' && state[y][x+1] != '4' && state[y][x+1] != '5' && state[y][x+1] != '7') return -cellsWithWater.size();
          if (state[y][x+1] == '4') directions[i] = {1, 0};
          if (state[y][x+1] == '5') directions[i] = {-1, 0};
        }
      }
    }
    
    
    // thêm các ô chứa nước 
    for (auto c : temp) {
      cellsWithWater.insert(c);
    }
  }
  //console để debug
  for (int i = 0; i < sources.size(); i++) {
    cout << "(" + to_string(sources[i][0]) + ", " + to_string(sources[i][1]) + ") - " + "(" + to_string(directions[i][0]) + ", " + to_string(directions[i][1]) + ")" << endl; 
  }
  return cellsWithWater.size();
}
