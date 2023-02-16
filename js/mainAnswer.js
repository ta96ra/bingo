'use strict';

{
  // 各列を作る処理
  function createColumn(col){
    const source = [];
    for (let i = 0; i < 15; i++){
      source[i] = i + 1 + 15 * col;
    }
    const column = [];
    for(let i = 0; i < 5; i++){
      column[i] = source.splice(Math.floor(Math.random() * source.length),1)[0];
    }
    return column;
  }

  // 各列を複製して全ての表を作る処理
  function createColumns(){
    const columns = [];
    for(let i = 0; i < 5; i++){
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE'
    return columns;
  }

  // DOMを操作して表示させる処理
  function renderBingo(columns){
    for(let row = 0; row < 5; row++){
      const tr = document.createElement('tr');
      // tr要素を５個作成
      for(let col = 0; col < 5; col++){
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        // td要素のtextを代入
        tr.appendChild(td);
        // tr要素の子要素の末尾にtd要素の追加
      }
      document.querySelector('tbody').appendChild(tr);
      // tbodyの子要素の末尾にtr要素の追加
    }
  }

  const columns = createColumns();
  renderBingo(columns);
}  