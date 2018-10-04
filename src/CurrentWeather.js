import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const CurrentWeather = props => {
	const date = new Date(props.current.dt*1000);
	const day = date.getDate();
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'];
	const month = months[date.getMonth()];
	const formattedDate = month + ' ' + day;
	const weatherIcon = `http://openweathermap.org/img/w/${props.current.weather[0].icon}.png`;
	return (
		<div>
			{props.current.name && 
			<Card centered>
				<Card.Content>
					<Image floated='right' src={weatherIcon} />
					<Card.Header>
						{formattedDate}
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