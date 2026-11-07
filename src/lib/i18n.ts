"use client";

// AUTO-GENERATED base + hand-written runtime. Locales: EN / ZH / VI / ES / AR.
// UI dictionary recovered from the deployed production bundle (5 locales);
// fallback keys from the previous 3-locale source where the deployed dict lacks them.

import * as React from "react";
import { create } from "zustand";

export type Locale = "en" | "zh" | "vi" | "es" | "ar";

/** A localized string. es/ar were added in the 5-locale release; they fall back to en when absent. */
export type LStr = { en: string; zh: string; vi: string; es?: string; ar?: string };

export const LOCALES: { code: Locale; label: string; short: string }[] = [{"code":"en","label":"English","short":"EN"},{"code":"zh","label":"中文","short":"中"},{"code":"vi","label":"Tiếng Việt","short":"VI"},{"code":"es","label":"Español","short":"ES"},{"code":"ar","label":"العربية","short":"ع"}];

/** Default display language (parity with the deployed site). */
export const DEFAULT_LOCALE: Locale = "es";

const STORAGE_KEY = "hn-lang";
const LOCALE_CODES = LOCALES.map((l) => l.code);

function applyDocumentLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
}

// ---- Locale store ---------------------------------------------------------

type LangState = {
  locale: Locale;
  hydrated: boolean;
  setLocale: (l: Locale) => void;
  hydrate: () => void;
};

export const useLang = create<LangState>((set, get) => ({
  locale: DEFAULT_LOCALE,
  hydrated: false,
  setLocale: (locale) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, locale);
      applyDocumentLocale(locale);
    }
    set({ locale });
  },
  hydrate: () => {
    if (get().hydrated) return;
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const locale: Locale = saved && (LOCALE_CODES as string[]).includes(saved) ? (saved as Locale) : DEFAULT_LOCALE;
    applyDocumentLocale(locale);
    set({ locale, hydrated: true });
  },
}));

// ---- Helpers --------------------------------------------------------------

/** Pick the right string for the locale. Accepts LStr or plain string. */
export function pick(v: LStr | string | undefined, locale: Locale): string {
  if (!v) return "";
  if (typeof v === "string") return v;
  return v[locale] ?? v.en ?? v.zh ?? "";
}

// ---- UI string dictionary -------------------------------------------------

export const ui: Record<string, LStr> = {
 "brand.tagline": {
  "en": "Industrial Coatings Export · Foshan, China",
  "zh": "工业涂料出口 · 广东佛山",
  "vi": "Xuất khẩu sơn công nghiệp · Phật Sơn, Trung Quốc",
  "es": "Exportación de recubrimientos industriales · Foshan, China",
  "ar": "تصدير الطلاءات الصناعية · فوشان، الصين"
 },
 "brand.premiumDesc": {
  "en": "Chinese exporter of industrial coating systems — anti-corrosion, high-temperature, epoxy floor and architectural paints — sourced from ISO 9001 certified plants, with OEM/ODM service, RAL/Pantone colour matching and full export documentation.",
  "zh": "工业涂料体系出口商——防腐、耐高温、环氧地坪及建筑涂料，货源来自 ISO 9001 认证工厂，提供 OEM/ODM、RAL/Pantone 调色及全套出口单证。",
  "vi": "Nhà xuất khẩu hệ sơn công nghiệp Trung Quốc — chống ăn mòn, chịu nhiệt, nền epoxy và sơn kiến trúc — từ nhà máy ISO 9001, kèm OEM/ODM, pha màu RAL/Pantone và chứng từ xuất khẩu đầy đủ.",
  "es": "Exportador chino de sistemas de recubrimientos industriales — pinturas anticorrosivas, de alta temperatura, epoxi para pisos y arquitectónicas — abastecidas de plantas certificadas ISO 9001, con servicio OEM/ODM, igualación de color RAL/Pantone y documentación de exportación completa.",
  "ar": "مصدِّر صيني لأنظمة الطلاء الصناعية — طلاءات مضادة للتآكل ومقاومة للحرارة العالية وأرضيات إيبوكسي وطلاءات معمارية — تُورَّد من مصانع معتمدة ISO 9001، مع خدمة OEM/ODM ومطابقة ألوان RAL/Pantone ومستندات تصدير كاملة."
 },
 "topbar.established": {
  "en": "EST.",
  "zh": "成立于",
  "vi": "TLTH"
 },
 "topbar.phone": {
  "en": "Phone",
  "zh": "电话",
  "vi": "Điện thoại",
  "es": "Teléfono",
  "ar": "الهاتف"
 },
 "topbar.email": {
  "en": "Email",
  "zh": "邮箱",
  "vi": "Email",
  "es": "Correo electrónico",
  "ar": "البريد الإلكتروني"
 },
 "nav.home": {
  "en": "Home",
  "zh": "首页",
  "vi": "Trang chủ",
  "es": "Inicio",
  "ar": "الرئيسية"
 },
 "nav.products": {
  "en": "Products",
  "zh": "产品",
  "vi": "Sản phẩm",
  "es": "Productos",
  "ar": "المنتجات"
 },
 "nav.solutions": {
  "en": "Solutions",
  "zh": "解决方案",
  "vi": "Giải pháp",
  "es": "Soluciones",
  "ar": "الحلول"
 },
 "nav.cases": {
  "en": "Systems",
  "zh": "应用体系",
  "vi": "Hệ thống",
  "es": "Sistemas",
  "ar": "أنظمة التطبيق"
 },
 "nav.about": {
  "en": "About",
  "zh": "关于我们",
  "vi": "Giới thiệu",
  "es": "Nosotros",
  "ar": "من نحن"
 },
 "nav.news": {
  "en": "News",
  "zh": "新闻",
  "vi": "Tin tức",
  "es": "Novedades",
  "ar": "الأخبار"
 },
 "nav.faq": {
  "en": "FAQ",
  "zh": "常见问题",
  "vi": "Câu hỏi",
  "es": "FAQ",
  "ar": "الأسئلة الشائعة"
 },
 "nav.contact": {
  "en": "Contact",
  "zh": "联系",
  "vi": "Liên hệ",
  "es": "Contacto",
  "ar": "اتصل بنا"
 },
 "cta.getQuote": {
  "en": "Get A Free Quote",
  "zh": "免费获取报价",
  "vi": "Nhận báo giá miễn phí",
  "es": "Obtenga una cotización gratuita",
  "ar": "احصل على عرض سعر مجاني"
 },
 "cta.browseCatalog": {
  "en": "Browse Catalog",
  "zh": "浏览产品目录",
  "vi": "Xem catalog",
  "es": "Ver catálogo",
  "ar": "تصفح الكتالوج"
 },
 "cta.viewAllCatalog": {
  "en": "View All Catalog",
  "zh": "查看全部目录",
  "vi": "Toàn bộ catalog",
  "es": "Ver todo el catálogo",
  "ar": "عرض الكتالوج الكامل"
 },
 "cta.viewAllCases": {
  "en": "View All Systems",
  "zh": "查看全部体系",
  "vi": "Xem tất cả hệ thống",
  "es": "Ver todos los sistemas",
  "ar": "عرض كل الأنظمة"
 },
 "cta.viewFullCatalog": {
  "en": "View Full Catalog",
  "zh": "查看完整目录",
  "vi": "Xem catalog đầy đủ",
  "es": "Ver catálogo completo",
  "ar": "عرض الكتالوج الكامل"
 },
 "cta.requestQuote": {
  "en": "Request Quote",
  "zh": "申请报价",
  "vi": "Yêu cầu báo giá",
  "es": "Solicitar cotización",
  "ar": "اطلب عرض سعر"
 },
 "cta.getTds": {
  "en": "Get TDS / MSDS",
  "zh": "获取TDS/MSDS",
  "vi": "Nhận TDS / MSDS",
  "es": "Obtener TDS / MSDS",
  "ar": "احصل على TDS / MSDS"
 },
 "cta.requestFreeQuote": {
  "en": "Request Free Quote",
  "zh": "免费申请报价",
  "vi": "Yêu cầu báo giá miễn phí",
  "es": "Solicitar cotización gratuita",
  "ar": "اطلب عرض سعر مجاني"
 },
 "cta.whatsappChat": {
  "en": "WhatsApp Chat",
  "zh": "WhatsApp 在线咨询",
  "vi": "Trò chuyện WhatsApp",
  "es": "Chat por WhatsApp",
  "ar": "محادثة WhatsApp"
 },
 "cta.startProject": {
  "en": "Start Your Project",
  "zh": "启动您的项目",
  "vi": "Bắt đầu dự án",
  "es": "Inicie su proyecto",
  "ar": "ابدأ مشروعك"
 },
 "cta.askEngineer": {
  "en": "Ask an Engineer",
  "zh": "咨询工程师",
  "vi": "Hỏi kỹ sư",
  "es": "Consulte a un ingeniero",
  "ar": "استشر مهندساً"
 },
 "cta.readArticle": {
  "en": "Read article",
  "zh": "阅读文章",
  "vi": "Đọc bài viết",
  "es": "Leer artículo",
  "ar": "اقرأ المقال"
 },
 "cta.subscribe": {
  "en": "Subscribe",
  "zh": "订阅",
  "vi": "Đăng ký",
  "es": "Suscribirse",
  "ar": "اشترك"
 },
 "cta.sendInquiry": {
  "en": "Send Inquiry",
  "zh": "发送询盘",
  "vi": "Gửi yêu cầu",
  "es": "Enviar consulta",
  "ar": "أرسل استفساراً"
 },
 "cta.sending": {
  "en": "Sending…",
  "zh": "发送中…",
  "vi": "Đang gửi…",
  "es": "Enviando…",
  "ar": "جارٍ الإرسال…"
 },
 "cta.sendAnother": {
  "en": "Send another inquiry",
  "zh": "再发送一条询盘",
  "vi": "Gửi yêu cầu khác",
  "es": "Enviar otra consulta",
  "ar": "أرسل استفساراً آخر"
 },
 "cta.relatedProducts": {
  "en": "Related Products",
  "zh": "相关产品",
  "vi": "Sản phẩm liên quan",
  "es": "Productos relacionados",
  "ar": "منتجات ذات صلة"
 },
 "cta.requestSimilar": {
  "en": "Request This System",
  "zh": "申请此体系",
  "vi": "Yêu cầu hệ thống này",
  "es": "Solicitar este sistema",
  "ar": "اطلب هذا النظام"
 },
 "cta.explore": {
  "en": "Explore system",
  "zh": "了解系统",
  "vi": "Khám phá hệ thống",
  "es": "Explorar sistema",
  "ar": "استكشف النظام"
 },
 "cta.talkToEngineer": {
  "en": "Talk to an engineer",
  "zh": "与工程师交谈",
  "vi": "Trò chuyện với kỹ sư",
  "es": "Hable con un ingeniero",
  "ar": "تحدث إلى مهندس"
 },
 "cta.partnerWithUs": {
  "en": "Partner with us",
  "zh": "与我们合作",
  "vi": "Hợp tác cùng chúng tôi",
  "es": "Colabore con nosotros",
  "ar": "كن شريكاً لنا"
 },
 "hero.index": {
  "en": "[ 01 ]",
  "zh": "[ 01 ]",
  "vi": "[ 01 ]",
  "es": "[ 01 ]",
  "ar": "[ 01 ]"
 },
 "hero.eyebrow": {
  "en": "Industrial Coatings · Export from China",
  "zh": "工业涂料 · 中国出口",
  "vi": "Sơn công nghiệp · Xuất khẩu từ Trung Quốc",
  "es": "Recubrimientos industriales · Exportación desde China",
  "ar": "طلاءات صناعية · تصدير من الصين"
 },
 "hero.title1": {
  "en": "Engineered Coatings",
  "zh": "工程化涂料",
  "vi": "Sơn kỹ thuật",
  "es": "Recubrimientos de ingeniería",
  "ar": "طلاءات هندسية"
 },
 "hero.title2": {
  "en": "for",
  "zh": "用于",
  "vi": "cho công nghiệp",
  "es": "para",
  "ar": "للخدمة في"
 },
 "hero.titleAccent": {
  "en": "Heavy-Duty",
  "zh": "重型",
  "vi": "hạng nặng",
  "es": "industrias",
  "ar": "الصناعات"
 },
 "hero.title3": {
  "en": "Industries",
  "zh": "工业",
  "vi": "",
  "es": "de servicio pesado",
  "ar": "الثقيلة"
 },
 "hero.desc": {
  "en": "Chinese exporter of anti-corrosion, high-temperature, epoxy floor and architectural coating systems — sourced from ISO 9001 certified plants in China's coatings hub. Full export documentation · OEM/ODM · RAL/Pantone colour matching · 24-month quality warranty.",
  "zh": "防腐、耐高温、环氧地坪及建筑涂料体系出口商——货源来自中国涂料之乡的 ISO 9001 认证工厂。全套出口单证 · OEM/ODM · RAL/Pantone 调色 · 24 个月质保。",
  "vi": "Xuất khẩu hệ sơn chống ăn mòn, chịu nhiệt, nền epoxy và sơn kiến trúc — từ nhà máy ISO 9001 tại thủ phủ sơn Trung Quốc. Chứng từ xuất khẩu đầy đủ · OEM/ODM · pha màu RAL/Pantone · bảo hành 24 tháng.",
  "es": "Exportador chino de sistemas de recubrimientos anticorrosivos, de alta temperatura, epoxi para pisos y arquitectónicos — abastecidos de plantas certificadas ISO 9001 en la capital china de los recubrimientos. Documentación de exportación completa · OEM/ODM · Igualación de color RAL/Pantone · Garantía de calidad de 24 meses.",
  "ar": "مصدِّر صيني لأنظمة طلاء مضادة للتآكل ومقاومة للحرارة العالية وأرضيات إيبوكسي وطلاءات معمارية — من مصانع معتمدة ISO 9001 في مركز صناعة الطلاءات بالصين. مستندات تصدير كاملة · OEM/ODM · مطابقة ألوان RAL/Pantone · ضمان جودة 24 شهراً."
 },
 "hero.specSheet": {
  "en": "SPEC SHEET · REV.2026",
  "zh": "技术规格 · 2026版",
  "vi": "BẢNG THÔNG SỐ · REV.2026",
  "es": "FICHA TÉCNICA · REV.2026",
  "ar": "ورقة المواصفات · إصدار 2026"
 },
 "hero.live": {
  "en": "LIVE",
  "zh": "实时",
  "vi": "TRỰC TIẾP",
  "es": "EN VIVO",
  "ar": "مباشر"
 },
 "partners.trustedBy": {
  "en": "Coating systems we supply",
  "zh": "我们供应的涂料体系",
  "vi": "Các hệ sơn chúng tôi cung ứng",
  "es": "Sistemas de recubrimiento que suministramos",
  "ar": "أنظمة الطلاء التي نورّدها"
 },
 "core.index": {
  "en": "[ 02 ]",
  "zh": "[ 02 ]",
  "vi": "[ 02 ]",
  "es": "[ 02 ]",
  "ar": "[ 02 ]"
 },
 "core.eyebrow": {
  "en": "Core Business",
  "zh": "核心业务",
  "vi": "Kinh doanh cốt lõi",
  "es": "Negocio central",
  "ar": "النشاط الأساسي"
 },
 "core.title": {
  "en": "Industrial Coatings. Engineered for B2B.",
  "zh": "工业涂料，专为B2B而造。",
  "vi": "Sơn công nghiệp. Thiết kế cho B2B.",
  "es": "Recubrimientos industriales. Diseñados para B2B.",
  "ar": "طلاءات صناعية. مصمَّمة لقطاع B2B."
 },
 "pcat.index": {
  "en": "[ 03 ]",
  "zh": "[ 03 ]",
  "vi": "[ 03 ]",
  "es": "[ 03 ]",
  "ar": "[ 03 ]"
 },
 "pcat.eyebrow": {
  "en": "Product Categories",
  "zh": "产品分类",
  "vi": "Danh mục sản phẩm",
  "es": "Categorías de productos",
  "ar": "فئات المنتجات"
 },
 "pcat.title": {
  "en": "Six Coating Systems. One Trusted Source.",
  "zh": "六大涂料体系,一个可信之选。",
  "vi": "Sáu hệ sơn. Một nguồn đáng tin cậy.",
  "es": "Seis sistemas de recubrimiento. Una fuente confiable.",
  "ar": "ستة أنظمة طلاء. مصدر واحد موثوق."
 },
 "why.index": {
  "en": "[ 04 ]",
  "zh": "[ 04 ]",
  "vi": "[ 04 ]",
  "es": "[ 04 ]",
  "ar": "[ 04 ]"
 },
 "why.eyebrow": {
  "en": "Why HONG NGUYEN",
  "zh": "为何选择宏源",
  "vi": "Vì sao chọn HONG NGUYEN",
  "es": "Por qué HONG NGUYEN",
  "ar": "لماذا HONG NGUYEN"
 },
 "why.title": {
  "en": "Built for B2B buyers who can't afford coating failure.",
  "zh": "为不容许涂层失效的B2B采购方而生。",
  "vi": "Dành cho khách hàng B2B không thể chấp nhận lỗi sơn.",
  "es": "Pensado para compradores B2B que no pueden permitirse una falla del recubrimiento.",
  "ar": "بُنيت لمشتري B2B الذي لا يحتمل فشل الطلاء."
 },
 "app.index": {
  "en": "[ 05 ]",
  "zh": "[ 05 ]",
  "vi": "[ 05 ]",
  "es": "[ 05 ]",
  "ar": "[ 05 ]"
 },
 "app.eyebrow": {
  "en": "Applications",
  "zh": "应用领域",
  "vi": "Ứng dụng",
  "es": "Aplicaciones",
  "ar": "مجالات التطبيق"
 },
 "app.title": {
  "en": "Where HONG NGUYEN coatings work.",
  "zh": "宏源涂料的应用场景。",
  "vi": "Nơi sơn HONG NGUYEN phát huy tác dụng.",
  "es": "Dónde trabajan los recubrimientos HONG NGUYEN.",
  "ar": "حيث تعمل طلاءات HONG NGUYEN."
 },
 "cases.index": {
  "en": "[ 06 ]",
  "zh": "[ 06 ]",
  "vi": "[ 06 ]",
  "es": "[ 06 ]",
  "ar": "[ 06 ]"
 },
 "cases.eyebrow": {
  "en": "Application Systems",
  "zh": "应用体系",
  "vi": "Hệ thống ứng dụng",
  "es": "Sistemas de aplicación",
  "ar": "أنظمة التطبيق"
 },
 "cases.title": {
  "en": "Typical systems, specified per project.",
  "zh": "典型配套体系，按项目选型。",
  "vi": "Hệ thống điển hình, chọn theo dự án.",
  "es": "Sistemas típicos, especificados por proyecto.",
  "ar": "أنظمة نموذجية، تُحدَّد وفق كل مشروع."
 },
 "cert.index": {
  "en": "[ 07 ]",
  "zh": "[ 07 ]",
  "vi": "[ 07 ]",
  "es": "[ 07 ]",
  "ar": "[ 07 ]"
 },
 "cert.eyebrow": {
  "en": "Certifications",
  "zh": "认证资质",
  "vi": "Chứng nhận",
  "es": "Certificaciones",
  "ar": "الشهادات والاعتمادات"
 },
 "cert.title": {
  "en": "Audited. Tested. Documented.",
  "zh": "审核·检测·文档齐备。",
  "vi": "Đã kiểm toán. Đã kiểm tra. Đầy đủ hồ sơ.",
  "es": "Auditados. Ensayados. Documentados.",
  "ar": "مُدقَّق. مُختبر. مُوثَّق."
 },
 "cert.desc": {
  "en": "Every shipment backed by internationally recognized certifications. Pre-shipment samples can be tested at SGS, BV, or Intertek on request.",
  "zh": "每批出货均附带国际认可认证。可按要求在SGS、BV或Intertek进行装运前抽样检测。",
  "vi": "Mỗi lô hàng đều có chứng nhận quốc tế. Có thể kiểm tra mẫu trước khi giao tại SGS, BV hoặc Intertek theo yêu cầu.",
  "es": "Cada embarque respaldado por certificaciones reconocidas internacionalmente. Las muestras previas al embarque pueden ensayarse en SGS, BV o Intertek a pedido.",
  "ar": "كل شحنة مدعومة بشهادات معترف بها دولياً. ويمكن عند الطلب اختبار عينات ما قبل الشحن لدى SGS أو BV أو Intertek."
 },
 "voice.index": {
  "en": "[ 08 ]",
  "zh": "[ 08 ]",
  "vi": "[ 08 ]"
 },
 "voice.eyebrow": {
  "en": "Client Voices",
  "zh": "客户之声",
  "vi": "Khách hàng nói"
 },
 "voice.title": {
  "en": "What B2B buyers say.",
  "zh": "B2B采购方怎么说。",
  "vi": "Khách hàng B2B nhận xét."
 },
 "rq.index": {
  "en": "[ 09 ]",
  "zh": "[ 09 ]",
  "vi": "[ 09 ]",
  "es": "[ 09 ]",
  "ar": "[ 09 ]"
 },
 "rq.eyebrow": {
  "en": "Request Quote",
  "zh": "申请报价",
  "vi": "Yêu cầu báo giá",
  "es": "Solicitar cotización",
  "ar": "اطلب عرض سعر"
 },
 "rq.title": {
  "en": "Get a quote in 24 hours. Sample shipped in 48.",
  "zh": "24小时内报价,48小时内寄样。",
  "vi": "Báo giá trong 24 giờ. Giao mẫu trong 48 giờ.",
  "es": "Cotización en 24 horas. Muestra enviada en 48.",
  "ar": "عرض سعر خلال 24 ساعة. وشحن العينة خلال 48."
 },
 "rq.desc": {
  "en": "Tell us your project — substrate, environment, performance requirements. Our coating engineers respond same business day.",
  "zh": "告诉我们您的项目——基材、环境、性能要求。我们的涂料工程师将在同一工作日内回复。",
  "vi": "Hãy cho chúng tôi biết dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật. Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc.",
  "es": "Cuéntenos su proyecto — sustrato, ambiente, requisitos de desempeño. Nuestros ingenieros de recubrimientos responden el mismo día hábil.",
  "ar": "أخبرنا بمشروعك — الركيزة والبيئة ومتطلبات الأداء. يرد مهندسو الطلاء لدينا في اليوم التجاري نفسه."
 },
 "footer.products": {
  "en": "Products",
  "zh": "产品",
  "vi": "Sản phẩm",
  "es": "Productos",
  "ar": "المنتجات"
 },
 "footer.company": {
  "en": "Company",
  "zh": "公司",
  "vi": "Công ty",
  "es": "Compañía",
  "ar": "الشركة"
 },
 "footer.exportRegions": {
  "en": "Export Regions",
  "zh": "出口地区",
  "vi": "Khu vực xuất khẩu",
  "es": "Regiones de exportación",
  "ar": "مناطق التصدير"
 },
 "footer.rights": {
  "en": "All rights reserved.",
  "zh": "保留所有权利。",
  "vi": "Đã đăng ký bản quyền.",
  "es": "Todos los derechos reservados.",
  "ar": "جميع الحقوق محفوظة."
 },
 "footer.headquarters": {
  "en": "HEADQUARTERS",
  "zh": "总部",
  "vi": "TRỤ SỞ",
  "es": "SEDE CENTRAL",
  "ar": "المقر الرئيسي"
 },
 "footer.contact.phone": {
  "en": "Phone",
  "zh": "电话",
  "vi": "Điện thoại",
  "es": "Teléfono",
  "ar": "الهاتف"
 },
 "footer.contact.email": {
  "en": "Email",
  "zh": "邮箱",
  "vi": "Email",
  "es": "Correo electrónico",
  "ar": "البريد الإلكتروني"
 },
 "footer.contact.whatsapp": {
  "en": "WhatsApp / WeChat",
  "zh": "WhatsApp / 微信",
  "vi": "WhatsApp / WeChat",
  "es": "WhatsApp / WeChat",
  "ar": "WhatsApp / WeChat"
 },
 "footer.contact.address": {
  "en": "Address",
  "zh": "地址",
  "vi": "Địa chỉ",
  "es": "Dirección",
  "ar": "العنوان"
 },
 "pp.index": {
  "en": "[ 03 ]",
  "zh": "[ 03 ]",
  "vi": "[ 03 ]",
  "es": "[ 03 ]",
  "ar": "[ 03 ]"
 },
 "pp.eyebrow": {
  "en": "Product Catalog",
  "zh": "产品目录",
  "vi": "Catalog sản phẩm",
  "es": "Catálogo de productos",
  "ar": "كتالوج المنتجات"
 },
 "pp.title1": {
  "en": "Six Coating Systems.",
  "zh": "六大涂料体系。",
  "vi": "Sáu hệ sơn.",
  "es": "Seis sistemas de recubrimiento.",
  "ar": "ستة أنظمة طلاء."
 },
 "pp.title2": {
  "en": "One Trusted Source.",
  "zh": "一个可信之选。",
  "vi": "Một nguồn đáng tin cậy.",
  "es": "Una fuente confiable.",
  "ar": "مصدر واحد موثوق."
 },
 "pp.desc": {
  "en": "From anti-corrosion primers for offshore steel to 600°C high-temperature silicone systems — every product is manufactured in-house, traceable to batch, and backed by a 24-month warranty.",
  "zh": "从海洋钢结构的防腐底漆到600°C耐高温有机硅系统——每款产品均为自主生产、批次可追溯,并提供24个月质保。",
  "vi": "Từ sơn lót chống ăn mòn cho kết cấu thép ngoài khơi đến hệ sơn silicone chịu 600°C — mọi sản phẩm đều sản xuất nội bộ, truy xuất theo lô, bảo hành 24 tháng.",
  "es": "Desde imprimaciones anticorrosivas para acero offshore hasta sistemas de silicona de 600°C para alta temperatura — cada producto se fabrica internamente, es trazable por lote y está respaldado por una garantía de 24 meses.",
  "ar": "من برايمرات مكافحة التآكل للفولاذ البحري إلى أنظمة سيليكون مقاومة حتى 600°C — كل منتج يُصنَّع داخلياً، قابل للتتبع حتى الدفعة، ومدعوم بضمان 24 شهراً."
 },
 "pp.specSheet": {
  "en": "· SPEC SHEET",
  "zh": "· 技术规格",
  "vi": "· BẢNG THÔNG SỐ",
  "es": "· FICHA TÉCNICA",
  "ar": "· ورقة المواصفات"
 },
 "pp.technicalData": {
  "en": "TECHNICAL DATA",
  "zh": "技术数据",
  "vi": "DỮ LIỆU KỸ THUẬT",
  "es": "DATOS TÉCNICOS",
  "ar": "البيانات الفنية"
 },
 "pp.applications": {
  "en": "APPLICATIONS",
  "zh": "应用领域",
  "vi": "ỨNG DỤNG",
  "es": "APLICACIONES",
  "ar": "مجالات التطبيق"
 },
 "pp.fullCatalogEyebrow": {
  "en": "Full Catalog",
  "zh": "完整目录",
  "vi": "Toàn bộ catalog",
  "es": "Catálogo completo",
  "ar": "الكتالوج الكامل"
 },
 "pp.fullCatalogTitle": {
  "en": "Browse all six systems.",
  "zh": "浏览全部六大体系。",
  "vi": "Xem cả sáu hệ sơn.",
  "es": "Explore los seis sistemas.",
  "ar": "تصفح الأنظمة الستة كاملة."
 },
 "pp.featuredModels": {
  "en": "FEATURED MODELS",
  "zh": "产品型号",
  "vi": "MÃ SẢN PHẨM",
  "es": "MODELOS DESTACADOS",
  "ar": "الطرازات المميزة"
 },
 "pp.expandModels": {
  "en": "Show",
  "zh": "展开",
  "vi": "Hiện",
  "es": "Mostrar",
  "ar": "إظهار"
 },
 "pp.collapseModels": {
  "en": "Hide",
  "zh": "收起",
  "vi": "Ẩn",
  "es": "Ocultar",
  "ar": "إخفاء"
 },
 "pp.viewDetail": {
  "en": "TDS",
  "zh": "产品详情",
  "vi": "Thông số",
  "es": "TDS",
  "ar": "TDS"
 },
 "pp.hideDetail": {
  "en": "Hide",
  "zh": "收起",
  "vi": "Ẩn",
  "es": "Ocultar",
  "ar": "إخفاء"
 },
 "sol.index": {
  "en": "[ SOL ]",
  "zh": "[ SOL ]",
  "vi": "[ SOL ]",
  "es": "[ SOL ]",
  "ar": "[ SOL ]"
 },
 "sol.eyebrow": {
  "en": "Industry Solutions",
  "zh": "行业解决方案",
  "vi": "Giải pháp ngành",
  "es": "Soluciones por industria",
  "ar": "حلول القطاعات"
 },
 "sol.titleAccent": {
  "en": "industry vertical.",
  "zh": "行业场景。",
  "vi": "ngành.",
  "es": "sector industrial.",
  "ar": "الصناعي."
 },
 "sol.titlePre": {
  "en": "Coating systems engineered for your",
  "zh": "为您的",
  "vi": "Hệ sơn được thiết kế cho",
  "es": "Sistemas de recubrimiento diseñados para su",
  "ar": "أنظمة طلاء هندسية مصمَّمة لقطاعك"
 },
 "sol.desc": {
  "en": "We don't just sell paint — we engineer coating systems matched to your substrate, environment and performance spec. Below are six core industry verticals we serve worldwide.",
  "zh": "我们不仅销售涂料——我们提供与您的基材、环境及性能要求匹配的涂料系统。以下是我们全球服务的六大核心行业。",
  "vi": "Chúng tôi không chỉ bán sơn — chúng tôi thiết kế hệ sơn phù hợp với bề mặt, môi trường và yêu cầu kỹ thuật của bạn. Dưới đây là sáu ngành trọng điểm chúng tôi phục vụ toàn cầu.",
  "es": "No solo vendemos pintura: diseñamos sistemas de recubrimiento acordes a su sustrato, ambiente y especificación de desempeño. Estos son los seis sectores industriales clave que atendemos en todo el mundo.",
  "ar": "نحن لا نبيع الطلاء فحسب — بل نهندس أنظمة طلاء مطابقة لركيزتك وبيئتك ومواصفاتك الأدائية. وفيما يلي ستة قطاعات صناعية أساسية نخدمها في جميع أنحاء العالم."
 },
 "sol.recommended": {
  "en": "RECOMMENDED SYSTEMS",
  "zh": "推荐系统",
  "vi": "HỆ SƠN ĐỀ XUẤT",
  "es": "SISTEMAS RECOMENDADOS",
  "ar": "الأنظمة الموصى بها"
 },
 "sol.appEyebrow": {
  "en": "Applications",
  "zh": "应用领域",
  "vi": "Ứng dụng",
  "es": "Aplicaciones",
  "ar": "مجالات التطبيق"
 },
 "sol.appTitle": {
  "en": "Where HONG NGUYEN coatings work.",
  "zh": "宏源涂料的应用场景。",
  "vi": "Nơi sơn HONG NGUYEN phát huy tác dụng.",
  "es": "Dónde trabajan los recubrimientos HONG NGUYEN.",
  "ar": "حيث تعمل طلاءات HONG NGUYEN."
 },
 "sol.appDesc": {
  "en": "Six core application areas where our systems are field-proven.",
  "zh": "我们的系统已在这六大核心应用领域得到现场验证。",
  "vi": "Sáu lĩnh vực ứng dụng cốt lõi nơi hệ thống của chúng tôi đã được chứng minh.",
  "es": "Seis áreas de aplicación clave donde nuestros sistemas están probados en campo.",
  "ar": "ستة مجالات تطبيق أساسية أثبتت أنظمتنا جدارتها ميدانياً."
 },
 "sol.procEyebrow": {
  "en": "Engineering Process",
  "zh": "工程流程",
  "vi": "Quy trình kỹ thuật",
  "es": "Proceso de ingeniería",
  "ar": "العملية الهندسية"
 },
 "sol.procTitle": {
  "en": "From spec to shipment — four steps.",
  "zh": "从规格到出货——四步完成。",
  "vi": "Từ thông số đến giao hàng — bốn bước.",
  "es": "De la especificación al embarque — cuatro pasos.",
  "ar": "من المواصفة إلى الشحن — أربع خطوات."
 },
 "cp.eyebrow": {
  "en": "Application Systems",
  "zh": "应用体系",
  "vi": "Hệ thống ứng dụng",
  "es": "Sistemas de aplicación",
  "ar": "أنظمة التطبيق"
 },
 "cp.titlePre": {
  "en": "Typical coating systems,",
  "zh": "典型涂料配套体系，",
  "vi": "Hệ sơn điển hình,",
  "es": "Sistemas típicos de recubrimiento,",
  "ar": "أنظمة الطلاء النموذجية،"
 },
 "cp.titleAccent": {
  "en": "specified per project.",
  "zh": "按项目选型。",
  "vi": "chọn theo dự án.",
  "es": "especificados por proyecto.",
  "ar": "تُحدَّد وفق كل مشروع."
 },
 "cp.desc": {
  "en": "Representative coating builds for common duties. Exact systems — products, coats and DFT — are specified per corrosivity category, substrate and design life. Images are illustrative; batch TDS and QC reports accompany every order.",
  "zh": "面向常见工况的代表性配套。具体体系（产品、道数、膜厚）按腐蚀等级、基材与设计寿命选定。图片为示意图；每单随附批次 TDS 与质检报告。",
  "vi": "Cấu hình sơn đại diện cho các nhiệm vụ phổ biến. Hệ cụ thể (sản phẩm, số lớp, DFT) chọn theo cấp ăn mòn, bề mặt và tuổi thọ thiết kế. Hình minh họa; mỗi đơn kèm TDS và báo cáo QC theo lô.",
  "es": "Sistemas representativos para servicios comunes. Los sistemas exactos — productos, capas y DFT — se especifican según la categoría de corrosividad, el sustrato y la vida útil de diseño. Las imágenes son ilustrativas; la TDS de lote y los informes de QC acompañan cada pedido.",
  "ar": "تركيبات طلاء تمثيلية للمهام الشائعة. وتُحدَّد الأنظمة الفعلية — المنتجات وعدد الطبقات وDFT — وفق فئة التآكل والركيزة والعمر التصميمي. الصور توضيحية؛ وتُرفق ورقة TDS للدفعة وتقارير مراقبة الجودة بكل طلب."
 },
 "cp.outcomesTitle": {
  "en": "Systems & Service",
  "zh": "体系与服务",
  "vi": "Hệ thống & Dịch vụ",
  "es": "Sistemas y servicio",
  "ar": "الأنظمة والخدمة"
 },
 "ap.index": {
  "en": "[ 05 ]",
  "zh": "[ 05 ]",
  "vi": "[ 05 ]",
  "es": "[ 05 ]",
  "ar": "[ 05 ]"
 },
 "ap.eyebrow": {
  "en": "About HONG NGUYEN",
  "zh": "关于宏源",
  "vi": "Về HONG NGUYEN",
  "es": "Sobre HONG NGUYEN",
  "ar": "عن HONG NGUYEN"
 },
 "ap.titleAccent": {
  "en": "China's coatings hometown.",
  "zh": "中国涂料之乡。",
  "vi": "quê hương sơn Trung Quốc.",
  "es": "la capital china de los recubrimientos.",
  "ar": "موطن صناعة الطلاءات في الصين."
 },
 "ap.titlePre": {
  "en": "Based in",
  "zh": "立足",
  "vi": "Tại",
  "es": "Con base en",
  "ar": "مقرنا في"
 },
 "ap.desc": {
  "en": "HONG NGUYEN is a coating exporter based in Shunde, Guangdong — known as China's coatings hometown. We assemble complete coating systems (anti-corrosion, high-temperature, floor and architectural) from ISO 9001 certified plants in the region and supply them worldwide with full export documentation, OEM/ODM service and colour matching.",
  "zh": "宏源是一家立足广东顺德——“中国涂料之乡”——的涂料出口商。我们整合当地 ISO 9001 认证工厂的防腐、耐高温、地坪及建筑涂料体系，配套全套出口单证、OEM/ODM 服务与调色服务，供应全球。",
  "vi": "HONG NGUYEN là nhà xuất khẩu sơn đặt tại Shunde, Quảng Đông — 'quê hương sơn Trung Quốc'. Chúng tôi lắp hệ sơn trọn bộ (chống ăn mòn, chịu nhiệt, sàn, kiến trúc) từ các nhà máy ISO 9001 trong vùng và cung ứng toàn cầu kèm chứng từ xuất khẩu, OEM/ODM và pha màu.",
  "es": "HONG NGUYEN es un exportador de recubrimientos con base en Shunde, Guangdong — conocida como la capital china de los recubrimientos. Ensamblamos sistemas completos de recubrimiento (anticorrosivos, de alta temperatura, para pisos y arquitectónicos) desde plantas certificadas ISO 9001 de la región y los suministramos a todo el mundo con documentación de exportación completa, servicio OEM/ODM e igualación de color.",
  "ar": "HONG NGUYEN مصدِّر طلاءات مقره شوندي بقوانغدونغ — المعروفة بموطن صناعة الطلاءات في الصين. نجمع أنظمة طلاء كاملة (مكافحة التآكل، درجات الحرارة العالية، الأرضيات والمعمارية) من مصانع معتمدة ISO 9001 في المنطقة ونورّدها إلى العالم كله مع مستندات تصدير كاملة وخدمة OEM/ODM ومطابقة الألوان."
 },
 "ap.storyEyebrow": {
  "en": "Company Profile",
  "zh": "公司介绍",
  "vi": "Giới thiệu công ty",
  "es": "Perfil de la compañía",
  "ar": "التعريف بالشركة"
 },
 "ap.storyTitle": {
  "en": "Quality-rooted, green development.",
  "zh": "品质为本,绿色发展。",
  "vi": "Chất lượng là gốc, phát triển xanh.",
  "es": "Calidad como raíz, desarrollo verde.",
  "ar": "الجودة أساس، وتنمية خضراء."
 },
 "ap.storyP1": {
  "en": "HONG NGUYEN is a coating exporter based in Shunde, Guangdong — known as 'China's coatings hometown'. We work with ISO 9001 certified coating plants across the region, whose production runs under the ISO 9001 quality management and ISO 14001 environmental management systems.",
  "zh": "宏源立足广东顺德——“中国涂料之乡”。我们与区域内 ISO 9001 认证的涂料工厂合作，其生产严格执行 ISO 9001 质量管理体系与 ISO 14001 环境管理体系。",
  "vi": "HONG NGUYEN là nhà xuất khẩu sơn tại Shunde, Quảng Đông — 'quê hương sơn Trung Quốc'. Chúng tôi hợp tác với các nhà máy sơn ISO 9001 trong vùng, sản xuất theo hệ thống quản lý chất lượng ISO 9001 và môi trường ISO 14001.",
  "es": "HONG NGUYEN es un exportador de recubrimientos con base en Shunde, Guangdong — conocida como “la capital china de los recubrimientos”. Trabajamos con plantas de recubrimientos certificadas ISO 9001 en toda la región, cuya producción opera bajo los sistemas de gestión de calidad ISO 9001 y de gestión ambiental ISO 14001.",
  "ar": "HONG NGUYEN مصدِّر طلاءات مقره شوندي بقوانغدونغ — المعروفة بـ«موطن صناعة الطلاءات في الصين». نتعاون مع مصانع طلاء معتمدة ISO 9001 في جميع أنحاء المنطقة، وتجري عملياتها الإنتاجية في ظل نظام إدارة الجودة ISO 9001 ونظام الإدارة البيئية ISO 14001."
 },
 "ap.storyP2": {
  "en": "Our role is export: system selection, colour matching, OEM / private-label packaging, quality documentation (batch QC reports, third-party testing on request) and the full export paperwork for your market.",
  "zh": "我们的职责是出口：体系选型、调色、OEM/贴牌包装、质量文件（批次质检报告、可安排第三方检测）以及面向您市场的全套出口单证。",
  "vi": "Vai trò của chúng tôi là xuất khẩu: chọn hệ, pha màu, đóng gói OEM/nhãn riêng, hồ sơ chất lượng (báo cáo QC theo lô, thử nghiệm bên thứ ba theo yêu cầu) và bộ chứng từ xuất khẩu cho thị trường của bạn.",
  "es": "Nuestra función es la exportación: selección de sistemas, igualación de color, embalaje OEM / marca privada, documentación de calidad (informes de QC por lote, ensayos de terceros a pedido) y toda la documentación de exportación para su mercado.",
  "ar": "دورنا هو التصدير: اختيار النظام، ومطابقة الألوان، وتغليف OEM / العلامة الخاصة، ومستندات الجودة (تقارير مراقبة جودة الدفعات، والاختبار لدى طرف ثالث عند الطلب)، وكامل أوراق التصدير الخاصة بسوقك."
 },
 "ap.storyP3": {
  "en": "The product range covers waterborne and solvent-borne anti-corrosion systems, fluorocarbon finishes, industrial coatings, floor systems and specialty coatings — complete, stable and widely used on steel structures, petrochemical plants, bridges, ships, machinery and construction.",
  "zh": "产品线覆盖水性/油性防腐体系、氟碳漆、工业漆、地坪漆及特种涂料，配套齐全、性能稳定，广泛应用于钢结构、石油化工、桥梁船舶、五金机械及建筑领域。",
  "vi": "Dải sản phẩm gồm hệ chống ăn mòn gốc nước/dầu, sơn fluorocarbon, sơn công nghiệp, sơn nền và sơn đặc thù — đầy đủ, ổn định, dùng rộng rãi trên kết cấu thép, hóa dầu, cầu tàu, cơ khí và xây dựng.",
  "es": "La gama de productos abarca sistemas anticorrosivos base agua y base solvente, acabados fluorocarbonados, recubrimientos industriales, sistemas para pisos y recubrimientos especiales — completa, estable y ampliamente utilizada en estructuras de acero, plantas petroquímicas, puentes, buques, maquinaria y construcción.",
  "ar": "يغطي مدى المنتجات أنظمة مكافحة التآكل الأساس مائي والمحمّلة بالمذيبات، والطبقات النهائية الفلوروكربونية، والطلاءات الصناعية، وأنظمة الأرضيات والطلاءات الخاصة — متكاملة ومستقرة وتُستخدم على نطاق واسع على الهياكل الفولاذية والمصانع البتروكيماوية والجسور والسفن والآلات والمباني."
 },
 "ap.storyP4": {
  "en": "We hold to quality-first, green development — deepening anti-corrosion expertise, optimising product solutions and upgrading technical service. HONG NGUYEN looks forward to partnering with customers worldwide: reliable coatings and professional support for long-lasting protection on every project.",
  "zh": "公司坚守品质为本、绿色发展的理念，持续深耕防腐防护领域，优化产品方案、升级技术服务。宏源期待与全球客户携手，为各类工程提供长效稳定、节能环保的涂装解决方案。",
  "vi": "Chúng tôi kiên trì chất lượng là gốc, phát triển xanh — đào sâu chuyên môn chống ăn mòn, tối ưu giải pháp và nâng cấp dịch vụ kỹ thuật. HONG NGUYEN mong hợp tác cùng khách hàng toàn cầu cho mọi công trình.",
  "es": "Mantenemos el principio de calidad primero y desarrollo verde — profundizando la especialización en anticorrosión, optimizando las soluciones de producto y mejorando el servicio técnico. HONG NGUYEN espera asociarse con clientes de todo el mundo: recubrimientos confiables y soporte profesional para una protección duradera en cada proyecto.",
  "ar": "نلتزم بالجودة أولاً والتنمية الخضراء — بتعميق خبرة مكافحة التآكل، وتحسين حلول المنتجات، وترقية الخدمة الفنية. وتتطلع HONG NGUYEN إلى الشراكة مع العملاء في جميع أنحاء العالم: طلاءات موثوقة ودعم مهني لحماية طويلة الأمد في كل مشروع."
 },
 "ap.capEyebrow": {
  "en": "Capabilities",
  "zh": "核心能力",
  "vi": "Năng lực",
  "es": "Capacidades",
  "ar": "القدرات"
 },
 "ap.capTitle": {
  "en": "What we control end-to-end.",
  "zh": "端到端掌控的能力。",
  "vi": "Những gì chúng tôi kiểm soát từ đầu đến cuối.",
  "es": "Lo que controlamos de extremo a extremo.",
  "ar": "ما نتحكم فيه من البداية إلى النهاية."
 },
 "ap.procEyebrow": {
  "en": "How We Work",
  "zh": "工作方式",
  "vi": "Cách chúng tôi làm việc",
  "es": "Cómo trabajamos",
  "ar": "كيف نعمل"
 },
 "ap.procTitle": {
  "en": "From spec to shipment — four steps.",
  "zh": "从规格到出货——四步完成。",
  "vi": "Từ thông số đến giao hàng — bốn bước.",
  "es": "De la especificación al embarque — cuatro pasos.",
  "ar": "من المواصفة إلى الشحن — أربع خطوات."
 },
 "ap.certEyebrow": {
  "en": "Certifications",
  "zh": "认证资质",
  "vi": "Chứng nhận",
  "es": "Certificaciones",
  "ar": "الشهادات والاعتمادات"
 },
 "ap.certTitle": {
  "en": "Audited. Tested. Documented.",
  "zh": "审核·检测·文档齐备。",
  "vi": "Đã kiểm toán. Đã kiểm tra. Đầy đủ hồ sơ.",
  "es": "Auditados. Ensayados. Documentados.",
  "ar": "مُدقَّق. مُختبر. مُوثَّق."
 },
 "ap.partnersEyebrow": {
  "en": "Systems",
  "zh": "涂料体系",
  "vi": "Hệ sơn",
  "es": "Sistemas",
  "ar": "أنظمة الطلاء"
 },
 "ap.partnersTitle": {
  "en": "Chemistries we supply.",
  "zh": "我们供应的涂料化学体系。",
  "vi": "Các hệ hóa sơn chúng tôi cung ứng.",
  "es": "Químicas que suministramos.",
  "ar": "التركيبات الكيميائية التي نورّدها."
 },
 "ap.ctaTitle": {
  "en": "Ready to specify HONG NGUYEN on your next project?",
  "zh": "准备好在下一个项目中选用宏源了吗?",
  "vi": "Sẵn sàng chọn HONG NGUYEN cho dự án tiếp theo?",
  "es": "¿Listo para especificar HONG NGUYEN en su próximo proyecto?",
  "ar": "هل أنت مستعد لاعتماد HONG NGUYEN في مشروعك القادم؟"
 },
 "ap.ctaDesc": {
  "en": "Our coating engineers respond the same business day.",
  "zh": "我们的涂料工程师将在同一工作日内回复。",
  "vi": "Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc.",
  "es": "Nuestros ingenieros de recubrimientos responden el mismo día hábil.",
  "ar": "يرد مهندسو الطلاء لدينا في اليوم التجاري نفسه."
 },
 "np.eyebrow": {
  "en": "News & Blog",
  "zh": "新闻与博客",
  "vi": "Tin tức & Blog",
  "es": "Novedades y blog",
  "ar": "الأخبار والمدونة"
 },
 "np.titleAccent": {
  "en": "coatings floor.",
  "zh": "涂料车间。",
  "vi": "sản xuất sơn.",
  "es": "planta de recubrimientos.",
  "ar": "صالة الطلاءات."
 },
 "np.titlePre": {
  "en": "Field notes from the",
  "zh": "来自",
  "vi": "Ghi chép từ",
  "es": "Notas de campo desde la",
  "ar": "ملاحظات ميدانية من"
 },
 "np.desc": {
  "en": "Specification guides, export briefings and engineering notes for B2B coating buyers — written by our export and technical desk.",
  "zh": "面向 B2B 涂料采购方的选型指南、出口简报与工程笔记——出自我们的出口与技术部门。",
  "vi": "Cẩm nang chọn hệ, tin xuất khẩu và ghi chú kỹ thuật cho người mua sơn B2B — từ bộ phận xuất khẩu và kỹ thuật của chúng tôi.",
  "es": "Guías de especificación, informes de exportación y notas de ingeniería para compradores B2B de recubrimientos — escritas por nuestro equipo de exportación y técnico.",
  "ar": "أدلة المواصفات وإحاطات التصدير والملاحظات الهندسية لمشتري الطلاءات من قطاع B2B — بقلم فريق التصدير والمكتب الفني لدينا."
 },
 "np.featured": {
  "en": "FEATURED",
  "zh": "精选",
  "vi": "NỔI BẬT",
  "es": "DESTACADO",
  "ar": "مميز"
 },
 "np.stayEyebrow": {
  "en": "Stay informed",
  "zh": "保持关注",
  "vi": "Cập nhật thông tin",
  "es": "Manténgase informado",
  "ar": "ابقَ على اطلاع"
 },
 "np.stayTitle": {
  "en": "Get B2B coatings briefings, monthly.",
  "zh": "每月获取B2B涂料简报。",
  "vi": "Nhận tin vắn sơn B2B hàng tháng.",
  "es": "Reciba informes B2B de recubrimientos, cada mes.",
  "ar": "احصل على إحاطات الطلاءات لقطاع B2B شهرياً."
 },
 "np.stayDesc": {
  "en": "Product launches, certification updates and engineering notes — no spam.",
  "zh": "产品发布、认证更新与工程笔记——绝不发送垃圾邮件。",
  "vi": "Ra mắt sản phẩm, cập nhật chứng nhận và ghi chép kỹ thuật — không spam.",
  "es": "Lanzamientos de productos, novedades de certificación y notas de ingeniería — sin spam.",
  "ar": "إطلاقات المنتجات وتحديثات الشهادات والملاحظات الهندسية — بلا رسائل مزعجة."
 },
 "np.all": {
  "en": "All",
  "zh": "全部",
  "vi": "Tất cả",
  "es": "Todos",
  "ar": "الكل"
 },
 "cat.Product Launch": {
  "en": "Product Launch",
  "zh": "产品发布",
  "vi": "Ra mắt sản phẩm",
  "es": "Lanzamiento de producto",
  "ar": "إطلاق منتج"
 },
 "cat.Project": {
  "en": "Project",
  "zh": "项目",
  "vi": "Dự án",
  "es": "Proyecto",
  "ar": "مشروع"
 },
 "cat.Certification": {
  "en": "Certification",
  "zh": "认证",
  "vi": "Chứng nhận",
  "es": "Certificación",
  "ar": "شهادة"
 },
 "cat.Export": {
  "en": "Export",
  "zh": "出口",
  "vi": "Xuất khẩu",
  "es": "Exportación",
  "ar": "تصدير"
 },
 "cat.R&D": {
  "en": "R&D",
  "zh": "研发",
  "vi": "R&D",
  "es": "I+D",
  "ar": "البحث والتطوير"
 },
 "cat.Industry": {
  "en": "Industry",
  "zh": "行业",
  "vi": "Ngành",
  "es": "Industria",
  "ar": "قطاع صناعي"
 },
 "fp.eyebrow": {
  "en": "Frequently Asked Questions",
  "zh": "常见问题",
  "vi": "Câu hỏi thường gặp",
  "es": "Preguntas frecuentes",
  "ar": "الأسئلة الشائعة"
 },
 "fp.titleAccent": {
  "en": "B2B buyers.",
  "zh": "B2B采购方。",
  "vi": "khách hàng B2B.",
  "es": "compradores B2B.",
  "ar": "لمشتري B2B."
 },
 "fp.titlePre": {
  "en": "Answers for",
  "zh": "为",
  "vi": "Câu trả lời cho",
  "es": "Respuestas para",
  "ar": "إجابات"
 },
 "fp.desc": {
  "en": "Everything you need to know about MOQ, lead time, custom formulation, OEM/private-label, certifications and export — in one place.",
  "zh": "关于起订量、交期、定制配方、OEM/贴牌、认证与出口的全部信息——一站式了解。",
  "vi": "Mọi thông tin về MOQ, thời gian giao hàng, phối chế theo yêu cầu, OEM/nhãn riêng, chứng nhận và xuất khẩu — tất cả tại một nơi.",
  "es": "Todo lo que necesita saber sobre MOQ, plazo de entrega, formulación a medida, OEM/marca privada, certificaciones y exportación — en un solo lugar.",
  "ar": "كل ما تحتاج معرفته عن الحد الأدنى لكمية الطلب ومدة التوريد والتركيبات المخصصة وOEM/العلامة الخاصة والشهادات والتصدير — في مكان واحد."
 },
 "fp.searchPlaceholder": {
  "en": "Search questions…",
  "zh": "搜索问题…",
  "vi": "Tìm câu hỏi…",
  "es": "Buscar preguntas…",
  "ar": "ابحث في الأسئلة…"
 },
 "fp.sidebarTitle": {
  "en": "Can't find an answer?",
  "zh": "找不到答案?",
  "vi": "Không tìm thấy câu trả lời?",
  "es": "¿No encuentra respuesta?",
  "ar": "لم تجد إجابة؟"
 },
 "fp.sidebarDesc": {
  "en": "Our coating engineers respond the same business day. Tell us your substrate, environment and performance targets.",
  "zh": "我们的涂料工程师将在同一工作日内回复。告诉我们您的基材、环境及性能目标。",
  "vi": "Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc. Hãy cho chúng tôi biết bề mặt, môi trường và yêu cầu kỹ thuật.",
  "es": "Nuestros ingenieros de recubrimientos responden el mismo día hábil. Cuéntenos su sustrato, ambiente y objetivos de desempeño.",
  "ar": "يرد مهندسو الطلاء لدينا في اليوم التجاري نفسه. أخبرنا بركيزتك وبيئتك وأهدافك الأدائية."
 },
 "fp.quickFacts": {
  "en": "QUICK FACTS",
  "zh": "快速概览",
  "vi": "THÔNG TIN NHANH",
  "es": "DATOS CLAVE",
  "ar": "حقائق سريعة"
 },
 "fp.moq": {
  "en": "MOQ",
  "zh": "起订量",
  "vi": "MOQ",
  "es": "MOQ",
  "ar": "MOQ"
 },
 "fp.sampleLead": {
  "en": "Sample lead",
  "zh": "样品周期",
  "vi": "Thời gian giao mẫu",
  "es": "Plazo de muestra",
  "ar": "مدة إعداد العينة"
 },
 "fp.prodLead": {
  "en": "Production lead",
  "zh": "生产周期",
  "vi": "Thời gian sản xuất",
  "es": "Plazo de producción",
  "ar": "مدة الإنتاج"
 },
 "fp.warranty": {
  "en": "Warranty",
  "zh": "质保",
  "vi": "Bảo hành",
  "es": "Garantía",
  "ar": "الضمان"
 },
 "fp.exportCountries": {
  "en": "Export countries",
  "zh": "出口国家",
  "vi": "Quốc gia xuất khẩu",
  "es": "Países de exportación",
  "ar": "دول التصدير"
 },
 "fp.noResults": {
  "en": "No questions match",
  "zh": "没有匹配的问题",
  "vi": "Không có câu hỏi phù hợp",
  "es": "Ninguna pregunta coincide",
  "ar": "لا توجد أسئلة مطابقة"
 },
 "fp.tryOrAsk": {
  "en": ". Try another term or",
  "zh": "。请尝试其他关键词,或",
  "vi": ". Thử từ khóa khác hoặc",
  "es": ". Pruebe otro término o",
  "ar": ". جرّب مصطلحاً آخر أو"
 },
 "ctp.index": {
  "en": "[ 09 ]",
  "zh": "[ 09 ]",
  "vi": "[ 09 ]",
  "es": "[ 09 ]",
  "ar": "[ 09 ]"
 },
 "ctp.eyebrow": {
  "en": "Request Quote",
  "zh": "申请报价",
  "vi": "Yêu cầu báo giá",
  "es": "Solicitar cotización",
  "ar": "اطلب عرض سعر"
 },
 "ctp.title1": {
  "en": "Get a quote in 24 hours.",
  "zh": "24小时内报价。",
  "vi": "Báo giá trong 24 giờ.",
  "es": "Cotización en 24 horas.",
  "ar": "عرض سعر خلال 24 ساعة."
 },
 "ctp.title2": {
  "en": "Sample shipped in 48.",
  "zh": "48小时内寄样。",
  "vi": "Giao mẫu trong 48 giờ.",
  "es": "Muestra enviada en 48.",
  "ar": "وشحن العينة خلال 48."
 },
 "ctp.desc": {
  "en": "Tell us your project — substrate, environment, performance requirements. Our coating engineers respond same business day.",
  "zh": "告诉我们您的项目——基材、环境、性能要求。我们的涂料工程师将在同一工作日内回复。",
  "vi": "Hãy cho chúng tôi biết dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật. Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc.",
  "es": "Cuéntenos su proyecto — sustrato, ambiente, requisitos de desempeño. Nuestros ingenieros de recubrimientos responden el mismo día hábil.",
  "ar": "أخبرنا بمشروعك — الركيزة والبيئة ومتطلبات الأداء. يرد مهندسو الطلاء لدينا في اليوم التجاري نفسه."
 },
 "ctp.directEyebrow": {
  "en": "Direct Contact",
  "zh": "直接联系",
  "vi": "Liên hệ trực tiếp",
  "es": "Contacto directo",
  "ar": "اتصال مباشر"
 },
 "ctp.directTitle": {
  "en": "Talk to a coating engineer.",
  "zh": "与涂料工程师对话。",
  "vi": "Trò chuyện với kỹ sư sơn.",
  "es": "Hable con un ingeniero de recubrimientos.",
  "ar": "تحدث إلى مهندس طلاءات."
 },
 "ctp.directDesc": {
  "en": "Prefer to reach us directly? Use the channels below — we monitor them every business day.",
  "zh": "希望直接联系我们?通过以下渠道——我们每个工作日都关注。",
  "vi": "Muốn liên hệ trực tiếp? Sử dụng các kênh dưới đây — chúng tôi theo dõi mỗi ngày làm việc.",
  "es": "¿Prefiere contactarnos directamente? Use los canales siguientes — los revisamos todos los días hábiles.",
  "ar": "تفضل التواصل معنا مباشرة؟ استخدم القنوات أدناه — نراقبها كل يوم عمل."
 },
 "ctp.trustQuote": {
  "en": "Quote response",
  "zh": "报价响应",
  "vi": "Phản hồi báo giá",
  "es": "Respuesta de cotización",
  "ar": "الرد على طلب عرض السعر"
 },
 "ctp.trustSample": {
  "en": "Sample ships",
  "zh": "样品寄出",
  "vi": "Giao mẫu",
  "es": "Envío de muestra",
  "ar": "شحن العينة"
 },
 "ctp.trustWarranty": {
  "en": "Warranty",
  "zh": "质保",
  "vi": "Bảo hành",
  "es": "Garantía",
  "ar": "الضمان"
 },
 "ctp.successTitle": {
  "en": "Inquiry received",
  "zh": "询盘已收到",
  "vi": "Đã nhận yêu cầu",
  "es": "Consulta recibida",
  "ar": "تم استلام الاستفسار"
 },
 "ctp.successDesc": {
  "en": "Our coating engineers will respond within one business day. For urgent requests, message us on WhatsApp.",
  "zh": "我们的涂料工程师将在1个工作日内回复。如有紧急需求,请通过WhatsApp联系我们。",
  "vi": "Kỹ sư sơn sẽ phản hồi trong vòng 1 ngày làm việc. Yêu cầu khẩn xin nhắn qua WhatsApp.",
  "es": "Nuestros ingenieros de recubrimientos responderán en un día hábil. Para solicitudes urgentes, escríbanos por WhatsApp.",
  "ar": "سيرد مهندسو الطلاء لدينا خلال يوم عمل واحد. للطلبات العاجلة، راسلنا عبر WhatsApp."
 },
 "ctp.formPrivacy": {
  "en": "We respond within 1 business day. Your data is kept confidential.",
  "zh": "我们将在1个工作日内回复。您的信息将严格保密。",
  "vi": "Chúng tôi phản hồi trong 1 ngày làm việc. Thông tin của bạn được bảo mật.",
  "es": "Respondemos en un día hábil. Sus datos se mantienen confidenciales.",
  "ar": "نرد خلال يوم عمل واحد. وتُحفظ بياناتك بسرية تامة."
 },
 "ctp.globalEyebrow": {
  "en": "Global Export",
  "zh": "全球出口",
  "vi": "Xuất khẩu toàn cầu",
  "es": "Exportación global",
  "ar": "التصدير العالمي"
 },
 "ctp.globalTitle": {
  "en": "Shipping worldwide, six core regions.",
  "zh": "全球发货，六大核心区域。",
  "vi": "Gửi hàng toàn cầu, sáu khu vực trọng điểm.",
  "es": "Envíos a todo el mundo, seis regiones clave.",
  "ar": "شحن إلى جميع أنحاء العالم، ست مناطق أساسية."
 },
 "ctp.globalDesc": {
  "en": "Established logistics across six regions — and quotes to any destination port on request.",
  "zh": "六大区域拥有成熟物流渠道，并可按需报至任意目的港。",
  "vi": "Logistics sẵn có tại sáu khu vực — báo giá tới bất kỳ cảng đích nào theo yêu cầu.",
  "es": "Logística consolidada en seis regiones — y cotizaciones a cualquier puerto de destino a pedido.",
  "ar": "قنوات لوجستية راسخة عبر ست مناطق — وعروض أسعار إلى أي ميناء وجهة عند الطلب."
 },
 "form.fullName": {
  "en": "Full name",
  "zh": "姓名",
  "vi": "Họ tên",
  "es": "Nombre completo",
  "ar": "الاسم الكامل"
 },
 "form.company": {
  "en": "Company",
  "zh": "公司",
  "vi": "Công ty",
  "es": "Compañía",
  "ar": "الشركة"
 },
 "form.email": {
  "en": "Email",
  "zh": "邮箱",
  "vi": "Email",
  "es": "Correo electrónico",
  "ar": "البريد الإلكتروني"
 },
 "form.phone": {
  "en": "Phone / WhatsApp",
  "zh": "电话 / WhatsApp",
  "vi": "Điện thoại / WhatsApp",
  "es": "Teléfono / WhatsApp",
  "ar": "الهاتف / WhatsApp"
 },
 "form.country": {
  "en": "Country / region",
  "zh": "国家 / 地区",
  "vi": "Quốc gia / khu vực",
  "es": "País / región",
  "ar": "الدولة / المنطقة"
 },
 "form.product": {
  "en": "Product of interest",
  "zh": "意向产品",
  "vi": "Sản phẩm quan tâm",
  "es": "Producto de interés",
  "ar": "المنتج محل الاهتمام"
 },
 "form.productPlaceholder": {
  "en": "Select a system…",
  "zh": "选择系统…",
  "vi": "Chọn hệ sơn…",
  "es": "Seleccione un sistema…",
  "ar": "اختر نظاماً…"
 },
 "form.substrate": {
  "en": "Substrate",
  "zh": "基材",
  "vi": "Bề mặt",
  "es": "Sustrato",
  "ar": "الركيزة"
 },
 "form.environment": {
  "en": "Environment",
  "zh": "环境",
  "vi": "Môi trường",
  "es": "Ambiente",
  "ar": "البيئة"
 },
 "form.quantity": {
  "en": "Quantity (kg)",
  "zh": "数量 (kg)",
  "vi": "Số lượng (kg)",
  "es": "Cantidad (kg)",
  "ar": "الكمية (kg)"
 },
 "form.message": {
  "en": "Project details",
  "zh": "项目详情",
  "vi": "Chi tiết dự án",
  "es": "Detalles del proyecto",
  "ar": "تفاصيل المشروع"
 },
 "form.messagePlaceholder": {
  "en": "Describe your project — substrate, environment, performance requirements, timeline…",
  "zh": "请描述您的项目——基材、环境、性能要求、时间表……",
  "vi": "Mô tả dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật, thời gian…",
  "es": "Describa su proyecto — sustrato, ambiente, requisitos de desempeño, cronograma…",
  "ar": "صف مشروعك — الركيزة والبيئة ومتطلبات الأداء والجدول الزمني…"
 },
 "form.namePlaceholder": {
  "en": "Your name",
  "zh": "您的姓名",
  "vi": "Tên của bạn",
  "es": "Su nombre",
  "ar": "اسمك"
 },
 "form.companyPlaceholder": {
  "en": "Company / org",
  "zh": "公司 / 机构",
  "vi": "Công ty / tổ chức",
  "es": "Compañía / organización",
  "ar": "الشركة / الجهة"
 },
 "form.emailPlaceholder": {
  "en": "you@company.com",
  "zh": "you@company.com",
  "vi": "you@company.com",
  "es": "you@company.com",
  "ar": "you@company.com"
 },
 "form.phonePlaceholder": {
  "en": "+86 ...",
  "zh": "+86 ...",
  "vi": "+86 ...",
  "es": "+86 ...",
  "ar": "+86 ..."
 },
 "form.countryPlaceholder": {
  "en": "Vietnam",
  "zh": "越南",
  "vi": "Việt Nam",
  "es": "Vietnam",
  "ar": "فيتنام"
 },
 "form.substratePlaceholder": {
  "en": "Steel / concrete / …",
  "zh": "钢材 / 混凝土 / …",
  "vi": "Thép / bê tông / …",
  "es": "Acero / concreto / …",
  "ar": "فولاذ / خرسانة / …"
 },
 "form.environmentPlaceholder": {
  "en": "Marine / indoor / …",
  "zh": "海洋 / 室内 / …",
  "vi": "Biển / trong nhà / …",
  "es": "Marino / interior / …",
  "ar": "بحري / داخلي / …"
 },
 "form.quantityPlaceholder": {
  "en": "e.g. 2,000",
  "zh": "如 2,000",
  "vi": "vd. 2.000",
  "es": "p. ej. 2,000",
  "ar": "مثال: 2,000"
 },
 "form.other": {
  "en": "Other / not sure",
  "zh": "其他 / 不确定",
  "vi": "Khác / chưa rõ",
  "es": "Otro / no estoy seguro",
  "ar": "أخرى / غير متأكد"
 },
 "form.required": {
  "en": "*",
  "zh": "*",
  "vi": "*",
  "es": "*",
  "ar": "*"
 },
 "err.nameRequired": {
  "en": "Name is required.",
  "zh": "请填写姓名。",
  "vi": "Vui lòng nhập họ tên.",
  "es": "El nombre es obligatorio.",
  "ar": "الاسم مطلوب."
 },
 "err.emailRequired": {
  "en": "A valid email is required.",
  "zh": "请填写有效的邮箱地址。",
  "vi": "Vui lòng nhập email hợp lệ.",
  "es": "Se requiere un correo electrónico válido.",
  "ar": "يرجى إدخال بريد إلكتروني صالح."
 },
 "err.messageRequired": {
  "en": "Please describe your project.",
  "zh": "请描述您的项目。",
  "vi": "Vui lòng mô tả dự án.",
  "es": "Describa su proyecto.",
  "ar": "يرجى وصف مشروعك."
 },
 "err.generic": {
  "en": "Something went wrong. Please try again.",
  "zh": "出现错误,请重试。",
  "vi": "Đã xảy ra lỗi. Vui lòng thử lại.",
  "es": "Algo salió mal. Inténtelo de nuevo.",
  "ar": "حدث خطأ ما. حاول مرة أخرى."
 },
 "err.couldNotSend": {
  "en": "Could not send",
  "zh": "发送失败",
  "vi": "Không thể gửi",
  "es": "No se pudo enviar",
  "ar": "تعذر الإرسال"
 },
 "toast.inquiryTitle": {
  "en": "Inquiry received",
  "zh": "询盘已收到",
  "vi": "Đã nhận yêu cầu",
  "es": "Consulta recibida",
  "ar": "تم استلام الاستفسار"
 },
 "toast.inquiryDesc": {
  "en": "Thanks — our coating engineers will respond within one business day.",
  "zh": "感谢您——我们的涂料工程师将在1个工作日内回复。",
  "vi": "Cảm ơn bạn — kỹ sư sơn sẽ phản hồi trong vòng 1 ngày làm việc.",
  "es": "Gracias — nuestros ingenieros de recubrimientos responderán en un día hábil.",
  "ar": "شكراً — سيرد مهندسو الطلاء لدينا خلال يوم عمل واحد."
 },
 "misc.area": {
  "en": "Area",
  "zh": "面积",
  "vi": "Diện tích",
  "es": "Área",
  "ar": "المساحة"
 },
 "misc.system": {
  "en": "System",
  "zh": "系统",
  "vi": "Hệ thống",
  "es": "Sistema",
  "ar": "النظام"
 },
 "misc.duration": {
  "en": "Duration",
  "zh": "工期",
  "vi": "Thời gian",
  "es": "Duración",
  "ar": "المدة"
 },
 "misc.weatherability": {
  "en": "Weatherability",
  "zh": "耐候性",
  "vi": "Khả năng chịu thời tiết",
  "es": "Resistencia a la intemperie",
  "ar": "مقاومة العوامل الجوية"
 },
 "misc.base": {
  "en": "Base",
  "zh": "基料",
  "vi": "Nhựa nền",
  "es": "Base",
  "ar": "الأساس"
 },
 "misc.dft": {
  "en": "DFT",
  "zh": "干膜厚度",
  "vi": "DFT",
  "es": "DFT",
  "ar": "سماكة الغشاء الجاف (DFT)"
 },
 "misc.saltSpray": {
  "en": "Salt Spray",
  "zh": "盐雾",
  "vi": "Phun muối",
  "es": "Niebla salina",
  "ar": "الرذاذ الملحي"
 },
 "misc.packaging": {
  "en": "Packaging",
  "zh": "包装",
  "vi": "Đóng gói",
  "es": "Envase",
  "ar": "التعبئة"
 },
 "misc.tempRange": {
  "en": "Temp Range",
  "zh": "温度范围",
  "vi": "Nhiệt độ",
  "es": "Rango de temperatura",
  "ar": "مدى الحرارة"
 },
 "misc.cure": {
  "en": "Cure",
  "zh": "固化",
  "vi": "Khâu đông",
  "es": "Curado",
  "ar": "التصلد"
 },
 "misc.thickness": {
  "en": "Thickness",
  "zh": "厚度",
  "vi": "Độ dày",
  "es": "Espesor",
  "ar": "السماكة"
 },
 "misc.traffic": {
  "en": "Traffic",
  "zh": "承重",
  "vi": "Tải trọng",
  "es": "Tránsito",
  "ar": "تحمل المرور"
 },
 "misc.weatherabilityShort": {
  "en": "Weatherability",
  "zh": "耐候性",
  "vi": "Chịu thời tiết",
  "es": "Intemperie",
  "ar": "مقاومة العوامل الجوية"
 },
 "misc.gloss": {
  "en": "Gloss",
  "zh": "光泽",
  "vi": "Độ bóng",
  "es": "Brillo",
  "ar": "اللمعان"
 },
 "misc.type": {
  "en": "Type",
  "zh": "类型",
  "vi": "Loại",
  "es": "Tipo",
  "ar": "النوع"
 },
 "misc.fireRating": {
  "en": "Fire Rating",
  "zh": "防火等级",
  "vi": "Cấp cháy",
  "es": "Clasificación contra fuego",
  "ar": "تصنيف الحريق"
 },
 "misc.voc": {
  "en": "VOC",
  "zh": "VOC",
  "vi": "VOC",
  "es": "VOC",
  "ar": "VOC"
 },
 "misc.finish": {
  "en": "Finish",
  "zh": "饰面",
  "vi": "Bề mặt",
  "es": "Acabado",
  "ar": "التشطيب"
 },
 "misc.rd": {
  "en": "R&D",
  "zh": "研发",
  "vi": "R&D",
  "es": "I+D",
  "ar": "البحث والتطوير"
 },
 "misc.sample": {
  "en": "Sample",
  "zh": "样品",
  "vi": "Mẫu",
  "es": "Muestra",
  "ar": "عينة"
 },
 "misc.production": {
  "en": "Production",
  "zh": "生产",
  "vi": "Sản xuất",
  "es": "Producción",
  "ar": "الإنتاج"
 },
 "misc.moqShort": {
  "en": "MOQ",
  "zh": "起订量",
  "vi": "MOQ",
  "es": "MOQ",
  "ar": "MOQ"
 },
 "misc.coated": {
  "en": "m² coated in featured cases",
  "zh": "m² 精选案例涂装面积",
  "vi": "m² sơn trong các dự án tiêu biểu",
  "es": "m² recubiertos en casos destacados",
  "ar": "m² مطلية في الحالات المختارة"
 },
 "misc.defects": {
  "en": "coating-failure defects reported",
  "zh": "起涂层失效缺陷",
  "vi": "lỗi sơn được báo cáo",
  "es": "defectos por falla del recubrimiento reportados",
  "ar": "حالة عيوب فشل طلاء مبلَّغ عنها"
 },
 "misc.countriesServed": {
  "en": "countries served",
  "zh": "服务国家",
  "vi": "quốc gia phục vụ",
  "es": "países atendidos",
  "ar": "دولة نخدمها"
 },
 "misc.warrantyStd": {
  "en": "quality warranty standard",
  "zh": "标准质保期",
  "vi": "bảo hành tiêu chuẩn",
  "es": "garantía de calidad estándar",
  "ar": "شهراً من ضمان الجودة القياسي"
 },
 "admin.title": {
  "en": "Admin Console",
  "zh": "后台管理控制台",
  "vi": "Bảng quản trị"
 },
 "admin.eyebrow": {
  "en": "Inquiry Management",
  "zh": "询盘管理",
  "vi": "Quản lý yêu cầu"
 },
 "admin.backToSite": {
  "en": "Back to site",
  "zh": "返回网站",
  "vi": "Về trang web"
 },
 "admin.lockTitle": {
  "en": "Admin Access",
  "zh": "管理员访问",
  "vi": "Truy cập quản trị"
 },
 "admin.lockDesc": {
  "en": "Enter the admin passphrase to continue.",
  "zh": "请输入管理员口令以继续。",
  "vi": "Nhập mật khẩu quản trị để tiếp tục."
 },
 "admin.passphrase": {
  "en": "Passphrase",
  "zh": "口令",
  "vi": "Mật khẩu"
 },
 "admin.passphrasePlaceholder": {
  "en": "Enter passphrase…",
  "zh": "输入口令…",
  "vi": "Nhập mật khẩu…"
 },
 "admin.unlock": {
  "en": "Unlock",
  "zh": "解锁",
  "vi": "Mở khóa"
 },
 "admin.lockError": {
  "en": "Incorrect passphrase.",
  "zh": "口令不正确。",
  "vi": "Mật khẩu không đúng."
 },
 "admin.lockout": {
  "en": "Demo passphrase",
  "zh": "演示口令",
  "vi": "Mật khẩu demo"
 },
 "admin.statTotal": {
  "en": "Total inquiries",
  "zh": "询盘总数",
  "vi": "Tổng yêu cầu"
 },
 "admin.statNew": {
  "en": "New",
  "zh": "新询盘",
  "vi": "Mới"
 },
 "admin.statContacted": {
  "en": "Contacted",
  "zh": "已联系",
  "vi": "Đã liên hệ"
 },
 "admin.statClosed": {
  "en": "Closed",
  "zh": "已关闭",
  "vi": "Đã đóng"
 },
 "admin.searchPlaceholder": {
  "en": "Search name / company / email / message…",
  "zh": "搜索姓名/公司/邮箱/留言…",
  "vi": "Tìm tên / công ty / email / lời nhắn…"
 },
 "admin.filterAll": {
  "en": "All",
  "zh": "全部",
  "vi": "Tất cả"
 },
 "admin.colInquiry": {
  "en": "Inquiry",
  "zh": "询盘",
  "vi": "Yêu cầu"
 },
 "admin.colContact": {
  "en": "Contact",
  "zh": "联系方式",
  "vi": "Liên hệ"
 },
 "admin.colProduct": {
  "en": "Product",
  "zh": "产品",
  "vi": "Sản phẩm"
 },
 "admin.colStatus": {
  "en": "Status",
  "vi": "Trạng thái",
  "zh": "状态"
 },
 "admin.colDate": {
  "en": "Received",
  "zh": "收到时间",
  "vi": "Nhận"
 },
 "admin.colActions": {
  "en": "Actions",
  "zh": "操作",
  "vi": "Thao tác"
 },
 "admin.view": {
  "en": "View",
  "zh": "查看",
  "vi": "Xem"
 },
 "admin.markContacted": {
  "en": "Mark contacted",
  "zh": "标记已联系",
  "vi": "Đánh dấu đã liên hệ"
 },
 "admin.markClosed": {
  "en": "Mark closed",
  "zh": "标记已关闭",
  "vi": "Đánh dấu đã đóng"
 },
 "admin.reopen": {
  "en": "Reopen as new",
  "zh": "重新标记为新",
  "vi": "Mở lại thành mới"
 },
 "admin.delete": {
  "en": "Delete",
  "zh": "删除",
  "vi": "Xóa"
 },
 "admin.deleteConfirm": {
  "en": "Delete this inquiry permanently?",
  "zh": "永久删除这条询盘?",
  "vi": "Xóa vĩnh viễn yêu cầu này?"
 },
 "admin.detail": {
  "en": "Inquiry detail",
  "zh": "询盘详情",
  "vi": "Chi tiết yêu cầu"
 },
 "admin.noResults": {
  "en": "No inquiries match this filter.",
  "zh": "没有匹配的询盘。",
  "vi": "Không có yêu cầu phù hợp."
 },
 "admin.empty": {
  "en": "No inquiries yet. Submit the contact form to see one here.",
  "zh": "暂无询盘。提交联系表单后将会显示在这里。",
  "vi": "Chưa có yêu cầu. Gửi biểu mẫu liên hệ để xem tại đây."
 },
 "admin.loading": {
  "en": "Loading…",
  "zh": "加载中…",
  "vi": "Đang tải…"
 },
 "admin.refresh": {
  "en": "Refresh",
  "zh": "刷新",
  "vi": "Làm mới"
 },
 "admin.logout": {
  "en": "Log out",
  "zh": "退出",
  "vi": "Đăng xuất"
 },
 "admin.note": {
  "en": "Demo-level security. For production, add NextAuth + server-side sessions.",
  "zh": "演示级安全防护。生产环境请接入 NextAuth + 服务端会话。",
  "vi": "Bảo mật mức demo. Môi trường production hãy dùng NextAuth + phiên máy chủ."
 },
 "admin.fieldMessage": {
  "en": "Message",
  "zh": "留言",
  "vi": "Lời nhắn"
 },
 "admin.fieldSubstrate": {
  "en": "Substrate",
  "zh": "基材",
  "vi": "Bề mặt"
 },
 "admin.fieldEnvironment": {
  "en": "Environment",
  "zh": "环境",
  "vi": "Môi trường"
 },
 "admin.fieldQuantity": {
  "en": "Quantity",
  "zh": "数量",
  "vi": "Số lượng"
 },
 "admin.export": {
  "en": "Export CSV",
  "zh": "导出 CSV",
  "vi": "Xuất CSV"
 },
 "admin.lastUpdated": {
  "en": "Last updated",
  "zh": "最后更新",
  "vi": "Cập nhật lần cuối"
 },
 "topbar.based": {
  "en": "FOSHAN · GUANGDONG · CHINA",
  "zh": "广东 · 佛山 · 中国",
  "vi": "PHẬT SƠN · QUẢNG ĐÔNG · TRUNG QUỐC",
  "es": "FOSHAN · GUANGDONG · CHINA",
  "ar": "فوشان · قوانغدونغ · الصين"
 },
 "np.backToNews": {
  "en": "All articles",
  "zh": "返回文章列表",
  "vi": "Tất cả bài viết",
  "es": "Todos los artículos",
  "ar": "كل المقالات"
 },
 "np.articleCtaTitle": {
  "en": "Specifying a project?",
  "zh": "正在为项目选型？",
  "vi": "Đang chọn hệ cho dự án?",
  "es": "¿Especificando un proyecto?",
  "ar": "بصدد تحديد مواصفات مشروع؟"
 },
 "np.articleCtaDesc": {
  "en": "Send us the substrate, environment and target spec — we reply with a matched system within one business day.",
  "zh": "把基材、环境与目标规格发给我们，一个工作日内回复配套方案。",
  "vi": "Gửi bề mặt, môi trường và thông số mục tiêu — chúng tôi phản hồi hệ phù hợp trong một ngày làm việc.",
  "es": "Envíenos el sustrato, el ambiente y la especificación objetivo — respondemos con un sistema compatible en un día hábil.",
  "ar": "أرسل لنا الركيزة والبيئة والمواصفة المستهدفة — نرد بنظام مطابق خلال يوم عمل واحد."
 },
 "inq.copyInquiry": {
  "en": "Copy inquiry details",
  "zh": "复制询盘内容",
  "vi": "Sao chép nội dung yêu cầu",
  "es": "Copiar detalles de la consulta",
  "ar": "نسخ تفاصيل الاستفسار"
 },
 "inq.copied": {
  "en": "Copied to clipboard",
  "zh": "已复制到剪贴板",
  "vi": "Đã sao chép vào clipboard",
  "es": "Copiado al portapapeles",
  "ar": "تم النسخ إلى الحافظة"
 },
 "inq.sendEmail": {
  "en": "Send via Email",
  "zh": "通过邮件发送",
  "vi": "Gửi qua Email",
  "es": "Enviar por correo",
  "ar": "إرسال عبر البريد"
 },
 "inq.waHint": {
  "en": "WhatsApp should have opened with your inquiry prefilled. If it didn't, use the buttons below.",
  "zh": "WhatsApp 应已自动打开并填入您的询盘内容。若没有，请使用下方按钮。",
  "vi": "WhatsApp lẽ ra đã mở với nội dung yêu cầu của bạn. Nếu không, hãy dùng các nút bên dưới.",
  "es": "WhatsApp debería haberse abierto con su consulta rellenada. Si no, use los botones de abajo.",
  "ar": "من المفترض أن يكون واتساب قد فتح مع تعبئة استفسارك. إذا لم يحدث ذلك، استخدم الأزرار أدناه."
 },
 "err.waBlocked": {
  "en": "Could not open WhatsApp automatically. Please use the buttons below.",
  "zh": "无法自动打开 WhatsApp。请使用下方按钮。",
  "vi": "Không thể mở WhatsApp tự động. Vui lòng dùng các nút bên dưới.",
  "es": "No se pudo abrir WhatsApp automáticamente. Use los botones de abajo.",
  "ar": "تعذر فتح واتساب تلقائياً. يرجى استخدام الأزرار أدناه."
 },
 "wechat.copied": {
  "en": "WeChat ID copied: hogo13",
  "zh": "微信号已复制：hogo13",
  "vi": "Đã sao chép WeChat: hogo13",
  "es": "ID de WeChat copiado: hogo13",
  "ar": "تم نسخ معرف WeChat: hogo13"
 }
};

// ---- Hook -----------------------------------------------------------------

export function useT() {
  const locale = useLang((s) => s.locale);
  const setLocale = useLang((s) => s.setLocale);

  const t = React.useCallback(
    (key: string) => {
      const entry = ui[key];
      if (!entry) return key;
      return entry[locale] ?? entry.en ?? Object.values(entry)[0] ?? key;
    },
    [locale]
  );

  const loc = React.useCallback(
    (v: LStr | string | undefined) => pick(v, locale),
    [locale]
  );

  return { locale, setLocale, t, loc };
}
