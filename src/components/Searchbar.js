import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
    console.log(this.state.search)
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}