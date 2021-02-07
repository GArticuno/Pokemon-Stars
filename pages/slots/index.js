import {StylesSheet} from 'react';
import Widget from '../../src/components/Widget';
import Button from '../../src/components/Button';
import Popup from 'reactjs-popup';
import db from '../../db.json';
import styled from 'styled-components';

const SPopup= styled(Popup)`
&-content {
  margin: auto;
  color: ${({ theme }) => theme.colors.contrastText};
  background: ${({ theme }) => theme.colors.mainBg};
  width: 50%;
  padding: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
}
&-arrow {
  color: ${({ theme }) => theme.colors.secundary};;
}
[role='tooltip']&-content {
  width: 250px;
}

&-overlay {
  background: rgba(0, 0, 0, 0.5);
}
`
function ivcheck(iv){
  if(iv===undefined){
    return ''
  }
  else{
    return `IVs:${iv}`
  }
}
const data = db.pokemons;

const Slots =data.map((d, index) =>
  <Widget key={index}>
    <Widget.Gif>
      <div>
        <img src={`https://play.pokemonshowdown.com/sprites/ani/${d.name.toLowerCase()}.gif`}/>
      </div>    
    </Widget.Gif>
    <Widget.Name>
      <div id="name">{d.name}</div>
      <div id="ability">{d.Ability}</div>
    </Widget.Name>
    <Widget.Item>
      <section id="itens">
        <div id="icon">
          <img src={`/hold-item/${d.item.toLowerCase().replace(' ','-').replace('-berry','')}.png`}/>
        </div>
        <div>{d.item}</div>
        <SPopup
          class="popup"
          trigger={<Button className="button"> import </Button>}
          position="top center"
          nested
          >
            <span>
              <pre>
{`${data[index].name} @ ${data[index].item}
Ability: ${data[index].Ability}
EVs: ${data[index].EVs}
${data[index].nature} Nature
${ivcheck(data[index].IVs)}
${data[index].moves[0]}
${data[index].moves[1]}
${data[index].moves[2]}
${data[index].moves[3]}`}</pre>
            </span>
        </SPopup>
      </section>
    </Widget.Item>
    <Widget.Content>
      <section id="moveset">
        <div id="moves">{d.moves[0]}</div>
        <div id="moves">{d.moves[1]}</div>
        <div id="moves">{d.moves[2]}</div>
        <div id="moves">{d.moves[3]}</div>
      </section>
    </Widget.Content>
  </Widget>
)

export default function index(){
    return(
        <>
        {Slots}
        </>  
    )
}