import java.util.Scanner;

public class ejercicio {
    private char[][] board;
    private char currentPlayer;

    public ejercicio() {
        board = new char[3][3];
        currentPlayer = 'X';

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                board[i][j] = ' ';
            }
        }
    }

    public void printBoard() {
        System.out.println("-------------");
        for (int i = 0; i < 3; i++) {
            System.out.print("| ");
            for (int j = 0; j < 3; j++) {
                System.out.print(board[i][j] + " | ");
            }
            System.out.println("\n-------------");
        }
    }

    public boolean makeMove(int row, int col) {
        if (row < 0 || row >= 3 || col < 0 || col >= 3 || board[row][col] != ' ') {
            return false;
        }

        board[row][col] = currentPlayer;
        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
        return true;
    }

    public boolean checkWin() {

        for (int i = 0; i < 3; i++) {
            if (board[i][0] == currentPlayer && board[i][1] == currentPlayer && board[i][2] == currentPlayer) {
                return true;
            }
        }


        for (int i = 0; i < 3; i++) {
            if (board[0][i] == currentPlayer && board[1][i] == currentPlayer && board[2][i] == currentPlayer) {
                return true;
            }
        }

        if ((board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2] == currentPlayer) ||
            (board[0][2] == currentPlayer && board[1][1] == currentPlayer && board[2][0] == currentPlayer)) {
            return true;
        }

        return false;
    }

    public static void main(String[] args) {
        ejercicio game = new ejercicio();
        Scanner scanner = new Scanner(System.in);

        System.out.println("¡Bienvenido al juego de Tres en Raya!");

        while (true) {
            System.out.println("Turno del jugador " + game.currentPlayer);
            game.printBoard();

            System.out.print("Ingrese la fila (0, 1, 2): ");
            int row = scanner.nextInt();
            System.out.print("Ingrese la columna (0, 1, 2): ");
            int col = scanner.nextInt();

            if (game.makeMove(row, col)) {
                if (game.checkWin()) {
                    System.out.println("¡El jugador " + game.currentPlayer + " gana!");
                    game.printBoard();
                    break;
                }
            } else {
                System.out.println("Movimiento no válido. Inténtalo de nuevo.");
            }
        }

        scanner.close();
    }
}
