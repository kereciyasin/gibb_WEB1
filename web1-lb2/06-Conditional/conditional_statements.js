const temperature = -1;

if(temperature<0){
  console.log("Cok soguk!");
}
else if(temperature>0 && temperature<15)
{console.log("Soguk!");}
else if (temperature>15 && temperature<25)
{console.log("Hos");}
else if (temperature>25 && temperature<35)
  {console.log("Sicak!");}
else{
  console.log("Cok sicak!");
}