import * as React from 'react';

interface SearchProps {
    //handleSubmit: () => void;
}

interface SearchState {
    value: string;
}

export class Search extends React.Component<SearchProps, SearchState> {

    constructor(props){
        super(props);
        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        console.log('ID ' + this.state.value);
        e.preventDefault();
    }

    render(): JSX.Element {
        return (
            <form className="Search">
                <input type="number" onChange={this.handleChange} value={this.state.value} />
                <button type="submit" onClick={this.handleSubmit}>Update</button>
            </form>
        );
    }
}
