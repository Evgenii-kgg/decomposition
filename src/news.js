import React from "react";

function ListNews(props) {
  console.log(props);

/*    Компонент отвечает за список новостей 
 */
  return (
    <div className="news">
      <div style={{textAlign: 'left',marginLeft: '300px'}}>Новости</div>
      <ul className={props.className} style={{listStyleType:'none'}}>{props.children(props.items)}</ul>
    </div>
  );
}

export default ListNews;
