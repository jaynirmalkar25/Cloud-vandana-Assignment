import java.util.*;
import java.util.Random;

public class Task_A {
	
//	Creating Method/Function for Logic
	
	public static void shuffleArray(int[] array) {
		Random random = new Random();
		
		for (int i = array.length - 1; i > 0; i--) {
			int j = random.nextInt(i + 1);
			int temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
	
	
	
	public static void main(String[] args) {

//  Creating Array
	
		int[] originalArray = { 1, 2, 3, 4, 5, 6, 7 };


		
// Printing Array
		
		System.out.print("Shuffled Array: ");
		for (int i = 0; i < originalArray.length; i++) {
			System.out.print(originalArray[i]);

			if (i < originalArray.length - 1) {
				System.out.print(", ");
			}
		}

// Calling Method/Function
		
		shuffleArray(originalArray);
	}
}
