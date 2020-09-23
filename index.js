'use strict';

const fs = require('fs');
const {
  performance,
  PerformanceObserver
} = require('perf_hooks');
const _ = require('underscore');

var inputString = '';
var currentLine = 0;

const MAXN = BigInt(3e5 + 5),
      mod = BigInt(1e9 + 7),
      inv2 = (mod + 1n) >> 1n;

  let c = [],
      pre = [],
      fac = [],
      N = 0n,
      count = 0n,
      lex = 0n,
      a, cur, ans, sum;
// manually set testcase file below
fs.readFile('testcase55.txt', function(err, data) {
    if(err) return console.log(err);
    inputString = data.toString();
    inputString = inputString.trim().split('\n').map(str => str.trim());
    var t0 = performance.now();
    main();
    var t1 = performance.now();
    console.log((t1 - t0) + " milliseconds.");
});

function readLine() {
    return inputString[currentLine++];
};

function add(a, b) {
  a += b;
  return a >= mod ? a - mod : a;
}

function pop(a, b) {
  a -= b;
  return a < 0n ? a + mod : a;
}

function mul(a, b) {
  return (a * b) % mod;
}

function lowbit(i) {
  return i & (-i)
}

function update (o, v) {
  let i = o + 1n;
  while (i <= N) {
    c[i] += v;
    i += lowbit(i)
  }
}

function calc(o) {
  let s = 0n, i = o + 1n;
  while (i >= 1n) {
    s += c[i]
    i -= lowbit(i);
  } 
  return s
}

function* range(start, end) {
    for (let i = start; i < end; i++) {
        yield i;
    };
};

function cal2(n) {
  return mul(mul(n, pop(n, 1n)), inv2)
}

function prepare() {
  for (let i of range(1n, N + 1n)) {
    a[i] -= 1n;
    if (a[i] == -1n) count += 1n;
    if (a[i] >= 0n) pre[a[i]] = 1n;
  }
  fac[0] = 1n;
  for (let i of range(1n, N + 1n)) {
    fac[i] = mul(i, fac[i - 1n])
  }
  for (let i of range(1n, N)) {
    pre[i] += pre[i - 1n];
  }
  lex = mul(mul(N, pop(N, 1n)), inv2);
  for (let i of range(1n, N + 1n)) {
    if (a[i] != -1n) lex = pop(lex, a[i])
  }
}

function solve(x) {
  prepare()
  cur = 0n
  ans = 0n
  for (let i of range(1n, N + 1n)) {
    if (a[i] != -1n) {
      sum = mul(fac[count], a[i] - calc(a[i]))
      if (count >= 1n) {
        sum = pop(sum, mul(fac[count - 1n], mul(cur, a[i] + 1n - pre[a[i]])))
      }
      sum = mul(sum, fac[N - i])
      ans = add(ans, sum)
      update(a[i], 1n)
      lex = pop(lex, pop(N - 1n - a[i], pop(pre[N - 1n], pre[a[i]])))
    } else {
      sum = mul(lex, fac[count - 1n])
      if (count >= 2n) {
        sum = pop(sum, mul(fac[count - 2n], mul(cur, cal2(count))))
      }
      sum = mul(sum, fac[N - i])
      ans = add(ans, sum)
      cur += 1n
    }
  }
  return add(ans, fac[count])
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    N = BigInt(parseInt(readLine(), 10));
    a = readLine().split(' ').map(aTemp => BigInt(parseInt(aTemp, 10, 64)));
        let result;

        a.unshift(0n)
        for (let i in _.range(a.length)) {
          pre.push(0n);
          fac.push(0n);
          c.push(0n);
        };

        result = solve(a);
        ws.write(result + "\n");
    ws.end();
};