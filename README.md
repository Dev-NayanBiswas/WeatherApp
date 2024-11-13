Difference between Nullish Coalescing and Or operator
***Or (||)*** operator checks all falsy values like false, 0,"",NaN, null, undefined.
example
```javascript
let username = "";
let displayName = username || "Guest";
console.log(displayName); // Output: "Guest"
```
***Nullish Coalescing (??)*** operator checks null and undefined values only, other falsy value will get pass through this operation...
```javascript
    let username = "";
    let displayName = username ?? "Guest";
    console.log(displayName); // Output: ""
```

[_Live Link_](https://weather-dashboard-with-tapascript.vercel.app/)
