export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(codee) {
    this._code = codee;
  }

  get name() {
    return this._name;
  }

  set name(namee) {
    this._name = namee;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
