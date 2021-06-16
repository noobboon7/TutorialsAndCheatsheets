### 7 steps to solve a Dynamic Programming problem

### Recognize a DP problem

- Can this be broken down into smaller subproblems?

### Identify problem variables

- Identify which parameters are going to change, as you make a recursive call.

### Clearly express the recurrence relation

- what steps are you going to have to do over and over again. this will help understand the problem better.
- how are you computing the subproblems to solve the main problem.

### Identify the base cases

- At which point can't the problem be reduced any further?
- The Constraints of a problem will help understand our stopping point.

### Decide if you want to implement it iteratively or recursively

- depending on what the trade offs are, you might want to look consider different route for optimization purposes. You can usually do recursion.

### Add memoization

- store the results of the calculations in a map/dictionary, for faster retrieval time, instead of recalculating.
- recalculating subproblems you've done can lead to an exponential time complexity.

### Determine time complexity

- you should be familiar with BigO notation for this part. 
- go through your algorithm and count then number of states (subproblems).
- think about the work done, per state.
