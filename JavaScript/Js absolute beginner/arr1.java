import java.util.Scanner;

public class arr1 {

    public static int maximizeArray() {
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();
        int[] arr = new int[input];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        int andAnswer = arr[0] & arr[1];
        for (int i = 2; i < arr.length; i++) {
            andAnswer &= arr[i];
        }
        for (int i = 0; i < arr.length; i++) {
            arr[i] += 1;
            int incrementAnswer = arr[0] & arr[1];
            for (int j = 2; j < arr.length; j++) {
                incrementAnswer &= arr[j];
            }
            if (incrementAnswer >= andAnswer) {
                return arr[i];
            }
            arr[i] -= 1;
        }

        /*
         * int incrementAnswer = 1; for (int i = 0; i < arr.length; i++) { arr[i] += 1;
         * for (int j = 1; j < arr.length; i++) { incrementAnswer &= arr[j - 1] &
         * arr[j];
         * 
         * } if (incrementAnswer >= andAnswer) { return i + 1; }
         * 
         * arr[i] -= 1; incrementAnswer = 1;
         * 
         * }
         */
        return 1;
    }

    public static void main(String[] args) {
        int num = maximizeArray();
        System.out.println(num);
    }
}
