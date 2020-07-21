import React from "react";

function TvItem(props) {
  console.log(props);

/*      Компонент отвечает за каждый пункт новостей по отдельности 
 */
  
  return (
    <div className="news" style={{ display: "flex" }}>
      <li className={props.className}>{props.children}</li>
    </div>
  );
}

export default TvItem;
