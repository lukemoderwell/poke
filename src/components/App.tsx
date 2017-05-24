import * as React from 'react';

import { Pokemon } from "../components/Pokemon";

export class App extends React.Component<undefined, undefined> {
    render(): JSX.Element {
        return (
            <div className="App">
                <Pokemon 
                    name="Bulbasaur"
                    type="Grass"
                    src="http://cartoonbros.com/wp-content/uploads/2016/11/Bulbasaur-11.png" />
            
                <Pokemon 
                    name="Squirtle"
                    type="Water"
                    src="http://vignette4.wikia.nocookie.net/pokemon/images/8/85/007Squirtle_Dream.png/revision/latest?cb=20140916184402" />
                
                <Pokemon 
                    name="Charmander"
                    type="Fire"
                    src="https://vignette3.wikia.nocookie.net/pokemon/images/b/b9/004Charmander_Dream.png/revision/latest?cb=20140603214923" />
            </div>
        );
    }
}
