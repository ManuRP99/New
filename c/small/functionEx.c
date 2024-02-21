#include <stdio.h>
#include <stdlib.h>


int main()
{
	sayHi("Manu", 24);
	sayHi("Paco", 35);
	sayHi("Pepe", 40);
	return 0;
}

void sayHi(char name[4], int age){
	printf("Hello %s! You are %d\n", name, age);
	
}


