export interface Post {
  id: string;
  slug: string;
  title: string;
  standfirst: string | null;
  kicker: string | null;
  body_html: string;
  hero_image_url: string | null;
  read_time_min: number | null;
  published_at: string | null;
  tags?: string[];
}

export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

const ROUTER_BODY = `
<p>The Wi-Fi dropped at 9:47. It dropped again the next night at 9:47. By the third night I was standing in the hallway at 9:46 watching the little green LED like it owed me money, and sure enough — 9:47, a blink, and the house went quiet in the particular way a house goes quiet when six people's streams all buffer at once.</p>
<p>The obvious move is to call the ISP and let a very patient person named Brenda read a script at you. The interesting move is to figure out why a consumer-grade router decides, on a schedule, that it's had enough for the evening. The interesting move is almost always more expensive than it looks.</p>
<h2>What I actually wanted to know</h2>
<p>I didn't want to break into anything. I wanted to read. There's a distinction that's easy to lose in this corner of the internet — the difference between <em>poking</em> and <em>reading</em>. Poking asks "does this break when I push?" Reading asks "what does the author think is happening here?"</p>
<p>Firmware is, in that sense, a pretty good short story. It's written under pressure, by a team that is almost certainly understaffed, for a device that was almost certainly priced lower than it should have been. You can feel those constraints in the code. You can tell which engineer lost which argument.</p>
<blockquote>Every embedded system is a record of a compromise. You're not reversing software so much as reconstructing the meeting where it was born.</blockquote>
<h2>The first hour</h2>
<p>The vendor publishes firmware images on a support page that has clearly not been redesigned since <code>border-radius: 0</code> was a statement. I pulled the most recent one, ran <code>binwalk</code>, and got the standard SquashFS + a little uImage kernel blob. Nothing exotic.</p>
<pre><code>$ binwalk -e router-fw-1.4.07.bin
DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             uImage header, header size: 64 bytes...
64            0x40            LZMA compressed data
1048640       0x100040        Squashfs filesystem, little endian, version 4.0</code></pre>
<p>Everything in <code>/etc/init.d</code> was unremarkable in the way a well-behaved router ought to be. Everything in <code>/usr/sbin</code> was also unremarkable, except for a binary called <code>dhelper</code> that had no man page, no README, and no presence in the admin UI. Binaries with no friends are always interesting.</p>
<h3>a brief aside on curiosity</h3>
<p>Somewhere in here, hour two, I caught myself wondering whether I should be doing this. Not legally — it's my router, I pay the electric bill it runs on — but ethically, in the smaller sense. Did I still just want to fix the Wi-Fi? Or had the Wi-Fi become an excuse to spend a Friday night reading someone else's homework?</p>
<p>I decided I didn't care, which is a bad answer but an honest one.</p>
<h2>What the router thinks it's doing at 9:47</h2>
<p><code>dhelper</code>, once I got a shell and attached a debugger, turned out to be a perfectly reasonable little program with one unreasonable behavior: every night, at a time defined in a config file I could neither read nor edit from the web UI, it tore down and rebuilt every interface on the device. "For calibration." No, really — that was the string in the binary. <code>"recalibrating radio"</code>.</p>
<p>Radios don't need nightly recalibration. Radios need to be left alone. What this almost certainly was, I think, is the ghost of a thermal-drift workaround from an earlier chipset that got left in when the codebase was ported. Someone, four years ago, fixed a bug. Someone, three years ago, forgot what the fix was for. Now every household running this firmware has a nightly moment of silence at 9:47 p.m. in its honor.</p>
<hr />
<p>I did not patch the firmware. I <em>could</em> have — the bits are right there, the checksum is a CRC32, the whole thing would take maybe an hour. But every time I've modified a router I've regretted it within two months, usually on a Sunday, usually while someone else is trying to watch something. So I moved the offending device onto a schedule where its nightly sulk lands at 4 a.m. instead, and went to bed.</p>
<p>The Wi-Fi dropped at 4 a.m. the next night, exactly on cue. I didn't notice. That, it turns out, is what I actually wanted.</p>
`.trim();

const POSTS: Post[] = [
  {
    id: 'post-1',
    slug: 'reading-my-own-routers-firmware',
    title: "The afternoon I spent reading my own router's firmware",
    standfirst:
      'It started because the Wi-Fi kept dropping at 9:47 p.m. every single night. It ended four hours later with a shell, an undocumented debug interface, and a small moral crisis about whether any of this counts as "just curious."',
    kicker: 'Essay · from the lab bench',
    body_html: ROUTER_BODY,
    hero_image_url: null,
    read_time_min: 12,
    published_at: '2026-04-14T00:00:00Z',
    tags: ['firmware', 'cybersecurity', 'reverse-engineering'],
  },
  {
    id: 'post-2',
    slug: 'repainting-the-same-ultramarines',
    title: 'Why I keep repainting the same squad of Ultramarines',
    standfirst:
      "Six strippings in, the plastic's gone a little soft. I think I'm using them as a diary — the layers don't lie about what kind of year I was having.",
    kicker: 'Notebook · tabletop',
    body_html: '<p>Full post coming soon.</p>',
    hero_image_url: null,
    read_time_min: 7,
    published_at: '2026-04-02T00:00:00Z',
    tags: ['tabletop', 'hobby', 'painting'],
  },
  {
    id: 'post-3',
    slug: 'what-owning-a-mustang-teaches-you',
    title: 'What owning a Mustang actually teaches you',
    standfirst:
      "Everyone has opinions about Mustangs. Most of them have never owned one. Here's what it's like when it's your daily and your project car at the same time.",
    kicker: 'Essay · garage notes',
    body_html: '<p>Full post coming soon.</p>',
    hero_image_url: null,
    read_time_min: 9,
    published_at: '2026-03-21T00:00:00Z',
    tags: ['cars', 'garage', 'mustang'],
  },
  {
    id: 'post-4',
    slug: 'wrong-jordans-on-purpose',
    title: 'I bought the wrong Jordans on purpose',
    standfirst:
      'A short essay on the "Shadow" 1 Mid — why the collectors hate it, why I wear mine into the ground, and what that says about taste as a performance.',
    kicker: 'Short · style',
    body_html: '<p>Full post coming soon.</p>',
    hero_image_url: null,
    read_time_min: 5,
    published_at: '2026-03-08T00:00:00Z',
    tags: ['style', 'sneakers', 'culture'],
  },
  {
    id: 'post-5',
    slug: 'reading-a-ctf-writeup-like-a-short-story',
    title: "Reading a CTF writeup like it's a short story",
    standfirst:
      "The best writeups aren't walkthroughs; they're detective fiction. Here's how I started treating them like Chandler and what it did to my own notes.",
    kicker: 'Essay · craft',
    body_html: '<p>Full post coming soon.</p>',
    hero_image_url: null,
    read_time_min: 14,
    published_at: '2026-02-19T00:00:00Z',
    tags: ['ctf', 'writing', 'cybersecurity'],
  },
  {
    id: 'post-6',
    slug: 'in-praise-of-just-driving',
    title: 'In praise of just driving',
    standfirst:
      "Sometimes you don't need a project. You just need to go somewhere. Notes on what happens when you stop thinking about the car and start enjoying it.",
    kicker: 'Short · garage notes',
    body_html: '<p>Full post coming soon.</p>',
    hero_image_url: null,
    read_time_min: 6,
    published_at: '2026-01-30T00:00:00Z',
    tags: ['cars', 'garage', 'essay'],
  },
];

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z]+;/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function buildPostBody(html: string): { html: string; toc: TocEntry[] } {
  const toc: TocEntry[] = [];
  const used = new Set<string>();
  const out = html.replace(
    /<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi,
    (_match, levelStr, attrs, inner) => {
      const level = Number(levelStr) as 2 | 3;
      const plain = String(inner).replace(/<[^>]+>/g, '').trim();
      let id = slugifyHeading(plain);
      if (!id) id = `section-${toc.length + 1}`;
      let unique = id;
      let n = 2;
      while (used.has(unique)) unique = `${id}-${n++}`;
      used.add(unique);
      toc.push({ id: unique, text: plain, level });
      return `<h${level} id="${unique}"${attrs ?? ''}>${inner}</h${level}>`;
    },
  );
  return { html: out, toc };
}

export function getPostExcerpt(html: string, maxLen = 220): string {
  const firstP = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  if (!firstP) return '';
  const text = firstP[1].replace(/<[^>]+>/g, '').trim();
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

export function listPublishedPosts(opts?: { limit?: number }): Post[] {
  return opts?.limit ? POSTS.slice(0, opts.limit) : POSTS;
}

export function getPostBySlug(slug: string): Post | null {
  return POSTS.find((p) => p.slug === slug) ?? null;
}

export function formatPublishedDate(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
