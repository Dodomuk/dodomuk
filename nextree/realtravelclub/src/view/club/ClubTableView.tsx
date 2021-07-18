import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { observer } from 'mobx-react';
import { PureComponent } from 'react';


interface Props{
   clubList : IterableIterator<TravelClub>;
}
@observer
class ClubTableView extends PureComponent<Props> {
	render() {
		let { clubList } = this.props;

		return (
			<>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell align="center">클럽</TableCell>
								<TableCell align="center">소개글</TableCell>
								<TableCell align="center">가입날짜</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{clubList.map((name,intro,date) => (
								<TableRow>
									<TableCell>{name}</TableCell>
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
