// import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import ParentContainer from './components/ParentContainer';
function App() {
  const [data,setData]=useState('');
  function handleClick(val){
    if(val==='='){
      setData(eval(data)+'');
    }else if(val==='C'){
      setData("");
    }else if(val==='x'){
      setData(data.slice(0,-1));
    }else{
      setData(data+val);
    }
  }
  return (
   <ParentContainer>
     <Display data={data}></Display>
     <Button btnClick={handleClick}></Button>
   </ParentContainer>
  );
}

export default App;
