const validateCPF = (cpf) => {
  const cleanCPF = cpf.replace(/\D/g, ''); 

  if (cleanCPF.length !== 11) {
    return false;
  }

  const digits = cleanCPF.split('').map(Number);
  const [a, b, c, d, e, f, g, h, i, j, k] = digits;

  const calc1 = ((a * 10) + (b * 9) + (c * 8) + (d * 7) + (e * 6) + (f * 5) + (g * 4) + (h * 3) + (i * 2)) % 11;
  const firstCheckDigit = calc1 < 2 ? 0 : 11 - calc1;

  if (j !== firstCheckDigit) {
    return false;
  }

  const calc2 = ((a * 11) + (b * 10) + (c * 9) + (d * 8) + (e * 7) + (f * 6) + (g * 5) + (h * 4) + (i * 3) + (j * 2)) % 11;
  const secondCheckDigit = calc2 < 2 ? 0 : 11 - calc2;

  if (k !== secondCheckDigit) {
    return false;
  }

  return true;
};

export default validateCPF;