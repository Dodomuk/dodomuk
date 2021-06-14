package javastory.club.stage3.step3.logic;

import javastory.club.stage3.step3.service.*;

public class ServiceLogicLycler implements ServiceLycler {

    private static ServiceLycler lycler;

    private ClubService clubService;
    private MemberService memberService;
    private BoardService boardService;
    private PostingService postingService;

    private ServiceLogicLycler(){

    }

    public synchronized static ServiceLycler shareInstance(){
        if(lycler == null){
            lycler = new ServiceLogicLycler();
        }
        return lycler;
    }

    @Override
    public BoardService createBoardService() {

        if(boardService == null){
            boardService = new BoardServiceLogic();
        }
        return boardService;
    }

    @Override
    public ClubService createClubService() {
        if(clubService == null){
            clubService = new ClubServiceLogic();
        }
        return clubService;
    }

    @Override
    public MemberService createMemberService() {
        if(memberService == null){
            memberService = new MemberServiceLogic();
        }
        return memberService;
    }

    @Override
    public PostingService createPostingService() {
        return null;
    }
}
