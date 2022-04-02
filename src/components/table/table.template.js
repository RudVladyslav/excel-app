const CODES = {
  A: 65,
  Z: 90
}

function toCell(el) {
  return `
    <div class="cell" contenteditable>${el}</div>
  `
}

function toColumn(el) {
  return `
      <div class="row-column">
      ${el}
      </div>
  `
}

function createRow(content, index = '') {
  return ` 
  <div class="row">
        <div class="row-info">${index}</div>
        <div class="row-data">${content}</div>
   </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function tableTemplate(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map((el, index) => toChar(el, index))
      .map(el => toColumn(el))
      .join('')
  // generate first row
  rows.push(createRow(cols) )

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(el => toCell(el))
        .join('')
    rows.push(createRow(cells, i+1))
  }

  return rows.join('')
}
