import * as math from '../math';
import * as app from '../app';

jest.mock('../math.js');

test('calls math.devide', () => {
    app.doDevide(4, 2);

    expect(math.devide).toHaveBeenCalledWith(4, 2);
});
