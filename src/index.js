import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
import Home from "./pages/Home.js"


function App(){
	return(
		<Router>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	)
}

ReactDOM.render(<App/>, document.getElementById("app"))