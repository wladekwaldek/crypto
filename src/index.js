import './index.css'
import { App } from "./react-components/app";

function render() {
    ReactDOM.render(
        <App />, document.getElementById('app')
    );
}

render()