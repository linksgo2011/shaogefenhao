#include <stdio.h>


int factorial(int n){
	if(n==0){
		return 1;
	}else{
		return factorial(n-1)*n;
	}
}

int main(int argc, char const *argv[])
{
	int result = factorial(5);
	printf("%d\n", result);
	return 0;
}