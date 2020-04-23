export const loder = async (arr: []) => {
  let err: boolean = false;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    try {
     await element;
    } catch (error) {
      console.error("Errors found!");
      err = true;
      console.error(error);
    }
  }
  if (err) {
    return console.log("Errors found");
  }
  return console.log("No Errors found");
};

