import React,{Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render() {
       // return <input onChange={(event) => console.log(event.target.value)} />;

       return (
           <div>
                <input className='search-bar'
                 value={this.state.term}
                 onChange={(event) => this.onInputChange(event.target.value)} />
                {/* Value of the input: {this.state.term} */}
          </div>
       );
    
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
      }
   

}

export default SearchBar;