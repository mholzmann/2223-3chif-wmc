# Asynchronous Programming

## What is asynchronous programming?

- Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs.
- Once that task has finished, your program is presented with the result.

<!---->

- In the following example a **callback function** is passed to `setTimeout()`, which executes it one second later:

  ```typescript [|1|2|3|4]
  console.log('A');
  setTimeout(() => console.log('B'), 1000);
  console.log('C');
  // output: A C B
  ```

- Rather than having to wait until the second has finished, the application is able to print `C` in the meantime.

- So `setTimeout()` is an **asynchronous function**.

## Why do we need asynchronous programming?

- Node.js is single-threaded
  - this means the whole application runs in one thread
- therefore long-running **synchronous code** (=blocking code) must be avoided
  - in the meantime the application couldn't do anything else

<!---->

- **asynchronous programming** allows us to offload long-running I/O tasks to the operating system 
  - since most modern systems are multi-threaded, they can handle multiple tasks at the same time
  - when one of those tasks completes, the operating system informs Node.js
  - Node.js then invokes the given **callback function** of your application

## When should you use Node.js?

- Node.js is well suited for I/O-intensive apps like webservers
  - Most of the backends behind websites don’t need to do complicated computations.
  - Our servers spend most of their time waiting for the disk to read & write, or waiting for the wire to transmit our message and send back the answer.
  - Those scenarios can be perfectly handled in Node.js via **asynchronous programming**.

## When shouldn't you use Node.js?

- Node.js is unsuitable for CPU-intensive apps
  - During a long lasting calculation your Node.js webserver wouldn't be available for other clients.
  - Don't use Node.js in such a scenario!