import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { observer } from 'mobx-react';
import { PureComponent } from 'react';
import { TravelClub } from '../../stores/ClubStore';

interface Props {
	clubList: Array<TravelClub>;
	onFindClub: Function;
}
@observer
class ClubTableView extends PureComponent<Props> {
	render() {
		let { clubList, onFindClub } = this.props;
		return (
			<>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow  color="red">
								<TableCell align="center">클럽</TableCell>
								<TableCell align="center">소개글</TableCell>
								<TableCell align="center">가입날짜</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{onFindClub.length === 0 ?
							[...clubList].map((club) => (
								<TableRow key={club.name} hover >
									<TableCell>{club.name}</TableCell>
									<TableCell>{club.intro}</TableCell>
									<TableCell>{club.date}</TableCell>
								</TableRow>
							))
							:
							[...onFindClub([...clubList])].map((club) => (
								<TableRow key={club.name} hover>
									<TableCell>{club.name}</TableCell>
									<TableCell>{club.intro}</TableCell>
									<TableCell>{club.date}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</>
		);
	}
}

export default ClubTableView;
