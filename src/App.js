import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[text ,setText] = useState('');
  const[name ,setName] = useState('vineet');


  // variration 1  --> every render 
  // useEffect( () => { //  useeffect code jis bhi component ke andar likhte ha component render hone ke baad ke effext apply hoga jo iske andar  likhnege 
  //     console.log("UI rendering done");
  // });


  // variration 2 --> First render pr chalega 
  // useEffect( () => {    
  //       console.log("UI rendering done");
  //   } ,[]);


  // variration 3 -->first render +  whenever dependency changes
  // useEffect( () => {    
  //   console.log("change observed");
  //   } ,[name]);


  // variation 4 --> tohandle unmounting of a component 
  useEffect( () => {    
      // addevent listener
    console.log("Litener added");

    return ( () => {
      console.log("Litener remove");

    });
    } ,[text]);



  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
