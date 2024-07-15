export function countVeg(vegArray, type){
    let total = 0
    vegArray.filter((veg)=>{
        if(veg.type === type){
            total += veg.quantity
        }
    })
    return total
}