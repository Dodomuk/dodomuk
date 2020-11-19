package a_oneDimensionalArray;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class OverAverage {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		BufferedReader br = new BufferedReader
				(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		try {
			
			StringTokenizer st;
			
			int c = Integer.parseInt(br.readLine()); // �Է� ���� �׽�Ʈ ���̽��� ����
			int[] cArr = new int[c]; // �׽�Ʈ ���̽���ŭ ������ �Է��ϱ� ���� �迭

			for (int i = 0; i < cArr.length; i++) {
				
			    int overAvg = 0; //����� �Ѵ� �л��� ��

				st = new StringTokenizer(br.readLine()," ");
				
				cArr[i] = Integer.parseInt(st.nextToken());//�л���
				
		
				
				int[] nArr = new int[cArr[i]]; // �л��� ������
				int sum = 0; // ���� �հ�
				
				for (int j = 0; j < nArr.length; j++) {
					nArr[j] = Integer.parseInt(st.nextToken());
					sum += nArr[j];

				}
				
				double avg = sum/nArr.length; //��� ���� ����
				
				for (int k = 0; k < nArr.length; k++) { //���� ����� �Ѵ� ������ ���ϱ� ���� for�� 
		
					if(nArr[k] > avg) {					
						overAvg ++;
								
				}
				}
				//ù��° *100�� ������ 0% ~ 100% ���̷� ��� ����, �ι�° *1000�� Math.round �� ������ ��ȯ�Ǹ� �ٽ� 1000���� ����
				//�Ҽ��� �ڿ� 3�ڸ��� ����� ���� ����
				double overAvgs = (double)Math.round(((double)overAvg / (nArr.length))*100*1000)/1000; 
				
	         			//�Ҽ��� 3�ڸ� ǥ����
						sb.append(overAvgs + "%");	
						sb.append("\n");				
			}
			
			System.out.println(sb);
			
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
	}

}
