# Functional programming exercises


This repository contains functional programming exercises borrowed from this gist: https://gist.github.com/oskarkv/3168ea3f8d7530ccd94c97c19aafe266

It can be used as extra tasks / katas during the course, when people run out of tasks.

## The exercises

Everything in this document is copied from [here](https://gist.github.com/oskarkv/3168ea3f8d7530ccd94c97c19aafe266)

Can't get the formatting to work properly so you probably want to go directly to the gist ^^

## About

I came up with these exercises for someone learning to code. But I thought more people might want to do them.

I like functional programming, so the exercises asks you to make functions that are common in functional programming. If you have learned a language, but want to learn more about functional programming, these exercises are for you.

The exercises were originally meant for Python, but doing them in JavaScript, Ruby or any Lisp (Scheme, Clojure, ...) should work just as well. It should also be possible to do them in Java and C#, but it will probably not be as easy.

Most of the functions you are asked to create already exist in functional languages, or libraries for most languages. But it can be educational to implement them yourself.

The exercises are just very roughly in order of difficulty. If you get stuck on one, try the next.

## Tips/Notes

A "map" is the same as a dictionary or hash table, i.e. a data structure that maps keys to values.

When creating the functions below, think about what happens in edge cases, such as giving `zip` lists of different lenghts. Decide what should happen in these cases!

No function should modify its arguments (as is possible with lists and maps in Python). Always leave the arguments the way they were and create new stuff for the output.

If you find `f(arg1)(arg2)` confusing, it just means that `f(arg1)` returns a function that we immediately call with the argument `arg2`.

If you use Python 3, you might need to wrap your test calls in the `list` function to get back a list and not an iterator, so you can more easily see the results.

## Exercises

### Learn about recursion

Recursion is essential for functional programming. Learn about it!

### Learn about closures

[[https://en.wikipedia.org/wiki/Closure_(computer_programming)][Closures]] (a kind of function) are also essential. Learn about them!

### Learn about map, reduce, filter, apply and anonymous functions

Learn what the functions `map`, `reduce`, `filter` and `apply` do and about anonymous functions in your language. They are all very useful, and will be helpful in the rest of the exercises.

Note that in JavaScript and Python the `...args` and `*args` syntax respectively can be used instead of `apply`.

### clist

Create a function `clist` (for create list) that takes an arbitrary number of arguments and creates a list of the arguments given. `clist` is useful for giving as an argument to other functions.

If you use a Lisp, it already exists in the form of `list`, and you can skip this exercise.

```python
clist(1, 2, 3) ` [1, 2, 3]
```

### add, sub

Create a function `add` that takes an arbitrary number of arguments, and adds them all. Also create a function `sub` that subtracts all the arguments but the first from the first. These functions are useful to have, since `+` and `-` are not functions that can be passed to other functions. Use `reduce` to implement them!

You can also make `sub` negate the argument when it is called with a single argument. Then `sub` can act as `negate`.

If you use a Lisp, they already exists in the form of `+` and `-`, and you can skip this exercise.

```python
add(1, 2, 3) => 6
sub(5, 1, 2) => 2
```

### compose

Create a function `compose` that takes 2 functions and does function composition, i.e. `compose(double, negate)` should return a function that first calls `negate` and then `double` on its argument.

```python
compose(double, negate)(3) => -6
```

### compose with var args

Create a `compose` function again that can take an arbitrary number of arguments, and that returns a function that can take an arbitrary number of arguments.

```python
compose(negate, double, add)(1, 2, 3) => -12
compose(clist, double, sub)(1, 2, 3) => [-8]
```

### zip

Create a function `zip` that takes an arbitrary number of sequneces, and zips them, i.e. creates a list of lists, where the inner lists consist of the first elements from the given sequences, then the second elements from the given sequences, and so on.

```python
zip([1, 2, 3], [4, 5, 6]) => [[1, 4], [2, 5], [3, 6]]
zip([1, 2, 3], [4, 5, 6], [7, 8, 9]) => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

### zipmap

Create a function `zipmap` that takes a two seqences, and creates a dictionary from the elements of the first seqence to the elements of the second.

```python
zipmap([1, 2, 3], [4, 5, 6]) => {1: 4, 2: 5, 3: 6}
```

### zipwith

Create a function `zipwith` that takes a function `f` and an arbitrary number of sequences, and returns a list of `f` applied to the first elements of the given seqences, followed by `f` applied to the second elements of the sequences, an so on.

In some languages, `map` can act like this. If it does in your language, you can skip this exercise.

```python
zipwith(add, [1, 2, 3], [4, 5, 6]) => [5, 7, 9]
zipwith(add, [1, 2, 3], [4, 5, 6], [1, 1, 1]) => [6, 8, 10]
```

### car and cdr

`cons(a, b)` constructs a pair, and `car(pair)` and `cdr(pair)` returns the first and last element of that pair. For example, `car(cons(3, 4))` returns `3`, and `cdr(cons(3, 4))` returns `4`.

Given this implementation of cons:

```python
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
```

Implement `car` and `cdr`.

### partial

Create a function `partial` that takes a function `f` and an arbitrary number of arguments, and returns a new function that is `f` partially applied to the arguments.

```python
partial(add, 1, 2)(3, 4) => 10
partial(clist, 1, 2)(3, 4) => [1, 2, 3, 4]
partial(sub, 10)(1, 2) => 7
```

### transpose

Create a function `transpose` that transposes matrices (lists of lists). Use the things you have learned in previous exercises.

```python
transpose([[1, 2, 3], [4, 5, 6]]) => [[1, 4], [2, 5], [3, 6]]
```

### flip

Create a function `flip` that takes a function and flips the first and second argument to it.

```python
flip(clist)(1, 2, 3) => [2, 1, 3]
flip(sub)(10, 1) => -9
```

### flips

Create a function `flips` that takes a function and reverses the arguments to it.

```python
flips(clist)(1, 2, 3) => [3, 2, 1]
flips(sub)(1, 2, 3) => 0
```

### take

Create a function `take` that takes a number `n` and a sequence `seq`, and returns a list of the first `n` elements of `seq`.

```python
take(3, range(10)) => [0, 1, 2]
```

### drop

Create a function `drop` that takes a number `n` and a sequence `seq`, and returns a list with the first `n` elements of `seq` dropped.

```python
drop(3, range(6)) => [3, 4, 5]
```

### flatten

Create a function `flatten` that can flatten a tree.

```python
flatten([1 [2 [3 4] [5 6] 7] 8 [9 10]]) => [1 2 3 4 5 6 7 8 9 10]
```

### interleave

Create a function `interleave` take takes an arbitrary number of sequences and interleaves them.

```python
interleave([1, 2, 3], [10, 20, 30]) => [1, 10, 2, 20, 3, 30]
interleave([1, 2, 3], [10, 20, 30], "abc") => [1, 10, "a", 2, 20, "b", 3, 30, "c"]
```

### every_pred

Create a function `every_pred` that takes an arbitrary number of predicates (functions that return a truth value) and returns a function that returns true if and only if all predicates were truthy for the argument.

```python
every_pred(positive, even)(8) => True
every_pred(positive, even)(7) => False
```

### frequencies

Create a function `frequencies` that takes a sequence and counts how many times the elements appear in the sequence, returns a map.

```python
frequencies("aabcbcac") => {'a': 3, 'c': 3, 'b': 2}
frequencies([1, 2, 2, 2]) => {1: 1, 2: 3}
```

### partition

Create a function `partition` that takes the arguments `n`, `step`, and `seq` (number, number, sequence). It should take `n` elements from `seq`, wrap that in a list, and step forward in `seq` `step` steps, then take another `n` elements, and so on.

```python
partition(3, 1, [1, 2, 3, 4, 5]) => [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
```

### merge_with

Create a function `merge_with` that takes a function and an arbitrary number of maps, and merges the maps, combining elements that exist in more than 1 using the given function.

```python
merge_with(add, {"a": 1, "b": 2}, {"b": 2}) => {"a": 1, "b": 4}
merge_with(clist, {"a": 1, "b": 2}, {"b": 2}) => {"a": 1, "b": [2 2]}
```

### tree_seq

Create a function `tree_seq` that takes a function `is_branch`, a function `children` and a tree `t`, that returns a list of the nodes of the tree, in depth-first order. `is_branch` should take 1 argument and return true for nodes that can have children. `children` should take 1 argument and return a sequence of the children for nodes that `is_branch` returns true for. `t` is the root of the tree. Look carefully at the examples below. As far as this function is concerned, a tree is not necessarily a list of lists; a tree is whatever the given functions define it to be.

Assume that `is_list` and `is_integer` below tests if the argument is a list or integer, respectively, and that `identity` is the identity function. `range` takes an integer /n/ an returns a sequence from /0/ to /n-1/ (this function exists in most languages).

```python
t = [1, [2, [3, 5]]]
tree_seq(is_list, identity, t) => [[1, [2, [3, 5]]], 1, [2, [3, 5]], 2, [3, 5], 3, 5]

tree_seq(is_integer, range, 3) => [3, 0, 1, 0, 2, 0, 1, 0]
```

### memoize

Create a function `memoize` take takes a function and memoizes it, i.e. it returns a function that does the same thing that the given function, but caches its results in a map.

```python
new_add ` memoize(add)
new_add(1, 2, 3) => 6
new_add(1, 2, 3) => 6 (Did not actually compute add(1, 2, 3).)
```

The second call of `new_add` should not compute using `add` again, but instead look up the stored result.

### group_by

Create a function `group_by` that takes a function and a sequence and groups the elements of the sequence based on the result of the given function.

`len` returns the length of a sequence.

```python
group_by(len, ["hi", "dog", "me", "bad", "good"])
=> {2: ["hi", "me"], 3: ["dog", "bad"], 4: ["good"]}
```

### update

Create a function `update` that takes a map `m`, a key `k`, a function `f` and an arbitrary number of additional arguments `args`. Returns a new map, that is like `m`, but has the value for `k` replaced by the result of applying `f` to the previous value and the given `args`. If the previous value does not exist, create a new entry for `k`.

```python
bob = {"name": "bob", "hp": 3}
update(bob, "hp", add, 2) => {"name": "bob", "hp": 5}
nohp = {"name": "bob"}
update(nohp, "hp", add, 2) => {"name": "bob", "hp": 2}
```

### update_in

Create a function `update_in` that is similar to `update`, but can update a value inside nested maps.

```python
a = {"a": 1, "b": {"c": 2, "d": {"e": 3}}}
update_in(a, ["b", "d", "e"], add, 10) => {"a": 1, "b": {"c": 2, "d": {"e": 13}}}
update_in(a, ["b", "d", "f"], add, 10) => {"a": 1, "b": {"c": 2, "d": {"e": 3, "f": 10}}}
```

### balanced

Create a function `balanced` that takes a string `s` and returns `True` if it contains only balanced parens, brackets and braces (`(), [], {}`), otherwise `False`.

```python
balanced("abc(def{g}hi[jk]((()))l)m") => True
balanced("a(b") => False
balanced("([)]") => False
```

### postwalk, prewalk

Create two functions `postwalk` and `prewalk`, that both take a function `f` and a tree `t`. (A tree in this case is a list where the elements can be trees themselves), e.g. `[1, [2, 3, [1, 2]], [4, 5, 6]]`. In this case `1`, `[2, 3, [1, 2]` and `6` are all elements of the tree (but not the only ones).) The functions should apply `f` to each element in the tree to create a new tree with the results, like `map` but for trees instead of lists. The difference between `prewalk` and `postwalk` is that `prewalk` does the replacement on the way "down" and `postwalk` on the way "up", so that `prewalk` can continue down into the new value that was "just" created.

In the following example, imagine that `wrap_unless_zero`, if the argument is a number, wraps the argument in a list if it is larger than zero, then decrements it by 1.

```python
postwalk(wrap_unless_zero, [1 [2 [3]]]) => [[0] [[1] [[2]]]]
prewalk(wrap_unless_zero, [1 [2 [3]]]) => [[0] [[[0]] [[[[0]]]]]]
```

### Recreate `map`, `filter` and `reduce`

Implement `map`, `filter` and `reduce` from scratch.

