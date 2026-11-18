# -*- coding: utf-8 -*-
# gen-tds-pdfs.py — 从 tds-data.json 生成 5 份单页英文 TDS PDF（A4，打印友好，HN 对外型号）
import json, re, os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (BaseDocTemplate, Frame, PageTemplate, Paragraph,
                                Spacer, KeepTogether, HRFlowable)
from reportlab.pdfbase.pdfmetrics import registerFont
from reportlab.pdfbase import pdfmetrics

BASE = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(BASE, "..", "public", "tds")
os.makedirs(OUT_DIR, exist_ok=True)

INK = HexColor("#1c1917"); MUTED = HexColor("#78716c"); ACCENT = HexColor("#B45309")
HAIR = HexColor("#e7e5e4"); PAPER = HexColor("#ffffff")

# WinAnsi 安全化：μ→micro sign 等
CHAR_MAP = {"\u03bc": "\u00b5", "\uff1a": ": ", "\uff08": " (", "\uff09": ")",
            "\u3001": ", ", "\u2192": " - ", "\u2264": "<=", "\u2265": ">=",
            "\uff05": "%", "\uff0e": ".", "\u00d7": "x", "\u2103": "degC",
            "\uff5e": "-", "\uff0d": "-", "\u3010": "", "\u3011": ""}
def sanitize(t):
    for k, v in CHAR_MAP.items():
        t = t.replace(k, v)
    # 兜底：剔除非 Latin-1 可显示字符（ Helvetica/WinAnsi 渲染不到的）
    return "".join(c if (ord(c) < 0x250 or c in "\u2013\u2014\u00b7\u2022\u00b0") else "-" for c in t)

S_BODY = ParagraphStyle("body", fontName="Helvetica", fontSize=9.5, leading=14,
                        textColor=INK, alignment=TA_LEFT, spaceAfter=4)
S_SEC = ParagraphStyle("sec", fontName="Helvetica-Bold", fontSize=9.5, leading=12,
                       textColor=ACCENT, spaceBefore=10, spaceAfter=3)
S_NAME = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=17, leading=21, textColor=INK)
S_CAT = ParagraphStyle("cat", fontName="Helvetica", fontSize=8.5, leading=11,
                       textColor=MUTED, spaceBefore=2)
S_PRE = ParagraphStyle("pre", fontName="Courier", fontSize=8.6, leading=12.6, textColor=INK)

def header_footer(canv, doc):
    canv.saveState()
    W, H = A4
    # header
    canv.setFillColor(INK); canv.setFont("Helvetica-Bold", 13)
    canv.drawString(20*mm, H-16*mm, "HONG NGUYEN")
    canv.setFillColor(MUTED); canv.setFont("Helvetica", 7.5)
    canv.drawString(20*mm, H-20.5*mm, "Industrial Coatings Export  \u00b7  Foshan, China  \u00b7  ISO 9001 certified plants")
    canv.setFillColor(ACCENT); canv.setFont("Helvetica-Bold", 8)
    canv.drawRightString(W-20*mm, H-16*mm, "TECHNICAL DATA SHEET")
    canv.setStrokeColor(ACCENT); canv.setLineWidth(1.1)
    canv.line(20*mm, H-23*mm, W-20*mm, H-23*mm)
    # footer
    canv.setStrokeColor(HAIR); canv.setLineWidth(0.6)
    canv.line(20*mm, 17*mm, W-20*mm, 17*mm)
    canv.setFillColor(MUTED); canv.setFont("Helvetica", 7)
    canv.drawString(20*mm, 12.5*mm, "Inquiries: hogoshi2023@gmail.com  \u00b7  WhatsApp +86 131 7420 8290  \u00b7  OEM/ODM & colour matching on request")
    canv.drawString(20*mm, 8.5*mm, "\u00a9 2026 HONG NGUYEN. Values quoted from the manufacturer's technical data sheet; the batch TDS shipped with each order prevails.")
    canv.drawRightString(W-20*mm, 8.5*mm, getattr(doc, "doc_code", ""))
    canv.restoreState()

# 重新解析：sanitize 前先按【】切段，避免依赖字符映射后的形态
def build2(item):
    code, cat, name, details = item["code"], item["cat"], item["name"], item["details"]
    path = os.path.join(OUT_DIR, f"{code}-en.pdf")
    doc = BaseDocTemplate(path, pagesize=A4,
                          leftMargin=20*mm, rightMargin=20*mm, topMargin=28*mm, bottomMargin=21*mm,
                          title=f"{code} {sanitize(name)} - TDS",
                          author="HONG NGUYEN", creator="Z.ai",
                          subject=f"Technical data sheet - {code} ({sanitize(cat)})")
    doc.doc_code = f"TDS-{code}-EN \u00b7 Rev.2026-10"
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="f")
    doc.addPageTemplates([PageTemplate(id="p", frames=[frame], onPage=header_footer)])

    story = [Paragraph(sanitize(name), S_NAME),
             Paragraph(f"{sanitize(cat)}  \u00b7  Model <b>{code}</b>", S_CAT),
             HRFlowable(width="100%", thickness=0.6, color=HAIR, spaceBefore=6, spaceAfter=8)]

    sections = re.split(r"\u3010([^\u3011]+)\u3011", details)  # 交替：[间文, 节名, 间文, ...]
    pre = sections[0].strip()
    if pre:
        story.append(Paragraph(escape(pre), S_BODY))
    for k in range(1, len(sections), 2):
        sec_name = sections[k].strip()
        body = sections[k+1].strip() if k+1 < len(sections) else ""
        block = [Paragraph(sec_name.upper(), S_SEC)]
        for para in [p for p in body.split("\n") if p.strip()]:
            para = para.strip()
            if para.startswith("\u203b"):
                block.append(Paragraph(f"<i>{escape(para.lstrip('\u203b ').strip())}</i>", S_CAT))
            elif para.startswith("\u5907") or para.lower().startswith("note"):
                block.append(Paragraph(f"<i>{escape(para)}</i>", S_CAT))
            else:
                block.append(Paragraph(escape(para), S_BODY))
        story.append(KeepTogether(block))
    doc.build(story)
    return path

def escape(t):
    return sanitize(t).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

data = json.load(open(os.path.join(BASE, "..", "tds-data.json"), encoding="utf-8"))
for item in data:
    p = build2(item)
    print("built", p, os.path.getsize(p), "bytes")
