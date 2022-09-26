const randomBool = require('./services');

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('services', () => {
  test('function is delay 1s', () => {
    randomBool();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
  // test('output is bool', () => {
  //   randomBool().then((data)=>{
  //     console.log(data);
  //     expect(data).toBe(true|| false );
  //   })
  // });
});