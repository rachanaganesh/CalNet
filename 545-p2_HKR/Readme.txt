Class number:
545 Software Architecture

Project number and name:
Project #2 – Calc Net


Intro (including the algorithm used):  
This project is designed to run a factory floor of machines which help compute
an assignment statement. Each machine will handle a part of the work. 

Algorithm:
1. Get Arithematic expression and pass it to the function A.
2. Split arithematic expression from step 1 by "+" operator
3. Set time to process the input for each function
4. Send split input from step 2 to function T1 and function T2
5. Set time to process one T machine at a time
6. If constant then just return constant and display
7. If variables then send variablesto D machine to compute the value for x and y and send it back to T machine
7. If exponential then split the exponential expression by "^" operator
8. Send the split expression to function P to compute the result
9. Call function D to get values in function P for exponential function
10.Return value from D to function P, and compute the result and send to function T
11.Return value from function T to E machine
12.Accept new Arithematic expression and follow step 1 to 10 again.
	
Contents:
arrow.png, index.html,Readme.txt,RedArrow.png, Software Architecture Report.pdf. 
assets folder:
style.css,input-machine.js.

External Requirements:
 Web browser is required to run HTML file and select Input string from dropdown to compute the expression.

Setup and Installation: 
1.Extract the 545-p2-HKR.zip
2.Copy that folder on desktop
3.Run the index.html file from the folder on browser.
4.Select Input string from dropdown one after another, after the execution of one expression is complete.

Features:
There are 6 kinds of machines:A:Assignment Machine, E:Expression machine, T:Term Machine, P: Power Machine, D:Data Machine, I:Input machine. Each machine will handle a part of the work.Each machine have a visible connection (arrow lines) to each other machine that it can reasonably send a message to.

Bugs: 
No bugs
