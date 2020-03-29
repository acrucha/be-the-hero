import React from 'react';

import './global.css'

import Routes from './routes'

/* o "componente" do react nada mais é que uma função que retorna um código html.
E quando esse html está escrito dentro do javascript, a gente chama de JSX (javascript XML) */

//toda vez que eu quero atualizar uma informação presente na minha função do react eu não uso uma variável, e sim um Estado
//eu posso criar um estado e chamar uma função para atualizar esse estado integralmente
//se eu quiser criar um contador ele deve ser um Estado
function App() {
    return(
      <Routes />
    );
}

export default App;


/*
  const [counter, setCounter] = useState(0); // os colchetes indicam o que será cada posição do array que o useState me retorna 
  //(ele me retorna um array de 2 posições, o valor e a função de atualização)

  function increment(){
    setCounter(counter + 1);//logo, posso modificar o valor do contador a partir do parâmetro da função serCounter 
  }
  //dentro da tag button, eu posso chamar a função de incrementar o contador toda vez que o botão for apertado
  return (
    <div>
      <Header>
        Contador: {counter}
      </Header>
      <button onClick={increment}> Adicionar </button>
    </div>
   

*/