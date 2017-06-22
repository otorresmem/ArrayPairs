# What is Array FUNction?
Array FUNction is a simple application that finds element pairs in an array whose sum equal the second argument arg and then displays the sum of their indices.

# Go live!
http://oscarexercises.azurewebsites.net/arraypairs/

*Tested on Chrome
# What technologies are being used here? Why?
Array FUNction uses the following technologies:
* Javascript - Because it was a requirement and because I love to work with simple Javascript!
* Bootstrap - Great UI boilerplate! So easy to use!

# How does it work??
There are 2 inputs:

 - Arg 1: Represents the array of elements that will be evaluated. The input allows to write numeric elements separated by commas. For example: 7, 9, 11, 13, 15
 - Arg 2: Represents the sum

# Rules
 - If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. 
 - Once an element has been used, it cannot be reused to pair with another.

# Logic
The first thing that I thought when I started to build this application was to implement it by checking all the possible combinations, but then I thought... mmm this looks too easy in this way, so I encouraged my self on looking for a more efficient way to implement it.
The running time of the first approach that I thought was O(N2) because it makes use of all the possible combinations.
To improve the performance, I started to think on a hash structure (i like to use them), because they represent the best way to access information O(1).
In this hash structure, the keys represent the array values, and the hash values represent the array indices.
But, what happen if the array has duplicated values? Doesn't matter because each hash key stores an array of values that represent the respective indices.
The flow goes as follow:

 1. The process iterates over the array of elements and insert each item on the hash structure. Time=>O(n)
	 2. When the element is inserted on the hash structure, the array value represents the hash key, and then, the hash value has an array of all the indices that have the same hash key on the array,
	 

> Given the array [3, 2, 3], the hash structure has the following elemens: [3] = [0,2] and [2]=[2]
> The insert time of every item on the hash structure is O(1)

 2. The process iterates again over the array of elements to look for the pair of elements that complement each other whose sum is equal to the expected result. Time=>O(n)
 3.  If the application finds a couple of elements that complement each other, then the respective result sum is kept and each of the items is removed from the hash structure. That way, the requirement that says "*If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices.*" is fullfilled
# Todo
1. Implement validations.



