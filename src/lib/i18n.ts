"use client";

import * as React from "react";
import { create } from "zustand";

export type Locale = "en" | "zh" | "vi";

/** A localized string — must provide all three locales. */
export type LStr = { en: string; zh: string; vi: string };

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
    }
    set({ locale });
  },
  hydrate: () => {
    if (get().hydrated) return;
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const locale: Locale =
      saved === "zh" || saved === "vi" || saved === "en" ? saved : "en";
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
    set({ locale, hydrated: true });
  },
}));

// ---- Helpers --------------------------------------------------------------

/** Pick the right string for the locale. Accepts LStr or plain string. */
export function pick(v: LStr | string | undefined, locale: Locale): string {
  if (!v) return "";
  if (typeof v === "string") return v;
  return v[locale] ?? v.en;
}

// ---- UI string dictionary -------------------------------------------------

export const ui: Record<string, LStr> = {
  // Brand / tagline
  "brand.tagline": { en: "Industrial Coatings Since 2003", zh: "工业涂料 自2003年", vi: "Sơn công nghiệp từ 2003" },
  "brand.premiumDesc": {
    en: "Premium industrial coatings manufacturer since 2003. Direct factory supply, OEM/ODM service, global B2B export to 60+ countries.",
    zh: "自2003年起的优质工业涂料制造商。工厂直供、OEM/ODM服务、产品出口全球60+国家。",
    vi: "Nhà sản xuất sơn công nghiệp cao cấp từ 2003. Cung ứng trực tiếp từ nhà máy, dịch vụ OEM/ODM, xuất khẩu B2B tới 60+ quốc gia.",
  },

  // Top utility bar
  "topbar.established": { en: "EST.", zh: "成立于", vi: "TLTH" },
  "topbar.phone": { en: "Phone", zh: "电话", vi: "Điện thoại" },
  "topbar.email": { en: "Email", zh: "邮箱", vi: "Email" },

  // Nav
  "nav.home": { en: "Home", zh: "首页", vi: "Trang chủ" },
  "nav.products": { en: "Products", zh: "产品", vi: "Sản phẩm" },
  "nav.solutions": { en: "Solutions", zh: "解决方案", vi: "Giải pháp" },
  "nav.cases": { en: "Cases", zh: "案例", vi: "Dự án" },
  "nav.about": { en: "About", zh: "关于我们", vi: "Giới thiệu" },
  "nav.news": { en: "News", zh: "新闻", vi: "Tin tức" },
  "nav.faq": { en: "FAQ", zh: "常见问题", vi: "Câu hỏi" },
  "nav.contact": { en: "Contact", zh: "联系", vi: "Liên hệ" },

  // CTA buttons
  "cta.getQuote": { en: "Get A Free Quote", zh: "免费获取报价", vi: "Nhận báo giá miễn phí" },
  "cta.browseCatalog": { en: "Browse Catalog", zh: "浏览产品目录", vi: "Xem catalog" },
  "cta.viewAllCatalog": { en: "View All Catalog", zh: "查看全部目录", vi: "Toàn bộ catalog" },
  "cta.viewAllCases": { en: "View All Cases", zh: "查看全部案例", vi: "Xem tất cả dự án" },
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
  "cta.requestSimilar": { en: "Request Similar Project", zh: "申请类似项目", vi: "Yêu cầu dự án tương tự" },
  "cta.explore": { en: "Explore system", zh: "了解系统", vi: "Khám phá hệ thống" },
  "cta.talkToEngineer": { en: "Talk to an engineer", zh: "与工程师交谈", vi: "Trò chuyện với kỹ sư" },
  "cta.partnerWithUs": { en: "Partner with us", zh: "与我们合作", vi: "Hợp tác cùng chúng tôi" },

  // Home — hero
  "hero.index": { en: "[ 01 ]", zh: "[ 01 ]", vi: "[ 01 ]" },
  "hero.eyebrow": { en: "Industrial Coatings Since 2003", zh: "工业涂料 自2003年", vi: "Sơn công nghiệp từ 2003" },
  "hero.title1": { en: "Engineered Coatings", zh: "工程化涂料", vi: "Sơn kỹ thuật" },
  "hero.title2": { en: "for", zh: "用于", vi: "cho công nghiệp" },
  "hero.titleAccent": { en: "Heavy-Duty", zh: "重型", vi: "hạng nặng" },
  "hero.title3": { en: "Industries", zh: "工业", vi: "" },
  "hero.desc": {
    en: "ISO 9001 certified manufacturer of anti-corrosion, high-temperature, epoxy floor, and architectural coatings. Direct factory supply · OEM/ODM · Export to 60+ countries · 24-month quality warranty.",
    zh: "ISO 9001认证的防腐、耐高温、环氧地坪及建筑涂料制造商。工厂直供 · OEM/ODM · 出口60+国家 · 24个月质保。",
    vi: "Nhà sản xuất sơn chống ăn mòn, chịu nhiệt cao, sơn nền epoxy và sơn kiến trúc đạt ISO 9001. Cung ứng trực tiếp từ nhà máy · OEM/ODM · Xuất khẩu 60+ quốc gia · Bảo hành 24 tháng.",
  },
  "hero.specSheet": { en: "SPEC SHEET · REV.2026", zh: "技术规格 · 2026版", vi: "BẢNG THÔNG SỐ · REV.2026" },
  "hero.live": { en: "LIVE", zh: "实时", vi: "TRỰC TIẾP" },

  // Partners
  "partners.trustedBy": { en: "Trusted by · Global B2B Partners", zh: "全球B2B合作伙伴信赖之选", vi: "Được tin dùng bởi · Đối tác B2B toàn cầu" },

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

  // Cases
  "cases.index": { en: "[ 06 ]", zh: "[ 06 ]", vi: "[ 06 ]" },
  "cases.eyebrow": { en: "Project Cases", zh: "项目案例", vi: "Dự án tiêu biểu" },
  "cases.title": { en: "Field-proven across continents.", zh: "横跨各大洲的现场验证。", vi: "Được chứng minh thực tế trên nhiều châu lục." },

  // Certifications
  "cert.index": { en: "[ 07 ]", zh: "[ 07 ]", vi: "[ 07 ]" },
  "cert.eyebrow": { en: "Certifications", zh: "认证资质", vi: "Chứng nhận" },
  "cert.title": { en: "Audited. Tested. Documented.", zh: "审核·检测·文档齐备。", vi: "Đã kiểm toán. Đã kiểm tra. Đầy đủ hồ sơ." },
  "cert.desc": {
    en: "Every shipment backed by internationally recognized certifications. Pre-shipment samples can be tested at SGS, BV, or Intertek on request.",
    zh: "每批出货均附带国际认可认证。可按要求在SGS、BV或Intertek进行装运前抽样检测。",
    vi: "Mỗi lô hàng đều có chứng nhận quốc tế. Có thể kiểm tra mẫu trước khi giao tại SGS, BV hoặc Intertek theo yêu cầu.",
  },

  // Testimonials
  "voice.index": { en: "[ 08 ]", zh: "[ 08 ]", vi: "[ 08 ]" },
  "voice.eyebrow": { en: "Client Voices", zh: "客户之声", vi: "Khách hàng nói" },
  "voice.title": { en: "What B2B buyers say.", zh: "B2B采购方怎么说。", vi: "Khách hàng B2B nhận xét." },

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

  // Cases page
  "cp.eyebrow": { en: "Project Cases", zh: "项目案例", vi: "Dự án tiêu biểu" },
  "cp.titlePre": { en: "Field-proven across", zh: "横跨", vi: "Chứng minh thực tế tại" },
  "cp.titleAccent": { en: "continents.", zh: "各大洲。", vi: "nhiều châu lục." },
  "cp.desc": {
    en: "Real projects, real performance. Every case below is backed by a full QC dossier and post-installation inspection report.",
    zh: "真实项目,真实表现。以下每个案例均附带完整QC档案与施工后检验报告。",
    vi: "Dự án thực tế, hiệu suất thực tế. Mỗi dự án dưới đây đều có hồ sơ QC đầy đủ và báo cáo kiểm tra sau thi công.",
  },
  "cp.outcomesTitle": { en: "Outcomes", zh: "项目成果", vi: "Kết quả" },

  // About page
  "ap.index": { en: "[ 05 ]", zh: "[ 05 ]", vi: "[ 05 ]" },
  "ap.eyebrow": { en: "About HONG NGUYEN", zh: "关于宏源", vi: "Về HONG NGUYEN" },
  "ap.titleAccent": { en: "one trusted factory.", zh: "一个可信的工厂。", vi: "một nhà máy đáng tin cậy." },
  "ap.titlePre": { en: "22 years of formulation expertise,", zh: "22年配方经验,", vi: "22 năm kinh nghiệm phối chế," },
  "ap.desc": {
    en: "Founded in 2003, HONG NGUYEN has grown into an ISO 9001 certified industrial coatings manufacturer serving 800+ active B2B clients across 60+ countries — with full in-house production, QC labs and OEM/ODM capability.",
    zh: "宏源成立于2003年,已发展为ISO 9001认证的工业涂料制造商,服务60+国家、800+活跃B2B客户——拥有完整自主生产、QC实验室及OEM/ODM能力。",
    vi: "Thành lập năm 2003, HONG NGUYEN đã trở thành nhà sản xuất sơn công nghiệp đạt ISO 9001, phục vụ 800+ khách hàng B2B tại 60+ quốc gia — với năng lực sản xuất nội bộ, phòng QC và OEM/ODM đầy đủ.",
  },
  "ap.storyEyebrow": { en: "Our Story", zh: "我们的故事", vi: "Câu chuyện" },
  "ap.storyTitle": { en: "Built for B2B buyers who can't afford coating failure.", zh: "为不容许涂层失效的B2B采购方而生。", vi: "Dành cho khách hàng B2B không thể chấp nhận lỗi sơn." },
  "ap.capEyebrow": { en: "Capabilities", zh: "核心能力", vi: "Năng lực" },
  "ap.capTitle": { en: "What we control end-to-end.", zh: "端到端掌控的能力。", vi: "Những gì chúng tôi kiểm soát từ đầu đến cuối." },
  "ap.procEyebrow": { en: "How We Work", zh: "工作方式", vi: "Cách chúng tôi làm việc" },
  "ap.procTitle": { en: "From spec to shipment — four steps.", zh: "从规格到出货——四步完成。", vi: "Từ thông số đến giao hàng — bốn bước." },
  "ap.certEyebrow": { en: "Certifications", zh: "认证资质", vi: "Chứng nhận" },
  "ap.certTitle": { en: "Audited. Tested. Documented.", zh: "审核·检测·文档齐备。", vi: "Đã kiểm toán. Đã kiểm tra. Đầy đủ hồ sơ." },
  "ap.partnersEyebrow": { en: "Trusted By", zh: "合作伙伴", vi: "Được tin dùng" },
  "ap.partnersTitle": { en: "Global B2B partners.", zh: "全球B2B合作伙伴。", vi: "Đối tác B2B toàn cầu." },
  "ap.ctaTitle": { en: "Ready to specify HONG NGUYEN on your next project?", zh: "准备好在下一个项目中选用宏源了吗?", vi: "Sẵn sàng chọn HONG NGUYEN cho dự án tiếp theo?" },
  "ap.ctaDesc": { en: "Our coating engineers respond the same business day.", zh: "我们的涂料工程师将在同一工作日内回复。", vi: "Kỹ sư sơn sẽ phản hồi trong cùng ngày làm việc." },

  // News page
  "np.eyebrow": { en: "News & Blog", zh: "新闻与博客", vi: "Tin tức & Blog" },
  "np.titleAccent": { en: "coatings floor.", zh: "涂料车间。", vi: "sản xuất sơn." },
  "np.titlePre": { en: "Field notes from the", zh: "来自", vi: "Ghi chép từ" },
  "np.desc": {
    en: "Product launches, project milestones, certifications and engineering briefings — straight from our R&D lab and export desk.",
    zh: "产品发布、项目里程碑、认证与工程简报——来自我们的研发实验室与出口部门。",
    vi: "Ra mắt sản phẩm, cột mốc dự án, chứng nhận và tin kỹ thuật — trực tiếp từ phòng R&D và bộ phận xuất khẩu.",
  },
  "np.featured": { en: "FEATURED", zh: "精选", vi: "NỔI BẬT" },
  "np.stayEyebrow": { en: "Stay informed", zh: "保持关注", vi: "Cập nhật thông tin" },
  "np.stayTitle": { en: "Get B2B coatings briefings, monthly.", zh: "每月获取B2B涂料简报。", vi: "Nhận tin vắn sơn B2B hàng tháng." },
  "np.stayDesc": { en: "Product launches, certification updates and engineering notes — no spam.", zh: "产品发布、认证更新与工程笔记——绝不发送垃圾邮件。", vi: "Ra mắt sản phẩm, cập nhật chứng nhận và ghi chép kỹ thuật — không spam." },
  "np.all": { en: "All", zh: "全部", vi: "Tất cả" },

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
  "ctp.globalTitle": { en: "Serving 60+ countries worldwide.", zh: "服务全球60+国家。", vi: "Phục vụ 60+ quốc gia toàn cầu." },
  "ctp.globalDesc": { en: "Active distributor and logistics channels across six regions.", zh: "六大区域均有活跃的经销商与物流渠道。", vi: "Kênh phân phối và logistics hoạt động tại sáu khu vực." },

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
  "form.phonePlaceholder": { en: "+84 ...", zh: "+84 ...", vi: "+84 ..." },
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

  // Admin
  "admin.title": { en: "Admin Console", zh: "后台管理控制台", vi: "Bảng quản trị" },
  "admin.eyebrow": { en: "Inquiry Management", zh: "询盘管理", vi: "Quản lý yêu cầu" },
  "admin.backToSite": { en: "Back to site", zh: "返回网站", vi: "Về trang web" },
  "admin.lockTitle": { en: "Admin Access", zh: "管理员访问", vi: "Truy cập quản trị" },
  "admin.lockDesc": { en: "Enter the admin passphrase to continue.", zh: "请输入管理员口令以继续。", vi: "Nhập mật khẩu quản trị để tiếp tục." },
  "admin.passphrase": { en: "Passphrase", zh: "口令", vi: "Mật khẩu" },
  "admin.passphrasePlaceholder": { en: "Enter passphrase…", zh: "输入口令…", vi: "Nhập mật khẩu…" },
  "admin.unlock": { en: "Unlock", zh: "解锁", vi: "Mở khóa" },
  "admin.lockError": { en: "Incorrect passphrase.", zh: "口令不正确。", vi: "Mật khẩu không đúng." },
  "admin.lockout": { en: "Demo passphrase", zh: "演示口令", vi: "Mật khẩu demo" },
  "admin.statTotal": { en: "Total inquiries", zh: "询盘总数", vi: "Tổng yêu cầu" },
  "admin.statNew": { en: "New", zh: "新询盘", vi: "Mới" },
  "admin.statContacted": { en: "Contacted", zh: "已联系", vi: "Đã liên hệ" },
  "admin.statClosed": { en: "Closed", zh: "已关闭", vi: "Đã đóng" },
  "admin.searchPlaceholder": { en: "Search name / company / email / message…", zh: "搜索姓名/公司/邮箱/留言…", vi: "Tìm tên / công ty / email / lời nhắn…" },
  "admin.filterAll": { en: "All", zh: "全部", vi: "Tất cả" },
  "admin.colInquiry": { en: "Inquiry", zh: "询盘", vi: "Yêu cầu" },
  "admin.colContact": { en: "Contact", zh: "联系方式", vi: "Liên hệ" },
  "admin.colProduct": { en: "Product", zh: "产品", vi: "Sản phẩm" },
  "admin.colStatus": { en: "Status", vi: "Trạng thái", zh: "状态" },
  "admin.colDate": { en: "Received", zh: "收到时间", vi: "Nhận" },
  "admin.colActions": { en: "Actions", zh: "操作", vi: "Thao tác" },
  "admin.view": { en: "View", zh: "查看", vi: "Xem" },
  "admin.markContacted": { en: "Mark contacted", zh: "标记已联系", vi: "Đánh dấu đã liên hệ" },
  "admin.markClosed": { en: "Mark closed", zh: "标记已关闭", vi: "Đánh dấu đã đóng" },
  "admin.reopen": { en: "Reopen as new", zh: "重新标记为新", vi: "Mở lại thành mới" },
  "admin.delete": { en: "Delete", zh: "删除", vi: "Xóa" },
  "admin.deleteConfirm": { en: "Delete this inquiry permanently?", zh: "永久删除这条询盘?", vi: "Xóa vĩnh viễn yêu cầu này?" },
  "admin.detail": { en: "Inquiry detail", zh: "询盘详情", vi: "Chi tiết yêu cầu" },
  "admin.noResults": { en: "No inquiries match this filter.", zh: "没有匹配的询盘。", vi: "Không có yêu cầu phù hợp." },
  "admin.empty": { en: "No inquiries yet. Submit the contact form to see one here.", zh: "暂无询盘。提交联系表单后将会显示在这里。", vi: "Chưa có yêu cầu. Gửi biểu mẫu liên hệ để xem tại đây." },
  "admin.loading": { en: "Loading…", zh: "加载中…", vi: "Đang tải…" },
  "admin.refresh": { en: "Refresh", zh: "刷新", vi: "Làm mới" },
  "admin.logout": { en: "Log out", zh: "退出", vi: "Đăng xuất" },
  "admin.note": { en: "Demo-level security. For production, add NextAuth + server-side sessions.", zh: "演示级安全防护。生产环境请接入 NextAuth + 服务端会话。", vi: "Bảo mật mức demo. Môi trường production hãy dùng NextAuth + phiên máy chủ." },
  "admin.fieldMessage": { en: "Message", zh: "留言", vi: "Lời nhắn" },
  "admin.fieldSubstrate": { en: "Substrate", zh: "基材", vi: "Bề mặt" },
  "admin.fieldEnvironment": { en: "Environment", zh: "环境", vi: "Môi trường" },
  "admin.fieldQuantity": { en: "Quantity", zh: "数量", vi: "Số lượng" },
  "admin.export": { en: "Export CSV", zh: "导出 CSV", vi: "Xuất CSV" },
  "admin.lastUpdated": { en: "Last updated", zh: "最后更新", vi: "Cập nhật lần cuối" },
};

// ---- Hook -----------------------------------------------------------------

export function useT() {
  const locale = useLang((s) => s.locale);
  const setLocale = useLang((s) => s.setLocale);

  const t = React.useCallback(
    (key: string) => {
      const entry = ui[key];
      return entry ? entry[locale] ?? entry.en : key;
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
];
