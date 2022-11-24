export const getSourceList = () => {
  const name = "sources=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      const sourceListString = c
        .substring(name.length, c.length)
        .replace("[", "")
        .replace("]", "");
      return sourceListString.split(",");
    }
  }
  return [];
};

export const addSource = (source: string) => {
  const sourceList = getSourceList();
  sourceList.push(source);
  const d = new Date();
  d.setDate(d.getDate() + 30);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `sources=[${sourceList.join(", ")}];${expires};`;
};
