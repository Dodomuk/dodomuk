import { Update } from '@material-ui/icons';
import {action,computed,makeObservable,observable,toJS} from "mobx";
import moment from 'moment';

export interface TravelClub{
    name : string,
    intro : string,
    date : string,
}
export class ClubStore implements TravelClub{
    
    @observable
    name = '';
    @observable
    intro = '';
    @observable
    date =  moment().format('YYYY-MM-DD');
    @observable
    private _searchText = '';
    @observable
    travelClub : TravelClub = {
        name : '',
        intro : '',
        date :this.date,
    };
    @observable
    clubs : Map<string,TravelClub>;

    constructor(){
        makeObservable(this);
        this.clubs = new Map<string,TravelClub>();
    }

    clubLists(){
        return toJS(this.clubs.values());
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

    @computed
    get searchText(){
        return this._searchText;
    }

    setSearchText(text : string){
        this._searchText = text;
    }

    getTravelClub(name : string){
        return this.clubs.get(name);
        
    }

    // CRUD 관련 메소드듣

    @action
    register(name : string, intro : string){
            this.travelClub = {
                name : name,intro : intro,date : this.date
            }
            if(this.clubs.has(name)){
                window.alert('해당 이름의 클럽이 존재합니다');
            }else{
                this.clubs.set(name,this.travelClub);
        }
    }

    @action
    update(name : string, intro : string){
        this.travelClub = {
            name : name,intro : intro,date : this.date
        }
        this.clubs.set(name,this.travelClub);

    }

    @action
    delete(travelClub : TravelClub){
            this.clubs.delete(travelClub.name);
    }
    
}