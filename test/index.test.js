const index = require('./testindex');

test('Prueba de hash SHA-512', () => {
    const mensaje = "Hola, este es un mensaje de prueba.";
    const resultadoEsperado = "82e100d51a9f44be0505c8e5ae8e1028149d4eab5f2eb1f91c634b3ff9886ae4313c5cddb9e5801b370880638ab92bbda4f6aad89d69d6c8644d6ce59147d7b2";
    const resultadoObtenido = index(mensaje);
    expect(resultadoObtenido).toBe(resultadoEsperado);
});
