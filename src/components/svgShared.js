/**
 * ## SharedDefs
 * @compnent
 * shared SVG defs
 */
import React from "react";

export const SharedDefs = props => (
  <svg id="sharedDefs">
    <defs>
      <filter id="aquaFilter" x="0%" y="0%" width="100%" height="100%">
        <feColorMatrix
          id="aquaColor"
          type="matrix"
          values="0.10 0.10 0.10 0 0 0.66 0.66 0.66 0 0 0.56 0.56 0.56 0 0 0 0 0 1 0"
        />
        <feComponentTransfer>
          <feFuncR type="linear" slope=".8" intercept="0.15" />
          <feFuncG type="linear" slope=".8" intercept="0.15" />
          <feFuncB type="linear" slope=".8" intercept="0.15" />
        </feComponentTransfer>
      </filter>
      <filter
        id="blueFilter"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        contrast=".5"
      >
        <feColorMatrix
          id="blueColor"
          type="matrix"
          values="0.05 0.05 0.05 0 0 0.59 0.59 0.59 0 0 0.80 0.80 0.80 0 0 0 0 0 1 0"
        />
        <feComponentTransfer>
          <feFuncR type="linear" slope=".8" intercept="0.15" />
          <feFuncG type="linear" slope=".8" intercept="0.15" />
          <feFuncB type="linear" slope=".8" intercept="0.15" />
        </feComponentTransfer>
      </filter>
      <filter id="orangeFilter" x="0%" y="0%" width="100%" height="100%">
        <feColorMatrix
          id="orangeColor"
          type="matrix"
          values="1 1 1 0 0 0.65 0.65 0.65 0 0 0.38 0.38 0.38 0 0 0 0 0 1 0"
        />
        <feComponentTransfer>
          <feFuncR type="linear" slope=".8" intercept="0.15" />
          <feFuncG type="linear" slope=".8" intercept="0.15" />
          <feFuncB type="linear" slope=".8" intercept="0.15" />
        </feComponentTransfer>
      </filter>
      <filter id="purpleFilter" x="0%" y="0%" width="100%" height="100%">
        <feColorMatrix
          id="purpleColor"
          type="matrix"
          values="0.55 0.55 0.55 0 0 0.29 0.29 0.29 0 0 0.96 0.96 0.96 0 0 0 0 0 1 0"
        />
        <feComponentTransfer>
          <feFuncR type="linear" slope=".8" intercept="0.15" />
          <feFuncG type="linear" slope=".8" intercept="0.15" />
          <feFuncB type="linear" slope=".8" intercept="0.15" />
        </feComponentTransfer>
      </filter>
      <clipPath id="roundedEdges" clipPathUnits="objectBoundingBox">
        <rect x="0" y="0" rx="0.05" ry="0.05" width="1" height="1" />
      </clipPath>
    </defs>
  </svg>
);
