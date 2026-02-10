import java.util.Scanner;

public class Solution {

    static boolean isAnagram(String a, String b) {
        // Complete the function
        // Write your code here

    
        int f=0;
        a=a.toUpperCase();
        b=b.toUpperCase();
        int []A=new int[100];
        int []B=new int[100];
        for(int i=0;i<a.length();i++){
            char c=a.charAt(i);
            int d=(int)c;
            A[d]++;
        }
        for(int i=0;i<b.length();i++){
            char e=b.charAt(i);
            int r=(int)e;
            B[r]++;
        }
        for(int i=0;i<100;i++){
            if(A[i]!=B[i]){
                f=1;
                break;
            }
        }
        if(f==1){
            return false;
        }
        else{
            return true;
        }
        
    }

    public static void main(String[] args) {
    
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
    }
}
