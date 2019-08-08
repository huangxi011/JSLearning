#include<iostream>
using namespace std;

bool isDigit(char a) {
	if (a - '0' == 0 || a - '0' == 1 || a - '0' == 2 || a - '0' == 3 ||
		a - '0' == 4 || a - '0' == 5 || a - '0' == 6 || a - '0' == 7 ||
		a - '0' == 8 || a - '0' == 9)
		return true;

	return false;
}

void testInteger(string y) {
	for (int i = 0; i < y.length(); i++)//字符串内容是否为整数
		if (!isDigit(y[i])) {
			cout << "输入内容不是整数......" << endl;
			return;
		}

	
}

int main()
{
	int a, b,r1,r2,gcd=-1;
	cout << "请输入两个正整数" << endl;
	cin >> a >> b;
	while (a < 0 || b < 0||cin.fail())
	{
		cout << "请按规定输入！";
		cin >> a >> b;
	} 
	if (a < b){int t = a; a = b; b = t;}
	r1 = a - a / b * b;
	if (r1 == 0)gcd = b;
	else
	{
		r2 = b - b / r1 * r1;
		while (gcd == -1)
		{
			r2 == 0 ? gcd = r1 : r1 = r1 - r1 / r2 * r2;
			r1 == 0 ? gcd = r2 : r2 = r2 - r2 / r1 * r1;
		}
	}
	cout << "最大公约数为" << gcd << endl;
	system("pause");
}