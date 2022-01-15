import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return <Router>
    <Switch>
      <Route path="/hello">
        <h1>Hello!!</h1>
      </Route>

      <Route path="/movie/:id" >
        <Detail />
      </Route>
      
      <Route path="/">
        <Home />
      </Route>

    </Switch>
  </Router>;
}
export default App;

// /movie/:id  -> :이 중요함 . : 뒤에 변수 명 입력 id이든 chilitomato 이든 이름은 상관없음