import { doAdd } from '../';

test('Return undefined bydefault', () => {
    const mockTmp = jest.fn();

    let result = mockTmp('foo');

    expect(result).toBeUndefined();
    expect(mockTmp).toHaveBeenCalled();
    expect(mockTmp).toHaveBeenCalledTimes(1);
    expect(mockTmp).toHaveBeenCalledWith('foo');
});

describe('mock implement', () => {
    it('case 1', () => {
        const mock = jest.fn(() => 'bar');

        expect(mock('foo')).toBe('bar');
        expect(mock).toHaveBeenCalledWith('foo');
    });

    it('case 2', () => {
        const mock = jest.fn().mockImplementation(() => 'bar');

        expect(mock('foo')).toBe('bar');
        expect(mock).toHaveBeenCalledWith('foo');
    });

    it('case 3 call one time', () => {
        const mock = jest.fn().mockImplementationOnce(() => 'bar');

        expect(mock('foo')).toBe('bar');
        expect(mock).toHaveBeenCalledWith('foo');

        expect(mock('foo2')).toBe(undefined);
        expect(mock).toHaveBeenCalledWith('foo2');
    });

    it('return value', () => {
        const mock = jest.fn();

        mock.mockReturnValue('bar');

        expect(mock('foo')).toBe('bar');
        expect(mock).toHaveBeenCalledWith('foo');
    });

    it('mock promise', () => {
        const mock = jest.fn();

        mock.mockResolvedValue('bar');

        expect(mock('foo')).resolves.toBe('bar');
        expect(mock).toHaveBeenCalledWith('foo');
    });
});

test('Dependency Injection', () => {
    const mockCallBack = jest.fn();

    doAdd(1, 2, mockCallBack);

    expect(mockCallBack).toHaveBeenCalledWith(3);
});
