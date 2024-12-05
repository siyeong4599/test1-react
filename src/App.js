//import logo from './logo.svg';
//import { Fragment } from 'react';
import './App.css';
//import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  // const name = '리액트'; - 1번째거 실행
  //const name = '뤼왝트'; - 2번째거 실행
//   return (
//     <div>
//     <h1>리액트 안녕!</h1>
//     <h1>잘 작동하니?</h1>
//     </div>
//     <Fragment>
//     <h1>리액트 안녕!</h1>
//     <h1>잘 작동하니?</h1>
//     </Fragment>
//     <>
//     <h1>리액트 안녕!</h1>
//     <h1>잘 작동하니?</h1>
//     </>
//     <>
//     <h1>{name} 안녕!</h1>
//     <h1>잘 작동하니?</h1>
//     </>
//     <div>
//       {name === '리액트' ? (
//         <h1>리액트입니다.</h1>
//       ) : (
//         <h1>리액트가 아닙니다.</h1>
//       )}
//     </div>
//   );

  // const name = '뤼왝트';
  // return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>; 아무것도 안보임
  // const name = '뤼왝트';
  // return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>; 아무것도 안보임
  // const name = undefined;
  // return name; 오류남
  // const name = undefined;
  // return name || '값이 undifined입니다.'; 오류X
  // const name = undefined;
  // return <div>{name}</div>; 내부에서 랜더링
  // const name = undefined;
  // return <div>{name || '리액트'}</div>; 리액트가 보임
  // const name = '리액트';
  // const style = {
  //   // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
  //   backgroundColor: 'black', 
  //   color: 'aqua',
  //   fontSize: '48px', // font-size -> fontSize
  //   fontWeight: 'bold', // font-weight -> fontWeight
  //   padding: 16 // 단위를 생략하면 px로 지정됩니다. 
  // };
  // return <div style={style}>{name} </div>;
  // }
  const name = '리액트';
  return (
    <div
  style = {{
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: 'black', 
    color: 'aqua',
    fontSize: '48px', // font-size -> fontSize
    fontWeight: 'bold', // font-weight -> fontWeight
    padding: 16 // 단위를 생략하면 px로 지정됩니다. 
  }}
> 
  {name}
</div>
  );
}

export default App;
//72쪽부터 이어서 하기 목표 -> 8장까지
