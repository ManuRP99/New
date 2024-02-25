#include <stdio.h>
#include <stdlib.h>


int main()
{
	int input;
	scanf("%d", &input);
	//printf("%d", input);
	if (input % 2 == 0)
	{
		printf("even");
	}
	else
	{
		printf("odd");
	}
	return 0;
}
