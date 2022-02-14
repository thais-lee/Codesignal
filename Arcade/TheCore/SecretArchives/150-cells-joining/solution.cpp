vector<string> solution(vector<string> table, vector<vector<int>> coords) {
    const int H = table.size(), W = table[0].length();
    
    // lưu chỉ số các cạnh 
    std::vector<int> hi, vj;
    for (int r = 0; r < H; ++r) {
        if (table[r][0] == '+') {
            hi.push_back(r);
        }
    }
    for (int c = 0; c < W; ++c) {
        if (table[0][c] == '+') {
            vj.push_back(c);
        }
    }
    
    const int r1i = coords[1][0], r2i = coords[0][0]+1,
              r1 = hi[r1i], r2 = hi[r2i],  // r1, r2 là chỉ số cạnh trên và cạnh dưới của phần cần merge
              c1j = coords[0][1], c2j = coords[1][1]+1,
              c1 = vj[c1j], c2 = vj[c2j];  // c1, c2 là chỉ số cạnh trái, phải của phần cần merge
              
              
    // thay thế các cạnh nằm ngang bên tron
    for (int i = r1i+1; i < r2i; ++i) {
        for (int c = c1+1; c < c2; ++c) {
            table[hi[i]][c] = ' ';
        }
    }
    // thay thế các cạnh thẳng đứng bên trong
    for (int r = r1+1; r < r2; ++r) {
        for (int j = c1j+1; j < c2j; ++j) {
            table[r][vj[j]] = ' ';
        }
    }
    // thay thế các cạnh viền trên và dưới
    for (int j = c1j+1; j < c2j; ++j) {
        if (r1 == 0) table[0][vj[j]] = '-';
        if (r2 == H-1) table[H-1][vj[j]] = '-';
    }
    // thay thế các viền trái, phải
    for (int i = r1i+1; i < r2i; ++i) {
        if (c1 == 0) table[hi[i]][0] = '|';
        if (c2 == W-1) table[hi[i]][W-1] = '|';
    }

    return table;
}


