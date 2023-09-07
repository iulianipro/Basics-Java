import java.util.HashMap;
import java.util.Map;

public class FibonacciCalculator {

    // Cache to store previously calculated Fibonacci numbers
    private static Map<Integer, Long> fibCache = new HashMap<>();

    /**
     * Calculates the nth Fibonacci number.
     *
     * @param n The position of the desired Fibonacci number.
     * @return long The nth Fibonacci number.
     * @throws IllegalArgumentException if n is non-positive.
     */
    public static long calculateFibonacci(int n) {
        if (n <= 0) {
            throw new IllegalArgumentException("n should be a positive integer.");
        }

        // Check if the Fibonacci number is already cached
        if (fibCache.containsKey(n)) {
            return fibCache.get(n);
        }

        // Base cases: F(0) = 0, F(1) = 1
        if (n == 1 || n == 2) {
            return 1;
        }

        // Calculate the Fibonacci number using dynamic programming
        long fibN = calculateFibonacci(n - 1) + calculateFibonacci(n - 2);

        // Cache the calculated Fibonacci number
        fibCache.put(n, fibN);

        return fibN;
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("The " + n + "th Fibonacci number is: " + calculateFibonacci(n));
    }
}
