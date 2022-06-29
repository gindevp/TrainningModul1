let arr=[]
arr[0]=0
arr[1]=1
function  isFibonanci(num){
    for(let i=2;i<num;i++){
       arr[i]=arr[i-1]+arr[i-2]
        arr.push(arr[i])

        if(num==arr[i]){

            return true
        }
    }
    console.log(arr)
return false
    }

if(isFibonanci(21)){
    console.log(arr)
    console.log("true")
}else {
    console.log("false")
}