import React from 'react';
import PropTypes from 'prop-types';

const SubmitForm = props => (
	<div>
		<form onSubmit={props.submitZip} autoComplete="off">
			<div className="ui input focus">
				<input type="text" placeholder="Zipcode" value={props.zipcode} onChange={props.handleChangeText} name="zipcode"/>
			</div>
			<button className="ui primary button">
				Submit
			</button>
		</form>
	</div>
)

export default SubmitForm;