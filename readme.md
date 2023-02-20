**1.List the symbols for each of the below Javascript operators**

**2.For each JavaScript Operator, write 2 examples.**

**- Arithmetic Operators**

(+) -addition
```
    x= 5 + 5;
    y= 2 + 2;
```
(-) -subtraction
```
    x= 5 - 5;
    y= 2 - 2;
```
(*) -multiplication
```
    x= 5 * 5;
    y= 2 * 2;
```

(**) -exponential
```
    x= 5 ** 5;
    y= 2 ** 2;
```
(/) -division
```
    x= 5 / 1;
    y= 4 / 2;
```
(%) -remainder
```
    x= 6%4;
    y= 7%3;
```
(++) -pre increment
```
    x= ++1;
    y=++2;
```
(++) -post increment
```
    x= 1++;
    y=2++;
```
(--) - pre decrement
```
    x= ++1;
    y=++2;
```
(--) -post decrement
```
    x= 1--;
    y=2--;
```

**-Assignment Operators**

(=)
```
x = 2;
y= 1;
```
(+=)
```
x += 2;
y += x;
```
(-=)
```
x -= 2;
y -= x;
```

(*=)
```
x *= 2;
y *= x;
```
(/=)
```
x /= 2;
y /= x;
```
(%=)
```
x %= 2;
y %= x;
```
(:) - for javascript objects
```
x:2;
y:5;
```
**-Comparison Operators**

Return false or true based on equality or difference between variables or values

(==)  - equal to
```
let x = 5;
console .log(x==2);
 //logs false
```
```
let y= 5;
console .log(y==5);
 //logs true
```


(===) - compares equal value and type
```
let x = 5;
console .log(x==="5");
 //logs false
```
```
let y= 5;
console .log(y===5);
 //logs true
```
(!=) - not equal
```
let x = 5;
console .log(x!=5);
 //logs false
```
```
let y= 5;
console .log(y!=2);
 //logs true
```
(!==) - not equal value and type
```
let x = 5;
console .log(x!=="5");
 //logs true
```
```
let y= 5;
console .log(y !==5);
 //logs false
```
(>) - greater than
```
let x = 5;
console .log(x > 6);
 //logs false
```
```
let y= 5;
console .log(y > 2);
 //logs true
```
(<) - less than
```
let x = 5;
console .log(x <2 );
 //logs false
```
```
let y= 5;
console .log(y < 6);
 //logs true
```
(>=) - great than or equal to
```
let x = 5;
console .log(x >= 6);
 //logs false
```
```
let y= 5;
console .log(y >=5);
 //logs true
```
(<=) - less than or equal to
```
let x = 5;
console .log(x <= 2);
 //logs false
```
```
let y= 5;
console .log(y <= 5);
 //logs true
```

**-Logical Operators**

(&&)
```
let x=9;
let y= 2;
console.log(x < 10 && y > 1)
//logs true
```

```
let x=11;
let y= 2;
console.log(x < 10 && y > 1)
//logs false
```
(||)
```
let x=9;
let y= 2;
console.log(x < 6 || y > 1)
//logs true
```

```
let x=11;
let y= 2;
console.log(x < 10 || y < 1)
//logs false
```

(!)
```
let x=9;
let y= 2;
console.log(!(y==x))
//logs true
```

```
let x=11;
let y= 2;
console.log(!(y !==x ))
//logs false
```


**-Bitwise Operators**

Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

(&) -AND
```
let x = 5 & 1;
console.log(x);
//logs 1
```
```
let x = 5 & 2;
console.log(x);
//logs 0
```
(|) -OR
```
let x = 5 | 1;
console.log(x);
//logs 5
```
```
let x = 5 | 2;
console.log(x);
//logs 7
```
(~) -NOT
```
let x = 5;
console.log(~ x);
//logs -6
```
```
let x = 2;
console.log(~x);
//logs -3
```
(^) -XOR
```
let x = 5 ^ 1;
console.log(x);
//logs 4
```
```
let x = 5 ^ -2;
console.log(x);
//logs -5
```
(<<) -Left Shift
```
let x = 5 << 1;
console.log(x);
//logs 10
```
```
let x = 3<< 2;
console.log(x);
//logs 12
```
(>>) -Right shift
```
let x = 5 >> 2;
console.log(x);
//logs 1
```
```
let x = 4 >> 4;
console.log(x);
//logs 0
```
(>>>) -Unsigned right
```
let x = 5 >>> 1;
console.log(x);
//logs 2
```
```
let x = 6 >>> 1;
console.log(x);
//logs 3
```


**4. What is the result when the following program is executed?**
```
for(let i=1; i< 20; i +=7){
    console.log(i);
}
```
Answer : 1 8 15
