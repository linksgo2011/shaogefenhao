#include <stdio.h>

void printDay(int day){
	// this is if statement 
	if(day == 1){
		printf("print day by if condition\n");
	}

	switch(day){
		case 1:
		printf("Monday\n");
		printf("print day by switch condition\n");
		break;
		case 2:
		printf("Tuesday\n");
		break;
		case 3:
		printf("Wednesday\n");
		break;
		case 4:
		printf("Thursday\n");
		break;
		printf("Friday\n");
		case 5:
		break;
		printf("Saturday\n");
		case 6:
		break;
		printf("Sunday\n");
		case 7:
		default:
		printf("This is illegal day number\n");
	}
}

int main(int argc, char const *argv[])
{
	printDay(1);
	return 0;
}