import java.util.*;
class Numbers{
    public void matchexpression(String exp){

        if(exp ==null ||exp.length() %2!=0){
            System.out.println("not  valid exp");
            return;
        }
        Stack<Character> st= new Stack<>();
        for(char c: exp.toCharArray()){
            if(c=='{'){
                st.push('}');
            }else if(c=='['){

            
                st.push(']');
            }
            else if(c=='('){
                st.push(')');
            }
            else if(st.isEmpty()|| st.pop()!=c){
                System.out.println("not matching");
                return;
            }
        }

        if(st.isEmpty()){
            System.out.println("matching expresiion");
        }else{
        System.out.println("not a valid matching expression");
        }



    }
    public void anagram(String s1, String s2){
        if(s1==null || s1 ==null ||s2.length()==0||s1.length()==0){
            System.out.println("it is not an anagram strings");
            return;
        }

        int[] cnts= new int[256];
        for(int i=0;i<s1.length();i++){

            cnts[s1.charAt(i)]++;
            cnts[s2.charAt(i)]--;
        }
        for(int cnt : cnts){
            if(cnt !=0){
                System.out.println("not an anagram");
                return;
            }
        }
        System.out.println("these two are anagrams");


    }

}

class Expression {
    public static void main(String args[]){
        Numbers n = new Numbers();
        n.anagram("silent","listen");
        n.matchexpression("{[()()]}");
    }
}
