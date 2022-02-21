function waitFor(time: number): Promise<void> {
  return new Promise((resolve, reject) => {
    if (
      setTimeout(() => {
        console.log(`this will be printed after ${time / 1000} seconds`);
      }, time)
    ) {
      resolve(console.log(`this will be printed after ${time / 1000} seconds`));
    } else {
      reject("An error occured");
    }
  });
}

export { waitFor };
