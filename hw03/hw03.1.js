function Calc()
{
	this.LastAdd = 0;
	this.LastSub = 0;
	this.LastMul = 0;
	this.LastDiv = 0;
};

Calc.prototype.Add = function(x, y)
{
	this.LastAdd = x + y;
	return this.LastAdd;
};

Calc.prototype.Sub = function(x, y)
{
	this.LastSub = x - y;
	return this.LastSub;
};

Calc.prototype.Mul = function(x, y)
{
	this.LastMul = x * y;
	return this.LastMul;
};

Calc.prototype.Div = function(x, y)
{
	this.LastDiv = x / y;
	return this.LastDiv;
};

var c = new Calc();
console.log(c.LastAdd);
console.log(c.Add(1, 2));
console.log(c.LastAdd);
