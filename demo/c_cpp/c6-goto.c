#include <stdio.h>



void jumpPrint(int position){

	print:{
		printf("jumped here\n");
	}

	if(position == 2){
		// overwite it 
		position = 0;
	}
}

int main(int argc, char const *argv[])
{
	jumpPrint(2);
	return 0;
}