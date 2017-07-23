class SearchBarItem extends React.Component {
    render() {
        return (
                    <div>
                         <ul style={{listStyleType: "none"}}>
                         { this.props.items.map((item) =>
                                 <li className="col-xs-6 col-sm-4">
                                    <p class="marketing-byline">{item.name}</p>
                                          <a class="thumbnail" href={this.props.link} target="_blank">
                                           <img src="/static/img/example-nb/ijulia-preview.png" width="200" height="200"/>
                                          
                                          </a>
                                 </li>
                                 )}
                         </ul>
                     </div>
        ) 
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Search Bar soon come",
            searchString: "",
            countries: props.items,
            pageOfItems: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }

    handleChange() {
        this.setState({searchString: event.target.value});
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    handleSubmit() {
        let search = this.state.searchString;
        if(search.length > 0) {
            this.setState({countries: 
                this.state.countries.filter((country) => {
                    return country.name.toLowerCase().match( search );
                })
            });
            console.log("updated countries list");
        }
        event.preventDefault();
    }

    render() {
        console.log("rendering");
        return (
                <div className='row' style={{align: "center"}}>
                    <div className="center">
                        <h2> {this.state.message} </h2>
                        <form onSubmit={this.handleSubmit}>
                            <div id="search-box" className="input-group">
                                <input className="form-control" value={this.state.searchString} onChange={this.handleChange}
                                            id="main-input" type="text" autofocus="autofocus" placeholder="Search"/>
                            </div>
                        </form>
                    </div>
                    <SearchBarItem items={this.state.pageOfItems }/>
                    <Pagination items={this.state.countries} onChangePage={this.onChangePage} />
                </div>
               )
    } 
}

let countries = [
    {"name": "Sweden"}, {"name": "China"}, {"name": "Peru"}, {"name": "Czech Republic"},
    {"name": "Bolivia"}, {"name": "Latvia"}, {"name": "Samoa"}, {"name": "Armenia"},
    {"name": "Greenland"}, {"name": "Cuba"}, {"name": "Western Sahara"}, {"name": "Ethiopia"},
    {"name": "Malaysia"}, {"name": "Argentina"}, {"name": "Uganda"}, {"name": "Chile"},
    {"name": "Aruba"}, {"name": "Japan"}, {"name": "Trinidad and Tobago"}, {"name": "Italy"},
    {"name": "Cambodia"}, {"name": "Iceland"}, {"name": "Dominican Republic"}, {"name": "Turkey"},
    {"name": "Spain"}, {"name": "Poland"}, {"name": "Haiti"}
    ];

ReactDOM.render(
        <SearchBar items={countries }/>,
        document.getElementById('content')
    )
