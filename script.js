document.getElementById('calculateBtn').addEventListener('click', () => {
    // Input values
    const initialWeight = parseFloat(document.getElementById('initialWeight').value);
    const deductionPercentage = parseFloat(document.getElementById('deductionPercentage').value);
    const subtractedWeight = parseFloat(document.getElementById('subtractedWeight').value);
    const ratePerKg = parseFloat(document.getElementById('ratePerKg').value);
    const cdPercentage = parseFloat(document.getElementById('cdPercentage').value);
  
    // Calculations
    const netWeight = initialWeight - (initialWeight * (deductionPercentage / 100)) - subtractedWeight;
    const amount = netWeight * ratePerKg;
    const cdAmount = amount * (cdPercentage / 100);
    const finalAmount = amount - cdAmount;
  
    // Display output
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p><strong>Initial Weight:</strong> ${initialWeight} kg</p>
      <p><strong>Deduction Percentage:</strong> ${deductionPercentage}%</p>
      <p><strong>Subtracted Weight:</strong> ${subtractedWeight} kg</p>
      <p><strong>Rate per kg:</strong> Rs ${ratePerKg}</p>
      <p><strong>CD Percentage:</strong> ${cdPercentage}%</p>
      <p><strong>Net Weight:</strong> ${netWeight.toFixed(2)} kg</p>
      <p><strong>Amount:</strong> Rs ${amount.toFixed(2)}</p>
      <p><strong>CD Amount:</strong> Rs ${cdAmount.toFixed(2)}</p>
      <p><strong>Final Amount:</strong> Rs ${finalAmount.toFixed(2)}</p>
    `;
  
    document.getElementById('downloadPdf').style.display = 'block';
  });
  
  document.getElementById('downloadPdf').addEventListener('click', () => {
    // PDF generation
    const { jsPDF } = window.jspdf; // Ensure jsPDF is loaded
    const pdf = new jsPDF();
  
    const content = document.getElementById('result').innerText;
  
    pdf.text("Sona Mukhi Bill Calculator", 10, 10);
    pdf.text(content, 10, 20);
  
    pdf.save('Sona_Mukhi_Bill.pdf');
  });
  