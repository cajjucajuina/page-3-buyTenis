import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div className="category-group">
          <a>Home/</a>
          <a>Produto/</a>
          <a>Tenis/</a>
          <a>Nike/</a>
          <a>Tênis Nike Revolution 6 Next Nature Masculino</a>
        </div>
        <div className="Tenis-img">
          <img className="img-main" src=""></img>
        </div>
        <div className="card-info">
          <h1 className="NameProduct">
            Tênis Nike Revolution 6 Next Nature Masculino
          </h1>
          <p className="tenis-ref">Casual | Nike | REF:38416711</p>
          <div className="rating">
            <span className="score">4.7★ </span>
            <a className="avaliation">(90 avaliações) </a>
            <span className="stars">★★★★☆</span>
          </div>

          <div class="price-info">
            <p class="old-price">R$219,00</p>
            <p class="new-price">219,00</p>
          </div>
          <p className="title-descripition">Descrição do produto</p>
          <p className="descripition">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.{' '}
          </p>
          <p className="button-sizes"></p>
          <button className="size">39</button>
          <button className="size">40</button>
          <button className="size">41</button>
          <button className="size">42</button>
          <p className="colors button"></p>
          <button className="color">-</button>
          <button className="color">-</button>
          <button className="color">-</button>
          <button className="color">-</button>

          <button className="buy">comprar</button>
        </div>

        <div className="grid-group">
          <p className="products-relate">Produtos relacionados</p>
          <a className="see-all">ver todos</a>
          <div className="grid-1">
            <img className="tenis-1"></img>
            <img className="tenis-2"></img>
          </div>
          <div className="grid-2"></div>
        </div>
      </main>
    </>
  );
}

export default App;
