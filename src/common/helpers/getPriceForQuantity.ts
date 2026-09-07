export async function unitPriceFormatStr(
  unitsNumber: number,
  unitPrice: number,
) {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

export async function priceFormatStr(unitPrice: number) {
  return `$${unitPrice.toFixed(2)}`;
}

export async function totalPriceFormatStr(
  unitsNumber: number,
  unitPrice: number,
) {
  return `Total: $${(unitsNumber * unitPrice).toFixed(2)}`;
}
