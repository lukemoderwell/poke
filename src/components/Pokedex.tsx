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

    render(): JSX.Element {
        return (
            <div className="Pokedex">
                <h1>{this.props.title}</h1>
                <Search />
                <Pokemon 
                    id={this.state.pokeId || undefined}
                    name={this.state.pokeName || 'Loading'}
                    typeA={this.state.pokeTypeA || ''}
                    typeB={this.state.pokeTypeB || ''}
                    src={this.state.pokeSprite} />
            </div>
        );
    }
}
