var x = [undefined, 0, true, "foo", null, [1, 2, 3], {prop1 : 1, prop2 : 2}, function(){}];

for (i = 0; i < x.length; i++)
{
	console.log(x[i], typeof x[i]);
};
