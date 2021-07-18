import {action,computed,makeObservable,observable,toJS} from "mobx";

interface TravelClub{
    name : string,
    intro : string,
    date : Date,
}
class ClubStore implements TravelClub{
    
    @observable
    name = '';
    @observable
    intro = '';
    @observable
    date = new Date();
    @observable
    travelClub : TravelClub = {
        name : '',
        intro : '',
        date : new Date(),
    };
    @observable
    clubs : Map<string,TravelClub>;

    constructor(){
        makeObservable(this);
        this.clubs = new Map<string,TravelClub>();
    }

    @computed
    clubLists(){
        return toJS(this.clubs.values);
    }

    @computed
    get getName(){
        return this.name;
    }

    @action
    setName(name:string){
        this.name = name;
    }

    @computed
    get getIntro(){
        return this.intro;
    }

    @action
    setIntro(intro:string){
        this.intro = intro;
    }

    @computed
    get getFoundedDate(){
        return this.date;
    }


    // CRUD 관련 메소드듣

    @action
    register(name : string, intro : string){
            this.travelClub = {
                name : name,intro : intro,date : this.date
            }
            this.clubs.set(name,this.travelClub);
    }

    @action
    retrieve(name : string){
      console.log(this.clubs.get(name)?.intro);
    }
    
}
export default new ClubStore();