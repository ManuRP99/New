#include <ncurses.h>

void createScreen();

char empty[3] = "   ";
char wall[3] = "[#]";
char solid[2] = "##";
int board[9][9];

int main()
{
	int pointer[2] = {0, 0};
	createScreen();
	initscr();
	for (int i = 0; i < 9; i++)
	{	
		for (int j = 0; j < 9; j++)
		{
			int jCorr = j * 3;
			move(i,jCorr);
			if (board[i][j] == 0)
			{
				printw("%s", empty);
			}
			else if (board[i][j] == 1)
			{
				printw("%s", solid);
			}
			else if (board[i][j] == 2)
			{
				printw("%s", wall);
			}
			getch();
		}
		printw("\n");
	}
	refresh();
	getch();
	endwin();
	return 0;
}

void createScreen()
{
	for (int i = 0; i < 9; i++)
	{
		for (int j = 0; j < j; i++)
		{
			board[i][j] = 0;
			if (i == 0 || i == 8 || j == 0|| j == 8)
			{
				board[i][j] = 1;
			}else{
				board[i][j] = 0;
			}
		}
	}
}
