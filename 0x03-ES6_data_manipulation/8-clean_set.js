export default function cleanSet(set, startString) {
  const values = Array.from(set).filter((value) => value.startsWith(startString)).map((value) => value.slice(startString.length)).join('-');
  return values;
}
