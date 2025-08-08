// Creates a CSS cursor rule from an SVG string.
const createSvgCursor = (svg: string) => `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}') 12 12, auto`;

export const happyCursor = createSvgCursor(
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>'
);

export const sadCursor = createSvgCursor(
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="deepskyblue" stroke="white" stroke-width="1"><path d="M12 2C7.5 2 4 6.5 4 11c0 2.5 1 4.8 2.7 6.4L12 22l5.3-4.6C19 15.8 20 13.5 20 11c0-4.5-3.5-9-8-9z"/></svg>'
);

export const angryCursor = createSvgCursor(
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'
);

export const genzCursor = createSvgCursor(
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="hotpink" stroke="black" stroke-width="1"><path d="M4 8H6V6H8V4H10V2H14V4H16V6H18V8H20V12H18V14H16V16H14V18H10V16H8V14H6V12H4V8Z"/></svg>'
);
