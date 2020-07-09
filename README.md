# MyApp

# Diferencias entre let y var : 
  La diferencia principal es el ambito de la variable y la legibilidad del codigo
  var: La variable tipo var se puede utilizar en cualquier parte del codigo.
  let: La variable let solo se puede utilizar en el ambito donde se la declara además no puedes declarar variables del mismo nombre con let.

# Explicar el hilo de ejecución de Javascript: Javascript se ejecuta en un solo hilo, es decir tiene un pila de trabajo.
  Es decir se va apilando los procesos en el call stack y se va ejecutando uno por uno, por ende la programacion es no bloqueante y se utiliza las funciones
  asincronas para simular los multihilos.

# Para qué sirve una Interface en Typescript: 
  Una interfaz en un contrato que se le determina a una entidad ya sea por tipo o por metodo. Por ende cuando se mplemenente
  dicho contrato en una clase, metodo, etc.. está debe cumplir con el contrato de la interfaz

# Diferencias entre foreach y map: Son metodos de javascript para recorrear arreglo.
  foreach:Recorre los items de un arreglo determinado, devuelve undefined
  foreach:Recorre los items de un arreglo determinado y devuelve un nuevo arreglo con lo que se retorna en la funcion ejecutada.

# ¿Qué es un observable?: 
  Los observables permiten como su nombre lo indica observar cierta acción de un sujeto. En la programacion existe un patron observer,
  el cual cuenta con sujeto y un observador, un ejemplo claro estpá en el plugin jquery:$("test").on("click", ()=>{console.log("test")}).
  Este ejemplo lo que realiza es que el elemento dom se está subcribiendo a un observable, entonces el observable estara atento al click, una vez hecho click, el observable mandara un notifiacion y está ejecutara el callback dek evento.

# Explicar la utilidad de un closure con un ejemplo aplicado a la web que se ha pedido desarrollar: Son cierres que guardan en memoria referencias de estado.
  Un claro ejemplo es cuando dibujo la lista de clientes y dejo como referencia por cada iteracion su valor de client (click)="onEdit(client), enttonces cuando
  hago click en editar cualquier elemento de la lista, este tendra su estado en memoria de cuando lo reccorio.
```angular
  <tr *ngFor = "let client of clientList">
    <td>{{client.name}}</td>
    <td>{{client.lastName}}</td>
    <td>{{client.age}}</td>
    <td>{{client.dateOfBirth}}</td>
    <td>
      <span class="material-icons icon-image-preview iconAction" data-toggle="tooltip" data-placement="top" title="Edit" (click)="onEdit(client)">edit</span>
      <span class="material-icons icon-image-preview iconAction" data-toggle="tooltip" data-placement="top" title="Delete" (click)="onDelete(client)">delete</span>
    </td>
  </tr>
```
