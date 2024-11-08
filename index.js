for (let i = 2; i < 10; i++) {
  console.log("Bảng nhân " + i);

  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + i * j);
    if (j == 10) {
      console.log("----------------------");
    }
  }
}
