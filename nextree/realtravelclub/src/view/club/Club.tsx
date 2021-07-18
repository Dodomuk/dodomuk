import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { RouteComponentProps } from 'react-router-dom';
import ClubStore from '../../stores/ClubStore';
import ClubTopView from './ClubTopView';
import SearchBar from '../search/SearchBar';
import ClubTableView from './ClubTableView';

interface Props extends RouteComponentProps {
	clubStore : typeof ClubStore;
	name : string,
	intro : string,
}
@inject('clubStore')
@autobind
@observer
class Club extends Component<Props> {
	//
	constructor(props: Props) {
		super(props);
		this.goMemberPage = this.goMemberPage.bind(this);
		this.onSetName = this.onSetName.bind(this);
		this.onSetIntro = this.onSetIntro.bind(this);
		this.onAddClub = this.onAddClub.bind(this);
	}

	goMemberPage() {
		const { history } = this.props;
		history.push('/member');
	}

	onSetName(name : string){
		this.props.clubStore.setName(name);
	}
	onSetIntro(intro : string){
		this.props.clubStore.setIntro(intro);
	}

	onAddClub(name : string, intro : string){
		console.log(name,intro);
   		this.props.clubStore.register(name,intro);
	}

	onClubList(){
		this.props.clubStore.clubLists;
	}

	render() {
		//

		const {clubStore} = this.props;

		return (
			<>
			<button onClick={this.goMemberPage}>go member</button>
			<ClubTopView
			name = {clubStore.name}
			intro= {clubStore.intro}
			onSetName = {this.onSetName}
			onSetIntro = {this.onSetIntro}
			onAddClub = {this.onAddClub}
			/>
			<SearchBar
			clubStore = {clubStore}
			/>
			<ClubTableView 
			clubList = {this.onClubList}
			/>
            </>
		);
	}
}
export default Club;