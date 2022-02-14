int solution(string expr) {
    
    int b = 0, p = 0, pmul, padd;
    //p, padd, pmul lưu chỉ số
    int mul = -1, add = -1;
    for (char c : expr) {
        if (c == '(') {
            b++;
        } else if (c == ')') {
            b--;
        } else if (c == '*' && mul < b) {
            mul = b;
            pmul = p;
        } else if (c == '+' && add < b) {
            add = b;
            padd = p;
        }
        p++;
    }
    return add > mul ? padd : pmul;
}
