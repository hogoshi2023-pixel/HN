// Inline script for news/cases pages — loads markdown content via manifest + cms-loader

function escapeHtml(s) {
  if (!s) return '';
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toISOString().slice(0, 10);
}

function getBasePath() {
  // Pages in /en/ or /zh/ need .. to reach /content/
  // index.html (root) needs . to reach /content/
  const path = window.location.pathname;
  if (path.includes('/en/') || path.includes('/zh/')) return '..';
  return '.';
}

document.addEventListener('DOMContentLoaded', async function() {
  // Detect page language
  const isEn = !window.location.pathname.includes('/zh/');
  const isZh = !isEn;
  const lang = isZh ? 'zh' : 'en';

  // Detect page type from URL
  const isNews = window.location.pathname.includes('news');
  const isCases = window.location.pathname.includes('cases');

  if (!isNews && !isCases) return;

  // Load marked.js for markdown rendering
  if (typeof marked === 'undefined') {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/marked@12.0.0/marked.min.js';
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  const basePath = getBasePath();
  const containerId = isNews ? 'news-list' : 'cases-list';
  const manifestPath = isNews ? 'content/news/manifest.json' : 'content/cases/manifest.json';
  const contentFolder = isNews ? 'news' : 'cases';

  try {
    const res = await fetch(`${basePath}/${manifestPath}`);
    if (!res.ok) throw new Error('Manifest not found');
    const items = await res.json();

    // Filter by language
    let filtered = items.filter(item => {
      if (lang === 'en' && item.language === 'zh') return false;
      if (lang === 'zh' && item.language === 'en') return false;
      return true;
    });

    // Load bodies
    const enriched = await Promise.all(filtered.map(async item => {
      try {
        const mdRes = await fetch(`${basePath}/content/${contentFolder}/${item.file}`);
        if (mdRes.ok) {
          const md = await mdRes.text();
          const m = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
          if (m) item.body = m[2];
        }
      } catch (e) {}
      return item;
    }));

    // Render cards based on page type
    const container = document.getElementById(containerId);
    if (!container) return;

    if (isNews) {
      // News: featured (first 3) + list (rest)
      const featured = enriched.slice(0, 3);
      const list = enriched.slice(3);
      let html = '<div class="grid lg:grid-cols-3 gap-6 mb-12">';
      html += featured.map(item => renderNewsCard(item, isZh)).join('');
      html += '</div>';
      if (list.length) {
        html += '<div class="space-y-6">';
        html += list.map(item => renderNewsListItem(item, isZh)).join('');
        html += '</div>';
      }
      container.innerHTML = html;
    } else if (isCases) {
      // Cases: featured (first 3) + detail (rest)
      const featured = enriched.slice(0, 3);
      const detail = enriched.slice(3);
      let html = '<div class="grid md:grid-cols-3 gap-6">';
      html += featured.map(item => renderCaseCard(item, isZh)).join('');
      html += '</div>';
      if (detail.length) {
        html += '<div class="mt-12 space-y-12">';
        html += detail.map(item => renderCaseDetail(item, isZh)).join('');
        html += '</div>';
      }
      container.innerHTML = html;
    }
  } catch (e) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = `<div class="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 text-sm">
        ⚠ Content from CMS not loaded: ${escapeHtml(e.message)}.<br>
        <span class="font-mono text-xs">Serving via HTTP? Then /content/${contentFolder}/manifest.json must be reachable.</span>
      </div>`;
    }
  }
});

function renderNewsCard(item, isZh) {
  const cat = isZh ? '文章' : 'Article';
  return `
    <article class="bg-white border border-gray-200 hover:border-orange-500 transition group">
      <div class="aspect-[16/9] overflow-hidden">
        <img src="../assets/images/${item.image?.split('/').pop() || 'img-1.png'}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
      </div>
      <div class="p-6">
        <div class="flex items-center gap-2 mb-3 font-mono text-xs">
          <span class="bg-orange-100 text-orange-700 px-2 py-1">${escapeHtml(item.category || cat)}</span>
          <span class="text-gray-400">${escapeHtml(formatDate(item.date))}</span>
        </div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">${escapeHtml(item.title)}</h3>
        <p class="text-sm text-gray-600 mb-3">${escapeHtml(item.excerpt || '')}</p>
        <a href="#" class="text-orange-600 font-semibold text-sm hover:underline">${isZh ? '阅读全文 →' : 'Read more →'}</a>
      </div>
    </article>`;
}

function renderNewsListItem(item, isZh) {
  return `
    <article class="bg-white border border-gray-200 hover:border-orange-500 transition p-6 grid md:grid-cols-4 gap-6">
      <div class="font-mono text-xs text-gray-500">
        <div class="text-orange-600 text-2xl font-bold">${escapeHtml((formatDate(item.date) || '').split('-')[2] || '')}</div>
        <div class="mt-1">${escapeHtml((formatDate(item.date) || '').slice(0, 7))}</div>
      </div>
      <div class="md:col-span-3">
        <div class="flex items-center gap-2 mb-2 font-mono text-xs">
          <span class="bg-orange-100 text-orange-700 px-2 py-1">${escapeHtml(item.category || '')}</span>
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">${escapeHtml(item.title)}</h3>
        <p class="text-sm text-gray-600 mb-3">${escapeHtml(item.excerpt || '')}</p>
        <a href="#" class="text-orange-600 font-semibold text-sm hover:underline">${isZh ? '阅读全文 →' : 'Read more →'}</a>
      </div>
    </article>`;
}

function renderCaseCard(item, isZh) {
  return `
    <a href="#" class="group bg-white overflow-hidden border border-gray-200 hover:border-orange-500 transition block">
      <div class="aspect-[4/3] overflow-hidden">
        <img src="../assets/images/${item.image?.split('/').pop() || 'img-1.png'}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
      </div>
      <div class="p-5">
        <div class="flex items-center justify-between mb-2">
          <span class="font-mono text-xs text-orange-600">${escapeHtml(item.case_id || '')} · ${escapeHtml(item.country || '')}</span>
          <span class="font-mono text-xs text-gray-400">${escapeHtml(item.date || '')}</span>
        </div>
        <h3 class="font-bold text-slate-900">${escapeHtml(item.title)}</h3>
        <p class="text-sm text-gray-500 mt-2">${escapeHtml(item.summary || '')}</p>
      </div>
    </a>`;
}

function renderCaseDetail(item, isZh) {
  return `
    <article class="grid lg:grid-cols-12 gap-8 pb-12 border-b border-gray-200">
      <div class="lg:col-span-5">
        <img src="../assets/images/${item.image?.split('/').pop() || 'img-1.png'}" alt="${escapeHtml(item.title)}" class="w-full aspect-[4/3] object-cover">
      </div>
      <div class="lg:col-span-7">
        <div class="flex items-center gap-3 mb-3 font-mono text-xs">
          <span class="bg-orange-100 text-orange-700 px-2 py-1">${escapeHtml(item.sector || '')}</span>
          <span class="text-gray-400">${escapeHtml(item.case_id || '')} · ${escapeHtml(item.country || '')} · ${escapeHtml(item.date || '')}</span>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 mb-3">${escapeHtml(item.title)}</h3>
        <p class="text-gray-600 mb-4">${escapeHtml(item.summary || '')}</p>
        ${item.highlights?.length ? `<div class="text-sm text-gray-600 mb-4"><strong>${isZh ? '项目亮点' : 'Highlights'}:</strong> ${item.highlights.map(h => escapeHtml(h)).join(' · ')}</div>` : ''}
        <a href="#" class="text-orange-600 font-semibold text-sm hover:underline">${isZh ? '查看完整案例 →' : 'View full case →'}</a>
      </div>
    </article>`;
}