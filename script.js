alert("Click quickly on your own area to Win\nPlayer One Key: 'a' or 'A'\nPlayer Two: 'b' or 'B'");

let heightA = 50;
let heightB = 50;

let blocks = document.querySelectorAll("div");
// for mobile phone users
blocks.forEach((div) => {
  div.addEventListener("click", (event) => {
    // game running
    if (event.target.innerText == "Player One") {
      heightA += 10;
      heightB -= 10;
      blocks[0].style.height = `${heightA}%`;
      blocks[1].style.height = `${heightB}%`;
    } else {
      heightA -= 10;
      heightB += 10;
      blocks[0].style.height = `${heightA}%`;
      blocks[1].style.height = `${heightB}%`;
    }

    winner();
  });
});

// for desktop user
window.addEventListener("keyup", (event) => {
  if (event.key == "a" || event.key == "A") {
    heightA += 10;
    heightB -= 10;
    blocks[0].style.height = `${heightA}%`;
    blocks[1].style.height = `${heightB}%`;
  } else if (event.key == "l" || event.key == "L") {
    heightA -= 10;
    heightB += 10;
    blocks[0].style.height = `${heightA}%`;
    blocks[1].style.height = `${heightB}%`;
  }

  winner();
});

// checking the winner
const winner = () => {
  if (heightA === 0) {
    alert("Player Two Won the Game");
    heightA = 50;
    heightB = 50;
    blocks[0].style.height = `${heightA}%`;
    blocks[1].style.height = `${heightB}%`;
  } else if (heightB === 0) {
    alert("Player One Won the Game");
    heightA = 50;
    heightB = 50;
    blocks[0].style.height = `${heightA}%`;
    blocks[1].style.height = `${heightB}%`;
  }
};
