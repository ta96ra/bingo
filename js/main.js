'use strict';

{
  // 各列を作る処理
  function createColumn(col){
    const source = [];
    for (let i = 0; i < 15; i++){
      // 1...15
      // source[i] = i + 1 + 15 * 0;
      // 16...30
      // source[i] = i + 1 + 15 * 1;
      // 31...45
      // source[i] = i + 1 + 15 * 2;
      source[i] = i + 1 + 15 * col;
    }
    const column = [];
    for(let i = 0; i < 5; i++){
      column[i] = source.splice(Math.floor(Math.random() * source.length),1)[0];
      // spliceの返り値は配列で取得されるため、最初の値（要素）で取得するため[0]としている
    }
    return column;
  }

  // 各列を複製して全ての表を作る処理
  function createColumns(){
    const columns = [];
    // columns[0] = createColumn(0);
    // columns[1] = createColumn(1);
    // columns[2] = createColumn(2);
    // columns[3] = createColumn(3);
    // columns[4] = createColumn(4);
    // ※解説 column[縦の列] = 関数createcolumn(col);
    for(let i = 0; i < 5; i++){
      columns[i] = createColumn(i);
      // 各列の数値をcolumns[i]に代入している
    }
    columns[2][2] = 'FREE'
    return columns;
  }

  // console.table(columns);

  // 配列の行と列を反転させる処理
  function createBingo(columns){
    const bingo = [];
    for(let row = 0; row < 5; row++){
      bingo[row] = [];
      for(let col = 0;col < 5; col++){
        bingo[row][col] = columns[col][row];
      }
    }
    // console.table(bingo);
    return bingo;
  }

  // DOMを操作して表示させる処理
  function renderBingo(bingo){
    // 引数bingoにして関数createBingoで定義した定数bingoを受け取る
    for(let row = 0; row < 5; row++){
      const tr = document.createElement('tr');
      // tr要素を５個作成
      for(let col = 0; col < 5; col++){
        const td = document.createElement('td');
        td.textContent = bingo[row][col];
        // td要素のtextを代入
        tr.appendChild(td);
        // tr要素の子要素の末尾にtd要素の追加
      }
      document.querySelector('tbody').appendChild(tr);
      // tbodyの子要素の末尾にtr要素の追加
    }
  }

  const columns = createColumns();
  // 各列を作る処理を定数columnsに代入
  const bingo = createBingo(columns);
  // bingo用に行列を反転したものを定数bingoに代入
  renderBingo(bingo);
  // そのbingoでDOM操作で描画


}  


  
  // const source = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  // const source = [];
  // for (let i = 0; i < 15; i++){
  //   source[i] = i+1;
  // }

  // Math.floor(Math.random() * source.length)
  // splice(変化が開始する位置、削除数、追加する要素、…)つまり、変化の開始する位置を乱数にしてその数字を削除している

  // const b = [];
  // b[0] = source.splice(Math.floor(Math.random() * source.length),1)[0];
  // b[1] = source.splice(Math.floor(Math.random() * source.length),1)[0];
  // b[2] = source.splice(Math.floor(Math.random() * source.length),1)[0];
  // b[3] = source.splice(Math.floor(Math.random() * source.length),1)[0];
  // b[4] = source.splice(Math.floor(Math.random() * source.length),1)[0];

  // for(let i = 0; i < 5; i++){
  //   b[i] = source.splice(Math.floor(Math.random() * source.length),1)[0];
  // }

  // spliceの返り値は複数になることもあるので、要素が１つでも配列になるため、それぞれの要素を取り出す必要がある。
