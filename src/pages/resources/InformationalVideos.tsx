import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Play, FileText, X, ChevronDown } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type CardType = 'video' | 'post';

interface BaseCard {
  id: string;
  type: CardType;
  title: string;
  category: string;
  date: string;
}

interface VideoCard extends BaseCard {
  type: 'video';
  facebookUrl: string;
  caption?: string;
}

interface PostCard extends BaseCard {
  type: 'post';
  excerpt: string;
  body: string;
}

type FeedCard = VideoCard | PostCard;

// ─── Content ──────────────────────────────────────────────────────────────────

const CHAR_LIMIT = 200;

const feedItems: FeedCard[] = [
  {
    id: 'v1',
    type: 'video',
    title: 'Medicare 101: What Every Senior Needs to Know',
    category: 'Medicare',
    date: 'June 2026',
    facebookUrl: 'https://www.facebook.com/video/embed?video_id=123456789012345',
    caption: 'A plain-English breakdown of Medicare Parts A, B, C, and D — what they cover, what they cost, and how to enroll without missing a deadline.',
  },
  {
    id: 'p1',
    type: 'post',
    title: '5 Medicare Mistakes That Cost Retirees Thousands',
    category: 'Medicare',
    date: 'June 2026',
    excerpt: 'Missing enrollment windows, picking the wrong plan, and ignoring late-enrollment penalties are just a few of the costly errors retirees make every year.',
    body: `Missing enrollment windows, picking the wrong plan, and ignoring late-enrollment penalties are just a few of the costly errors retirees make every year.\n\n**1. Missing your Initial Enrollment Period**\nYou have a 7-month window around your 65th birthday to sign up for Medicare Part B. Miss it and you could pay a 10% penalty for every 12 months you were eligible but didn't enroll — for life.\n\n**2. Assuming employer coverage protects you**\nSmall-employer coverage (fewer than 20 employees) does not automatically qualify as creditable coverage. You must still enroll in Medicare on time.\n\n**3. Choosing a plan based only on premium**\nA $0-premium Medicare Advantage plan can still cost you thousands through copays, coinsurance, and network restrictions. Always compare out-of-pocket maximums.\n\n**4. Not shopping during Open Enrollment**\nOctober 15 – December 7 each year is your chance to change plans. Many people never review their coverage and end up overpaying.\n\n**5. Ignoring drug formulary changes**\nPart D plans can change which drugs they cover each year. Review your formulary every fall during Open Enrollment to make sure your prescriptions are still covered at the same tier.\n\nCall us at 816-248-1100 — we review your options at no cost to you.`,
  },
  {
    id: 'v2',
    type: 'video',
    title: 'When Should You Claim Social Security?',
    category: 'Retirement',
    date: 'May 2026',
    facebookUrl: 'https://www.facebook.com/video/embed?video_id=223456789012345',
    caption: 'Filing at 62 vs. 67 vs. 70 — the difference can be hundreds of thousands of dollars over a lifetime. Watch before you decide.',
  },
  {
    id: 'p2',
    type: 'post',
    title: 'Medicare Advantage vs. Medigap: Which Is Right for You?',
    category: 'Medicare',
    date: 'May 2026',
    excerpt: "Both fill gaps in Original Medicare, but they work very differently. Here's how to think through the choice for your situation.",
    body: `Both Medicare Advantage and Medigap (Medicare Supplement) fill gaps in Original Medicare, but they work very differently. Here's how to think through the choice.\n\n**Medicare Advantage (Part C)**\nBundled coverage through a private insurer. Often includes dental, vision, and Part D drug coverage. Lower or $0 premiums, but you're working within a network and may face higher out-of-pocket costs when you need care.\n\n**Medigap (Medicare Supplement)**\nWraps around Original Medicare and covers most or all of your cost-sharing (copays, coinsurance, deductibles depending on the plan). Higher monthly premium, but much more predictable costs and no network restrictions.\n\n**The core question: predictability vs. flexibility**\nIf you see specialists frequently or travel often, Medigap's nationwide coverage and predictable costs often win. If you're generally healthy and want low premiums, Advantage can make sense — just know what you're giving up.\n\n**Underwriting matters**\nIn most states, if you want to switch from Advantage to Medigap later, you may have to pass medical underwriting. Getting it right the first time matters.\n\nWe help clients compare their specific options side by side — give us a call.`,
  },
  {
    id: 'v3',
    type: 'video',
    title: 'Building a Retirement Paycheck That Lasts',
    category: 'Retirement',
    date: 'April 2026',
    facebookUrl: 'https://www.facebook.com/video/embed?video_id=323456789012345',
  },
  {
    id: 'p3',
    type: 'post',
    title: 'Understanding Long-Term Care: What It Costs and How to Plan',
    category: 'Retirement',
    date: 'April 2026',
    excerpt: "The average nursing home costs over $90,000 a year. Most retirees have no plan for it. Here's what you need to know.",
    body: `The average nursing home in Missouri costs over $90,000 a year. Assisted living runs $50,000+. And Medicare barely covers any of it.\n\n**What Medicare does (and doesn't) cover**\nMedicare covers up to 100 days of skilled nursing facility care after a qualifying hospital stay — but only skilled care. Custodial care (help with bathing, dressing, eating) is not covered at all.\n\n**What Medicaid covers**\nMedicaid does cover long-term care, but only after you've spent down most of your assets. Planning ahead is essential if you want to protect what you've built.\n\n**Your planning options**\n- Traditional long-term care insurance\n- Hybrid life/LTC policies (death benefit + LTC rider)\n- Asset-based LTC strategies\n- Medicaid planning with proper legal and financial guidance\n\n**The right time to plan is now**\nLTC insurance is underwritten based on your health. The older you are when you apply, the more you'll pay — or the more likely you are to be declined. Most people should look at this between ages 55–65.\n\nDon't leave this to chance. Schedule a no-cost consultation and let's build a plan together.`,
  },
  {
    id: 'v4',
    type: 'video',
    title: 'Avoiding Medicare Enrollment Penalties',
    category: 'Medicare',
    date: 'March 2026',
    facebookUrl: 'https://www.facebook.com/video/embed?video_id=423456789012345',
    caption: "Late enrollment penalties are permanent and follow you for the rest of your Medicare coverage. Don't let this happen to you.",
  },
  {
    id: 'p4',
    type: 'post',
    title: 'How Annuities Fit Into a Retirement Income Plan',
    category: 'Retirement',
    date: 'March 2026',
    excerpt: "Annuities get a bad reputation — sometimes deserved, sometimes not. Here's an honest look at when they make sense.",
    body: `Annuities get a bad reputation — sometimes deserved, sometimes not. Let's cut through the noise.\n\n**What an annuity actually is**\nAt its core, an annuity is a contract with an insurance company: you give them a lump sum, they guarantee you income — either immediately or at some point in the future.\n\n**Types worth knowing**\n- **Fixed annuities**: Guaranteed interest rate, no market risk. Simple and predictable.\n- **Fixed-indexed annuities (FIAs)**: Returns tied to a market index (like the S&P 500) but with a floor of 0% — you can't lose principal to market losses.\n- **Income annuities**: Designed to produce a guaranteed paycheck for life, similar to a pension.\n\n**When they make sense**\nAnnuities are best suited for the portion of your retirement income you cannot afford to lose — your "sleep at night" money. They're not investment vehicles; they're insurance against outliving your money.\n\n**When to be skeptical**\nVariable annuities with high fees inside tax-deferred accounts (like IRAs) often don't make sense — you're paying for tax-deferral you already have. Always understand the fees, surrender periods, and exit options before you sign.\n\nWe only recommend products that genuinely fit your situation. Let's talk.`,
  },
];

const categories = ['All', 'Medicare', 'Retirement'];

// ─── Facebook Video Embed ──────────────────────────────────────────────────────

const FacebookEmbed = ({ url }: { url: string }) => {
  const encodedUrl = encodeURIComponent(url);
  return (
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
      <iframe
        src={`https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=auto&autoplay=false`}
        className="absolute inset-0 w-full h-full"
        style={{ border: 'none', overflow: 'hidden' }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        title="Facebook video"
      />
    </div>
  );
};

// ─── Modal ────────────────────────────────────────────────────────────────────

const Modal = ({ card, onClose }: { card: FeedCard; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(3px)' }}
      onClick={handleBackdrop}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="px-6 pt-6 pb-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">{card.category}</span>
            <span className="text-xs text-gray-400">{card.date}</span>
          </div>
          <h2 className="text-xl font-bold text-blue-700 mt-1 pr-8">{card.title}</h2>
        </div>

        <div className="px-6 py-5">
          {card.type === 'video' ? (
            <>
              <FacebookEmbed url={card.facebookUrl} />
              {card.caption && (
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{card.caption}</p>
              )}
            </>
          ) : (
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              {card.body.split('\n\n').map((para, i) => {
                const parts = para.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <p key={`para-${i}-${para.slice(0, 15)}`}>
                    {parts.map((part, j) =>
                      part.startsWith('**') && part.endsWith('**')
                        ? <strong key={`bold-${i}-${j}`}>{part.slice(2, -2)}</strong>
                        : part
                    )}
                  </p>
                );
              })}
            </div>
          )}
        </div>

        <div className="px-6 pb-6">
          <a
            href="/contact/consultation"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── Unified Card ─────────────────────────────────────────────────────────────

const FeedCardItem = ({ card, onOpen }: { card: FeedCard; onOpen: () => void }) => {
  const isVideo = card.type === 'video';
  const hasCaption = isVideo && !!card.caption;
  const captionTooLong = hasCaption && card.caption!.length > CHAR_LIMIT;
  const isPost = card.type === 'post';
  const excerptTooLong = isPost && card.excerpt.length > CHAR_LIMIT;
  const showViewMore = isVideo || captionTooLong || excerptTooLong;

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      {isVideo ? (
        <div className="w-full bg-gray-950">
          <FacebookEmbed url={card.facebookUrl} />
        </div>
      ) : (
        <div className="h-2 bg-blue-600" />
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">{card.category}</span>
          {isVideo
            ? <span className="ml-auto flex items-center gap-1 text-xs text-gray-400"><Play className="w-3 h-3" /> Video</span>
            : <span className="ml-auto flex items-center gap-1 text-xs text-gray-400"><FileText className="w-3 h-3" /> Article</span>
          }
        </div>

        <h3 className="text-base font-bold text-blue-700 mb-1 leading-snug">{card.title}</h3>
        <p className="text-xs text-gray-400 mb-3">{card.date}</p>

        {isVideo && hasCaption && (
          <p className="text-sm text-gray-600 leading-relaxed flex-1">
            {captionTooLong ? `${card.caption!.slice(0, CHAR_LIMIT).trimEnd()}…` : card.caption}
          </p>
        )}

        {isPost && (
          <p className="text-sm text-gray-600 leading-relaxed flex-1">
            {excerptTooLong ? `${card.excerpt.slice(0, CHAR_LIMIT).trimEnd()}…` : card.excerpt}
          </p>
        )}

        {showViewMore && (
          <button
            onClick={onOpen}
            className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-red-500 transition self-start"
          >
            {isVideo ? 'Watch full video' : 'Read more'} <ChevronDown className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const InformationalVideos = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openCard, setOpenCard] = useState<FeedCard | null>(null);

  const filtered = activeCategory === 'All'
    ? feedItems
    : feedItems.filter((c) => c.category === activeCategory);

  return (
    <PageLayout>
      <HeroSection
        title="INFORMATIONAL VIDEOS & POSTS"
        subtitle="Real guidance — straight from us to you. Watch our latest videos and read our most recent posts on Medicare and retirement planning."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
          <div className="flex gap-3 mb-10 justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-16">No items in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((card) => (
                <FeedCardItem
                  key={card.id}
                  card={card}
                  onOpen={() => setOpenCard(card)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {openCard && (
        <Modal card={openCard} onClose={() => setOpenCard(null)} />
      )}
    </PageLayout>
  );
};

export default InformationalVideos;
