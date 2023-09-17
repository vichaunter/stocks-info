export const ucFirst = (str: string) =>
  str.slice(0, 1).toUpperCase() + str.slice(1);

export const lcFirst = (str: string) =>
  str.slice(0, 1).toLowerCase() + str.slice(1);

export const ucFirstAll = (str: string) =>
  str
    .split(" ")
    .map((s) => ucFirst(s))
    .join(" ");

export const camelizeText = (str) => {
  return lcFirst(
    ucFirstAll(str.replace(/[^a-zA-Z ]/, "")).replace(/[^a-zA-Z]/g, "")
  );
};
