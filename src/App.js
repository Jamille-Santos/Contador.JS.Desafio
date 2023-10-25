import "./styles.css";
import React, { useState, useEffect } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  const [backgroundImg, setBackgroundImg] = useState(
    "https://img2.akspic.ru/crops/6/0/806/806-makrosemka-chernyy-bomba-1920x1080.jpg"
  );
  // Imagem de fundo inicial (bomba)

  const adicionar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const subtrair = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    if (contador === 10) {
      setBackgroundImg(
        "https://super.abril.com.br/wp-content/uploads/2017/04/a-22bomba-do-bem22-e-a-volta-do-fantasma-nuclear1.jpg?quality=90&strip=info&w=1024&h=682&crop=1"
      );
      // A explosão da bomba ksks
    }
  }, [contador]);

  return (
    <div
      className="contador-container"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1 className="contador-titulo">Contador: {contador}</h1>
      <div className="contador-botão">
        <button className="contador-botão" onClick={subtrair}>
          Não tem como voltar atrás :(
        </button>
        <button className="contador-botão" onClick={adicionar}>
          Não aperte esse botão!
        </button>
      </div>
    </div>
  );
}

export default Contador;

// eu queria fazer algo engraçado, foi um pouco trabalhoso pq tive que ver alguns videos e ler muito conteudo ksks
// o useEffect não me lembro de ser dito em aula, mas ele foi o tempero secreto ksk
