function largest()
	{
		let num1, num2, num3;
		num1 = Number(document.getElementById("number1").value);
		num2 = Number(document.getElementById("number2").value);
		num3 = Number(document.getElementById("number3").value);

		if(num1>num2 && num1>num3)
		{
		document.getElementById("displayGreatest").innerHTML = num1+ (" is the greatest number");
		}
		else if(num2>num1 && num2>num3)
		{
		document.getElementById("displayGreatest").innerHTML = num2+ (" is the greatest number");
		}
		else if(num3>num1 && num3>num1)
		{
		document.getElementById("displayGreatest").innerHTML = num3+ (" is the greatest number");
		}
	}