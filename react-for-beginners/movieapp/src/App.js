import {
  BrowserRouter as Router, 
  Switch, // Route를 찾음
  Route, // 찾으면 컴포넌트를 렌더링함
  Link, // 새로고침 없이도 유저를 다른 페이지로 이동시켜줌
}from "react-router-dom"

import Home from './routes/Home'
import Detail from './routes/Detail'

function App() {
  return <Router>
    <Switch> 
      <Route path="/movie/:id">
        <Detail />
      </Route>

      <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} /> 
    </Switch>
  </Router>;
}

export default App;