import React from "react";

function OnLine(props) {
  console.log(props);
/* 
     Компонент отвечает за список онлайн событий
 */
  return (
    <div className="news">
        <p>OnLine</p>
      <ul className={props.className} style={{ listStyleType: "none" }}>
        {props.children(props.items)}
      </ul>
    </div>
  );
}

export default OnLine;
