export function calcularPrecioFinal(precioOriginal: number, descuentoPct: number): number {
  return precioOriginal * (1 - descuentoPct / 100);
}

export function formatearPrecio(valor: number): { enteros: string; centavos: string } {
  const [enteros, centavos] = valor.toFixed(2).split(".");
  return { enteros, centavos };
}

export function formatearPrecioEntero(valor: number): string {
  return Math.round(valor).toLocaleString("es-MX");
}
