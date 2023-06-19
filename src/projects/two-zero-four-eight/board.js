import React from 'react';
import Square from './square';

const Board = (props) => {
  let layout = [];
  for (let i = 0; i < 9; i+=3) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <Square
          key={i+j}
          value={props.squares[i + j]}
          onClick={() => props.onClick(i + j)}
        />
      );
    }
    layout.push(
      <div key={i} className='board-row'>
        {row}
      </div>
    );
  }

  return <div>{layout}</div>;
};

export default Board;
