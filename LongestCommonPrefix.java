
class LongestCommonPrefix{

    public static void main(String[] args){
        

        String[] s = {"flkkower","flkkow","flkkight"};
        System.out.println(longestCommonPrefix(s));

    }

    static String longestCommonPrefix(String[] strs) {
        int length = 0;
        String subStr = "";
        boolean equals = true;
         for(int i=0; i < minLength(strs); i++ ){

            for(int j=0; j < strs.length-1; j++){
                if(!(strs[j+1].charAt(i)==strs[j].charAt(i)))
                    equals = false;       

            }

            if(equals)
                length++;
            else 
                break;
         }

         if(length > 0)
            subStr = strs[0].substring(0,length);
        
         return subStr;
     }

    static int minLength(String[] strs){
        int min = Integer.MAX_VALUE;

        for(String s: strs){
            if(s.length() < min)
                min = s.length();
        }
        
        return min;

    }

}