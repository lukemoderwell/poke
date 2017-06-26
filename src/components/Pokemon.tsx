import * as React from 'react';

export interface PokemonProps { 
    id?: number;
    name?: string; 
    typeA?: string;
    typeB?: string;
    src?: string;
}

export interface PokemonState {
    //level: number;
}

export class Pokemon extends React.Component<PokemonProps, PokemonState> {

    constructor() {
        super();
        this.state = {
            level: 5,
        }
    }

    render(): JSX.Element {
        const {id, name, typeA, typeB, src} = this.props;
        return (
            <div className={name}>
                {src && <img className="PokemonSprite" src={src} width="150px" />}
                <h2 className="PokemonName"><span className="PokemonId">{id}</span> {name}</h2>
                <h3 className="PokemonTypeA">{typeA}-type</h3>
                {this.props.typeB && <h3 className="PokemonTypeB">{typeB}-type</h3>}
            </div>
        );
    }
}
