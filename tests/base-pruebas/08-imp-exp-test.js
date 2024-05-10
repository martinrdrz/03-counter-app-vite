import { retornaArreglo } from '../../src/base-pruebas/08-imp-exp';

// {
//         id: 1,
//         name: 'Batman',
//         owner: 'DC',
// }
describe('Pruebas en 07-deses-arr', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe retornar undefined sino existe el ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        //expect(hero).toBe(undefined);
        expect(hero).toBeFalsy;
    });

    test('getHeroesByOwner debe retornar los heroes de un owner determinado', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes).toBe(3);
        expect(heroes).toEqual(
            heroes.filter((heroe) => {
                heroe.owner === owner;
            })
        );
    });
});
