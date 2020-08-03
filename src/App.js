import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ListNews from "./news";
import NewsItem from "./newsItem";
import Searche from "./Searche";
import Weather from "./weather";
import TvItem from './tvItem';
import Tv from './tv';
import OnLine from './onLine';
import OnLineItem from './OnLineItem';
import ItemList from './ItemList';

function App() {

/*  Корневой компонент от куда все компоненты получают информацию 
 */
  const news = [
    "Врио губернатора Хабаровского края Дегтярев прибыл в регион",
    "Минобороны заявило о готовности вакцины от коронавируса",
    "На первом этапе международные полеты разрешат из шести городов России",
    "Кадыров ответил на заявление Помпео о введении санкций против него",
    "Минобороны заказало разработку единого двигателя для истребителей «Су»",
  ];

  const tags = [
    "Видео",
    "Картинки",
    "Новости",
    "Карты",
    "Маркет",
    "Переводчик",
    "ещё...",
  ];
  const weathers = ['17°']

  const tv = ["15:10 Давай поженимся! Актриса из Симферополя",
    '16:00 Мужское / Женское. Тайная жизнь Лолиты. Продолжение',
    "17:00 Мужское / Женское. Эх, Вася, Вася!",
    "18:00 Вечерние новости (с субтитрами)",
    "18:40 На самом деле",
    ];

    const onLine = ['Управление как искусство',
  'Ночь. Мир в это время',
'Андрей Вознесенский',
'Митап разработчиков'];

  return (
    <div className="App">
      <p>Сейчас в СМИ в Москве 21 июля, вторник 12:12</p>
      <div className="news">
        <div className="news">
          <ListNews className="list" items={news} logo={logo}>
            {(items) =>
              items.map((item, index) => (
                <NewsItem key={index} logo={logo}>
                  {item}
                </NewsItem>
              ))
            }
          </ListNews>
        </div>
      </div>
      <div className="searche">
        <Searche tag={tags} />
      </div>
      <div className='Ad'>
      <img src={logo} style={{height:'70px'}} />
      </div>
      <div className="all" style={{display:"flex"}}>
        <div className="weather">
          <Weather weather={weathers} logo={logo}/>
        </div>
        <div className="tv">
        <Tv className="list" items={tv} logo={logo}>
            {(items) =>
              items.map((item, index) => (
                <ItemList key={index} >
                  {item}
                </ItemList>
              ))
            }
          </Tv>
        </div>
        <div className="tv">
        <OnLine className="list" items={onLine} logo={logo}>
            {(items) =>
              items.map((item, index) => (
                <ItemList key={index} logo={logo}>
                  {item}
                </ItemList>
              ))
            }
          </OnLine>
        </div>
      </div>
    </div>
  );
}

export default App;
