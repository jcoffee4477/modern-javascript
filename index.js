const dayjs = require('dayjs')
console.log(dayjs('2018-08-08'))
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');


console.log("hello world")



function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

console.log(square(2, 4, 7.5, 8, 11.5, 21))


console.log("hellooooooooooooooooooooo")