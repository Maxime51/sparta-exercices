const song = ["99 bottles of beer on the wall, 99 bottles of beer.Take one down and pass it around, 98 bottles of beer on the wall.98 bottles of beer on the wall, 98 bottles of beer.Take one down and pass it around, 97 bottles of beer on the wall....and so on...3 bottles of beer on the wall, 3 bottles of beer.Take one down and pass it around, 2 bottles of beer on the wall.2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall."];


function sing (song) {
  // code here
  const finalArraySong = [];
  let compteur = 99;
  for (let i = 99; i >= 0; i--){
    if(i === 0){
      finalArraySong.push("No more bottles of beer on the wall, no more bottles of beer.");
      finalArraySong.push(`Go to the store and buy some more, ${compteur} bottles of beer on the wall.`);
    }
    else{
      if(i === 1){
        finalArraySong.push(`${i} bottle of beer on the wall, ${i} bottle of beer.`);
        finalArraySong.push("Take one down and pass it around, no more bottles of beer on the wall.");
      }else{
        finalArraySong.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
        if(i === 2){
          finalArraySong.push(`Take one down and pass it around, ${i-1} bottle of beer on the wall.`);
        }else{
          finalArraySong.push(`Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
        }

      }}
  }
  return (finalArraySong);
}
sing(song);
// Do not remove the following line, it is for tests
module.exports = sing;
