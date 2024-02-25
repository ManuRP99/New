
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <time.h>

char board[3][3];
const char PLAYER = 'x';
const char COMPUTER = 'o';

void resetBoard();
void printBoard();
int checkFreeSpaces();
void playerMove();
void computerMove();
char checkWinner();
void printWinner(char);


int main() 
{
	char winner = ' ';
	resetBoard();

	while(winner == ' ' && checkFreeSpaces() != 0)
	{
		// substitute function printboard
		printBoard();
		playerMove();
		winner = checkWinner();
		if (winner != ' ' || checkFreeSpaces() == 0)
		{
			break;
		}
		computerMove();
		winner = checkWinner();
		if (winner != ' ' || checkFreeSpaces() == 0)
		{
			break;
		}
	}

	printBoard();
	printWinner(winner);
	return 0;
}



void resetBoard()
{
	for (int i = 0; i < 3; i++)
	{
		for (int j = 0; j < 3; j++)
		{
			board[i][j] = ' ';
		}
	}
}

void printBoard()
{
	char emptyRow1[3] = "   ";
	char emptyRow2[3] = "   ";
	char emptyRow3[3] = "   ";
	char playerRow1[3] = "@ @";
	char playerRow2[3] = " @ ";
	char playerRow3[3] = "@ @";
	char computerRow1[3] = " @ ";
	char computerRow2[3] = "@ @";
	char computerRow3[3] = " @ ";
	
	char firstBuffer[3];
	char secondBuffer[3];
	char thirdBuffer[3];


	// check whats on each space 
	for (int i = 0; i < 3; i++)
	{
		firstBuffer = board[i][0];
		secondBuffer = board[i][1];
		thirdBuffer = board[i][2];
	}
	//print
	for (int i = 0; i < 3; i++)
	{
		for (int j = 0; j < 3; j++)
		{
			if (firstBuffer == ' ')
			{
				printf("%s", emptyRow1);
			} 
			else if (firstBuffer == 'x')
			{
				printf("%s", playerRow1);
			}
			else if (firstBuffer == 'o')
			{
				printf("%s", computerRow1);
			}
			//second col
			if (secondBuffer == ' ')
			{
				printf("%s", emptyRow1);
			} 
			else if (secondBuffer == 'x')
			{
				printf("%s", playerRow1);
			}
			else if (secondBuffer == 'o')
			{
				printf("%s", computerRow1);
			}
			//third col
			if (thirdBuffer == ' ')
			{
				printf("%s", emptyRow1);
			} 
			else if (thirdBuffer == 'x')
			{
				printf("%s", playerRow1);
			}
			else if (thirdBuffer == 'o')
			{
				printf("%s", computerRow1);
			}
		}
	}
}

int checkFreeSpaces()
{
	int freeSpaces = 9;
	for (int i = 0; i < 3 ; i++){
		for (int j = 0; j < 3 ; j++){
			if (board[i][j] != ' '){
				freeSpaces--;
			}	
		} 
	}
	return freeSpaces;
}

void playerMove()
{
	int x;
	int y;
	do 
	{
		printf("Enter row: ");
		scanf("%d", &x);
		x--;
		
		printf("Enter col: ");
		scanf("%d", &y);
		y--;
		
		if(board[x][y] != ' ')
		{
			printf("Invalid.");
		}
		else
		{
			board[x][y] = PLAYER;
			break;
		}
	} while (board[x][y] != ' ');
}

void computerMove()
{
	// seed
	srand(time(0));
	int x;
	int y;
	if(checkFreeSpaces() > 0)
	{
		do 
		{
			x = rand() % 3;
			y = rand() % 3;
		} while (board[x][y] != ' ');
		board[x][y] = COMPUTER;
	}
	else
	{
		printWinner(' ');
	}
}
char checkWinner()
{
	// check rows
	for (int i = 0; i < 3 ; i++)
	{
		if (board[i][0] == board[i][1] && board[i][0] == board[i][2])
		{
			return board[i][0];
		}
	}
	// check cols
	for (int i = 0; i < 3 ; i++)
	{
		if (board[0][i] == board[1][i] && board[0][i] == board[2][i])
		{
			return board[0][i];
		}
	}
	// diagonals
	if (board[0][0] == board[1][1] && board[0][0] == board[2][2])
	{
		return board[0][0];
	}
	if (board[0][2] == board[1][1] && board[0][2] == board[2][0])
	{
		return board[0][2];
	}
	return ' ';
}
void printWinner(char winner)
{
	if (winner == PLAYER)
	{
		printf("You win!");
	}
	else if(winner == COMPUTER)
	{
		printf("You lose!");
	}
	else 
	{
		printf("It's a tie!");
	}
}

