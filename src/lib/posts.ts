export interface Post {
  id: string;
  slug: string;
  title: string;
  standfirst: string | null;
  kicker: string | null;
  body_html: string;
  hero_image_url: string | null;
  thumb_image_url?: string | null;
  read_time_min: number | null;
  published_at: string | null;
  tags?: string[];
}

export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

const AWS_BODY = `
<p>I've been using AWS for about two years now. I first got exposed to it in a cloud computing class I took back when I was majoring in cybersecurity in college.</p>
<p>At first, I thought the whole idea behind cloud computing was kind of dumb. Like, why would I pay for a service that lives in "the cloud" when the cloud is really just someone else's server sitting in a data center? In this case, that someone else is Amazon.</p>
<p>It also did not make a ton of sense to me because I already had my own on-premises "server" at home. Obviously, it was not on the same level as AWS in terms of compute power, scalability, availability, or anything like that, but for what I needed, it worked fine.</p>
<p>It was basically a Ryzen 7 3700X build with 64 GB of RAM, a bunch of M.2 SSDs and HDDs, and Proxmox installed on it. So, in my mind, I had basically built a PC, installed a hypervisor, and boom, I had my own server.</p>
<p>Was it anywhere near what AWS offers? No. Not even close.</p>
<p>But for me at the time, it got the job done.</p>

<h2>The Classic AWS Billing Lesson</h2>
<p>After a while, I started messing around with AWS more. I used the free tier, played around with some services, and eventually paid for a few things here and there.</p>
<p>Then I learned one of the classic AWS lessons: billing can sneak up on you.</p>
<p>This was something I had been warned about a lot, especially when we were doing labs in class. But after that class ended, I stopped using AWS for a couple of months.</p>
<p>The problem was that my AWS account was tied to my school email, and I barely checked that email unless I had to message a professor or handle something school-related. So, while I was ignoring that inbox, AWS was apparently sending me billing emails.</p>
<p>At first, it was small stuff. Like, 12 cents. Then maybe a dollar the next month. Then another small charge after that. You get the idea.</p>
<p>Eventually, my AWS account was basically shut down because of the unpaid balance.</p>
<p>At the time, I remember thinking, "Why would I even pay this? I'm probably never going to use AWS again."</p>
<p>And then, of course, a couple of months later, I needed to use AWS again.</p>
<p>So I ended up paying what I owed, going through support, and eventually making a new AWS account with my personal email instead. That whole situation was annoying, but to be fair, it was also kind of on me. I should have been checking the email tied to the account.</p>
<p>But honestly, that is not even my main problem with AWS.</p>

<h2>My Real Problem with AWS</h2>
<p>My real problem with AWS is the naming.</p>
<p>AWS has some of the weirdest, most overcomplicated names for its services. Sometimes the names make sense once you understand what the service does, but when you are new, they can feel way more confusing than they need to be.</p>
<p>Take EC2, for example.</p>
<p>I understand why it is called Elastic Compute Cloud. Technically, the name makes sense. But when someone is first learning AWS, why not just call it something closer to what it actually feels like? Like a virtual machine service.</p>
<p>Because that is how most people are going to understand it at first.</p>
<p>To be fair, AWS does get some names right. IAM is a good example. Identity and Access Management makes sense. That name actually tells you what the service does. Beautiful. Amazing. No complaints there.</p>
<p>But then you have stuff like S3 and EBS.</p>
<p>Yes, I know S3 stands for Simple Storage Service. Yes, I know EBS stands for Elastic Block Store. But from the perspective of someone learning AWS, those names still feel kind of abstract.</p>
<p>Why not just call them something more obvious? Object storage. Block storage. Something like that.</p>
<p>It feels like AWS had to create its own naming system for everything, even when regular names already existed.</p>

<h2>Why That Gets Annoying</h2>
<p>I already know some people would argue that these services are not exactly the same as traditional infrastructure concepts. And honestly, that is fair.</p>
<p>S3 is not just "storage" in the same way a random hard drive is storage. EC2 is not just a regular virtual machine with no extra context. AWS services have their own features, integrations, and behaviors that make them different.</p>
<p>I get that.</p>
<p>But when you are new to AWS, the naming makes the learning curve feel worse than it needs to be. You are not just learning cloud concepts. You are also learning AWS's specific language for those concepts.</p>
<p>And sometimes that language feels ridiculous.</p>
<p>For example, RAM is RAM. We all call it RAM. But I swear, if AWS had the chance to rename RAM, they would call it something like AWS RCHA, which stands for "RAM Compute High Availability" or some nonsense like that.</p>
<p>Obviously, I am joking, but that is the vibe some of these service names give off.</p>
<p>It is like they looked at a normal infrastructure concept and said, "How can we make this sound more confusing?"</p>

<h2>I Know AWS Is Not Really Made for Me</h2>
<p>Another thing I understand is that AWS is not exactly built for power users, home labbers, or random people who just want to mess around with a few cloud services.</p>
<p>AWS is built for enterprise customers. It is built for large companies, developers, engineers, DevOps teams, and businesses that need serious cloud infrastructure.</p>
<p>I get that.</p>
<p>But even then, I feel like the naming could still be better.</p>
<p>I am sure there are IT people, engineers, software developers, and DevOps teams at enterprise companies who have looked at certain AWS service names and thought, "Why is it called that?"</p>
<p>Because in a lot of other areas of tech, the names are more consistent.</p>
<p>For example, there are a bunch of companies that make PC parts. ASUS, MSI, Gigabyte, and others all make graphics cards. But at the end of the day, we still call them GPUs.</p>
<p>Intel and AMD both make processors, but we still call them CPUs.</p>
<p>There are different models, brands, architectures, and features, but the general name still stays the same. That makes it easier for people to understand what they are dealing with.</p>
<p>With AWS, it sometimes feels like every service needs its own branded name, even when a simpler name would probably make more sense.</p>
`.trim();

const AVATAR_BODY = `
<p>There's something strange about revisiting a childhood show as an adult. Sometimes it hits you in ways you never expected.</p>
<p>Recently, I watched the leaked version of the new <em>Avatar</em> movie. Yeah, I know. I couldn't wait.</p>
<p>And honestly, this is not my usual kind of blog post. Normally I'm writing about cybersecurity, tech, or random IT projects I'm messing around with at 2 AM. But this time, I wanted to write about something more personal.</p>
<p>I grew up watching <em>Avatar: The Last Airbender</em>. Aang, Katara, Toph, Zuko, Sokka. That entire world was a huge part of my childhood. Later on, I got into <em>Korra</em> too, and every time new episodes aired, I was there watching.</p>
<p>I loved everything about it. The bending, the fights, the animation, the world-building. Even the filler episodes somehow felt special back then.</p>

<h2>Rewatching It as an Adult</h2>
<p>As a kid, I think I mostly loved it because it looked cool. Fire bending, air bending, giant fights, all of that. But when I got older, around 20 or 21, I rewatched the entire series again, both <em>The Last Airbender</em> and <em>Korra</em>.</p>
<p>And somehow, I loved it even more.</p>
<p>When you rewatch it as an adult, you start understanding the deeper parts of the story. The war, the loss, the pressure the characters carried, the trauma, the responsibility. It stopped feeling like "just a cartoon" and started feeling like something way more emotional.</p>
<p>Even the Fire Nation felt completely different to me watching it older. As a kid, they were just the bad guys. As an adult, the entire thing felt way darker and more serious than I originally realized.</p>

<h2>The Leaked Movie</h2>
<p>A few nights ago, one of my friends sent me the leaked movie.</p>
<p>At first, I barely watched it. I clicked through a couple minutes and immediately noticed how insanely good the animation looked. Honestly, it almost felt more like a Japanese anime at some points, which I loved because I've always been into anime too.</p>
<p>Then a couple days later, I decided to actually sit down and watch the whole thing.</p>
<p>And the moment I saw Aang and the rest of the characters again, something hit me emotionally in a way I genuinely wasn't expecting.</p>
<p>I started tearing up almost immediately.</p>
<p>Not full-on sobbing or anything dramatic. But one of those moments where your chest tightens up and suddenly emotions start coming out of nowhere.</p>
<p>And honestly, I couldn't even explain why at first.</p>

<h2>What Avatar Actually Represents to Me</h2>
<p>But the more I thought about it, the more I realized it probably had less to do with the movie itself and more to do with what <em>Avatar</em> represents to me.</p>
<p>I didn't grow up in the best environment emotionally. I grew up with immigrant parents, and in my household, emotions were not really something you openly talked about. Especially as a guy.</p>
<p>If I was sad, angry, anxious, or depressed, it usually got brushed aside.</p>
<p>Mental health wasn't really understood in my house. I remember hearing things like, "That's just shaitan putting thoughts in your head," instead of actual emotional support.</p>
<p>For anyone unfamiliar, shaitan in Islam is essentially the devil, someone who influences negative thoughts or behavior.</p>
<p>So as a kid, hearing that constantly made it hard to even open up about how I felt. You start believing your emotions are something you're supposed to suppress or fight against instead of understand.</p>
<p>And because of that, I spent years bottling everything up.</p>
<p>Looking back now, I can honestly say I was probably depressed as a teenager. But at 12 or 13 years old, you don't really have the emotional maturity to fully understand what you're feeling. Especially when nobody around you recognizes it either.</p>

<h2>Growing Up Alongside the Characters</h2>
<p>So, while watching the movie, all those memories came flooding back at once.</p>
<p>Not just memories of the show itself, but memories of who I was when I first watched it.</p>
<p>I was around 12 or 13 years old when I first watched <em>Avatar</em>. Now I'm 25, maybe 26 depending on when this gets posted.</p>
<p>And somehow, seeing those characters older now affected me way more than I expected because it felt like I grew up alongside them.</p>
<p>Back then, they were kids.</p>
<p>Now they're adults.</p>
<p>And so am I.</p>
<p>That realization hit me hard.</p>
<p>I think part of why I got emotional was because it forced me to realize how much time has passed, but also how much I've grown as a person.</p>
<p>Despite everything I dealt with growing up, despite feeling emotionally isolated for years, despite all the stuff I kept buried inside, I still made it this far.</p>
<p>And weirdly enough, seeing characters that were such a huge part of my childhood also making it this far made me reflect on my own life too.</p>

<h2>Closing Thoughts</h2>
<p>Maybe my interpretation is completely wrong. Honestly, I still question why the movie affected me the way it did.</p>
<p>But I think certain shows, movies, and stories become attached to specific periods of our lives so deeply that revisiting them feels like revisiting an old version of yourself.</p>
<p>And sometimes that brings emotions back up that you didn't even realize were still there.</p>
<p>Anyway, I know this is very different from the kind of stuff I usually post, but it's something I wanted to share.</p>
<p>Ironically, when I told a couple people about getting emotional over the movie, they joked about it. Basically, the whole "grown man crying over anime" thing.</p>
<p>But honestly, I don't really care anymore.</p>
<p>Sometimes art hits people emotionally.</p>
<p>Sometimes stories remind you of who you used to be.</p>
<p>And sometimes that 12-year-old version of yourself is still somewhere inside you.</p>
`.trim();

const POSTS: Post[] = [
  {
    id: 'post-avatar-growing-up',
    slug: 'growing-up-with-avatar',
    title: 'Growing Up With Avatar',
    standfirst:
      "'Sometimes stories remind you of who you used to be. And sometimes that 12-year-old version of yourself is still somewhere inside you.'",
    kicker: 'Personal · reflection',
    body_html: AVATAR_BODY,
    hero_image_url: null,
    read_time_min: 6,
    published_at: '2026-05-23T00:00:00Z',
    tags: ['personal', 'avatar', 'reflection', 'mental-health'],
  },
  {
    id: 'post-aws-naming',
    slug: 'my-problem-with-aws',
    title: 'My Problem with AWS',
    standfirst:
      "'Two years in, I've made peace with the bill that snuck up on me. What I still can't get over is the naming.'",
    kicker: 'Essay · cloud',
    body_html: AWS_BODY,
    hero_image_url: null,
    read_time_min: 5,
    published_at: '2026-05-14T00:00:00Z',
    tags: ['aws', 'cloud', 'opinion', 'naming'],
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
      const plain = String(inner)
        .replace(/<[^>]+>/g, '')
        .trim();
      let id = slugifyHeading(plain);
      if (!id) id = `section-${toc.length + 1}`;
      let unique = id;
      let n = 2;
      while (used.has(unique)) unique = `${id}-${n++}`;
      used.add(unique);
      toc.push({ id: unique, text: plain, level });
      const anchor = `<a class="heading-anchor" href="#${unique}" aria-label="Link to ${plain}">#</a>`;
      return `<h${level} id="${unique}"${attrs ?? ''}>${inner}${anchor}</h${level}>`;
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
