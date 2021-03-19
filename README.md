* *Please note there's an issue running the repl.it on mobile phones.  If interested in playing with the repl.it please do it on a computer*

![CardsPermutation](https://raw.githubusercontent.com/xanimo/images/master/logo.png?token=AHTBONAJ6MJ3U7ZT32YFAZK7NZOV6)

# Cards Permutation
<a href="https://www.hackerrank.com/challenges/cards-permutation" target="_blank"><img src="https://raw.githubusercontent.com/xanimo/images/master/CardsPermutationRank.png?token=AHTBONEMPAGKWXOLLAA3R327OUDFA" alt="first ever fully accepted solution to this problem written in javascript!"></a>

### Overview
Alice was given the **n** integers from **1** to **n**. She wrote all possible permutations in increasing lexicographical order, and wrote each permutation in a new line. For example, for **n = 3**, there are **6** possible permutations:
*  **[1,2,3]**
*  **[1,3,2]**
*  **[2,1,3]**
*  **[2,3,1]**
*  **[3,1,2]**
*  **[3,2,1]**

She then chose one permutation among them as her favorite permutation.

After some time, she forgot some elements of her favorite permutation. Nevertheless, she still tried to write down its elements. She wrote a **0** in every position where she forgot the true value.

She wants to know the sum of the line numbers of the permutations which could possibly be her favorite permutation, i.e., permutations which can be obtained by replacing the **0**s. Can you help her out?

Since the sum can be large, find it modulo **10&#8313; + 7**.
#### Input Format
The first line contains a single integer **n**.

The next line contains **n** space-separated integers **a&#8321;,a&#8322;,...,a&#8345;** denoting Alice's favorite permutation with some positions replaced by **0**.

#### Constraints
*  **1 ≤ n ≤ 3 * 10&#8309;**
*  **0 ≤ a&#7522; ≤ n**
#### Subtask
* For ~33% of the total points, **n ≤ 5000**

#### Output Format

Print a single line containing a single integer denoting the sum of the line numbers of the permutations which could possibly be Alice's favorite permutation.

#### Sample Input 0
```
4
0 2 3 0
```
#### Sample Output 0
```
23
```
#### Explanation 0
The possible permutations are **[1,2,3,4]** and **[4,2,3,1]**. The permutation **[1,2,3,4]** occurs on line **1** and the permutation **[4,2,3,1]** occurs on line **22**. Therefore the sum is **1 + 22 = 23**.

#### Sample Input 1
````
4
4 3 2 1
````
#### Sample Output 1
````
24
````

#### Explanation 1
There is no missing number in the permutation. Therefore, the only possible permutation is **[4,3,2,1]**, and it occurs on line **24**. Therefore the sum is **24**.

## Try it Out
If you'd care to play around with this code please check out the [corresponding repl.it](https://repl.it/@xanimo/CardsPermutation#index.js).  And if you'd care to follow or get in touch here is my [HackerRank profile](https://www.hackerrank.com/profile/bluezr).

<a href="https://repl.it/@xanimo/CardsPermutation#index.js" target="_blank"><img src="https://raw.githubusercontent.com/xanimo/images/master/replit.svg?token=AHTBONGAPFTTFFRQALQZLCK7NZ3WG" width="140"/></a> <a href="https://www.hackerrank.com/profile/bluezr" target="_blank"><img src="https://raw.githubusercontent.com/xanimo/images/master/hrlogo.svg?token=AHTBONALBFYHHXNAG4MQE427NZZK2" width="250"/></a> 
