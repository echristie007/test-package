global.window = global;
global.self = global;
global.fetch = jest.fn();
global.sessionStorage = { getItem: jest.fn(), setItem: jest.fn(), removeItem: jest.fn() };
