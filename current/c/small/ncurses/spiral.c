
#include <ncurses.h>
#include <unistd.h>


void spiral();
void reset();

int main()
{
	initscr(); /*Start curses mode*/

	//20r x 40 c 
	//starting at 3, 8


	for (int i = 0; i < 10; i++)
	{
		reset();
		refresh();
		sleep(1);
		spiral();
		refresh();
		sleep(1);
	}

	reset();
	mvprintw(13, 28, " ");
	move(0, 0);
	refresh();
	getch();

	


	endwin();
	return 0;
}

void spiral()
{
	mvprintw(13, 28, " ");
	mvprintw(13, 27, " ");
	mvprintw(14, 27, " ");
	mvprintw(15, 27, " ");
	mvprintw(15, 28, " ");
	mvprintw(16, 28, " ");
	mvprintw(16, 29, " ");
	mvprintw(16, 30, " ");
	mvprintw(15, 30, " ");
	mvprintw(15, 31, " ");
	mvprintw(14, 31, " ");
	mvprintw(14, 32, " ");

	mvprintw(13, 32, " ");
	mvprintw(12, 32, " ");
	mvprintw(11, 32, " ");
	mvprintw(11, 31, " ");
	mvprintw(10, 31, " ");
	mvprintw(10, 30, " ");
	mvprintw( 9, 30, " ");
	mvprintw( 9, 29, " ");
	mvprintw( 9, 28, " ");
	mvprintw( 9, 27, " ");
	mvprintw( 9, 26, " ");
	mvprintw(10, 26, " ");
	mvprintw(10, 25, " ");
	mvprintw(11, 25, " ");
	mvprintw(11, 24, " ");
	mvprintw(12, 24, " ");
	mvprintw(12, 23, " ");

	mvprintw(13, 23, " ");
	mvprintw(14, 23, " ");
	mvprintw(15, 23, " ");
	mvprintw(16, 23, " ");
	mvprintw(16, 24, " ");
	mvprintw(17, 24, " ");
	mvprintw(18, 24, " ");
	mvprintw(18, 25, " ");
	mvprintw(19, 25, " ");
	mvprintw(19, 26, " ");
	mvprintw(19, 27, " ");
	mvprintw(20, 27, " ");

	mvprintw(20, 28, " ");
	mvprintw(20, 29, " ");
	mvprintw(20, 30, " ");
	mvprintw(20, 31, " ");
	mvprintw(19, 31, " ");
	mvprintw(19, 32, " ");
	mvprintw(19, 33, " ");
	mvprintw(18, 33, " ");
	mvprintw(18, 34, " ");
	mvprintw(17, 34, " ");
	mvprintw(17, 35, " ");
	mvprintw(16, 35, " ");
	mvprintw(15, 35, " ");
	mvprintw(15, 36, " ");
	mvprintw(14, 36, " ");
	mvprintw(13, 36, " ");

	move(0, 0);
}


void reset()
{
	for (int row = 3; row < 23; row++)
	{
		for (int col = 8; col < 48; col++)
		{
			mvprintw(row, col, "#");
		}
	}
	move(0, 0);
}
