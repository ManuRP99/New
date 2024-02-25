#include <stdio.h>
#include <stdlib.h>


int main()
{
	double num1;
	double num2;
	printf("First number: ");
	scanf("%lf", &num1);
	printf("Second number: ");
	scanf("%lf", &num2);
	printf("Sum:  \t%f\n", num1 + num2);
	printf("Diff: \t%f\n", num1 - num2);
	printf("Mult: \t%f\n", num1 * num2);
	printf("Div:  \t%f\n", num1 / num2);
	return 0;
}
