
class ImplementStr{


    public static void main(String[] args){
        
        String s = "aaallaa";

        System.out.println(s.contains("bba"));

        System.out.println(s.indexOf("ll"));

    }

    static int strStr(String haystack, String needle) {
        if(needle.length()==0)
            return 0;
        int index = haystack.indexOf(needle);
        return index;
    }

}