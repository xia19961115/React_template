import './App.less';
import { Button } from 'antd';
import {useNavigate,Outlet,useRoutes} from 'react-router-dom'
import routes from './routes/index.js'
function App() {
  const router = useRoutes(routes)
  // console.log(router)
  const navigate = useNavigate()
  function goPage(val) {
    return() => {
      navigate(val)
    }
  }
  return (
    <div className="App">
      <div className="App-app">123</div>
      <Button onClick={goPage('/home')} type="primary">按钮</Button>
      <Button onClick={goPage('/about')} type="primary">按钮</Button>
      {router}
      <Outlet />
    </div>
  );
}

export default App;
