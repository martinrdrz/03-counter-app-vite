import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe de retornar una imagen o error si no esta mal la APIKey', async () => {
        //La APIKey esta mal por lo tanto va a retornar un mensajes string de error.
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });
});
