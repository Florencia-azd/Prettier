import React from "react";
import { Route, Link } from "react-router-dom";
import WeatherApp from "./WeatherApp";
import "../styles/Body.scss";

export default function Body() {
	return (
		<div id="Body">
			<div className="inner-container">
				<div>
					<ul className="apps-list">
						<li className="app-item">
							<Link to="/Weather-App">
								<div className="container-item">
									<span className="title">Weather App</span>
								</div>
							</Link>
						</li>
					</ul>
					<Route path="/Weather-App" component={WeatherApp} />
				</div>
			</div>
		</div>
	);
}
