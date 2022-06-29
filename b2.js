let newArr=[];
function tryRemoveFromArray(arr,num){
for(let i=0;i<arr.length;i++){
  if(num!=arr[i]){
      newArr[i].push(arr[i])
  }
}
return newArr;
}