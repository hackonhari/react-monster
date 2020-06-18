import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';


class CardList extends React.Component{
  render(){
       return( <div className="card-list">
        {
            this.props.monsters.map(monster=>(
                <Card key={monster.id} monster={monster} />
            ))
          }   
        </div>
         )};
}

export default CardList;