import React from 'react';
import ReactDOM from 'react-dom/client';

//import './index.css';
//import App from './App';

// 1.code of component
// import Upper from './1.components/1.upper';
// import Lower from './1.components/2.lower';

// 2.code of notepad
 import Apps from './2.note pad/1.apps';
 import './2.notepadstyle.css'

// 3. code of cryptoconverter
//import App from './1.components/3.cryptoconverter/1.app';


const root = ReactDOM.createRoot(document.getElementById('root'));

// 1.code of component
// const gridBox = {
//   display:'grid',
//   gridTemplateColumns:'repeat(3, 1fr)',
//   textAlign:'center',
//   gap:'20px'
// }
// root.render(
//   <div>
//     <Upper/>
//     <div style={gridBox}>
//     <Lower image='https://cdn-icons-png.flaticon.com/512/7515/7515677.png' name='Card shorting' content='Discover how people group and lable information.'/>
//     <Lower image='https://cdn-icons-png.flaticon.com/512/6471/6471730.png' name='Prototype test' content='Discover how people navigate your figma prototypes.'/>
//     <Lower image='https://cdn-icons-png.flaticon.com/512/5610/5610930.png' name='First click test' content='Test interaction with first click and navigate tests.'/>
//     <Lower image='https://cdn-icons-png.flaticon.com/512/9445/9445816.png' name='Design surveys' content='Get feeback on images,auido or viedo files.'/>
//     <Lower image='https://cdn-icons-png.flaticon.com/512/3670/3670159.png' name='Perference test' content='Find out which designs users perefer and why.'/>
//     <Lower image='https://cdn-icons-png.flaticon.com/512/2408/2408971.png' name='Five second test' content='Test comprehensibility by measuring first impression.'/>
//   </div>
//     </div>
    
// );

// root.render(
//   <React.StrictMode>
//    <App />
//   </React.StrictMode>
// );
 
//2.code of note pad
root.render(
<div>
<Apps/>
</div>
);

// 3. code of cryptoconverter
// root.render(
//     <div>
//         <App/>
//     </div>

// )

