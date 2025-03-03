// From Neetcode Problem Implement a Dynamic Array
// Link: https://neetcode.io/problems/dynamicArray
// Difficulty: Easy

class DynamicArray {

    private int[] arr;
    private int size;

    public DynamicArray(int capacity) {
        this.arr = new int[capacity];
        this.size = 0;
    }

    public int get(int i) {
        return arr[i];
    }

    public void set(int i, int n) {
        arr[i] = n;
    }

    public void pushback(int n) {
        if (size == arr.length)
            resize();

        arr[size] = n;

        size++;
    }

    public int popback() {
        if (size > 0)
            size--;

        return arr[size];
    }

    private void resize() {
        int[] tempArray = new int[arr.length * 2];

        for (int i = 0; i < arr.length; i++) {
            tempArray[i] = arr[i];
        }

        arr = tempArray;
    }

    public int getSize() {
        return size;
    }

    public int getCapacity() {
        return arr.length;
    }
}