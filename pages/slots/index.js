import Widget from '../../src/components/Widget';
import Button from '../../src/components/Button';
import Popup from '../../src/components/Popup';
import db from '../../db.json';

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
        <Popup
          trigger={<Button id="btnimport"> import </Button>}
          position="top center"
          nested
          >
            <span>
              <pre id="becopy">
{`${data[index].name} @ ${data[index].item}
Ability: ${data[index].Ability}
EVs: ${data[index].EVs}
${data[index].nature} Nature
${ivcheck(data[index].IVs)}
-${data[index].moves[0]}
-${data[index].moves[1]}
-${data[index].moves[2]}
-${data[index].moves[3]}`}</pre>
            </span>
            <Button id="btncopy" onClick={()=>Copyteam()}>copy</Button>
        </Popup>
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

function Copyteam(){
  document.getElementById("btncopy").innerHTML= "copied";
  var team= document.getElementById("becopy");
  var text= document.createElement('textarea');  
  text.value=team.textContent
  document.body.appendChild(text);
  text.select();
  document.execCommand("Copy");
  text.remove();
  
}
export default function index(){
    return(
        <>
        {Slots}
        </>  
    )
}