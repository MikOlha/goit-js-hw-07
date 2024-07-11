function getElementWidth(content, padding, border) {
      const contentWidth = parseFloat(content);
  const paddingWidth = 2 * parseFloat(padding);
    const borderWidth = 2 * parseFloat(border);
     const totalWidth = contentWidth + paddingWidth + borderWidth;
    return totalWidth;
 }

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200