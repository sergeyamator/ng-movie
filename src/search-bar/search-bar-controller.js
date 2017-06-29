class SearchBar {
  onChangeSearchText(clear) {
    const text = clear ? '' : { text: this.searchText };
    this.onChangeText(text);
  }
}

export default SearchBar;

