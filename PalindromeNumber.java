
class PalindromeNumber{

    public static void main(String[] args){
     System.out.println(isPalindrome(121));   
    }

    static boolean isPalindrome(int x) {

        if(x < 0)
            return false;

        int num = x;
        int reverse = 0;
        do{
            reverse *= 10;
            reverse += num % 10;
            num /= 10;
        }while(num > 0);
        
        return reverse == x;

    }


}