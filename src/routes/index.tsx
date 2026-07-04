import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-ai.jpg";
import goldenRuleImg from "@/assets/golden-rule.jpg";
import dailyLifeImg from "@/assets/daily-life.jpg";
import humanAiImg from "@/assets/human-ai.jpg";
import stepsImg from "@/assets/steps.jpg";
import mistakesImg from "@/assets/mistakes.jpg";

export const Route = createFileRoute("/")({
  component: Lesson,
});

type Section = {
  n: string;
  title: string;
  body: React.ReactNode;
  image?: string;
  alt?: string;
};

const sections: Section[] = [
  {
    n: "۱",
    title: "اول بفهمیم AI دقیقاً چیست",
    image: heroImg,
    alt: "تصویرسازی از کار کردن انسان با دستیار هوش مصنوعی",
    body: (
      <>
        <p>
          هوش مصنوعی مثل یک دستیار خیلی سریع است، نه یک موجود جادویی که از آسمان
          حقیقت نازل می‌کند. مدل‌هایی مثل ChatGPT می‌توانند متن بنویسند، توضیح
          بدهند، ایده بدهند، فایل و تصویر را تحلیل کنند، در یادگیری کمک کنند و
          حتی با صدا یا تصویر با شما کار کنند.
        </p>
        <blockquote>
          AI جای فکر کردن شما را نمی‌گیرد؛ کیفیت فکر شما را بالا می‌برد.
        </blockquote>
        <p className="text-muted-foreground">
          اگر سؤال ضعیف بپرسید، جواب ضعیف می‌گیرید. خیلی عادلانه و کمی
          بی‌رحمانه، درست مثل زندگی.
        </p>
      </>
    ),
  },
  {
    n: "۲",
    title: "قانون طلایی استفاده از AI",
    image: goldenRuleImg,
    alt: "کلید طلایی و فرمول قانون طلایی",
    body: (
      <>
        <p>فرمول ساده:</p>
        <div className="rounded-2xl border border-amber-300/40 bg-amber-50 p-6 text-center text-lg font-bold text-amber-900">
          هدف + زمینه + محدودیت + خروجی موردنظر
        </div>
        <p>
          به‌جای اینکه بگویید «به من برنامه بده» — مثل این است که به تاکسی بگویید
          «برو» و بعد ناراحت شوید چرا شما را به فرودگاه برد — بگویید:
        </p>
        <div className="rounded-xl bg-emerald-50 p-4 text-emerald-950 border border-emerald-200">
          «من ۴۰ ساله هستم، در سوئد زندگی می‌کنم، روزی ۳۰ دقیقه وقت دارم،
          می‌خواهم سوئدی تمرین کنم، سطح من B1 است. برای ۷ روز آینده یک برنامه
          ساده بده، هر روز شامل ۳ تمرین کوتاه، با مثال فارسی و سوئدی.»
        </div>
      </>
    ),
  },
  {
    n: "۳",
    title: "AI در زندگی روزمره کجا به درد می‌خورد؟",
    image: dailyLifeImg,
    alt: "کاربردهای روزمره AI",
    body: (
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["📅 برنامه‌ریزی روزانه", "با گفتن زمان، انرژی و اولویت‌ها، AI روزتان را اولویت‌بندی می‌کند."],
          ["✍️ نوشتن و اصلاح متن", "ایمیل، پیام رسمی، پیام به ۱۱۷۷ یا مدرسه — همه را حرفه‌ای‌تر کنید."],
          ["🇸🇪 یادگیری زبان", "به AI نقش معلم SFI بدهید و مکالمه واقعی تمرین کنید."],
          ["📄 خلاصه‌سازی فایل و تصویر", "نامه‌های اداری، PDF، قرارداد و رزومه را ساده کنید."],
          ["⚖️ تصمیم‌گیری بهتر", "دو گزینه را با مزایا/معایب، هزینه، ریسک و نتیجه بلندمدت مقایسه کنید."],
          ["🏥 سلامت و پزشکی", "علائم را مرتب و به سوئدی برای پزشک بفرستید — نه برای تشخیص."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-xl border bg-card p-4">
            <div className="font-bold text-foreground">{title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    n: "۴",
    title: "روش درست پرامپت‌نویسی",
    body: (
      <div className="space-y-3">
        {[
          ["۱. نقش بدهید", "مثل یک معلم سوئدی توضیح بده / مثل یک ویراستار حرفه‌ای اصلاح کن."],
          ["۲. هدف را دقیق بگویید", "می‌خواهم این متن برای پزشک استفاده شود."],
          ["۳. زمینه بدهید", "مخاطب فارسی‌زبان است، سطح A2، مناسب سوئد."],
          ["۴. محدودیت بدهید", "کوتاه، رسمی، بدون کلمات سخت، کمتر از ۱۵۰ کلمه."],
          ["۵. فرمت خروجی را مشخص کنید", "در جدول / لیست مرحله‌ای / اول سوئدی بعد فارسی."],
          ["۶. بخواهید خودش نقد کند", "در پایان بگو کدام بخش هنوز ضعیف است."],
        ].map(([t, d]) => (
          <div key={t} className="flex gap-4 rounded-lg border-r-4 border-teal-500 bg-teal-50/60 p-4">
            <div>
              <div className="font-bold text-teal-900">{t}</div>
              <p className="text-sm text-teal-950/80">{d}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    n: "۵",
    title: "مثال پرامپت ضعیف و قوی",
    body: (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border-2 border-red-200 bg-red-50 p-5">
          <div className="mb-2 text-sm font-bold text-red-800">❌ ضعیف</div>
          <p className="text-red-950">«درباره AI توضیح بده.»</p>
          <p className="mt-3 text-xs text-red-900/70">
            خیلی کلی است. جواب کلی می‌گیرید، بعد همه وانمود می‌کنیم مفید بود.
          </p>
        </div>
        <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-5">
          <div className="mb-2 text-sm font-bold text-emerald-800">✅ قوی</div>
          <p className="text-emerald-950">
            «می‌خواهم برای فارسی‌زبانانی که در سوئد زندگی می‌کنند، یک درس ساده
            درباره استفاده روزمره از AI آماده کنم. سطح مبتدی، مرحله‌به‌مرحله، با
            مثال‌های واقعی، لحن ساده. در پایان ۵ تمرین بده.»
          </p>
        </div>
      </div>
    ),
  },
  {
    n: "۶",
    title: "یک‌بار نپرس، مرحله‌ای بساز",
    image: stepsImg,
    alt: "پله‌های ساخته‌شده از کاغذ",
    body: (
      <ol className="space-y-3">
        {[
          "ایده خام بگیر: «۱۰ ایده بده.»",
          "انتخاب کن: «ایده‌های ۲، ۴ و ۷ را قوی‌تر کن.»",
          "ساختار بساز: «یک درس ۳۰ دقیقه‌ای طراحی کن.»",
          "متن تولید کن: «بخش اول را ساده بنویس.»",
          "نقد کن: «کجای متن مبهم است؟»",
          "نسخه نهایی بگیر: «کوتاه‌تر، روان‌تر و کاربردی‌تر کن.»",
        ].map((step, i) => (
          <li key={i} className="flex gap-4 rounded-xl bg-muted p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              {i + 1}
            </span>
            <span className="pt-1">{step}</span>
          </li>
        ))}
      </ol>
    ),
  },
  {
    n: "۷",
    title: "کاربردهای عملی در یک روز معمولی",
    body: (
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {[
          ["🌅 صبح", "امروز ۵ کار دارم. کمک کن اولویت‌بندی کنم."],
          ["📞 قبل از تماس رسمی", "این پیام را محترمانه و واضح کن."],
          ["📚 هنگام یادگیری", "این مفهوم را با مثال ساده توضیح بده و از من سؤال بپرس."],
          ["🛒 هنگام خرید", "این دو محصول را بر اساس نیاز من مقایسه کن."],
          ["💼 هنگام کار", "این متن را خلاصه کن و کارهای لازم را جدا بنویس."],
          ["🌙 شب", "کارهای امروزم این‌هاست. برای فردا برنامه واقع‌بینانه بچین."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-xl border bg-card p-4 shadow-sm">
            <div className="font-bold">{t}</div>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    n: "۸",
    title: "اشتباهات رایج در استفاده از AI",
    image: mistakesImg,
    alt: "علامت هشدار و علامت سؤال",
    body: (
      <div className="space-y-4">
        {[
          ["اشتباه ۱: سؤال خیلی کلی", "«چی کار کنم موفق بشم؟» → به‌جایش هدف، تجربه و بازه زمانی بدهید."],
          ["اشتباه ۲: اعتماد کامل به جواب", "در قوانین، قیمت، پزشکی، مهاجرت و مالیات حتماً منبع بخواهید و بررسی کنید."],
          ["اشتباه ۳: ندادن زمینه", "«اینو بهتر کن» ضعیف است. مخاطب، لحن و کاربرد را مشخص کنید."],
          ["اشتباه ۴: وارد کردن اطلاعات حساس", "شماره شخصی، بانکی، رمز و مدارک حساس را بی‌دلیل وارد نکنید."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-lg border-r-4 border-red-500 bg-red-50/60 p-4">
            <div className="font-bold text-red-900">{t}</div>
            <p className="mt-1 text-sm text-red-950/80">{d}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    n: "۹",
    title: "یک الگوی آماده برای استفاده روزمره",
    body: (
      <div className="rounded-xl bg-slate-900 p-6 text-slate-100 shadow-lg" dir="rtl">
        <pre className="whitespace-pre-wrap font-mono text-sm leading-7">
{`نقش: تو یک [نقش] هستی.
هدف: من می‌خواهم [هدف].
زمینه: وضعیت من این است: [توضیح کوتاه].
محدودیت‌ها: خروجی باید [کوتاه/رسمی/ساده/سطح B1/کمتر از ۲۰۰ کلمه] باشد.
فرمت: جواب را به شکل [جدول/لیست/مرحله‌ای/دو نسخه] بده.
کیفیت: در پایان اشکالات احتمالی را بگو.`}
        </pre>
      </div>
    ),
  },
  {
    n: "۱۰",
    title: "AI برای تولید محتوا",
    body: (
      <div className="flex flex-wrap gap-2">
        {[
          "ایده و موضوع",
          "ساختار و سناریو",
          "تیتر",
          "کپشن",
          "متن ویدیو",
          "خلاصه درس",
          "تمرین",
          "آزمون",
          "بازنویسی برای سطح‌های مختلف",
          "تبدیل متن بلند به پست کوتاه",
          "تبدیل درس به اسکریپت ویدیو",
        ].map((t) => (
          <span key={t} className="rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-900">
            {t}
          </span>
        ))}
      </div>
    ),
  },
  {
    n: "۱۱",
    title: "AI برای کار و شغل",
    body: (
      <>
        <p>
          برای رزومه، لینکدین و اپلای شغلی خیلی مفید است — به شرطی که اطلاعات
          واقعی بدهید.
        </p>
        <div className="rounded-xl bg-emerald-50 p-4 text-emerald-950 border border-emerald-200">
          «این آگهی شغلی را تحلیل کن. کارفرما دقیقاً دنبال چه مهارت‌هایی است؟
          رزومه من را با آن مقایسه کن و بگو کدام بخش‌ها باید قوی‌تر شود.
          <strong> چیزی جعل نکن.</strong>»
        </div>
        <p className="text-sm text-muted-foreground">
          عبارت «چیزی جعل نکن» مهم است؛ وگرنه AI برای خوشگل کردن، شما را تبدیل
          به مدیر ارشد ناسا می‌کند.
        </p>
      </>
    ),
  },
  {
    n: "۱۲",
    title: "AI برای یادگیری عمیق",
    body: (
      <>
        <p>بهترین روش این است که فقط جواب نخواهید — بخواهید از شما سؤال بپرسد.</p>
        <div className="rounded-xl bg-indigo-50 p-4 text-indigo-950 border border-indigo-200">
          «این موضوع را به من درس بده، اما جواب نهایی را مستقیم نده. اول توضیح
          بده، بعد از من سؤال بپرس، بعد اشتباهاتم را اصلاح کن.»
        </div>
      </>
    ),
  },
  {
    n: "۱۳",
    title: "قانون «انسان + AI»، نه «AI به‌جای انسان»",
    image: humanAiImg,
    alt: "همکاری انسان و ربات",
    body: (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-teal-600 p-6 text-white">
          <div className="mb-2 text-2xl">🤖</div>
          <div className="font-bold">AI برای…</div>
          <p className="mt-2 text-sm text-teal-50">
            سرعت، ساختار، ایده، توضیح و اصلاح.
          </p>
        </div>
        <div className="rounded-xl bg-amber-600 p-6 text-white">
          <div className="mb-2 text-2xl">🧠</div>
          <div className="font-bold">انسان برای…</div>
          <p className="mt-2 text-sm text-amber-50">
            قضاوت، تجربه، اخلاق، تصمیم نهایی و شناخت موقعیت واقعی.
          </p>
        </div>
      </div>
    ),
  },
  {
    n: "۱۴",
    title: "تمرین عملی برای یادگیری",
    body: (
      <ol className="space-y-3">
        {[
          "برنامه روزانه: «امروز این کارها را دارم. بر اساس زمان، انرژی و اهمیت برنامه بده.»",
          "متن رسمی: «این پیام خام را به سوئدی رسمی و طبیعی تبدیل کن.»",
          "یادگیری زبان: «این جمله سوئدی را از نظر گرامر توضیح بده و ۵ جمله مشابه بساز.»",
          "تصمیم‌گیری: «این دو گزینه را با جدول مزایا، معایب، ریسک و پیشنهاد نهایی مقایسه کن.»",
          "نقد گرفتن: «این ایده من را سخت‌گیرانه نقد کن. نقاط ضعف و راه بهتر را بگو.»",
        ].map((t, i) => (
          <li key={i} className="flex gap-4 rounded-xl border bg-card p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white font-bold">
              {i + 1}
            </span>
            <span className="pt-1">{t}</span>
          </li>
        ))}
      </ol>
    ),
  },
  {
    n: "۱۵",
    title: "جمع‌بندی کوتاه",
    body: (
      <ol className="space-y-2 text-lg">
        {[
          "دقیق بگویید چه می‌خواهید.",
          "زمینه بدهید.",
          "فرمت خروجی را مشخص کنید.",
          "جواب اول را نهایی ندانید.",
          "بخواهید نقد کند و بهتر کند.",
          "برای موضوعات حساس، بررسی انسانی و منبع معتبر لازم است.",
          "از AI برای فکر بهتر استفاده کنید، نه برای فرار از فکر کردن.",
        ].map((t, i) => (
          <li key={i} className="flex gap-3">
            <span className="font-bold text-teal-600">{i + 1}.</span>
            <span>{t}</span>
          </li>
        ))}
      </ol>
    ),
  },
];

function Lesson() {
  return (
    <div className="min-h-screen bg-[#fdfaf3] text-slate-900">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-bl from-teal-700 via-teal-800 to-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur">
              درس دیجیتال · ۱۵ بخش
            </div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              چگونه از هوش مصنوعی به‌صورت بهینه در زندگی روزمره استفاده کنیم؟
            </h1>
            <p className="mt-6 text-lg leading-8 text-teal-50/90">
              راهنمای فارسی برای پرامپت‌نویسی درست، تصمیم‌گیری بهتر، یادگیری
              عمیق و کار حرفه‌ای با AI — با مثال‌های واقعی از زندگی روزمره.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#section-1"
                className="rounded-lg bg-amber-400 px-6 py-3 font-bold text-slate-900 shadow-lg transition hover:bg-amber-300"
              >
                شروع درس
              </a>
              <a
                href="#section-15"
                className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                رفتن به جمع‌بندی
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="کار کردن با دستیار هوش مصنوعی"
              width={1536}
              height={1024}
              className="w-full rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </header>

      {/* Sections */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        {sections.map((s, i) => (
          <section
            key={s.n}
            id={`section-${i + 1}`}
            className="scroll-mt-8 py-12 border-b border-slate-200 last:border-0"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-lg font-extrabold text-white shadow-md">
                {s.n}
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                {s.title}
              </h2>
            </div>

            {s.image && (
              <img
                src={s.image}
                alt={s.alt ?? ""}
                loading="lazy"
                className="mb-8 w-full rounded-2xl shadow-lg ring-1 ring-slate-200"
              />
            )}

            <div className="space-y-4 text-lg leading-9 text-slate-800 [&_blockquote]:rounded-xl [&_blockquote]:border-r-4 [&_blockquote]:border-amber-500 [&_blockquote]:bg-amber-50 [&_blockquote]:p-5 [&_blockquote]:font-bold [&_blockquote]:text-amber-900">
              {s.body}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-10 text-center text-slate-300">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm">
            درس دیجیتال — استفاده بهینه از هوش مصنوعی · نسخه فارسی
          </p>
          <p className="mt-2 text-xs text-slate-500" dir="ltr">
            Ai effektivt — Digital lektion
          </p>
        </div>
      </footer>
    </div>
  );
}
