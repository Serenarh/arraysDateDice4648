/**
 * TODO: Write a fxn. that will take in a 'date string,' and calculate age in years.
 */
function calculateAge(dob) {
  // TODO: Use 'Date.parse()' to get dob in ms.
  const birthDate = Date.parse(dob);
  const firstDate = ms2Years(birthDate);
}

function ms2Years(ms) {
  return ms / 31536000000;
}
