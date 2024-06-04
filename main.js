var seed= "1";
var i = 1;
var n =1;
var count =1;
var temp = "";
var curr = seed.at(0);
while(true){
  if(i>=seed.length){
    temp+=count.toString()+curr.toString();
    i=1;
    seed =temp;
    temp = "";
    count =1;
    curr=seed[0]; 
    n =n+1;
    console.log(n,seed.length);
    
  }
  if(seed[i]==curr){
    count++;
    i++;
  }else{
    temp += count.toString()+curr.toString();
    count =1;
    curr = seed[i];
    i = i+1;
  }
}
