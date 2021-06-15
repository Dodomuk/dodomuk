package javastory.club.stage3.step4.service.dto;

import javastory.club.stage3.step1.entity.board.Posting;
import javastory.club.stage3.step1.entity.board.SocialBoard;
import javastory.club.stage3.util.DateUtil;

public class PostingDto {

    private String usid;
    private String title;
    private String writerEmail;
    private String contents;
    private String writtenDate;
    private int readCount;

    public PostingDto() {
        readCount = 0;
    }

    public PostingDto(String title, String writerEmail, String contents) {
        this.title = title;
        this.writerEmail = writerEmail;
        this.contents = contents;
        this.writtenDate = DateUtil.today();
    }

    public PostingDto(Posting posting){
        this.usid = posting.getUsid();
        this.title = posting.getTitle();
        this.writerEmail = posting.getWriterEmail();
        this.contents = posting.getContents();
        this.writtenDate = posting.getWrittenDate();
    }

    @Override
    public String toString() {
        return "PostingDto{" +
                "usid='" + usid + '\'' +
                ", title='" + title + '\'' +
                ", writerEmail='" + writerEmail + '\'' +
                ", contents='" + contents + '\'' +
                ", writtenDate='" + writtenDate + '\'' +
                ", readCount=" + readCount +
                '}';
    }

    public Posting toPostingIn(SocialBoard board){
        Posting posting = new Posting(board,title,writerEmail,contents);

        posting.setWrittenDate(writtenDate);
        posting.setReadCount(readCount);
        return posting;
    }

    public Posting toPostingIn(String postingId, String boardId){
        Posting posting = new Posting(postingId,boardId,title,writerEmail,contents);

        posting.setWrittenDate(writtenDate);
        posting.setReadCount(readCount);
        return posting;
    }

    public String getUsid() {
        return usid;
    }

    public void setUsid(String usid) {
        this.usid = usid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getWriterEmail() {
        return writerEmail;
    }

    public void setWriterEmail(String writerEmail) {
        this.writerEmail = writerEmail;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public String getWrittenDate() {
        return writtenDate;
    }

    public void setWrittenDate(String writtenDate) {
        this.writtenDate = writtenDate;
    }

    public int getReadCount() {
        return readCount;
    }

    public void setReadCount(int readCount) {
        this.readCount = readCount;
    }
}
