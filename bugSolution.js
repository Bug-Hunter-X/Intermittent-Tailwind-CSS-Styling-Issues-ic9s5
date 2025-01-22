```javascript
//Ensure your tailwind.config.js is correctly configured and includes the content path
//tailwind.config.js
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// in your main css file or your component, make sure tailwind directives are imported correctly 
//@tailwind base;
//@tailwind components;
//@tailwind utilities;

<div class="bg-red-500 p-4">
  <p>This text should be red and have padding.</p>
</div>
```