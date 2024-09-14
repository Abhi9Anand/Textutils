import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value)

    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case", 'success')
        
       
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case", 'success')
    }
    const handleClrClick = ()=>{
        setText('')
        props.showAlert("Textarea is cleared" , 'success')
    }
    const[text , setText] = useState('');
    // text = "new text"; //wrong way to change the state 
    // setText = ("new text"); //correct way to change the state 
  return (
    <>
<div className="container my-3">
    <h4 style={{color: props.mode ==='light'?'black':'white'}}>{props.heading} </h4>
<div className='mb-3 my-3'>
  <textarea className="form-control" value={text} style={{backgroundColor : props.mode ==='dark'?'black':'white',color: props.mode ==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn btn-info mx-2 my-1' disabled={text.length ===0 } onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn btn-info mx-2 my-1' disabled={text.length ===0 } onClick={handleLoClick}>Convert to Lowercase</button>
<button type="button" class="btn btn-success mx-2 my-1" disabled={text.length ===0} onClick={handleClrClick}>Clear Textbox</button>
</div>

<div className="container "style={{color: props.mode ==='light'?'black':'white'}}>
    <h3>Your text Summary</h3>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
    <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
    <h4>Preview</h4>
    <p>{text.length>0? text.toLowerCase():'Write something in the textbox above to Preview it here'}</p>
</div>
    </> 
  )
}
