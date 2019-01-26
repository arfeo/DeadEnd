# DeadEnd

Remake of `DeadEnd II`, a puzzle game initially developed by Wolfgang Thaller (released for the Macintosh in 1998).

[![DeadEnd Gameplay](http://static.arfeo.net/deadend/cover.png)](https://youtu.be/BItD1Ss58s8 "DeadEnd Gameplay")

Live demo: http://tests.arfeo.net/deadend/

## The game

DeadEnd is a strategy game. It is your goal to find a path out of a dungeon by pushing massive blocks of stone out of your way. This is a very tricky task because stones are so heavy that

1. you can move them only one by one,
1. you need space to step back and take a run, and
1. you can only push, not pull.

You have to develop a strategy and move pieces in the correct order, otherwise stones will block the way to exit. A piece pushed to the wrong place could be an obstacle for removing another block from your path. At higher levels there will be blocks which can only be pushed into one direction.

## How to play

Keyboard arrow keys control a blue ball which you have to guide to the exit in order to reach the next level. If you move the ball to a block, the ball will try to push it.

If you get stuck, use the _Undo_ button. You can go to another level at any time using the _Go to..._ button, but it is highly recommended to solve the levels one after another.

## Installation

Clone the project:

```
$ git clone https://github.com/arfeo/DeadEnd.git && cd DeadEnd
```

Run:

```
$ yarn
```

```
$ gulp
```

Build:

```
$ gulp build
```
