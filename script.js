const THEME_KEY = "theme-preference";
const LANG_KEY = "language-preference";
const htmlElement = document.documentElement;

const translations = {
  en: {
    tab_title: "Jadoo Travel",
    nav_destinations: "Destinations",
    nav_hotels: "Hotels",
    nav_flights: "Flights",
    nav_bookings: "Bookings",
    nav_login: "Login",
    nav_signup: "Sign up",
    nav_lang_toggle: "EN",
    lang_en: "English",
    lang_ar: "العربية",
    hero_subheading: "BEST DESTINATIONS AROUND THE WORLD",
    hero_heading:
      "Travel, <span class='hero-highlight'>enjoy</span> and live a new and full life",
    hero_desc:
      "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.",
    hero_find_more: "Find out more",
    hero_play_demo: "Play Demo",
    services_category: "CATEGORY",
    services_heading: "We Offer Best Services",
    service_1_title: "Calculated Weather",
    service_1_desc:
      "Built Wicket longer admire do barton vanity itself do in it.",
    service_2_title: "Best Flights",
    service_2_desc:
      "Engrossed listening. Park gate sell they west hard for the.",
    service_3_title: "Local Events",
    service_3_desc:
      "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    service_4_title: "Customization",
    service_4_desc:
      "We deliver outsourced aviation services for military customers.",
    dest_category: "Top Selling",
    dest_heading: "Top Destinations",
    dest_1_title: "Rome, Italty",
    dest_1_price: "$5,42k",
    dest_1_trip: "10 Days Trip",
    dest_2_title: "London, UK",
    dest_2_price: "$4.2k",
    dest_2_trip: "12 Days Trip",
    dest_3_title: "Full Europe",
    dest_3_price: "$15k",
    dest_3_trip: "28 Days Trip",
    steps_category: "Easy and Fast",
    steps_heading: "Book Your Next Trip <br /> In 3 Easy Steps",
    step_1_title: "Choose Destination",
    step_1_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    step_2_title: "Make Payment",
    step_2_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    step_3_title: "Reach Airport on Selected Date",
    step_3_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    booking_card_1_title: "Trip To Greece",
    booking_card_1_info: "14-29 June | by Robbin joseph",
    booking_card_1_people: "24 people going",
    booking_card_2_status: "Ongoing",
    booking_card_2_title: "Trip to rome",
    booking_card_2_progress: "<span>40%</span> completed",
    testimonial_category: "TESTIMONIALS",
    testimonial_heading: "What People Say<br />About Us.",
    testimonial_text:
      '"On the Windows talking pointed pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
    testimonial_author: "Mike taylor",
    testimonial_location: "Lahore, Pakistan",
    subscribe_heading:
      "Subscribe to get information, latest news and other<br />interesting offers about Jadoo",
    subscribe_placeholder: "Your email",
    subscribe_button: "Subscribe",
    footer_desc: "Book your trip in minute, get full Control for much longer.",
    footer_company_title: "Company",
    footer_company_about: "About",
    footer_company_careers: "Careers",
    footer_company_mobile: "Mobile",
    footer_contact_title: "Contact",
    footer_contact_help: "Help/FAQ",
    footer_contact_press: "Press",
    footer_contact_affiliates: "Affiliates",
    footer_more_title: "More",
    footer_more_airlinefees: "Airlinefees",
    footer_more_airline: "Airline",
    footer_more_lowfare: "Low fare tips",
    footer_app_title: "Discover our app",
    footer_app_google_1: "Get it on",
    footer_app_google_2: "Google Play",
    footer_app_apple_1: "Available on the",
    footer_app_apple_2: "Apple Store",
    footer_copyright: "All rights reserved@jadoo.co",
  },
  ar: {
    tab_title: "جادو للسفر",
    nav_destinations: "الوجهات",
    nav_hotels: "الفنادق",
    nav_flights: "الرحلات",
    nav_bookings: "الحجوزات",
    nav_login: "تسجيل الدخول",
    nav_signup: "إنشاء حساب",
    nav_lang_toggle: "AR",
    lang_en: "English",
    lang_ar: "العربية",
    hero_subheading: "أفضل الوجهات حول العالم",
    hero_heading:
      "سافر، <span class='hero-highlight'>استمتع</span> وعش حياة جديدة ومليئة",
    hero_desc:
      "احجز رحلتك في دقائق واحصل على تحكم كامل لفترة أطول. نحن نقدم أفضل الخدمات السياحية.",
    hero_find_more: "اكتشف المزيد",
    hero_play_demo: "تشغيل العرض",
    services_category: "خدماتنا",
    services_heading: "نحن نقدم أفضل الخدمات",
    service_1_title: "الطقس المتوقع",
    service_1_desc: "وصف بسيط للخدمة الأولى المتعلقة بالطقس.",
    service_2_title: "أفضل الرحلات",
    service_2_desc: "وصف بسيط للخدمة الثانية المتعلقة بالرحلات.",
    service_3_title: "الفعاليات المحلية",
    service_3_desc: "وصف بسيط للخدمة الثالثة المتعلقة بالفعاليات.",
    service_4_title: "تخصيص الرحلات",
    service_4_desc: "وصف بسيط للخدمة الرابعة المتعلقة بالتخصيص.",
    dest_category: "الأكثر مبيعاً",
    dest_heading: "أفضل الوجهات",
    dest_1_title: "روما، إيطاليا",
    dest_1_price: "$5,42k",
    dest_1_trip: "رحلة 10 أيام",
    dest_2_title: "لندن، المملكة المتحدة",
    dest_2_price: "$4.2k",
    dest_2_trip: "رحلة 12 يوم",
    dest_3_title: "كل أوروبا",
    dest_3_price: "$15k",
    dest_3_trip: "رحلة 28 يوم",
    steps_category: "سهل وسريع",
    steps_heading: "احجز رحلتك القادمة <br /> في 3 خطوات سهلة",
    step_1_title: "اختر الوجهة",
    step_1_desc: "نص تجريبي لوصف الخطوة الأولى لاختيار الوجهة.",
    step_2_title: "قم بالدفع",
    step_2_desc: "نص تجريبي لوصف الخطوة الثانية لإتمام عملية الدفع.",
    step_3_title: "التوجه للمطار في التاريخ المحدد",
    step_3_desc: "نص تجريبي لوصف الخطوة الثالثة للذهاب للمطار.",
    booking_card_1_title: "رحلة إلى اليونان",
    booking_card_1_info: "14-29 يونيو | بواسطة روبن جوزيف",
    booking_card_1_people: "24 شخصاً ذاهبون",
    booking_card_2_status: "جاري التنفيذ",
    booking_card_2_title: "رحلة إلى روما",
    booking_card_2_progress: "اكتمل <span>40%</span>",
    testimonial_category: "آراء العملاء",
    testimonial_heading: "ماذا يقول الناس<br />عنا.",
    testimonial_text:
      '"نص تجريبي لرأي العميل باللغة العربية. يمكن استبداله لاحقاً بالنص الفعلي."',
    testimonial_author: "مايك تايلور",
    testimonial_location: "لاهور، باكستان",
    subscribe_heading:
      "اشترك للحصول على المعلومات، آخر الأخبار، والعروض<br />المميزة الأخرى حول جادو",
    subscribe_placeholder: "بريدك الإلكتروني",
    subscribe_button: "اشترك",
    footer_desc: "احجز رحلتك في دقيقة، واحصل على تحكم كامل لفترة أطول.",
    footer_company_title: "الشركة",
    footer_company_about: "عنا",
    footer_company_careers: "الوظائف",
    footer_company_mobile: "الموبايل",
    footer_contact_title: "التواصل",
    footer_contact_help: "المساعدة/الأسئلة",
    footer_contact_press: "الصحافة",
    footer_contact_affiliates: "الشركاء",
    footer_more_title: "المزيد",
    footer_more_airlinefees: "رسوم الطيران",
    footer_more_airline: "شركات الطيران",
    footer_more_lowfare: "نصائح أسعار منخفضة",
    footer_app_title: "اكتشف تطبيقنا",
    footer_app_google_1: "احصل عليه من",
    footer_app_google_2: "Google Play",
    footer_app_apple_1: "متوفر على",
    footer_app_apple_2: "App Store",
    footer_copyright: "jadoo.co@جميع الحقوق محفوظة",
  },
};

function applyTheme(theme) {
  htmlElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

function toggleTheme() {
  const currentTheme = htmlElement.getAttribute("data-bs-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
}

function applyLanguage(lang) {
  const isRtl = lang === "ar";
  const bootstrapLtr = document.getElementById("bootstrap-ltr");
  const bootstrapRtl = document.getElementById("bootstrap-rtl");

  htmlElement.lang = lang;
  htmlElement.dir = isRtl ? "rtl" : "ltr";

  if (bootstrapLtr) bootstrapLtr.disabled = isRtl;
  if (bootstrapRtl) bootstrapRtl.disabled = !isRtl;

  localStorage.setItem(LANG_KEY, lang);

  translatePage(lang);
}

function translatePage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-lang-key]").forEach((element) => {
    const key = element.getAttribute("data-lang-key");
    if (t[key]) {
      element.innerHTML = t[key];
    } else {
      console.warn(`Translation key "${key}" not found for lang "${lang}".`);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const langEnBtn = document.getElementById("lang-en-btn");
  const langArBtn = document.getElementById("lang-ar-btn");

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  if (langEnBtn) {
    langEnBtn.addEventListener("click", (e) => {
      e.preventDefault();
      applyLanguage("en");
    });
  }
  if (langArBtn) {
    langArBtn.addEventListener("click", (e) => {
      e.preventDefault();
      applyLanguage("ar");
    });
  }

  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  const savedLang = localStorage.getItem(LANG_KEY) || "en";

  applyTheme(savedTheme);
  applyLanguage(savedLang);
});