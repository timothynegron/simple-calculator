# simple-calculator

### About

A simple calculator Node app. When given a string with basic math operators and numbers separated by spaces, the app will return the value of that expression.

### How To Execute

1. `Fork` this repo
2. `Clone` it to your computer
3. Go to the file path where the app is located
4. Run the `node main.js` followed by a simple math expression

##### Examples of valid expressions:

```
"10 / 2 * 10 + 25 - 3"

"2 / 2 + 3 * 4 - 6"
```

#### Input

```
simple-calculator:~ node main.js "5 - 5 * 2 + 5 + 5 / 2 + 1.5"
```

#### Output

```

Simple Calculator:
─────────────────

5 - 5 * 2 + 5 + 5 / 2 + 1.5 = 4

```

### What else does it do?

* Gives "Help" information if user enters -h or -help
* Error message appears if no input are entered
* Error message appears if too many inputs are entered
* Error message appears if letters are entered
* Error message appears if no spaces were added after multiplier and divisor opeartors

### Images of the App

##### Valid expression:

![valid expression image](assets/valid-expression.png)

##### Help Message:

![help message image](assets/help-message.png)

##### Invalid expression:

![invalid expression image](assets/invalid-expression.png)

### Inspiration

* [Codewars - Calculator](https://www.codewars.com/kata/5235c913397cbf2508000048)
* I wouldn't have found this kata if it weren't for my friend Kyle Rose.
* GitHub: [kylexrose](https://github.com/kylexrose)
