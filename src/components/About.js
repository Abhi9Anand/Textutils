import React from 'react'

export default function About(props) {
  let myStyle = {
    color : props.mode === 'dark'? 'white' : 'black',
    backgroundColor : props.mode === 'dark' ? 'black' : 'white',
    
  }
   
  return (
    <>
    <div className="container" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
        <h2>About</h2>
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Analyse your text
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body " style={myStyle }  >Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       Free to use
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"  style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Browser compatible
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
    </div>
  </div>
  
</div>
    </>
  )
}
