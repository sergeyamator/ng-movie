
export default function (movieService) {
  const vm = this;

  Object.assign(vm, {
    clearSearchText,
    getVideo,
  });

  function getVideo(text) {
    movieService.getVideoByText(text)
      .then(({ data }) => {
        vm.movies = data.results;
      });
  }

  function clearSearchText() {
    vm.searchText = '';
  }
}
