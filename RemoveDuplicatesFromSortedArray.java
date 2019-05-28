import java.util.ArrayList;

class RemoveDuplicatesFromSortedArray{

    public static void main(String[] args){
        
        int[] nums = { 0,0,1,1,1,2,2,3,3,4};
        System.out.println(removeDuplicates(nums));

    }

    static int removeDuplicates(int[] nums) {
        ArrayList<Integer> reNums = new ArrayList<>();

        for(int i=0; i < nums.length;i++){
            if(!reNums.contains(nums[i]))
                reNums.add(nums[i]);
        }
        nums = new int[reNums.size()];
        for (int i = 0; i < reNums.size(); i++) {
            nums[i] = reNums.get(i);
        }
        
        return nums.length;

    }


}