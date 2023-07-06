# POC-CSS-Imports-Strategy
Proof of Concept to Improve CSS Imports Strategy in the Design System.


`GlobalStyleProvider`: Since the tokens are added in a div inside the body, the variables can not be used directly on the body element. So, the GlobalStyleProvider is used to add the variables to the body element via JavaScript.

`TokenProvider`: The TokenProvider is used to add the tokens to the DOM via JavaScript. The tokens are added in style tag in the header, but target a specific div declared in the body. This divs allow us to have multiple sets of tokens in the same page.

`CSS Modules`: The CSS Modules are used to scope the CSS classes to the component. We use the package's version to generate the Hash. this ensures that the CSS classes are unique for each version, making sure multiple version of the Design system can be loaded.

