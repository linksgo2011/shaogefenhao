#include <stdio.h>

int main(int argc, char const *argv[])
{
	int a[9][9];

	for (int row = 1; row <= 9; ++row)
	{
		for (int colums = 1; colums <= 9; ++colums)
		{
			if(row >= colums){
				a[row][colums] = row*colums;
			}
		}
	}

	for (int i = 1; i <= 9; ++i)
	{
		for (int j = 1; j <= 9; ++j)
		{
			if(i>=j){
				printf("%d ",a[i][j]);
			}
		}
		printf("\n");
	}
	return 0;
}