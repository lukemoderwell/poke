import * as React from 'react';
import axios from 'axios';

import { Pokemon } from '../components/Pokemon';
import { Search } from '../components/Search';

interface PokedexState {
    pokeName?: string;
    pokeTypeA?: string;
    pokeTypeB?: string;
    pokeSprite?: string;
    pokeId?: number;
}

interface PokedexProps {
    title: String;
}

export class Pokedex extends React.Component<PokedexProps, PokedexState> {
    constructor(props: any){
        super(props);
        this.state = {
            pokeName: '',
            pokeTypeA: '',
            pokeTypeB: '',
            pokeSprite: 'http://placehold.it/100x100',
            pokeId: 1
        }
        //this.refreshData = this.refreshData.bind(this);
        this.getData = this.getData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(`http://pokeapi.co/api/v2/pokemon/${this.state.pokeId}/.json`)
            .then(res => {
                const results = res.data;
                const name = results.name;
                const id = results.id;
                const type1 = results.types[0].type.name;
                if (res.data.types.length > 1) {
                    const type2 = results.types[1].type.name;
                    this.setState({pokeTypeB: type2});
                }
                const sprite = results.sprites.front_default;
                console.log(results);
                this.setState({pokeName: name, pokeTypeA: type1, pokeSprite: sprite});
            }
        );
    }

    handleChange(e) {
        this.setState({pokeId: e.target.value});
    }

    handleSubmit(e) {
        this.getData();
        e.preventDefault();
    }

    render(): JSX.Element {
        return (
            <div className="Pokedex">
                <h1>{this.props.title}</h1>
                <form className="Search">
                    <input type="number" min="1" onChange={this.handleChange} value={this.state.pokeId} />
                    <button type="submit" onClick={this.handleSubmit}>Update</button>
                </form>
                <Pokemon 
                    id={this.state.pokeId || null}
                    name={this.state.pokeName || 'Loading'}
                    typeA={this.state.pokeTypeA || ''}
                    typeB={this.state.pokeTypeB || ''}
                    src={this.state.pokeSprite} />
            </div>
        );
    }
}
