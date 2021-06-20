function magicSquare(n) {
  let matrix = [];
  let x = 0;
  let y = (n - 1) / 2;
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
  for (let i = 0; i < n * n; i++) {
    pos(i + 1);
  }
  function pos(value) {
    matrix[x][y] = value;
    let tx = x;
    let ty = y;
    x--;
    if (x < 0) {
      x += n;
    }
    y--;
    if (y < 0) {
      y += n;
    }

    if (matrix[x][y] !== 0) {
      x = tx + 1;
      if (x === n) {
        x = 0;
      }
      y = ty;
    }
  }
  return matrix;
}

function isMagicSquare(mat) {
  let N = mat.length;
  let sumd1 = 0;
  let sumd2 = 0;
  for (let i = 0; i < N; i++) {
    sumd1 = sumd1 + mat[i][i];
    sumd2 = sumd2 + mat[i][N - 1 - i];
  }
  if (sumd1 != sumd2) return false;

  for (let i = 0; i < N; i++) {
    let colSum = 0;
    let rowSum = 0;
    for (let j = 0; j < N; j++) {
      rowSum += mat[i][j];
      colSum += mat[j][i];
    }
    if (rowSum != colSum || colSum != sumd1) return false;
  }
  return true;
}

let oddNumber = 3;

console.log(magicSquare(oddNumber));
console.log(isMagicSquare(magicSquare(oddNumber)));
