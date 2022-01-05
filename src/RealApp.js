import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Button, Alert} from "react-bootstrap";

function RealApp() {
    return (
        <div className="RealApp">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Button>Button 1</Button>
                <Button >Button 2</Button>
                <Alert>Alert 1</Alert>
                <Alert>Alert 2</Alert>
            </header>
        </div>
    );
}

export default RealApp;
