import { Remarkable } from "remarkable";
import React , {useState} from "react";
import "./ReactMarkdown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate , useNavigate } from "react-router-dom";
import NavBar from "./navBar";

const md = new Remarkable();

const ReactMarkDown = (props) => {
  const [ Text , SetText] = useState("");
  const navigate = useNavigate();
  let data  ;
   const Handledata = (e) => {
     SetText(e.target.value)
   }
   

  const Handlepublish = (event) => {
     data = md.render(Text)
     console.log(data)
    
    }

    return (
      <div>
          <NavBar></NavBar>
              <div className="Heading"> <h1>MARKDOWN EDITOR</h1> </div>
                <div className="Editor" >
                <textarea className="TextArea" placeholder="Your text goes here" value={Text} onChange={Handledata}></textarea> 
               
              <div className="output"  dangerouslySetInnerHTML={{__html: md.render(Text)}} >
              </div>
                </div>
        <div>
        <button type="submit" className="btn btn-primary" onClick={Handlepublish} >Publish</button>
        </div>
   
    </div>
    )
}
export default ReactMarkDown;