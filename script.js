const codes = {
  moteur: {
    "P0300": "الموتور يخبط في بزاف سيلوندريات، مشكل فالبوجيات ولا الرشاشات.",
    "P0171": "الموتور يخدم بهوا بزاف وقليل بنزين، يعني راه ناقص.",
    "P0420": "الكاتاليزور راه ما يخدمش مليح، ما يصفيش الغازات.",
    "P0811": "لومبرياج راه يزلق بزاف، ما يمسكش مليح.",
    "P0442": "كاين تسرب صغير فالنظام تاع البنزين (vap).",
  },
  electricite: {
    "B1234": "مشكلة في الأسلاك الكهربائية أو في الحسّاسات.",
    "B5678": "تلف في البطارية ولا المولد (الدينامو).",
  },
  transmission: {
    "C1122": "عطل في ناقل الحركة الأوتوماتيكي.",
    "C3344": "مشكلة في القابض (الكلتش).",
  }
};

const loginPage = document.getElementById('loginPage');
const searchPage = document.getElementById('searchPage');
const loginBtn = document.getElementById('loginBtn');
const userNameInput = document.getElementById('userName');
const userCodeInput = document.getElementById('userCode');
const codeInput = document.getElementById('codeInput');
const searchBtn = document.getElementById('searchBtn');
const resultText = document.getElementById('resultText');
const sectionsNav = document.getElementById('sectionsNav');

let currentSection = 'all';

loginBtn.addEventListener('click', () => {
  if(userNameInput.value.trim() === '' || userCodeInput.value.trim() === '') {
    alert('عمر الاسم والكود من فضلك');
    return;
  }
  loginPage.style.display = 'none';
  searchPage.style.display = 'block';
  codeInput.focus();
});

// تفعيل تبديل الأقسام عند الضغط على زر قسم
sectionsNav.addEventListener('click', (e) => {
  if(e.target.tagName === 'BUTTON') {
    // تحديث الزر النشط بصريًا
    Array.from(sectionsNav.children).forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentSection = e.target.getAttribute('data-section');
    resultText.textContent = 'دخل كود باش تشوف الشرح بالدارجة';
    codeInput.value = '';
    codeInput.focus();
  }
});

// دالة البحث في الكود حسب القسم الحالي
function searchCode(code) {
  if(currentSection === 'all') {
    // ندور على الكود في جميع الأقسام
    for(let section in codes) {
      if(codes[section][code]) {
        return codes[section][code];
      }
    }
    return null;
  } else {
    return codes[currentSection][code] || null;
  }
}

searchBtn.addEventListener('click', () => {
  const code = codeInput.value.toUpperCase().trim();
  if(code === '') {
    resultText.textContent = 'دخل كود صحيح باش نعطيك الشرح.';
    return;
  }
  const res = searchCode(code);
  if(res) {
    resultText.textContent = res;
  } else {
    resultText.textContent = '⛔ الكود هذا مازال ما سجلناهش.';
  }
});

// بحث بالضغط على Enter
codeInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    searchBtn.click();
  }
});
