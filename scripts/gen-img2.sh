#!/bin/bash
# IMG-2: Generate 14 missing content images for HONG NGUYEN site.
# Sequential generation with ~2s delay between calls to avoid 429.
# Retry once with simplified prompt on failure.

set -u
OUT_DIR="/home/z/my-project/public/images"
mkdir -p "$OUT_DIR"

STYLE="photorealistic cinematic B2B industrial photography, dark moody high-contrast, amber orange accent lighting, no text, no logos, no watermarks"

# Each entry: filename|size|prompt
ENTRIES=(
"product-architectural.jpg|1152x864|Modern building interior lobby with textured stone-effect wall coatings, smooth painted accent wall, warm natural sunlight through floor-to-ceiling windows, professional architectural photography, ${STYLE}"
"sol-oil-gas.jpg|1344x768|Large oil storage tanks and refinery at sunset, protective industrial coating on pipelines, dramatic industrial lighting, amber sky, ${STYLE}"
"sol-marine.jpg|1344x768|Large ship hull in dry dock being coated with anti-corrosion paint, ocean backdrop, moody overcast lighting with amber accent, ${STYLE}"
"sol-power.jpg|1344x768|Industrial power plant with tall smokestacks and boilers, high-temperature protective coating on steel, steam rising, dramatic sky at golden hour, amber sunset light, ${STYLE}"
"sol-infrastructure.jpg|1344x768|Long-span cable-stayed steel bridge with freshly coated steel structure, golden hour lighting, wide angle, dramatic sky, amber tones, ${STYLE}"
"sol-architecture.jpg|1344x768|Modern commercial tower facade with premium exterior coating, sleek glass and coated metal panels, urban skyline, golden hour, amber warm light, ${STYLE}"
"sol-flooring.jpg|1344x768|Vast warehouse interior with glossy seamless self-leveling epoxy floor, strong perspective lines receding, forklift in distance, clean industrial space, amber safety lighting, ${STYLE}"
"news-1.jpg|1152x864|Close-up of paint sample panels with fluorocarbon topcoat undergoing weatherability testing in a lab, coated steel coupons under heat lamp, amber accent lighting, ${STYLE}"
"news-2.jpg|1152x864|Wide shot of a steel plant structure freshly coated with anti-corrosion paint, workers in safety gear and hardhats inspecting, industrial site, amber sunset light, ${STYLE}"
"news-3.jpg|1152x864|Clean modern paint manufacturing facility with indoor greenery and eco-friendly elements, large windows, natural light, sustainable industrial design, amber warm tones, ${STYLE}"
"news-4.jpg|1152x864|Stacked shipping containers at a busy port with rows of industrial paint drums ready for export, cranes in background, amber sunset light, global trade logistics, ${STYLE}"
"news-5.jpg|1152x864|Coatings R&D laboratory with chemists in white coats testing paint samples, spectrophotometer, beakers of colored liquid, modern clean lab equipment, amber accent lighting, ${STYLE}"
"news-6.jpg|1152x864|Paint chemist in lab holding up a sample panel of low-VOC eco-friendly coating, beaker of green-tinted paint nearby, clean modern lab, amber warm accent lighting, ${STYLE}"
"about-rd.jpg|1152x864|Senior coatings chemist in modern lab reviewing formulation data on a tablet, paint sample swatches and beakers on workbench, focused expression, warm amber lighting, professional industrial portrait photography, ${STYLE}"
)

gen_one() {
  local fname="$1" size="$2" prompt="$3" attempt="${4:-1}"
  local out="${OUT_DIR}/${fname}"
  rm -f "$out"
  if [ "$attempt" -eq 2 ]; then
    prompt="Industrial scene: ${prompt%%, photorealistic*}, ${STYLE}"
  fi
  echo ">>> [attempt $attempt] $fname ($size)"
  z-ai image -p "$prompt" -o "$out" -s "$size" 2>&1 | tail -5
  if [ -s "$out" ]; then
    local sz; sz=$(stat -c%s "$out" 2>/dev/null || echo 0)
    echo "    OK -> $fname ($sz bytes)"
    return 0
  else
    echo "    FAIL -> $fname (empty or missing)"
    return 1
  fi
}

RESULTS=()
for entry in "${ENTRIES[@]}"; do
  IFS='|' read -r fname size prompt <<< "$entry"
  if gen_one "$fname" "$size" "$prompt" 1; then
    RESULTS+=("OK  $fname")
  else
    echo "    Retrying $fname with simplified prompt..."
    sleep 3
    if gen_one "$fname" "$size" "$prompt" 2; then
      RESULTS+=("OK  $fname (retry)")
    else
      RESULTS+=("FAIL $fname")
    fi
  fi
  sleep 2
done

echo ""
echo "================= RESULTS ================="
for r in "${RESULTS[@]}"; do echo "$r"; done
echo "==========================================="
