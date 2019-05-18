import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import getConfig from '../../config/config.js';
import Fragment from '../Item/Fragment';
import Switch from "react-switch";

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
        this.changeViewPossible = true;
    }

    componentDidMount(prevProps) {
        if (prevProps !== this.props) {
            if (!this.props.pictures || this.props.pictures.length === 0) {
                    this.changeViewPossible = false;
                    this.setState({view: 'fragment'})
            } else if (!this.props.fragments||this.props.fragments.length === 0) {
                    this.changeViewPossible = false;
                    this.setState({view: 'item'})
            }
            else {
                this.changeViewPossible = true;
                this.setState({view: 'item'})
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            if (!this.props.pictures || this.props.pictures.length === 0) {
                this.changeViewPossible = false;
                this.setState({view: 'fragment'})
            } else if (!this.props.fragments||this.props.fragments.length === 0) {
                this.changeViewPossible = false;
                this.setState({view: 'item'})
            }
            else {
                this.changeViewPossible = true;
                this.setState({view: 'item'})
            }
        }
    }

    render() {
        const {items} = this.props;
        let view = this._getView();
        let total = this.props.from;
        let choiceView = this._choiceView();
        return (
            <div className="col-md-8 p-4">
                {choiceView}
                <div className="Subject">
                    <h2 className="h4 font-weight-bold text-center">
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

    _getView() {
        switch (this.state.view) {
            case "item":
                return this._getItems();
            case "fragment":
                return <Fragment from={this.props.fragments.length} items={this.props.fragments}
                                 viewpoint={this.props.viewpoint}/>;
            default:
                return (<p> arrête de jouer avec le code</p>)
        }
    }

    _getItems() {
        return this.props.pictures.map(item =>
            <Picture key={item.id} item={item}
                     id={item.corpus + '/' + item.id}/>
        );
    }

    _changeview() {
        if (this.state.view === "item") {
            this.setState({view: "fragment"})
        }
        if (this.state.view === "fragment") {
            this.setState({view: "item"})
        }
    }

    _choiceView() {
        if (this.changeViewPossible) {
            let changeview = this._changeview.bind(this);
            return (
                <h4>
                    <label>
                        <span><b>choix de la vue:</b> image   </span>
                        <Switch onChange={changeview}
                                checked={!(this.state.view === "item")}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                height={20}
                                width={45}
                                onColor="#888"
                        />
                        <span>   fragment</span>
                    </label>
                </h4>);
        }
    }
}


function getString(obj) {
    if (Array.isArray(obj)) {
        return obj.map(val => getString(val)).join(', ');
    }
    return String(obj);
}

function Picture(items) {
    items = items.item;
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
