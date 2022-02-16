#include <stdio.h>

/**
类型全局定义需要使用 typedef
**/

typedef struct Positon
{
	int x,y;
} Positon;

Positon move(Positon start, Positon to){

	 Positon result;

	result.x = start.x + to.x;
	result.y = start.y + to.y;
	return result;
}

int main(int argc, char const *argv[])
{

	 Positon result = {0,0};
	 Positon start = {0,0};
	 Positon end = {10,20};
	result = move(start,end);

	printf("%d %d\n", result.x,result.y);
	return 0;
}