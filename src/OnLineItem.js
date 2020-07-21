import React from "react";

function OnLineItem(props) {
  console.log(props);

/*       Компонент отвечает за каждый пункт онлайн событий по отдельности 
 */

  return (
    <div className="news" style={{display:'flex'}}>
        <img src={props.logo} style={{height:'15px'}} />
        <li className = {props.className}>{props.children}</li>
    </div>
  );
}

export default OnLineItem;
