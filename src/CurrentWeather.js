import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const CurrentWeather = props => {
	return (
		<div>
			{props.current.name && 
			<Card centered>
				<Card.Content>
					<Card.Header>
						Current Weather in {props.current.name}
					</Card.Header>
					<Card.Description>
						Weather: {props.current.weather[0].main}
					</Card.Description>
					<Card.Description>
						{props.current.main.temp}&#176;F
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<div>
						High: {props.current.main.temp_max}&#176;F
					</div>
					<div>
						Low: {props.current.main.temp_min}&#176;F
					</div>
					<div>
						Humidity: {props.current.main.humidity}%
					</div>
				</Card.Content>
			</Card>
			}
		</div>
		
	);
}

CurrentWeather.propTypes = {
	current: PropTypes.object
}
export default CurrentWeather;