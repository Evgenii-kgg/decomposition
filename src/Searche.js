import React from "react";

class Searche extends React.Component {


/*        Компонент отвечает за поиск и переходы на другие вкладки
 */

    constructor(props) {
        super(props);
        this.state = {
          search: "",
        };
      }

  handleChangeData(event) {
    this.setState({
        search: event,
    });
  }
  render() {
    // console.log(props);
    

    return (
      <div className="Searche" >
          <div><p>Видео Картинки Новости Карты Маркет Маркет ещё...</p></div>
          {/* <div>{this.props.tag.filter()}</div> */}
          <div style={{display:'flex', justifyContent: 'center'}}>
        <p>Яндекс</p>
        <input
          type="text"
          name="data"
          value={this.state.data}
          onChange={(event) => this.handleChangeData(event.target.value)}
        />
        {/* <img src={props.logo} className="news-img" /> */}
        <button>Search</button>
      </div>
      </div>
    );
  }
}

export default Searche;
