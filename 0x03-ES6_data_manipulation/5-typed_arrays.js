export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw Error('Position outside range');
  }

  const hold = new ArrayBuffer(length);
  const int8 = new Int8Array(hold, 0, length);
  int8.set([value], position);
  return new DataView(hold);
}
