
class LongestSubstring{


    public static void main(String[] args){
        
        String s = "fgabffabcadefh";
        System.out.println(lengthOfLongestSubstring(s));
    }

    static int lengthOfLongestSubstring(String s) {
        int length = 1;
        int maxLenght = 0;

        for(int i=0; i < s.length()-1; i+=length){
            length = 1;
            for(int j=1; j <= s.length()-i-1; j++){
                if(s.charAt(i+j) != s.charAt(i+j-1) )
                    length++;
                else
                    break;
            }
            if(length > maxLenght)
                maxLenght = length;
        }

        return maxLenght;

    }

}