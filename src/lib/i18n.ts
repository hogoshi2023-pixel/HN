"use client";

import * as React from "react";
import { create } from "zustand";
import { UI_ES, UI_AR } from "./ui-locales";
import { CL_ES, CL_AR } from "./component-locales";

export type Locale = "en" | "zh" | "vi" | "es" | "ar";

/** A localized string. es/ar are optional — pick() falls back to English. */
export type LStr = { en: string; zh: string; vi: string; es?: string; ar?: string };

const STORAGE_KEY = "hn-lang";

// ---- Locale store ---------------------------------------------------------

type LangState = {
  locale: Locale;
  hydrated: boolean;
  setLocale: (l: Locale) => void;
  hydrate: () => void;
};

export const useLang = create<LangState>((set, get) => ({
  locale: "en",
  hydrated: false,
  setLocale: (locale) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, locale);
      document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    }
    set({ locale });
  },
  hydrate: () => {
    if (get().hydrated) return;
    if (typeof window === "undefined") return;
    // ?lang= overrides the saved locale — the static SEO landing pages
    // deep-link the SPA in the visitor's language (e.g. /HN/?lang=es#/contact).
    const qp = new URLSearchParams(window.location.search).get("lang");
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const cand = qp && ["en", "zh", "vi", "es", "ar"].includes(qp) ? qp : saved;
    const locale: Locale =
      cand === "zh" || cand === "vi" || cand === "en" || cand === "es" || cand === "ar"
        ? cand
        : "en";
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    set({ locale, hydrated: true });
  },
}));

// ---- Helpers --------------------------------------------------------------

/** Pick the right string for the locale. Accepts LStr or plain string. */
export function pick(v: LStr | string | undefined, locale: Locale): string {
  if (!v) return "";
  if (typeof v === "string") return v;
  if (locale === "es") return v.es ?? CL_ES[v.en] ?? v.en;
  if (locale === "ar") return v.ar ?? CL_AR[v.en] ?? v.en;
  return v[locale] ?? v.en;
}

// ---- UI string dictionary -------------------------------------------------

export const ui: Record<string, LStr> = {
  // Brand / tagline
  "brand.tagline": { en: "Industrial Coatings Export · Foshan, China", zh: "工业涂料出口 · 广东佛山", vi: "Xuất khẩu sơn công nghiệp · Phật Sơn, Trung Quốc" },
  "brand.premiumDesc": {
    en: "Chinese exporter of industrial coating systems — anti-corrosion, high-temperature, epoxy floor and architectural paints — sourced from ISO 9001 certified plants, with OEM/ODM service, RAL/Pantone colour matching and full export documentation.",
    zh: "工业涂料体系出口商——防腐、耐高温、环氧地坪及建筑涂料，货源来自 ISO 9001 认证工厂，提供 OEM/ODM、RAL/Pantone 调色及全套出口单证。",
    vi: "Nhà xuất khẩu hệ sơn công nghiệp Trung Quốc — chống ăn mòn, chịu nhiệt, nền epoxy và sơn kiến trúc — từ nhà máy ISO 9001, kèm OEM/ODM, pha màu RAL/Pantone và chứng từ xuất khẩu đầy đủ.",
  },

  // Inquiry hand-off (contact form success screen)
  "inq.sendEmail": {
    en: "Open in email app",
    zh: "在邮件应用中打开",
    vi: "Mở trong ứng dụng email",
    es: "Abrir en la app de correo",
    ar: "افتح في تطبيق البريد",
  },
  "inq.copyInquiry": {
    en: "Copy inquiry text",
    zh: "复制询盘内容",
    vi: "Sao chép nội dung",
    es: "Copiar texto de la consulta",
    ar: "نسخ نص الاستفسار",
  },
  "inq.copied": {
    en: "Inquiry copied — paste it into WhatsApp or your email app",
    zh: "已复制——可粘贴到 WhatsApp 或邮箱发送",
    vi: "Đã sao chép — dán vào WhatsApp hoặc email",
    es: "Consulta copiada — péguela en WhatsApp o en su correo",
    ar: "تم نسخ الاستفسار — الصقه في واتساب أو تطبيق البريد",
  },
  "inq.waHint": {
    en: "If your email app did not open, send the same inquiry via WhatsApp — or copy the text and paste it anywhere.",
    zh: "如果邮件客户端没有弹出，可改用 WhatsApp 发送同样的询盘——或复制内容后自行粘贴。",
    vi: "Nếu ứng dụng email không mở, hãy gửi qua WhatsApp — hoặc sao chép nội dung và dán ở bất kỳ đâu.",
    es: "Si su aplicación de correo no se abrió, envíe la misma consulta por WhatsApp — o copie el texto y péguelo donde quiera.",
    ar: "إذا لم يفتح تطبيق البريد، أرسل الاستفسار نفسه عبر واتساب — أو انسخ النص والصقه في أي مكان.",
  },

  // Top utility bar
  "topbar.based": { en: "FOSHAN · GUANGDONG · CHINA", zh: "广东 · 佛山 · 中国", vi: "PHẬT SƠN · QUẢNG ĐÔNG · TRUNG QUỐC" },
  "topbar.phone": { en: "Phone", zh: "电话", vi: "Điện thoại" },
  "topbar.email": { en: "Email", zh: "邮箱", vi: "Email" },

  // Nav
  "nav.home": { en: "Home", zh: "首页", vi: "Trang chủ" },
  "nav.products": { en: "Products", zh: "产品", vi: "Sản phẩm" },
  "nav.solutions": { en: "Solutions", zh: "解决方案", vi: "Giải pháp" },
  "nav.cases": { en: "Systems", zh: "应用体系", vi: "Hệ thống" },
  "nav.about": { en: "About", zh: "关于我们", vi: "Giới thiệu" },
  "nav.news": { en: "News", zh: "新闻", vi: "Tin tức" },
  "nav.faq": { en: "FAQ", zh: "常见问题", vi: "Câu hỏi" },
  "nav.contact": { en: "Contact", zh: "联系", vi: "Liên hệ" },

  // CTA buttons
  "cta.getQuote": { en: "Get A Free Quote", zh: "免费获取报价", vi: "Nhận báo giá miễn phí" },
  "cta.browseCatalog": { en: "Browse Catalog", zh: "浏览产品目录", vi: "Xem catalog" },
  "cta.viewAllCatalog": { en: "View All Catalog", zh: "查看全部目录", vi: "Toàn bộ catalog" },
  "cta.viewAllCases": { en: "View All Systems", zh: "查看全部体系", vi: "Xem tất cả hệ thống" },
  "cta.viewFullCatalog": { en: "View Full Catalog", zh: "查看完整目录", vi: "Xem catalog đầy đủ" },
  "cta.requestQuote": { en: "Request Quote", zh: "申请报价", vi: "Yêu cầu báo giá" },
  "cta.getTds": { en: "Get TDS / MSDS", zh: "获取TDS/MSDS", vi: "Nhận TDS / MSDS" },
  "cta.requestFreeQuote": { en: "Request Free Quote", zh: "免费申请报价", vi: "Yêu cầu báo giá miễn phí" },
  "cta.whatsappChat": { en: "WhatsApp Chat", zh: "WhatsApp 在线咨询", vi: "Trò chuyện WhatsApp" },
  "cta.startProject": { en: "Start Your Project", zh: "启动您的项目", vi: "Bắt đầu dự án" },
  "cta.askEngineer": { en: "Ask an Engineer", zh: "咨询工程师", vi: "Hỏi kỹ sư" },
  "cta.readArticle": { en: "Read article", zh: "阅读文章", vi: "Đọc bài viết" },
  "cta.subscribe": { en: "Subscribe", zh: "订阅", vi: "Đăng ký" },
  "cta.sendInquiry": { en: "Send Inquiry", zh: "发送询盘", vi: "Gửi yêu cầu" },
  "cta.sending": { en: "Sending…", zh: "发送中…", vi: "Đang gửi…" },
  "cta.sendAnother": { en: "Send another inquiry", zh: "再发送一条询盘", vi: "Gửi yêu cầu khác" },
  "cta.relatedProducts": { en: "Related Products", zh: "相关产品", vi: "Sản phẩm liên quan" },
  "cta.requestSimilar": { en: "Request This System", zh: "申请此体系", vi: "Yêu cầu hệ thống này" },
  "cta.explore": { en: "Explore system", zh: "了解系统", vi: "Khám phá hệ thống" },
  "cta.talkToEngineer": { en: "Talk to an engineer", zh: "与工程师交谈", vi: "Trò chuyện với kỹ sư" },
  "cta.partnerWithUs": { en: "Partner with us", zh: "与我们合作", vi: "Hợp tác cùng chúng tôi" },

  // Home — hero
  "hero.index": { en: "[ 01 ]", zh: "[ 01 ]", vi: "[ 01 ]" },
  "hero.eyebrow": { en: "Industrial Coatings · Export from China", zh: "工业涂料 · 中国出口", vi: "Sơn công nghiệp · Xuất khẩu từ Trung Quốc" },
  "hero.title1": { en: "Engineered Coatings", zh: "工程化涂料", vi: "Sơn kỹ thuật" },
  "hero.title2": { en: "for", zh: "用于", vi: "cho công nghiệp" },
  "hero.titleAccent": { en: "Heavy-Duty", zh: "重型", vi: "hạng nặng" },
  "hero.title3": { en: "Industries", zh: "工业", vi: "" },
  "hero.desc": {
    en: "Chinese exporter of anti-corrosion, high-temperature, epoxy floor and architectural coating systems — sourced from ISO 9001 certified plants in China's coatings hub. Full export documentation · OEM/ODM · RAL/Pantone colour matching · 24-month quality warranty.",
    zh: "防腐、耐高温、环氧地坪及建筑涂料体系出口商——货源来自中国涂料之乡的 ISO 9001 认证工厂。全套出口单证 · OEM/ODM · RAL/Pantone 调色 · 24 个月质保。",
    vi: "Xuất khẩu hệ sơn chống ăn mòn, chịu nhiệt, nền epoxy và sơn kiến trúc — từ nhà máy ISO 9001 tại thủ phủ sơn Trung Quốc. Chứng từ xuất khẩu đầy đủ · OEM/ODM · pha màu RAL/Pantone · bảo hành 24 tháng.",
  },
  "hero.specSheet": { en: "SPEC SHEET · REV.2026", zh: "技术规格 · 2026版", vi: "BẢNG THÔNG SỐ · REV.2026" },
  "hero.live": { en: "LIVE", zh: "实时", vi: "TRỰC TIẾP" },

  // Partners
  "partners.trustedBy": { en: "Coating systems we supply", zh: "我们供应的涂料体系", vi: "Các hệ sơn chúng tôi cung ứng" },

  // Core business
  "core.index": { en: "[ 02 ]", zh: "[ 02 ]", vi: "[ 02 ]" },
  "core.eyebrow": { en: "Core Business", zh: "核心业务", vi: "Kinh doanh cốt lõi" },
  "core.title": { en: "Industrial Coatings. Engineered for B2B.", zh: "工业涂料，专为B2B而造。", vi: "Sơn công nghiệp. Thiết kế cho B2B." },

  // Product categories
  "pcat.index": { en: "[ 03 ]", zh: "[ 03 ]", vi: "[ 03 ]" },
  "pcat.eyebrow": { en: "Product Categories", zh: "产品分类", vi: "Danh mục sản phẩm" },
  "pcat.title": { en: "Six Coating Systems. One Trusted Source.", zh: "六大涂料体系,一个可信之选。", vi: "Sáu hệ sơn. Một nguồn đáng tin cậy." },

  // Why us
  "why.index": { en: "[ 04 ]", zh: "[ 04 ]", vi: "[ 04 ]" },
  "why.eyebrow": { en: "Why HONG NGUYEN", zh: "为何选择宏源", vi: "Vì sao chọn HONG NGUYEN" },
  "why.title": { en: "Built for B2B buyers who can't afford coating failure.", zh: "为不容许涂层失效的B2B采购方而生。", vi: "Dành cho khách hàng B2B không thể chấp nhận lỗi sơn." },

  // Applications
  "app.index": { en: "[ 05 ]", zh: "[ 05 ]", vi: "[ 05 ]" },
  "app.eyebrow": { en: "Applications", zh: "应用领域", vi: "Ứng dụng" },
  "app.title": { en: "Where HONG NGUYEN coatings work.", zh: "宏源涂料的应用场景。", vi: "Nơi sơn HONG NGUYEN phát huy tác dụng." },

  // Cases / application systems
  "cases.index": { en: "[ 06 ]", zh: "[ 06 ]", vi: "[ 06 ]" },
  "cases.eyebrow": { en: "Application Systems", zh: "应用体系", vi: "Hệ thống ứng dụng" },
  "cases.title": { en: "Typical systems, specified per project.", zh: "典型配套体系，按项目选型。", vi: "Hệ thống điển hình, chọn theo dự án." },

  // Certifications
  "cert.index": { en: "[ 07 ]", zh: "[ 07 ]", vi: "[ 07 ]" },
  "cert.eyebrow": { en: "Certifications", zh: "认证资质", vi: "Chứng nhận" },
  "cert.title": { en: "Audited. Tested. Documented.", zh: "审核·检测·文档齐备。", vi: "Đã kiểm toán. Đã kiểm tra. Đầy đủ hồ sơ." },
  "cert.desc": {
    en: "Every shipment backed by internationally recognized certifications. Pre-shipment samples can be tested at SGS, BV, or Intertek on request.",
    zh: "每批出货均附带国际认可认证。可按要求在SGS、BV或Intertek进行装运前抽样检测。",
    vi: "Mỗi lô hàng đều có chứng nhận quốc tế. Có thể kiểm tra mẫu trước khi giao tại SGS, BV hoặc Intertek theo yêu cầu.",
  },

  // Testimonials section removed (fabricated quotes) — keys deleted.

  // Request quote (footer CTA)
  "rq.index": { en: "[ 09 ]", zh: "[ 09 ]", vi: "[ 09 ]" },
  "rq.eyebrow": { en: "Request Quote", zh: "申请报价", vi: "Yêu cầu báo giá" },
  "rq.title": { en: "Get a quote in 24 hours. Sample shipped in 48.", zh: "24小时内报价,48小时内寄样。", vi: "Báo giá trong 24 giờ. Giao mẫu trong 48 giờ." },
  "rq.desc": {
    en: "Tell us your project — substrate, environment, performance requirements. Our coating engineers respond same business day.",
    zh: "告诉我们您的项目——基材、环境、性能要求。我们的涂料工程师将在同一工作日内回复。",
    vi: "Hãy cho chúng tôi biết dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật. Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc.",
  },

  // Footer
  "footer.products": { en: "Products", zh: "产品", vi: "Sản phẩm" },
  "footer.company": { en: "Company", zh: "公司", vi: "Công ty" },
  "footer.exportRegions": { en: "Export Regions", zh: "出口地区", vi: "Khu vực xuất khẩu" },
  "footer.rights": { en: "All rights reserved.", zh: "保留所有权利。", vi: "Đã đăng ký bản quyền." },
  "footer.headquarters": { en: "HEADQUARTERS", zh: "总部", vi: "TRỤ SỞ" },
  "footer.contact.phone": { en: "Phone", zh: "电话", vi: "Điện thoại" },
  "footer.contact.email": { en: "Email", zh: "邮箱", vi: "Email" },
  "footer.contact.whatsapp": { en: "WhatsApp / WeChat", zh: "WhatsApp / 微信", vi: "WhatsApp / WeChat" },
  "footer.contact.address": { en: "Address", zh: "地址", vi: "Địa chỉ" },

  // Products page
  "pp.index": { en: "[ 03 ]", zh: "[ 03 ]", vi: "[ 03 ]" },
  "pp.eyebrow": { en: "Product Catalog", zh: "产品目录", vi: "Catalog sản phẩm" },
  "pp.title1": { en: "Six Coating Systems.", zh: "六大涂料体系。", vi: "Sáu hệ sơn." },
  "pp.title2": { en: "One Trusted Source.", zh: "一个可信之选。", vi: "Một nguồn đáng tin cậy." },
  "pp.desc": {
    en: "From anti-corrosion primers for offshore steel to 600°C high-temperature silicone systems — every product is manufactured in-house, traceable to batch, and backed by a 24-month warranty.",
    zh: "从海洋钢结构的防腐底漆到600°C耐高温有机硅系统——每款产品均为自主生产、批次可追溯,并提供24个月质保。",
    vi: "Từ sơn lót chống ăn mòn cho kết cấu thép ngoài khơi đến hệ sơn silicone chịu 600°C — mọi sản phẩm đều sản xuất nội bộ, truy xuất theo lô, bảo hành 24 tháng.",
  },
  "pp.specSheet": { en: "· SPEC SHEET", zh: "· 技术规格", vi: "· BẢNG THÔNG SỐ" },
  "pp.technicalData": { en: "TECHNICAL DATA", zh: "技术数据", vi: "DỮ LIỆU KỸ THUẬT" },
  "pp.applications": { en: "APPLICATIONS", zh: "应用领域", vi: "ỨNG DỤNG" },
  "pp.fullCatalogEyebrow": { en: "Full Catalog", zh: "完整目录", vi: "Toàn bộ catalog" },
  "pp.fullCatalogTitle": { en: "Browse all six systems.", zh: "浏览全部六大体系。", vi: "Xem cả sáu hệ sơn." },
  "pp.featuredModels": { en: "FEATURED MODELS", zh: "产品型号", vi: "MÃ SẢN PHẨM" },
  "pp.expandModels": { en: "Show", zh: "展开", vi: "Hiện" },
  "pp.collapseModels": { en: "Hide", zh: "收起", vi: "Ẩn" },
  "pp.viewDetail": { en: "TDS", zh: "产品详情", vi: "Thông số" },
  "pp.hideDetail": { en: "Hide", zh: "收起", vi: "Ẩn" },

  // Solutions page
  "sol.index": { en: "[ SOL ]", zh: "[ SOL ]", vi: "[ SOL ]" },
  "sol.eyebrow": { en: "Industry Solutions", zh: "行业解决方案", vi: "Giải pháp ngành" },
  "sol.titleAccent": { en: "industry vertical.", zh: "行业场景。", vi: "ngành." },
  "sol.titlePre": { en: "Coating systems engineered for your", zh: "为您的", vi: "Hệ sơn được thiết kế cho" },
  "sol.desc": {
    en: "We don't just sell paint — we engineer coating systems matched to your substrate, environment and performance spec. Below are six core industry verticals we serve worldwide.",
    zh: "我们不仅销售涂料——我们提供与您的基材、环境及性能要求匹配的涂料系统。以下是我们全球服务的六大核心行业。",
    vi: "Chúng tôi không chỉ bán sơn — chúng tôi thiết kế hệ sơn phù hợp với bề mặt, môi trường và yêu cầu kỹ thuật của bạn. Dưới đây là sáu ngành trọng điểm chúng tôi phục vụ toàn cầu.",
  },
  "sol.recommended": { en: "RECOMMENDED SYSTEMS", zh: "推荐系统", vi: "HỆ SƠN ĐỀ XUẤT" },
  "sol.appEyebrow": { en: "Applications", zh: "应用领域", vi: "Ứng dụng" },
  "sol.appTitle": { en: "Where HONG NGUYEN coatings work.", zh: "宏源涂料的应用场景。", vi: "Nơi sơn HONG NGUYEN phát huy tác dụng." },
  "sol.appDesc": { en: "Six core application areas where our systems are field-proven.", zh: "我们的系统已在这六大核心应用领域得到现场验证。", vi: "Sáu lĩnh vực ứng dụng cốt lõi nơi hệ thống của chúng tôi đã được chứng minh." },
  "sol.procEyebrow": { en: "Engineering Process", zh: "工程流程", vi: "Quy trình kỹ thuật" },
  "sol.procTitle": { en: "From spec to shipment — four steps.", zh: "从规格到出货——四步完成。", vi: "Từ thông số đến giao hàng — bốn bước." },

  // Cases page (application systems)
  "cp.eyebrow": { en: "Application Systems", zh: "应用体系", vi: "Hệ thống ứng dụng" },
  "cp.titlePre": { en: "Typical coating systems,", zh: "典型涂料配套体系，", vi: "Hệ sơn điển hình," },
  "cp.titleAccent": { en: "specified per project.", zh: "按项目选型。", vi: "chọn theo dự án." },
  "cp.desc": {
    en: "Representative coating builds for common duties. Exact systems — products, coats and DFT — are specified per corrosivity category, substrate and design life. Images are illustrative; batch TDS and QC reports accompany every order.",
    zh: "面向常见工况的代表性配套。具体体系（产品、道数、膜厚）按腐蚀等级、基材与设计寿命选定。图片为示意图；每单随附批次 TDS 与质检报告。",
    vi: "Cấu hình sơn đại diện cho các nhiệm vụ phổ biến. Hệ cụ thể (sản phẩm, số lớp, DFT) chọn theo cấp ăn mòn, bề mặt và tuổi thọ thiết kế. Hình minh họa; mỗi đơn kèm TDS và báo cáo QC theo lô.",
  },
  "cp.outcomesTitle": { en: "Systems & Service", zh: "体系与服务", vi: "Hệ thống & Dịch vụ" },

  // About page
  "ap.index": { en: "[ 05 ]", zh: "[ 05 ]", vi: "[ 05 ]" },
  "ap.eyebrow": { en: "About HONG NGUYEN", zh: "关于宏源", vi: "Về HONG NGUYEN" },
  "ap.titleAccent": { en: "China's coatings hometown.", zh: "中国涂料之乡。", vi: "quê hương sơn Trung Quốc." },
  "ap.titlePre": { en: "Based in", zh: "立足", vi: "Tại" },
  "ap.desc": {
    en: "HONG NGUYEN is a coating exporter based in Shunde, Guangdong — known as China's coatings hometown. We assemble complete coating systems (anti-corrosion, high-temperature, floor and architectural) from ISO 9001 certified plants in the region and supply them worldwide with full export documentation, OEM/ODM service and colour matching.",
    zh: "宏源是一家立足广东顺德——“中国涂料之乡”——的涂料出口商。我们整合当地 ISO 9001 认证工厂的防腐、耐高温、地坪及建筑涂料体系，配套全套出口单证、OEM/ODM 服务与调色服务，供应全球。",
    vi: "HONG NGUYEN là nhà xuất khẩu sơn đặt tại Shunde, Quảng Đông — 'quê hương sơn Trung Quốc'. Chúng tôi lắp hệ sơn trọn bộ (chống ăn mòn, chịu nhiệt, sàn, kiến trúc) từ các nhà máy ISO 9001 trong vùng và cung ứng toàn cầu kèm chứng từ xuất khẩu, OEM/ODM và pha màu.",
  },
  "ap.storyEyebrow": { en: "Company Profile", zh: "公司介绍", vi: "Giới thiệu công ty" },
  "ap.storyTitle": { en: "Quality-rooted, green development.", zh: "品质为本,绿色发展。", vi: "Chất lượng là gốc, phát triển xanh." },
  "ap.storyP1": {
    en: "HONG NGUYEN is a coating exporter based in Shunde, Guangdong — known as 'China's coatings hometown'. We work with ISO 9001 certified coating plants across the region, whose production runs under the ISO 9001 quality management and ISO 14001 environmental management systems.",
    zh: "宏源立足广东顺德——“中国涂料之乡”。我们与区域内 ISO 9001 认证的涂料工厂合作，其生产严格执行 ISO 9001 质量管理体系与 ISO 14001 环境管理体系。",
    vi: "HONG NGUYEN là nhà xuất khẩu sơn tại Shunde, Quảng Đông — 'quê hương sơn Trung Quốc'. Chúng tôi hợp tác với các nhà máy sơn ISO 9001 trong vùng, sản xuất theo hệ thống quản lý chất lượng ISO 9001 và môi trường ISO 14001.",
  },
  "ap.storyP2": {
    en: "Our role is export: system selection, colour matching, OEM / private-label packaging, quality documentation (batch QC reports, third-party testing on request) and the full export paperwork for your market.",
    zh: "我们的职责是出口：体系选型、调色、OEM/贴牌包装、质量文件（批次质检报告、可安排第三方检测）以及面向您市场的全套出口单证。",
    vi: "Vai trò của chúng tôi là xuất khẩu: chọn hệ, pha màu, đóng gói OEM/nhãn riêng, hồ sơ chất lượng (báo cáo QC theo lô, thử nghiệm bên thứ ba theo yêu cầu) và bộ chứng từ xuất khẩu cho thị trường của bạn.",
  },
  "ap.storyP3": {
    en: "The product range covers waterborne and solvent-borne anti-corrosion systems, fluorocarbon finishes, industrial coatings, floor systems and specialty coatings — complete, stable and widely used on steel structures, petrochemical plants, bridges, ships, machinery and construction.",
    zh: "产品线覆盖水性/油性防腐体系、氟碳漆、工业漆、地坪漆及特种涂料，配套齐全、性能稳定，广泛应用于钢结构、石油化工、桥梁船舶、五金机械及建筑领域。",
    vi: "Dải sản phẩm gồm hệ chống ăn mòn gốc nước/dầu, sơn fluorocarbon, sơn công nghiệp, sơn nền và sơn đặc thù — đầy đủ, ổn định, dùng rộng rãi trên kết cấu thép, hóa dầu, cầu tàu, cơ khí và xây dựng.",
  },
  "ap.storyP4": {
    en: "We hold to quality-first, green development — deepening anti-corrosion expertise, optimising product solutions and upgrading technical service. HONG NGUYEN looks forward to partnering with customers worldwide: reliable coatings and professional support for long-lasting protection on every project.",
    zh: "公司坚守品质为本、绿色发展的理念，持续深耕防腐防护领域，优化产品方案、升级技术服务。宏源期待与全球客户携手，为各类工程提供长效稳定、节能环保的涂装解决方案。",
    vi: "Chúng tôi kiên trì chất lượng là gốc, phát triển xanh — đào sâu chuyên môn chống ăn mòn, tối ưu giải pháp và nâng cấp dịch vụ kỹ thuật. HONG NGUYEN mong hợp tác cùng khách hàng toàn cầu cho mọi công trình.",
  },
  "ap.capEyebrow": { en: "Capabilities", zh: "核心能力", vi: "Năng lực" },
  "ap.capTitle": { en: "What we control end-to-end.", zh: "端到端掌控的能力。", vi: "Những gì chúng tôi kiểm soát từ đầu đến cuối." },
  "ap.procEyebrow": { en: "How We Work", zh: "工作方式", vi: "Cách chúng tôi làm việc" },
  "ap.procTitle": { en: "From spec to shipment — four steps.", zh: "从规格到出货——四步完成。", vi: "Từ thông số đến giao hàng — bốn bước." },
  "ap.certEyebrow": { en: "Certifications", zh: "认证资质", vi: "Chứng nhận" },
  "ap.certTitle": { en: "Audited. Tested. Documented.", zh: "审核·检测·文档齐备。", vi: "Đã kiểm toán. Đã kiểm tra. Đầy đủ hồ sơ." },
  "ap.partnersEyebrow": { en: "Systems", zh: "涂料体系", vi: "Hệ sơn" },
  "ap.partnersTitle": { en: "Chemistries we supply.", zh: "我们供应的涂料化学体系。", vi: "Các hệ hóa sơn chúng tôi cung ứng." },
  "ap.ctaTitle": { en: "Ready to specify HONG NGUYEN on your next project?", zh: "准备好在下一个项目中选用宏源了吗?", vi: "Sẵn sàng chọn HONG NGUYEN cho dự án tiếp theo?" },
  "ap.ctaDesc": { en: "Our coating engineers respond the same business day.", zh: "我们的涂料工程师将在同一工作日内回复。", vi: "Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc." },

  // News page
  "np.eyebrow": { en: "News & Blog", zh: "新闻与博客", vi: "Tin tức & Blog" },
  "np.titleAccent": { en: "coatings floor.", zh: "涂料车间。", vi: "sản xuất sơn." },
  "np.titlePre": { en: "Field notes from the", zh: "来自", vi: "Ghi chép từ" },
  "np.desc": {
    en: "Specification guides, export briefings and engineering notes for B2B coating buyers — written by our export and technical desk.",
    zh: "面向 B2B 涂料采购方的选型指南、出口简报与工程笔记——出自我们的出口与技术部门。",
    vi: "Cẩm nang chọn hệ, tin xuất khẩu và ghi chú kỹ thuật cho người mua sơn B2B — từ bộ phận xuất khẩu và kỹ thuật của chúng tôi.",
  },
  "np.featured": { en: "FEATURED", zh: "精选", vi: "NỔI BẬT" },
  "np.stayEyebrow": { en: "Stay informed", zh: "保持关注", vi: "Cập nhật thông tin" },
  "np.stayTitle": { en: "Get B2B coatings briefings, monthly.", zh: "每月获取B2B涂料简报。", vi: "Nhận tin vắn sơn B2B hàng tháng." },
  "np.stayDesc": { en: "Product launches, certification updates and engineering notes — no spam.", zh: "产品发布、认证更新与工程笔记——绝不发送垃圾邮件。", vi: "Ra mắt sản phẩm, cập nhật chứng nhận và ghi chép kỹ thuật — không spam." },
  "np.all": { en: "All", zh: "全部", vi: "Tất cả" },
  "np.backToNews": { en: "All articles", zh: "返回文章列表", vi: "Tất cả bài viết" },
  "np.articleCtaTitle": { en: "Specifying a project?", zh: "正在为项目选型？", vi: "Đang chọn hệ cho dự án?" },
  "np.articleCtaDesc": {
    en: "Send us the substrate, environment and target spec — we reply with a matched system within one business day.",
    zh: "把基材、环境与目标规格发给我们，一个工作日内回复配套方案。",
    vi: "Gửi bề mặt, môi trường và thông số mục tiêu — chúng tôi phản hồi hệ phù hợp trong một ngày làm việc.",
  },

  // News categories
  "cat.Product Launch": { en: "Product Launch", zh: "产品发布", vi: "Ra mắt sản phẩm" },
  "cat.Project": { en: "Project", zh: "项目", vi: "Dự án" },
  "cat.Certification": { en: "Certification", zh: "认证", vi: "Chứng nhận" },
  "cat.Export": { en: "Export", zh: "出口", vi: "Xuất khẩu" },
  "cat.R&D": { en: "R&D", zh: "研发", vi: "R&D" },
  "cat.Industry": { en: "Industry", zh: "行业", vi: "Ngành" },

  // FAQ page
  "fp.eyebrow": { en: "Frequently Asked Questions", zh: "常见问题", vi: "Câu hỏi thường gặp" },
  "fp.titleAccent": { en: "B2B buyers.", zh: "B2B采购方。", vi: "khách hàng B2B." },
  "fp.titlePre": { en: "Answers for", zh: "为", vi: "Câu trả lời cho" },
  "fp.desc": {
    en: "Everything you need to know about MOQ, lead time, custom formulation, OEM/private-label, certifications and export — in one place.",
    zh: "关于起订量、交期、定制配方、OEM/贴牌、认证与出口的全部信息——一站式了解。",
    vi: "Mọi thông tin về MOQ, thời gian giao hàng, phối chế theo yêu cầu, OEM/nhãn riêng, chứng nhận và xuất khẩu — tất cả tại một nơi.",
  },
  "fp.searchPlaceholder": { en: "Search questions…", zh: "搜索问题…", vi: "Tìm câu hỏi…" },
  "fp.sidebarTitle": { en: "Can't find an answer?", zh: "找不到答案?", vi: "Không tìm thấy câu trả lời?" },
  "fp.sidebarDesc": {
    en: "Our coating engineers respond the same business day. Tell us your substrate, environment and performance targets.",
    zh: "我们的涂料工程师将在同一工作日内回复。告诉我们您的基材、环境及性能目标。",
    vi: "Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc. Hãy cho chúng tôi biết bề mặt, môi trường và yêu cầu kỹ thuật.",
  },
  "fp.quickFacts": { en: "QUICK FACTS", zh: "快速概览", vi: "THÔNG TIN NHANH" },
  "fp.moq": { en: "MOQ", zh: "起订量", vi: "MOQ" },
  "fp.sampleLead": { en: "Sample lead", zh: "样品周期", vi: "Thời gian giao mẫu" },
  "fp.prodLead": { en: "Production lead", zh: "生产周期", vi: "Thời gian sản xuất" },
  "fp.warranty": { en: "Warranty", zh: "质保", vi: "Bảo hành" },
  "fp.exportCountries": { en: "Export countries", zh: "出口国家", vi: "Quốc gia xuất khẩu" },
  "fp.noResults": { en: "No questions match", zh: "没有匹配的问题", vi: "Không có câu hỏi phù hợp" },
  "fp.tryOrAsk": { en: ". Try another term or", zh: "。请尝试其他关键词,或", vi: ". Thử từ khóa khác hoặc" },

  // Contact page
  "ctp.index": { en: "[ 09 ]", zh: "[ 09 ]", vi: "[ 09 ]" },
  "ctp.eyebrow": { en: "Request Quote", zh: "申请报价", vi: "Yêu cầu báo giá" },
  "ctp.title1": { en: "Get a quote in 24 hours.", zh: "24小时内报价。", vi: "Báo giá trong 24 giờ." },
  "ctp.title2": { en: "Sample shipped in 48.", zh: "48小时内寄样。", vi: "Giao mẫu trong 48 giờ." },
  "ctp.desc": {
    en: "Tell us your project — substrate, environment, performance requirements. Our coating engineers respond same business day.",
    zh: "告诉我们您的项目——基材、环境、性能要求。我们的涂料工程师将在同一工作日内回复。",
    vi: "Hãy cho chúng tôi biết dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật. Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc.",
  },
  "ctp.directEyebrow": { en: "Direct Contact", zh: "直接联系", vi: "Liên hệ trực tiếp" },
  "ctp.directTitle": { en: "Talk to a coating engineer.", zh: "与涂料工程师对话。", vi: "Trò chuyện với kỹ sư sơn." },
  "ctp.directDesc": {
    en: "Prefer to reach us directly? Use the channels below — we monitor them every business day.",
    zh: "希望直接联系我们?通过以下渠道——我们每个工作日都关注。",
    vi: "Muốn liên hệ trực tiếp? Sử dụng các kênh dưới đây — chúng tôi theo dõi mỗi ngày làm việc.",
  },
  "ctp.trustQuote": { en: "Quote response", zh: "报价响应", vi: "Phản hồi báo giá" },
  "ctp.trustSample": { en: "Sample ships", zh: "样品寄出", vi: "Giao mẫu" },
  "ctp.trustWarranty": { en: "Warranty", zh: "质保", vi: "Bảo hành" },
  "ctp.successTitle": { en: "Inquiry received", zh: "询盘已收到", vi: "Đã nhận yêu cầu" },
  "ctp.successDesc": {
    en: "Our coating engineers will respond within one business day. For urgent requests, message us on WhatsApp.",
    zh: "我们的涂料工程师将在1个工作日内回复。如有紧急需求,请通过WhatsApp联系我们。",
    vi: "Kỹ sư sơn sẽ phản hồi trong vòng 1 ngày làm việc. Yêu cầu khẩn xin nhắn qua WhatsApp.",
  },
  "ctp.formPrivacy": {
    en: "We respond within 1 business day. Your data is kept confidential.",
    zh: "我们将在1个工作日内回复。您的信息将严格保密。",
    vi: "Chúng tôi phản hồi trong 1 ngày làm việc. Thông tin của bạn được bảo mật.",
  },
  "ctp.globalEyebrow": { en: "Global Export", zh: "全球出口", vi: "Xuất khẩu toàn cầu" },
  "ctp.globalTitle": { en: "Shipping worldwide, six core regions.", zh: "全球发货，六大核心区域。", vi: "Gửi hàng toàn cầu, sáu khu vực trọng điểm." },
  "ctp.globalDesc": { en: "Established logistics across six regions — and quotes to any destination port on request.", zh: "六大区域拥有成熟物流渠道，并可按需报至任意目的港。", vi: "Logistics sẵn có tại sáu khu vực — báo giá tới bất kỳ cảng đích nào theo yêu cầu." },

  // Form labels
  "form.fullName": { en: "Full name", zh: "姓名", vi: "Họ tên" },
  "form.company": { en: "Company", zh: "公司", vi: "Công ty" },
  "form.email": { en: "Email", zh: "邮箱", vi: "Email" },
  "form.phone": { en: "Phone / WhatsApp", zh: "电话 / WhatsApp", vi: "Điện thoại / WhatsApp" },
  "form.country": { en: "Country / region", zh: "国家 / 地区", vi: "Quốc gia / khu vực" },
  "form.product": { en: "Product of interest", zh: "意向产品", vi: "Sản phẩm quan tâm" },
  "form.productPlaceholder": { en: "Select a system…", zh: "选择系统…", vi: "Chọn hệ sơn…" },
  "form.substrate": { en: "Substrate", zh: "基材", vi: "Bề mặt" },
  "form.environment": { en: "Environment", zh: "环境", vi: "Môi trường" },
  "form.quantity": { en: "Quantity (kg)", zh: "数量 (kg)", vi: "Số lượng (kg)" },
  "form.message": { en: "Project details", zh: "项目详情", vi: "Chi tiết dự án" },
  "form.messagePlaceholder": {
    en: "Describe your project — substrate, environment, performance requirements, timeline…",
    zh: "请描述您的项目——基材、环境、性能要求、时间表……",
    vi: "Mô tả dự án của bạn — bề mặt, môi trường, yêu cầu kỹ thuật, thời gian…",
  },
  "form.namePlaceholder": { en: "Your name", zh: "您的姓名", vi: "Tên của bạn" },
  "form.companyPlaceholder": { en: "Company / org", zh: "公司 / 机构", vi: "Công ty / tổ chức" },
  "form.emailPlaceholder": { en: "you@company.com", zh: "you@company.com", vi: "you@company.com" },
  "form.phonePlaceholder": { en: "+86 ...", zh: "+86 ...", vi: "+86 ..." },
  "form.countryPlaceholder": { en: "Vietnam", zh: "越南", vi: "Việt Nam" },
  "form.substratePlaceholder": { en: "Steel / concrete / …", zh: "钢材 / 混凝土 / …", vi: "Thép / bê tông / …" },
  "form.environmentPlaceholder": { en: "Marine / indoor / …", zh: "海洋 / 室内 / …", vi: "Biển / trong nhà / …" },
  "form.quantityPlaceholder": { en: "e.g. 2,000", zh: "如 2,000", vi: "vd. 2.000" },
  "form.other": { en: "Other / not sure", zh: "其他 / 不确定", vi: "Khác / chưa rõ" },
  "form.required": { en: "*", zh: "*", vi: "*" },

  // Errors
  "err.nameRequired": { en: "Name is required.", zh: "请填写姓名。", vi: "Vui lòng nhập họ tên." },
  "err.emailRequired": { en: "A valid email is required.", zh: "请填写有效的邮箱地址。", vi: "Vui lòng nhập email hợp lệ." },
  "err.messageRequired": { en: "Please describe your project.", zh: "请描述您的项目。", vi: "Vui lòng mô tả dự án." },
  "err.generic": { en: "Something went wrong. Please try again.", zh: "出现错误,请重试。", vi: "Đã xảy ra lỗi. Vui lòng thử lại." },
  "err.couldNotSend": { en: "Could not send", zh: "发送失败", vi: "Không thể gửi" },

  // Toast
  "toast.inquiryTitle": { en: "Inquiry received", zh: "询盘已收到", vi: "Đã nhận yêu cầu" },
  "toast.inquiryDesc": {
    en: "Thanks — our coating engineers will respond within one business day.",
    zh: "感谢您——我们的涂料工程师将在1个工作日内回复。",
    vi: "Cảm ơn bạn — kỹ sư sơn sẽ phản hồi trong vòng 1 ngày làm việc.",
  },

  // Misc labels
  "misc.area": { en: "Area", zh: "面积", vi: "Diện tích" },
  "misc.system": { en: "System", zh: "系统", vi: "Hệ thống" },
  "misc.duration": { en: "Duration", zh: "工期", vi: "Thời gian" },
  "misc.weatherability": { en: "Weatherability", zh: "耐候性", vi: "Khả năng chịu thời tiết" },
  "misc.base": { en: "Base", zh: "基料", vi: "Nhựa nền" },
  "misc.dft": { en: "DFT", zh: "干膜厚度", vi: "DFT" },
  "misc.saltSpray": { en: "Salt Spray", zh: "盐雾", vi: "Phun muối" },
  "misc.packaging": { en: "Packaging", zh: "包装", vi: "Đóng gói" },
  "misc.tempRange": { en: "Temp Range", zh: "温度范围", vi: "Nhiệt độ" },
  "misc.cure": { en: "Cure", zh: "固化", vi: "Khâu đông" },
  "misc.thickness": { en: "Thickness", zh: "厚度", vi: "Độ dày" },
  "misc.traffic": { en: "Traffic", zh: "承重", vi: "Tải trọng" },
  "misc.weatherabilityShort": { en: "Weatherability", zh: "耐候性", vi: "Chịu thời tiết" },
  "misc.gloss": { en: "Gloss", zh: "光泽", vi: "Độ bóng" },
  "misc.type": { en: "Type", zh: "类型", vi: "Loại" },
  "misc.fireRating": { en: "Fire Rating", zh: "防火等级", vi: "Cấp cháy" },
  "misc.voc": { en: "VOC", zh: "VOC", vi: "VOC" },
  "misc.finish": { en: "Finish", zh: "饰面", vi: "Bề mặt" },
  "misc.rd": { en: "R&D", zh: "研发", vi: "R&D" },
  "misc.sample": { en: "Sample", zh: "样品", vi: "Mẫu" },
  "misc.production": { en: "Production", zh: "生产", vi: "Sản xuất" },
  "misc.moqShort": { en: "MOQ", zh: "起订量", vi: "MOQ" },
  "misc.coated": { en: "m² coated in featured cases", zh: "m² 精选案例涂装面积", vi: "m² sơn trong các dự án tiêu biểu" },
  "misc.defects": { en: "coating-failure defects reported", zh: "起涂层失效缺陷", vi: "lỗi sơn được báo cáo" },
  "misc.countriesServed": { en: "countries served", zh: "服务国家", vi: "quốc gia phục vụ" },
  "misc.warrantyStd": { en: "quality warranty standard", zh: "标准质保期", vi: "bảo hành tiêu chuẩn" },

  // Admin keys removed together with the admin console.
};

// ---- Hook -----------------------------------------------------------------

export function useT() {
  const locale = useLang((s) => s.locale);
  const setLocale = useLang((s) => s.setLocale);

  const t = React.useCallback(
    (key: string) => {
      const entry = ui[key];
      if (!entry) return key;
      if (locale === "es") return UI_ES[key] ?? entry.es ?? entry.en;
      if (locale === "ar") return UI_AR[key] ?? entry.ar ?? entry.en;
      return entry[locale] ?? entry.en;
    },
    [locale]
  );

  const loc = React.useCallback(
    (v: LStr | string | undefined) => pick(v, locale),
    [locale]
  );

  return { locale, setLocale, t, loc };
}

/** Language switcher display names. */
export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中" },
  { code: "vi", label: "Tiếng Việt", short: "VI" },
  { code: "es", label: "Español", short: "ES" },
  { code: "ar", label: "العربية", short: "ع" },
];
