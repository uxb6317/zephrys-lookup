const normalizeFilename = str => {
  return str
    .split("/")
    [str.split("/").length - 1].split(".")[0]
    .replace(/%20/g, " ")
}

export { normalizeFilename }
