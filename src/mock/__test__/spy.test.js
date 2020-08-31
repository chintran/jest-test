import * as math from '../math';
import * as app from '../app';

// spy for watch a function called but keep the original implementation on it.
test('calls math.add', () => {
    const addMock = jest.spyOn(math, 'add');

    expect(app.doAdd(1, 2)).toEqual(3);
    expect(addMock).toHaveBeenCalledWith(1, 2);
});

// mock function and then restore original implementation
test('mock and restore', () => {
    const addMock = jest.spyOn(math, 'add');

    addMock.mockImplementation(() => 'result');
    expect(app.doAdd(1, 2)).toEqual('result');

    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
});
