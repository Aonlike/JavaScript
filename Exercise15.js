import java.util.Scanner;
public class Exercise11{
public static void main(String[] args){
	Scanner input = new Scanner(System.in);

System.out.print("Enter an animal guess: ");
String myAnimal = input.nextLine();

if(myAnimal == "dog"){
	System.out.print("Correct!It's a dog!");}
	else {
System.out.print("Nope, its a dog!");
	}
	

}


}