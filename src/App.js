import $ from "jquery";
import { useEffect, useState } from "react";
import imgPokeball from "./images/pokeball_icon.png";
import imgLogo from "./images/logo.png";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (list.length === 0) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setList(json.results);
        });
    } else {
      console.log(list);
      $(".list-pokemons").html("");
      for (const item of list) {
        fetch(item.url)
          .then((res) => {
            return res.json();
          })
          .then((pokemon) => {
            $(".list-pokemons").append(
              `<div>
                  <div>
                    <img class="pokemon-icon" src="${pokemon.sprites.other["official-artwork"]["front_default"]}" alt="${item.name}" />
                  </div>
                  <div class="selected-pokemon">
                    <div class="triangle"></div>
                    <div class="square">
                      <div class="midd-box">
                        <div class="center-rectangle">
                          <img src="${imgPokeball}" alt="pokeball" />
                        </div>
                        <a href="${item.url}" target="_blank">${item.name}</a>
                      </div>
                    </div>
                  </div>
                </div>`
            );
          });
      }
    }
  });

  return (
    <>
      <div className="bg"></div>
      <div className="logo-container">
        <a href="https://github.com/jcsalinas20/pokedex-pokemon" ><img src={imgLogo} alt="logo" width="350" /></a>
      </div>
      <main>
        <div className="div1">
          <div className="div1-1"></div>
          <div className="div1-2"></div>
          <div className="div1-3"></div>
          <div className="div1-4"></div>
        </div>
        <div className="div2">
          <div className="div2-1"></div>
          <div className="div2-2"></div>
          <div className="div2-3"></div>
          <div className="div2-4"></div>
        </div>

        <div className="top-left-btn"></div>
        <div className="top-right-btn"></div>
        <div className="bottom-left-btn"></div>
        <div className="bottom-right-btn"></div>

        <div className="middle-line"></div>
        <div className="center"></div>
        <div className="hide-middle-line"></div>

        <div className="screen">
          <div className="list-pokemons"></div>
        </div>

        <div className="pokeball-bg"></div>
        <div className="pokeball">
          <div className="pokeball-border-center"></div>
          <div className="pokeball-line"></div>
          <div className="pokeball-center"></div>
        </div>

        <div className="switch1">
          <div className="circle-switch"></div>
        </div>
        <div className="switch2">
          <div className="circle-switch"></div>
        </div>

        <div className="ventilador1"></div>
        <div className="ventilador2"></div>
        <div className="ventilador3"></div>
        <div className="ventilador4"></div>
        <div className="ventilador5"></div>

        <div className="btn1"></div>
        <div className="btn2"></div>
        <div className="btn3"></div>
      </main>
    </>
  );
}

export default App;
