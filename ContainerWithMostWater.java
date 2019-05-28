
class ContainerWithMostWater {

    public static void main(String[] args) {
        int[] h = {1,8,6,2,5,4,8,3,7};
        System.out.println(maxArea(h));
    }

    public static int maxArea(int[] height) {
        int size = height.length;
        int max = 0;
        for (int i = 0; i < size - 1; i++) {
            for(int j = i+1; j<size; j++){
                int value = 0;
                if(height[j] < height[i])
                    value = (j-i) * height[j];
                else
                    value = (j-i) * height[i];
                if(value > max)
                    max = value;
            }
        }

        return max;
    }

}