package d_if;

import java.util.Scanner;

public class AlarmClock {

	Scanner sc= new Scanner(System.in);
	private int h;
	private int m;
	private boolean flg = true;
	public static void main(String[] args) {
		
		AlarmClock ac = new AlarmClock();
		ac.alarmChecker();
	}
	
	public void alarmChecker() {

		while(true) {
		//�ΰ��� ���ڸ� �Է� �޴´�(��, ��)
		int input_h = sc.nextInt();
		int input_m = sc.nextInt();
		//if���� ����� �� ���� ������ �����ϵ����Ѵ� (0 �� H �� 23, 0 �� M �� 59).

		if(input_h > 23 || input_h < 0)
		{
			System.out.println("�ٽ� �Է��ϼ���");
			break;
		}else if(input_m > 59 || input_m < 0) {
			System.out.println("�ٽ� �Է��ϼ���");
			break;
		}
		//�Է��� �ð����� 45���� ���� ���� �����.
		h = input_h;
		m = input_m - 45;
		//���� H�� 0�϶� M�� 45���� �۴ٸ� H�� 23�� �ǵ��� �Ѵ�.
		if(m<0) {
			m = 60 + m;
			h = input_h -1 ;
		   if(h < 0) {
			   h = 23;
		   }
		}
		
		System.out.println(h + " " + m);
	}
}
}
