function fn1() {
  const fig = 'Circle';
  const pi = 3.14159265359;
  let r = document.getElementById('num1').value
  const circleArea = pi*r**2;
  
  switch (fig) {
    case 'Circle':
      document.getElementById('para1').innerHTML = 'The area of circle is ' + circleArea;
      break;
    default:
      document.getElementById('para1').innerHTML = 'Please inter valid data.' ;
  }
}