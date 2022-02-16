#include <stdio.h>

void newline(void){
	printf("line \n");
}

void threeLine(void){
	newline();
	newline();
	newline();
}

int main (void){
	printf("This program can call function\n");
	threeLine();
	return 0;
}