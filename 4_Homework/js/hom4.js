function square(form){
	if(/[^[0-9.]/.test(form.a.value) || (form.a.value==='') || (form.a.value===' '))
		{alert('Заполните корректно формы');
		form.a.value = ""}
	else{console.log(form.a.value * form.a.value);}
}

function circle(form1){
	if(/[^[0-9.]/.test(form1.a.value) || (form1.a.value==='') || (form1.a.value===' '))
		{alert('Заполните корректно формы');
		form1.a.value = ""}
	else{console.log(form1.a.value*form1.a.value*Math.PI);}
}

function ellips(form2){
	if((/[^[0-9.]/.test(form2.a.value)) || (/[^[0-9.]/.test(form2.b.value)) || (form2.b.value==='') || (form2.b.value===' ') || (form2.a.value==='') || (form1.a.value===' '))
		{alert('Заполните корректно формы');
		form2.a.value = ""
		form2.b.value = ""}
	else{console.log(form2.a.value * form2.b.value * Math.PI);}
}

function par(form3){
	if((/[^[0-9.]/.test(form3.a.value)) || (/[^[0-9.]/.test(form3.b.value)) || (form3.b.value==='') || (form3.b.value===' ') || (form3.a.value==='') || (form3.a.value===' ') )
		{alert('Заполните корректно формы');
		form3.a.value = ""
		form3.b.value = ""}
	else{console.log(form3.a.value * form3.b.value);}
}

function trap(form4){
	if((/[^[0-9.]/.test(form4.a.value)) || (/[^[0-9.]/.test(form4.b.value)) || (/[^[0-9.]/.test(form4.c.value)) || (form4.a.value==='') || (form4.b.value==='') || (form4.c.value==='') || (form4.a.value===' ') || (form4.b.value===' ') || (form4.c.value===' ') )
		{alert('Заполните корректно формы');
		form4.a.value = ""
		form4.b.value = ""
		form4.c.value = ""}
	else{
		console.log((form4.a.value*1 + form4.b.value*1)*form4.c.value/2);}
}

function tr(form5){
	if((/[^[0-9.]/.test(form5.a.value)) || (/[^[0-9.]/.test(form5.b.value)) || (form5.b.value==='') || (form5.b.value===' ') || (form5.a.value==='') || (form5.a.value===' ') )
		{alert('Заполните корректно формы');
		form5.a.value = ""
		form5.b.value = ""}
	else{console.log(form5.a.value * form5.b.value / 2);}
}

function fib(){
	var n = 10; 
	var fibonacci = [1, 1]; 
	for (i = 2; i < n; i ++) {
		fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
	}
	console.log(fibonacci[9]);
}

function sumPos(form6){
	var Aa = form6.a.value;
	var Ac = Aa;
	for (i = 1; i < 20; i ++) {
		Aa = Aa*1 + Ac*1 / (2*i+1)
	}
	console.log(Aa);
}

function inte(){
	var n = 0; 
	for (i = -800; i < 801; i ++) {
		if (i % 31 === 0){
			console.log(i);
			n+=1;
		}
	}
	console.log(n);
}

function findS(){
	var n = 0; 
	for (i = 0; i < 26; i ++) {
			n = n + (i*2+1)*(100-2*i)
		}
	console.log(n)
}

function comm(form7){
	var N = form7.a.value;
	for (i = 2; i*i <= N; i ++) {
		while (N % i === 0){
			console.log(i);
			N = N / i;
		}
	}
	if (N !== 1){
		console.log(N)
	}
	
}

var t = new Array();
function creat(){
	var arr = new Array();
	var arr1 = new Array();
	for(var i=0; i<6; i++){
		arr[i] = new Array();
		for(var j=0; j<5; j++){
			arr[i][j] = (Math.random() * 100);
		}
	}
   console.log(arr);
   t = arr;
}

function mult(){
	for(var i=0; i<6; i++){
		for(var j=0; j<5; j++){
			t[i][j] = t[i][j] * (i+1);
		}
	}
	console.log(t);
}

var t1 = new Array();
function creat1(){
	var arr = new Array();
	var arr1 = new Array();
	for(var i=0; i<6; i++){
		arr[i] = new Array();
		for(var j=0; j<6; j++){
			arr[i][j] = (Math.random() * 100)*(Math.round(Math.random()) * 2 - 1);
		}
	}
   console.log(arr);
   t1 = arr;
}

function sor(){
	var p = 0;
	var d = 0;
	var plus = new Array();
	var minus = new Array();
	for(var i=0; i<6; i++){
		for(var j=0; j<6; j++){
			if (t1[i][j] > 0){
				plus[p] = t1[i][j];
				p+=1;
			}
			else{
				minus[d] = t1[i][j];
				d+=1;
			}
		}
	}
	console.log(plus);
	console.log(minus);
}

var t2 = new Array();
function creat2(){
	var arr = new Array();
	var arr1 = new Array();
	for(var i=0; i<10; i++){
		arr[i] = new Array();
		for(var j=0; j<10; j++){
			arr[i][j] = (Math.random() * 100)*(Math.round(Math.random()) * 2 - 1);
		}
	}
   console.log(arr);
   t2 = arr;
}

function res(){
	var min = t2[0][0];
	var max = t2[0][0];
	var minj = 0;
	var mini = 0;
	var maxi = 0;
	var maxj = 0;
	for(var i=0; i<10; i++){
		for(var j=0; j<10; j++){
			if ((t2[i][j] > 0) && (t2[i][j] > max)){
				max = t2[i][j];
				maxi = i;
				maxj = j;
			}
			else if ((t2[i][j] < 0) && (t2[i][j] < min)){
				min = t2[i][j];
				mini = i;
				minj = j;
			}
		}
	}
	if (min*(-1) > max){
		t2[mini][minj]=t2[0][0];
		t2[0][0] = min;
	}
	else{
		t2[maxi][maxj]=t2[0][0];
		t2[0][0] = max;
	}
	console.log(t2);
}

function getR(form11){
	console.log(getRandomInt(form11));
}

function getRandomInt(form11) {
	if((/[^[0-9.]/.test(form11.max.value)) || (/[^[0-9.]/.test(form11.min.value)) || (form11.max.value==='') || (form11.max.value===' ') || (form11.min.value==='') || (form11.min.value===' ') )
		{alert('Заполните корректно формы');
		form11.max.value = ""
		form11.min.value = ""}
	else
	return (Math.floor(Math.random()*(+form11.max.value - +form11.min.value)+ +form11.min.value));
}

var temp = new Array();
function getArray(form12){
	if(/[^[0-9.]/.test(form12.n.value) || (form12.n.value==='') || (form12.n.value===' '))
		{alert('Заполните корректно формы');
		form12.n.value = ""}
	else{
		var arr = new Array();
		for(var i=0; i<form12.n.value; i++){
			arr[i] = getRandomInt(form11)*1;
		}
		console.log(arr);
		temp = arr;
		return arr;
	}
	
}

function getResultArray(){
	console.log(temp.sort(function(temp,b){return temp - b})); 
	return(temp.sort(function(temp,b){return temp - b}));
}

matrixTable = document.getElementById('matrixTable')
function getMatrix1(){
	var len = arguments.length;
	var p = Math.sqrt(len)>>0;
	if (p*p !== len) {
		console.error('Невозможно составить такую матрицу')
		return
	}
	var matrix = []
	for (let i = 0; i < len; i++) {
		matrix[((i/p>>0)%2 === 0 ? i : len-i-1)%p*p + i/p>>0] = arguments[len-1-i]
	}
	clearTable(matrixTable, p, p)
	for (var i = 0; i < len; i++) {
		matrixTable.rows[i/p>>0].cells[i%p].innerHTML = matrix[i];
	}
}

function getMatrix2(){
	var len = arguments.length;
	var p = Math.sqrt(len)>>0;
	if (p*p !== len) {
		console.error('Невозможно составить такую матрицу')
		return
	}
	var matrix = []
	for (let i = 0; i < len; i++) {
		matrix[((i/p>>0)%2 === 0 ? len-i-1 : i)%p*p + i/p>>0] = arguments[i]
	}
	clearTable(matrixTable1, p, p)
	for (var i = 0; i < len; i++) {
		matrixTable1.rows[i/p>>0].cells[i%p].innerHTML = matrix[i];
	}
}

function clearTable(table,rows,cells) {
	while (table.rows.length > 0) {
		table.deleteRow(0)
	}
	for (let i = 0; i < rows; i++) {
		table.insertRow(0)
		for (let i = 0; i < cells; i++) {
			table.rows[0].insertCell(0)
		}
	}
}
















