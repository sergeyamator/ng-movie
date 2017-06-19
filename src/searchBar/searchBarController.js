export default function () {
  const vm = this;

  Object.assign(vm, {
    clearSearchText,
  });

  vm.searchText = '';

  function clearSearchText() {
    vm.searchText = '';
  }
}
