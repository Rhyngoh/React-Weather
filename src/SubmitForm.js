import React from 'react';
import PropTypes from 'prop-types';

const SubmitForm = props => {

	const isEnabled = (/^\d{5}$|^\d{5}-\d{4}$/).test(props.zipcode);
	return (
		<div>
			<h1>React Weather</h1>
			<h2>Check the weather around this zipcode!</h2>
			<form className="ui form" onSubmit={props.submitZip} autoComplete="off">
				<div className="field">
					<div className="ui input focus">
						<input type="text" placeholder="Zipcode" value={props.zipcode} onChange={props.handleChangeText} name="zipcode"/>
						{isEnabled ? ( 
							<div>
								<button disabled={false} className="ui huge primary button">
									Submit
								</button>
							</div>
							) : (
							<div data-tooltip="Input a valid zipcode" data-position="top left">
								<div className="ui huge disabled primary button">
									Submit
								</div>
							</div>
							)
						}
					</div>
				</div>
			</form>
		</div>
	);
}

SubmitForm.propTypes = {
	handleChangeText: PropTypes.func.isRequired,
	zipcode: PropTypes.string,
	submitZip: PropTypes.func.isRequired
}

export default SubmitForm;