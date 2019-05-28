
class FactorialTrailingZeroes{

    public static void main(String[] args){
        
        System.out.println(trailingZeroes(5));

    }

    static int trailingZeroes(int n) {
        int fac = 1;
        for(int i=2; i <= n; i++){
            fac *= i;
        }
        int tzLength = 0;
        while(fac > 0){
            if(fac%10==0)
                tzLength++;
            else 
                break;
            fac /= 10;
        }
        return tzLength;

    }

}