webpackJsonp([118],{58:function(n,e){n.exports="## Expansion\n\nExpansion and contraction.\n\n## Usage\n\n```html\n<m-button id=\"myBtn\">Toggle</m-button>\n<m-expansion expand id=\"myExpansion\">\n  <m-list id=\"myList\" single-selection css=\"ul{\n      max-width:400px;\n      border: 1px solid rgba(0,0,0,.1);\n    }\" items=\"[{\n        text: 'Line item1',\n        icon: 'wifi'\n      },\n      { divider: true },\n      {\n        text: 'Line item2',\n        selected: true,\n        icon: 'bluetooth'\n      },\n      { divider: true },\n      {\n        text: 'Line item3',\n        icon: 'data_usage'\n      }]\"></m-list>\n</m-expansion>\n\n<script>\n  var tag = true\n  var myExp = document.querySelector('#myExpansion')\n  document.querySelector('#myBtn').addEventListener('click', function () {\n    if (tag) {\n      myExp.removeAttribute('expand')\n    } else {\n      myExp.setAttribute('expand', 1)\n    }\n    tag = !tag\n  })\n<\/script>\n```\n\n\n## API\n\n### Props\n\n```jsx\n{\n  expand?: boolean\n}\n```"}});
//# sourceMappingURL=118.f66bb674.chunk.js.map