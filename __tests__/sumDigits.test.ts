
import {describe, expect, test} from '@jest/globals';
import sumDigits  from "../katas/sumDigits"

describe("sumDigits", () =>{
    test("returning an empty string if given a single digit, returns the same digit", ()=>{
      expect(sumDigits(0)).toBe(0)
      expect(sumDigits(1)).toBe(1)
    })
    test("return the sum of digits in a multi-digit input", ()=> {
      expect(sumDigits(11)).toBe(2)
    })
    test("returns a sum of digits that includes a decimal point", ()=>{
      expect(sumDigits(12.3)).toBe(6)
    })
  })