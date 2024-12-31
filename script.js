  const codeSection = document.getElementById('codeSection');
  const getCodeBtn = document.getElementById('getCodeBtn');
  
let unit = "px";

function updateRadius(type) {
  const previewDiv = document.getElementById('previewDiv');
  let topLeft = document.getElementById('topLeft').value;
  let topRight = document.getElementById('topRight').value;
  let bottomRight = document.getElementById('bottomRight').value;
  let bottomLeft = document.getElementById('bottomLeft').value;

  if (type === 'all') {
    const allValue = document.getElementById('allCorners').value;
    topLeft = topRight = bottomRight = bottomLeft = allValue;
    document.getElementById('topLeft').value = allValue;
    document.getElementById('topRight').value = allValue;
    document.getElementById('bottomRight').value = allValue;
    document.getElementById('bottomLeft').value = allValue;
  }

  if (type === 'unit') {
    unit = document.getElementById('unit').value;
  }

  const borderRadius = `${topLeft}${unit} ${topRight}${unit} ${bottomRight}${unit} ${bottomLeft}${unit}`;
  previewDiv.style.borderRadius = borderRadius;

  // Update the CSS code whenever radius changes
  updateCSSCode();
  codeSection.style.display = 'none'
  codeSection.style.display = "none";
}

function updateSize() {
  const previewDiv = document.getElementById('previewDiv');
  const height = document.getElementById('divHeight').value;
  const width = document.getElementById('divWidth').value;

  previewDiv.style.height = `${height}px`;
  previewDiv.style.width = `${width}px`;

  // Update the CSS code whenever size changes
  updateCSSCode();
}

function updateCSSCode() {
  const previewDiv = document.getElementById('previewDiv');
  const style = window.getComputedStyle(previewDiv);
  const borderRadius = style.borderRadius;
  const height = style.height;
  const width = style.width;

  document.getElementById('cssCode').value = `width: ${width};\nheight: ${height};\nborder-radius: ${borderRadius};`;
}

function copyCode() {
  const cssCode = document.getElementById('cssCode');
  cssCode.select();
  cssCode.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');
  alert('CSS Code Copied!');
}

function toggleCodeSection() {
  updateCSSCode()
  
  if (codeSection.style.display === "none") {
    codeSection.style.display = "block";
  } else {
    codeSection.style.display = "none";
    getCodeBtn.textContent = "Get Code";
  }
}

// Ensure the textarea is updated on initial load
document.addEventListener("DOMContentLoaded", updateCSSCode);