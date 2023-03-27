# POC-CSS-Rollup-Ordering
Proof of Concept to Improve CSS Imports Strategy in the Design System.

## Why this Proof of concept?

The purpose of this Proof of Concept (POC) is to explore an alternative approach to our current Design System's CSS Imports strategy. Our current approach involves a single index.css file located at the root of the directory, which re-exports all CSS files from every component. This approach creates a challenge for the TurboSnap feature of Chromatic, as it cannot map a CSS file to a story file.

The proposed approach in this POC involves having each component import its own CSS file, enabling Webpack to map CSS files to components and allowing us to link components to their stories. This approach aims to resolve the issue with Chromatic's TurboSnap feature and improve the CSS import strategy in the Design System.

## Frequently Asked Questions (FAQ):
1. **What is the order of declaration of CSS files in the resulting index.css file?**
**Answer:** The CSS files are ordered based on the dependencies between components. Components with no dependencies are declared first, while complex components are declared last. This approach helps to ensure that the resulting index.css file is organized in a logical and efficient manner.

2. **How can we handle global CSS files that need to be imported?**
**Answer:** Global CSS files can be imported directly in the entry point (index.ts) at the root of the directory. We can specify the order in which they should appear in the resulting index.css file. Refer to the index.ts file located in the ./packages/components directory for an example of how this can be accomplished.



