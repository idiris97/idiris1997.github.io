var s = '';
var b1='',k=0,b2='';
var amal;
function f(a) {
	if (amal=='='||amal=='c') {
		document.getElementById('text').value ='';
	}
	if (a=='=') {
		
	var s1;					
		b1 = parseFloat(b1);
		b2 = parseFloat(b2);
		if (amal=='+') {
			s1 = b1+b2;
		}
		if (amal=='-') {
			s1 = b1-b2;
		}
		if (amal=='*') {
			s1 = b1*b2;
		}
		if (amal=='/'&&b2!=0) {
			s1 = b1/b2;
		}
		if (amal=='%') {
			s1 = b1 % b2;
		}
		if (amal=='^') {
			s1 = b1**b2;
		}
		document.getElementById('text').value = s + '=' + s1;
		b1=0;
		b2=0;
		k=0;
		s='';
		amal=a;
		return 0;
	}
	if (k==1) {
		b2 = b2 + a;
	}
	if (a=='+'||a=='-'||a=='*'||a=='/'||a=='%'||a=='^') {
		amal = a;
		 k=1;
	}
	if (k==0) {
		b1 = b1 + a;
	}
	
	if (a == 'c') {
		i=0;
		b1=0;
		b2=0;
		k=0;
		s = '';
		amal=a;
 	}
 	else{
 	s = s + a;
	document.getElementById('text').value = s;
 	}
	
}