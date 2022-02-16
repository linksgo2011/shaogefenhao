#include <stdio.h>


void printLines(int count){
	for (int i = 0; i < count; ++i)
	{
		printf("*****\n");
	}
}

int main(int argc, char const *argv[])
{
	printLines(5);
	return 0;
}