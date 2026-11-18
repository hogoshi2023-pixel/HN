// build-data.mjs — 单一事实源：HONG NGUYEN 网站数据生成器
// 用法: node scripts/build-data.mjs  → 重新生成 src/lib/data.ts
//
// ⚠️ 内部文件：`factory` 字段为原厂真实型号，仅用于内部对照，绝不写入生成的 data.ts。
// 对外一律使用 HN-xxx 型号（既定合规立场：供应商信息不对外披露）。
// 所有技术参数取自工厂原版 TDS 文本，未做编造；发明的参数一律不落库。

import { writeFileSync, readFileSync } from "node:fs";
import { TR as TR_ES } from "./locales-es.mjs";
import { TR as TR_AR } from "./locales-ar.mjs";

// es/ar 译文按英文原文索引（scripts/apply-locales.mjs 从翻译 JSON 生成；查不到回退英文）
const TR = { es: TR_ES, ar: TR_AR };
const tr5 = (lang, en) => TR[lang][en] ?? en;

const L = (en, zh, vi) => ({ en, zh, vi });

// ─────────────────────────────────────────────────────────────────────────────
// 1. 参数标签字典（三语，一次性翻译）
// ─────────────────────────────────────────────────────────────────────────────
const PLABEL = {
  resin: L("Binder / resin", "漆基", "Nhựa nền"),
  color: L("Colour", "颜色", "Màu sắc"),
  mix: L("Mix ratio (base : hardener)", "混合比例（漆基：固化剂）", "Tỷ lệ pha (đế : chất đóng rắn)"),
  potlife: L("Pot life", "混合使用期", "Thời gian sử dụng hỗn hợp"),
  flash: L("Flash point", "闪点", "Điểm bắt lửa"),
  density: L("Density", "比重", "Khối lượng riêng"),
  solids: L("Volume solids", "体积固体含量", "Hàm lượng rắn theo thể tích"),
  coverage: L("Theoretical spreading rate", "理论涂布率", "Suất sơn lý thuyết"),
  dry: L("Drying (touch-dry / full cure)", "干燥时间（表干 / 完全固化）", "Thời gian khô (chạm khô / đóng rắn hoàn toàn)"),
  recoat: L("Recoating interval (min / max)", "重涂间隔（最小 / 最大）", "Khoảng thời gian sơn lại (tối thiểu / tối đa)"),
  finish: L("Finish", "漆面", "Bề mặt"),
  dft: L("Recommended DFT", "推荐干膜厚度", "Độ dày màng khô khuyến nghị"),
  pack: L("Packaging", "包装", "Đóng gói"),
  method: L("Application methods", "施工方法", "Phương pháp thi công"),
  thinner: L("Thinner (max, by method)", "稀释剂（最大用量）", "Dung môi pha (tối đa)"),
  cleaner: L("Cleaner", "清洗剂", "Dung dịch vệ sinh"),
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. 表面处理预设（三语）
// ─────────────────────────────────────────────────────────────────────────────
const SURFACE = {
  steel_blast: L(
    "Steel must be dry, free of loose paint, grease and dirt. Abrasive blast to Sa 2.5 (ISO 8501-1 / Swedish standard), surface profile Rugotest No.3 BN9a; remove dust and abrasives before coating. For special substrates consult our technical desk.",
    "钢铁表面必须干燥，无松散漆层、油脂及其他污垢。喷砂处理至瑞典标准 Sa2.5 级，表面粗糙度达 Rugotest No.3 BN9a；涂装前除去尘埃及砂粒。特殊表面处理请向我方技术部门咨询。",
    "Bề mặt thép phải khô, không có sơn bong tróc, dầu mỡ và bẩn. Phun cát đạt Sa 2.5 (ISO 8501-1), độ nhám Rugotest No.3 BN9a; loại bỏ bụi trước khi sơn. Bề mặt đặc biệt vui lòng liên hệ bộ phận kỹ thuật."
  ),
  steel_blast2: L(
    "Steel must be clean and dry, free of loose paint, grease and dirt. Abrasive blast to Sa 2.0; remove dust before coating. For special substrates consult our technical desk.",
    "钢铁表面必须清洁干燥，无松散漆层、油脂及其他污垢。喷砂处理至 Sa 2.0 级，涂装前除去尘埃。特殊表面处理请向我方技术部门咨询。",
    "Bề mặt thép phải sạch và khô, không có sơn bong, dầu mỡ, bẩn. Phun cát đạt Sa 2.0; loại bỏ bụi trước khi sơn. Bề mặt đặc biệt vui lòng liên hệ bộ phận kỹ thuật."
  ),
  steel_clean: L(
    "Surface must be clean and free of grease and dirt. When used directly as an anti-rust primer, de-rust the steel first; as intermediate or topcoat, apply over a sound primed surface. Consult our technical desk for special substrates.",
    "涂装表面必须清洁、无油脂及其他污垢。直接作为防锈底漆使用时须先对钢材除锈；作为中间漆或面漆须涂在完好的底漆表面上。特殊表面处理请向我方技术部门咨询。",
    "Bề mặt phải sạch, không dầu mỡ và bẩn. Dùng trực tiếp làm sơn lót chống gỉ phải xử lý gỉ trước; làm sơn lớp giữa hoặc bề mặt phải sơn lên lớp lót tốt. Bề mặt đặc biệt vui lòng liên hệ bộ phận kỹ thuật."
  ),
  prev_coat: L(
    "Surface must be clean, dry and free of contaminants; apply over an appropriate primer / intermediate coat. Previously contaminated surfaces: high-pressure fresh-water wash and let dry before recoating.",
    "施工表面必须清洁干燥，无松散漆层、油脂及其他污垢；须涂在预涂适当底漆（中间漆）的表面上。受污染表面重涂前须用高压淡水彻底清洗并晾干。",
    "Bề mặt phải sạch, khô, không nhiễm bẩn; sơn lên lớp lót/lớp giữa phù hợp. Bề mặt từng nhiễm bẩn: rửa nước ngọt áp lực cao và để khô trước khi sơn lại."
  ),
  concrete: L(
    "Concrete must be fully cured and dry (moisture content < 10 %, pH < 10); remove laitance, dust, grease and efflorescence; repair and level with putty where required. New concrete walls: allow ~30 days before putty and paint.",
    "混凝土必须完全固化、干燥（含水率 < 10%，pH < 10）；除去浮浆、尘埃、油污及泛碱物；缺陷处用腻子修补找平。新建混凝土墙面宜养护约 30 天后再批腻子涂装。",
    "Bê tông phải đông rắn hoàn toàn và khô (độ ẩm < 10 %, pH < 10); loại bỏ lớp mủ, bụi, dầu mỡ, phèn; trét vá và làm phẳng nơi cần. Tường bê tông mới: dưỡng hộ ~30 ngày trước khi trét và sơn."
  ),
  degrease_blast: L(
    "Remove grease with a suitable detergent and remove salts / dirt by high-pressure fresh water; abrasive blast to Sa 2.5 before application.",
    "用适当清洁剂清除油脂，用高压淡水除去盐分及污垢，喷砂处理至 Sa 2.5 级后施工。",
    "Tẩy dầu mỡ bằng dung dịch phù hợp, rửa muối/bẩn bằng nước ngọt áp lực cao; phun cát đạt Sa 2.5 trước khi thi công."
  ),
  tile: L(
    "Remove dust and grease; cut back loose or hollow tiles and level with putty; surface must be dry and sound before coating.",
    "清除表面灰尘、油污等杂物；松动起翘的瓷片应清除并用腻子补平；涂装前表面应干燥、坚实。",
    "Loại bỏ bụi và dầu mỡ; tháo gỡ gạch bị bong/lõm và trét vá phẳng; bề mặt phải khô và chắc trước khi sơn."
  ),
  factory_primer: L(
    "Over shop-primer or pre-primed steel: sweep blast or power-tool clean to St 3. Blast-cleaned bare steel should be coated within 2 hours; re-clean if contamination or flash rust appears. Substrate temperature must be at least 3 °C above dew point.",
    "涂有车间底漆的钢材：轻扫喷砂或动力工具二次除锈至 St 3 级。喷砂后的裸钢应在 2 小时内涂装，发现污染或返锈应重新处理。底材温度须高于露点 3 ℃ 以上。",
    "Thép đã sơn lót xưởng: phun cát nhẹ hoặc dụng cụ động lực đạt St 3. Thép phun cát nên sơn trong 2 giờ; nếu bẩn hoặc gỉ lại phải xử lý lại. Nhiệt độ bề mặt phải cao hơn điểm sương tối thiểu 3 °C."
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. 型号库（参数取自工厂原版 TDS；factory 仅内部对照，不输出）
//    system 数组格式: [code, coats, rate] — rate 为参考用量
// ─────────────────────────────────────────────────────────────────────────────
const CAT01 = [
  {
    code: "HN-AC-201", factory: "P5160",
    name: L("Epoxy Zinc-Rich Primer", "环氧富锌底漆", "Sơn lót epoxy giàu kẽm"),
    desc: L("Two-pack epoxy primer, 80 % zinc in dry film — long-term steel protection", "双组份环氧底漆，干膜含锌量达 80%，钢结构长效防护", "Sơn lót epoxy 2 thành phần, 80 % kẽm trong màng khô — bảo vệ thép lâu dài"),
    overview: L(
      "Two-pack chemically curing epoxy primer with up to 80 % metallic zinc in the dry film. Excellent corrosion resistance and abrasion resistance; also suitable as welding primer on blast-cleaned plate and as the anti-rust primer under fire-protection coatings.",
      "双组份化学固化型环氧底漆，干漆膜中锌粉含量高达 80%，具有优异的防腐蚀及耐磨损性能；可为喷砂后的钢板提供临时保护作为焊接底漆，也可用作防火涂料的配套高级防锈底漆。",
      "Sơn lót epoxy 2 thành phần hóa đóng rắn, hàm lượng bột kẽm tới 80 % trong màng khô. Chống ăn mòn và chống mài mòn xuất sắc; có thể làm sơn lót hàn trên thép phun cát và sơn lót chống gỉ dưới hệ sơn chống cháy."
    ),
    apps: L("Long-term protective primer for steel in medium to severe corrosivity (C3–C5).", "中等至严重腐蚀环境（C3–C5）中钢材表面的长效保护底漆。", "Sơn lót bảo vệ lâu dài cho thép trong môi trường ăn mòn trung bình đến nghiêm trọng (C3–C5)."),
    surface: "steel_blast",
    params: {
      resin: "Epoxy", color: "Red-grey / grey", mix: "10 : 1 (by weight)", potlife: "8 h (20 °C)",
      flash: "25 °C", density: "2.3 kg/L", solids: "49 %",
      coverage: "12 m²/L @ 40 μm DFT", dry: "1 h / 7 d (20 °C)", recoat: "1 h – 7 d", finish: "Matt",
      method: "Airless spray · brush · conventional spray", thinner: "brush 5–10 % · airless 10 % · spray 15 %", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-AC-201", 1, "0.10 L/m²"], ["HN-AC-302", 1, "0.10 L/m²"], ["HN-AC-405 | HN-AC-607", 2, "0.20 L/m²"]],
  },
  {
    code: "HN-AC-302", factory: "U5690",
    name: L("Epoxy MIO Intermediate", "环氧云铁中间漆", "Sơn lớp giữa epoxy mica sắt"),
    desc: L("Two-pack epoxy with micaceous iron oxide — the workhorse intermediate coat", "云母氧化铁双组份环氧中间漆，体系主力中间层", "Epoxy 2 thành phần chứa mica oxit sắt — lớp giữa chủ lực của hệ thống"),
    overview: L(
      "Two-pack epoxy coating pigmented with micaceous iron oxide. Resistant to sea water, corrosion, impact, mineral oils, aliphatic hydrocarbons and many chemicals; laminar MIO platelets reinforce barrier protection.",
      "以云母氧化铁为颜料配制的双组份环氧漆，具有耐海水、耐腐蚀、抗碰撞、耐矿物油、脂肪烃及多种化学品性能；片状云铁增强屏蔽防护。",
      "Sơn epoxy 2 thành phần chứa mica oxit sắt. Chịu nước biển, ăn mòn, va đập, dầu khoáng, hydrocarbon và nhiều hóa chất; lá mica tăng cường bảo vệ lớp chắn."
    ),
    apps: L("Primer / intermediate for epoxy systems on steel and concrete; quality intermediate and finish for bridges, car decks and structural steel buildings.", "环氧体系在钢铁与混凝土表面的底漆/中间漆；桥梁、车辆甲板、钢结构建筑的优质中间层。", "Sơn lót/lớp giữa cho hệ epoxy trên thép và bê tông; lớp giữa chất lượng cho cầu, sàn xe, nhà thép."),
    surface: "steel_clean",
    params: {
      resin: "Epoxy", color: "Black / grey", mix: "3 : 1 (by volume) = 5.8 : 1 (by weight)", potlife: "5 h (20 °C)",
      flash: "26 °C", density: "1.6 kg/L", solids: "48 %",
      coverage: "10 m²/L @ 48 μm DFT", dry: "4 h / 7 d (20 °C)", recoat: "6 h – 5 d", finish: "Flat",
      method: "Airless spray · brush · conventional spray", thinner: "brush 5–10 % · airless 5 % · spray 15 %", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-AC-201", 1, "0.10 L/m²"], ["HN-AC-302", 1, "0.10 L/m²"], ["HN-AC-405 | HN-AC-607", 2, "0.20 L/m²"]],
  },
  {
    code: "HN-AC-405", factory: "F5802",
    name: L("Acrylic-Polyurethane Topcoat", "丙烯酸聚氨酯面漆", "Sơn phủ acrylic-polyurethane"),
    desc: L("Two-pack PU finish with gloss & colour retention, non-yellowing", "双组份聚氨酯面漆，保光保色、不泛黄", "Sơn phủ PU 2 thành phần, giữ bóng giữ màu, không ố vàng"),
    overview: L(
      "Two-pack polyurethane finish with outstanding gloss and colour retention. Resistant to water, animal and vegetable oils, abrasion, impact and UV — for medium to severe corrosive environments. Non-yellowing chemical-resistant finish over epoxy primers/intermediates.",
      "双组份聚氨酯涂料，具有优异的保光及保色性；耐水、耐动植物油、耐磨损、抗碰撞、抗紫外线，适宜中等至严重腐蚀环境。作为不泛黄耐化学品面漆涂于环氧底漆或中间漆上。",
      "Sơn phủ polyurethane 2 thành phần giữ độ bóng và màu vượt trội. Chịu nước, dầu động/thực vật, mài mòn, va đập và tia UV — cho môi trường ăn mòn trung bình đến nghiêm trọng. Lớp phủ không ố vàng trên sơn lót/lớp giữa epoxy."
    ),
    apps: L("Long-term decorative-protective finish on steel in severe environments; also on non-ferrous metal, concrete, cement, timber, pipework and GRP.", "严重腐蚀环境中钢结构的长效保护装饰面漆；也可用于有色金属、混凝土、水泥、木材、管道及玻璃钢表面。", "Lớp phủ trang trí-bảo vệ lâu dài trên thép môi trường nghiêm trọng; dùng cả trên kim loại màu, bê tông, xi măng, gỗ, ống và composite."),
    surface: "prev_coat",
    params: {
      resin: "Acrylic polyurethane", color: "Wide colour range", mix: "9 : 1 (by volume) = 10 : 1 (by weight)", potlife: "3 h (20 °C)",
      flash: "31 °C", density: "1.2 kg/L", solids: "42 %",
      coverage: "10 m²/L @ 42 μm DFT", dry: "5 h / 7 d (20 °C)", recoat: "8 h – 7 d", finish: "Semi-gloss / gloss",
      method: "Airless spray · brush · conventional spray", thinner: "brush 15–20 % · airless 5 % · spray 30 %", cleaner: "Matched HN PU thinner",
    },
    system: [["HN-AC-201", 1, "0.10 L/m²"], ["HN-AC-302", 1, "0.10 L/m²"], ["HN-AC-405", 2, "0.20 L/m²"]],
  },
  {
    code: "HN-AC-501", factory: "LS-11",
    name: L("Epoxy Glass-Flake Coating", "环氧玻璃鳞片漆", "Sơn epoxy vảy thủy tinh"),
    desc: L("High-build epoxy glass-flake coating with strong barrier effect", "高膜厚环氧玻璃鳞片涂料，屏蔽性强", "Sơn epoxy vảy thủy tinh độ dày cao, lớp chắn mạnh"),
    overview: L(
      "Two-pack epoxy coating loaded with glass flakes: the cured film forms a strong barrier that blocks penetration of corrosive media. Excellent adhesion, durability, impact resistance, water / brine / oil / alkali resistance and moderate acid resistance. High solids allow thick-film application.",
      "由环氧树脂、玻璃鳞片、颜料、固化剂、助剂和稀释剂等组成的双组份涂料。成膜后屏蔽性强，能有效阻止腐蚀介质的渗透，达到隔离防锈目的；附着力、耐久性、抗冲击性优良，耐水、耐盐水、耐油、耐碱并有一定耐酸性。固体份高，可作厚膜施工。",
      "Sơn epoxy 2 thành phần chứa vảy thủy tinh: màng đóng rắn tạo lớp chắn mạnh, ngăn môi trường ăn mòn thấm qua. Bám dính, độ bền, chống va đập tốt; chịu nước, nước muối, dầu, kiềm và axit ở mức độ nhất định. Hàm lượng rắn cao, có thể sơn dày."
    ),
    apps: L("Heavy-duty anti-corrosion systems for steel structures and concrete structures.", "钢结构及混凝土构筑物的重防腐涂装体系。", "Hệ chống ăn mòn hạng nặng cho kết cấu thép và bê tông."),
    surface: "steel_blast",
    params: {
      resin: "Epoxy (glass-flake)", color: "On request", mix: "By supply batch (see drum label)", potlife: "See TDS",
      pack: "Base 25 kg / hardener 2.5 kg kits",
      method: "Airless spray · brush", thinner: "As instructed per batch", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-AC-201", 1, "0.10 L/m²"], ["HN-AC-501", 2, "per spec"], ["HN-AC-405", 1, "0.10 L/m²"]],
  },
  {
    code: "HN-AC-601", factory: "P5250",
    name: L("Epoxy Iron-Oxide Anti-Rust Primer", "环氧铁红防锈底漆", "Sơn lót chống gỉ epoxy sắt đỏ"),
    desc: L("Two-pack epoxy anti-rust primer, iron-oxide red", "双组份环氧防锈底漆，铁红色", "Sơn lót chống gỉ epoxy 2 thành phần, màu đỏ sắt"),
    overview: L(
      "Two-pack chemically curing epoxy primer with excellent corrosion and abrasion resistance for long-term protection of steel in medium to severe corrosivity.",
      "双组份化学固化干燥型环氧底漆，具有优异的防腐蚀及耐磨损性能，作为长效保护底漆用于中等至严重腐蚀环境中的钢材表面。",
      "Sơn lót epoxy 2 thành phần hóa đóng rắn, chống ăn mòn và mài mòn xuất sắc, bảo vệ thép lâu dài trong môi trường ăn mòn trung bình đến nghiêm trọng."
    ),
    apps: L("Long-term protective primer on steel in medium to severe corrosive environments.", "中等至严重腐蚀环境中钢材表面的长效保护底漆。", "Sơn lót bảo vệ lâu dài trên thép môi trường ăn mòn trung bình đến nghiêm trọng."),
    surface: "steel_blast2",
    params: {
      resin: "Epoxy", color: "Iron-oxide red", mix: "4 : 1 (by volume) = 8.1 : 1 (by weight)", potlife: "8 h (20 °C)",
      flash: "25 °C", density: "1.7 kg/L", solids: "49 %",
      coverage: "10 m²/L @ 40 μm DFT", dry: "4 h / 7 d (20 °C)", recoat: "1 h – 7 d", finish: "Matt",
      method: "Airless spray · brush · conventional spray", thinner: "brush 5–10 % · airless 5 % · spray 20 %", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-AC-601", 1, "0.10 L/m²"], ["HN-AC-302", 1, "0.10 L/m²"], ["HN-AC-405 | HN-AC-607", 2, "0.20 L/m²"]],
  },
  {
    code: "HN-AC-602", factory: "P5450",
    name: L("Epoxy High-Build Coat", "环氧彩色厚浆漆", "Sơn epoxy dày nhiều màu"),
    desc: L("Two-pack high-build epoxy, wide colour range", "双组份环氧厚浆漆，颜色丰富", "Sơn epoxy dày 2 thành phần, đa màu"),
    overview: L(
      "Two-pack epoxy high-build coating in a wide colour range. Resistant to sea water, corrosion, impact, mineral oils, aliphatic hydrocarbons and many chemicals.",
      "可提供各种颜色的双组份环氧厚浆漆，具有耐海水、耐腐蚀、抗碰撞、耐矿物油、脂肪烃及多种化学品性能。",
      "Sơn epoxy dày 2 thành phần, đa màu. Chịu nước biển, ăn mòn, va đập, dầu khoáng, hydrocarbon và nhiều hóa chất."
    ),
    apps: L("Primer / intermediate for epoxy systems on steel and concrete; intermediate/finish on bridges, decks and structural steel.", "环氧体系在钢铁与混凝土表面的底漆/中间漆；桥梁、甲板及钢结构的中间层/面漆。", "Sơn lót/lớp giữa hệ epoxy trên thép và bê tông; lớp giữa/bề mặt cho cầu, sàn và kết cấu thép."),
    surface: "steel_clean",
    params: {
      resin: "Epoxy", color: "White, grey and other colours", mix: "3 : 1 (by volume) = 4.7 : 1 (by weight)", potlife: "5 h (20 °C)",
      flash: "26 °C", density: "1.4 kg/L", solids: "48 %",
      coverage: "10 m²/L @ 48 μm DFT", dry: "4 h / 7 d (20 °C)", recoat: "6 h – 5 d", finish: "Flat",
      method: "Airless spray · brush · conventional spray", thinner: "brush 5–10 % · airless 5 % · spray 15 %", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-AC-201 | HN-AC-601", 1, "0.10 L/m²"], ["HN-AC-602", 1, "0.10 L/m²"], ["HN-AC-405 | HN-AC-607", 2, "0.20 L/m²"]],
  },
  {
    code: "HN-AC-603", factory: "P5150",
    name: L("Epoxy Sealing / Rust-Penetrating Primer", "环氧封闭底漆（带锈涂装型）", "Sơn lót epoxy thấm gỉ"),
    desc: L("Low-viscosity epoxy primer that penetrates and locks residual rust on hard-to-blast surfaces", "低粘度环氧底漆，渗透并固化残余锈蚀，适用于难喷砂表面", "Sơn lót epoxy độ nhớt thấp, thấm và khóa gỉ còn lại trên bề mặt khó phun cát"),
    overview: L(
      "Two-pack epoxy primer with outstanding penetration: the wet paint soaks into the steel surface and incorporates residual rust into the film — surface-tolerant application where thorough blast cleaning is impractical, improving work efficiency.",
      "双组份环氧封闭底漆，渗透能力优异：涂装后的漆液能渗进钢铁表面并把未除尽的锈蚀物转化为漆膜的一部分，实现带锈涂装，在难以彻底喷砂的表面提高施工效率。",
      "Sơn lót epoxy 2 thành phần thấm sâu: sơn ướt ngấm vào bề mặt thép và biến gỉ còn lại thành một phần màng sơn — sơn được trên bề mặt khó phun cát hoàn toàn, nâng cao hiệu quả thi công."
    ),
    apps: L("Primer on hand / power-tool cleaned steel; red-lead-type anti-rust duty where rust removal is incomplete.", "作为底漆涂于手工及动力工具除锈的钢铁表面；除锈要求不高的表面，即使除锈不彻底也可涂装并达到防锈防腐效果。", "Sơn lót trên thép làm sạch bằng tay/dụng cụ; nhiệm vụ chống gỉ kiểu chì đỏ trên bề mặt không cần xử lý gỉ triệt để."),
    surface: "steel_clean",
    params: {
      resin: "Epoxy", color: "Red-brown", mix: "5 : 1 (by weight)", potlife: "5 h (20 °C)",
      density: "1.6 kg/L", solids: "48 %",
      coverage: "10 m²/L @ 48 μm DFT", dry: "4 h / 7 d (20 °C)", recoat: "6 h – 5 d", finish: "Flat",
      method: "Airless spray · brush · conventional spray", thinner: "brush 5–10 % · airless 5 % · spray 15 %", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-AC-603", 1, "0.10 L/m²"], ["HN-AC-602", 1, "0.10 L/m²"], ["HN-AC-607", 2, "0.20 L/m²"]],
  },
  {
    code: "HN-AC-604", factory: null,
    name: L("Epoxy Anti-Corrosion Finish", "环氧防腐面漆", "Sơn phủ epoxy chống ăn mòn"),
    desc: L("Two-pack epoxy finish — strong adhesion, chemical and water resistance", "双组份环氧防腐面漆，附着力强、耐化学品耐水", "Sơn phủ epoxy 2 thành phần — bám dính mạnh, chịu hóa chất và nước"),
    overview: L(
      "Two-pack anti-corrosion epoxy finish (base + curing agent). Strong adhesion to most substrates, mechanical properties per national standards, high solids with low VOC, resistant to water, oils, solvents, acids, alkalis, sea water and salt spray; compatible under acrylic, PU and fluorocarbon topcoats.",
      "由环氧树脂、颜填料、助剂、溶剂与固化剂组成的双组份防腐漆。对多数基材附着力极强；硬度、柔韧性、抗冲击等机械性能符合国家标准；固体份高、VOC 低；耐水、耐油、耐溶剂、耐酸、耐碱、耐海水、耐盐雾；与丙烯酸、聚氨酯、氟碳等面漆配套性良好。",
      "Sơn chống ăn mòn epoxy 2 thành phần (đế + chất đóng rắn). Bám dính mạnh trên đa số bề mặt; độ cứng, độ dẻo, chống va đập đạt tiêu chuẩn quốc gia; hàm lượng rắn cao, VOC thấp; chịu nước, dầu, dung môi, axit, kiềm, nước biển, muối; phối hợp tốt với sơn phủ acrylic, PU, fluorocarbon."
    ),
    apps: L("Steel structures, bridges, machinery and concrete surfaces.", "钢结构、桥梁、机械设备及混凝土表面。", "Kết cấu thép, cầu, máy móc và bề mặt bê tông."),
    surface: "prev_coat",
    params: {
      resin: "Epoxy", color: "Wide colour range", mix: "By supply batch (see drum label)", potlife: "≤ 8 h (23 ± 2 °C)",
      flash: "≈ 29 °C", density: "≈ 1.20 kg/L (mixed)", solids: "High solids",
      dft: "≈ 50 μm / coat", coverage: "≈ 100 g/m² @ 50 μm DFT", dry: "≤ 1 h / ≤ 24 h hard / 7 d full (23 °C)", recoat: "8 h – 7 d (by substrate temp.)", finish: "On request",
      method: "Airless spray 1 pass · brush / roller 1–2 passes", thinner: "As instructed per batch", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-AC-201 | HN-AC-601", 1, "0.10 L/m²"], ["HN-AC-302", 1, "0.10 L/m²"], ["HN-AC-604", 1, "per spec"]],
  },
  {
    code: "HN-AC-605", factory: null,
    name: L("Epoxy Zinc-Phosphate Primer", "环氧磷酸锌底漆", "Sơn lót epoxy photphat kẽm"),
    desc: L("Zinc-phosphate epoxy primer for hot-humid service", "环氧磷酸锌底漆，适用于湿热环境", "Sơn lót epoxy photphat kẽm cho môi trường nóng ẩm"),
    overview: L(
      "Two-pack zinc-phosphate epoxy primer for anti-corrosion protection in hot and humid conditions — equipment, land steel structures, machinery and ship topsides above the waterline.",
      "双组份环氧磷酸锌底漆，用于湿热环境中设备、陆上钢结构、钢铁机械及船舶水线以上钢板部位的防腐。",
      "Sơn lót epoxy photphat kẽm 2 thành phần, chống ăn mòn trong điều kiện nóng ẩm — thiết bị, kết cấu thép trên bờ, máy móc và phần tàu trên đường nước."
    ),
    apps: L("Equipment and steelwork in hot-humid environments; vessel steel above the waterline.", "湿热环境中的设备与钢构；船舶水线以上钢板。", "Thiết bị và kết cấu thép môi trường nóng ẩm; thép tàu trên đường nước."),
    surface: "factory_primer",
    params: {
      resin: "Epoxy (zinc phosphate)", color: "On request", mix: "10 : 1", potlife: "6 h",
      dry: "touch-dry ≤ 2 h / hard ≤ 24 h / full cure 7 d", recoat: "24 h – 7 d (25 °C)",
      method: "Airless spray (0.4–0.5 mm tip, 15–25 MPa) · conventional spray (0.3–0.6 MPa) · brush", thinner: "epoxy thinner: spray 0–10 % · airless 0–5 % · brush 0–3 %", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-AC-605", 2, "per spec"], ["HN-AC-405 | chlorinated-rubber / PU finishes", 2, "per spec"]],
  },
  {
    code: "HN-AC-606", factory: null,
    name: L("Epoxy Tar Anti-Corrosion Coating", "环氧沥青防腐漆", "Sơn epoxy nhựa đường chống ăn mòn"),
    desc: L("High-build polyamide-cured epoxy coal-tar — immersion & splash zones", "聚酰胺固化环氧煤焦沥青厚浆漆，浸水及飞溅区", "Epoxy nhựa đường đóng rắn polyamide — vùng ngâm nước và văng"),
    overview: L(
      "High-build two-pack polyamide-cured epoxy coal-tar coating. The cured film combines epoxy toughness, abrasion and chemical resistance with tar's water resistance — resistant to wear, sea water, crude oil and fuel.",
      "厚浆型双组份聚酰胺固化环氧煤焦沥青涂料。固化后漆膜兼具环氧漆的坚硬耐磨耐化学品性能与沥青漆的耐水特性，可耐磨损、耐海水、耐原油和燃油。",
      "Sơn epoxy nhựa đường 2 thành phần đóng rắn polyamide, độ dày cao. Màng đóng rắn kết hợp độ cứng, chịu mài mòn và hóa chất của epoxy với tính chịu nước của nhựa đường — chịu mài mòn, nước biển, dầu thô và nhiên liệu."
    ),
    apps: L("Long-term protection of steel / concrete in severe environments — immersed and splash zones, water pipes, ballast tanks, offshore facilities and buried pipelines.", "严重腐蚀环境中钢结构/混凝土表面的长效保护涂层：浸水及飞溅区、水管、压载水舱、近海设施及地下管道。", "Bảo vệ lâu dài thép/bê tông môi trường nghiêm trọng — vùng ngâm và văng, ống nước, khoang ballast, công trình ngoài khơi, ống ngầm."),
    surface: "prev_coat",
    params: {
      resin: "Epoxy coal-tar", color: "Black / brown", mix: "4 : 1 (by volume) = 6 : 1 (by weight)", potlife: "2 h",
      flash: "38 °C", density: "1.3–1.5 kg/L", solids: "64 %",
      dft: "250 μm / pass (WFT 400 μm)", coverage: "26 m²/L @ 250 μm", dry: "14 h / 7 d (20 °C)", recoat: "12 h – 2 d", finish: "Semi-gloss",
      method: "Airless spray (tip 0.023–0.027 in, ≈ 14 MPa) · brush", thinner: "brush 2 % · airless 5 % · spray 10 %", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-AC-606", 2, "per spec"]],
  },
  {
    code: "HN-AC-607", factory: "F6700",
    name: L("Acrylic Finish", "丙烯酸面漆", "Sơn phủ acrylic"),
    desc: L("Single-pack acrylic finish — good gloss & colour retention, easy repair", "单组份丙烯酸面漆，保光保色，易修补", "Sơn phủ acrylic 1 thành phần — giữ bóng màu, dễ sửa"),
    overview: L(
      "Single-pack high-grade acrylic finish with good gloss and colour retention. The film resists abrasion, impact, brine, mineral oils and many chemicals; easy to repair with no recoating-time limit. Available in flashing colours as high-visibility traffic-marking paint on steel and concrete.",
      "单组份高级丙烯酸基面漆，光泽和保色性良好，漆膜耐磨损、抗碰撞、耐盐水、矿物油及多种化学品；易修补，无重涂时间限制。可做成闪光效果的各种颜色，作为交通标志漆施工于钢铁和混凝土表面，可见度高、反光清晰。",
      "Sơn phủ acrylic cao cấp 1 thành phần, giữ bóng và màu tốt; màng sơn chịu mài mòn, va đập, nước muối, dầu khoáng và nhiều hóa chất; dễ sửa chữa, không giới hạn thời gian sơn lại. Có thể làm màu hiệu ứng lấp lánh làm sơn dấu giao thông trên thép và bê tông."
    ),
    apps: L("Finish on steel and concrete in medium to severe environments; decorative protection of equipment, instruments and machinery.", "中等至严重腐蚀环境中钢结构和混凝土表面的面漆；各类电器、仪表、仪器、机械设备等金属器材表面的装饰保护。", "Lớp phủ trên thép và bê tông môi trường trung bình đến nghiêm trọng; trang trí bảo vệ thiết bị, dụng cụ, máy móc."),
    surface: "prev_coat",
    params: {
      resin: "Acrylic", color: "White, silver and other colours", density: "1.1 kg/L", flash: "38 °C",
      solids: "35 %", coverage: "10 m²/L @ 35 μm DFT", dry: "1 h / 24 h hard (20 °C)", recoat: "4 h – no limit", finish: "Gloss",
      method: "Airless spray · brush · conventional spray", thinner: "brush 10 % · airless 5 % · spray 20 %", cleaner: "Matched HN acrylic thinner",
    },
    system: [["HN-AC-201 | HN-AC-603", 1, "0.10 L/m²"], ["HN-AC-607", 2, "0.20 L/m²"]],
  },
  {
    code: "HN-AC-608", factory: null,
    name: L("Alkyd Finish", "醇酸面漆", "Sơn phủ alkyd"),
    desc: L("Economical single-pack alkyd enamel — fast-drying general finish", "单组份醇酸磁漆，快干经济型通用面漆", "Sơn alkyd 1 thành phần — sơn phủ thông dụng nhanh khô, kinh tế"),
    overview: L(
      "Specially formulated alkyd enamel forming a glossy, abrasion-resistant film — fast-drying, economical, with good water and weather resistance.",
      "特殊配制的醇酸基磁漆，可形成有光耐磨的漆膜，特点是快干、经济实惠、耐水、耐候性能优良。",
      "Sơn alkyd được phối chế đặc biệt tạo màng bóng, chống mài mòn — khô nhanh, kinh tế, chịu nước và thời tiết tốt."
    ),
    apps: L("General-purpose finish on interior / exterior metal and timber in mild to medium corrosivity.", "轻微至中等腐蚀环境下室内外金属和木材表面的通用面漆。", "Sơn phủ thông dụng trong/ngoài trời trên kim loại và gỗ, môi trường ăn mòn nhẹ đến trung bình."),
    surface: "prev_coat",
    params: {
      resin: "Modified alkyd", color: "White, silver and other colours", density: "1.10 kg/L", flash: "38 °C",
      solids: "50 %", coverage: "14 m²/L @ 35 μm DFT", dry: "4 h / 8 h (20 °C)", recoat: "8 h – 30 d", finish: "Gloss",
      method: "Airless spray · brush · conventional spray", thinner: "brush 5–10 % · airless 5 % · spray 15 %", cleaner: "Matched HN alkyd thinner",
    },
    system: [["anti-rust primer (HN supply)", 1, "0.10 L/m²"], ["HN-AC-608", 2, "0.20 L/m²"]],
  },
  {
    code: "HN-AC-609", factory: null,
    name: L("Chlorinated-Rubber Finish", "氯化橡胶面漆", "Sơn phủ cao su clo hóa"),
    desc: L("Acrylic-modified chlorinated-rubber finish — weather & chemical resistant", "丙烯酸改性氯化橡胶面漆，耐候耐化学品", "Sơn phủ cao su clo hóa改性 acrylic — chịu thời tiết và hóa chất"),
    overview: L(
      "Premium finish formulated from acrylic resin and chlorinated rubber. The film resists abrasion and impact; resists sea water, mineral oils, many chemicals, fish oils and other animal / vegetable oils. Easy to repair and can be recoated after extended time.",
      "用丙烯酸树脂与氯化橡胶配制而成的优质面漆。漆膜耐磨损、抗碰撞；耐海水、矿物油、多种化学品及鱼油等动植物油。易修补，时间延长也可重涂。",
      "Sơn phủ cao cấp từ nhựa acrylic và cao su clo hóa. Màng sơn chịu mài mòn, va đập; chịu nước biển, dầu khoáng, nhiều hóa chất và dầu động/thực vật. Dễ sửa, có thể sơn lại sau thời gian dài."
    ),
    apps: L("Finish on interior / exterior steel in medium to severe industrial environments with high sunlight / weather exposure.", "中等至严重腐蚀工业环境中钢材内、外表面的面漆，耐晒耐候性能优异。", "Lớp phủ trong/ngoài thép môi trường công nghiệp trung bình đến nghiêm trọng, chịu nắng và thời tiết tốt."),
    surface: "prev_coat",
    params: {
      resin: "Chlorinated rubber (acrylic-modified)", color: "Wide colour range", flash: "36–40 °C", density: "1.30 kg/L",
      solids: "40 %", dft: "≈ 40 μm / coat", coverage: "10 m²/L @ 40 μm DFT",
      dry: "10 min dust-free / 1 h touch / 4 h hard (25 °C)", recoat: "3 h – no limit", finish: "Matt / semi-matt",
      method: "Airless spray · brush · conventional spray", thinner: "brush 10 % · airless 5 % · spray 15 %", cleaner: "Matched HN CR thinner",
    },
    system: [["chlorinated-rubber primer (HN supply)", 1, "0.10 L/m²"], ["HN-AC-609", 2, "0.20 L/m²"]],
  },
  {
    code: "HN-AC-612", factory: null, listing: true,
    name: L("Bridge Anti-Corrosion Systems", "桥梁防腐配套体系", "Hệ chống ăn mòn cho cầu"),
    desc: L("Project-specified multi-coat systems assembled from the HN primer / intermediate / topcoat range", "按项目规范以 HN 底漆/中间漆/面漆组合的多层配套体系", "Hệ nhiều lớp theo hồ sơ dự án, lắp từ dải sơn lót/lớp giữa/lớp phủ HN"),
    overview: L(
      "Bridge and infrastructure protection is specified per project: coating systems are assembled from HN primers, intermediates and topcoats to match the corrosivity category, design life and maintenance plan. Typical duty — anti-rust, acid and chemical resistance, oil and heat resistance, decorative finish; covering steel bridges, petrochemical, marine, metallurgy, power, mining and municipal engineering; tanks, towers, reactors, pipework, drilling platforms, plant roofing and steel masts.",
      "桥梁及基础设施防护按项目规范执行：以 HN 底漆、中间漆、面漆组合成套，匹配腐蚀等级、设计寿命与维护计划。典型防护对象：要求防锈、防酸、防腐蚀、耐油、耐热、美观的金属构件与设备表面；覆盖机械制造、钢铁桥梁、石油化工、船舶、冶金、电力、矿山、建筑安装、热力煤气、交通标志、污水处理等工程的机械设备、罐、釜、塔、槽等大型容器及各类管道、钻井平台、金属厂房瓦面与钢铁塔架。",
      "Bảo vệ cầu và hạ tầng được lập theo từng dự án: hệ sơn lắp từ sơn lót, lớp giữa và lớp phủ HN, phù hợp cấp ăn mòn, tuổi thọ thiết kế và kế hoạch bảo trì. Phạm vi điển hình: bề mặt kim loại cần chống gỉ, axit, ăn mòn, chịu dầu, chịu nhiệt và thẩm mỹ; máy móc chế tạo, cầu thép, hóa dầu, tàu thủy, luyện kim, điện lực, mỏ, xây dựng, dấu giao thông, xử lý nước; bồn, tháp, nồi, ống, giàn khoan, mái nhà xưởng, cột thép."
    ),
    apps: null, surface: null, params: null,
    system: [["per project spec", 0, ""]],
  },
];

const CAT02 = [
  {
    code: "HN-HT-200", factory: null,
    name: L("Silicone High-Temperature Paint (Aluminium)", "有机硅耐高温漆（铝粉色）", "Sơn chịu nhiệt silicone (màu nhôm)"),
    desc: L("Single-pack air-drying silicone HT paint — hot surfaces up to 550 °C", "单组份自干型有机硅耐高温漆，热表面长期耐温达 550 ℃", "Sơn chịu nhiệt silicone 1 thành phần khô tự nhiên — bề mặt nóng tới 550 °C"),
    overview: L(
      "Heat-resistant, single-pack, air-drying coating pigmented with aluminium paste; custom colours and temperature grades available on request. Note: the film becomes slightly thermoplastic with loss of gloss on heating — keep total DFT below ~75 μm and do not heat before the film is fully dry (24 h / 20 °C).",
      "耐热型单组份自干涂料，以铝粉为着色颜料；可按客户要求订做专用颜色和耐热温度的品种。注：本品受热后漆膜稍具热塑性且光泽降低——高温使用时漆膜总干膜厚度宜保持在 75 μm 以下，漆膜彻底干燥前（24 h / 20 ℃）不要受热。",
      "Sơn chịu nhiệt 1 thành phần khô tự nhiên, màu nhôm; có thể đặt màu và cấp nhiệt độ riêng theo yêu cầu. Lưu ý: màng sơn hơi nhựa nhiệt và giảm bóng khi nắng nóng — tổng độ dày màng khô nên dưới ~75 μm; không gia nhiệt trước khi màng khô hoàn toàn (24 h / 20 °C)."
    ),
    apps: L("Long-term protection of hot pipes, exhaust ducts, chimneys and other surfaces up to 550 °C; may serve as its own primer and finish.", "热管道、排风管、烟囱及其他温度达 550 ℃ 热表面的长效保护涂层，可自作底漆和面漆。", "Bảo vệ lâu dài ống nóng, ống xả, ống khói và bề mặt nhiệt tới 550 °C; có thể tự làm sơn lót và sơn phủ."),
    surface: "degrease_blast",
    params: {
      resin: "Heat-resistant silicone resin", color: "Silver, black and other colours", density: "1.1 kg/L", flash: "25 °C",
      solids: "31 %", coverage: "12 m²/L @ 25 μm DFT", dry: "1 h / 24 h (20 °C)", recoat: "Not required", finish: "Semi-flat",
      method: "Airless spray · brush · conventional spray", thinner: "airless 5 % · brush 10 % · spray 15 %", cleaner: "Matched HN silicone thinner",
    },
    system: [["HN-HT-200", 1, "0.08 L/m²"]],
  },
  {
    code: "HN-HT-400", factory: null, listing: true,
    name: L("Silicone HT Paint — Black, ~400 °C", "有机硅耐高温漆——黑色，约 400 ℃", "Sơn silicone chịu nhiệt — đen, ~400 °C"),
    desc: L("Boilers, kilns and stacks — full data sheet on request", "锅炉、窑炉及烟囱，完整 TDS 备索", "Lò hơi, lò nung và ống khói — TDS đầy đủ theo yêu cầu"),
    overview: L(
      "Black silicone-based high-temperature grade for continuous service around 400 °C on boilers, kilns and furnace equipment. Single-pack, air-drying. Request the full TDS for mixing, DFT and curing data before specification.",
      "黑色有机硅耐高温等级，锅炉、窑炉及炉用设备约 400 ℃ 长期使用。单组份自干。选型前请索取完整 TDS 以获取混合、膜厚及固化数据。",
      "Cấp chịu nhiệt silicone màu đen, hoạt động liên tục ~400 °C trên lò hơi, lò nung và thiết bị lò. 1 thành phần, khô tự nhiên. Vui lòng yêu cầu TDS đầy đủ trước khi chọn hệ."
    ),
    apps: null, surface: null, params: null, system: null,
  },
  {
    code: "HN-HT-600", factory: null, listing: true,
    name: L("Inorganic Ceramic-Binder HT Coating — up to 600 °C", "无机陶瓷粘结剂耐高温涂料——最高 600 ℃", "Sơn chịu nhiệt keo ceramic vô cơ — tới 600 °C"),
    desc: L("Turbine casings and high-heat plant — full data sheet on request", "涡轮壳体及高温设备，完整 TDS 备索", "Vỏ tuabin và thiết bị nhiệt cao — TDS đầy đủ theo yêu cầu"),
    overview: L(
      "Inorganic ceramic-binder coating for continuous service up to about 600 °C (turbine housings, hot plant). Application and cure differ from silicone grades. Request the full TDS and application guide before specification.",
      "无机陶瓷粘结剂涂料，涡轮壳体等高温设备最高约 600 ℃ 长期使用。施工与固化方式不同于有机硅等级。选型前请索取完整 TDS 及施工指南。",
      "Sơn keo ceramic vô cơ cho dịch vụ liên tục tới ~600 °C (vỏ tuabin, thiết bị nhiệt). Thi công và đóng rắn khác các cấp silicone. Vui lòng yêu cầu TWS đầy đủ trước khi chọn hệ."
    ),
    apps: null, surface: null, params: null, system: null,
  },
  {
    code: "HN-HT-CUS", factory: null, listing: true,
    name: L("Custom Temperature Grades", "定制耐温等级", "Cấp nhiệt độ theo yêu cầu"),
    desc: L("Custom colour and temperature rating — sample typically in 7–15 days", "定制颜色与耐温等级，通常 7–15 天出样", "Màu và cấp nhiệt độ riêng — mẫu thường trong 7–15 ngày"),
    overview: L(
      "Custom silicone / ceramic formulations tuned to your target temperature, colour and substrate; lab samples typically within 7–15 days depending on complexity.",
      "按目标温度、颜色与基材定制的有机硅/陶瓷配方；视复杂程度通常 7–15 天内提供实验室样品。",
      "Phối chế silicone/ceramic theo nhiệt độ mục tiêu, màu và bề mặt; mẫu phòng thí nghiệm thường trong 7–15 ngày tùy độ phức tạp."
    ),
    apps: null, surface: null, params: null, system: null,
  },
];

const CAT03 = [
  {
    code: "HN-FL-101", factory: "BF0565",
    name: L("Solvent-Free Self-Leveling Epoxy Floor", "无溶剂自流平环氧地坪漆", "Sơn nền epoxy tự chảy không dung môi"),
    desc: L("100 % solids self-leveling epoxy — seamless heavy-duty floors, 2–3 mm builds", "100% 固含自流平环氧，2–3 mm 无缝重载地坪", "Epoxy tự chảy 100 % rắn — nền liền mạch hạng nặng 2–3 mm"),
    overview: L(
      "Solvent-free, self-leveling high-build epoxy for tough, seamless floors. Applied with a notched trowel / spiked roller to 2–3 mm; anti-static, anti-slip or orange-peel textures possible with adjusted mixes. Full cure 7 days; foot traffic after ~36 h.",
      "无溶剂、自流平、涂层坚实的厚浆环氧涂料。用齿形刮板/消泡辊施工至 2–3 mm；调整配比可实现防静电、防滑或桔皮纹等特殊效果。完全固化 7 天，约 36 小时后可上人。",
      "Epoxy dày tự chảy không dung môi cho nền liền mạch chắc chắn. Thi công bằng bay răng/lăn gai tới 2–3 mm; có thể hiệu ứng chống tĩnh điện, chống trượt, vỏ cam bằng tỷ lệ pha riêng. Đóng rắn hoàn toàn 7 ngày; đi lại sau ~36 giờ."
    ),
    apps: L("Floors under severe vehicle wear and chemical attack — factories, warehouses and parking decks.", "受车辆磨损和化学品腐蚀严重的地坪：工厂、仓库及车库。", "Nền chịu mài mòn xe và hóa chất nghiêm trọng — nhà xưởng, kho, bãi đỗ xe."),
    surface: "concrete",
    params: {
      resin: "Self-leveling epoxy", color: "Wide colour range", mix: "base : hardener = 5 : 1 (by weight)",
      solids: "100 %", flash: "100 °C", density: "1.5 kg/L",
      dft: "2–3 mm (WFT ≈ DFT)", dry: "24 h foot traffic / 7 d full cure (20 °C)", recoat: "36 h – 3 d (20 °C)", finish: "Gloss",
      method: "Notched trowel / spiked roller", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-FL-503 sealer", 1, "0.10 L/m²"], ["epoxy mortar / putty", 1, "per spec"], ["HN-FL-101", 1, "2–3 mm"]],
  },
  {
    code: "HN-FL-202", factory: "F5440",
    name: L("Epoxy Floor Coating (Roll-Coat)", "环氧地坪漆（平涂型）", "Sơn nền epoxy (lăn/phun)"),
    desc: L("Two-pack solvent-borne epoxy floor paint — tough, chemical-resistant, easy clean", "双组份溶剂型环氧地坪漆，坚韧耐化学品、易清洁", "Sơn nền epoxy 2 thành phần — bền, chịu hóa chất, dễ vệ sinh"),
    overview: L(
      "Two-pack solvent-borne floor coating for concrete and steel decks, chemically curing to a tough film: excellent adhesion, abrasion and impact resistance, resistant to many chemicals, easy to clean and renovate.",
      "双组份溶剂型高级地台用漆，专用于混凝土和钢板地台，化学固化干燥型：漆膜坚韧耐用、附着力佳，耐磨抗碰撞性能极佳，能抵抗多种化学品侵蚀，易清洗和翻新施工。",
      "Sơn nền 2 thành phần cho bê tông và sàn thép, đóng rắn hóa học thành màng bền: bám dính tốt, chịu mài mòn và va đập xuất sắc, kháng nhiều hóa chất, dễ vệ sinh và cải tạo."
    ),
    apps: L("Factory floors, stockyards and sports grounds; mid-coat / finish in corrosive environments and tunnels (not recommended as outdoor finish).", "工厂、堆场、运动场等地坪；腐蚀环境及隧道的中间漆/面漆（不推荐用作户外面漆）。", "Nền nhà xưởng, bãi hàng, sân thể thao; lớp giữa/lớp phủ trong môi trường ăn mòn và hầm đường (không khuyến nghị làm lớp phủ ngoài trời)."),
    surface: "concrete",
    params: {
      resin: "Epoxy", color: "Wide colour range", mix: "4 : 1 (by weight)", potlife: "8 h (20 °C)",
      flash: "30 °C", density: "1.4 kg/L", solids: "55 %",
      coverage: "6 m²/L @ 90 μm DFT", dry: "8–10 h / 7 d (20 °C, 70 % RH)", recoat: "8 h – 7 d", finish: "Gloss",
      method: "Airless spray · brush · roller · conventional spray", thinner: "brush & roller 10 % · airless 5 % · spray 15 %", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-FL-503 sealer", 1, "0.10 L/m²"], ["HN-FL-202", 2, "0.30 L/m² roll-coat"], ["HN-FL-501 PU sealer", 1, "0.10 L/m²"]],
  },
  {
    code: "HN-FL-303", factory: "E5440",
    name: L("Waterborne Epoxy Floor Coating", "水性环氧地坪漆", "Sơn nền epoxy gốc nước"),
    desc: L("Low-odour waterborne epoxy — applies to not-fully-cured concrete, fast schedules", "水性环氧低气味，可涂未干透混凝土，适合赶工", "Epoxy gốc nước ít mùi — sơn được bê tông chưa khô hoàn toàn, tiến độ nhanh"),
    overview: L(
      "Waterborne epoxy floor coating built from a special epoxy-emulsion polymer with functional fillers and additives — combining abrasion resistance with flexibility, eco-friendly and durable, excellent value. Air-drying and easy to apply; can be coated onto not-yet-fully-dry concrete, suiting tight schedules.",
      "采用特种环氧高分子聚合物乳液与高硬度功能型填料、高性能助剂优化组合精制而成，集耐磨性与柔韧性于一体，环保耐用、性价比优越。本品自干、施工方便，亦可涂装于未干透的混凝土表面，适合赶工期施工。",
      "Sơn nền epoxy gốc nước từ nhũ tương epoxy polymer đặc biệt với chất độn chức năng và phụ gia — kết hợp chống mài mòn và độ dẻo, thân thiện môi trường, bền, hiệu quả chi phí cao. Khô tự nhiên, thi công dễ; sơn được lên bê tông chưa khô hoàn toàn, phù hợp tiến độ gấp."
    ),
    apps: L("Workshops, offices, halls and stores; health-sensitive interiors; floors with higher safety requirements (e.g. electrical rooms).", "车间、办公室、馆所、店堂等地面；对健康环保要求高的室内地板；安全性要求较高的电房地板。", "Xưởng, văn phòng, hội trường, cửa hàng; sàn trong nhà yêu cầu thân thiện sức khỏe; sàn phòng điện yêu cầu an toàn cao."),
    surface: "concrete",
    params: {
      resin: "Waterborne epoxy", color: "Wide colour range",
      coverage: "10 m²/L @ 28 μm DFT", dry: "1 h touch / 48 h hard (20 °C, 70 % RH)", recoat: "8 h – no limit",
      thinner: "Water: brush & roller 10 % · spray 15 %", cleaner: "Water",
      method: "Brush · spray · airless spray",
    },
    system: [["waterborne floor primer (HN supply)", 1, "8 m²/kg"], ["HN-FL-303", 2, "4 m²/kg"], ["waterborne clear sealer", 1, "8 m²/kg"]],
  },
  {
    code: "HN-FL-404", factory: null,
    name: L("PU Floor Coating", "聚氨酯地坪漆", "Sơn nền polyurethane"),
    desc: L("Fast-drying two-pack PU floor finish — indoor & outdoor decks", "快干型双组份聚氨酯地坪面漆，室内外均可", "Sơn nền PU 2 thành phần khô nhanh — sàn trong và ngoài trời"),
    overview: L(
      "Fast-drying two-pack polyurethane floor finish with good colour retention and application properties, for concrete and steel decks; especially suitable for sports floors (tennis, badminton, baseball).",
      "快干型双组份地坪面漆，保色性及施工性能良好，专用于混凝土和钢板地台，可用作室内及户外高级地坪涂料；特别适用于网球场、羽毛球场、棒球场等运动场馆地坪。",
      "Sơn nền PU 2 thành phần khô nhanh, giữ màu và thi công tốt, cho sàn bê tông và thép; đặc biệt phù hợp sân thể thao (tennis, cầu lông, baseball)."
    ),
    apps: L("Indoor / outdoor floors and sports venues; mid / finish coats in corrosive environments.", "室内外地坪及运动场馆；腐蚀环境中的中间漆/面漆。", "Sàn trong/ngoài trời và sân thể thao; lớp giữa/lớp phủ môi trường ăn mòn."),
    surface: "concrete",
    params: {
      resin: "Polyurethane", color: "Wide colour range", flash: "30 °C", density: "1.3 kg/L", solids: "55 %",
      coverage: "6 m²/L @ 90 μm DFT", dry: "1 h / 48 h hard (20 °C, 70 % RH)", recoat: "4 h – 3 d",
      method: "Airless spray · brush · roller · conventional spray", thinner: "brush & roller 10 % · airless 5 % · spray 15 %", cleaner: "Matched HN PU thinner",
    },
    system: [["HN-FL-503 sealer", 1, "0.10 L/m²"], ["HN-FL-404", 2, "0.30 L/m²"], ["HN-FL-501 PU sealer", 1, "0.10 L/m²"]],
  },
  {
    code: "HN-FL-501", factory: null,
    name: L("PU Clear Floor Sealer", "聚氨酯地坪罩光清漆", "Sơn phủ trong PU cho nền"),
    desc: L("Clear PU sealer over epoxy / PU floors — weather & wear booster, applies at −10 °C", "环氧/聚氨酯地坪罩光清漆，提升耐候耐磨，可 −10 ℃ 施工", "Lớp phủ trong PU trên nền epoxy/PU — tăng chịu thời tiết và mài mòn, thi công được ở −10 °C"),
    overview: L(
      "Premium clear sealer applied over epoxy and PU floor coatings to enhance weathering, wear and corrosion performance. Fast-drying; applicable at around −10 °C; strong anti-staining resistance to alkalis, mild chemicals, acid rain and mould with good non-yellowing.",
      "高级地坪罩光清漆，专门涂在已涂环氧地坪漆和聚氨酯地坪漆的表面，增强耐候耐磨及防腐性能。快干，可在 −10 ℃ 左右施工；抗污染能力强，耐碱、温和化学品、酸雨及霉菌，耐黄变性好。",
      "Lớp phủ trong cao cấp sơn lên nền epoxy/PU để tăng chịu thời tiết, mài mòn và chống ăn mòn. Khô nhanh; thi công được khoảng −10 °C; kháng bẩn tốt, chịu kiềm, hóa chất nhẹ, mưa axit và nấm mốc, ít ố vàng."
    ),
    apps: L("Clear sealing coat over epoxy / PU floors on concrete and steel decks.", "混凝土与钢台地坪上环氧/聚氨酯面层的罩光。", "Lớp phủ trong trên nền epoxy/PU, sàn bê tông và thép."),
    surface: "prev_coat",
    params: {
      resin: "Acrylic polyurethane", color: "Clear", mix: "2 : 1 (by weight)", flash: "31 °C", density: "0.98 kg/L",
      coverage: "10 m²/L (single coat)", dry: "4 h / 3 d hard", recoat: "4 h – 3 d",
      method: "Airless spray · brush · roller · conventional spray", thinner: "brush & roller 5 % · airless 5 % · spray 15 %", cleaner: "Matched HN PU thinner",
    },
    system: [["HN-FL-501", 1, "0.10 L/m²"]],
  },
  {
    code: "HN-FL-502", factory: "E5450",
    name: L("Waterborne Acrylic Floor Coating", "水性丙烯酸地坪漆", "Sơn nền acrylic gốc nước"),
    desc: L("Waterborne acrylic floor paint — eco-friendly, fast schedule", "水性丙烯酸地坪漆，环保、适合赶工", "Sơn nền acrylic gốc nước — thân thiện môi trường, tiến độ nhanh"),
    overview: L(
      "Waterborne acrylic floor coating from a special polymer emulsion with functional fillers / additives — abrasion resistance plus flexibility, eco-friendly, durable and cost-effective; air-drying, easy application, can coat not-fully-dry concrete for tight schedules.",
      "采用特种高分子聚合物乳液与功能型填料、助剂精制而成的水性地坪漆，集耐磨性与柔韧性于一体，环保耐用、性价比优越；自干、施工方便，可涂未干透的混凝土，适合赶工期施工。",
      "Sơn nền acrylic gốc nước từ nhũ tương polymer đặc biệt với chất độn/phụ gia chức năng — chống mài mòn kèm độ dẻo, thân thiện môi trường, bền, kinh tế; khô tự nhiên, thi công dễ, sơn được bê tông chưa khô cho tiến độ gấp."
    ),
    apps: L("Workshops, offices, halls and stores; health-sensitive interior floors; electrical-room floors.", "车间、办公室、馆所、店堂地面；健康敏感室内地板；电房地板。", "Xưởng, văn phòng, hội trường, cửa hàng; sàn trong nhà nhạy cảm sức khỏe; sàn phòng điện."),
    surface: "concrete",
    params: {
      resin: "Waterborne acrylic (emulsion)", color: "Wide colour range", mix: "5 : 1",
      coverage: "10 m²/L @ 28 μm DFT", dry: "1 h touch / 48 h hard (20 °C, 70 % RH)", recoat: "8 h – no limit",
      thinner: "Water: brush & roller 10 % · spray 15 %", cleaner: "Water",
      method: "Brush · spray · airless spray",
    },
    system: [["waterborne floor primer (HN supply)", 1, "8 m²/kg"], ["HN-FL-502", 2, "4 m²/kg"], ["waterborne clear sealer", 1, "8 m²/kg"]],
  },
  {
    code: "HN-FL-503", factory: "N5050",
    name: L("Epoxy Sealing Primer", "环氧封闭底漆", "Sơn lót khóa epoxy"),
    desc: L("Low-viscosity epoxy sealer for porous, alkaline concrete", "低粘度环氧封闭底漆，专用于多孔微碱表面", "Sơn lót epoxy độ nhớt thấp cho bề mặt xốp, kiềm"),
    overview: L(
      "Two-pack solvent-borne sealer for expectedly alkaline, porous surfaces: low viscosity with strong penetration, improving adhesion and hold-out of subsequent coats while reducing topcoat consumption. Apply thin — a glossy sealed surface can cause topcoat cracking.",
      "双组份溶剂型高级封闭底漆，专门用于预料带碱性的多微孔表面：粘度低、渗透性好，提高后续漆层附着力和遮盖力，减少面漆消耗。封闭底漆漆膜不能过厚——过厚会形成光滑表面，引起面漆开裂及附着力下降。",
      "Sơn lót khóa 2 thành phần cho bề mặt xốp có tính kiềm: độ nhớt thấp, thấm tốt, tăng bám dính và độ che của lớp trên, giảm hao sơn phủ. Sơn lớp mỏng — bề mặt khóa quá bóng có thể gây nứt lớp phủ."
    ),
    apps: L("Sealing coat under floor and wall systems on cement render, plaster, asbestos-cement board and concrete.", "室内外水泥砂浆、灰泥、水泥石棉板、混凝土等地坪/墙面体系的封闭层。", "Lớp khóa dưới hệ sàn và tường trên vữa xi măng, thạch cao, tấm xi măng amiang, bê tông."),
    surface: "concrete",
    params: {
      resin: "Epoxy", color: "Base clear; hardener light-yellow", mix: "4 : 1 (by weight)", potlife: "8 h (20 °C)",
      flash: "30 °C", density: "0.94 kg/L", solids: "28 %",
      coverage: "10 m²/L @ 28 μm DFT", dry: "2 h / 7 d (20 °C, 70 % RH)", recoat: "4 h – 7 d",
      method: "Airless spray · brush · roller · conventional spray", thinner: "brush & roller 10 % · airless 10 % · spray 15 %", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-FL-503", 1, "0.10 L/m²"], ["floor topcoat by duty", 2, "per system"]],
  },
  {
    code: "HN-FL-504", factory: "BV0036",
    name: L("Acrylic Clear Sealer", "丙烯酸罩光清漆", "Lớp phủ trong acrylic"),
    desc: L("Single-pack acrylic clear sealer — UV & stain resistance, applies at −10 °C", "单组份丙烯酸罩光清漆，抗紫外线抗污染，可 −10 ℃ 施工", "Lớp phủ trong acrylic 1 thành phần — chống UV và bẩn, thi công được −10 °C"),
    overview: L(
      "Acrylic clear sealer over primed and mid-coated walls, floors, steelwork and timber — enhancing weathering, sunlight and corrosion performance. Excellent UV resistance; application largely unrestricted by temperature (down to about −10 °C); resists alkali, mild chemicals, acid rain and mould.",
      "以丙烯酸树脂为基料的高级罩光面漆，涂于已涂底漆和中间漆的内外墙、地坪、钢结构、木器表面，增强耐候、耐晒及防腐性能。抗紫外线优异，施工一般不受气温限制（可 −10 ℃ 左右施工）；抗污染能力强，耐碱、温和化学品、酸雨及霉菌。",
      "Lớp phủ trong acrylic trên tường, sàn, kết cấu thép và gỗ đã sơn lót — tăng chịu thời tiết, nắng và ăn mòn. Chống UV xuất sắc; thi công hầu như không giới hạn nhiệt độ (tới khoảng −10 °C); kháng bẩn, chịu kiềm, hóa chất nhẹ, mưa axit, nấm mốc."
    ),
    apps: L("Clear coat over metallic / stone-effect paints and floor systems on concrete, steel and timber.", "室内外混凝土、钢结构、木器上金属漆、石头漆及地坪体系的罩光。", "Lớp trong trên sơn kim loại/hiệu ứng đá và hệ sàn, trên bê tông, thép, gỗ."),
    surface: "prev_coat",
    params: {
      resin: "Acrylic", color: "Clear", flash: "36–40 °C", density: "0.9 kg/L", solids: "28 %",
      coverage: "10 m²/L @ 28 μm DFT", dry: "1 h / 4 h hard (20 °C, 70 % RH)", recoat: "2 h – no limit",
      method: "Airless spray · brush · roller · conventional spray", thinner: "brush & roller 10 % · airless 10 % · spray 15 %", cleaner: "Matched HN acrylic thinner",
    },
    system: [["HN-FL-504", 1, "0.12 L/m²"]],
  },
  {
    code: "HN-FL-505", factory: "BF0557",
    name: L("Acrylic Floor Coating", "丙烯酸地坪漆", "Sơn nền acrylic"),
    desc: L("Fast-drying acrylic floor finish — colour-retentive, indoor / outdoor", "快干型丙烯酸地坪面漆，保色性好，室内外适用", "Sơn nền acrylic khô nhanh — giữ màu, trong/ngoài trời"),
    overview: L(
      "Fast-drying acrylic floor finish with good colour retention and application properties for concrete and steel decks; premium indoor / outdoor floor duty including sports venues.",
      "快干型丙烯酸面漆，保色性及施工性能良好，专用于混凝土和钢板地台，室内外高级地坪适用，含运动场馆地坪。",
      "Sơn nền acrylic khô nhanh, giữ màu và thi công tốt cho sàn bê tông và thép; cao cấp trong/ngoài trời, kể cả sân thể thao."
    ),
    apps: L("Factory floors and sports venues; mid / finish coats in corrosive environments.", "工厂地坪与运动场馆；腐蚀环境中的中间漆/面漆。", "Nền nhà xưởng và sân thể thao; lớp giữa/lớp phủ môi trường ăn mòn."),
    surface: "concrete",
    params: {
      resin: "Acrylic", color: "Wide colour range", flash: "30 °C", density: "1.3 kg/L", solids: "55 %",
      coverage: "6 m²/L @ 90 μm DFT", dry: "2 h / 48 h hard (20 °C, 70 % RH)", recoat: "4 h – 3 d",
      method: "Airless spray · brush · roller · conventional spray", thinner: "brush & roller 10 % · airless 5 % · spray 15 %", cleaner: "Matched HN acrylic thinner",
    },
    system: [["HN-FL-503 sealer", 1, "0.10 L/m²"], ["HN-FL-505", 2, "0.30 L/m²"], ["HN-FL-501 PU sealer", 1, "0.10 L/m²"]],
  },
];

const CAT04 = [
  {
    code: "HN-EX-701", factory: "F5801",
    name: L("Architectural Fluorocarbon Topcoat", "建筑氟碳面漆", "Sơn phủ fluorocarbon kiến trúc"),
    desc: L("Two-pack FEVE topcoat — premium weathering, metallic colours available", "双组份氟碳面漆，超强耐候，可做金属色", "Sơn phủ fluorocarbon 2 thành phần — chịu thời tiết cao cấp, có màu kim loại"),
    overview: L(
      "Two-pack solvent-borne premium decorative fluorocarbon coating for environments demanding the strongest protection: outstanding gloss and colour retention; superior non-yellowing and dirt-shedding; resistant to acids, alkalis, solvents, water and chemicals.",
      "双组份溶剂型高档装饰涂料，适合需要特强保护性的环境：保光保色性能优良，特强耐黄变及耐沾污，抗酸、碱、溶剂、水及化学品侵蚀，为室内外墙壁及钢结构表面提供卓越的保护及装饰。",
      "Sơn phủ fluorocarbon trang trí cao cấp 2 thành phần cho môi trường đòi hỏi bảo vệ mạnh nhất: giữ bóng giữ màu xuất sắc; chống ố vàng và bám bẩn vượt trội; kháng axit, kiềm, dung môi, nước và hóa chất."
    ),
    apps: L("Interior / exterior concrete walls and as finish coat of anti-corrosion systems.", "室内外混凝土墙壁，及防腐涂料系统的面漆。", "Tường bê tông trong/ngoài trời và lớp phủ cuối của hệ chống ăn mòn."),
    surface: "prev_coat",
    params: {
      resin: "Fluorocarbon (FEVE)", color: "Wide range incl. metallics", mix: "gloss 8 : 1 · semi-matt 10 : 1 (by weight)", potlife: "3 h (20 °C)",
      flash: "31 °C", solids: "42 %", coverage: "10 m²/L (one coat, flat)", dry: "5 h / 7 d (20 °C)", recoat: "8 h – 7 d", finish: "Gloss / matt",
      method: "Airless spray · brush · conventional spray", thinner: "As per batch TDS", cleaner: "Matched HN FC thinner",
    },
    system: [["steel: HN-AC-201 → HN-AC-302 | concrete: HN-FL-503 → HN-AC-602", 0, ""], ["HN-EX-701", 2, "0.22 L/m²"]],
  },
  {
    code: "HN-EX-703", factory: null, listing: true,
    name: L("Elastic Anti-Crack Exterior System", "弹性抗裂外墙系统", "Hệ ngoại thất đàn hồi chống nứt"),
    desc: L("Bridges hairline cracks in render — full system data on request", "桥接基层微裂纹，完整体系数据备索", "Che nứt tóc trên nền — số liệu hệ thống theo yêu cầu"),
    overview: L(
      "Elastomeric exterior system that bridges hairline cracking in render and follows substrate movement. Crack-bridding performance depends on system build; request the system data sheet (build, elongation class, test basis) before specification.",
      "弹性外墙体系，可桥接基层微裂纹并随基材伸缩。抗裂性能取决于体系膜厚；选型前请索取体系数据表（膜厚、延伸率等级、测试依据）。",
      "Hệ ngoại thất đàn hồi che nứt tóc và theo chuyển động nền. Khả năng che nứt phụ thuộc độ dày hệ; vui lòng yêu cầu bảng số liệu hệ (độ dày, cấp độ giãn, cơ sở thử) trước khi chọn."
    ),
    apps: null, surface: null, params: null, system: null,
  },
  {
    code: "HN-EX-704", factory: null, listing: true,
    name: L("Heat-Reflective Topcoat", "热反射面漆", "Sơn phủ phản xạ nhiệt"),
    desc: L("Reflective exterior topcoat reducing solar heat build-up — data on request", "反射太阳辐射、降低表面温度的外墙面漆，数据备索", "Sơn phủ ngoại thất phản xạ nhiệt mặt trời — số liệu theo yêu cầu"),
    overview: L(
      "Solar-reflective exterior topcoat that reduces surface temperature build-up and cooling load. Reflection performance is grade- and colour-dependent; request the grade data sheet (reflectance values and test basis) before specification.",
      "反射太阳辐射、降低外墙表面温升与冷负荷的隔热面漆。反射性能随等级与颜色不同；选型前请索取等级数据表（反射率数值及测试依据）。",
      "Sơn phủ ngoại thất phản xạ bức xạ mặt trời, giảm nhiệt bề mặt và tải lạnh. Hiệu suất phản xạ tùy cấp và màu; vui lòng yêu cầu bảng số liệu cấp (giá trị phản xạ và cơ sở thử) trước khi chọn."
    ),
    apps: null, surface: null, params: null, system: null,
  },
  {
    code: "HN-EX-706", factory: null,
    name: L("Fluorocarbon Finish (Technical Grade)", "氟碳面漆（工业级）", "Sơn phủ fluorocarbon (cấp kỹ thuật)"),
    desc: L("FEVE finish — pencil hardness ≥ 2H, 1000 h accelerated weathering (lab data)", "氟碳面漆，铅笔硬度 ≥2H，人工加速老化 1000 h（实验室数据）", "Sơn phủ fluorocarbon — độ cứng bút chì ≥2H, lão hóa tăng tốc 1000 h (số liệu PTN)"),
    overview: L(
      "Two-pack self-drying fluorocarbon finish based on high-grade fluorocarbon resin: the strong C–F bond delivers outstanding weathering, heat and chemical resistance plus non-stick, low-friction surface. Technical indicators: fineness ≤ 20 μm; gloss (60°) ≥ 90 for glossy grades; pencil hardness ≥ 2H; cross-cut adhesion ≤ grade 1; cupping ≥ 4 mm; bend ≤ 2 mm; water resistance 240 h and petrol resistance 24 h without blistering/wrinkling/gloss loss; 1000 h accelerated weathering with gloss loss / chalking / cracking ≤ grade 1.",
      "以高级氟碳树脂为主要成膜物的双组份自干涂料。氟元素电负性大、碳氟键能强，具有特别优越的耐候性、耐热性、耐低温性、耐化学药品性及独特的不粘性和低摩擦性。技术指标：细度 ≤20 μm；光泽（60°）亮光 ≥90；铅笔硬度 ≥2H；附着力（划格法）≤1 级；杯突 ≥4 mm；弯曲 ≤2 mm；耐水性 240 h、耐汽油性 24 h 不起泡、不起皱、不失光；人工加速老化 1000 h，失光/粉化/龟裂 ≤1 级。",
      "Sơn phủ fluorocarbon 2 thành phần khô tự nhiên từ nhựa fluorocarbon cao cấp: liên kết C–F bền cho độ chịu thời tiết, nhiệt và hóa chất vượt trội cùng bề mặt không dính, ma sát thấp. Chỉ tiêu: độ mịn ≤ 20 μm; độ bóng (60°) ≥ 90 (cấp bóng); độ cứng bút chì ≥ 2H; bám dính cắt chéo ≤ cấp 1; đắp mặt ≥ 4 mm; uốn ≤ 2 mm; chịu nước 240 h, xăng 24 h không phồng/nhăn/mất bóng; lão hóa tăng tốc 1000 h, mất bóng/phấn/nứt ≤ cấp 1."
    ),
    apps: L("High-spec exterior steel and concrete; equipment and plant with combined weathering + chemical exposure.", "高要求室外钢构与混凝土；兼有耐候与耐化学品要求的设备与装置。", "Thép và bê tông ngoại thất yêu cầu cao; thiết bị vừa chịu thời tiết vừa chịu hóa chất."),
    surface: "prev_coat",
    params: {
      resin: "Fluorocarbon resin", color: "Per standard panel; metallic / matt on request",
      mix: "paint : hardener : thinner = 10 : 1 : 2",
      dry: "≤ 2 h touch / ≤ 48 h hard (25 °C, standard single coat)",
      finish: "Gloss (60°) ≥ 90 · matt by agreement",
      method: "Conventional spray (tip 1.5–2.0 mm, 0.3–0.5 MPa) · airless", thinner: "As per mix ratio; stir during use; filter 200 mesh", cleaner: "Matched HN FC thinner",
    },
    system: [["primer fully dried, dust-free", 0, ""], ["HN-EX-706", 2, "per spec"]],
  },
  {
    code: "HN-EX-707", factory: null,
    name: L("Waterborne Fluorocarbon / Metallic Paint", "水性氟碳漆/金属漆", "Sơn fluorocarbon/kim loại gốc nước"),
    desc: L("Single-pack waterborne metallic exterior — eco-friendly, alkali & colour fast", "单组份水性金属质感外墙涂料，环保抗碱保色", "Sơn ngoại thất hiệu ứng kim loại gốc nước 1 thành phần — thân thiện môi trường, chống kiềm giữ màu"),
    overview: L(
      "Single-pack waterborne metallic-texture exterior paint based on a premium fluorocarbon emulsion: waterborne environmental performance with strong resistance to acid, alkali and rain attack; excellent alkali resistance, colour and gloss retention.",
      "选用优质氟碳乳液制成的单组份水性金属质感外墙涂料，兼具水性涂料的环保性，能有效抵抗酸、碱、雨水等对漆膜的侵蚀，抗碱性极佳、保色保光性优良。",
      "Sơn ngoại thất hiệu ứng kim loại gốc nước 1 thành phần từ nhũ tương fluorocarbon cao cấp: thân thiện môi trường, kháng axit, kiềm và mưa tốt; chống kiềm xuất sắc, giữ màu giữ bóng."
    ),
    apps: L("High-specification decoration and protection of concrete, steel and timber building envelopes.", "对装饰和保护要求特高的混凝土、钢材、木材等建筑物墙体涂装。", "Trang trí và bảo vệ yêu cầu cao cho tường bê tông, thép, gỗ."),
    surface: "concrete",
    params: {
      resin: "Fluorocarbon emulsion + metallic pigment", color: "Solid / metallic colours", thinner: "Water 0–20 %",
      dry: "touch-dry ≤ 1 h (25 °C, ≤ 75 % RH)", recoat: "≥ 4 h (25 °C, ≤ 75 % RH)",
      method: "Spray · roller · brush", cleaner: "Water",
    },
    system: [["waterborne anti-alkali primer", 1, "8 m²/kg"], ["waterborne FC intermediate (optional)", 1, "8 m²/kg"], ["HN-EX-707", 2, "4 m²/kg"]],
  },
];

const CAT05 = [
  {
    code: "HN-AR-801", factory: "D821",
    name: L("Formaldehyde-Absorbing Interior Emulsion", "抗甲醛净味内墙乳胶漆", "Sơn nội thất nhũ tương khử formaldehyde"),
    desc: L("Low-odour matt interior emulsion — scrubable, lead & mercury free", "净味哑光内墙乳胶漆，可擦洗，不添加铅汞", "Sơn nội thất mờ ít mùi — chùi rửa được, không thêm chì thuỷ ngân"),
    overview: L(
      "Premium waterborne matt interior emulsion: rich colours, durable, strong hiding power, good adhesion, mould-resistant, alkali-resistant, easy application and scrubable. Formulated without added lead or mercury.",
      "高档优质水性哑光内墙乳胶漆，色彩丰富、经久耐用；遮盖力强、附着力佳、优质防霉、抗碱性好、施工性能优良、可擦洗。本品不添加铅和汞，安全可靠。",
      "Sơn nhũ tương nội thất mờ gốc nước cao cấp: màu phong phú, bền; độ che phủ mạnh, bám dính tốt, chống nấm mốc, chịu kiềm, thi công dễ, chùi rửa được. Không thêm chì và thuỷ ngân."
    ),
    apps: L("Decoration and protection of interior base walls — render, plasterboard, etc.", "室内基层墙面（抹灰面、石膏板面等）的装饰与保护。", "Trang trí và bảo vệ tường nền trong nhà — vữa, tấm thạch cao..."),
    surface: "concrete",
    params: {
      resin: "Acrylic copolymer emulsion", color: "Per HN colour card", solids: "≈ 32 % (white, nominal)",
      dft: "25 μm / coat (WFT 80 μm)", coverage: "≈ 12 m²/L per coat (theoretical)", dry: "0.5–1 h touch / 2–3 h recoat (25 °C, 50 % RH)",
      finish: "Matt", thinner: "Water ≤ 20 % (brush/roller 10–20 %; airless usually none)", cleaner: "Water",
      method: "Brush · roller · conventional spray · airless spray",
    },
    system: [["anti-alkali primer (high-alkali) / general primer", 1, "1 coat"], ["HN-AR-801", 2, "2 coats"]],
  },
  {
    code: "HN-AR-802", factory: null,
    name: L("Premium Weather-Resistant Exterior Emulsion", "特级耐候外墙乳胶漆", "Sơn ngoại thất nhũ tương chịu thời tiết cao cấp"),
    desc: L("Pure-acrylic exterior wall paint — excellent weathering and mould resistance", "纯丙乳液外墙漆，耐候防霉极佳", "Sơn tường ngoại thất acrylic nguyên chất — chịu thời tiết và chống nấm xuất sắc"),
    overview: L(
      "Premium exterior wall paint based on a pure-acrylic emulsion with pigments, fillers and additives: excellent weathering, strong adhesion, good water and alkali resistance and outstanding mould resistance. Excellent inter-coat adhesion and protection over HN sealers / putties.",
      "由纯丙乳液、颜填料和助剂组成的外墙漆。漆膜耐候性极好，附着力强，耐水耐碱性佳，防霉效果极佳；与封闭底漆或腻子配套使用，层间附着力和保护性能极佳。",
      "Sơn tường ngoại thất từ nhũ tương acrylic nguyên chất với bột màu, chất độn và phụ gia: chịu thời tiết cực tốt, bám dính mạnh, chịu nước và kiềm tốt, chống nấm mốc xuất sắc; phối hợp tuyệt vời với sơn lót/bột trét HN."
    ),
    apps: L("Exterior walls: cement render, plaster, asbestos-cement board, concrete; finish over HN sealers / texture coats / putties.", "外墙：水泥砂浆、灰泥、水泥石棉板、混凝土等表面，及封闭底漆/浮雕底漆/腻子之上的面涂。", "Tường ngoài: vữa xi măng, thạch cao, tấm amiang xi măng, bê tông; lớp phủ trên sơn lót/hiệu ứng/bột trét HN."),
    surface: "concrete",
    params: {
      resin: "Pure acrylic emulsion", color: "White (10000); others per colour card", finish: "Eggshell",
      solids: "37 %", density: "1.25–1.40 kg/L", flash: "None (waterborne)",
      coverage: "11.5 m²/L flat / 6.0 m²/L over texture (one coat)", dry: "1 h touch-dry (20 °C, 65 % RH)", recoat: "≥ 4 h – no limit",
      dft: "32 μm / coat (WFT 87 μm)", thinner: "Water ≤ 5 %", cleaner: "Water",
      method: "Spray · brush · roller",
    },
    system: [["HN sealer / texture primer / putty", 0, ""], ["HN-AR-802", 2, "2 coats"]],
  },
  {
    code: "HN-AR-803", factory: null, listing: true,
    name: L("Stone-Effect Texture System", "仿石纹理系统", "Hệ vân đá hiệu ứng đá"),
    desc: L("Granite-look textured facade system, lightweight — system data on request", "天然花岗岩效果轻质外墙系统，体系数据备索", "Hệ mặt tiền vân đá花岗岩 nhẹ — số liệu hệ thống theo yêu cầu"),
    overview: L(
      "Multi-coat textured facade system producing a natural granite look at a fraction of the weight of stone cladding. Build, particle grade and colour combinations are project-specified; request the system data sheet before specification.",
      "多层纹理外墙系统，呈现天然花岗岩效果，重量远低于石材干挂。膜厚、颗粒级配与颜色组合按项目定制；选型前请索取体系数据表。",
      "Hệ mặt tiền nhiều lớp tạo hiệu ứng đá hoa cương tự nhiên, nhẹ hơn nhiều so với ốp đá. Độ dày, cấp hạt và phối màu theo dự án; vui lòng yêu cầu bảng số liệu hệ."
    ),
    apps: null, surface: null, params: null, system: null,
  },
  {
    code: "HN-AR-804", factory: null, listing: true,
    name: L("Intumescent Fire-Retardant Coatings", "膨胀型防火涂料", "Sơn chống cháy nở phồng"),
    desc: L("Expands under heat to insulate the substrate — ratings & certificates on request", "遇热膨胀隔热，耐火等级与证书备索", "Nở khi nhiệt cách nhiệt nền — cấp chịu lửa và chứng nhận theo yêu cầu"),
    overview: L(
      "Intumescent coatings that expand under fire to form an insulating char, protecting steel and substrates. Fire ratings differ per system and substrate thickness; certificates and test reports for the applicable system are available on request.",
      "遇火膨胀形成隔热炭化层，保护钢材及基材。耐火极限随体系与基材厚度不同；适用体系的证书与检测报告备索。",
      "Sơn nở phồng khi cháy tạo lớp cách nhiệt bảo vệ thép và nền. Cấp chịu lửa tùy hệ và độ dày nền; chứng nhận và báo cáo thử của hệ phù hợp có theo yêu cầu."
    ),
    apps: null, surface: null, params: null, system: null,
  },
  {
    code: "HN-AR-805", factory: null,
    name: L("Healthy-Home Interior Emulsion (Kids' Rooms)", "健康儿童房内墙乳胶漆", "Sơn nội thất lành mạnh cho phòng trẻ"),
    desc: L("Silk-sheen interior emulsion — smooth, scrubable, lead & mercury free", "丝光内墙乳胶漆，漆膜细腻可擦洗，不添加铅汞", "Sơn nội thất bóng tơ — mịn, chùi rửa được, không thêm chì thuỷ ngân"),
    overview: L(
      "Premium interior emulsion for protecting and beautifying interior walls: smooth, fine film with strong hiding power, easy to clean; strong coverage, good adhesion, mould-resistant, alkali-resistant, silk-sheen finish and scrubable. No added lead or mercury.",
      "保护及美化室内墙壁的高档墙面漆。漆膜光滑细腻，遮盖力强，易清洁；附着力佳，优质防霉，抗碱性良好，高质丝光墙面，擦洗性强。本品不添加铅和汞。",
      "Sơn nội thất cao cấp bảo vệ và làm đẹp tường trong nhà: màng mịn, độ che mạnh, dễ vệ sinh; bám dính tốt, chống nấm, chịu kiềm, bề mặt bóng tơ, chùi rửa được. Không thêm chì và thuỷ ngân."
    ),
    apps: L("Decoration and protection of interior base walls — render, plasterboard, etc.", "室内基层墙面（抹灰面、石膏板面等）的装饰与保护。", "Trang trí và bảo vệ tường nền trong nhà — vữa, thạch cao..."),
    surface: "concrete",
    params: {
      resin: "Vinyl acetate copolymer emulsion", color: "Per HN colour card", solids: "≈ 45 % (white, nominal)",
      dft: "28 μm / coat (WFT 80 μm)", coverage: "≈ 12 m²/L per coat (theoretical)", dry: "0.5–1 h touch / 2–3 h recoat (25 °C, 50 % RH)",
      finish: "Silk sheen", thinner: "Water, moderate", cleaner: "Water",
      method: "Brush · roller · conventional spray · airless spray",
    },
    system: [["anti-alkali primer (high-alkali) / general primer", 1, "1 coat"], ["HN-AR-805", 2, "2 coats"]],
  },
  {
    code: "HN-AR-806", factory: null,
    name: L("Solvent-Borne Acrylic Facade Paint", "油性建筑涂料（丙烯酸外墙漆）", "Sơn ngoại thất acrylic gốc dầu"),
    desc: L("Single-pack acrylic facade paint — weathering + dirt resistance, −10 °C application", "单组份丙烯酸外墙漆，耐候抗污，可 −10 ℃ 施工", "Sơn mặt tiền acrylic 1 thành phần — chịu thời tiết, kháng bẩn, thi công −10 °C"),
    overview: L(
      "Acrylic-based solvent-borne exterior paint with good colour retention and application properties; protects and decorates interior / exterior walls and concrete and finishes textured (relief) systems. Good adhesion and water resistance, weathers well, resists mild chemicals, acid rain and mould; applicable down to about −10 °C.",
      "丙烯酸基外墙油漆，保色及施工性能良好，为室内外墙壁、混凝土表面提供保护及装饰，也可用作浮雕涂层系统之面漆。附着力佳、耐水优异、耐候性好，能抵抗温和化学品、酸雨及霉菌侵蚀；施工容易，可在 −10 ℃ 左右施工。",
      "Sơn ngoại thất gốc acrylic: giữ màu và thi công tốt; bảo vệ trang trí tường và bê tông trong/ngoài trời, làm lớp phủ cuối cho hệ relief. Bám dính tốt, chịu nước, chịu thời tiết; kháng hóa chất nhẹ, mưa axit, nấm mốc; thi công được tới −10 °C."
    ),
    apps: L("Interior / exterior concrete walls; finish for textured relief systems.", "室内外混凝土墙壁；浮雕涂层系统的面漆。", "Tường bê tông trong/ngoài trời; lớp phủ cuối cho hệ浮雕."),
    surface: "concrete",
    params: {
      resin: "Acrylic", color: "Wide colour range", finish: "Matt", flash: "38 °C", density: "1.4 kg/L", solids: "50 %",
      coverage: "10 m²/L @ 50 μm DFT", dry: "1 h / 24 h hard (25 °C, 70 % RH)", recoat: "4 h – no limit",
      method: "Airless spray · brush · roller · conventional spray", thinner: "brush & roller 10 % · airless 10 % · spray 15 %", cleaner: "Matched HN acrylic thinner",
    },
    system: [["solvent-borne sealing primer", 1, "0.10 L/m²"], ["HN-AR-806", 2, "0.22 L/m² flat / 0.30 L/m² relief"]],
  },
  {
    code: "HN-AR-807", factory: null,
    name: L("Tile-Renovation Epoxy Primer", "瓷砖翻新专用底漆", "Sơn lót epoxy cải tạo gạch"),
    desc: L("Two-pack epoxy primer that grips tile & glass — refinish without hacking off", "双组份强附着环氧底漆，直接涂瓷砖玻璃，免铲除翻新", "Sơn lót epoxy 2 thành phần bám gạch & kính — cải tạo không cần đục"),
    overview: L(
      "Two-pack epoxy primer with tenacious adhesion, formulated for glossy surfaces such as tile and glass: refinishing old tiled walls without heavy putty or hacking — reducing building load and simplifying renovation. Excellent chemical resistance.",
      "双组份具有强附着力的环氧底漆，专用涂于瓷砖、玻璃等光滑表面：旧墙翻新不必铲除瓷砖、不必刮涂厚腻子，减少建筑物负重，使翻新施工简单化、经济化。耐化学品性能优异。",
      "Sơn lót epoxy 2 thành phần bám dính cực mạnh, chuyên cho bề mặt bóng như gạch và kính: cải tạo tường gạch cũ không cần đục bỏ hay trét dày — giảm tải công trình, đơn giản hóa và kinh tế hóa cải tạo. Chịu hóa chất xuất sắc."
    ),
    apps: L("Direct adhesion primer on tile, glass and other hard-to-adhere surfaces for renovation systems.", "直接涂装于瓷砖、玻璃等难附着表面的翻新体系专用底漆。", "Sơn lót bám trực tiếp trên gạch, kính và bề mặt khó bám cho hệ cải tạo."),
    surface: "tile",
    params: {
      resin: "Epoxy", color: "White, grey and other colours", mix: "3 : 1 (by volume) = 5 : 1 (by weight)", potlife: "5 h (20 °C)",
      flash: "26 °C", density: "1.4 kg/L", solids: "48 %",
      coverage: "≈ 5 m²/L @ 48 μm DFT", dry: "4 h / 7 d (25 °C, 70 % RH)", recoat: "6 h – no limit", finish: "Flat",
      method: "Airless spray · brush · conventional spray", thinner: "brush & roller 5–10 % · airless 5 % · spray 15 %", cleaner: "Matched HN epoxy thinner",
    },
    system: [["HN-AR-807", 1, "0.20 L/m²"], ["HN-AC-405 PU finish", 2, "per spec"]],
  },
];

const CAT06 = [
  { code: "HN-CUSTOM-01", factory: null, listing: true,
    name: L("Performance Tuning", "性能调校", "Điều chỉnh hiệu suất"),
    desc: L("Hardness, flexibility, corrosion class, temperature rating, chemical resistance", "硬度、柔韧性、防腐等级、耐温等级、耐化学品", "Độ cứng, độ dẻo, cấp ăn mòn, cấp nhiệt, chịu hóa chất"),
    overview: L("Performance-matched formulations: hardness, flexibility, corrosivity class, temperature rating and chemical resistance tuned to your specification.", "按规格调校性能：硬度、柔韧性、防腐等级、耐温等级及耐化学品性能。", "Phối chế theo thông số: độ cứng, độ dẻo, cấp ăn mòn, cấp nhiệt và khả năng chịu hóa chất theo yêu cầu."),
    apps: null, surface: null, params: null, system: null },
  { code: "HN-CUSTOM-02", factory: null, listing: true,
    name: L("Colour Matching", "调色服务", "Pha màu"),
    desc: L("RAL, Pantone, custom samples, metallic & pearlescent effects", "RAL、Pantone、定制样品、金属与珠光效果", "RAL, Pantone, mẫu riêng, hiệu ứng kim loại & ngọc trai"),
    overview: L("Colour matching to RAL / Pantone references with custom samples, metallic and pearlescent effects.", "按 RAL/Pantone 调色，提供定制样品、金属与珠光效果。", "Pha màu theo RAL / Pantone kèm mẫu riêng, hiệu ứng kim loại và ngọc trai."),
    apps: null, surface: null, params: null, system: null },
  { code: "HN-CUSTOM-03", factory: null, listing: true,
    name: L("Compliance Documentation", "合规文件", "Hồ sơ tuân thủ"),
    desc: L("REACH / RoHS-aligned documentation; destination-market scope confirmed per project", "REACH/RoHS 对齐文件；目的市场范围按项目确认", "Hồ sơ theo REACH / RoHS; phạm vi thị trường xác nhận theo dự án"),
    overview: L("Compliance documentation support for destination markets — REACH / RoHS-aligned product lines; specific scopes (food contact, drinking water, marine certificates) are confirmed per project and available on request.", "面向目的市场的合规文件支持——产品线对齐 REACH/RoHS；特定范围（食品接触、饮用水、船舶证书）按项目确认、备索。", "Hỗ trợ hồ sơ tuân thủ cho thị trường nhập — dòng sản phẩm theo REACH / RoHS; phạm vi cụ thể (tiếp xúc thực phẩm, nước uống, chứng nhận hàng hải) xác nhận theo dự án."),
    apps: null, surface: null, params: null, system: null },
  { code: "HN-CUSTOM-04", factory: null, listing: true,
    name: L("OEM / Private Label", "OEM / 贴牌", "OEM / Nhãn riêng"),
    desc: L("Custom drum labels, branded packaging, multilingual TDS/MSDS", "定制桶身标签、品牌包装、多语言 TDS/MSDS", "Nhãn thùng riêng, bao bì thương hiệu, TDS/MSDS đa ngữ"),
    overview: L("OEM / private-label service: custom drum labels, branded packaging, multilingual TDS / MSDS and co-branded collateral.", "OEM/贴牌服务：定制桶身标签、品牌包装、多语言 TDS/MSDS 及联合品牌物料。", "Dịch vụ OEM / nhãn riêng: nhãn thùng theo yêu cầu, bao bì thương hiệu, TDS / MSDS đa ngữ và tài liệu đồng thương hiệu."),
    apps: null, surface: null, params: null, system: null },
  { code: "HN-CUSTOM-08", factory: null, listing: true,
    name: L("Marine & Ship Coatings", "船舶与海洋涂料", "Sơn hàng hải và tàu biển"),
    desc: L("Hull, boot-top, cargo hold and tank lines — certificates available on request", "船底、水线、货舱与液舱系列，证书备索", "Dãy sơn thân tàu, đường nước, hầm hàng và khoang chứa — chứng nhận theo yêu cầu"),
    overview: L(
      "Marine coating lines for hulls, boot-tops, cargo holds and tanks are supplied with full data sheets; applicable certificates for the specific system are available on request.",
      "供应船底、水线间、货舱及液舱等船舶涂料系列，附完整数据表；适用体系的相关证书备索。",
      "Cung ứng dải sơn hàng hải cho thân tàu, đường nước, hầm hàng và khoang chứa kèm bảng số liệu đầy đủ; chứng nhận áp dụng cho hệ cụ thể có theo yêu cầu."
    ),
    apps: null, surface: null, params: null, system: null },
  { code: "HN-CUSTOM-11", factory: null,
    name: L("Waterborne Acrylic Finish", "水性丙烯酸面漆", "Sơn phủ acrylic gốc nước"),
    desc: L("Single-pack waterborne acrylic finish — easy repair, no recoat limit", "单组份水性丙烯酸面漆，易修补，无重涂时间限制", "Sơn phủ acrylic gốc nước 1 thành phần — dễ sửa, không giới hạn sơn lại"),
    overview: L(
      "Single-pack premium waterborne acrylic finish with good colour retention; the film resists abrasion, impact, brine, mineral oils and many chemicals; easy to repair with no recoating-time limit.",
      "单组份高级水性丙烯酸基面漆，保色性良好；漆膜耐磨损、抗碰撞、耐盐水、矿物油及多种化学品；易修补，无重涂时间限制。",
      "Sơn phủ acrylic gốc nước cao cấp 1 thành phần giữ màu tốt; màng sơn chịu mài mòn, va đập, nước muối, dầu khoáng và nhiều hóa chất; dễ sửa, không giới hạn sơn lại."
    ),
    apps: L("Finish on steel and concrete in medium-to-severe environments; decorative protection of equipment and machinery.", "中等至严重腐蚀环境钢构与混凝土的面漆；设备机械的装饰保护。", "Lớp phủ trên thép và bê tông môi trường trung bình đến nghiêm trọng; trang trí bảo vệ thiết bị máy móc."),
    surface: "prev_coat",
    params: {
      resin: "Waterborne acrylic", color: "White, silver and other colours", density: "1.1 kg/L", flash: "38 °C",
      solids: "35 %", coverage: "10 m²/L @ 35 μm DFT", dry: "1 h / 24 h hard", recoat: "4 h – no limit",
      thinner: "Water: brush 10 % · airless 5 % · spray 20 %", cleaner: "Water",
      method: "Airless spray · brush · conventional spray",
    },
    system: [["waterborne anti-rust primer (HN supply)", 1, "0.10 L/m²"], ["HN-CUSTOM-11", 2, "0.20 L/m²"]],
  },
  { code: "HN-CUSTOM-12", factory: null, listing: true,
    name: L("Waterborne PU Finish", "水性聚氨酯面漆", "Sơn phủ PU gốc nước"),
    desc: L("Waterborne polyurethane topcoat — full data sheet on request", "水性聚氨酯面漆，完整 TDS 备索", "Sơn phủ PU gốc nước — TDS đầy đủ theo yêu cầu"),
    overview: L("Waterborne polyurethane topcoat line for low-odour industrial and equipment duty; request the full TDS for the applicable grade.", "低气味工业与设备用途的水性聚氨酯面漆系列；请索取适用等级的完整 TDS。", "Dải sơn phủ polyurethane gốc nước cho công nghiệp và thiết bị ít mùi; vui lòng yêu cầu TDS đầy đủ cho cấp phù hợp."),
    apps: null, surface: null, params: null, system: null },
  { code: "HN-CUSTOM-13", factory: null,
    name: L("Waterborne Epoxy Anti-Corrosion Coating", "水性环氧防腐漆", "Sơn epoxy chống ăn mòn gốc nước"),
    desc: L("Eco-friendly waterborne epoxy for metal anti-corrosion — above waterline & interiors", "环保水性环氧金属防腐，水线以上及舱内结构适用", "Epoxy gốc nước thân thiện môi trường chống ăn mòn kim loại — trên đường nước và kết cấu trong"),
    overview: L(
      "Waterborne epoxy anti-corrosion coating from a special epoxy-emulsion polymer with functional fillers / additives: abrasion resistance plus flexibility, eco-friendly, durable, cost-effective; air-drying and easy to apply, also coatable on not-fully-dry concrete.",
      "采用特种环氧高分子聚合物树脂乳液与功能型填料、助剂精制而成的水性防腐漆，集耐磨性与柔韧性于一体，环保耐用、性价比优越；自干、施工方便，亦可涂装于未干透的混凝土表面。",
      "Sơn chống ăn mòn epoxy gốc nước từ nhũ tương epoxy polymer đặc biệt với chất độn/phụ gia chức năng: chống mài mòn kèm độ dẻo, thân thiện môi trường, bền, kinh tế; khô tự nhiên, thi công dễ, sơn được bê tông chưa khô hoàn toàn."
    ),
    apps: L("Metal heavy-anti-corrosion fields — bridges, oil pipelines, ships, lifting machinery, steel structures, transformers, rolling stock; above-waterline and interior structures of offshore platforms and vessels.", "金属重防腐领域：桥梁、石油管道、船舶、起重机械、钢结构、变压器、火车、汽车等防腐要求较高的零部件；海洋平台及船体设计水线以上部位与内部结构。", "Lĩnh vực chống ăn mòn kim loại nặng: cầu, ống dầu, tàu, máy nâng, kết cấu thép, máy biến áp, toa xe; phần trên đường nước và kết cấu bên trong giàn khoan và tàu."),
    surface: "steel_clean",
    params: {
      resin: "Waterborne epoxy", color: "Wide colour range",
      coverage: "10 m²/L @ 28 μm DFT", dry: "1 h touch / 48 h hard (20 °C, 70 % RH)", recoat: "8 h – no limit",
      thinner: "Water", cleaner: "Water", method: "Brush · spray · airless spray",
    },
    system: [["waterborne epoxy anti-rust primer", 1, "8 m²/kg"], ["HN-CUSTOM-13", 2, "4 m²/kg"]],
  },
  { code: "HN-CUSTOM-15", factory: null,
    name: L("Architectural Concrete Protection System", "清水混凝土保护体系", "Hệ bảo vệ bê tông thanh tao"),
    desc: L("Transparent weathering protection keeping the bare-concrete look", "透明防护保持清水混凝土原貌", "Bảo vệ trong giữ thẩm mỹ bê tông thô"),
    overview: L(
      "Protection system for exposed (as-cast) concrete: prevents internal rusting and ageing of reinforcement and boosts anti-stain and sunlight resistance. Treated surfaces stay uniform in colour with excellent water repellency and scrub resistance while retaining the original concrete aesthetic.",
      "针对清水混凝土结构件的保护体系：防止混凝土内部锈蚀、老化，增强表面抗污、抗晒性能。涂装后表面色泽一致、拒水性能优秀、耐擦洗性能高，同时保持清水混凝土原有的建筑风格。",
      "Hệ bảo vệ cho bê tông thanh tao: ngăn gỉ và lão hóa bên trong, tăng kháng bẩn và chống nắng. Bề mặt sau xử lý màu đồng nhất, chống nước tốt, chùi rửa bền, giữ nguyên thẩm mỹ bê tông."
    ),
    apps: L("Interior / exterior protection of buildings in concrete, as-cast concrete and cement products.", "混凝土、清水混凝土及水泥制品等碱性材料建筑物的内外墙保护。", "Bảo vệ trong/ngoài trời cho công trình bê tông, bê tông thanh tao và sản phẩm xi măng."),
    surface: "concrete",
    params: {
      resin: "Fluorocarbon emulsion system", color: "Transparent / transparent grey", solids: "49 %",
      coverage: "12 m²/L @ 40 μm DFT", dry: "1 h / 3 d (20 °C)", recoat: "1 h – 7 d", finish: "Matt",
      method: "Airless spray · brush · conventional spray", cleaner: "Matched HN cleaner",
    },
    system: [["exposed-concrete sealer (HN supply)", 1, "0.10–0.12 L/m²"], ["colour-adjusting coat", 2, "0.20–0.25 L/m²"], ["HN-CUSTOM-15", 2, "0.15–0.20 L/m²"]],
  },
];

const CATEGORY_MODELS = { "CAT-01": CAT01, "CAT-02": CAT02, "CAT-03": CAT03, "CAT-04": CAT04, "CAT-05": CAT05, "CAT-06": CAT06 };

// ─────────────────────────────────────────────────────────────────────────────
// 4. 详情渲染模板（三语）
// ─────────────────────────────────────────────────────────────────────────────
const SEC = {
  overview: L("Overview", "产品概述", "Tổng quan"),
  apps: L("Typical applications", "适用范围", "Phạm vi ứng dụng"),
  params: L("Physical & application data", "物理与应用参数", "Thông số vật lý và thi công"),
  surface: L("Surface preparation", "表面处理", "Xử lý bề mặt"),
  system: L("Recommended system (HN codes)", "建议油漆配套（HN 型号）", "Hệ thống khuyến nghị (mã HN)"),
  safety: L("Safety", "安全守则", "An toàn"),
  srcNote: L(
    "Values quoted from the manufacturer's technical data sheet; confirm the batch TDS before specification.",
    "以上参数取自制造商技术说明书；选型前请以随批 TDS 为准。",
    "Thông số lấy từ bảng dữ liệu kỹ thuật của nhà sản xuất; vui lòng đối chiếu TDS theo lô trước khi chọn hệ."
  ),
  coats: L("coat(s)", "遍", "lớp"),
  rate: L("at", "用量", "suất"),
};

const SAFETY = {
  solvent: L(
    "Flammable — keep away from heat and ignition; no smoking in the working area. Use only with adequate ventilation; avoid inhalation of vapours and spray mist; avoid skin and eye contact. Store in a cool, dry place. For professional use only.",
    "易燃物品，远离火源，施工范围内不宜吸烟。施工时必须保持空气流通并采取防护措施，避免吸入溶剂蒸气或漆雾，皮肤、眼睛不得接触本品。储存在阴凉干爽的地方。仅限专业用途。",
    "Dễ cháy — tránh nhiệt và nguồn lửa; không hút thuốc trong khu vực thi công. Chỉ dùng nơi thông gió tốt; tránh hít hơi dung môi và sương sơn; tránh tiếp xúc da và mắt. Bảo quản nơi khô mát. Chỉ dùng chuyên nghiệp."
  ),
  water: L(
    "Waterborne product: keep containers tightly closed and out of reach of children. Ensure good ventilation during use and drying; wear a dust mask when sanding. Do not pour thinned paint back into the original container. Store in a cool, dry place, protect from frost.",
    "水性产品：油漆罐必须盖紧并置于儿童触及不到的地方。使用及待干过程中保持良好通风；打磨时应戴口罩。已稀释的油漆不要倒回原包装。存放于阴凉干燥处，严防霜冻。",
    "Sản phẩm gốc nước: đậy kín hộp và để xa tầm tay trẻ em. Thông gió tốt khi sử dụng và sơn khô; đeo khẩu trang khi mài. Không đổ sơn đã pha loãng lại vào hộp gốc. Bảo quản nơi khô mát, tránh đóng băng."
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// 3b. 参数值术语词典（把值里的英文术语替换为 zh/vi；en 原样）
// ─────────────────────────────────────────────────────────────────────────────
const VALUE_TERMS = {
  zh: [
    ["Matched HN epoxy thinner", "HN 配套环氧稀释剂"],
    ["Matched HN PU thinner", "HN 配套聚氨酯稀释剂"],
    ["Matched HN acrylic thinner", "HN 配套丙烯酸稀释剂"],
    ["Matched HN alkyd thinner", "HN 配套醇酸稀释剂"],
    ["Matched HN CR thinner", "HN 配套氯磺化/氯化橡胶稀释剂"],
    ["Matched HN FC thinner", "HN 配套氟碳稀释剂"],
    ["Matched HN silicone thinner", "HN 配套有机硅稀释剂"],
    ["Matched HN cleaner", "HN 配套清洗剂"],
    ["(by weight)", "（重量比）"],
    ["(by volume)", "（体积比）"],
    ["Airless spray", "无气喷涂"],
    ["airless", "无气喷涂"],
    ["Conventional spray", "普通喷涂"],
    ["conventional spray", "普通喷涂"],
    ["Notched trowel / spiked roller", "齿形刮板 / 消泡辊"],
    ["Not required", "无需重涂"],
    ["no limit", "不限"],
    ["no limit (25 °C)", "不限（25 ℃）"],
    ["Air-dry", "自干"],
    ["1-K", "单组份"],
    ["2-K", "双组份"],
    ["touch-dry", "表干"],
    ["full cure", "完全固化"],
    ["hard dry", "硬干"],
    ["h hard", "h 硬干"],
    ["d hard", "d 硬干"],
    ["foot traffic", "可上人"],
    ["one coat", "一道"],
    ["single coat", "一道"],
    ["per coat (theoretical)", "每道（理论）"],
    ["per coat", "每道"],
    ["by substrate temp.", "按底材温度"],
    ["Wide range incl. metallics", "多种颜色（含金属色）"],
    ["Wide colour range", "多种颜色"],
    ["White, silver and other colours", "白色、银色及其他颜色"],
    ["Silver, black and other colours", "银色、黑色及其他颜色"],
    ["White, grey and other colours", "白色、灰色等多种颜色"],
    ["Red-grey / grey", "红灰色 / 灰色"],
    ["Iron-oxide red", "铁红色"],
    ["Black / grey", "黑色 / 灰色"],
    ["Black / brown", "黑色 / 棕色"],
    ["Red-brown", "红褐色"],
    ["Per HN colour card", "见 HN 色卡"],
    ["Per standard panel; metallic / matt on request", "按标准样板；金属色/哑光可商定"],
    ["White (10000); others per colour card", "白色（10000）；其他见色卡"],
    ["Base clear; hardener light-yellow", "漆基无色透明；固化剂浅黄透明"],
    ["Transparent / transparent grey", "透明 / 透明灰"],
    ["Clear", "透明"],
    ["On request", "按需"],
    ["Matt / semi-matt", "哑光 / 半哑光"],
    ["Semi-gloss / gloss", "半光 / 亮光"],
    ["Semi-gloss", "半光"],
    ["semi-matt", "半哑光"],
    ["matt by agreement", "哑光可商定"],
    ["Matt", "哑光"],
    ["matt", "哑光"],
    ["Gloss", "有光"],
    ["Flat", "平光"],
    ["Eggshell", "蛋壳光"],
    ["Silk sheen", "丝光"],
    ["Acrylic polyurethane", "丙烯酸聚氨酯"],
    ["Acrylic copolymer emulsion", "丙烯酸共聚物乳液"],
    ["Vinyl acetate copolymer emulsion", "醋酸乙烯共聚物乳液"],
    ["Pure acrylic emulsion", "纯丙乳液"],
    ["Waterborne epoxy", "水性环氧"],
    ["Waterborne acrylic", "水性丙烯酸"],
    ["Self-leveling epoxy", "自流平环氧"],
    ["Epoxy coal-tar", "环氧煤焦沥青"],
    ["Epoxy (glass-flake)", "环氧（玻璃鳞片）"],
    ["Epoxy (zinc phosphate)", "环氧（磷酸锌）"],
    ["Heat-resistant silicone resin", "耐热有机硅树脂"],
    ["Fluorocarbon (FEVE)", "氟碳（FEVE）"],
    ["Fluorocarbon emulsion + metallic pigment", "氟碳乳液 + 金属粉"],
    ["Fluorocarbon emulsion system", "氟碳乳液体系"],
    ["Fluorocarbon resin", "氟碳树脂"],
    ["Chlorinated rubber (acrylic-modified)", "氯化橡胶（丙烯酸改性）"],
    ["Modified alkyd", "改性醇酸"],
    ["Polyurethane", "聚氨酯"],
    ["Epoxy", "环氧树脂"],
    ["Acrylic", "丙烯酸树脂"],
    ["Silicone", "有机硅"],
    ["Water", "水"],
    ["brush & roller", "刷涂和辊涂"],
    ["brush and roller", "刷涂和辊涂"],
    ["brush", "刷涂"],
    ["roller", "辊涂"],
    ["spray", "喷涂"],
    ["Water:", "水："],
    ["As per mix ratio; stir during use; filter 200 mesh", "按配比稀释，使用中不断搅拌，200 目过滤"],
    ["As instructed per batch", "按批次说明"],
    ["As per batch TDS", "按批次 TDS"],
    ["By supply batch (see drum label)", "按供货批次（见桶身标签）"],
    ["See TDS", "见 TDS"],
    ["High solids", "高固含"],
    ["Base 25 kg / hardener 2.5 kg kits", "漆基 25 kg / 固化剂 2.5 kg 组合装"],
    ["(0.4–0.5 mm tip, 15–25 MPa)", "（喷嘴 0.4–0.5 mm，15–25 MPa）"],
    ["(0.3–0.6 MPa)", "（0.3–0.6 MPa）"],
    ["Water 0–20 %", "水 0–20 %"],
    ["Water ≤ 20 %", "水 ≤ 20 %"],
    ["Water ≤ 5 %", "水 ≤ 5 %"],
    ["Water, moderate", "清水适量"],
    ["水, moderate", "清水适量"],
  ],
  vi: [
    ["Matched HN epoxy thinner", "Dung môi epoxy HN"],
    ["Matched HN PU thinner", "Dung môi PU HN"],
    ["Matched HN acrylic thinner", "Dung môi acrylic HN"],
    ["Matched HN alkyd thinner", "Dung môi alkyd HN"],
    ["Matched HN CR thinner", "Dung môi CR HN"],
    ["Matched HN FC thinner", "Dung môi FC HN"],
    ["Matched HN silicone thinner", "Dung môi silicone HN"],
    ["Matched HN cleaner", "Dung dịch vệ sinh HN"],
    ["(by weight)", "(theo khối lượng)"],
    ["(by volume)", "(theo thể tích)"],
    ["Airless spray", "Phun airless"],
    ["airless spray", "phun airless"],
    ["Conventional spray", "Phun thường"],
    ["conventional spray", "phun thường"],
    ["Notched trowel / spiked roller", "Bay răng / lăn gai"],
    ["Not required", "Không cần"],
    ["no limit", "không giới hạn"],
    ["Air-dry", "Khô tự nhiên"],
    ["1-K", "1 thành phần"],
    ["2-K", "2 thành phần"],
    ["touch-dry", "chạm khô"],
    ["full cure", "đóng rắn hoàn toàn"],
    ["foot traffic", "đi lại"],
    ["one coat", "một lớp"],
    ["single coat", "một lớp"],
    ["per coat (theoretical)", "mỗi lớp (lý thuyết)"],
    ["per coat", "mỗi lớp"],
    ["by substrate temp.", "theo nhiệt độ nền"],
    ["Wide range incl. metallics", "Nhiều màu (có màu kim loại)"],
    ["Wide colour range", "Nhiều màu"],
    ["White, silver and other colours", "Trắng, bạc và màu khác"],
    ["Silver, black and other colours", "Bạc, đen và màu khác"],
    ["White, grey and other colours", "Trắng, xám và màu khác"],
    ["Red-grey / grey", "Đỏ xám / xám"],
    ["Iron-oxide red", "Đỏ sắt"],
    ["Black / grey", "Đen / xám"],
    ["Black / brown", "Đen / nâu"],
    ["Red-brown", "Nâu đỏ"],
    ["Per HN colour card", "Theo bảng màu HN"],
    ["Per standard panel; metallic / matt on request", "Theo mẫu chuẩn; màu kim loại/mờ theo yêu cầu"],
    ["White (10000); others per colour card", "Trắng (10000); khác theo bảng màu"],
    ["Base clear; hardener light-yellow", "Đế trong; chất đóng rắn vàng nhạt"],
    ["Transparent / transparent grey", "Trong / xám trong"],
    ["Clear", "Trong"],
    ["On request", "Theo yêu cầu"],
    ["Matt / semi-matt", "Mờ / bán mờ"],
    ["Semi-gloss / gloss", "Bán bóng / bóng"],
    ["Semi-gloss", "Bán bóng"],
    ["semi-matt", "bán mờ"],
    ["Matt", "Mờ"],
    ["matt", "mờ"],
    ["Gloss", "Bóng"],
    ["Flat", "Phẳng"],
    ["Eggshell", "Vỏ trứng"],
    ["Silk sheen", "Bóng tơ"],
    ["Acrylic polyurethane", "Acrylic-polyurethane"],
    ["Acrylic copolymer emulsion", "Nhũ tương copolymer acrylic"],
    ["Vinyl acetate copolymer emulsion", "Nhũ tương copolymer vinyl acetate"],
    ["Pure acrylic emulsion", "Nhũ tương acrylic nguyên chất"],
    ["Waterborne epoxy", "Epoxy gốc nước"],
    ["Waterborne acrylic", "Acrylic gốc nước"],
    ["Self-leveling epoxy", "Epoxy tự chảy"],
    ["Epoxy coal-tar", "Epoxy nhựa đường"],
    ["Epoxy (glass-flake)", "Epoxy (vảy thủy tinh)"],
    ["Epoxy (zinc phosphate)", "Epoxy (photphat kẽm)"],
    ["Heat-resistant silicone resin", "Nhựa silicone chịu nhiệt"],
    ["Fluorocarbon (FEVE)", "Fluorocarbon (FEVE)"],
    ["Fluorocarbon emulsion + metallic pigment", "Nhũ tương fluorocarbon + bột kim loại"],
    ["Fluorocarbon emulsion system", "Hệ nhũ tương fluorocarbon"],
    ["Fluorocarbon resin", "Nhựa fluorocarbon"],
    ["Chlorinated rubber (acrylic-modified)", "Cao su clo hóa (acrylic cải biến)"],
    ["Modified alkyd", "Alkyd cải biến"],
    ["brush & roller", "cọ và lăn"],
    ["brush and roller", "cọ và lăn"],
    ["brush", "cọ"],
    ["roller", "lăn"],
    ["spray", "phun"],
    ["Water:", "Nước:"],
    ["Water 0–20 %", "Nước 0–20 %"],
    ["Water ≤ 20 %", "Nước ≤ 20 %"],
    ["Water ≤ 5 %", "Nước ≤ 5 %"],
    ["Water, moderate", "Nước vừa đủ"],
    ["Water", "Nước"],
    ["As per mix ratio; stir during use; filter 200 mesh", "Theo tỷ lệ pha; khuấy khi dùng; lọc 200 mesh"],
    ["As instructed per batch", "Theo hướng dẫn từng lô"],
    ["As per batch TDS", "Theo TDS lô hàng"],
    ["By supply batch (see drum label)", "Theo lô cung cấp (xem nhãn thùng)"],
    ["See TDS", "Xem TDS"],
    ["High solids", "Hàm lượng rắn cao"],
    ["Base 25 kg / hardener 2.5 kg kits", "Đế 25 kg / chất đóng rắn 2,5 kg"],
    ["(0.4–0.5 mm tip, 15–25 MPa)", "(đầu phun 0,4–0,5 mm, 15–25 MPa)"],
    ["(0.3–0.6 MPa)", "(0,3–0,6 MPa)"],
  ],
};

function localizeValue(v, lang) {
  if (lang === "en") return v;
  // es/ar 复用 zh 词条的替换顺序（已按"长词优先"排好，避免 hard→hardener 类误伤）
  const pairs =
    lang === "es" || lang === "ar"
      ? VALUE_TERMS.zh.map(([en]) => [en, TR[lang][en]]).filter((p) => p[1] !== undefined)
      : VALUE_TERMS[lang];
  let out = v;
  for (const [en, loc] of pairs) out = out.split(en).join(loc);
  return out;
}

// 5 语取值：en/zh/vi 直取；es/ar 按英文原文查词典，查不到回退英文
function loc(v, lang) {
  if (typeof v !== "object" || !v) return "";
  if (lang === "es" || lang === "ar") return TR[lang][v.en] ?? v.en;
  return v[lang] ?? v.en;
}

function renderDetails(m, lang) {
  const sec = (k) => loc(SEC[k], lang);
  const out = [];
  out.push(`【${sec("overview")}】`);
  out.push(loc(m.overview, lang));
  out.push("");
  if (m.apps) { out.push(`【${sec("apps")}】`); out.push(loc(m.apps, lang)); out.push(""); }
  if (m.params) {
    out.push(`【${sec("params")}】`);
    for (const [k, v] of Object.entries(m.params)) out.push(`${loc(PLABEL[k], lang)}：${localizeValue(v, lang)}`);
    out.push("");
  }
  if (m.surface) { out.push(`【${sec("surface")}】`); out.push(loc(SURFACE[m.surface], lang)); out.push(""); }
  if (m.system && m.system.length) {
    out.push(`【${sec("system")}】`);
    const coatsWord = loc(SEC.coats, lang);
    for (const [code, coats, rate] of m.system) {
      if (!coats) { out.push(`${code}${rate ? " · ${rate}" : ""}`); continue; }
      out.push(`${code} ×${coats} ${coatsWord}${rate ? `（${rate}）` : ""}`);
    }
    out.push("");
  }
  const safetyKey = m.params && /water/i.test(String(m.params.thinner ?? "") + String(m.params.resin ?? "")) ? "water" : "solvent";
  out.push(`【${sec("safety")}】`);
  out.push(loc(SAFETY[safetyKey], lang));
  out.push("");
  out.push(`※ ${loc(SEC.srcNote, lang)}`);
  return out.join("\n");
}

function ts(s) {
  if (s.includes("`") || s.includes("${")) return JSON.stringify(s);
  return "`" + s + "`";
}
function lstr5(v) {
  return `{ en: ${ts(v.en)}, zh: ${ts(v.zh)}, vi: ${ts(v.vi)}, es: ${ts(tr5("es", v.en))}, ar: ${ts(tr5("ar", v.en))} }`;
}

function renderModels(cat) {
  const list = CATEGORY_MODELS[cat];
  return list.map((m) => {
    const desc = lstr5(m.desc);
    const details = m.overview
      ? `details: { en: ${ts(renderDetails(m, "en"))}, zh: ${ts(renderDetails(m, "zh"))}, vi: ${ts(renderDetails(m, "vi"))}, es: ${ts(renderDetails(m, "es"))}, ar: ${ts(renderDetails(m, "ar"))} }`
      : null;
    return `      { model: "${m.code}", desc: ${desc}${details ? `, ${details}` : ""} }`;
  }).join(",\n");
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. 类目级数据（沿用原三语标题，修正不可支撑的参数声明）
// ─────────────────────────────────────────────────────────────────────────────
const CATEGORY_META = `
  {
    code: "CAT-01",
    title: { en: "Anti-Corrosion Coatings", zh: "工业重防腐涂料", vi: "Sơn chống ăn mòn công nghiệp" },
    short: { en: "Epoxy · Polyurethane · Zinc-rich primers", zh: "环氧·聚氨酯·富锌底漆", vi: "Epoxy · PU · lót giàu kẽm" },
    description: {
      en: "High-build epoxy, polyurethane and zinc-rich primer systems for steel structures, pipelines, marine vessels and offshore platforms — complete primer / intermediate / topcoat systems selectable per ISO 12944 corrosivity categories.",
      zh: "高膜厚环氧、聚氨酯及富锌底漆体系，适用于钢结构、管道、船舶及海洋平台；底漆/中间漆/面漆成套供应，可按 ISO 12944 腐蚀等级选型。",
      vi: "Hệ epoxy dày, polyurethane và lót giàu kẽm cho kết cấu thép, đường ống, tàu biển và giàn ngoài khơi — hệ lót/lớp giữa/lớp phủ trọn bộ, chọn theo cấp ăn mòn ISO 12944.",
    },
    features: [
      { en: "Zinc-rich epoxy primer — 80 % zinc in dry film", zh: "富锌环氧底漆，干膜含锌量 80%", vi: "Lót epoxy giàu kẽm — 80 % kẽm trong màng khô" },
      { en: "Complete matched systems: primer → intermediate → topcoat", zh: "配套齐全：底漆 → 中间漆 → 面漆", vi: "Hệ phối hợp trọn bộ: lót → lớp giữa → lớp phủ" },
      { en: "Zinc-rich + MIO + PU builds of 80 – 250 μm DFT", zh: "富锌+云铁+聚氨酯体系，干膜总厚 80–250 μm", vi: "Hệ giàu kẽm + MIO + PU, tổng DFT 80–250 μm" },
      { en: "System selection per ISO 12944 corrosivity category", zh: "按 ISO 12944 腐蚀等级选型", vi: "Chọn hệ theo cấp ăn mòn ISO 12944" },
    ],
    specs: [
      { label: { en: "Base", zh: "基料", vi: "Nhựa nền" }, value: "Epoxy / PU / Zn-rich" },
      { label: { en: "DFT", zh: "干膜厚度", vi: "DFT" }, value: "80 – 250 μm" },
      { label: { en: "Zinc (primer)", zh: "含锌量（底漆）", vi: "Kẽm (lót)" }, value: "80 % d.f." },
      { label: { en: "Packaging", zh: "包装", vi: "Đóng gói" }, value: "20L / 200L" },
    ],
    categorySpecs: [
      { label: { en: "Zinc (primer)", zh: "含锌量", vi: "Kẽm" }, value: "80 %" },
      { label: { en: "System DFT", zh: "体系膜厚", vi: "DFT hệ" }, value: "80–250 μm" },
      { label: { en: "Pot life", zh: "适用期", vi: "Pot life" }, value: "2–8 h" },
      { label: { en: "Coats", zh: "涂层道数", vi: "Số lớp" }, value: "3–4" },
    ],
    image: "/images/product-anticorrosion.jpg",
    applications: [
      { en: "Bridges & chemical plants", zh: "桥梁与化工厂", vi: "Cầu & nhà máy hóa chất" },
      { en: "Marine & port steelwork", zh: "船舶与港口钢构", vi: "Thép tàu & cảng" },
      { en: "Storage tank exteriors & pipelines", zh: "储罐外壁与管道", vi: "Bồn chứa & đường ống" },
      { en: "Power plant steel & port terminals", zh: "电厂钢构与港口码头", vi: "Thép nhà máy điện & cảng" },
    ],
  },
  {
    code: "CAT-02",
    title: { en: "High-Temperature Coatings", zh: "工业耐高温涂料", vi: "Sơn chịu nhiệt công nghiệp" },
    short: { en: "Silicone · Ceramic · up to 600°C grades", zh: "有机硅·陶瓷·最高600℃等级", vi: "Silicone · ceramic · tới 600°C" },
    description: {
      en: "Silicone-based and inorganic ceramic high-temperature coatings for continuous hot service — hot pipes, exhaust ducts, chimneys, boilers and kilns; custom colours and temperature grades on request.",
      zh: "有机硅及无机陶瓷耐高温涂料，适用于热管道、排风管、烟囱、锅炉及窑炉等长期高温表面；可按需订制颜色与耐温等级。",
      vi: "Sơn chịu nhiệt silicone và ceramic vô cơ cho bề mặt nóng liên tục — ống nóng, ống xả, ống khói, lò hơi, lò nung; màu và cấp nhiệt riêng theo yêu cầu.",
    },
    features: [
      { en: "Aluminium silicone grade for surfaces up to 550 °C", zh: "铝粉有机硅等级，热表面长期耐温 550 ℃", vi: "Cấp silicone nhôm cho bề mặt tới 550 °C" },
      { en: "Single-pack, air-drying application", zh: "单组份自干施工", vi: "1 thành phần, khô tự nhiên" },
      { en: "Custom colours & temperature grades", zh: "可订制颜色与耐温等级", vi: "Màu & cấp nhiệt theo yêu cầu" },
      { en: "Total DFT kept ≤ 75 μm for high-temp service", zh: "高温使用总膜厚宜 ≤75 μm", vi: "Tổng DFT ≤ 75 μm khi dùng nhiệt cao" },
    ],
    specs: [
      { label: { en: "Base", zh: "基料", vi: "Nhựa nền" }, value: "Silicone / Ceramic" },
      { label: { en: "Temp Range", zh: "耐温范围", vi: "Nhiệt độ" }, value: "up to 550 °C (grades to 600)" },
      { label: { en: "DFT", zh: "干膜厚度", vi: "DFT" }, value: "25 – 75 μm" },
      { label: { en: "Cure", zh: "固化", vi: "Khâu đông" }, value: "Air-dry" },
    ],
    categorySpecs: [
      { label: { en: "Max temp (STD)", zh: "最高耐温（标准）", vi: "Nhiệt độ tối đa (chuẩn)" }, value: "550 °C" },
      { label: { en: "DFT", zh: "干膜厚度", vi: "DFT" }, value: "25–75 μm" },
      { label: { en: "Cure", zh: "固化", vi: "Khâu đông" }, value: "Air-dry" },
      { label: { en: "Packs", zh: "包装", vi: "Thành phần" }, value: "1-K" },
    ],
    image: "/images/product-hightemp.jpg",
    applications: [
      { en: "Industrial boilers & smokestacks", zh: "工业锅炉与烟囱", vi: "Lò hơi & ống khói" },
      { en: "Exhaust manifolds & kilns", zh: "排气歧管与窑炉", vi: "Ống xả & lò nung" },
      { en: "Steam pipes & turbine housings", zh: "蒸汽管道与涡轮壳体", vi: "Ống hơi & vỏ tuabin" },
      { en: "Engine blocks & heat-treatment fixtures", zh: "发动机缸体与热处理工装", vi: "Thân động cơ & đồ gá nhiệt luyện" },
    ],
  },
  {
    code: "CAT-03",
    title: { en: "Epoxy Floor Coatings", zh: "工业地坪漆", vi: "Sơn nền công nghiệp" },
    short: { en: "Self-leveling · Roll-coat · Waterborne · PU sealers", zh: "自流平·平涂·水性·聚氨酯罩光", vi: "Tự chảy · lăn · gốc nước · phủ PU" },
    description: {
      en: "Heavy-duty epoxy and polyurethane floor systems for warehouses, manufacturing plants, parking decks and clean rooms — solvent-free self-leveling builds of 2–3 mm, economical roll-coat systems and low-odour waterborne options.",
      zh: "仓库、厂房、停车场及洁净室的重型环氧与聚氨酯地坪体系——2–3 mm 无溶剂自流平、经济型平涂及低气味水性方案。",
      vi: "Hệ sàn epoxy và polyurethane hạng nặng cho kho, nhà máy, bãi đỗ xe và phòng sạch — tự chảy không dung môi 2–3 mm, hệ lăn kinh tế và phương án gốc nước ít mùi.",
    },
    features: [
      { en: "Solvent-free self-leveling — 100 % solids, 2–3 mm builds", zh: "无溶剂自流平——100% 固含，2–3 mm 膜厚", vi: "Tự chảy không dung môi — 100 % rắn, 2–3 mm" },
      { en: "Complete systems: sealer → putty/mortar → topcoat → sealer", zh: "体系完整：封闭 → 砂浆/腻子 → 面涂 → 罩光", vi: "Hệ trọn bộ: khóa → vữa/bột trét → lớp phủ → phủ trong" },
      { en: "Roll-coat epoxy for economical large-area coverage", zh: "平涂型环氧，大面积经济施工", vi: "Epoxy lăn cho diện tích lớn kinh tế" },
      { en: "Waterborne low-odour option; applies to green concrete", zh: "水性低气味方案，可涂未干透混凝土", vi: "Gốc nước ít mùi; sơn được bê tông non" },
    ],
    specs: [
      { label: { en: "System", zh: "系统", vi: "Hệ thống" }, value: "Self-leveling / Roll-coat" },
      { label: { en: "Thickness", zh: "厚度", vi: "Độ dày" }, value: "90 μm – 3 mm" },
      { label: { en: "Solids (SL grade)", zh: "固含（自流平）", vi: "Rắn (tự chảy)" }, value: "100 %" },
      { label: { en: "Traffic", zh: "上人时间", vi: "Đi lại" }, value: "24–36 h" },
    ],
    categorySpecs: [
      { label: { en: "Build", zh: "膜厚", vi: "Độ dày" }, value: "90 μm–3 mm" },
      { label: { en: "Solids", zh: "固含", vi: "Hàm lượng rắn" }, value: "up to 100 %" },
      { label: { en: "Coats", zh: "道数", vi: "Số lớp" }, value: "3–4" },
      { label: { en: "Full cure", zh: "完全固化", vi: "Đóng rắn hết" }, value: "7 d" },
    ],
    image: "/images/product-epoxy-floor.jpg",
    applications: [
      { en: "Warehouse & logistics floors", zh: "仓储与物流地坪", vi: "Sàn kho & logistics" },
      { en: "Manufacturing plants", zh: "生产车间", vi: "Nhà máy sản xuất" },
      { en: "Parking decks", zh: "停车场", vi: "Bãi đỗ xe" },
      { en: "Sports venues & clean rooms", zh: "运动场馆与洁净室", vi: "Sân thể thao & phòng sạch" },
    ],
  },
  {
    code: "CAT-04",
    title: { en: "Weatherproof Exterior Coatings", zh: "耐候外墙涂料", vi: "Sơn ngoại thất chịu thời tiết" },
    short: { en: "Fluorocarbon · Elastic · Heat-reflective", zh: "氟碳·弹性·热反射", vi: "Fluorocarbon · đàn hồi · phản xạ nhiệt" },
    description: {
      en: "Premium exterior systems: two-pack and waterborne fluorocarbon (FEVE) finishes with metallic colour options, elastic anti-crack builds and heat-reflective topcoats for facades and exterior steelwork.",
      zh: "高端外墙体系：双组份及水性氟碳（FEVE）面漆（可选金属色）、弹性抗裂体系及热反射面漆，适用于幕墙外墙与室外钢构。",
      vi: "Hệ ngoại thất cao cấp: fluorocarbon (FEVE) 2 thành phần và gốc nước (có màu kim loại), hệ đàn hồi chống nứt và sơn phủ phản xạ nhiệt cho mặt tiền và thép ngoài trời.",
    },
    features: [
      { en: "FEVE fluorocarbon — pencil hardness ≥ 2H", zh: "FEVE 氟碳——铅笔硬度 ≥2H", vi: "Fluorocarbon FEVE — độ cứng bút chì ≥ 2H" },
      { en: "1000 h accelerated weathering (lab data)", zh: "人工加速老化 1000 h（实验室数据）", vi: "Lão hóa tăng tốc 1000 h (số liệu PTN)" },
      { en: "Waterborne fluorocarbon / metallic finishes", zh: "水性氟碳/金属漆", vi: "Fluorocarbon/kim loại gốc nước" },
      { en: "Elastic anti-crack & heat-reflective systems", zh: "弹性抗裂与热反射系统", vi: "Hệ đàn hồi chống nứt & phản xạ nhiệt" },
    ],
    specs: [
      { label: { en: "Base", zh: "基料", vi: "Nhựa nền" }, value: "FEVE / Acrylic" },
      { label: { en: "Gloss (60°)", zh: "光泽（60°）", vi: "Độ bóng (60°)" }, value: "≥ 90 (gloss)" },
      { label: { en: "Weathering", zh: "耐候", vi: "Chịu thời tiết" }, value: "1000 h accel. (lab)" },
      { label: { en: "Systems", zh: "体系", vi: "Hệ" }, value: "2-K / waterborne" },
    ],
    categorySpecs: [
      { label: { en: "Weathering", zh: "耐候", vi: "Chịu thời tiết" }, value: "1000 h (lab)" },
      { label: { en: "Hardness", zh: "硬度", vi: "Độ cứng" }, value: "≥ 2H" },
      { label: { en: "Gloss", zh: "光泽", vi: "Độ bóng" }, value: "≥ 90" },
      { label: { en: "Colours", zh: "颜色", vi: "Màu" }, value: "incl. metallic" },
    ],
    image: "/images/product-exterior.jpg",
    applications: [
      { en: "Commercial towers & public buildings", zh: "商业塔楼与公共建筑", vi: "Tháp thương mại & công trình công" },
      { en: "Exterior steel structures", zh: "室外钢结构", vi: "Kết cấu thép ngoài trời" },
      { en: "Cement render & concrete facades", zh: "水泥砂浆与混凝土外墙", vi: "Vữa & mặt tiền bê tông" },
      { en: "Renovation over tile & textured coats", zh: "瓷砖及浮雕层上翻新", vi: "Cải tạo trên gạch & lớp浮雕" },
    ],
  },
  {
    code: "CAT-05",
    title: { en: "Architectural Wall Coatings", zh: "建筑墙面涂料", vi: "Sơn tường kiến trúc" },
    short: { en: "Interior emulsion · Exterior weathering · Tile renovation", zh: "内墙乳胶漆·外墙耐候·瓷砖翻新", vi: "Nhũ tương trong nhà · ngoại thất · cải tạo gạch" },
    description: {
      en: "Waterborne interior and exterior emulsion systems plus specialised primers: formaldehyde-absorbing low-odour interiors, pure-acrylic weathering exteriors, healthy-home grades and epoxy primers that grip tile and glass for renovation.",
      zh: "水性内外墙乳胶漆体系及特种底漆：抗甲醛净味内墙漆、纯丙耐候外墙漆、健康儿童漆，以及可在瓷砖玻璃上直接附着的翻新环氧底漆。",
      vi: "Hệ nhũ tương trong/ngoài trời gốc nước cùng sơn lót chuyên dụng: nội thất khử formaldehyde ít mùi, ngoại thất acrylic nguyên chất, cấp lành mạnh và lót epoxy bám gạch/kính cho cải tạo.",
    },
    features: [
      { en: "Formaldehyde-absorbing, low-odour interior grades", zh: "抗甲醛净味内墙等级", vi: "Cấp nội thất khử formaldehyde, ít mùi" },
      { en: "Scrubable films, lead & mercury free", zh: "漆膜可擦洗，不添加铅汞", vi: "Màng chùi rửa được, không chì thuỷ ngân" },
      { en: "Pure-acrylic exterior with anti-mould performance", zh: "纯丙外墙，防霉性能佳", vi: "Ngoại thất acrylic nguyên chất chống nấm" },
      { en: "Tile & glass adhesion primer for renovations", zh: "瓷砖/玻璃强附着翻新底漆", vi: "Lót bám gạch & kính cho cải tạo" },
    ],
    specs: [
      { label: { en: "Type", zh: "类型", vi: "Loại" }, value: "Waterborne emulsion" },
      { label: { en: "Coverage", zh: "涂布率", vi: "Suất sơn" }, value: "≈ 12 m²/L / coat" },
      { label: { en: "Recoat", zh: "重涂", vi: "Sơn lại" }, value: "2 – 3 h" },
      { label: { en: "Finish", zh: "饰面", vi: "Hoàn thiện" }, value: "Matt / silk" },
    ],
    categorySpecs: [
      { label: { en: "Coverage", zh: "涂布率", vi: "Suất sơn" }, value: "≈12 m²/L" },
      { label: { en: "Recoat", zh: "重涂", vi: "Sơn lại" }, value: "2–3 h" },
      { label: { en: "VOC", zh: "VOC", vi: "VOC" }, value: "waterborne" },
      { label: { en: "Finish", zh: "饰面", vi: "Hoàn thiện" }, value: "matt/silk" },
    ],
    image: "/images/product-architectural.jpg",
    applications: [
      { en: "Residential & commercial interiors", zh: "住宅与商业室内", vi: "Nội thất nhà ở & thương mại" },
      { en: "Exterior render & concrete walls", zh: "外墙砂浆与混凝土墙面", vi: "Tường vữa & bê tông ngoài" },
      { en: "Kids' rooms & health-sensitive spaces", zh: "儿童房与健康敏感空间", vi: "Phòng trẻ & không gian nhạy cảm" },
      { en: "Tile-facade renovation", zh: "瓷砖外立面翻新", vi: "Cải tạo mặt gạch" },
    ],
  },
  {
    code: "CAT-06",
    title: { en: "Custom Engineered Coatings", zh: "定制工程涂料", vi: "Sơn kỹ thuật theo yêu cầu" },
    short: { en: "Performance tuning · Colour · OEM · Marine", zh: "性能调校·调色·OEM·船舶", vi: "Hiệu suất · màu · OEM · hàng hải" },
    description: {
      en: "Custom-engineered coating services: performance tuning, RAL/Pantone colour matching, compliance documentation and OEM / private-label supply — plus marine and waterborne specialty lines.",
      zh: "定制工程涂料服务：性能调校、RAL/Pantone 调色、合规文件与 OEM/贴牌供应，另有船舶及水性特种产品线。",
      vi: "Dịch vụ sơn kỹ thuật theo yêu cầu: điều chỉnh hiệu suất, pha màu RAL/Pantone, hồ sơ tuân thủ và cung ứng OEM/nhãn riêng — cùng dải hàng hải và đặc chủng gốc nước.",
    },
    features: [
      { en: "Performance tuning to your specification", zh: "按规格进行性能调校", vi: "Điều chỉnh hiệu suất theo thông số" },
      { en: "RAL / Pantone colour matching with samples", zh: "RAL/Pantone 调色并出样", vi: "Pha màu RAL / Pantone kèm mẫu" },
      { en: "OEM / private label with multilingual TDS/MSDS", zh: "OEM/贴牌，多语言 TDS/MSDS", vi: "OEM / nhãn riêng, TDS/MSDS đa ngữ" },
      { en: "Marine lines — certificates on request", zh: "船舶漆系列，证书备索", vi: "Dải hàng hải — chứng nhận theo yêu cầu" },
    ],
    specs: [
      { label: { en: "Sample lead", zh: "样品周期", vi: "Mẫu" }, value: "7 – 15 days" },
      { label: { en: "MOQ", zh: "起订量", vi: "MOQ" }, value: "200 kg" },
      { label: { en: "Colour ref.", zh: "色号", vi: "Mã màu" }, value: "RAL / Pantone" },
      { label: { en: "Docs", zh: "文件", vi: "Hồ sơ" }, value: "per market" },
    ],
    categorySpecs: [
      { label: { en: "Sample", zh: "出样", vi: "Mẫu" }, value: "7–15 d" },
      { label: { en: "MOQ", zh: "起订量", vi: "MOQ" }, value: "200 kg" },
      { label: { en: "Colour", zh: "颜色", vi: "Màu" }, value: "RAL·Pantone" },
      { label: { en: "OEM", zh: "贴牌", vi: "OEM" }, value: "yes" },
    ],
    image: "/images/lab.jpg",
    applications: [
      { en: "Distributor house brands", zh: "经销商自有品牌", vi: "Thương hiệu riêng nhà phân phối" },
      { en: "Project-specific specifications", zh: "项目专项规范", vi: "Thông số theo dự án" },
      { en: "Marine & speciality requirements", zh: "船舶及特殊需求", vi: "Yêu cầu hàng hải & đặc thù" },
      { en: "Destination-market compliance", zh: "目的市场合规", vi: "Tuân thủ thị trường nhập" },
    ],
  },
`;

// ─────────────────────────────────────────────────────────────────────────────
// 6. 组装 data.ts
// ─────────────────────────────────────────────────────────────────────────────

// Full article bodies (trilingual). Referenced from the news entries below.
const NEWS_BODIES = [
  L(
`## Start with the environment, not the paint

ISO 12944-2 classifies service environments from C1 (heated buildings, dry) through C3 (urban, moderate SO2) and C4 (industrial, coastal) up to C5-I / C5-M and CX (offshore, high salinity). The category — together with the durability target (7, 15 or 25 years) — determines everything downstream: primer type, total DFT and coat count. Specifying paint before the category is the most common reason systems fail early.

## Match the build to the category

As a working rule: C2–C3 steel is held by 2-coat systems at 100–140 μm; C4 wants a 3-coat build around 160–200 μm; C5 duties call for zinc-rich priming plus high-build intermediates, typically 200–280 μm total. Immersed or buried steel (Im2 / burial) moves to epoxy coal-tar or glass-flake systems.

## A reference build that works

For plants, bridges and warehouse steel in C4–C5: epoxy zinc-rich primer (80 % zinc in dry film) 1 × 40 μm, epoxy MIO intermediate 1 × 80 μm, acrylic-polyurethane topcoat 2 × 40 μm — about 200 μm total, recoat windows 1 h – 7 d. Heavier duty upgrades the intermediate to glass-flake and adds DFT, not just extra coats.

## Specify the details that actually fail jobs

Blast cleaning to Sa 2.5 with an anchor profile, stripe coats on edges and welds, salt testing after washing, DFT inspection per coat — most field failures trace to surface preparation and film thickness, not to the paint itself. Write recoat windows and thinner limits from the batch TDS into the application spec.

## What to demand from your supplier

A written system specification (products, coats, DFT per coat), the batch TDS and a QC report with every shipment. If a supplier quotes one blanket salt-spray number for "all systems", ask for the test report of the exact system you are buying.`,
`## 先定环境，再谈油漆

ISO 12944-2 把服役环境从 C1（采暖干燥的室内）、C3（城市/中等二氧化硫）、C4（工业/沿海）一路分级到 C5-I / C5-M 与 CX（ offshore 高盐雾）。环境等级加上目标寿命（7/15/25 年）决定了下游的一切：底漆类型、总干膜厚度与道数。先选漆后定等级，是体系早期失效最常见的原因。

## 按等级配膜厚

经验法则：C2–C3 钢构用两道体系 100–140 μm；C4 用三道 160–200 μm；C5 需富锌底漆加厚浆中间漆，总厚通常 200–280 μm。浸水或埋地（Im2/埋地）则转向环氧煤沥青或玻璃鳞片体系。

## 一个可靠的参考配套

面向工厂、桥梁、仓库钢构（C4–C5）：环氧富锌底漆（干膜含锌 80%）1×40 μm → 环氧云铁中间漆 1×80 μm → 丙烯酸聚氨酯面漆 2×40 μm，总厚约 200 μm，重涂窗口 1 小时–7 天。更重工况把中间漆升级为玻璃鳞片并增加膜厚，而不是单纯加道数。

## 把真正出问题的细节写进规范

喷砂至 Sa 2.5 并保证锚纹深度、焊缝与边缘预涂（stripe coat）、水洗后测盐、逐道测膜厚——多数现场失效追溯到表面处理与膜厚，而不是油漆本身。把随批 TDS 的重涂窗口与稀释上限写进施工规范。

## 对供应商要什么

书面体系规格（产品、道数、每道膜厚）、每批 TDS 与质检报告。如果供应商对所有体系只报一个笼统的盐雾小时数，请他拿出你所购具体体系的检测报告。`,
`## Xác định môi trường trước, chọn sơn sau

ISO 12944-2 phân cấp môi trường từ C1 (trong nhà, khô), C3 (đô thị, SO2 vừa), C4 (công nghiệp/ven biển) đến C5-I / C5-M và CX (ngoài khơi, mặn cao). Cấp môi trường cùng tuổi thọ mục tiêu (7/15/25 năm) quyết định mọi thứ phía sau: loại sơn lót, tổng DFT và số lớp.

## Phối độ dày theo cấp

Nguyên tắc: thép C2–C3 dùng hệ 2 lớp 100–140 μm; C4 dùng 3 lớp 160–200 μm; C5 cần lót giàu kẽm + lớp giữa dày, tổng 200–280 μm. Thép ngâm nước/chôn đất (Im2) chuyển sang hệ epoxy nhựa đường hoặc vảy thủy tinh.

## Cấu hình tham khảo đáng tin

Cho nhà máy, cầu, thép kho ở C4–C5: lót epoxy giàu kẽm (80 % kẽm) 1×40 μm → lớp giữa epoxy MIO 1×80 μm → phủ acrylic-PU 2×40 μm, tổng ~200 μm, sơn lại trong 1–7 giờ. Nhiệm vụ nặng hơn: nâng cấp lớp giữa lên vảy thủy tinh và tăng DFT.

## Viết rõ chi tiết thường gây hỏng việc

Phun cát Sa 2.5 với độ nhám đạt, sơn lót trước mép weld (stripe coat), đo muối sau rửa, đo DFT từng lớp — phần lớn hư hỏng hiện trường do xử lý bề mặt và độ dày, không phải do sơn. Ghi cửa sổ sơn lại và giới hạn dung môi theo TDS lô hàng vào hồ sơ thi công.

## Yêu cầu gì ở nhà cung cấp

Hồ sơ hệ thống bằng văn bản (sản phẩm, số lớp, DFT từng lớp), TDS và báo cáo QC mỗi lô. Nếu nhà cung cấp chỉ báo một con số phun muối chung cho mọi hệ, hãy yêu cầu báo cáo thử của đúng hệ mình mua.`),
  L(
`## Two binder families, two behaviours

Single-pack silicone-based paints (aluminium or coloured) air-dry and serve continuous surfaces up to about 550 °C. Inorganic ceramic-binder coatings go further — around 600 °C and beyond on turbine casings and furnace equipment — but cure and application differ, so they are specified project by project rather than off the shelf.

## Why thin films survive and thick films blister

High-temperature films become slightly thermoplastic as they heat; thick films trap solvent and gas, then blister on first heat-up. Keep total DFT at roughly 25–75 μm, thin the material as the TDS directs, and never bring the film to temperature before it has fully dried (typically 24 h at 20 °C).

## Rating language to check before ordering

Confirm whether the quoted figure is continuous or intermittent service, substrate steel or stainless, and whether the colour is stable at that temperature (aluminium shades are the most stable; bright organic colours degrade earlier). Ask for the grade TDS — "600 °C" on a datasheet with no substrate or cycle definition is not a specification.

## Surface preparation decides the outcome

Degrease, remove salts by fresh-water washing and blast to Sa 2.5. On insulated or crevice-heavy pipework, CUI (corrosion under insulation) is the real enemy — a high-temp primer plus properly sealed cladding beats any topcoat upgrade.

## A practical ordering checklist

State operating temperature (continuous and peak), cycling severity, substrate, colour stability needs and desired recoat behaviour. We then match the silicone or ceramic grade and issue the full data sheet before you commit.`,
`## 两类粘结剂，两种脾气

单组份有机硅漆（铝粉或彩色）自干成膜，长期服役表面温度可到约 550 ℃。无机陶瓷粘结剂涂料走得更远——涡轮壳体、炉用设备约 600 ℃ 以上——但固化与施工方式不同，按项目逐个定，不是货架商品。

## 为什么薄膜活得、厚膜起泡

高温漆膜受热后略具热塑性；厚膜包住溶剂与气体，首次升温即鼓泡。总干膜控制在约 25–75 μm，按 TDS 适量稀释，并且漆膜彻底干燥前（通常 20 ℃ 下 24 小时）绝不带温。

## 下单前要核对的"等级语言"

确认报价数字是长期连续还是间歇温度、基材是碳钢还是不锈钢、该温度下颜色是否稳定（铝粉色最稳，鲜艳有机色更早褪变）。要等级 TDS——没有基材与循环定义的"600 ℃"不构成规格。

## 表面处理决定成败

除油、淡水洗盐、喷砂至 Sa 2.5。对有保温层或缝隙多的管道，CUI（保温层下腐蚀）才是真正的敌人——耐高温底漆加密封良好的外包层，胜过任何面漆升级。

## 实用下单清单

写明运行温度（连续与峰值）、循环剧烈程度、基材、颜色稳定性需求与重涂要求。我们据此匹配有机硅或陶瓷等级，并在你下单前出具完整数据表。`,
`## Hai họp keo, hai tính cách

Sơn silicone 1 thành phần (màu nhôm hoặc màu) khô tự nhiên, phục vụ bề mặt liên tục tới ~550 °C. Sơn keo ceramic vô cơ đi xa hơn — ~600 °C trở lên trên vỏ tuabin, thiết bị lò — nhưng cách đóng rắn và thi công khác, phải chọn theo từng dự án.

## Vì sao màng mỏng sống, màng dày phồng

Màng chịu nhiệt hơi nhựa nhiệt khi nòng; màng dày giữ dung môi và khí, phồng ở lần gia nhiệt đầu. Giữ tổng DFT khoảng 25–75 μm, pha loãng theo TDS, và tuyệt đối không gia nhiệt trước khi màng khô hoàn toàn (thường 24 giờ ở 20 °C).

## Ngôn ngữ cấp nhiệt cần kiểm tra trước khi đặt hàng

Xác nhận con số là nhiệt liên tục hay ngắt quãng, nền thép carbon hay không gỉ, màu có bền ở nhiệt đó không (màu nhôm bền nhất; màu hữu cơ tươi phai sớm hơn). Xin TDS cấp — "600 °C" không kèm định nghĩa nền và chu kỳ không phải là thông số.

## Xử lý bề mặt quyết định thành bại

Tẩy dầu, rửa muối bằng nước ngọt, phun cát Sa 2.5. Với ống có bảo ôn hoặc nhiều khe, CUI (ăn mòn dưới bảo ôn) mới là thủ phạm — sơn lót chịu nhiệt cùng vỏ bọc kín tốt hơn mọi nâng cấp lớp phủ.

## Checklist đặt hàng thực dụng

Ghi rõ nhiệt độ vận hành (liên tục và đỉnh), mức độ sốc nhiệt, nền, yêu cầu bền màu và sơn lại. Chúng tôi sẽ ghép cấp silicone hoặc ceramic và cấp TDS đầy đủ trước khi bạn chốt đơn.`),
  L(
`## The four documents that matter

Certificate of Origin (CO) evidences where the goods were produced and drives preferential duty under agreements such as ASEAN–China. The SDS/MSDS describes hazards, composition bands and first-aid measures — customs and your safety officer both rely on it. The TDS carries application data (mix ratio, DFT, recoat windows) and is what your applicator will actually work from. UN-certified packaging marks the drums for dangerous-goods transport.

## Paint usually ships as UN Class 3

Most solvent-borne coatings are flammable liquids (UN 1263, Class 3, PG II or III). That means UN-rated drums, correct marks and labels, and a DGD (dangerous goods declaration) on sea freight. Waterborne lines reduce this burden substantially — worth considering when destination handling is difficult.

## What to pre-check with your customs broker

HS code and duty rate for your market; whether the CO form required is FORM E (ASEAN), RCEP or generic; any import licence or registration for chemicals (for example Vietnam's chemical declaration, or EU REACH obligations for the importer); labelling language requirements; and VOC limits that apply to the product category in the destination market.

## How we prepare shipments

Each order ships with CO, SDS and TDS matching the batch, dangerous-goods packaging where required, and photos of drum marks before loading. Tell us your destination and importer details early — document mistakes cost more days at customs than sea freight costs.

## A practical tip for first-time importers

Ask for a document package (scans) before the vessel departs, and check names, HS codes and quantities against the commercial invoice line by line. Discrepancies are cheap to fix in China and expensive to fix at the destination port.`,
`## 四份关键文件

原产地证（CO）证明货物产地，并决定东盟—中国等协定下的优惠税率；SDS/MSDS 描述危险性、成分区间与急救措施，海关与你的安全员都依赖它；TDS 载明施工数据（配比、膜厚、重涂窗口），是施工方真正使用的文件；UN 认证包装为危险品运输标记桶身。

## 涂料通常按 UN 第 3 类出运

多数溶剂型涂料属易燃液体（UN 1263，Class 3，包装类 II 或 III）：需要 UN 级桶、正确标记标签，海运加危险品申报单（DGD）。水性产品线大幅降低这些负担——目的港操作困难时值得优先考虑。

## 与报关行预核什么

目的市场的 HS 编码与税率；CO 要 FORM E（东盟）、RCEP 还是通用格式；化学品进口是否有许可/登记（如越南的化学品申报、欧盟 REACH 对进口商的义务）；标签语言要求；以及目的市场对该品类的 VOC 限值。

## 我们的出货准备

每单随附与批次对应的 CO、SDS、TDS，按需危包，装柜前提供桶标照片。尽早就把目的港与进口商信息给我们——单证错误在海关耗掉的天数，比海运本身还贵。

## 给首次进口商的实用建议

开船前先要一套单证扫描件，逐行核对名称、HS 编码、数量与商业发票是否一致。差异在中国改很便宜，在目的港改很贵。`,
`## Bốn giấy tờ quan trọng

CO (Certificate of Origin) chứng minh xuất xứ, quyết định thuế ưu đãi theo hiệp định như ASEAN–Trung Quốc. SDS/MSDS mô tả nguy hại, dải thành phần và biện pháp sơ cứu — cả hải quan và cán bộ an toàn của bạn đều dựa vào nó. TDS chứa số liệu thi công (tỷ lệ pha, DFT, cửa sổ sơn lại) — tài liệu thợ thi công thực dùng. Đóng gói chứng nhận UN đánh dấu thùng cho vận chuyển hàng nguy hiểm.

## Sơn thường xuất theo UN Class 3

Phần lớn sơn gốc dung môi là chất lỏng dễ cháy (UN 1263, Class 3, PG II hoặc III): cần thùng chuẩn UN, nhãn đúng, và tờ khai hàng nguy hiểm (DGD) đường biển. Dòng gốc nước giảm đáng kể gánh nặng này — đáng cân nhắc khi xử lý tại cảng đích khó.

## Kiểm tra trước với đại lý hải quan điều gì

Mã HS và thuế của thị trường; CO cần FORM E (ASEAN), RCEP hay mẫu thường; giấy phép/đăng ký hóa chất nhập (như khai báo hóa chất Việt Nam, nghĩa vụ REACH của nhà nhập EU); yêu cầu ngôn ngữ nhãn; giới hạn VOC áp dụng cho nhóm sản phẩm.

## Chúng tôi chuẩn bị gì cho mỗi lô

Mỗi đơn kèm CO, SDS, TDS khớp lô hàng, đóng gói DG khi cần, và ảnh nhãn thùng trước khi xếp container. Cung cấp sớm thông tin cảng đích và người nhập — lỗi chứng từ làm hải quan tốn ngày nhiều hơn tiền vận chuyển biển.

## Mẹo cho người nhập lần đầu

Xin bộ scan chứng từ trước khi tàu chạy, đối chiếu tên, mã HS, số lượng với hóa đơn thương mại từng dòng. Sai lệch sửa ở Trung Quốc rẻ, sửa ở cảng đích rất đắt.`),
  L(
`## Fix the colour standard, not just the number

A RAL or Pantone reference is a start, but batch-to-batch colour needs a physical master panel approved by both sides and kept for arbitration. Metallic and pearlescent effects in particular cannot be judged from a code — approve real drawdowns.

## Decide who owns the documents

Under private label, the drum carries your brand, and the TDS/SDS should be issued in your name (multilingual if you serve several markets). Agree in writing who holds the formulation data, who signs the documents, and what happens if either party exits the arrangement.

## Drum labels: artwork, language, law

Label artwork (AI/PDF, print colour separation), language sets, hazard pictograms and batch-number format should all be approved before the first production. Some markets require importer identity or local regulatory text on the label — collect these requirements once and reuse them.

## MOQ and trial strategy

Low-MOQ private label (200 kg scale with mixed tones) exists to let you trial the market without a container of risk. Run one trial batch, test it in real field conditions, then scale. Fix in writing that the formulation stays unchanged when the order size grows.

## QC and exit clauses

Batch QC report with every shipment, retained samples per batch, third-party pre-shipment testing when the market demands it — and an exit clause covering plates, labels and formulation confidentiality. The cheapest quote without these terms is the most expensive mistake.`,
`## 锁定色标，而不只是色号

RAL/Pantone 色号只是起点：批次间颜色稳定，需要双方签认的实物标准板留档仲裁。金属色、珠光效果尤其无法凭色号判断——必须签认实刮样。

## 讲清楚文件归谁

贴牌模式下桶身是你的品牌，TDS/SDS 也应以你的名义出具（多市场就多语言）。书面约定：配方数据归谁、文件谁来签、合作终止时怎么处理。

## 桶标：稿、语言、法规

首次生产前敲定标签稿件（AI/PDF、印刷分色）、语言版本、危险品象形图与批号格式。有些市场要求标签带进口商信息或本地法规文本——一次性收齐这些要求，反复复用。

## MOQ 与试单策略

低起订贴牌（200 kg 级、可混色）的意义就是让你用一托盘的风险试市场。先跑一批试单，在真实工况验证，再放大。并书面固定：放大订单时配方不变。

## 质检与退出条款

每批随货质检报告、每批留样、市场需要时安排第三方装运前检测——再加一条退出条款，覆盖印版、标签与配方保密。没有这些条款的最低报价，是最贵的错误。`,
`## Chốt tiêu chuẩn màu, không chỉ mã màu

Mã RAL/Pantone chỉ là khởi đầu: màu ổn định giữa các lô cần bảng mẫu vật lý được hai bên duyệt và lưu làm trọng tài. Hiệu ứng kim loại/ngọc trai đặc biệt không thể đánh giá qua mã — phải duyệt mẫu quét thật.

## Rõ ràng ai sở hữu hồ sơ

Dưới nhãn riêng, thùng mang thương hiệu bạn, TDS/SDS nên phát hành dưới tên bạn (đa ngữ nếu phục vụ nhiều thị trường). Thỏa thuận bằng văn bản: dữ liệu công thức thuộc ai, ai ký hồ sơ, xử lý ra sao khi một bên dừng hợp tác.

## Nhãn thùng: file, ngôn ngữ, pháp lý

Chốt trước sản xuất đầu: file nhãn (AI/PDF, tách màu in), bộ ngôn ngữ, pictogram nguy hiểm và định dạng số lô. Một số thị trường bắt buộc tên người nhập hoặc nội dung pháp lý địa phương trên nhãn — gom yêu cầu một lần, dùng lại nhiều lần.

## Chiến lược MOQ và đơn thử

Nhãn riêng MOQ thấp (cỡ 200 kg, phối màu hỗn hợp) tồn tại để bạn thử thị trường với rủi ro một pallet. Chạy một lô thử, kiểm chứng điều kiện thực tế, rồi mở rộng. Cam kết bằng văn bản: công thức không đổi khi đơn lớn.

## QC và điều khoản thoát

Báo cáo QC mỗi lô, lưu mẫu từng lô, thử nghiệm bên thứ ba trước giao khi thị trường yêu cầu — cùng điều khoản thoát về bản in, nhãn và bảo mật công thức. Báo giá rẻ nhất mà thiếu các điều khoản này là sai lầm đắt nhất.`),
  L(
`## Regulation moves faster than habit

VOC limits now bite across major markets — the EU's decorative and industrial paint directives, China's GB standards for industrial protective coatings, and tightening rules across Southeast Asia and the Gulf. Buyers who specify by habit ("always solvent-borne") are quietly losing projects to compliant alternatives.

## Two routes to compliance

Waterborne systems (acrylic, epoxy, PU dispersions) cut solvent almost entirely and excel indoors — floors in occupied plants, interior emulsions, electrical-room floors. High-solids solvent-borne epoxies (up to 100 % solids in self-leveling floors) take the outdoor and heavy-duty duties where waterborne cure is slow or water sensitivity matters.

## Where the trade-offs really are

Waterborne wants cleaner surfaces and narrower temperature/humidity windows; high-solids products shorten pot life. Both are solved by specification discipline — surface prep, batch planning, climate awareness — not by chemistry miracles. Modern waterborne anti-corrosion primers already hold C3–C4 duties with zinc-phosphate chemistry.

## Specifying low-VOC without losing performance

Ask for the VOC figure per litre of ready-to-use paint (thinned), not per kg. Match the chemistry to exposure: waterborne indoors and on concrete, high-solids epoxy for steel immersion and heavy industry. Demand the same documentation you always would — batch TDS, QC report, and test data for the specific system.

## What we supply

Waterborne epoxy floor and anti-corrosion lines, waterborne acrylic and fluorocarbon finishes, and high-solids/100 % solids self-leveling systems — each with batch TDS quoting the actual VOC class.`,
`## 法规跑在习惯前面

主要市场的 VOC 限值已全面收紧——欧盟装饰与工业涂料指令、中国工业防护涂料 GB 标准、东南亚与中东的持续加码。仍按老习惯指定"油性"的采购方，正悄悄把项目输给合规替代品。

## 合规的两条路

水性体系（丙烯酸、环氧、PU 分散体）几乎完全去掉溶剂，室内表现极佳——有人作业的厂房地坪、内墙乳胶漆、电房地板。高固含油性环氧（自流平最高 100% 固含）承担室外与重载工况——这些场合水性固化慢或耐水性受限。

## 取舍到底在哪

水性要求更干净的基面与更窄的温湿度窗口；高固含缩短适用期。两者都靠规范纪律解决——表面处理、批次计划、气候意识——不靠化学奇迹。现代水性防腐底漆以磷酸锌技术已能承担 C3–C4 工况。

## 既要低 VOC 又不丢性能

要求供应商报"施工态每升"的 VOC（含稀释），而不是每公斤。按曝露环境选化学路线：室内与混凝土用水性，钢结构浸没与重工业用高固含环氧。文件照常要足——批次 TDS、质检报告与具体体系的检测数据。

## 我们供应什么

水性环氧地坪与防腐线、水性丙烯酸与氟碳面漆、高固含/100% 固含自流平体系——每个批次 TDS 都注明实际 VOC 等级。`,
`## Quy định chạy nhanh hơn thói quen

Giới hạn VOC đã siết khắp các thị trường lớn — chỉ thị sơn trang trí và công nghiệp của EU, tiêu chuẩn GB của Trung Quốc cho sơn bảo vệ công nghiệp, và các quy định đang chặt thêm ở Đông Nam Á và Trung Đông. Người mua vẫn chọn "gốc dầu" theo thói quen đang âm thầm mất dự án vào tay sản phẩm hợp quy.

## Hai con đường hợp quy

Hệ gốc nước (acrylic, epoxy, phân tán PU) cắt gần hết dung môi, vượt trội trong nhà — sàn nhà xưởng đang vận hành, sơn nội thất, sàn phòng điện. Epoxy gốc dầu hàm lượng rắn cao (tự chảy tới 100 % rắn) gánh việc ngoài trời và hạng nặng — nơi gốc nước khô chậm hoặc nhạy nước.

## Đánh đổi thật sự ở đâu

Gốc nước cần bề mặt sạch hơn và cửa sổ nhiệt độ/độ ẩm hẹp hơn; hàm lượng rắn cao rút ngắn pot life. Cả hai đều giải quyết bằng kỷ luật specs — xử lý bề mặt, kế hoạch lô, ý thức khí hậu — không phải phép màu hóa học. Sơn lót chống ăn mòn gốc nước hiện đại với hóa chất photphat kẽm đã gánh được môi trường C3–C4.

## Chọn VOC thấp mà không mất hiệu suất

Yêu cầu nhà cung cấp báo VOC theo "mỗi lít sơn sẵn sàng thi công" (đã pha), không phải mỗi kg. Chọn hóa học theo môi trường: gốc nước cho trong nhà và bê tông, epoxy rắn cao cho thép ngâm và công nghiệp nặng. Hồ sơ vẫn phải đủ — TDS lô, báo cáo QC và số liệu thử của hệ cụ thể.

## Chúng tôi cung cấp gì

Dòng sàn và chống ăn mòn epoxy gốc nước, sơn phủ acrylic và fluorocarbon gốc nước, hệ tự chảy rắn cao/100 % — mỗi TDS lô đều ghi rõ cấp VOC thực tế.`),
  L(
`## The two systems in one sentence

Roll-coat (thin-film) epoxy builds around 90 μm per two-coat application — a hard, sealed, easy-clean surface for light-to-medium traffic. Self-leveling epoxy is a 2–3 mm solvent-free screed with a smooth, seamless gloss surface that takes forklifts, pallet jacks and chemical spills for years.

## When self-leveling pays off

Heavy or constant forklift traffic, steel-wheeled loads, exposed aggregate risk, wet-process areas, or showrooms where the floor IS the interior. The 2–3 mm build absorbs impact that would punch through thin films, and its 100 % solids chemistry means no solvent smell during application in operating plants.

## When roll-coat is the smarter call

Dry storage, light foot and trolley traffic, mezzanine slabs, or budgets that must cover more square metres. A sealer + two-roll-coat system at a fraction of the cost still delivers a dust-free, washable floor — and is easy to patch and re-coat in sections.

## The part both systems share: the slab

Moisture content below 10 % and pH below 10, proper cure (new slabs about 28 days), grinding or shot-blasting to remove laitance, and an epoxy sealing primer before anything else. Skimping on slab preparation is why floors fail — no product choice fixes a wet, soft or unsealed substrate.

## Timelines to plan around

Roll-coat: recoatable within 8–24 h, full chemical cure 7 days. Self-leveling: foot traffic ~24–36 h, full cure 7 days. Optional PU clear sealer adds scratch and UV behaviour where trolleys or daylight matter.`,
`## 一句话讲清两个体系

平涂（薄涂）环氧两道施工约 90 μm 干膜——一个坚硬、封闭、易清洁的表面，适合轻中度交通。自流平环氧是 2–3 mm 无溶剂砂浆式流展层，表面平滑无缝镜面，能扛叉车、托盘车与化学品泼溅多年。

## 什么时候自流平值回票价

重载或频繁叉车、钢轮载荷、骨料外露风险、湿作业区，以及"地面即门面"的展厅。2–3 mm 膜厚吸收薄涂会被击穿的冲击；100% 固含配方意味着在产厂房施工也无溶剂气味。

## 什么时候平涂更聪明

干燥仓储、轻行人/手推车、夹层楼板，或预算需要覆盖更多平方米。封闭底漆+两道平涂的成本只是零头，照样交付无尘可冲洗的地坪，而且分区补涂翻新都容易。

## 两个体系共同的命门：混凝土板

含水率低于 10%、pH 低于 10、充分养护（新板约 28 天）、打磨/抛丸除浮浆、先上环氧封闭底漆。地面失效十有八九省在基层处理——潮湿、松软、未封闭的基层，换什么产品都救不回来。

## 排期参考

平涂：8–24 小时可重涂，7 天完全耐化学品。自流平：约 24–36 小时上人，7 天完全固化。有手推车或日晒的场合，加一道聚氨酯罩面可提升耐刮与耐候。`,
`## Một câu nói rõ hai hệ

Epoxy lăn (màng mỏng) hai lớp cỡ 90 μm DFT — bề mặt cứng, kín, dễ vệ sinh cho tải nhẹ đến trung bình. Epoxy tự chảy là lớp rải 2–3 mm không dung môi, bề mặt phẳng liền mạch như gương, chịu xe nâng, xe pallet và hóa chất đổ nhiều năm.

## Khi nào tự chảy đáng tiền

Xe nâng nặng hoặc liên tục, tải bánh thép, nguy cơ lộ cốt liệu, khu ướt, hoặc showroom nơi sàn chính là bộ mặt. Độ dày 2–3 mm hấp thụ va đập xuyên thủng màng mỏng; hóa học 100 % rắn nghĩa là không mùi dung môi khi thi công trong nhà xưởng đang chạy.

## Khi nào lăn thông minh hơn

Kho khô, người/xe đẩy nhẹ, sàn tầng lửng, hoặc ngân sách phải phủ nhiều m² hơn. Hệ khóa + hai lớp lăn với chi phí bằng một phần vẫn cho sàn không bụi, rửa được — và dễ vá, sơn lại từng khu.

## Điểm chung quyết định: mặt bê tông

Độ ẩm dưới 10 %, pH dưới 10, dưỡng đủ (bê tông mới ~28 ngày), mài/phun bi tếch lớp mủ, và sơn lót khóa epoxy trước tiên. Sàn hỏng chín phần mười vì tiết kiệm khâu nền — nền ướt, mềm, không khóa thì sản phẩm nào cũng bó tay.

## Tiến độ tham khảo

Lăn: sơn lại sau 8–24 giờ, chịu hóa chất hoàn toàn 7 ngày. Tự chảy: đi lại ~24–36 giờ, đóng rắn 7 ngày. Có xe đẩy hoặc nắng chiếu, thêm một lớp phủ trong PU để chống xước và chịu tia UV.`)
];

const dataTs = `// Central content store for HONG NGUYEN Industrial Coatings B2B website.
// GENERATED FILE — do not edit by hand. Run: node scripts/build-data.mjs
// 单一事实源: scripts/build-data.mjs（内部文件，含原厂型号对照，勿外传）
// All translatable content is a localized LStr { en, zh, vi, es, ar }.
// Technical values are quoted from manufacturer TDS — no invented data.

import type { LStr } from "@/lib/i18n";

export const company = {
  name: "HONG NGUYEN",
  fullName: "HONG NGUYEN Industrial Coatings",
  cnName: "宏源新材料",
  tagline: { en: "Industrial Coatings Export · Foshan, China", zh: "工业涂料出口 · 广东佛山", vi: "Xuất khẩu sơn công nghiệp · Phật Sơn, Trung Quốc" } as LStr,
  description: {
    en: "Chinese exporter of industrial coating systems — anti-corrosion, high-temperature, epoxy floor and architectural paints — sourced from ISO 9001 certified plants in China's coatings hub (Shunde, Foshan) and supplied worldwide with full export documentation, OEM/ODM service and RAL/Pantone colour matching.",
    zh: "工业涂料出口商——防腐、耐高温、环氧地坪及建筑涂料体系，货源来自中国涂料之乡（广东顺德）的 ISO 9001 认证工厂，全球供应，配套全套出口单证、OEM/ODM 服务及 RAL/Pantone 调色。",
    vi: "Nhà xuất khẩu hệ sơn công nghiệp Trung Quốc — chống ăn mòn, chịu nhiệt, nền epoxy và sơn kiến trúc — lấy từ các nhà máy đạt ISO 9001 tại thủ phủ sơn Trung Quốc (Shunde, Phật Sơn), cung ứng toàn cầu kèm đầy đủ chứng từ xuất khẩu, dịch vụ OEM/ODM và pha màu RAL/Pantone.",
  } as LStr,
  email: "hogoshi2023@gmail.com",
  phone: "+86 131 7420 8290",
  whatsapp: "+86 131 7420 8290",
  whatsappChat: { en: "WhatsApp Business Chat", zh: "WhatsApp 商务咨询", vi: "Trò chuyện WhatsApp Business" } as LStr,
  contact: "Mr Hogo Shi · WeChat: hogo13",
  address: {
    en: "Xiashi Industrial Zone, Lunjiao Subdistrict, Shunde District, Foshan City, Guangdong Province, P.R.China",
    zh: "中国广东省佛山市顺德区伦教街道霞石工业区",
    vi: "Khu công nghiệp Xiashi, phường Lunjiao, quận Shunde, thành phố Phật Sơn, tỉnh Quảng Đông, Trung Quốc",
  } as LStr,
  certs: ["ISO 9001:2015", "CE", "REACH", "SGS"],
};

export const stats: { value: string; label: LStr; sub: LStr }[] = [
  {
    value: "22+",
    label: { en: "Product Series", zh: "产品系列", vi: "Dòng sản phẩm" },
    sub: { en: "Industrial · marine · architectural", zh: "工业·船舶·建筑", vi: "Công nghiệp · hàng hải · kiến trúc" },
  },
  {
    value: "6",
    label: { en: "Coating Systems", zh: "涂料体系", vi: "Hệ sơn" },
    sub: { en: "Primer → topcoat", zh: "底漆到面漆", vi: "Lót → lớp phủ" },
  },
  {
    value: "200 kg",
    label: { en: "MOQ", zh: "起订量", vi: "MOQ" },
    sub: { en: "Mixed tones OK", zh: "可混色", vi: "Phối màu hỗn hợp OK" },
  },
  {
    value: "7–15 d",
    label: { en: "Lead Time", zh: "交货周期", vi: "Thời gian giao" },
    sub: { en: "After order confirmation", zh: "订单确认后", vi: "Sau khi xác nhận đơn" },
  },
];

export const specSheet: { label: LStr; value: string }[] = [
  { label: { en: "Resin Systems", zh: "树脂体系", vi: "Hệ nhựa" }, value: "Epoxy · Acrylic · PU · Silicone" },
  { label: { en: "Film Thickness", zh: "膜厚范围", vi: "Độ dày màng" }, value: "25 μm – 3 mm (system)" },
  { label: { en: "Temperature Service", zh: "耐温", vi: "Chịu nhiệt" }, value: "up to 550 °C" },
  { label: { en: "Weathering", zh: "耐候", vi: "Chịu thời tiết" }, value: "1000 h accel. (FEVE, lab)" },
  { label: { en: "Colour", zh: "颜色", vi: "Màu" }, value: "RAL / Pantone / custom" },
  { label: { en: "Packaging", zh: "包装", vi: "Đóng gói" }, value: "5L / 20L / 200L drum" },
  { label: { en: "Lead Time", zh: "交货周期", vi: "Thời gian giao" }, value: "7 – 15 working days" },
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
  /** Category-level headline specs. */
  categorySpecs: { label: LStr; value: string }[];
  /** Concrete product models under this category (expandable list). */
  models: { model: string; desc: LStr; details?: LStr }[];
};

export const products: Product[] = [
${CATEGORY_META}
];

export const whyUs: { no: string; title: LStr; desc: LStr }[] = [
  {
    no: "01",
    title: { en: "Direct Sourcing", zh: "源头直采", vi: "Nguồn trực tiếp" },
    desc: { en: "Direct from ISO 9001 certified coating plants in China's coatings hub — no multi-layer reseller markups.", zh: "直连中国涂料之乡的 ISO 9001 认证工厂，无多层中间商加价。", vi: "Trực tiếp từ nhà máy sơn đạt ISO 9001 tại thủ phủ sơn Trung Quốc — không qua nhiều tầng trung gian." },
  },
  {
    no: "02",
    title: { en: "Export Documentation", zh: "出口单证", vi: "Chứng từ xuất khẩu" },
    desc: { en: "CO, MSDS/TDS, dangerous-goods packaging and destination-market documents handled for every shipment.", zh: "每批出货代办 CO、MSDS/TDS、危险品包装及目的市场单证。", vi: "Mỗi lô hàng: CO, MSDS/TDS, đóng gói nguy hiểm và chứng từ theo thị trường nhập." },
  },
  {
    no: "03",
    title: { en: "Complete Systems", zh: "体系成套", vi: "Hệ thống trọn bộ" },
    desc: { en: "Primer, intermediate and topcoat sourced as one matched system — plus RAL/Pantone colour matching.", zh: "底漆、中间漆、面漆成套供应，并提供 RAL/Pantone 调色。", vi: "Lót, lớp giữa và lớp phủ cung cấp thành một hệ phối hợp — kèm pha màu RAL/Pantone." },
  },
  {
    no: "04",
    title: { en: "Batch QC Reports", zh: "批次质检", vi: "QC theo lô" },
    desc: { en: "Production QC report available for every batch; pre-shipment third-party testing (SGS / BV / Intertek) on request.", zh: "每批可提供生产质检报告；可按要求安排装运前第三方检测（SGS/BV/Intertek）。", vi: "Báo cáo QC sản xuất cho mỗi lô; thử nghiệm bên thứ ba trước giao (SGS/BV/Intertek) theo yêu cầu." },
  },
  {
    no: "05",
    title: { en: "Low MOQ", zh: "低起订量", vi: "MOQ thấp" },
    desc: { en: "200 kg MOQ with mixed tones accepted — built for distributor trial orders.", zh: "200 公斤起订，接受混色，适合经销商试单。", vi: "MOQ 200 kg, nhận phối màu hỗn hợp — phù hợp đơn thử nghiệm nhà phân phối." },
  },
  {
    no: "06",
    title: { en: "OEM / Private Label", zh: "OEM / 贴牌", vi: "OEM / Nhãn riêng" },
    desc: { en: "Your brand on drums and labels, with multilingual TDS / MSDS.", zh: "桶身与标签打您的品牌，配多语言 TDS/MSDS。", vi: "Thương hiệu bạn trên thùng và nhãn, kèm TDS/MSDS đa ngữ." },
  },
  {
    no: "07",
    title: { en: "Technical Support", zh: "技术支持", vi: "Hỗ trợ kỹ thuật" },
    desc: { en: "System specification and application guidance from the producing plants' technical teams, coordinated by us.", zh: "由我方协调生产工厂技术团队提供体系选型与施工指导。", vi: "Tư vấn hệ thống và hướng dẫn thi công từ đội kỹ thuật nhà máy, do chúng tôi điều phối." },
  },
  {
    no: "08",
    title: { en: "Certified Product Lines", zh: "认证产品线", vi: "Dòng sản phẩm chứng nhận" },
    desc: { en: "ISO 9001:2015 production · CE-marked lines · REACH-aligned · low-VOC grades available.", zh: "ISO 9001:2015 生产 · CE 产品线 · 对齐 REACH · 提供低 VOC 等级。", vi: "Sản xuất ISO 9001:2015 · dòng CE · theo REACH · có cấp VOC thấp." },
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
    code: "SYS-01",
    location: { en: "Steel structure", zh: "钢结构", vi: "Kết cấu thép" },
    year: "ISO 12944",
    title: { en: "Structural Steel Anti-Corrosion System", zh: "钢结构防腐配套体系", vi: "Hệ chống ăn mòn kết cấu thép" },
    summary: {
      en: "Representative 3-coat build for plants, bridges and warehouse steel in medium-to-high corrosivity: epoxy zinc-rich primer (40 μm) → epoxy MIO intermediate (80 μm) → acrylic-PU topcoat (2 × 40 μm). Exact build is specified per corrosivity category and design life; batch TDS and QC reports accompany every order.",
      zh: "面向工厂、桥梁与仓库钢构（中高腐蚀等级）的典型三道配套：环氧富锌底漆（40 μm）→ 环氧云铁中间漆（80 μm）→ 丙烯酸聚氨酯面漆（2×40 μm）。具体膜厚按腐蚀等级与设计寿命确定；每单随附批次 TDS 与质检报告。",
      vi: "Cấu hình 3 lớp đại diện cho nhà máy, cầu và thép kho ở cấp ăn mòn trung-cao: lót epoxy giàu kẽm (40 μm) → lớp giữa epoxy MIO (80 μm) → phủ acrylic-PU (2 × 40 μm). Độ dày chính xác theo cấp ăn mòn và tuổi thọ thiết kế; mỗi đơn kèm TDS và báo cáo QC theo lô.",
    },
    image: "/images/case-steel-plant.jpg",
    metrics: [
      { label: { en: "System", zh: "系统", vi: "Hệ thống" }, value: "3-coat" },
      { label: { en: "Total DFT", zh: "总膜厚", vi: "Tổng DFT" }, value: "160 μm" },
      { label: { en: "Selection per", zh: "选型依据", vi: "Căn cứ chọn" }, value: "ISO 12944" },
    ],
  },
  {
    code: "SYS-02",
    location: { en: "Warehouse flooring", zh: "仓储地坪", vi: "Sàn kho" },
    year: "Heavy-duty",
    title: { en: "Logistics Warehouse Floor System", zh: "物流仓库地坪体系", vi: "Hệ sàn kho logistics" },
    summary: {
      en: "Representative heavy-duty floor for forklift traffic: epoxy sealing primer → epoxy mortar / putty levelling → solvent-free self-leveling epoxy 2–3 mm (or economical roll-coat builds) with optional PU clear sealer. Foot traffic in ~36 h, full cure 7 days.",
      zh: "承受叉车通行的典型重载地坪：环氧封闭底漆 → 环氧砂浆/腻子找平 → 2–3 mm 无溶剂自流平（或经济型平涂），可选聚氨酯罩光。约 36 小时上人，7 天完全固化。",
      vi: "Sàn hạng nặng điển hình cho xe nâng: lót khóa epoxy → vữa/bột trét epoxy → tự chảy không dung môi 2–3 mm (hoặc hệ lăn kinh tế), có thể phủ trong PU. Đi lại sau ~36 giờ, đóng rắn hoàn toàn 7 ngày.",
    },
    image: "/images/case-warehouse.jpg",
    metrics: [
      { label: { en: "Build", zh: "膜厚", vi: "Độ dày" }, value: "2–3 mm" },
      { label: { en: "Coats", zh: "道数", vi: "Số lớp" }, value: "3–4" },
      { label: { en: "Traffic", zh: "交通", vi: "Tải" }, value: "Forklift" },
    ],
  },
  {
    code: "SYS-03",
    location: { en: "Building facade", zh: "建筑外墙", vi: "Mặt tiền công trình" },
    year: "FEVE system",
    title: { en: "Commercial Facade Fluorocarbon System", zh: "商业外墙氟碳体系", vi: "Hệ fluorocarbon mặt tiền thương mại" },
    summary: {
      en: "Representative facade build on concrete: epoxy sealing primer → epoxy high-build intermediate → two-pack FEVE fluorocarbon topcoat (metallic colours available). 1000 h accelerated-weathering laboratory data for the finish; system build specified per exposure and design life.",
      zh: "混凝土外墙典型配套：环氧封闭底漆 → 环氧厚浆中间层 → 双组份 FEVE 氟碳面漆（可做金属色）。面漆有 1000 小时人工加速老化实验数据；体系膜厚按曝露环境与设计寿命确定。",
      vi: "Cấu hình mặt tiền bê tông điển hình: lót khóa epoxy → lớp giữa epoxy dày → phủ fluorocarbon FEVE 2 thành phần (có màu kim loại). Sơn phủ có số liệu lão hóa tăng tốc 1000 giờ; độ dày hệ theo môi trường và tuổi thọ thiết kế.",
    },
    image: "/images/case-tower.jpg",
    metrics: [
      { label: { en: "System", zh: "系统", vi: "Hệ thống" }, value: "3-part" },
      { label: { en: "Finish gloss", zh: "面漆光泽", vi: "Độ bóng" }, value: "≥ 90 (60°)" },
      { label: { en: "Lab weathering", zh: "实验室耐候", vi: "Lão hóa PTN" }, value: "1000 h" },
    ],
  },
];

export const certifications: { code: string; title: LStr }[] = [
  { code: "ISO 9001", title: { en: "Quality Management", zh: "质量管理", vi: "Quản lý chất lượng" } },
  { code: "CE", title: { en: "EU Conformity", zh: "欧盟符合性", vi: "Phù hợp EU" } },
  { code: "REACH", title: { en: "SVHC Compliance", zh: "REACH 合规", vi: "Tuân thủ REACH" } },
  { code: "SGS", title: { en: "Test Reports", zh: "检测报告", vi: "Báo cáo kiểm tra" } },
  { code: "Low VOC", title: { en: "Low-VOC grades", zh: "低 VOC 等级", vi: "Cấp VOC thấp" } },
  { code: "DG Pack", title: { en: "UN / DG packaging", zh: "UN 危包", vi: "Đóng gói DG" } },
];

export const tdsPdfs = ["HN-AC-201", "HN-AC-302", "HN-AC-405", "HN-HT-200", "HN-FL-101"];

export const partners: LStr[] = [
  { en: "EPOXY", zh: "环氧", vi: "EPOXY", es: "EPOXI", ar: "إيبوكسي" },
  { en: "POLYURETHANE", zh: "聚氨酯", vi: "POLYURETHANE", es: "POLIURETANO", ar: "بولي يوريثان" },
  { en: "FLUOROCARBON", zh: "氟碳", vi: "FLUOROCARBON", es: "FLUOROCARBONO", ar: "فلوروكربون" },
  { en: "SILICONE HT", zh: "耐高温有机硅", vi: "SILICONE CHỊU NHIỆT", es: "SILICONA ALTA TEMP.", ar: "سيليكون حراري" },
  { en: "ZINC-RICH", zh: "富锌", vi: "GIÀU KẼM", es: "RICO EN ZINC", ar: "غني بالزنك" },
  { en: "CHLORINATED RUBBER", zh: "氯化橡胶", vi: "CAO SU CLO HÓA", es: "CAUCHO CLORADO", ar: "مطاط مكلور" },
  { en: "ALKYD", zh: "醇酸", vi: "ALKYD", es: "ALQUÍDICO", ar: "ألكيد" },
  { en: "WATERBORNE", zh: "水性", vi: "GỐC NƯỚC", es: "BASE AGUA", ar: "أساس مائي" },
];

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
    desc: { en: "Corrosion-critical assets — storage tanks, refineries, pipelines — protected with multi-coat epoxy / PU systems selected per chemical exposure and ISO 12944 category.", zh: "腐蚀关键资产——储罐、炼厂、管道，按化学品接触与 ISO 12944 等级选用多层环氧/PU 体系。", vi: "Tài sản trọng yếu ăn mòn — bồn chứa, lọc hóa dầu, đường ống — dùng hệ epoxy/PU nhiều lớp theo mức tiếp xúc hóa chất và cấp ISO 12944." },
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
    desc: { en: "Ship hulls, offshore structures and splash zones: marine coating lines incl. anti-corrosion and specialty systems — certificates for the applicable system available on request.", zh: "船体、海洋结构及飞溅区：提供防腐与特种体系等船舶漆系列，适用体系证书备索。", vi: "Thân tàu, kết cấu ngoài khơi và vùng văng: dải sơn hàng hải gồm chống ăn mòn và hệ đặc thù — chứng nhận hệ áp dụng theo yêu cầu." },
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
    desc: { en: "Boilers, stacks, exhausts and turbine housings protected with silicone high-temperature systems up to 550 °C (custom grades beyond).", zh: "锅炉、烟囱、排气管及涡轮壳体采用最高 550 ℃ 的有机硅耐高温体系（更高等级可定制）。", vi: "Lò hơi, ống khói, ống xả và vỏ tuabin dùng hệ silicone chịu nhiệt tới 550 °C (cấp cao hơn đặt riêng)." },
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
    desc: { en: "Long-span steel bridges and transit infrastructure: coating systems assembled per design-life and maintenance plan from the HN primer / intermediate / topcoat range.", zh: "大跨度钢桥与交通基础设施：以 HN 底漆/中间漆/面漆按设计寿命与维护计划组配套体系。", vi: "Cầu thép nhịp dài và hạ tầng giao thông: hệ sơn lắp theo tuổi thọ thiết kế và kế hoạch bảo trì từ dải lót/lớp giữa/lớp phủ HN." },
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
    desc: { en: "Towers, malls and public buildings: FEVE fluorocarbon and elastic anti-crack facade systems with 1000 h accelerated-weathering lab data for the finishes.", zh: "塔楼、商场及公共建筑：FEVE 氟碳与弹性抗裂幕墙体系，面漆有 1000 小时人工加速老化实验数据。", vi: "Tháp, TTTM và công trình công cộng: hệ mặt tiền FEVE fluorocarbon và đàn hồi chống nứt, sơn phủ có số liệu lão hóa tăng tốc 1000 giờ." },
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
    desc: { en: "Warehouses, plants and parking decks: self-leveling, roll-coat and waterborne floor systems rated for forklift traffic.", zh: "仓库、厂房与停车场：自流平、平涂及水性地坪体系，可承受叉车通行。", vi: "Kho, nhà máy và bãi đỗ xe: hệ tự chảy, lăn và gốc nước chịu xe nâng." },
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
    desc: { en: "Tell us substrate, environment and performance targets — we respond with a matched coating system proposal within one business day.", zh: "告知基材、环境与性能目标，一个工作日内回复配套涂料方案。", vi: "Cung cấp bề mặt, môi trường và yêu cầu — chúng tôi phản hồi đề xuất hệ sơn trong một ngày làm việc." },
  },
  {
    no: "02",
    title: { en: "Sample & Colour", zh: "样品与调色", vi: "Mẫu & màu" },
    desc: { en: "Lab samples and RAL/Pantone colour matching, typically within 7–15 days depending on complexity.", zh: "实验室样品与 RAL/Pantone 调色，视复杂度通常 7–15 天。", vi: "Mẫu phòng thí nghiệm và pha màu RAL/Pantone, thường 7–15 ngày tùy độ phức tạp." },
  },
  {
    no: "03",
    title: { en: "Production & QC", zh: "生产与品控", vi: "Sản xuất & QC" },
    desc: { en: "Production at certified partner plants; batch QC report available and pre-shipment third-party testing on request. 24-month quality warranty.", zh: "认证工厂生产；批次质检报告可提供，可安排装运前第三方检测。24 个月质保。", vi: "Sản xuất tại nhà máy đối tác chứng nhận; báo cáo QC theo lô, thử nghiệm bên thứ ba trước giao theo yêu cầu. Bảo hành 24 tháng." },
  },
  {
    no: "04",
    title: { en: "Export & Support", zh: "出口与支持", vi: "Xuất khẩu & hỗ trợ" },
    desc: { en: "CO, MSDS, TDS and dangerous-goods packaging as required by destination; application guidance coordinated with the plants' technical teams.", zh: "按目的国要求提供 CO、MSDS、TDS 及危险品包装；施工指导由工厂技术团队配合提供。", vi: "CO, MSDS, TDS và đóng gói nguy hiểm theo yêu cầu quốc gia nhập; hướng dẫn thi công phối hợp đội kỹ thuật nhà máy." },
  },
];

// Solutions page compact process (4 steps)
export const solutionsProcess: { no: string; t: LStr; d: LStr }[] = [
  { no: "01", t: { en: "Consult", zh: "咨询", vi: "Tư vấn" }, d: { en: "Share substrate, environment, performance targets.", zh: "告知基材、环境、性能目标。", vi: "Cung cấp bề mặt, môi trường, yêu cầu." } },
  { no: "02", t: { en: "Sample", zh: "样品", vi: "Mẫu" }, d: { en: "Lab sample & colour in 7–15 days.", zh: "7–15 天出样与调色。", vi: "Mẫu & màu trong 7–15 ngày." } },
  { no: "03", t: { en: "Produce", zh: "生产", vi: "Sản xuất" }, d: { en: "Certified plants. Batch QC report.", zh: "认证工厂生产，批次质检报告。", vi: "Nhà máy chứng nhận. Báo cáo QC mỗi lô." } },
  { no: "04", t: { en: "Export", zh: "出口", vi: "Xuất khẩu" }, d: { en: "CO, MSDS, TDS, DG packaging.", zh: "CO、MSDS、TDS、危包。", vi: "CO, MSDS, TDS, đóng gói DG." } },
];

// News items — industry guides & briefings (full articles, trilingual)
export const news: {
  date: string;
  category: string;
  title: LStr;
  excerpt: LStr;
  read: LStr;
  image: string;
  body: LStr;
}[] = [
  {
    date: "2025-09-18",
    category: "R&D",
    title: { en: "Spec Guide: Choosing Anti-Corrosion Systems per ISO 12944 C1–C5", zh: "选型指南：按 ISO 12944 C1–C5 选择防腐体系", vi: "Cẩm nang chọn hệ: hệ chống ăn mòn theo ISO 12944 C1–C5" },
    excerpt: {
      en: "How corrosivity categories drive primer choice, DFT builds and coat count — a practical specifier's checklist for steel structures, with zinc-rich / MIO / PU reference builds.",
      zh: "腐蚀等级如何决定底漆选择、膜厚构建与道数——面向钢结构规格师的实用清单，附富锌/云铁/PU 参考配套。",
      vi: "Cấp ăn mòn quyết định chọn lót, độ dày và số lớp — danh mục thực dụng cho người lập specs, kèm cấu hình tham khảo giàu kẽm / MIO / PU.",
    },
    read: { en: "5 min read", zh: "5 分钟阅读", vi: "5 phút đọc" },
    image: "/images/news-1.jpg",
    body: ${lstr5(NEWS_BODIES[0])},
  },
  {
    date: "2025-08-02",
    category: "R&D",
    title: { en: "High-Temperature Coatings: What 200–600 °C Ratings Mean in Practice", zh: "耐高温涂料：200–600 ℃ 等级在现场意味着什么", vi: "Sơn chịu nhiệt: cấp 200–600 °C nghĩa là gì trong thực tế" },
    excerpt: {
      en: "Silicone vs inorganic ceramic binders, why total DFT must stay thin at temperature, and how to specify colours and grades for pipes, stacks and boiler plant.",
      zh: "有机硅与无机陶瓷粘结剂的区别、为何高温下总膜厚必须薄，以及管道/烟囱/锅炉设备的颜色与等级选型。",
      vi: "Keo silicone và ceramic vô cơ khác nhau ra sao, vì sao tổng DFT phải mỏng ở nhiệt cao, và cách chọn màu/cấp cho ống, ống khói, lò hơi.",
    },
    read: { en: "4 min read", zh: "4 分钟阅读", vi: "4 phút đọc" },
    image: "/images/news-2.jpg",
    body: ${lstr5(NEWS_BODIES[1])},
  },
  {
    date: "2025-06-21",
    category: "Export",
    title: { en: "Import Documents for Coating Purchases: CO, MSDS, TDS & UN Packaging", zh: "涂料采购进口单证：CO、MSDS、TDS 与 UN 包装", vi: "Chứng từ nhập sơn: CO, MSDS, TDS & đóng gói UN" },
    excerpt: {
      en: "A buyer's walkthrough of the paperwork behind a coating shipment from China — what each document certifies and how to pre-check requirements with your customs broker.",
      zh: "中国涂料出货单证全景——每份文件证明什么、如何与报关行预核要求。",
      vi: "Tổng quan chứng từ lô sơn từ Trung Quốc — mỗi giấy tờ chứng minh gì và cách kiểm tra trước với đại lý hải quan.",
    },
    read: { en: "4 min read", zh: "4 分钟阅读", vi: "4 phút đọc" },
    image: "/images/news-3.jpg",
    body: ${lstr5(NEWS_BODIES[2])},
  },
  {
    date: "2025-04-10",
    category: "Export",
    title: { en: "OEM / Private-Label Coating Sourcing from China: A Practical Checklist", zh: "从中国 OEM/贴牌采购涂料：实操清单", vi: "Nhập sơn OEM / nhãn riêng từ Trung Quốc: checklist thực tế" },
    excerpt: {
      en: "From colour standards and TDS ownership to drum labelling and MOQ strategy — what to fix in writing before placing a private-label order.",
      zh: "从色标与 TDS 归属到桶标与 MOQ 策略——下贴牌订单前应书面敲定的事项。",
      vi: "Từ tiêu chuẩn màu và quyền TDS đến nhãn thùng và chiến lược MOQ — những gì cần chốt bằng văn bản trước khi đặt hàng nhãn riêng.",
    },
    read: { en: "5 min read", zh: "5 分钟阅读", vi: "5 phút đọc" },
    image: "/images/news-4.jpg",
    body: ${lstr5(NEWS_BODIES[3])},
  },
  {
    date: "2025-02-15",
    category: "Industry",
    title: { en: "How Low-VOC Formulations Are Reshaping Industrial Coatings", zh: "低 VOC 配方如何重塑工业涂料", vi: "Công thức VOC thấp đang định hình lại sơn công nghiệp" },
    excerpt: {
      en: "An engineering briefing on how waterborne and high-solids chemistries maintain performance while meeting tightening environmental regulations across markets.",
      zh: "探讨水性及高固含配方如何在各市场环保法规趋严下保持性能的工程简报。",
      vi: "Tài liệu về công thức gốc nước và hàm lượng rắn cao duy trì hiệu suất trong bối cảnh quy định môi trường khắt khe.",
    },
    read: { en: "6 min read", zh: "6 分钟阅读", vi: "6 phút đọc" },
    image: "/images/news-6.jpg",
    body: ${lstr5(NEWS_BODIES[4])},
  },
  {
    date: "2024-11-30",
    category: "Industry",
    title: { en: "Epoxy Floors: Self-Leveling vs Roll-Coat for Warehouses", zh: "环氧地坪：仓库选自流平还是平涂", vi: "Sàn epoxy: tự chảy hay lăn cho nhà kho" },
    excerpt: {
      en: "Build, budget and traffic compared: when 2–3 mm self-leveling pays off, and where 90 μm roll-coat systems are the smarter specification.",
      zh: "膜厚、预算与交通量对比：何时 2–3 mm 自流平物有所值，何时 90 μm 平涂才是更聪明的选择。",
      vi: "So sánh độ dày, ngân sách và tải: khi nào tự chảy 2–3 mm đáng tiền, khi nào hệ lăn 90 μm là lựa chọn thông minh hơn.",
    },
    read: { en: "4 min read", zh: "4 分钟阅读", vi: "4 phút đọc" },
    image: "/images/news-5.jpg",
    body: ${lstr5(NEWS_BODIES[5])},
  },
];

// FAQ
export const faqs: { q: LStr; a: LStr }[] = [
  {
    q: { en: "What is your Minimum Order Quantity (MOQ)?", zh: "起订量（MOQ）是多少？", vi: "Số lượng đặt tối thiểu (MOQ) là bao nhiêu?" },
    a: { en: "Standard MOQ is 200 kg. Mixed tones within the same product family are accepted — suitable for distributor trial orders. Sample quantities can be arranged quickly.", zh: "标准起订量为 200 公斤。同系列产品接受混色，适合经销商试单。样品可快速安排。", vi: "MOQ tiêu chuẩn 200 kg. Nhận phối màu hỗn hợp cùng dòng — phù hợp đơn thử nghiệm nhà phân phối. Mẫu có thể bố trí nhanh." },
  },
  {
    q: { en: "How fast can you deliver a custom formulation or colour sample?", zh: "定制配方或调色样品多久能交付？", vi: "Mẫu phối chế hoặc pha màu giao trong bao lâu?" },
    a: { en: "Custom colour matching and formulation samples are typically ready within 7–15 days depending on complexity; we confirm the exact schedule with your inquiry.", zh: "调色与配方样品视复杂度通常 7–15 天内完成；询盘时我们会确认具体时间表。", vi: "Mẫu pha màu và phối chế thường trong 7–15 ngày tùy độ phức tạp; lịch chính xác xác nhận khi nhận yêu cầu." },
  },
  {
    q: { en: "Which certifications and export documents do you provide?", zh: "你们提供哪些认证与出口单证？", vi: "Các chứng nhận và chứng từ xuất khẩu nào được cung cấp?" },
    a: { en: "Products come from ISO 9001:2015 certified production with CE-marked lines and REACH-aligned documentation; SGS test reports for the specific system are available on request. Export documents include CO, MSDS, TDS and UN/DG packaging as required by the destination market.", zh: "产品出自 ISO 9001:2015 认证工厂，含 CE 产品线与对齐 REACH 的文件；可按需提供适用体系的 SGS 检测报告。出口单证含 CO、MSDS、TDS 及目的国要求的 UN 危包。", vi: "Sản phẩm từ nhà máy ISO 9001:2015, dòng CE và hồ sơ theo REACH; báo cáo SGS cho hệ cụ thể theo yêu cầu. Chứng từ gồm CO, MSDS, TDS và đóng gói UN/DG theo thị trường nhập." },
  },
  {
    q: { en: "Do you offer OEM / private-label packaging?", zh: "是否提供 OEM/贴牌包装？", vi: "Có hỗ trợ đóng gói OEM / nhãn riêng không?" },
    a: { en: "Yes — custom drum labels, branded packaging, multilingual TDS/MSDS and co-branded collateral, with formulation confidentiality.", zh: "提供——定制桶身标签、品牌包装、多语言 TDS/MSDS 及联合品牌物料，配方保密。", vi: "Có — nhãn thùng riêng, bao bì thương hiệu, TDS/MSDS đa ngữ và tài liệu đồng thương hiệu, bảo mật công thức." },
  },
  {
    q: { en: "What is the salt-spray resistance of your anti-corrosion systems?", zh: "防腐体系的盐雾耐受性如何？", vi: "Khả năng chịu phun muối của hệ chống ăn mòn?" },
    a: { en: "Salt-spray performance is system-dependent, so we provide the test report or certified data for the specific system you are sourcing rather than a single blanket figure. Zinc-rich epoxy builds are the highest-rated in our range.", zh: "盐雾性能取决于具体体系，因此我们按您采购的具体体系提供检测报告或认证数据，而不是一个笼统数字。富锌环氧体系是我们产品线中等级最高的。", vi: "Khả năng chịu phun muối tùy hệ thống, nên chúng tôi cung cấp báo cáo thử hoặc số liệu chứng nhận cho hệ cụ thể bạn nhập thay vì một con số chung. Hệ epoxy giàu kẽm có cấp cao nhất trong dải sản phẩm." },
  },
  {
    q: { en: "Do you provide on-site engineering and applicator training?", zh: "是否提供现场工程与施工培训？", vi: "Có hỗ trợ kỹ thuật và đào tạo thi công tại hiện trường?" },
    a: { en: "For larger projects we coordinate technical support with the producing plant's technical department — system specification, surface-preparation requirements and application guidance.", zh: "较大项目可协调生产工厂技术部门提供支持——体系选型、表面处理要求及施工指导。", vi: "Dự án lớn: phối hợp bộ phận kỹ thuật nhà máy — chọn hệ, yêu cầu xử lý bề mặt và hướng dẫn thi công." },
  },
  {
    q: { en: "What is your quality warranty?", zh: "质保期多久？", vi: "Thời gian bảo hành?" },
    a: { en: "Every batch ships with an available QC report and is covered by a 24-month quality warranty from delivery.", zh: "每批可附质检报告，自交货起享 24 个月质保。", vi: "Mỗi lô có báo cáo QC và bảo hành chất lượng 24 tháng từ khi giao." },
  },
  {
    q: { en: "Which regions do you export to?", zh: "出口到哪些地区？", vi: "Xuất khẩu tới khu vực nào?" },
    a: { en: "We ship worldwide — established channels across SE Asia, the Middle East, Africa, South America, Eastern Europe and Central Asia, and we quote to any destination on request.", zh: "全球发货——在东南亚、中东、非洲、南美、东欧及中亚有成熟渠道，也可按需报至任意目的港。", vi: "Gửi hàng toàn cầu — kênh sẵn có tại Đông Nam Á, Trung Đông, Châu Phi, Nam Mỹ, Đông Âu, Trung Á; báo giá tới bất kỳ cảng nào theo yêu cầu." },
  },
];

// About page capability pillars
export const capabilities: { icon: string; t: LStr; d: LStr }[] = [
  { icon: "Factory", t: { en: "Sourcing", zh: "源头供应", vi: "Nguồn cung" }, d: { en: "ISO 9001 certified coating plants in China's coatings hub.", zh: "中国涂料之乡的 ISO 9001 认证工厂。", vi: "Nhà máy sơn ISO 9001 tại thủ phủ sơn Trung Quốc." } },
  { icon: "FlaskConical", t: { en: "Matching", zh: "配方匹配", vi: "Phối hợp công thức" }, d: { en: "Colour & performance matching; sample in 7–15 days.", zh: "调色与性能匹配，7–15 天出样。", vi: "Pha màu & hiệu suất; mẫu 7–15 ngày." } },
  { icon: "Globe2", t: { en: "Export Desk", zh: "出口部门", vi: "Bộ phận xuất khẩu" }, d: { en: "CO, MSDS, TDS, UN/DG packaging.", zh: "CO、MSDS、TDS、UN 危包。", vi: "CO, MSDS, TDS, đóng gói UN/DG." } },
  { icon: "Truck", t: { en: "Logistics", zh: "物流", vi: "Logistics" }, d: { en: "Lead time 7–15 days after order confirmation.", zh: "订单确认后 7–15 天交货。", vi: "Giao 7–15 ngày sau xác nhận đơn." } },
];

// About page story bullets
export const storyBullets: LStr[] = [
  { en: "Batch QC report available per order", zh: "每单可附批次质检报告", vi: "Báo cáo QC theo lô cho mỗi đơn" },
  { en: "RAL / Pantone colour matching", zh: "RAL / Pantone 调色", vi: "Pha màu RAL / Pantone" },
  { en: "ISO 9001 / CE certified product lines", zh: "ISO 9001 / CE 认证产品线", vi: "Dòng sản phẩm chứng nhận ISO 9001 / CE" },
  { en: "OEM private-label packaging", zh: "OEM 贴牌包装", vi: "Đóng gói nhãn riêng OEM" },
];

// Home core-business chips
export const coreChips: LStr[] = [
  { en: "ISO 9001 Production", zh: "ISO 9001 生产", vi: "Sản xuất ISO 9001" },
  { en: "CE / REACH-Aligned", zh: "CE / REACH 对齐", vi: "Theo CE / REACH" },
  { en: "OEM/ODM", zh: "OEM/ODM", vi: "OEM/ODM" },
  { en: "Colour Matching", zh: "调色服务", vi: "Pha màu" },
  { en: "Export Documentation", zh: "出口单证", vi: "Chứng từ xuất khẩu" },
];

// Cases page outcomes band — system-level facts
export const caseOutcomes: { v: string; l: LStr }[] = [
  { v: "38+", l: { en: "listed products across six systems", zh: "六大体系在售型号", vi: "sản phẩm liệt kê trong sáu hệ" } },
  { v: "3-coat", l: { en: "matched primer-to-topcoat systems", zh: "底漆到面漆成套体系", vi: "hệ lót-đến-lớp phủ phối hợp" } },
  { v: "24 mo", l: { en: "quality warranty standard", zh: "标准质保期", vi: "bảo hành tiêu chuẩn" } },
  { v: "48 h", l: { en: "typical sample dispatch", zh: "常规寄样时效", vi: "thời gian gửi mẫu thông thường" } },
];
`;

// 注入 models 数组到各 category（在 `applications:` 前插入）
function injectModels(src) {
  for (const cat of Object.keys(CATEGORY_MODELS)) {
    const marker = `    image: "/images/${{
      "CAT-01": "product-anticorrosion", "CAT-02": "product-hightemp", "CAT-03": "product-epoxy-floor",
      "CAT-04": "product-exterior", "CAT-05": "product-architectural", "CAT-06": "lab",
    }[cat]}.jpg",`;
    const modelsBlock = `    models: [\n${renderModels(cat)}\n    ],\n`;
    const idx = src.indexOf(marker, src.indexOf(`code: "${cat}"`));
    if (idx === -1) throw new Error(`marker not found for ${cat}`);
    src = src.slice(0, idx) + modelsBlock + src.slice(idx);
  }
  return src;
}

const finalTs = injectModels(dataTs);

// ─────────────────────────────────────────────────────────────────────────────
// 7. es/ar 后处理：模板里裸写的 {en,zh,vi} 字面量 → 补 es/ar（按英文原文查词典）
//    （models 的 desc/details 已由 lstr5/renderDetails 直接产 5 语，这里跳过）
// ─────────────────────────────────────────────────────────────────────────────
function readStrLit(src, j) {
  while (j < src.length && /\s/.test(src[j])) j++;
  const q = src[j];
  if (q !== '"' && q !== "`" && q !== "'") return null;
  let v = "", k = j + 1;
  while (k < src.length) {
    const c = src[k];
    if (c === "\\") { v += c + (src[k + 1] ?? ""); k += 2; continue; }
    if (c === q) return { raw: v, quote: q, next: k + 1 };
    v += c; k++;
  }
  return null;
}
function skipWs(src, j) { while (j < src.length && /\s/.test(src[j])) j++; return j; }
function readField(src, j, name) {
  j = skipWs(src, j);
  if (!src.startsWith(`${name}:`, j)) return null;
  return readStrLit(src, j + name.length + 1);
}
function expectField(src, j, name) {
  j = skipWs(src, j);
  if (src[j] !== ",") return null;
  return readField(src, j + 1, name);
}
function unescapeStr(raw, quote) {
  if (quote === "`") return raw;
  try { return JSON.parse(`"${raw}"`); } catch { return raw; }
}

// 同时匹配单行 `{ en:` 与多行 `{\n  en:` 两种字面量形式
const EN_BLOCK_RE = /\{\s*en:/g;
function findEnBlock(src, from) {
  EN_BLOCK_RE.lastIndex = from;
  const m = EN_BLOCK_RE.exec(src);
  return m ? { idx: m.index, after: m.index + m[0].length } : null;
}

function injectLocales(src) {
  let out = "", i = 0, injected = 0, skipped = 0;
  while (true) {
    const hit = findEnBlock(src, i);
    if (!hit) { out += src.slice(i); break; }
    const { idx, after } = hit;
    const en = readStrLit(src, after);
    const zh = en && expectField(src, en.next, "zh");
    const vi = zh && expectField(src, zh.next, "vi");
    // vi 值之后：可选空白 + 可选逗号 + 空白 → 应到 `}`（或已注入的 es:）
    // 注入点 cut 取"原逗号之前"，避免与原尾逗号叠加成双逗号
    let cut = vi ? vi.next : 0;
    let rest = vi ? skipWs(src, vi.next) : 0;
    if (vi && src[rest] === ",") { cut = rest; rest = skipWs(src, rest + 1); }
    if (!en || !zh || !vi || src[rest] !== "}") {
      out += src.slice(i, idx + 1); i = idx + 1; continue;
    }
    if (src.startsWith("es:", rest)) { out += src.slice(i, rest); i = rest; skipped++; continue; }
    const enVal = unescapeStr(en.raw, en.quote);
    out += src.slice(i, cut) + `, es: ${ts(TR.es[enVal] ?? enVal)}, ar: ${ts(TR.ar[enVal] ?? enVal)}`;
    injected++;
    i = cut;
  }
  return { text: out, injected, skipped };
}

// 翻译清单导出：node scripts/build-data.mjs --dump-strings
if (process.argv.includes("--dump-strings")) {
  const scanLstrPairs = (src) => {
    const pairs = [];
    let i = 0;
    while (true) {
      const hit = findEnBlock(src, i);
      if (!hit) break;
      const { idx, after } = hit;
      const en = readStrLit(src, after);
      const zh = en && expectField(src, en.next, "zh");
      const vi = zh && expectField(src, zh.next, "vi");
      if (en && zh && vi) {
        let r = skipWs(src, vi.next);
        if (src[r] === ",") r = skipWs(src, r + 1);
        if (!src.startsWith("es:", r)) pairs.push([unescapeStr(en.raw, en.quote), unescapeStr(zh.raw, zh.quote)]);
        i = Math.max(r, vi.next, idx + 1);
      } else i = idx + 1;
    }
    return pairs;
  };
  const pairs = new Map();
  const add = (en, zh = "") => { if (en && !pairs.has(en)) pairs.set(en, zh); };
  const addL = (v) => v && v.en && add(v.en, v.zh ?? "");
  Object.values(PLABEL).forEach(addL);
  Object.values(SURFACE).forEach(addL);
  Object.values(SEC).forEach(addL);
  Object.values(SAFETY).forEach(addL);
  VALUE_TERMS.zh.forEach(([en]) => add(en, ""));
  for (const list of Object.values(CATEGORY_MODELS)) for (const m of list) { addL(m.desc); addL(m.overview); addL(m.apps); }
  NEWS_BODIES.forEach(addL);
  scanLstrPairs(finalTs).forEach(([en, zh]) => add(en, zh));
  // ui 字典（i18n.ts）按 key 导出，含 en/zh 参考
  const i18nSrc = readFileSync(new URL("../src/lib/i18n.ts", import.meta.url), "utf8");
  const uiDump = {};
  const re = /"([^"\n]+)": \{/g;
  let m2;
  while ((m2 = re.exec(i18nSrc))) {
    const key = m2[1];
    if (!/^[a-z]+\./.test(key)) continue;
    const en = readField(i18nSrc, re.lastIndex, "en");
    const zh = en && expectField(i18nSrc, en.next, "zh");
    if (en && zh) uiDump[key] = { en: unescapeStr(en.raw, en.quote), zh: unescapeStr(zh.raw, zh.quote) };
  }
  writeFileSync(
    new URL("../../hn-orig-check/to-translate.json", import.meta.url),
    JSON.stringify({ generatedAt: new Date().toISOString(), count: pairs.size, pairs: Object.fromEntries(pairs), ui: uiDump }, null, 1),
    "utf8"
  );
  console.log(`dumped ${pairs.size} data strings + ${Object.keys(uiDump).length} ui keys`);
  process.exit(0);
}

const inj = injectLocales(finalTs);
writeFileSync("src/lib/data.ts", inj.text, "utf8");
console.log(`es/ar injected into ${inj.injected} template blocks (${inj.skipped} already 5-lang from lstr5)`);

// 生成对外型号映射表（内部归档用）
const mapLines = Object.values(CATEGORY_MODELS)
  .flat()
  .map((m) => `| ${m.code} | ${m.factory ?? "—（原站即无原厂型号）"} | ${m.name.zh} |`);
const mappingMd = `# HONG NGUYEN 对外型号 ↔ 原厂型号映射表（内部机密，勿外传）

> 生成时间：${new Date().toISOString().slice(0, 10)}　来源：scripts/build-data.mjs
> 对外网站/报价单/PI 一律只用 HN 型号；原厂型号仅内部对照（供应商不披露原则）。

| HN 对外型号 | 原厂型号 | 品名 |
|---|---|---|
${mapLines.join("\n")}

## 已下架条目（原站张冠李戴/重复，无真实 TDS 支撑）
- HN-AC-610 / HN-AC-611（原文错贴环氧富锌 TDS）
- HN-EX-702（与 HN-AC-405 完全重复）
- HN-EX-705 / HN-CUSTOM-05~10 / HN-CUSTOM-14（原文错贴醇酸漆 TDS）
- HN-CUSTOM-12 改为"参数备索"列表条目
`;
writeFileSync("../business-roles/factory-liaison/型号映射-HN对外.md", mappingMd, "utf8");

console.log("data.ts regenerated:", finalTs.length, "chars");
console.log("models per category:", Object.fromEntries(Object.entries(CATEGORY_MODELS).map(([k, v]) => [k, v.length])));
