
#include <stdio.h>
#include <stdlib.h>


// Right now if you input a space it will take whats after it as the age input
int main()
{
	char name[20];
	int age;
	printf("Enter your name :\n");
	scanf("%s", name);
	printf("Enter your age :\n");
	scanf("%d", &age);
	printf("%s is %d years old", name, age);

	return 0;
}
