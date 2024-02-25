#include <ncurses.h>

// to compile with ncurses you have to use the flag -lncurses
// example: gcc HelloWorld.c -o HelloWorld_pr -lncurses

int main()
{
	initscr(); /*Start curses mode*/
	// print the string at 1 row down, 2 chars right
	mvprintw(1, 2, "Hello World!!");
	refresh(); /*Print it onto the real screen*/
	getch();
	endwin();
	return 0;
}
