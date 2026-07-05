# HONG NGUYEN Co. — Decap CMS Integration Script
# Loads markdown content from /content/ into HTML pages
# Requires marked.js (loaded from CDN by host page)

class HONG_NGUYEN_CMS:
  constructor(config) {
    this.baseUrl = config.baseUrl || '..';
    this.containerId = config.containerId;
    this.manifestPath = config.manifestPath;
    this.language = config.language; // 'en' or 'zh' filter
    this.category = config.category || null;
    this.renderCard = config.renderCard;
    this.renderDetail = config.renderDetail;
    this.detailMode = config.detailMode || false;
  }

  async load() {
    try {
      const manifestRes = await fetch(`${this.baseUrl}/${this.manifestPath}`);
      if (!manifestRes.ok) throw new Error('Manifest not found');
      const items = await manifestRes.json();

      // Filter by language
      let filtered = items.filter(item => {
        if (this.language && item.language && item.language !== this.language) return false;
        if (this.category && item.category !== this.category) return false;
        return true;
      });

      // Fetch body markdown for each
      const enriched = await Promise.all(filtered.map(async (item) => {
        try {
          const mdRes = await fetch(`${this.baseUrl}/content/${this.manifestPath.split('/')[1]}/${item.file}`);
          if (mdRes.ok) {
            const mdText = await mdRes.text();
            const parsed = this.parseFrontmatter(mdText);
            item.body = parsed.body;
          }
        } catch (e) { console.warn('Failed to load', item.file); }
        return item;
      }));

      this.render(enriched);
    } catch (e) {
      console.error('CMS load error:', e);
      const container = document.getElementById(this.containerId);
      if (container) {
        container.innerHTML = `<div class="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 text-sm font-mono">
          ⚠ Content from CMS not loaded: ${e.message}.<br>
          Make sure /content/${this.manifestPath.split('/')[1]}/manifest.json exists, served via HTTP (not file://).
        </div>`;
      }
    }
  }

  parseFrontmatter(text) {
    const match = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    if (!match) return { frontmatter: {}, body: text };
    const frontmatter = {};
    match[1].split('\n').forEach(line => {
      const m = line.match(/^(\w+):\s*(.*)$/);
      if (m) frontmatter[m[1]] = m[2].replace(/^["']|["']$/g, '');
    });
    return { frontmatter, body: match[2] };
  }

  render(items) {
    const container = document.getElementById(this.containerId);
    if (!container) return;
    if (this.detailMode) {
      // Detail mode: show all items stacked
      container.innerHTML = items.map(this.renderDetail).join('');
    } else {
      // Card mode: show as grid/list
      container.innerHTML = items.map(this.renderCard).join('');
    }
  }
}