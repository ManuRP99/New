#include <stdio.h> 
#include <stdlib.h>

#define ANSI_COLOR_BLUE   "\x1b[34m"
#define ANSI_COLOR_RED   "\x1b[31m"

// board size here and in the for loops
char board[9][9];
char player = '#';
char bot = '!';
int row = 4;
int col = 4;
int bot_row = 0;
int bot_col = 0;

void printBoard();
void resetBoard();
void zeros();

void moveBot();

int main()
{
	//initial position
	int game = 1;
	resetBoard();
	board[row][col] = player;
	board[bot_row][bot_col] = bot;
	printBoard();
	resetBoard();
	while (game == 1)
	{
		//orders from player
		int move_row;
		int move_col;
		printf("Row:\n>");
		scanf("%d", &move_row);
		row += move_row;
		printf("Col:\n>");
		scanf("%d", &move_col);
		//move player
		col += move_col;
		board[row][col] = player;
		moveBot();	
		if (0 > bot_row || 8 < bot_row || 0 > bot_col || 8 < bot_col)
		{
			bot_row = 0;
			bot_col = 0;
			board[bot_row][bot_col] = bot;
		}
		board[bot_row][bot_col] = bot;
		printBoard();
		resetBoard();
		//death by out of map
		if (0 > row || 8 < row || 0 > col || 8 < col)
		{
			zeros();
			printBoard();
			printf("You fell off the world.");
			return 0;
		}
		// death by bot
		if (row == bot_row && col == bot_col)
		{
			printf("You've been killed.");
			return 0;
		}
	} 
	return 0;
}


void resetBoard()
{
	for (int i = 0; i < 9; i++)
	{
		for (int j = 0; j < 9;j ++)
		{
			board[i][j] = ' ';
		}
	}
}

void zeros()
{
	for (int i = 0; i < 9; i++)
	{
		for (int j = 0; j < 9;j ++)
		{
			board[i][j] = '0';
		}
	}
}


void printBoard() 
{
	for (int i = 0; i < 9; i++)
	{
		printf(ANSI_COLOR_BLUE "\t|");
		for (int j = 0; j < 9; j++)
		{
			printf(ANSI_COLOR_RED "%c", board[i][j]);
			printf(ANSI_COLOR_BLUE "|");
		}
		printf("\n");
	}
}

void moveBot()
{
	if (row > bot_row && col > bot_col)
	{
		bot_row++;
		bot_col++;
	}
	else if (row < bot_row && col < bot_col)
	{
		bot_row--;
		bot_col--;
	}
	
	else if (bot_row != row)
	{
		if (bot_row < row)
		{
			bot_row++;
		}
		if (bot_row > row)
		{
			bot_row--;
		}

	}
	else if (bot_col != col)
	{
		if (bot_col < col)
		{
			bot_col++;
		}
		if (bot_col > col)
		{
			bot_col--;
		}
	}
}
