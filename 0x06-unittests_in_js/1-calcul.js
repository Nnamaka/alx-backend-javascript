function calculateNumber(type, a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    let result = 0;

    switch (type) {
    case 'SUM':
    result = an + bn;
	break;

    case 'SUBTRACT':
    result = an - bn;
	break;

    case 'DIVIDE':
      if (bn === 0) {
        result = "Error";
      } else {
        result = an / bn;
      }
    break;
    }

    return result;
}

module.exports = calculateNumber;