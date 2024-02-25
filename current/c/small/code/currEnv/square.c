
#include <stdio.h>
#include <stdlib.h>


int main()
{

	char top[] = " ______ \n";
	char vertical[] = "|      |\n";
	char content[4];
	printf("Enter 4 characters: ");
	scanf("%s", content);
	char bottom[] = "|______|\n";
	printf("%s", top);
	printf("%s", vertical);
	printf("| %s |\n", content);
	printf("%s", bottom);
	return 0;
}
