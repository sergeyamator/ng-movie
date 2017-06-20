export default function () {
  const vm = this;

  vm.title = 'Find movie';
  vm.getTitle = function () {
    return vm.title;
  };
}
