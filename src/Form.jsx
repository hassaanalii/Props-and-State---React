import React, {useState} from 'react'

export default function Form() {
    const clicked = ()=>{
        var temp = text.toUpperCase();
        setText(temp);
    }
    const changed = (event)=>{
        setText(event.target.value)
    }
    const [text, setText]  = useState("Enter you name in small alphabets")
  return (
    <div className="container">
      <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea onChange={changed}className="form-control" value={text} id="exampleFormControlTextarea1" rows="10"></textarea>
            <div onClick={clicked} className="button btn btn-primary">Click me</div>
      </div>  
    </div>
  )
}
