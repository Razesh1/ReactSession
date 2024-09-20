
import ReactDOM from 'react-dom/client'
import App from './App' ;
import './style.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

// // function App(){
// //   console.log('app is running');
// //   const [state,setState] =useState(0);
// //   console.log(`Value of state:${state}`)
// //   const increment = ()=>{
// //     console.log('Increment function is running')
// //     setState(state+1);
// //     console.log('State is Updating')
// //   }
// //   return (
// //   <div>
// //     {console.log('JSX is Running')}
// //     <div>
// //       <button onClick= {increment}>Increment</button>
// //       <h1>Incremented Value: {state}</h1>
// //     </div>
// //   </div>)  
// // }

// // const container = document.getElementById('root');
// // const root = ReactDOM.createRoot(container);
// // root.render(<App />);


// function App(){
//   const [state,setState] = useState('light');
//   const toDark = () =>setState('dark');
//   const toLight =()=>setState('light');

//   return (<div className={state}>
//      {state === 'light' ? (
//       <button onClick={toDark}>Dark</button>
//      ):(
//       <button onClick = {toLight}>Light</button>
//      )}
//   </div>)
//   }
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);


