export default function () {
  const vm = this;

  Object.assign(vm, {
    clearSearchText,
  });

  vm.title = 'Find movie';

  vm.searchText = 'ss';

  function clearSearchText() {
    debugger
    alert('hi')
    vm.searchText = '';
  }
}
