// average of marks using for loop in array
let marks = [97,56,32,69,89]
let sum = 0;
for(let mark of marks){
    sum = sum + mark;
}
let avg = sum / marks.length;
console.log(avg);

// 
let items =  [250, 645, 300, 900, 50]
for(let i =0;i<items.length;i++){
    let offer = items[i]/10;
    items[i] = items[i] - offer; 
}
 console.log(items);