import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { RouteComponentProps } from 'react-router-dom';
import { ClubStore, TravelClub } from '../../stores/ClubStore';
import ClubTopView from './ClubTopView';
import SearchBar from '../search/SearchBar';
import ClubTableView from './ClubTableView';

interface Props extends RouteComponentProps {
	clubStore: ClubStore;
	name: string;
	intro: string;
}
@inject('clubStore')
@autobind
@observer
class Club extends Component<Props> {
	//
	constructor(props: Props) {
		super(props);
		// this.goMemberPage = this.goMemberPage.bind(this);
		this.onSetName = this.onSetName.bind(this);
		this.onSetIntro = this.onSetIntro.bind(this);
		this.onAddClub = this.onAddClub.bind(this);
		this.onUpdateClub = this.onUpdateClub.bind(this);
	}

	// goMemberPage() {
	// 	const { history } = this.props;
	// 	history.push('/member');
	// }

	onSetName(name: string) {
		this.props.clubStore.setName(name);
	}
	onSetIntro(intro: string) {
		this.props.clubStore.setIntro(intro);
	}

	onAddClub(name: string, intro: string) {
		console.log(name, intro);
		this.props.clubStore.register(name, intro);
	}

	onUpdateClub(name: string, intro: string) {
		let foundClub = this.props.clubStore.getTravelClub(name);
		if (foundClub !== undefined) {
			this.props.clubStore.update(name, intro);
		} else {
			window.alert('클럽이 존재하지 않습니다.');
		}
	}

	onDeleteClub(name: string) {
		let foundClub = this.props.clubStore.getTravelClub(name);
		if (foundClub !== undefined) {
			this.props.clubStore.delete(foundClub);
		} else {
			window.alert('삭제할 클럽이 존재하지 않습니다.');
		}
	}

	onFindClub(clubList : Array<TravelClub>) {
		return clubList.filter(club => club.name.toLowerCase().indexOf(this.props.clubStore.searchText.toLowerCase()) != -1)
	}

	render() {
		//

		const { clubStore } = this.props;

		return (
			<>
				{/* <button onClick={this.goMemberPage}>go member</button> */}
				<ClubTopView
					name={clubStore.name}
					intro={clubStore.intro}
					onSetName={this.onSetName}
					onSetIntro={this.onSetIntro}
					onAddClub={this.onAddClub}
					onUpdateClub={this.onUpdateClub}
					onDeleteClub={this.onDeleteClub}
				/>
				<SearchBar clubStore={clubStore} />
				<ClubTableView clubList={[...clubStore.clubLists()]} onFindClub={this.onFindClub} />
			</>
		);
	}
}
export default Club;
