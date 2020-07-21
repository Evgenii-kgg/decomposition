import React from 'react';

function NewsItem(props) {

    console.log(props);
    
/*      Компонент отвечает за каждый пункт новостей по отдельности 
 */
    return (
        <div className="news" style={{display:'flex'}}>
            <img src={props.logo} style={{height:'30px'}} />
            <li className = {props.className}>{props.children}</li>
        </div>
      );
  }
  
  export default NewsItem;
