import { formatPrice, replaceFrenchCommaWithDot } from './math';

describe("formatPrice", () => {
  it("devrait formater correctement un prix positif en euros", () => {
    const price = 1234.56;
    const result = formatPrice(price);
    expect(result).toBe("1 234,56 €");
  });


  it("devrait retourner '0.00€' pour une valeur nulle ou undefined", () => {
    const result = formatPrice(undefined);
    expect(result).toBe("0.00€");
  });

  it("devrait gérer correctement les grands nombres", () => {
    const price = 1234567890.12;
    const result = formatPrice(price);
    expect(result).toBe("1 234 567 890,12 €");
  });

 
});

describe("replaceFrenchCommaWithDot", () => {
  it("devrait remplacer une virgule par un point dans une chaîne", () => {
    const price = "1234,56";
    const result = replaceFrenchCommaWithDot(price);
    expect(result).toBe(1234.56);
  });

  it("devrait retourner un nombre inchangé s'il n'y a pas de virgule", () => {
    const price = 1234.56;
    const result = replaceFrenchCommaWithDot(price);
    expect(result).toBe(1234.56);
  });

  it("devrait convertir une chaîne en nombre même sans virgule", () => {
    const price = "1234.56";
    const result = replaceFrenchCommaWithDot(price);
    expect(result).toBe(1234.56);
  });

  it("devrait gérer les cas où le prix est déjà un nombre", () => {
    const price = 1234.56;
    const result = replaceFrenchCommaWithDot(price);
    expect(result).toBe(1234.56);
  });

  it("devrait retourner NaN pour une chaîne non convertible en nombre", () => {
    const price = "abcd";
    const result = replaceFrenchCommaWithDot(price);
    expect(result).toBeNaN();
  });
});