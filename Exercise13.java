import java.util.Scanner;
public class Exercise13{
public static void main(String[] args){
	Scanner input = new Scanner(System.in);

System.out.print("Enter age: ");
int minimumAge = input.nextInt();

if(minimumAge >= 10){
	System.out.print("Welcome to the show!");}
	else {
System.out.print("Sorry, you're too young!");
	}
	

}


}