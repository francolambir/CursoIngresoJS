/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  var num1 = 10;
  var num2 = 20;

  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num3 = num1 % num2;

  alert (num3);

}
