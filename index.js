// ReferenceError: window is not defined in JavaScript

// Using an if statement to check if you're on the browser

if (typeof window !== 'undefined') {
  // 👉️ can use window here
  console.log('You are on the browser');

  console.log(window.location.href);

  console.log(window.location.protocol);
}

// ------------------------------------------

// Checking if you're on the browser or on the server

if (typeof window !== 'undefined') {
  console.log('You are on the browser');

  // ✅ Can use window here
  console.log(window.innerWidth);

  window.addEventListener('mousemove', () => {
    console.log('Mouse moved');
  });
} else {
  console.log('You are on the server');
  // ⛔️ Don't use window here
}
