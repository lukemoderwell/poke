import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/main.scss';

import { Pokedex } from "./components/Pokedex";


ReactDOM.render(
    <Pokedex title="Pokedex" />,
    document.getElementById("app")
);
