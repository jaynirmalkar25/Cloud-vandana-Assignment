import java.util.*;



public class Task_c {

// Creating Method/Function for logic
    
    public static boolean isPangram(String s) {
		boolean[] alphabet = new boolean[26];

		for (int i = 0; i < s.length(); i++) {
			char c = s.charAt(i);
			if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
				int index = Character.toLowerCase(c) - 'a'; // Convert into lowercase
				alphabet[index] = true;
			}
		}

		for (boolean letter : alphabet) {
			if (!letter) {
				return false;
			}
		}

		return true;
	}



	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
    
     // taking input	
		String s = sc.nextLine();


    // printing

		if (isPangram) {
			System.out.println("The input is a pangram.");
		} else {
			System.out.println("The input is not a pangram.");
		}


    // Calling Method/Function    
       
        boolean isPangram = isPangram(s);
	
    }

	
	}
