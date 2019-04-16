
class ReverseInteger {

    public static void main(String[] args) {

        System.out.println(reverse(321));

    }

    static int reverse(int x) {
        int org = x;
        int reverse = 0;
        do {
            int remaining = x % 10;
            reverse *= 10;
            reverse += remaining;
            x /= 10;
        } while (x != 0);
        int result=reverse;
        do {
            int remaining = result % 10;
            x *= 10;
            x += remaining;
            result /= 10;
        } while (result != 0);
        System.out.println(x);
        if(org != x)
            reverse = 0;
        return reverse;

    }

}