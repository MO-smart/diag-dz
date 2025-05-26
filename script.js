const codes = {
  "P0300": {
    description: "الموتور يخبط في بزاف سيلوندريات، مشكل فالبوجيات ولا الرشاشات.",
    causes: "بوجيات معطوبة، مشاكل في الرشاشات، نقص في الشرارة.",
    solutions: "بدل البوجيات، نظف الرشاشات، افحص الشرارة."
  },
  "P0171": {
    description: "الموتور يخدم بهوا بزاف وقليل بنزين، يعني راه ناقص.",
    causes: "تسرب هوا، فلتر هواء مسدود، حساس هوا معطوب.",
    solutions: "صلح التسرب، بدل فلتر الهواء، بدل الحساس."
  },
  "P0420": {
    description: "الكاتاليزور راه ما يخدمش مليح، ما يصفيش الغازات.",
    causes: "الكاتاليزور مسدود أو معطوب، حساس الاكسجين معطل.",
    solutions: "بدل الكاتاليزور، بدل حساس الاكسجين."
  }
  // تقدر تزيد ميات أكواد هنا...
};

const loginPage = document.getElementById('loginPage');
const searchPage = document.getElementById('searchPage');
const loginBtn = document.getElementById('loginBtn');
const userNameInput = document.getElementById('userName');
const userCodeInput = document.getElementById('userCode');
const codeInput = document.getElementById('codeInput');
const searchBtn = document.getElementById('searchBtn');
const resultText = document.getElementById('resultText');

loginBtn.addEventListener('click', () => {
  if(userNameInput.value.trim() === '' || userCodeInput.value.trim() === '') {
    alert('عمر الاسم والكود من فضلك');
    return;
  }
  loginPage.style.display = 'none';
  searchPage.style.display = 'block';
});

searchBtn.addEventListener('click', () => {
  const code = codeInput.value.toUpperCase().trim();
  if(code === '') {
    resultText.innerHTML = 'دخل كود صحيح باش نعطيك الشرح.';
    return;
  }
  if(codes[code]) {
    const info = codes[code];
    resultText.innerHTML = `
      <b>شرح العطل:</b> ${info.description} <br><br>
      <b>الأسباب:</b> ${info.causes} <br><br>
      <b>الحلول:</b> ${info.solutions}
    `;
  } else {
    resultText.textContent = '⛔ الكود هذا مازال ما سجلناهش.';
  }
});

codeInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    searchBtn.click();
  }
});
