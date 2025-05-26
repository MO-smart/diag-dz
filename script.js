const codes = {
  "P0300": "الموتور يخبط في بزاف سيلوندريات، مشكل فالبوجيات ولا الرشاشات.",
  "P0171": "الموتور يخدم بهوا بزاف وقليل بنزين، يعني راه ناقص.",
  "P0420": "الكاتاليزور راه ما يخدمش مليح، ما يصفيش الغازات.",
  "P0811": "لومبرياج راه يزلق بزاف، ما يمسكش مليح.",
  "P0442": "كاين تسرب صغير فالنظام تاع البنزين (vap).",
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
    resultText.textContent = 'دخل كود صحيح باش نعطيك الشرح.';
    return;
  }
  if(codes[code]) {
    resultText.textContent = codes[code];
  } else {
    resultText.textContent = '⛔ الكود هذا مازال ما سجلناهش.';
  }
});

codeInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    searchBtn.click();
  }
});
