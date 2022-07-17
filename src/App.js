import React from "react";

export default class app extends React.Component {
  mensagem = () => {
    return <h2>Fala meus amigos</h2>;
  };

  dobro = (numero) => {
    return <h3>{numero * 2}</h3>;
  };

  render() {
    return (
      <>
        {this.mensagem()}
        {this.dobro(2)}
      </>
    );
  }
}
