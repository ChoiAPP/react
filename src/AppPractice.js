import Button from "./Button";
import styles from "./App.module.css";
import { useState , useEffect } from "react"; //useState() 쓸려면 import, useState 앞에 React는 붙일 필요 없음
import stylebtn from "./Button.module.css";

function Hello() {
  // function byeFn () {
  //   console.log("bye :(");
  // }
  // function hiFn () {
  //   console.log("created :)");
  //   return byeFn;
  // }
  // useEffect(hiFn, []); 아래와 동일
  useEffect(() => {
    console.log("hi :)");
    return () => {
      console.log("bye :(");
    };
  }, []);
  return (
    <h1>hello</h1>
  );
}

function App() {
  // const [counter, setValue] = useState(0);
  // const onClick = () => setValue( (prev) => prev + 1 );
  // const [ keyword , setKeyword ] = useState("");
  // const onChange = (event) => { setKeyword(event.target.value) };
  
  // useEffect( () =>{ if(counter !==0) {console.log("I run for click")} }, [counter] );
  // useEffect( () => {console.log("Call the API") } , []);
  // useEffect( () =>{ if (keyword !== "" && keyword.length >5) {console.log("search for", keyword)}} , [keyword] );
   
  const [showing, setShowing] = useState(false);
  const onClick = () => { setShowing((prev) => !prev) };
  return (
    <div>
      { showing ? <Hello /> : null }
      {/* <input type={"text"} value={keyword} onChange={onChange} placeholder="search here.." />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick} className={stylebtn.btn}>click me</button> */}
      <button onClick={onClick} >{showing ? "hide" : "show"}</button>
    </div>
  );
}

/* <Button text={"click me"} />  <- 렌더링  */ 
//useEffect => 어떤건 초기 1번만 렌더링해서 시간 줄이고 싶을 때 사용
// useEffect( f , []) 2번째 어레이 요소에 변수 입력하면 변수 바뀔때마다 렌더링, 변수 1개 이상 사용 가능 [a , b, ...]
// JS 쓸려면 {} 안에 쓴다
export default App;
