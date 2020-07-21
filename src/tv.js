import React from "react";

function Tv(props) {
  console.log(props);

/*      Компонент отвечает за список телепередач 
 */

  return (
    <div className="news">
      <p>TV</p>
      <ul className={props.className} style={{listStyleType:'none'}}>{props.children(props.items)}</ul>
    </div>
  );
}

export default Tv;