/**
 * TODO: Write a fxn. that will take in a 'date string,' and calculate age in years.
 */
function calculateAge(dob) {
  // TODO: Use 'Date.parse()' to get dob in ms.
  const birthDate = Date.parse(dob);
  const firstDate = ms2Years(birthDate);

  // TODO: Use 'Date.now()' to get 'now' in ms.
  const today = Date.now();
  const today2 = ms2Years(today);

  // TODO: Pass the difference to 'ms2Years' to convert to years.
  const difference = today2 - firstDate;
  const age = ms2Years(difference);
}

function ms2Years(ms) {
  return ms / 31536000000;
}
