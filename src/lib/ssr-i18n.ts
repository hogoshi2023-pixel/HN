// ssr-i18n.ts — 静态导出的多路由页面（服务端渲染）用的取值与文案工具。
// 与客户端 i18n.ts（zustand）互不影响；类型从 i18n 仅作 type-only 导入。
import type { LStr, Locale } from "./i18n";

export const SITE = "https://hogoshi2023-pixel.github.io/HN";
export const LOCALE_LIST: Locale[] = ["en", "zh", "vi", "es", "ar"];

export function P(v: LStr | string | undefined, locale: Locale): string {
  if (!v) return "";
  if (typeof v === "string") return v;
  return v[locale] ?? v.en;
}

/** 静态页自身所需少量界面文案（五语）。 */
export const S: Record<string, Record<Locale, string>> = {
  suffix: {
    en: " | HONG NGUYEN Industrial Coatings",
    zh: " | 宏源工业涂料",
    vi: " | HONG NGUYEN sơn công nghiệp",
    es: " | HONG NGUYEN Recubrimientos Industriales",
    ar: " | HONG NGUYEN للطلاءات الصناعية",
  },
  tagline: {
    en: "Industrial Coatings Export · Foshan, China",
    zh: "工业涂料出口 · 广东佛山",
    vi: "Xuất khẩu sơn công nghiệp · Phật Sơn, Trung Quốc",
    es: "Exportación de recubrimientos industriales · Foshan, China",
    ar: "تصدير الطلاءات الصناعية · فوشان، الصين",
  },
  home: { en: "Home", zh: "首页", vi: "Trang chủ", es: "Inicio", ar: "الرئيسية" },
  products: { en: "Products", zh: "产品", vi: "Sản phẩm", es: "Productos", ar: "المنتجات" },
  certs: { en: "Certifications", zh: "认证资质", vi: "Chứng nhận", es: "Certificaciones", ar: "الشهادات" },
  techData: { en: "TECHNICAL DATA", zh: "技术数据", vi: "DỮ LIỆU KỸ THUẬT", es: "DATOS TÉCNICOS", ar: "البيانات التقنية" },
  downloadTds: {
    en: "Download TDS (PDF)",
    zh: "下载 TDS (PDF)",
    vi: "Tải TDS (PDF)",
    es: "Descargar TDS (PDF)",
    ar: "تحميل TDS (PDF)",
  },
  paramsOnRequest: {
    en: "Full technical parameters available on request.",
    zh: "详细技术参数备索。",
    vi: "Thông số kỹ thuật đầy đủ theo yêu cầu.",
    es: "Parámetros técnicos completos a solicitud.",
    ar: "المعايير التقنية الكاملة متاحة عند الطلب.",
  },
  backSite: {
    en: "Full site (5 languages)",
    zh: "完整网站（五语）",
    vi: "Trang web đầy đủ",
    es: "Sitio completo",
    ar: "الموقع الكامل",
  },
  systemTitle: {
    en: "Recommended system",
    zh: "建议配套体系",
    vi: "Hệ thống khuyến nghị",
    es: "Sistema recomendado",
    ar: "النظام الموصى به",
  },
  certsIntro: {
    en: "Every shipment backed by internationally recognized certifications. Pre-shipment samples can be tested at SGS, BV, or Intertek on request.",
    zh: "每批出货均附带国际认可认证。可按要求在SGS、BV或Intertek进行装运前抽样检测。",
    vi: "Mỗi lô hàng đều có chứng nhận quốc tế. Có thể kiểm tra mẫu trước khi giao tại SGS, BV hoặc Intertek theo yêu cầu.",
    es: "Cada embarque está respaldado por certificaciones reconocidas internacionalmente. A pedido, las muestras previas al embarque pueden ensayarse en SGS, BV o Intertek.",
    ar: "كل شحنة مدعومة بشهادات معترف بها دولياً، ويمكن عند الطلب اختبار عينات ما قبل الشحن في SGS أو BV أو Intertek.",
  },
  contact: { en: "Inquiries:", zh: "询盘：", vi: "Liên hệ:", es: "Consultas:", ar: "للاستفسارات:" },
  // Static language homepage ([locale]/page.tsx)
  heroTitle: {
    en: "Engineering Coatings for Heavy-Duty Industries",
    zh: "为重工业提供工程涂料体系",
    vi: "Hệ sơn kỹ thuật cho công nghiệp nặng",
    es: "Recubrimientos de ingeniería para industrias de servicio pesado",
    ar: "طلاءات هندسية للصناعات الثقيلة",
  },
  heroDesc: {
    en: "Chinese exporter of anti-corrosion, high-temperature, epoxy floor and architectural coating systems — sourced from ISO 9001 certified plants in China's coatings hub. OEM/ODM · RAL/Pantone colour matching · full export documentation · 24-month quality warranty.",
    zh: "防腐、耐高温、环氧地坪及建筑涂料体系出口商——货源来自中国涂料之都的 ISO 9001 认证工厂。OEM/ODM · RAL/Pantone 调色 · 全套出口单证 · 24 个月质保。",
    vi: "Nhà xuất khẩu hệ sơn chống ăn mòn, chịu nhiệt, nền epoxy và sơn kiến trúc — từ các nhà máy ISO 9001 tại thủ phủ công nghiệp sơn Trung Quốc. OEM/ODM · pha màu RAL/Pantone · chứng từ xuất khẩu đầy đủ · bảo hành 24 tháng.",
    es: "Exportador chino de sistemas de recubrimiento anticorrosivo, alta temperatura, epoxi para pisos y arquitectónicos — de plantas certificadas ISO 9001 en el hub chino de pinturas. OEM/ODM · igualación RAL/Pantone · documentación completa · garantía de 24 meses.",
    ar: "مصدّر صيني لأنظمة الطلاء المضادة للتآكل ومقاومة الحرارة العالية وأرضيات الإيبوكسي والطلاءات المعمارية — من مصانع معتمدة ISO 9001 في مركز الطلاءات الصيني. OEM/ODM · مطابقة ألوان RAL/Pantone · مستندات تصدير كاملة · ضمان 24 شهراً.",
  },
  getQuote: {
    en: "Get a free quote",
    zh: "免费获取报价",
    vi: "Nhận báo giá miễn phí",
    es: "Solicite cotización gratuita",
    ar: "احصل على عرض سعر مجاني",
  },
  viewProducts: {
    en: "Browse products",
    zh: "浏览产品目录",
    vi: "Xem danh mục sản phẩm",
    es: "Ver catálogo de productos",
    ar: "استعرض كتالوج المنتجات",
  },
  specTitle: {
    en: "Spec sheet · REV.2026",
    zh: "规格总表 · REV.2026",
    vi: "Bảng thông số · REV.2026",
    es: "Ficha técnica · REV.2026",
    ar: "ورقة المواصفات · REV.2026",
  },
  categoriesTitle: {
    en: "Coating systems we supply",
    zh: "我们供应的涂料体系",
    vi: "Hệ sơn chúng tôi cung cấp",
    es: "Sistemas de recubrimiento que suministramos",
    ar: "أنظمة الطلاء التي نوفرها",
  },
  modelsCount: {
    en: "models",
    zh: "个型号",
    vi: "model",
    es: "modelos",
    ar: "طراز",
  },
  viewModels: {
    en: "View models →",
    zh: "查看型号 →",
    vi: "Xem các model →",
    es: "Ver modelos →",
    ar: "استعرض الطرازات →",
  },
  // Product static page inquiry CTA
  inquireThis: {
    en: "Inquire about this model",
    zh: "询盘此型号",
    vi: "Hỏi giá model này",
    es: "Consultar por este modelo",
    ar: "استفسار عن هذا الطراز",
  },
  waThis: {
    en: "WhatsApp this model",
    zh: "WhatsApp 询盘",
    vi: "Hỏi qua WhatsApp",
    es: "Consultar por WhatsApp",
    ar: "استفسار عبر واتساب",
  },
};

export const LANG_NATIVE: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  vi: "Tiếng Việt",
  es: "Español",
  ar: "العربية",
};
