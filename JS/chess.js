async function fetchUserData() {
  try {
    const response = await fetch(
      `https://api.chess.com/pub/player/safkiar/stats`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.chess_rapid.last.rating);
    console.log(data.chess_rapid.record.win);
    console.log(data.chess_rapid.record.loss);
    console.log(data.chess_rapid.record.draw);
    console.log(data.chess_blitz.last.rating);
    console.log(data.chess_blitz.record.win);
    console.log(data.chess_blitz.record.loss);
    console.log(data.chess_blitz.record.draw);
    return data;
  } catch (error) {
    console.error("Could not fetch user data:", error.message);
    return "Error fetching data";
  }
}

async function updateCodingTaskElement() {
  const chessinfo = await fetchUserData();
  const winr = document.getElementsByClassName("win--r");
  winr[0].innerText = `wins: ${chessinfo.chess_rapid.record.win.toString()}`;
  const loser = document.getElementsByClassName("lose--r");
  loser[0].innerText = `loses: ${chessinfo.chess_rapid.record.loss.toString()}`;
  const drawr = document.getElementsByClassName("draw--r");
  drawr[0].innerText = `draws: ${chessinfo.chess_rapid.record.draw.toString()}`;
  const ratr = document.getElementsByClassName("elo--r");
  ratr[0].innerText = ` ${chessinfo.chess_rapid.last.rating.toString()}`;
  const winb = document.getElementsByClassName("win--b");
  winb[0].innerText = `wins: ${chessinfo.chess_blitz.record.win.toString()}`;
  const loseb = document.getElementsByClassName("lose--b");
  loseb[0].innerText = `loses: ${chessinfo.chess_blitz.record.loss.toString()}`;
  const drawb = document.getElementsByClassName("draw--b");
  drawb[0].innerText = `draws: ${chessinfo.chess_blitz.record.draw.toString()}`;
  const ratb = document.getElementsByClassName("elo--b");
  ratb[0].innerText = `${chessinfo.chess_blitz.last.rating.toString()}`;
}

updateCodingTaskElement();
