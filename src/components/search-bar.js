import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    placeholder="Search Videos"
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    handleKeyDown(event) {
        if(this.key === 'Enter') {
            console('enter pushed');
        }
    }
}

export default SearchBar;