import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const ForecastWeather = props => {
	const date = new Date(props.forecast.list[props.afternoonIndex].dt*1000);
	const day = date.getDate();
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'];
	const month = months[date.getMonth()];
	const formattedDate = month + ' ' + day;
	const weatherIcon = `http://openweathermap.org/img/w/${props.forecast.list[props.afternoonIndex].weather[0].icon}.png`;
	return (
		<Card centered className="forecast-cards">
			<Card.Content>
				<Image floated='right' src={weatherIcon}/>
				<Card.Header>
					{formattedDate}
				</Card.Header>
				<Card.Description>
					Weather: {props.forecast.list[props.afternoonIndex].weather[0].main}
				</Card.Description>
				<Card.Description>
					{props.forecast.list[props.afternoonIndex].main.temp} &#176;F
				</Card.Description>
				<Card.Description>
					Humidity: {props.forecast.list[props.afternoonIndex].main.humidity}%
				</Card.Description>
			</Card.Content>
		</Card>
		
	);
}
ForecastWeather.propTypes = {
	forecast: PropTypes.object,
	afernoonIndex: PropTypes.number
}
ForecastWeather.defaultProps = {
	forecast: {},
	afternoonIndex: 0
}
export default ForecastWeather;