import * as math from '../math';
import * as app from '../app';

math.add = jest.fn();

test('test mock function ', () => {
    app.doAdd(1, 2);

    expect(math.add).toHaveBeenCalledWith(1, 2);
});
