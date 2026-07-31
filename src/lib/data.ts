// Central content store for HONG NGUYEN Industrial Coatings B2B website.
// All translatable content is a localized LStr { en, zh, vi }.
// Technical/numeric values stay as plain strings (returned as-is by loc()).

import type { LStr } from "@/lib/i18n";

export const company = {
  name: "HONG NGUYEN",
  fullName: "HONG NGUYEN Industrial Coatings",
  cnName: "宏源新材料",
  tagline: { en: "Industrial Coatings Since 2003", zh: "工业涂料 自2003年", vi: "Sơn công nghiệp từ 2003" } as LStr,
  established: 2003,
  description: {
    en: "ISO 9001 certified manufacturer of anti-corrosion, high-temperature, epoxy floor, and architectural coatings. Direct factory supply · OEM/ODM · Export to 60+ countries · 24-month quality warranty.",
    zh: "ISO 9001认证的防腐、耐高温、环氧地坪及建筑涂料制造商。工厂直供 · OEM/ODM · 出口60+国家 · 24个月质保。",
    vi: "Nhà sản xuất sơn chống ăn mòn, chịu nhiệt cao, sơn nền epoxy và sơn kiến trúc đạt ISO 9001. Cung ứng trực tiếp từ nhà máy · OEM/ODM · Xuất khẩu 60+ quốc gia · Bảo hành 24 tháng.",
  } as LStr,
  email: "hogoshi2023@gmail.com",
  phone: "+84 838 396 799",
  whatsapp: { en: "WhatsApp Business Chat", zh: "WhatsApp 商务咨询", vi: "Trò chuyện WhatsApp Business" } as LStr,
  contact: "Mr Hogo Shi · WeChat: hogo13",
  address: {
    en: "Xiashi Industrial Zone, Lunjiao Subdistrict, Shunde District, Foshan City, Guangdong Province, P.R.China",
    zh: "中国广东省佛山市顺德区伦教街道霞石工业区",
    vi: "Khu công nghiệp Xiashi, phường Lunjiao, quận Shunde, thành phố Phật Sơn, tỉnh Quảng Đông, Trung Quốc",
  } as LStr,
  certs: ["ISO 9001:2015", "ISO 14001:2015", "CE", "SGS"],
};

export const stats: { value: string; label: LStr; sub: LStr }[] = [
  {
    value: "22+",
    label: { en: "Years Industry Experience", zh: "年行业经验", vi: "Năm kinh nghiệm" },
    sub: { en: "Since 2003", zh: "自2003年", vi: "Từ 2003" },
  },
  {
    value: "60+",
    label: { en: "Export Countries", zh: "出口国家", vi: "Quốc gia xuất khẩu" },
    sub: { en: "Global B2B", zh: "全球B2B", vi: "B2B toàn cầu" },
  },
  {
    value: "50K",
    label: { en: "t/yr Production Capacity", zh: "吨/年产能", vi: "tấn/năm năng lực" },
    sub: { en: "In-house plant", zh: "自主工厂", vi: "Nhà máy nội bộ" },
  },
  {
    value: "800+",
    label: { en: "Active B2B Clients", zh: "活跃B2B客户", vi: "Khách hàng B2B" },
    sub: { en: "Worldwide", zh: "遍布全球", vi: "Trên toàn cầu" },
  },
];

export const specSheet: { label: LStr; value: string }[] = [
  { label: { en: "Base Resin", zh: "基料树脂", vi: "Nhựa nền" }, value: "Modified Epoxy / Acrylic" },
  { label: { en: "DFT Range", zh: "干膜厚度", vi: "DFT" }, value: "50 – 200 μm" },
  { label: { en: "Temp Resistance", zh: "耐温范围", vi: "Chịu nhiệt" }, value: "−40°C to +600°C" },
  { label: { en: "Salt Spray", zh: "盐雾测试", vi: "Phun muối" }, value: "≥ 1000 h ASTM B117" },
  { label: { en: "Adhesion", zh: "附着力", vi: "Độ bám dính" }, value: "5 MPa (cross-cut 0)" },
  { label: { en: "VOC", zh: "VOC", vi: "VOC" }, value: "< 50 g/L (low-VOC grade)" },
  { label: { en: "Packaging", zh: "包装", vi: "Đóng gói" }, value: "5L / 20L / 200L drum" },
  { label: { en: "Lead Time", zh: "交货周期", vi: "Thời gian giao hàng" }, value: "7 – 15 working days" },
  { label: { en: "MOQ", zh: "起订量", vi: "MOQ" }, value: "200 kg (mixed tones OK)" },
];

export type Product = {
  code: string;
  title: LStr;
  short: LStr;
  description: LStr;
  features: LStr[];
  specs: { label: LStr; value: string }[];
  image: string;
  applications: LStr[];
};

export const products: Product[] = [
  {
    code: "CAT-01",
    title: { en: "Anti-Corrosion Coatings", zh: "防腐涂料", vi: "Sơn chống ăn mòn" },
    short: { en: "Epoxy · Polyurethane · Zinc-rich primers", zh: "环氧·聚氨酯·富锌底漆", vi: "Epoxy · PU · lót giàu kẽm" },
    description: {
      en: "Heavy-duty anti-corrosion systems engineered for steel structures, pipelines, marine and offshore assets. Multi-layer epoxy zinc-rich primers paired with polyurethane topcoats deliver salt-spray resistance beyond 1000 hours.",
      zh: "专为钢结构、管道、海洋及离岸设施打造的重防腐体系。多层环氧富锌底漆搭配聚氨酯面漆,盐雾耐受超1000小时。",
      vi: "Hệ chống ăn mòn hạng nặng cho kết cấu thép, đường ống, hàng hải và ngoài khơi. Lót epoxy giàu kẽm nhiều lớp kết hợp lớp phủ PU, chịu phun muối trên 1000 giờ.",
    },
    features: [
      { en: "Zinc-rich epoxy primer (≥ 90% zinc in dry film)", zh: "富锌环氧底漆(干膜含锌≥90%)", vi: "Lót epoxy giàu kẽm (≥ 90% kẽm trong màng khô)" },
      { en: "Salt spray ≥ 1000 h (ASTM B117)", zh: "盐雾 ≥ 1000 小时 (ASTM B117)", vi: "Phun muối ≥ 1000 giờ (ASTM B117)" },
      { en: "Cross-cut adhesion grade 0", zh: "划格附着力0级", vi: "Bám dính cắt chéo cấp 0" },
      { en: "Compatible with immersion and splash zones", zh: "适用于浸没区与飞溅区", vi: "Phù hợp vùng ngập nước và vùng văng" },
    ],
    specs: [
      { label: { en: "Base", zh: "基料", vi: "Nhựa nền" }, value: "Epoxy / PU" },
      { label: { en: "DFT", zh: "干膜厚度", vi: "DFT" }, value: "60 – 250 μm" },
      { label: { en: "Salt Spray", zh: "盐雾", vi: "Phun muối" }, value: "≥ 1000 h" },
      { label: { en: "Packaging", zh: "包装", vi: "Đóng gói" }, value: "20L / 200L" },
    ],
    image: "/images/product-anticorrosion.jpg",
    applications: [
      { en: "Steel structures", zh: "钢结构", vi: "Kết cấu thép" },
      { en: "Pipelines", zh: "管道", vi: "Đường ống" },
      { en: "Marine", zh: "海洋", vi: "Hàng hải" },
      { en: "Offshore", zh: "离岸", vi: "Ngoài khơi" },
    ],
  },
  {
    code: "CAT-02",
    title: { en: "High-Temperature Coatings", zh: "耐高温涂料", vi: "Sơn chịu nhiệt cao" },
    short: { en: "Silicone-based 200°C – 600°C", zh: "有机硅基 200°C–600°C", vi: "Silicone 200°C–600°C" },
    description: {
      en: "Silicone-based heat-resistant systems rated from 200°C up to 600°C for stacks, boilers, exhaust manifolds and engine parts. Withstands thermal cycling without film breakdown.",
      zh: "有机硅耐热体系,耐温200°C至600°C,适用于烟囱、锅炉、排气歧管及发动机部件。可耐受冷热循环,漆膜不破坏。",
      vi: "Hệ chịu nhiệt gốc silicone, chịu 200°C đến 600°C cho ống khói, lò hơi, ống xả và bộ phận động cơ. Chịu được chu kỳ nhiệt mà màng sơn không hỏng.",
    },
    features: [
      { en: "Continuous service up to 600°C", zh: "长期使用温度达600°C", vi: "Hoạt động liên tục tới 600°C" },
      { en: "Silicone-modified resin matrix", zh: "有机硅改性树脂基体", vi: "Nhựa改性 silicone" },
      { en: "Resistance to thermal shock cycling", zh: "抗热冲击循环", vi: "Chịu sốc nhiệt" },
      { en: "Low VOC, colour-stable at temperature", zh: "低VOC,高温下颜色稳定", vi: "VOC thấp, màu ổn định ở nhiệt độ cao" },
    ],
    specs: [
      { label: { en: "Base", zh: "基料", vi: "Nhựa nền" }, value: "Silicone" },
      { label: { en: "Temp Range", zh: "温度范围", vi: "Nhiệt độ" }, value: "200 – 600°C" },
      { label: { en: "DFT", zh: "干膜厚度", vi: "DFT" }, value: "30 – 80 μm" },
      { label: { en: "Cure", zh: "固化", vi: "Khâu đông" }, value: "Air / force-dry" },
    ],
    image: "/images/product-hightemp.jpg",
    applications: [
      { en: "Stacks", zh: "烟囱", vi: "Ống khói" },
      { en: "Boilers", zh: "锅炉", vi: "Lò hơi" },
      { en: "Exhausts", zh: "排气管", vi: "Ống xả" },
      { en: "Engine parts", zh: "发动机部件", vi: "Phụ tùng động cơ" },
    ],
  },
  {
    code: "CAT-03",
    title: { en: "Epoxy Floor Coatings", zh: "环氧地坪涂料", vi: "Sơn nền epoxy" },
    short: { en: "Self-leveling · Anti-static · Heavy-duty mortar", zh: "自流平·防静电·重型砂浆", vi: "Tự chảy · chống tĩnh điện · vữa nặng" },
    description: {
      en: "Self-leveling epoxy, anti-static and heavy-duty mortar systems for warehouses, manufacturing plants and parking decks. Forklift-rated, chemical-resistant, 5-year warranty.",
      zh: "适用于仓库、厂房和停车场的自流平环氧、防静电及重型砂浆系统。叉车承重、耐化学品,5年质保。",
      vi: "Hệ epoxy tự chảy, chống tĩnh điện và vữa nặng cho nhà kho, nhà máy và bãi đỗ xe. Chịu xe nâng, chống hóa chất, bảo hành 5 năm.",
    },
    features: [
      { en: "Self-leveling 1–3 mm mortar systems", zh: "1–3 mm自流平砂浆系统", vi: "Vữa tự chảy 1–3 mm" },
      { en: "Forklift-traffic rated", zh: "可承受叉车通行", vi: "Chịu xe nâng" },
      { en: "Anti-static grades available (10⁶–10⁹ Ω)", zh: "可选防静电级别(10⁶–10⁹ Ω)", vi: "Có cấp chống tĩnh điện (10⁶–10⁹ Ω)" },
      { en: "Chemical & oil resistant", zh: "耐化学品与油污", vi: "Chống hóa chất & dầu" },
    ],
    specs: [
      { label: { en: "System", zh: "系统", vi: "Hệ thống" }, value: "Self-leveling" },
      { label: { en: "Thickness", zh: "厚度", vi: "Độ dày" }, value: "1 – 3 mm" },
      { label: { en: "Warranty", zh: "质保", vi: "Bảo hành" }, value: "5 years" },
      { label: { en: "Traffic", zh: "承重", vi: "Tải trọng" }, value: "Forklift rated" },
    ],
    image: "/images/product-epoxy-floor.jpg",
    applications: [
      { en: "Warehouses", zh: "仓库", vi: "Nhà kho" },
      { en: "Plants", zh: "厂房", vi: "Nhà máy" },
      { en: "Parking decks", zh: "停车场", vi: "Bãi đỗ xe" },
      { en: "Cleanrooms", zh: "洁净室", vi: "Phòng sạch" },
    ],
  },
  {
    code: "CAT-04",
    title: { en: "Weatherproof Exterior Paints", zh: "耐候外墙涂料", vi: "Sơn ngoại thất chịu thời tiết" },
    short: { en: "Fluorocarbon · Acrylic-polyurethane topcoats", zh: "氟碳·丙烯酸聚氨酯面漆", vi: "Fluorocarbon · acrylic-PU" },
    description: {
      en: "Fluorocarbon and acrylic-polyurethane topcoats with 15-year weatherability for commercial building facades. UV-stable, chalk-resistant, colour-retentive.",
      zh: "氟碳及丙烯酸聚氨酯面漆,15年耐候性,适用于商业建筑外墙。抗紫外线、抗粉化、保色性好。",
      vi: "Sơn phủ fluorocarbon và acrylic-PU với độ bền thời tiết 15 năm cho mặt tiền thương mại. Chống UV, chống phấn, giữ màu tốt.",
    },
    features: [
      { en: "15-year weatherability certification", zh: "15年耐候性认证", vi: "Chứng nhận chịu thời tiết 15 năm" },
      { en: "FEVE fluorocarbon option", zh: "可选FEVE氟碳体系", vi: "Tùy chọn FEVE fluorocarbon" },
      { en: "UV & chalk resistance", zh: "抗紫外线与抗粉化", vi: "Chống UV & phấn" },
      { en: "Wide RAL colour matching", zh: "RAL色卡广泛调色", vi: "Pha màu RAL đa dạng" },
    ],
    specs: [
      { label: { en: "Base", zh: "基料", vi: "Nhựa nền" }, value: "FEVE / AC-PU" },
      { label: { en: "Weatherability", zh: "耐候性", vi: "Chịu thời tiết" }, value: "15 years" },
      { label: { en: "Gloss", zh: "光泽", vi: "Độ bóng" }, value: "Matte – Gloss" },
      { label: { en: "DFT", zh: "干膜厚度", vi: "DFT" }, value: "40 – 80 μm" },
    ],
    image: "/images/product-exterior.jpg",
    applications: [
      { en: "Facades", zh: "外墙", vi: "Mặt tiền" },
      { en: "Towers", zh: "塔楼", vi: "Tòa tháp" },
      { en: "Commercial buildings", zh: "商业建筑", vi: "Tòa thương mại" },
    ],
  },
  {
    code: "CAT-05",
    title: { en: "Architectural Wall Coatings", zh: "建筑墙面涂料", vi: "Sơn tường kiến trúc" },
    short: { en: "Interior emulsion · Elastic anti-crack · Stone-effect", zh: "内墙乳胶·弹性抗裂·仿石", vi: "Nhũ tương nội thất · đàn đàn chống nứt · vân đá" },
    description: {
      en: "Interior emulsion, exterior elastic anti-crack, stone-effect and fire-retardant systems for architectural projects. Low-VOC, Class A fire-rated grades available.",
      zh: "适用于建筑项目的内墙乳胶、外墙弹性抗裂、仿石及防火阻燃体系。低VOC,可选A级防火级别。",
      vi: "Nhũ tương nội thất, đàn hồi chống nứt ngoại thất, vân đá và hệ chống cháy cho công trình kiến trúc. VOC thấp, có cấp chống cháy Class A.",
    },
    features: [
      { en: "Class A fire-retardant option", zh: "可选A级防火阻燃", vi: "Tùy chọn chống cháy Class A" },
      { en: "Elastic anti-crack bridging", zh: "弹性抗裂桥接", vi: "Đàn hồi che nứt" },
      { en: "Stone-effect textured finishes", zh: "仿石纹理饰面", vi: "Bề mặt vân đá" },
      { en: "Low VOC < 50 g/L", zh: "低VOC < 50 g/L", vi: "VOC thấp < 50 g/L" },
    ],
    specs: [
      { label: { en: "Type", zh: "类型", vi: "Loại" }, value: "Emulsion / Elastic" },
      { label: { en: "Fire Rating", zh: "防火等级", vi: "Cấp cháy" }, value: "Class A" },
      { label: { en: "VOC", zh: "VOC", vi: "VOC" }, value: "< 50 g/L" },
      { label: { en: "Finish", zh: "饰面", vi: "Bề mặt" }, value: "Smooth / Textured" },
    ],
    image: "/images/product-architectural.jpg",
    applications: [
      { en: "Interiors", zh: "室内", vi: "Nội thất" },
      { en: "Exteriors", zh: "室外", vi: "Ngoại thất" },
      { en: "Public buildings", zh: "公共建筑", vi: "Công trình công cộng" },
      { en: "Schools", zh: "学校", vi: "Trường học" },
    ],
  },
  {
    code: "CAT-06",
    title: { en: "Custom Engineered Coatings", zh: "定制工程涂料", vi: "Sơn kỹ thuật theo yêu cầu" },
    short: { en: "Custom color · Hardness · Corrosion grade · OEM/ODM", zh: "定制颜色·硬度·防腐等级·OEM/ODM", vi: "Màu · độ cứng · cấp ăn mòn · OEM/ODM" },
    description: {
      en: "Bespoke formulations tuned to your substrate, environment and performance spec. 12 senior chemists, sample in 7 days, full production in 30. OEM private-label packaging supported.",
      zh: "根据您的基材、环境及性能要求定制的配方。12名资深化学师,7天出样,30天量产。支持OEM贴牌包装。",
      vi: "Phối chế riêng theo bề mặt, môi trường và yêu cầu kỹ thuật. 12 kỹ sư hóa học cấp cao, mẫu trong 7 ngày, sản xuất trong 30 ngày. Hỗ trợ đóng gói OEM/nhãn riêng.",
    },
    features: [
      { en: "12 senior chemists in-house R&D", zh: "12名资深化学师自主研发", vi: "12 kỹ sư hóa học R&D nội bộ" },
      { en: "Sample in 7 days, production in 30", zh: "7天出样,30天量产", vi: "Mẫu 7 ngày, sản xuất 30 ngày" },
      { en: "Custom colour, hardness, corrosion grade", zh: "定制颜色、硬度、防腐等级", vi: "Màu, độ cứng, cấp ăn mòn theo yêu cầu" },
      { en: "OEM private-label packaging", zh: "OEM贴牌包装", vi: "Đóng gói nhãn riêng OEM" },
    ],
    specs: [
      { label: { en: "R&D", zh: "研发", vi: "R&D" }, value: "12 chemists" },
      { label: { en: "Sample", zh: "样品", vi: "Mẫu" }, value: "7 days" },
      { label: { en: "Production", zh: "生产", vi: "Sản xuất" }, value: "30 days" },
      { label: { en: "MOQ", zh: "起订量", vi: "MOQ" }, value: "200 kg" },
    ],
    image: "/images/lab.jpg",
    applications: [
      { en: "OEM distributors", zh: "OEM经销商", vi: "Nhà phân phối OEM" },
      { en: "Specialty projects", zh: "特殊项目", vi: "Dự án đặc thù" },
      { en: "Private label", zh: "贴牌", vi: "Nhãn riêng" },
    ],
  },
];

export const whyUs: { no: string; title: LStr; desc: LStr }[] = [
  {
    no: "01",
    title: { en: "Factory Direct", zh: "工厂直供", vi: "Cung ứng từ nhà máy" },
    desc: { en: "50,000 t/yr in-house production. No middlemen, no reseller markup. OEM pricing at scale.", zh: "年产5万吨自主生产。无中间商,无加价。规模化OEM价格。", vi: "Năng lực 50.000 tấn/năm nội bộ. Không trung gian, không phụ phí. Giá OEM quy mô lớn." },
  },
  {
    no: "02",
    title: { en: "Export-Ready", zh: "出口就绪", vi: "Sẵn sàng xuất khẩu" },
    desc: { en: "22 years serving 60+ countries. Full export docs: CO, CIQ, MSDS, TDS, UN packaging.", zh: "22年服务60+国家。全套出口单证:CO、CIQ、MSDS、TDS、UN包装。", vi: "22 năm phục vụ 60+ quốc gia. Đầy đủ chứng từ: CO, CIQ, MSDS, TDS, đóng gói UN." },
  },
  {
    no: "03",
    title: { en: "Custom Formulation", zh: "定制配方", vi: "Phối chế theo yêu cầu" },
    desc: { en: "12 senior chemists. Custom color, hardness, corrosion grade, temperature rating. Sample in 7 days.", zh: "12名资深化学师。定制颜色、硬度、防腐等级、耐温等级。7天出样。", vi: "12 kỹ sư hóa học. Màu, độ cứng, cấp ăn mòn, cấp nhiệt theo yêu cầu. Mẫu trong 7 ngày." },
  },
  {
    no: "04",
    title: { en: "Stable Quality", zh: "品质稳定", vi: "Chất lượng ổn định" },
    desc: { en: "Batch-to-batch consistency guaranteed. Each batch ships with full QC report. 24-month warranty.", zh: "批次间一致性有保障。每批附完整QC报告。24个月质保。", vi: "Đồng đều giữa các lô. Mỗi lô kèm báo cáo QC đầy đủ. Bảo hành 24 tháng." },
  },
  {
    no: "05",
    title: { en: "Low MOQ", zh: "低起订量", vi: "MOQ thấp" },
    desc: { en: "200 kg MOQ. Mixed tones welcome. Trial orders for new distributors. Sample shipping in 48h.", zh: "200公斤起订。接受混色。支持新经销商试单。48小时寄样。", vi: "MOQ 200 kg. Nhận phối màu hỗn hợp. Đơn thử nghiệm cho nhà phân phối mới. Giao mẫu 48 giờ." },
  },
  {
    no: "06",
    title: { en: "OEM / Private Label", zh: "OEM / 贴牌", vi: "OEM / Nhãn riêng" },
    desc: { en: "Custom drum labels, branded packaging, marketing collateral. Your brand, our chemistry.", zh: "定制桶身标签、品牌包装、营销物料。您的品牌,我们的化学。", vi: "Nhãn thùng riêng, bao bì thương hiệu, tài liệu marketing. Thương hiệu của bạn, hóa học của chúng tôi." },
  },
  {
    no: "07",
    title: { en: "Engineering On-Site", zh: "现场工程支持", vi: "Hỗ trợ kỹ thuật tại hiện trường" },
    desc: { en: "Optional site survey, surface prep specification, and applicator training for large projects.", zh: "大型项目可选现场勘测、表面处理规范及施工培训。", vi: "Dự án lớn: khảo sát hiện trường, quy trình xử lý bề mặt, đào tạo thợ thi công." },
  },
  {
    no: "08",
    title: { en: "Full Certifications", zh: "认证齐全", vi: "Đầy đủ chứng nhận" },
    desc: { en: "ISO 9001, ISO 14001, CE, SGS tested, fire-rating Class A, low-VOC grades available.", zh: "ISO 9001、ISO 14001、CE、SGS检测,可选A级防火、低VOC级别。", vi: "ISO 9001, ISO 14001, CE, SGS, cấp cháy Class A, có cấp VOC thấp." },
  },
];

export const applications: { code: string; title: LStr; image: string }[] = [
  { code: "APP-01", title: { en: "Steel Structure Anti-Corrosion", zh: "钢结构防腐", vi: "Chống ăn mòn kết cấu thép" }, image: "/images/app-steel-structure.jpg" },
  { code: "APP-02", title: { en: "Industrial Floor Systems", zh: "工业地坪系统", vi: "Hệ sàn công nghiệp" }, image: "/images/app-floor-systems.jpg" },
  { code: "APP-03", title: { en: "Outdoor Equipment Weatherproof", zh: "户外设备耐候", vi: "Thiết bị ngoại thất chịu thời tiết" }, image: "/images/app-outdoor-equipment.jpg" },
  { code: "APP-04", title: { en: "Commercial Building Facades", zh: "商业建筑外墙", vi: "Mặt tiền tòa thương mại" }, image: "/images/app-building-facade.jpg" },
  { code: "APP-05", title: { en: "Ship Hull & Marine", zh: "船体与海洋", vi: "Thân tàu & hàng hải" }, image: "/images/app-ship-hull.jpg" },
  { code: "APP-06", title: { en: "Bridge & Infrastructure", zh: "桥梁与基础设施", vi: "Cầu & hạ tầng" }, image: "/images/app-bridge.jpg" },
];

export type ProjectCase = {
  code: string;
  location: LStr;
  year: string;
  title: LStr;
  summary: LStr;
  image: string;
  metrics: { label: LStr; value: string }[];
};

export const cases: ProjectCase[] = [
  {
    code: "CASE-001",
    location: { en: "Vietnam", zh: "越南", vi: "Việt Nam" },
    year: "2025",
    title: { en: "Amata Steel Plant — Full Anti-Corrosion Package", zh: "Amata钢铁厂——全套防腐方案", vi: "Nhà thép Amata — Gói chống ăn mòn toàn diện" },
    summary: {
      en: "12,000 m² of structural steel coated with epoxy zinc primer + polyurethane topcoat, completed in 45 days with full QC documentation.",
      zh: "12,000 m²钢结构采用环氧富锌底漆+聚氨酯面漆涂装,45天完成,附带完整QC文档。",
      vi: "12.000 m² kết cấu thép sơn lót epoxy giàm kẽm + lớp phủ PU, hoàn thành trong 45 ngày kèm hồ sơ QC đầy đủ.",
    },
    image: "/images/case-steel-plant.jpg",
    metrics: [
      { label: { en: "Area", zh: "面积", vi: "Diện tích" }, value: "12,000 m²" },
      { label: { en: "System", zh: "系统", vi: "Hệ thống" }, value: "Epoxy Zn + PU" },
      { label: { en: "Duration", zh: "工期", vi: "Thời gian" }, value: "45 days" },
    ],
  },
  {
    code: "CASE-002",
    location: { en: "Indonesia", zh: "印度尼西亚", vi: "Indonesia" },
    year: "2025",
    title: { en: "Cikarang Warehouse — 8,500 m² Epoxy Floor", zh: "Cikarang仓库——8,500 m²环氧地坪", vi: "Kho Cikarang — 8.500 m² sàn epoxy" },
    summary: {
      en: "Self-leveling epoxy with anti-skid topcoat. Forklift-rated, 5-year warranty, completed for a major logistics operator.",
      zh: "自流平环氧加防滑面漆。叉车承重,5年质保,为大型物流企业完工。",
      vi: "Epoxy tự chảy với lớp phủ chống trượt. Chịu xe nâng, bảo hành 5 năm, hoàn thành cho nhà điều hành logistics lớn.",
    },
    image: "/images/case-warehouse.jpg",
    metrics: [
      { label: { en: "Area", zh: "面积", vi: "Diện tích" }, value: "8,500 m²" },
      { label: { en: "System", zh: "系统", vi: "Hệ thống" }, value: "Self-leveling epoxy" },
      { label: { en: "Warranty", zh: "质保", vi: "Bảo hành" }, value: "5 years" },
    ],
  },
  {
    code: "CASE-003",
    location: { en: "Saudi Arabia", zh: "沙特阿拉伯", vi: "Ả Rập Xê Út" },
    year: "2024",
    title: { en: "Riyadh Commercial Tower — Exterior Facade", zh: "利雅得商业塔楼——外墙", vi: "Tháp thương mại Riyadh — Mặt tiền" },
    summary: {
      en: "Fluorocarbon topcoat system across 22,000 m² of facade with 15-year weatherability certification.",
      zh: "22,000 m²外墙采用氟碳面漆系统,附带15年耐候性认证。",
      vi: "22.000 m² mặt tiền sử dụng hệ fluorocarbon, kèm chứng nhận chịu thời tiết 15 năm.",
    },
    image: "/images/case-tower.jpg",
    metrics: [
      { label: { en: "Area", zh: "面积", vi: "Diện tích" }, value: "22,000 m²" },
      { label: { en: "System", zh: "系统", vi: "Hệ thống" }, value: "FEVE fluorocarbon" },
      { label: { en: "Weatherability", zh: "耐候性", vi: "Chịu thời tiết" }, value: "15 years" },
    ],
  },
];

export const certifications: { code: string; title: LStr }[] = [
  { code: "ISO 9001", title: { en: "Quality Management", zh: "质量管理", vi: "Quản lý chất lượng" } },
  { code: "ISO 14001", title: { en: "Environmental", zh: "环境管理", vi: "Môi trường" } },
  { code: "CE", title: { en: "EU Conformity", zh: "欧盟符合性", vi: "Phù hợp EU" } },
  { code: "SGS", title: { en: "Test Reports", zh: "检测报告", vi: "Báo cáo kiểm tra" } },
  { code: "Class A", title: { en: "Fire Rating", zh: "防火等级", vi: "Cấp cháy" } },
  { code: "Low VOC", title: { en: "< 50 g/L", zh: "< 50 g/L", vi: "< 50 g/L" } },
];

export const testimonials: { quote: LStr; name: string; role: LStr }[] = [
  {
    quote: {
      en: "HONG NGUYEN supplied 280 tons of epoxy floor coating for our new logistics hub in Jakarta. Quality was consistent across batches and the technical team helped us tune the formula for tropical humidity.",
      zh: "宏源为我们雅加达的新物流中心供应了280吨环氧地坪涂料。批次质量稳定,技术团队协助我们针对热带湿度调整配方。",
      vi: "HONG NGUYEN cung cấp 280 tấn sơn nền epoxy cho trung tâm logistics mới tại Jakarta. Chất lượng đồng đều giữa các lô và đội kỹ thuật giúp điều chỉnh công thức cho khí hậu nhiệt đới.",
    },
    name: "Budi Hartono",
    role: { en: "Procurement Director, PT. Sinar Mas Logistics", zh: "采购总监,PT. Sinar Mas Logistics", vi: "Giám đốc mua hàng, PT. Sinar Mas Logistics" },
  },
  {
    quote: {
      en: "We've been sourcing anti-corrosion paint from HONG NGUYEN for our bridge projects for 7 years. Salt spray test results consistently exceed 1500 hours. Reliable partner.",
      zh: "我们7年来一直从宏源采购桥梁项目的防腐涂料。盐雾测试结果持续超过1500小时。可靠的合作伙伴。",
      vi: "Chúng tôi nhập sơn chống ăn mòn từ HONG NGUYEN cho dự án cầu suốt 7 năm. Kết quả phun muối luôn vượt 1500 giờ. Đối tác đáng tin cậy.",
    },
    name: "Eng. Mohammed Al-Rashid",
    role: { en: "Project Manager, Riyadh Infrastructure Co.", zh: "项目经理,利雅得基础设施公司", vi: "Quản lý dự án, Riyadh Infrastructure Co." },
  },
  {
    quote: {
      en: "We needed a custom high-temp coating rated 500°C for our boiler manufacturing line. HONG NGUYEN's R&D team developed a working sample in 10 days, full production in 30. Outstanding OEM service.",
      zh: "我们需要为锅炉生产线定制耐500°C的高温涂料。宏源研发团队10天开发出可用样品,30天量产。出色的OEM服务。",
      vi: "Chúng tôi cần sơn chịu nhiệt 500°C cho dây chuyền sản xuất lò hơi. Đội R&D HONG NGUYEN ra mẫu trong 10 ngày, sản xuất trong 30 ngày. Dịch vụ OEM xuất sắc.",
    },
    name: "Lars Eriksson",
    role: { en: "Technical Director, Nordic Boiler Systems AB", zh: "技术总监,北欧锅炉系统公司", vi: "Giám đốc kỹ thuật, Nordic Boiler Systems AB" },
  },
];

export const partners = ["SINAR MAS", "VINCI", "POSCO", "SKANSKA", "CSCEC", "SIEMENS"];

export const exportRegions: LStr[] = [
  { en: "SE Asia", zh: "东南亚", vi: "Đông Nam Á" },
  { en: "Middle East", zh: "中东", vi: "Trung Đông" },
  { en: "Africa", zh: "非洲", vi: "Châu Phi" },
  { en: "South America", zh: "南美", vi: "Nam Mỹ" },
  { en: "Eastern Europe", zh: "东欧", vi: "Đông Âu" },
  { en: "Central Asia", zh: "中亚", vi: "Trung Á" },
];

// Solutions page — industry verticals
export const solutions: {
  code: string;
  title: LStr;
  desc: LStr;
  products: LStr[];
  icon: string;
  image: string;
}[] = [
  {
    code: "SOL-01",
    title: { en: "Oil, Gas & Petrochemical", zh: "石油、天然气与石化", vi: "Dầu khí & Hóa chất" },
    desc: { en: "Corrosion-critical assets: storage tanks, refineries, pipelines. Multi-coat epoxy/PU systems rated for chemical immersion and C5 marine environments.", zh: "腐蚀关键资产:储罐、炼厂、管道。多层环氧/PU体系,适用于化学品浸渍与C5海洋环境。", vi: "Tài sản trọng yếu ăn mòn: bồn chứa, lọc hóa dầu, đường ống. Hệ epoxy/PU nhiều lớp cho môi trường ngâm hóa chất và biển C5." },
    products: [
      { en: "Anti-Corrosion Coatings", zh: "防腐涂料", vi: "Sơn chống ăn mòn" },
      { en: "High-Temperature Coatings", zh: "耐高温涂料", vi: "Sơn chịu nhiệt cao" },
    ],
    icon: "Factory",
    image: "/images/sol-oil-gas.jpg",
  },
  {
    code: "SOL-02",
    title: { en: "Marine & Offshore", zh: "海洋与离岸", vi: "Hàng hải & ngoài khơi" },
    desc: { en: "Ship hulls, offshore platforms and splash zones. Salt-spray ≥ 1500 h, cathodic-disbondment resistant systems with full IMO documentation.", zh: "船体、海上平台及飞溅区。盐雾≥1500小时,抗阴极剥离体系,附完整IMO文件。", vi: "Thân tàu, giàn khoan ngoài khơi và vùng văng. Phun muối ≥ 1500 giờ, chống bong tróc catot, hồ sơ IMO đầy đủ." },
    products: [
      { en: "Anti-Corrosion Coatings", zh: "防腐涂料", vi: "Sơn chống ăn mòn" },
      { en: "Custom Engineered Coatings", zh: "定制工程涂料", vi: "Sơn kỹ thuật theo yêu cầu" },
    ],
    icon: "Ship",
    image: "/images/sol-marine.jpg",
  },
  {
    code: "SOL-03",
    title: { en: "Power & Energy", zh: "电力与能源", vi: "Điện năng & Năng lượng" },
    desc: { en: "Boilers, stacks, exhausts and turbine housings. Heat-resistant silicone systems up to 600°C with thermal-cycling stability.", zh: "锅炉、烟囱、排气管及涡轮壳体。耐600°C有机硅体系,抗热循环。", vi: "Lò hơi, ống khói, ống xả và vỏ tuabin. Hệ silicone chịu 600°C, ổn định sốc nhiệt." },
    products: [
      { en: "High-Temperature Coatings", zh: "耐高温涂料", vi: "Sơn chịu nhiệt cao" },
      { en: "Custom Engineered Coatings", zh: "定制工程涂料", vi: "Sơn kỹ thuật theo yêu cầu" },
    ],
    icon: "Flame",
    image: "/images/sol-power.jpg",
  },
  {
    code: "SOL-04",
    title: { en: "Infrastructure & Bridges", zh: "基础设施与桥梁", vi: "Hạ tầng & Cầu" },
    desc: { en: "Long-span steel bridges and transit infrastructure. 25-year design-life coating systems with in-house applicator training.", zh: "大跨度钢桥与交通基础设施。25年设计寿命涂料体系,含自主施工培训。", vi: "Cầu thép nhịp dài và hạ tầng giao thông. Hệ sơn thiết kế 25 năm, kèm đào tạo thi công nội bộ." },
    products: [
      { en: "Anti-Corrosion Coatings", zh: "防腐涂料", vi: "Sơn chống ăn mòn" },
      { en: "Custom Engineered Coatings", zh: "定制工程涂料", vi: "Sơn kỹ thuật theo yêu cầu" },
    ],
    icon: "Construction",
    image: "/images/sol-infrastructure.jpg",
  },
  {
    code: "SOL-05",
    title: { en: "Commercial Architecture", zh: "商业建筑", vi: "Kiến trúc thương mại" },
    desc: { en: "Towers, malls and public buildings. FEVE fluorocarbon and elastic anti-crack systems with 15-year weatherability.", zh: "塔楼、商场及公共建筑。FEVE氟碳与弹性抗裂体系,15年耐候性。", vi: "Tháp, trung tâm thương mại và công trình công cộng. Hệ FEVE fluorocarbon và đàn hồi chống nứt, chịu thời tiết 15 năm." },
    products: [
      { en: "Weatherproof Exterior Paints", zh: "耐候外墙涂料", vi: "Sơn ngoại thất chịu thời tiết" },
      { en: "Architectural Wall Coatings", zh: "建筑墙面涂料", vi: "Sơn tường kiến trúc" },
    ],
    icon: "Building2",
    image: "/images/sol-architecture.jpg",
  },
  {
    code: "SOL-06",
    title: { en: "Industrial Flooring", zh: "工业地坪", vi: "Sàn công nghiệp" },
    desc: { en: "Warehouses, plants and parking decks. Self-leveling, anti-static and heavy-duty mortar systems rated for forklift traffic.", zh: "仓库、厂房与停车场。自流平、防静电及重型砂浆体系,可承受叉车通行。", vi: "Nhà kho, nhà máy và bãi đỗ xe. Hệ tự chảy, chống tĩnh điện và vữa nặng chịu xe nâng." },
    products: [{ en: "Epoxy Floor Coatings", zh: "环氧地坪涂料", vi: "Sơn nền epoxy" }],
    icon: "LayoutGrid",
    image: "/images/sol-flooring.jpg",
  },
];

// Process steps for About / Solutions pages
export const process: { no: string; title: LStr; desc: LStr }[] = [
  {
    no: "01",
    title: { en: "Consultation & Spec", zh: "咨询与规格", vi: "Tư vấn & thông số" },
    desc: { en: "Tell us substrate, environment and performance targets. Our engineers propose a system within one business day.", zh: "告诉我们基材、环境与性能目标。工程师在一个工作日内提出方案。", vi: "Cho biết bề mặt, môi trường và yêu cầu. Kỹ sư đề xuất hệ thống trong một ngày làm việc." },
  },
  {
    no: "02",
    title: { en: "Sample & Formulation", zh: "样品与配方", vi: "Mẫu & phối chế" },
    desc: { en: "Lab samples in 7 days. Custom color, hardness and corrosion grade tuned to your spec.", zh: "7天实验室出样。按规格定制颜色、硬度与防腐等级。", vi: "Mẫu phòng thí nghiệm trong 7 ngày. Màu, độ cứng, cấp ăn mòn theo yêu cầu." },
  },
  {
    no: "03",
    title: { en: "Production & QC", zh: "生产与品控", vi: "Sản xuất & QC" },
    desc: { en: "50,000 t/yr plant. Each batch ships with a full QC report and 24-month warranty.", zh: "5万吨/年工厂。每批附完整QC报告,24个月质保。", vi: "Nhà máy 50.000 tấn/năm. Mỗi lô kèm báo cáo QC đầy đủ, bảo hành 24 tháng." },
  },
  {
    no: "04",
    title: { en: "Export & Support", zh: "出口与支持", vi: "Xuất khẩu & hỗ trợ" },
    desc: { en: "CO, CIQ, MSDS, TDS and UN packaging. On-site applicator training for large projects.", zh: "CO、CIQ、MSDS、TDS及UN包装。大型项目提供现场施工培训。", vi: "CO, CIQ, MSDS, TDS và đóng gói UN. Đào tạo thi công tại hiện trường cho dự án lớn." },
  },
];

// Solutions page compact process (4 steps)
export const solutionsProcess: { no: string; t: LStr; d: LStr }[] = [
  { no: "01", t: { en: "Consult", zh: "咨询", vi: "Tư vấn" }, d: { en: "Share substrate, environment, performance targets.", zh: "告知基材、环境、性能目标。", vi: "Cung cấp bề mặt, môi trường, yêu cầu." } },
  { no: "02", t: { en: "Sample", zh: "样品", vi: "Mẫu" }, d: { en: "Lab sample in 7 days. Tune color, hardness, grade.", zh: "7天出样。调整颜色、硬度、等级。", vi: "Mẫu trong 7 ngày. Điều chỉnh màu, độ cứng, cấp." } },
  { no: "03", t: { en: "Produce", zh: "生产", vi: "Sản xuất" }, d: { en: "50K t/yr plant. Full QC report per batch.", zh: "5万吨/年工厂。每批附QC报告。", vi: "Nhà máy 50K tấn/năm. Báo cáo QC mỗi lô." } },
  { no: "04", t: { en: "Export", zh: "出口", vi: "Xuất khẩu" }, d: { en: "CO, CIQ, MSDS, TDS, UN packaging. On-site training.", zh: "CO、CIQ、MSDS、TDS、UN包装。现场培训。", vi: "CO, CIQ, MSDS, TDS, UN. Đào tạo tại chỗ." } },
];

// News items
export const news: {
  date: string;
  category: string; // key into ui "cat.*"
  title: LStr;
  excerpt: LStr;
  read: LStr;
  image: string;
}[] = [
  {
    date: "2025-09-18",
    category: "Product Launch",
    title: { en: "New FEVE Fluorocarbon Topcoat — 15-Year Weatherability Certified", zh: "全新FEVE氟碳面漆——通过15年耐候性认证", vi: "Sơn phủ FEVE fluorocarbon mới — Chứng nhận chịu thời tiết 15 năm" },
    excerpt: {
      en: "Our latest fluorocarbon topcoat system has passed 15-year accelerated weatherability testing, now available for OEM private-label orders across the Middle East and SE Asia.",
      zh: "我们最新的氟碳面漆系统已通过15年加速耐候性测试,现面向中东与东南亚提供OEM贴牌订单。",
      vi: "Hệ sơn phủ fluorocarbon mới đã vượt thử nghiệm thời tiết tăng tốc 15 năm, hiện nhận đơn OEM/nhãn riêng tại Trung Đông và Đông Nam Á.",
    },
    read: { en: "4 min read", zh: "4 分钟阅读", vi: "4 phút đọc" },
    image: "/images/news-1.jpg",
  },
  {
    date: "2025-08-02",
    category: "Project",
    title: { en: "12,000 m² Anti-Corrosion Package Completed at Amata Steel Plant", zh: "Amata钢铁厂12,000 m²防腐方案完工", vi: "Hoàn thành gói chống ăn mòn 12.000 m² tại nhà thép Amata" },
    excerpt: {
      en: "Full epoxy zinc primer + PU topcoat system delivered in 45 days with zero coating-failure defects across the structural steel package.",
      zh: "环氧富锌底漆+PU面漆全套系统45天交付,钢结构涂装零失效缺陷。",
      vi: "Hệ lót epoxy giàu kẽm + phủ PU giao trong 45 ngày, không phát hiện lỗi sơn trên gói kết cấu thép.",
    },
    read: { en: "3 min read", zh: "3 分钟阅读", vi: "3 phút đọc" },
    image: "/images/news-2.jpg",
  },
  {
    date: "2025-06-21",
    category: "Certification",
    title: { en: "ISO 14001:2015 Environmental Certification Renewed", zh: "ISO 14001:2015环境认证续证", vi: "Gia hạn chứng nhận môi trường ISO 14001:2015" },
    excerpt: {
      en: "Our environmental management system has been re-certified, reinforcing our commitment to low-VOC, sustainable coating manufacturing.",
      zh: "我们的环境管理体系已完成再认证,印证我们对低VOC、可持续涂料制造的承诺。",
      vi: "Hệ thống quản lý môi trường đã được tái chứng nhận, khẳng định cam kết sản xuất sơn VOC thấp, bền vững.",
    },
    read: { en: "2 min read", zh: "2 分钟阅读", vi: "2 phút đọc" },
    image: "/images/news-3.jpg",
  },
  {
    date: "2025-04-10",
    category: "Export",
    title: { en: "HONG NGUYEN Expands B2B Export to 60+ Countries", zh: "宏源B2B出口扩展至60+国家", vi: "HONG NGUYEN mở rộng xuất khẩu B2B tới 60+ quốc gia" },
    excerpt: {
      en: "New distributor partnerships across South America and Eastern Europe bring our active export footprint to over 60 countries worldwide.",
      zh: "南美与东欧新增经销商合作,使我们的活跃出口足迹覆盖全球60+国家。",
      vi: "Đối tác phân phối mới tại Nam Mỹ và Đông Âu đưa mạng lưới xuất khẩu lên hơn 60 quốc gia.",
    },
    read: { en: "3 min read", zh: "3 分钟阅读", vi: "3 phút đọc" },
    image: "/images/news-4.jpg",
  },
  {
    date: "2025-02-15",
    category: "R&D",
    title: { en: "R&D Lab Upgraded — 12 Senior Chemists, New Spectrophotometry Suite", zh: "研发实验室升级——12名资深化学师,新增光谱分析套件", vi: "Nâng cấp phòng R&D — 12 kỹ sư hóa học, bộ quang phổ mới" },
    excerpt: {
      en: "Our coatings R&D lab has added a dedicated spectrophotometry and salt-spray testing suite, cutting sample turnaround to 7 days.",
      zh: "我们的涂料研发实验室新增专用光谱分析与盐雾测试套件,样品周转缩短至7天。",
      vi: "Phòng R&D sơn bổ sung bộ quang phổ và phun muối riêng, rút ngắn giao mẫu xuống 7 ngày.",
    },
    read: { en: "4 min read", zh: "4 分钟阅读", vi: "4 phút đọc" },
    image: "/images/news-5.jpg",
  },
  {
    date: "2024-11-30",
    category: "Industry",
    title: { en: "How Low-VOC Formulations Are Reshaping Industrial Coatings", zh: "低VOC配方如何重塑工业涂料", vi: "Công thức VOC thấp đang định hình lại sơn công nghiệp" },
    excerpt: {
      en: "An engineering briefing on how sub-50 g/L VOC chemistries maintain performance while meeting tightening environmental regulations.",
      zh: "一篇工程简报,探讨低于50 g/L的VOC配方如何在趋严的环保法规下保持性能。",
      vi: "Tài liệu kỹ thuật về công thức VOC dưới 50 g/L duy trì hiệu suất trong bối cảnh quy định môi trường ngày càng khắt khe.",
    },
    read: { en: "6 min read", zh: "6 分钟阅读", vi: "6 phút đọc" },
    image: "/images/news-6.jpg",
  },
];

// FAQ
export const faqs: { q: LStr; a: LStr }[] = [
  {
    q: { en: "What is your Minimum Order Quantity (MOQ)?", zh: "起订量(MOQ)是多少?", vi: "Số lượng đặt hàng tối thiểu (MOQ) là bao nhiêu?" },
    a: { en: "Our standard MOQ is 200 kg. Mixed tones within the same product family are welcome, which makes us ideal for trial orders from new distributors. Sample quantities can be shipped within 48 hours.", zh: "标准起订量为200公斤。同系列产品接受混色,非常适合新经销商试单。样品可在48小时内寄出。", vi: "MOQ tiêu chuẩn là 200 kg. Nhận phối màu hỗn hợp cùng dòng sản phẩm, rất phù hợp cho đơn thử nghiệm của nhà phân phối mới. Mẫu giao trong 48 giờ." },
  },
  {
    q: { en: "How fast can you deliver a custom formulation sample?", zh: "定制配方样品多久能交付?", vi: "Mẫu phối chế theo yêu cầu giao trong bao lâu?" },
    a: { en: "For custom-engineered coatings, our R&D team (12 senior chemists) typically delivers a working lab sample within 7 days, and scales to full production within 30 days of sample approval.", zh: "对于定制工程涂料,我们的研发团队(12名资深化学师)通常在7天内交付实验室样品,样品确认后30天内量产。", vi: "Với sơn kỹ thuật theo yêu cầu, đội R&D (12 kỹ sư hóa học) giao mẫu phòng thí nghiệm trong 7 ngày, sản xuất hàng loạt trong 30 ngày sau khi duyệt mẫu." },
  },
  {
    q: { en: "Which certifications and export documents do you provide?", zh: "你们提供哪些认证与出口单证?", vi: "Các chứng nhận và chứng từ xuất khẩu nào được cung cấp?" },
    a: { en: "Every shipment is backed by ISO 9001:2015, ISO 14001:2015, CE and SGS test reports. Export documents include Certificate of Origin (CO), CIQ, MSDS, TDS and UN packaging as required by destination.", zh: "每批出货均附ISO 9001:2015、ISO 14001:2015、CE及SGS检测报告。出口单证包括原产地证(CO)、CIQ、MSDS、TDS及UN包装(按目的国要求)。", vi: "Mỗi lô hàng kèm ISO 9001:2015, ISO 14001:2015, CE và báo cáo SGS. Chứng từ gồm CO, CIQ, MSDS, TDS và đóng gói UN theo yêu cầu quốc gia nhập." },
  },
  {
    q: { en: "Do you offer OEM / private-label packaging?", zh: "是否提供OEM/贴牌包装?", vi: "Có hỗ trợ đóng gói OEM / nhãn riêng không?" },
    a: { en: "Yes. We provide custom drum labels, branded packaging and marketing collateral. Your brand, our chemistry — with full formulation confidentiality.", zh: "是的。我们提供定制桶身标签、品牌包装及营销物料。您的品牌,我们的化学——配方完全保密。", vi: "Có. Cung cấp nhãn thùng riêng, bao bì thương hiệu và tài liệu marketing. Thương hiệu bạn, hóa học chúng tôi — bảo mật công thức tuyệt đối." },
  },
  {
    q: { en: "What is the salt-spray resistance of your anti-corrosion systems?", zh: "你们的防腐系统盐雾耐受性如何?", vi: "Khả năng chịu phun muối của hệ chống ăn mòn là bao lâu?" },
    a: { en: "Our standard anti-corrosion systems are rated ≥ 1000 hours per ASTM B117. Marine-grade and custom systems regularly exceed 1500 hours in third-party SGS/BV/Intertek testing.", zh: "标准防腐系统按ASTM B117达≥1000小时。海洋级及定制系统在SGS/BV/Intertek第三方检测中常超1500小时。", vi: "Hệ chống ăn mòn tiêu chuẩn đạt ≥ 1000 giờ theo ASTM B117. Cấp hàng hải và hệ riêng thường vượt 1500 giờ trong kiểm tra SGS/BV/Intertek." },
  },
  {
    q: { en: "Do you provide on-site engineering and applicator training?", zh: "是否提供现场工程与施工培训?", vi: "Có hỗ trợ kỹ thuật và đào tạo thi công tại hiện trường không?" },
    a: { en: "For large projects we offer optional site survey, surface-preparation specification and applicator training to ensure the coating system performs as designed in the field.", zh: "大型项目可选现场勘测、表面处理规范及施工培训,确保涂料系统在现场按设计性能发挥。", vi: "Dự án lớn: khảo sát hiện trường, quy trình xử lý bề mặt và đào tạo thợ thi công để hệ sơn đạt hiệu suất thiết kế." },
  },
  {
    q: { en: "What is your quality warranty?", zh: "你们的质保期多久?", vi: "Thời gian bảo hành là bao lâu?" },
    a: { en: "Every batch ships with a full QC report and is covered by a 24-month quality warranty. System-specific warranties (e.g. 5-year epoxy floor, 15-year fluorocarbon facade) apply where stated.", zh: "每批附完整QC报告,享24个月质保。特定系统另有专项质保(如环氧地坪5年、氟碳外墙15年)。", vi: "Mỗi lô kèm báo cáo QC, bảo hành 24 tháng. Có bảo hành riêng theo hệ (vd. sàn epoxy 5 năm, mặt tiền fluorocarbon 15 năm)." },
  },
  {
    q: { en: "Which regions do you export to?", zh: "你们出口到哪些地区?", vi: "Xuất khẩu tới những khu vực nào?" },
    a: { en: "We currently serve 60+ countries across SE Asia, the Middle East, Africa, South America, Eastern Europe and Central Asia, with established logistics and distributor support in each region.", zh: "我们目前服务东南亚、中东、非洲、南美、东欧及中亚60+国家,各区域均有成熟的物流与经销商支持。", vi: "Hiện phục vụ 60+ quốc gia tại Đông Nam Á, Trung Đông, Châu Phi, Nam Mỹ, Đông Âu và Trung Á, với logistics và phân phối sẵn có." },
  },
];

// About page capability pillars
export const capabilities: { icon: string; t: LStr; d: LStr }[] = [
  { icon: "Factory", t: { en: "Production", zh: "生产", vi: "Sản xuất" }, d: { en: "50,000 t/yr in-house plant. No reseller markup.", zh: "5万吨/年自主工厂。无加价。", vi: "50.000 tấn/năm nội bộ. Không phụ phí." } },
  { icon: "FlaskConical", t: { en: "R&D Lab", zh: "研发实验室", vi: "Phòng R&D" }, d: { en: "12 senior chemists. Sample in 7 days.", zh: "12名资深化学师。7天出样。", vi: "12 kỹ sư hóa học. Mẫu 7 ngày." } },
  { icon: "Globe2", t: { en: "Export Desk", zh: "出口部门", vi: "Bộ phận xuất khẩu" }, d: { en: "CO, CIQ, MSDS, TDS, UN packaging.", zh: "CO、CIQ、MSDS、TDS、UN包装。", vi: "CO, CIQ, MSDS, TDS, đóng gói UN." } },
  { icon: "Truck", t: { en: "Logistics", zh: "物流", vi: "Logistics" }, d: { en: "Lead time 7–15 days. Sample ships in 48h.", zh: "交期7–15天。48小时寄样。", vi: "Giao hàng 7–15 ngày. Mẫu 48 giờ." } },
];

// About page story bullets
export const storyBullets: LStr[] = [
  { en: "In-house QC lab per batch", zh: "每批配备内部QC实验室", vi: "Phòng QC nội bộ theo lô" },
  { en: "12 senior formulation chemists", zh: "12名资深配方化学师", vi: "12 kỹ sư phối chế cấp cao" },
  { en: "Full ISO 9001 / 14001 traceability", zh: "ISO 9001 / 14001全流程可追溯", vi: "Truy xuất ISO 9001 / 14001 đầy đủ" },
  { en: "OEM private-label packaging", zh: "OEM贴牌包装", vi: "Đóng gói nhãn riêng OEM" },
];

// Home core-business chips
export const coreChips: LStr[] = [
  { en: "ISO 9001 Traceable", zh: "ISO 9001可追溯", vi: "Truy xuất ISO 9001" },
  { en: "In-house QC Lab", zh: "内部QC实验室", vi: "Phòng QC nội bộ" },
  { en: "OEM/ODM", zh: "OEM/ODM", vi: "OEM/ODM" },
  { en: "Export to 60+ countries", zh: "出口60+国家", vi: "Xuất khẩu 60+ quốc gia" },
];

// Cases outcomes band stats
export const caseOutcomes: { v: string; l: LStr }[] = [
  { v: "42,500+", l: { en: "m² coated in featured cases", zh: "m² 精选案例涂装面积", vi: "m² sơn trong dự án tiêu biểu" } },
  { v: "0", l: { en: "coating-failure defects reported", zh: "起涂层失效缺陷", vi: "lỗi sơn được báo cáo" } },
  { v: "60+", l: { en: "countries served", zh: "服务国家", vi: "quốc gia phục vụ" } },
  { v: "24 mo", l: { en: "quality warranty standard", zh: "标准质保期", vi: "bảo hành tiêu chuẩn" } },
];
