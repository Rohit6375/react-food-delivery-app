import { sum } from "../sum";
test('sum fun should calculate sum of two numbers', () => { 
    
    const result=sum(3,4);

    //Assertion not mandatory but we always should write it
    expect(result).toBe(7);
 })