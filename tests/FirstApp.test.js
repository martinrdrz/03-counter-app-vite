import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    test('debe de hacer match con el snapshot', () => {
        const title = 'Hola soy Boku';
        const subTitle = 'Hola soy Boku';
        const name = 'Hola soy Boku';
        render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    });
});
