
class TwoSum{


    public static void main(String[] args){
        
        int[] nums = {2, 7, 11, 15};
        int targets = 9;

        int[] ind = twoSum(nums,targets);

        System.out.println(ind.length);

        for(int i: ind)
            System.out.println(i);


    }
    static int[] twoSum(int[] nums, int target) {
        int a=0;
        int b=0;
        
        for(int i=0; i < nums.length-1; i++){
            for(int j=i+1; j < nums.length; j++){
                if(nums[i]+nums[j]==target){
                    a=i;
                    b=j;
                }
            }
            
        }
        
        return new int[]{a,b};
            
    
    }


}