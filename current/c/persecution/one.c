#include <stdio.h> 
#include <stdlib.h>

#define ANSI_COLOR_BLUE   "\x1b[34m"
#define ANSI_COLOR_RED   "\x1b[31m"

// board size here and in the for loops
char board[5][5];

void printBoard();
void resetBoard();
void zeros();

int main()
{
	resetBoard();
	printBoard();
	zeros();
	printBoard();
	return 0;
}


void resetBoard()
{
	for (int i = 0; i < 5; i++)
	{
		for (int j = 0; j < 5;j ++)
		{
			board[i][j] = ' ';
		}
	}
}

void zeros()
{
	for (int i = 0; i < 5; i++)
	{
		for (int j = 0; j < 5;j ++)
		{
			board[i][j] = '0';
		}
	}
}


void printBoard() 
{
	for (int i = 0; i < 5; i++)
	{
		printf(ANSI_COLOR_BLUE "\t|");
		for (int j = 0; j < 5; j++)
		{
			printf(ANSI_COLOR_RED "%c", board[i][j]);
			printf(ANSI_COLOR_BLUE "|");
		}
		printf("\n");
	}
}
