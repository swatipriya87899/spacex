import React,{useState} from 'react';
import './ReadMore.css'

function ReadMore(props) {
    let text= `${props.text}`
 const [readMore,setReadMore]=useState(false);
  const linkName=readMore?'Read Less ':'Read More '
  return (
    <div>
      {!readMore? <div className="extra-content">{text.slice(0, 100)}</div> : text}
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><div>{linkName}</div></a>
    </div>
  );
}

export default ReadMore;