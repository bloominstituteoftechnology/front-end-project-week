class Search extends Component {
    state = {
      search: ''
      };
      handleInput = e => { this.props.search(e.target.value) };
      render() {
        console.log("Props: ", this.props);
        return <Input onChange={this.handleInput} placeholder="Search" />;
      }
    }
    
    const mapStateToProps = state => ({
      notes: state.notes
    });

export default connect(mapStateToProps, actions)(Search);