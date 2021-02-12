function fn1() {
  const fig = 'Circle';
  const pi = 3.14159265359;
  let r = document.getElementById('num1').value;
  const circleArea = pi * r ** 2;

  if (fig) {
    document.getElementById('para1').innerHTML = `The area of circle is ${circleArea}`;
  }
}