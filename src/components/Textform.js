
import React,{useState} from 'react';

export default function Textform(props){
  const handleUpclick=()=>{
    // console.log("upper case was clicked"+text)
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert('upper case was cliciked','success');
    
  }
  const handleloclick=()=>{
    // console.log("upper case was clicked"+text)
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleclear=()=>{
    // console.log("upper case was clicked"+text)
    // let newText=text.toClear();
    setText('')
  }
  const handleonchange=(event)=>{
    // console.log("on change ")
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter Text here');

  return (
    <>
    <div>
      <h1 className="text-center " style={{color:props.mode==='dark'?'white':'black'}} >{props.heading}</h1>
<div className="mb-3" >
  
  <textarea className="form-control "style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
  value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
</div>
<div className='btncenter'>
  <button id="btn12" className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
  <button id="btn123" className="btn btn-primary mx-2" onClick={handleloclick}>Convert to lowercase</button>
  <button id="btn123" className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>

</div>
    </div>
    <div id="h2center"  className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text summary</h2>
      <p className='p1' >{text.split(" ").length} words and {text.length} charachters</p>
      <p className='p1'>{0.008*text.split(" ").length} Minutes read</p>
    </div>
    <div className='h3center'>

      <h2  style={{color:props.mode==='dark'?'white':'black'}}>Preview</h2>
    <p  style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter something to preview here"}</p>
   
    </div>
    </>
  );
}
