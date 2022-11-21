export const getSourceList = () => {
  let name = "sources=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      let sourceListString = c.substring(name.length, c.length).replace('[', '').replace(']', '');
      return sourceListString.split(',')
    }
  }
  return "";
}


export const addSource = (source: String) => {
  let sourceList = getSourceList();

}

export const setFirstSource = (source: String) => {
  const d = new Date();
  d.setDate(d.getDate() + 30)
  let expires = "expires=" + d.toUTCString();
  document.cookie = "sources=[" + source + "];" + expires + ";";
}