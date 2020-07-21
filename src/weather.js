import React from "react";

function Weather(props) {
  console.log(props);

/*      Компонент отвечает за погоду 
 */

  return (
    <div className="weather" style={{ display: "flex" }}>
      <img src={props.logo} style={{ height: "30px" }} />
      {props.weather}
      <p>Вечером +18,<br /> ночью +14</p>
    </div>
  );
}

export default Weather;
