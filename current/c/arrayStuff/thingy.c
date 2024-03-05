#include <stdio.h>

int main(void)
{
    int filler = 0;
    int board[4][4];
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; i++)
        {
            board[i][j] = filler;
        }
    }

    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            printf("%i", board[i][j]);
        }
        printf("\n");
    }


    return 0;
}
