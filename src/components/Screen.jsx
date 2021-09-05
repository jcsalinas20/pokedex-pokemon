import $ from "jquery";
import { useEffect, useState } from "react";
import imgPokeball from "../images/pokeball_icon.png";

function Screen() {
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
        <div className="screen">
            <div className="list-pokemons"></div>
        </div>
    )
}

export default Screen;