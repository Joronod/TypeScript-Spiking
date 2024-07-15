import { countVeg } from '../katas/countVeg';
import {describe, expect, test} from '@jest/globals';

const array = [
    {name: 'Parsnip', type: 'root', quantity: 4},
    {name: 'Broccoli', type: 'brassica', quantity: 1},
    {name: 'Carrot', type: 'root', quantity: 5},
    {name: 'Onion', type: 'bulb', quantity: 3},
    {name: 'Chard', type: 'leaf', quantity: 3},
    {name: 'Runner beans', type: 'legume', quantity: 8}
    ]

    const newArray = [{name: 'Parsnip', type: 'root', quantity: 4}]


describe("countVeg", () =>{
    test("Returns 0 for an empty array", ()=>{
        expect(countVeg([],null)).toBe(0)
    });
    test("Returns a number if the array contains one matched veg", ()=>{
        expect(countVeg(newArray, 'root')).toBe(4)
    });
    test("Returns a total quantity if there are multiple matches", ()=>{
        expect(countVeg(array, 'root')).toBe(9)
    });
})