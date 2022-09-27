// const randomBool = require('./services');
import randomBool from "./services.js"
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('services', () => {
  test('function is delay 1s', () => {
    randomBool();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
  test('output is boolean', () => {
    randomBool()
      .then((data)=>{
        expect(data).toBe(true|| false );
      })
  });
});