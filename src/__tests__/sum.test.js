import {sum} from "../utils/sum"

test("checking whether the sum test pass or not",()=>{
    const actual=sum(3,3);
    
    expect(actual).toBe(6)
})