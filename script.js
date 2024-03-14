const weightInput = document.getElementById('weight'); 
const heightInput = document.getElementById('height'); 
const bmiForm = document.getElementById('bmi-form'); 
const bmiValueEl = document.getElementById('bmi-value'); 
const bmiCategoryEl = document.getElementById('bmi-category'); 
const bmiExplanationEl = document.getElementById('bmi-explanation'); 
const resultDiv = document.getElementById('result'); 
 
bmiForm.addEventListener('submit', function(event) { 
  event.preventDefault(); // Prevent default form submission 
 
  const weight = parseFloat(weightInput.value); 
  const height = parseFloat(heightInput.value) / 100; // Convert cm to meters 
  const bmi = weight / Math.pow(height, 2); 
 
  // Calculate BMI category and explanation 
  let bmiCategory; 
  let bmiExplanation; 
  if (bmi < 18.5) { 
    bmiCategory = 'Kekurangan Berat Badan'; 
    bmiExplanation = 'Anda mungkin perlu menambah berat badan.'; 
  } else if (bmi >= 18.5 && bmi <= 24.9) { 
    bmiCategory = 'Berat Badan Normal'; 
    bmiExplanation = 'Berat badan Anda berada di kisaran yang sehat.'; 
  } else if (bmi >= 25 && bmi <= 29.9) { 
    bmiCategory = 'Kelebihan Berat Badan'; 
    bmiExplanation = 'Anda mungkin perlu menurunkan berat badan.'; 
  } else { 
    bmiCategory = 'Obesitas'; 
    bmiExplanation = 'Anda berisiko mengalami masalah kesehatan. Sebaiknya konsultasikan dengan dokter.'; 
  } 
 
  // Display result 
  bmiValueEl.textContent = bmi.toFixed(2); 
  bmiCategoryEl.textContent = bmiCategory; 
  bmiExplanationEl.textContent = bmiExplanation; 
  resultDiv.classList.remove('hidden'); 
});
