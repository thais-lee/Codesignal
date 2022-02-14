vector<int> solution(string tree) {
    int distance = -1;
    std::vector<std::vector<int>> layers = {};
    //tạo mảng 2 chiều, gộp các phần tử có cùng độ sâu vào 1 hàng, độ sâu tăng dần thì chỉ số hàng cũng tăng dần
    int value;
    for(int i = 0; i < tree.length(); i++)
    {
        if(tree[i] == '(')
        {
            distance++;
        }
        else if(tree[i] == ')')
        {
            distance--;
        }
        else if(tree[i] >= '0' && tree[i] <= '9')
        {
            value = 0;
            while(tree[i] >= '0' && tree[i] <= '9')
            {
                value*=10;
                value+=tree[i]-'0';
                i++;
            }
            if(distance == layers.size())
            {
                layers.push_back({});
            }
            layers[distance].push_back(value);
        }
        std::cout << i << std::endl;
    }
    return layers[layers.size()-1];
}
