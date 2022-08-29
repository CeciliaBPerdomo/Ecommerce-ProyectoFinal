function productosDTO (nombre, descripcion, codigo, foto, precio, stock) {
    return {
        ...nombre, 
        descripcion, 
        codigo, 
        foto, 
        precio, 
        stock
    }
}

module.exports = productosDTO