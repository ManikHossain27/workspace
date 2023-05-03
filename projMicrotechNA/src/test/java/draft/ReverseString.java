package draft;

public class ReverseString {

	public static void main(String[] args) {
		String s = "Manik Hossain";
		String new_s = "";
		for(int i = 0; i<s.length(); i++) {
			new_s = s.charAt(i) + new_s;
		}
		System.out.println(new_s);

	}

}
