import React, { Component } from 'react';
import { TextField, InputAdornment, Button, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import ClubStore from '../../stores/ClubStore';
import { Search } from '@material-ui/icons';
import { blueGrey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

interface Props {
	clubStore: typeof ClubStore;
}
@inject('clubStore')
@autobind
@observer
class SearchbarContainer extends Component<Props> {
	onChangeSearchText(searchText: string) {
		this.props.clubStore.retrieve(searchText);
	}

	render() {
		const ColorButton = withStyles((theme) => ({
			root: {
				color: theme.palette.getContrastText(blueGrey[500]),
				backgroundColor: blueGrey[500],
				'&:hover': {
					backgroundColor: blueGrey[700],
				},
			},
		}))(Button);

		return (
			<>
				<Box m={3}>
					<TextField
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
						onChange={(event) => this.onChangeSearchText(event.target.value)}
					/>
				</Box>
			</>
		);
	}
}

export default SearchbarContainer;
