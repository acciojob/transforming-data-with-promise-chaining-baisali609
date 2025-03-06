//your JS code here. If required.
document.getElementById("btn").addEventListener("click", ()=>{
	let input = document.getElementById("ip");
	let outputValue = document.getElementById("output");

	outputValue.innerHTML= "Loading...";

	let number = parseFloat(input.value);
	
	 if (isNaN(number)) {
        outputValue.innerHTML = "Please enter a valid number.";
        return;
    }
	new Promise((resolve,reject)=>{
		setTimeout(()=>{
			outputValue.innerHTML = `Actual Number:${number}`;
			resolve(number);
		},2000)
	}).then((num)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let result = num *2;
				 outputValue.innerHTML += `<br>Multiplying ${num} * 2 = ${result}`;
				resolve(result);
			},2000)
		})
	}).then((num)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let result = num - 3;
				 outputValue.innerHTML += `<br>Subtracting ${num} - 3 = ${result}`;
				resolve(result);
			},1000)
		})
	}).then((num)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let result = num / 2;
				 outputValue.innerHTML += `<br>Dividing ${num} / 2 = ${result}`;
				resolve(result);
			},1000)
		})
	}).then((num)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let result = num + 10;
				 outputValue.innerHTML += `<br>Adding all numbers ${num} + 10 = ${result}`;
				resolve(result);
			},1000)
		})
	}).catch((err)=>{
		 outputValue.innerHTML = `Error: ${err}`;
	})
})