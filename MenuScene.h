
#ifndef __MENU_SCENE_H__
#define __MENU_SCENE_H__

#include "cocos2d.h"

using namespace cocos2d;

#define TAG_SPRITE_CAT         1
#define TAG_SPRITE_BIRD        2
#define TAG_LABEL_GAMEOVER     3

class MenuScene : public cocos2d::Scene
{
private:

    cocos2d::Sprite* cat;
    cocos2d::Sprite* bgLayer_1;
    cocos2d::Sprite* bgLayer_2;
    cocos2d::Sprite* bgLayer_t;



public:
    //���� ���϶� �ٽ� �����ϴ� ������ �ذ��ϱ� ����
    bool isJump; 
    bool isStop; //���� ���� �� �ٽ� ���� �����ϵ��� �ϴ� ��ġ
    bool isParticle;
    int score = 0;

    static cocos2d::Scene* createScene();
    virtual bool init();
    void menuCloseCallback(cocos2d::Ref* pSender);
    CREATE_FUNC(MenuScene);

    Size winSize;
    Vector<Sprite*> birds;

    void initAll();
    void initData();
    void initParticle();
    void initBG();
    void AnimationScene();
    void resetJump();
    void actionGameEnd(bool isGameClear);
    void initGameOver();
    void initHighScore();

    void setBird(float delta);
    void update(float delta);
 
    void resetParticle(Ref* sender);

    virtual bool onTouchBegan(Touch* touch, Event* unused_event);
};

#endif
