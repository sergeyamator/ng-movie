export default function () {
  const vm = this;

  Object.assign(vm, {
    getStarsArray,
  });

  function getStarsArray(num) {
    const starsArray = [];
    num = Math.round(num);

    for (let i = 1; i <= num; i++) {
      starsArray.push(i);
    }

    return starsArray;
  }
}