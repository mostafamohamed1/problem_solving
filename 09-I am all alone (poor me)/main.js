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
  let xRow = 0,
    xCol = 0;
  for (let xr = 0; xr < house.length; xr++) {
    for (let xc = 0; xc < house[xr].length; xc++) {
      if (house[xr][xc] == 'X') {
        xRow = xr;
        xCol = xc;
      }
    }
  }

  let directions = [
    [-1, 0], // top
    [1, 0], // bottom
    [0, -1], // left
    [0, 1], // right
  ];

  let allFalse = house.map((row) => row.map((_) => false));

  let stack = [[xRow, xCol]];
  while (stack.length) {
    let [currRow, currCol] = stack.pop();
    if (house[currRow][currCol] === 'o') return false;

    allFalse[currRow][currCol] = true;
    for (const [elfRow, elfCol] of directions) {
      let nextRow = currRow + elfRow,
        nextCol = currCol + elfCol;
      if (!allFalse[nextRow][nextCol] && house[nextRow][nextCol] !== '#') {
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
