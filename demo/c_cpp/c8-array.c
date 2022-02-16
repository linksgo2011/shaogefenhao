#include <stdio.h>
#include <stdlib.h>

#define N 20

int a[N];

void genRandom(int uperBound){
	for (int i = 0; i < N; ++i)
	{
		a[i] = rand() % uperBound;
	}
}

int main(int argc, char const *argv[])
{
	genRandom(10);
	for (int i = 0; i < N; ++i)
	{
		printf("%d\n", a[i]);
	}
	return 0;
}