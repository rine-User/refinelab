"use client";

import { useEffect, useRef, useState } from "react";

/* ─── tiny hook: observe element entering viewport ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── data ─── */
const features = [
  {
    icon: "⚡",
    title: "業務の自動化",
    desc: "繰り返し作業をAIと仕組みで自動化。時間を本質的な仕事に集中させます。",
  },
  {
    icon: "🎯",
    title: "本質思考の設計",
    desc: "「なぜやるか」から問い直し、不要な工程を削ぎ落とした業務フローを設計します。",
  },
  {
    icon: "📈",
    title: "成果を出す仕組み化",
    desc: "頑張りに頼らず、誰でも再現できる成果の出る仕組みを構築します。",
  },
];

const steps = [
  { num: "01", title: "現状ヒアリング", desc: "業務フロー・課題・目標を丁寧にお伺いします。" },
  { num: "02", title: "改善設計", desc: "削るべき無駄と残すべき本質を整理し、最適解を設計します。" },
  { num: "03", title: "実装・導入", desc: "ツール・AIを活用して仕組みを構築・実装します。" },
  { num: "04", title: "定着・伴走", desc: "定着まで継続サポート。成果が出るまで一緒に走ります。" },
];

const faqs = [
  {
    q: "どんな業種・規模に対応していますか？",
    a: "中小企業・個人事業主・フリーランスの方まで幅広くご支援しています。業種は問いません。",
  },
  {
    q: "ITに詳しくなくても大丈夫ですか？",
    a: "はい。ツールの操作から丁寧にサポートします。技術的な知識は不要です。",
  },
  {
    q: "まずどこから相談すれば良いですか？",
    a: "まずは無料講座または無料相談からどうぞ。現状をお聞きした上でご提案します。",
  },
];

/* ─── components ─── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-wider">
          <span className="text-gradient-cyan">Refine</span>
          <span className="text-white">Lab</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#features" className="hover:text-white transition-colors">サービス</a>
          <a href="#flow" className="hover:text-white transition-colors">流れ</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a
            href="#contact"
            className="px-4 py-2 border border-[#00E5FF]/40 text-[#00E5FF] text-sm rounded-full hover:bg-[#00E5FF]/10 transition-all"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00E5FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-700/5 blur-[100px] pointer-events-none" />

      {/* Floating decorative circles */}
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-[#00E5FF]/60 animate-pulse-glow" />
      <div className="absolute top-40 left-16 w-1 h-1 rounded-full bg-[#FFD700]/60 animate-pulse-glow delay-300" />
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 rounded-full bg-[#00E5FF]/40 animate-pulse-glow delay-500" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5 text-[#00E5FF] text-xs tracking-widest uppercase mb-10"
          style={{ animation: "fadeIn 0.6s ease forwards" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          AI × 業務改善コンサルティング
        </div>

        {/* Main catchcopy */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
          style={{ animation: "fadeInUp 0.8s ease forwards" }}
        >
          <span className="text-white">無駄を削り、</span>
          <br />
          <span className="text-shimmer">本質だけを残す。</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg text-white/50 tracking-widest mb-4"
          style={{ animation: "fadeInUp 0.8s 0.2s ease both" }}
        >
          ～ Make it Effi ～
        </p>
        <p
          className="text-lg md:text-xl text-white/70 font-light mb-8"
          style={{ animation: "fadeInUp 0.8s 0.3s ease both" }}
        >
          効率で、仕事はもっと自由になる。
        </p>

        {/* Description */}
        <p
          className="text-sm md:text-base text-white/40 max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ animation: "fadeInUp 0.8s 0.4s ease both" }}
        >
          RefineLabは、業務の改善と効率化を通じて
          <br className="hidden md:block" />
          &ldquo;頑張らなくても成果が出る仕組み&rdquo;を提供します。
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fadeInUp 0.8s 0.55s ease both" }}
        >
          <span className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 text-white/30 font-bold text-sm tracking-wide border border-white/10 cursor-not-allowed">
            <span>▶</span>
            <span>無料講座（近日公開）</span>
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-sm tracking-wide hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <span>お問い合わせ</span>
            <span className="text-xs">→</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-20 flex flex-col items-center gap-2"
          style={{ animation: "fadeIn 1s 1s ease both" }}
        >
          <span className="text-white/20 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const { ref, visible } = useInView();
  return (
    <section id="features" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-20 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="text-[#00E5FF] text-xs tracking-[0.3em] uppercase">Services</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3 text-white">
            私たちが提供する<span className="text-gradient-cyan">3つの価値</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/[0.03] transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 120}ms`,
                transitionDuration: "700ms",
              }}
            >
              <div className="text-4xl mb-6 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, visible } = useInView();
  const stats = [
    { label: "クライアント満足度" },
    { label: "平均作業時間の削減" },
    { label: "支援実績" },
    { label: "初回相談料" },
  ];
  return (
    <section className="py-20 px-6 border-y border-white/5" ref={ref}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 100}ms`,
              transition: "all 0.6s ease",
            }}
          >
            <div className="text-sm font-bold tracking-widest text-white/20 mb-1 border border-white/10 rounded-full px-3 py-1 inline-block">準備中</div>
            <div className="text-xs text-white/40 tracking-wide mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FlowSection() {
  const { ref, visible } = useInView();
  return (
    <section id="flow" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className="text-center mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <span className="text-[#00E5FF] text-xs tracking-[0.3em] uppercase">How it works</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3 text-white">
            導入の<span className="text-gradient-cyan">4ステップ</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00E5FF]/30 via-[#00E5FF]/10 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : `translateX(${i % 2 === 0 ? -30 : 30}px)`,
                  transitionDelay: `${i * 150}ms`,
                  transition: "all 0.7s ease",
                }}
              >
                {/* Number bubble (desktop center) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border-2 border-[#00E5FF]/40 items-center justify-center z-10">
                  <span className="text-[#00E5FF] text-xs font-bold">{s.num}</span>
                </div>

                {/* Card */}
                <div className={`md:w-[45%] ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}>
                  {/* Mobile number */}
                  <div className="flex items-center gap-3 mb-2 md:justify-end">
                    <span className="md:hidden text-[#00E5FF] text-xs font-bold border border-[#00E5FF]/30 px-2 py-0.5 rounded">
                      {s.num}
                    </span>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseSection() {
  const { ref, visible } = useInView();
  return (
    <section id="course" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5FF]/3 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <span className="text-[#00E5FF] text-xs tracking-[0.3em] uppercase">Free Course</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3 mb-6 text-white">
            まずは<span className="text-gradient-cyan">無料講座</span>から
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            業務効率化の基礎から実践まで、動画でわかりやすく解説。
            <br />
            登録不要・完全無料でご視聴いただけます。
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12 text-left">
            {["AIツール活用入門", "業務フロー改善の思考法", "自動化ツール実践"].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#00E5FF]/20 transition-all"
                style={{
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${(i + 1) * 100}ms`,
                  transition: "all 0.7s ease",
                }}
              >
                <div className="text-[#00E5FF] text-xs mb-2">Lesson {i + 1}</div>
                <div className="text-white text-sm font-medium">{item}</div>
              </div>
            ))}
          </div>

          <div className="inline-flex flex-col items-center gap-2">
            <div className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/10 text-white/30 font-bold text-sm tracking-wide cursor-not-allowed border border-white/10">
              <span>▶</span>
              <span>無料講座を見る</span>
            </div>
            <span className="text-xs text-white/25 tracking-widest">— 近日公開予定 —</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const { ref, visible } = useInView();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <span className="text-[#00E5FF] text-xs tracking-[0.3em] uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 text-white">よくある質問</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/8 rounded-xl overflow-hidden hover:border-white/15 transition-colors"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 100}ms`,
                transition: "all 0.6s ease",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                <span
                  className="text-[#00E5FF] text-xl flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0)" }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "200px" : "0" }}
              >
                <p className="px-6 pb-6 text-sm text-white/50 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, visible } = useInView();
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <div
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <span className="text-[#00E5FF] text-xs tracking-[0.3em] uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 text-white">お問い合わせ</h2>
          <p className="text-white/40 text-sm mt-4">まずは気軽にご連絡ください。初回相談は無料です。</p>
        </div>

        <div
          className="p-8 md:p-10 rounded-2xl border border-white/8 bg-white/[0.02]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s 0.2s ease",
          }}
        >
          {sent ? (
            <div className="text-center py-10">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-white font-bold text-lg mb-2">ありがとうございます！</p>
              <p className="text-white/40 text-sm">現在フォームを準備中です。<br />お問い合わせはSNSまたはメールにてご連絡ください。</p>
              <button onClick={() => setSent(false)} className="mt-6 text-xs text-white/30 underline">戻る</button>
            </div>
          ) : (
          <div className="space-y-5">
            <div className="text-xs text-[#00E5FF]/60 bg-[#00E5FF]/5 border border-[#00E5FF]/15 rounded-xl px-4 py-3">
              ⚠️ 現在フォーム機能は準備中です。送信テストはできますが、実際には届きません。
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-2 tracking-wide">お名前</label>
              <input
                type="text"
                placeholder="山田 太郎"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#00E5FF]/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-2 tracking-wide">メールアドレス</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#00E5FF]/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-2 tracking-wide">お問い合わせ内容</label>
              <textarea
                rows={4}
                placeholder="業務効率化についてご相談したいです..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#00E5FF]/40 transition-colors resize-none"
              />
            </div>
            <button
              onClick={() => setSent(true)}
              className="group relative w-full py-4 rounded-xl bg-[#00E5FF] text-black font-bold text-sm tracking-wide overflow-hidden glow-cyan transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              送信する
            </button>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  const { ref, visible } = useInView();
  return (
    <section className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/8 via-purple-900/8 to-[#FFD700]/8 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />

      <div
        className="max-w-3xl mx-auto text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}
      >
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          今すぐ、<span className="text-shimmer">効率化</span>を始めよう。
        </h2>
        <p className="text-white/40 text-sm mb-10">
          無料講座・無料相談から始められます。一歩踏み出すだけで、仕事は変わります。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 text-white/30 font-bold text-sm tracking-wide border border-white/10 cursor-not-allowed">
            <span>▶</span>
            <span>無料講座（近日公開）</span>
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-sm tracking-wide hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <span>お問い合わせ</span>
            <span className="text-xs">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-xl font-bold tracking-wider mb-1">
            <span className="text-gradient-cyan">Refine</span>
            <span className="text-white">Lab</span>
          </div>
          <p className="text-xs text-white/25">無駄を削り、本質だけを残す。</p>
        </div>
        <div className="flex gap-6 text-xs text-white/20">
          <span className="cursor-default">プライバシーポリシー（準備中）</span>
          <span className="cursor-default">特定商取引法（準備中）</span>
          <a href="#contact" className="hover:text-white/60 transition-colors text-white/30">お問い合わせ</a>
        </div>
        <p className="text-xs text-white/20">© 2026 RefineLab. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <FlowSection />
      <CourseSection />
      <FaqSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
