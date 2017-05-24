import * as React from 'react';

export interface PokemonProps { 
    name: string; 
    type: string;
    src?: string;
}

export interface PokemonState {
    level: number;
}

export class Pokemon extends React.Component<PokemonProps, PokemonState> {

    constructor() {
        super();
        this.state = {
            level: 5,
        }
        this.levelUp = this.levelUp.bind(this);
    }

    levelUp() {
        console.log('you leveled up');
        this.setState({level: this.state.level + 1});
    }

    render(): JSX.Element {
        const {name, type, src} = this.props;
        const {level} = this.state;
        return (
            <div className={name}>
                {src && <img src={src} width="100px" />}
                <h2>{name}</h2>
                <h3>{type}-type Pokemon</h3>
                <span>Level {level}</span>
                <button onClick={this.levelUp}>Level Up</button>
            </div>
        );
    }
}
