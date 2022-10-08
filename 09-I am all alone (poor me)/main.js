/*
  I am all alone (poor me)
  Story
  POTUS thinks he is all alone in the White House on Christmas Eve.

  But is he?

  The White House has a wall-penetrating radar security system that sees everything.

  Kata Task
  Process the radar image.

  Return true if POTUS really is home alone.

  Legend
  # walls
  X POTUS
  o elves
  Notes
  The house corners are square only
  The radar can also see into nearby buildings
  Examples
  
  ex1
    o                o        #######
  ###############             #     #
  #             #        o    #     #
  #  X          ###############     #
  #                                 #
  ###################################

  All alone --> true

  ex2
  #################
  #     o         #   o
  #          ######        o
  ####       #                
    #       ###################
    #                         #
    #                  X      #
    ###########################

  All alone --> false

*/

function allAlone(house) {
  // Find POTUS
  let pRow = 0,
    pCol = 0;
  for (let r = 0; r < house.length; r++) {
    for (let c = 0; c < house[r].length; c++) {
      if (house[r][c] == 'X') {
        pRow = r;
        pCol = c;
      }
    }
  }

  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let visited = house.map((row) => row.map((_) => false));
  console.log(visited);

  let stack = [[pRow, pCol]];
  while (stack.length) {
    let [currRow, currCol] = stack.pop();
    if (house[currRow][currCol] === 'o') return false;

    visited[currRow][currCol] = true;
    for (const [dRow, dCol] of dir) {
      let nextRow = currRow + dRow,
        nextCol = currCol + dCol;
      if (!visited[nextRow][nextCol] && house[nextRow][nextCol] !== '#') {
        stack.push([nextRow, nextCol]);
      }
    }
  }
  return true;
}

console.log(
  allAlone([
    '  o                o        #######'.split(''),
    '###############             #     #'.split(''),
    '#             #        o    #     #'.split(''),
    '#  X          ###############     #'.split(''),
    '#                                 #'.split(''),
    '###################################'.split(''),
  ]),
);

console.log(
  allAlone([
    '#################             '.split(''),
    '#     o         #   o         '.split(''),
    '#          ######        o    '.split(''),
    '####       #                  '.split(''),
    '   #       ###################'.split(''),
    '   #                         #'.split(''),
    '   #                  X      #'.split(''),
    '   ###########################'.split(''),
  ]),
);
