export function formatCurrency(precio) {
    const options = {
        style: 'currency',
        currency: 'MXN'
    }

    const monto = new Intl.NumberFormat("es-MX", options)
    return monto.format(precio)
}