package a_oneDimensionalArray;


import java.util.Scanner;

public class OXquiz {
	
	Scanner sc = new Scanner(System.in);
	int[] OXArr = new int[10];
	int score = 0;
	boolean flg = true;
	public OXquiz() {
		// TODO Auto-generated constructor stub
		
	}
	
	public void OXvalid() {
		
		//����ڷκ��� 10 ũ���� OX�� ��� ���ڿ��� �޴´�
		System.out.println("OX�� ǥ���� �ּ��� : ");
		String inputox = sc.nextLine();
		
		for (int i = 0; i < 10; i++) {
					
			if((char)(inputox.charAt(i)) == 'O') {
			OXArr[i] = 1;
			
			for (int j = 1; j < OXArr.length-1; j++) {
				//ù��° ������ ���� ���� ������ ������ �� => charAt() �ȿ� ������ ��� ���� �ȵǱ� ������ i-j�� ���������� ����
				//�ľ����ְ� ���ؾ���
				if( i-j >= 0 && inputox.charAt(i) == inputox.charAt(i-j)) { 
					OXArr[i] = 1+j;
				}else{	
					break;
				}		
			}					
			}
			}
		for (int k = 0; k < OXArr.length; k++) {
			score += OXArr[k];
		}
		System.out.println("���� ������ ? : " + score);	
		
	}
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		OXquiz oq = new OXquiz();
		oq.OXvalid();
	}


}
