std::string solution(std::string table, int row, int column) {
    size_t start = 7;
    
    for (int i = 0; i <= row; i++) {
        if ((start = table.find("<tr>", start)) == std::string::npos) {
            //nếu find() không tìm thấy thì giá trị nó trả về là npos
            return "No such cell";
        }
                
        start += 4;
    }
    
    table = table.substr(start, table.find("</tr>", start + 1) - start);//lấy substring của row cần tìm
    start = 0;
    
    for (int j = 0; j <= column; j++) {        
        //duyệt theo cột
        if ((start = table.find("<td>", start)) == std::string::npos) {
            return "No such cell";
        } 
        
        start += 4;
    }
    
    return table.substr(start, table.find('<', start + 1) - start);
}
