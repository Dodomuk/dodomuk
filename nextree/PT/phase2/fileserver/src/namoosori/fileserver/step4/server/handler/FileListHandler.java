package namoosori.fileserver.step4.server.handler;

import com.google.gson.Gson;
import namoosori.fileserver.step4.server.repo.FileStore;
import namoosori.fileserver.util.RequestMessage;
import namoosori.fileserver.util.ResponseMessage;

import java.util.List;
import java.util.StringTokenizer;

public class FileListHandler implements FileHandler {
	//
	public FileListHandler() {
		// 
	}
	
	@Override
	public ResponseMessage handle(RequestMessage request) {
		// 
		FileStore fileStore = getFileStore(); 
		
		String value = request.getValue(); 
		StringTokenizer tokenizer = new StringTokenizer(value, "-"); 
		int offset = Integer.valueOf(tokenizer.nextToken()); 
		int count = Integer.valueOf(tokenizer.nextToken()); 
		
		List<String> fileList = fileStore.listFiles(offset, count);  
		
		return new ResponseMessage(request.getServiceName(), (new Gson()).toJson(fileList));  
	}

	public FileStore getFileStore() {
		// 
		return FileStore.newInstance(); 
	}
}
