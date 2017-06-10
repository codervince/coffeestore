import App from './components/App';
import axios from 'axios';

ReactDOM.render(
  <App initialData={window.__initialData__} />,

  document.getElementById("root")
);
