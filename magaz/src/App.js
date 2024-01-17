import AppRoute from './component/Routes/routes';
import Sidebar from './component/Sidebar/Sidebar';
import Heder from './component/heder/heder';

function App() {
  return (
    <div className="App">
       <Heder />
       <AppRoute/>
       <Sidebar/>
    </div>
  );
}

export default App;
