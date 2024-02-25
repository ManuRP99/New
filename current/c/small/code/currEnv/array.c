#include <stdio.h>
#include <stdlib.h>
#include <time.h>

char coinflip();
char board[3][3];
void render();
void empty();
void pounds();
void windows();


// main
int main()
{
	// pounds();
	// render();
	// empty();
	// render();
	// printf("\n|---|---|---|");
	// for (int i = 0; i < 10; i++){
	// 	printf("%d", coinflip());
	// }
	windows();
	render();
	windows();
	render();
	windows();
	render();
	windows();
	render();
	windows();
	render();
	return 0;
}


// functions
void render(){
	//printf("\n|---|---|---|");
	for (int i = 0; i < 3; i++){
		printf("\n|---|---|---|");
		printf("\n| %c | %c | %c |", board[i][0], board[i][1], board[i][2]);
	}
	// printf("\n|   |   |   |");
}
void empty(){
	for (int i = 0; i < 3; i++){
		for (int j = 0; j < 3; j++){
			board[i][j] = ' ';
		}
	}
}
void pounds(){
	for (int i = 0; i < 3; i++){
		for (int j = 0; j < 3; j++){
			board[i][j] = '#';
		}
	}
}

char coinflip() {
	int result = rand() % 2;
	if (result == 0) {
		return "0";
	}
	if (result == 1) {
		return "1";
	}
}


void windows(){
	for (int i = 0; i < 3; i++){
		for (int j = 0; j < 3; j++){
			board[i][j] = coinflip();
		}
	}
}
