// blog-loader.js
// Charge dynamiquement les articles markdown générés par Netlify CMS

async function fetchBlogPosts() {
  const posts = [];
  try {
    const index = await fetch('content/blogs/index.json').then(r => r.json());
    for (const file of index) {
      const res = await fetch(`content/blogs/${file}`);
      const text = await res.text();
      const post = parseMarkdown(text);
      posts.push(post);
    }
  } catch (e) {
    console.error('Erreur chargement blogs:', e);
  }
  return posts;
}

// Simple parser markdown frontmatter (YAML) + body
function parseMarkdown(md) {
  const match = md.match(/^---([\s\S]+?)---([\s\S]*)$/);
  if (!match) return { body: md };
  const yaml = match[1];
  const body = match[2];
  const data = {};
  yaml.split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx > -1) {
      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      data[key] = value;
    }
  });
  data.body = body.trim();
  return data;
}

window.fetchBlogPosts = fetchBlogPosts;
