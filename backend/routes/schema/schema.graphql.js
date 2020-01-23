const characters = `{
characters(page: 1) {
  info {
    count, 
    prev,
    next, 
    pages
  }
  results {
    name,
    status,
    species,
    gender,
    image
  }
}
}`;
exports.characters = characters 