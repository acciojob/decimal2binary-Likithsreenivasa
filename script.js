function decimalToBinary(num) {
	
  //Write you code here
	let sum=""
	for(let i=0;i<num;i++)
		{
			sum=sum+(num%2);
			num=Math.floor(num/2);
		}
	return sum;
  
}

window.decimalToBinary = decimalToBinary;
