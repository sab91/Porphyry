import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getConfig from '../../config/config.js';
import Fragment from '../Item/Fragment'

// Get the configured list display mode
let listView = getConfig('listView', {
  mode: 'picture',
  name: 'name',
  image: 'thumbnail'
});

class Corpora extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: "item"
    };
  }

  componentDidMount() {
    
  }
  render() {
    const {items} = this.props
    
    let view = this._getView();
    let total = this.props.from;
    return(
      <div className="col-md-8 p-4">
        <div className="Subject">
          <h2 className="h4 font-weight-bold text-center">
            <button className="buttonView" onClick={()=>this.setState({view : "item"})}>
            <b style={{color: this.state.view === 'item' ? '#8b0000' : null}}>Item</b>
            </button>
            <button className="buttonView" onClick={()=>this.setState({view : "fragment"})}>
            <b style={{color: this.state.view === 'fragment' ? '#8b0000' : null}}>Fragment</b>
            </button>
            {this.props.ids.join(' + ')}
            <span className="badge badge-pill badge-light ml-4">{items ? items.length : 0} / {total}</span>
          </h2>
          <div className="Items m-3">
            {view}
          </div>
        </div>
      </div>
    );
  }
  _getView(){
    switch (this.state.view) {
      case "item":
        return this._getItems();
        break;
      case "fragment":
        return  <Fragment  from={this.props.fragments.length} items={this.props.fragments} viewpoint={this.props.viewpoint} />;
        break;
      default:
        return (<p> arrête de jouer avec le code</p>)
    }
  }
  _getItems() {
    return this.props.pictures.map(item =>
        <Picture key={item.id} item={item}
          id={item.corpus+'/'+item.id} />
    );
  }
}


function getString(obj) {
  if (Array.isArray(obj)) {
    return obj.map(val => getString(val)).join(', ');
  }
  return String(obj);
}

function Picture(items) {
 items=items.item;
  let uri = `/item/${items.corpus}/${items.id}`;
  let img = getString(items[listView.image]);
  let name = getString(items[listView.name]);
  return (
    <div className="Item">
      <Link to={uri}>
        <img src={img} alt={name}/>
      </Link>
      <div className="text-center">{name}</div>
    </div>
  );
}

export default Corpora;
