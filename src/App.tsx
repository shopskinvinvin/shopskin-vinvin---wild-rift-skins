import { useState } from "react";
import { 
  Menu, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  MessageSquare,
  QrCode, 
  Copy, 
  X, 
  Zap, 
  LayoutGrid, 
  CreditCard, 
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type TabType = "SKIN" | "WILDPASS" | "VẬT PHẨM";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("SKIN");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("SKINS");
  const [copiedAcc, setCopiedAcc] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAcc(text);
    setTimeout(() => {
      setCopiedAcc(null);
    }, 2000);
  };

  const scrollTo = (id: string, navId: string, tab?: TabType) => {
    setActiveNav(navId);
    if (tab) setActiveTab(tab);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e182e] text-[#e2e8f0] font-sans selection:bg-[#f7c768] selection:text-[#0e182e] relative overflow-x-hidden pb-28">
      {/* Background Decorative Circles & Glows matching user screenshot */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-left big subtle circle */}
        <div className="w-60 h-60 rounded-full bg-[#172648]/60 absolute top-10 -left-20 blur-xs" />
        {/* Mid-right circle */}
        <div className="w-48 h-48 rounded-full bg-[#162444]/50 absolute top-72 -right-16 blur-xs" />
        {/* Bottom-left circle */}
        <div className="w-64 h-64 rounded-full bg-[#152342]/50 absolute bottom-32 -left-24 blur-sm" />
        {/* Background translucent dots */}
        <div className="w-4 h-4 rounded-full bg-[#1f2f54]/70 absolute top-36 right-12" />
        <div className="w-6 h-6 rounded-full bg-[#1f2f54]/50 absolute top-[440px] right-8 border border-[#2b3c66]/40" />
      </div>

      {/* Floating Sparkles Stars */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-50">
        <svg className="absolute top-44 left-10 w-5 h-5 text-[#4e6492]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg className="absolute top-96 right-10 w-6 h-6 text-[#4e6492]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* Floating Header Card at Top */}
      <div className="fixed top-0 left-0 right-0 z-50 p-3 max-w-lg mx-auto">
        <header className="bg-[#1a284c] border border-[#2b3d68] rounded-2xl px-4 py-3 flex items-center justify-between shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            {/* Gem Logo Container */}
            <div className="w-10 h-10 rounded-2xl bg-[#f7c768] p-0.5 shadow-md flex items-center justify-center flex-shrink-0">
              <div className="w-full h-full bg-[#1a284c] rounded-[13px] flex items-center justify-center">
                <div className="w-5 h-5 bg-gradient-to-br from-[#45dfb1] to-[#209f7a] rotate-45 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#1a284c] rounded-xs" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-[900] tracking-wider uppercase text-[#fff7d6] leading-tight">
                SHOPSKINVINVIN
              </span>
              <span className="text-[10px] font-[800] tracking-[0.2em] uppercase text-[#7d97c7]">
                WILD RIFT STORE
              </span>
            </div>
          </div>

          <button 
            onClick={() => scrollTo("support-section", "LIÊN HỆ")}
            className="p-2 text-[#f7c768] hover:opacity-80 transition-opacity"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 stroke-[3]" />
          </button>
        </header>
      </div>

      {/* Main Container */}
      <main className="pt-24 px-4 max-w-lg mx-auto relative z-10 space-y-5">
        
        {/* Hero Section */}
        <section className="pt-4 pb-1 text-center flex flex-col items-center">
          {/* Decorative Sparkle Line */}
          <div className="flex items-center gap-3 opacity-80 mb-3">
            <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-[#516899]" />
            <div className="w-2 h-2 bg-[#f7c768] rotate-45" />
            <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-[#516899]" />
          </div>

          {/* Main Title */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-1"
          >
            <h1 className="text-4xl md:text-5xl font-[900] uppercase tracking-tight text-[#fff7d6] leading-[1.08] drop-shadow-[0_2px_8px_rgba(255,247,214,0.1)]">
              SHOPSKIN <br />
              <span className="text-[#fff7d6]">VINVIN</span>
            </h1>
            <p className="text-xs md:text-sm font-[800] text-[#8da5d3] uppercase tracking-wider pt-2">
              SHOP MÌNH BÁN SKIN TỐC CHIẾN GIÁ RẺ
            </p>
          </motion.div>

          {/* Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mt-5"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#143236] border-2 border-[#24695a] text-[#45dfb1] shadow-sm">
              <CheckCircle2 className="w-4 h-4 fill-[#45dfb1] text-[#143236]" />
              <span className="text-xs font-[900] uppercase tracking-wider">AN TOÀN 100%</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3a2d19] border-2 border-[#6c5229] text-[#f7c768] shadow-sm">
              <ShieldCheck className="w-4 h-4 fill-[#f7c768] text-[#3a2d19]" />
              <span className="text-xs font-[900] uppercase tracking-wider">KHÔNG KHOÁ NICK</span>
            </div>
          </motion.div>
        </section>

        {/* Action Button: CÁCH MUA */}
        <section>
          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#1a284c] hover:bg-[#20315c] border border-[#2b3d68] text-[#fff7d6] font-[900] text-xl py-4 rounded-[22px] flex items-center justify-center gap-2.5 shadow-xl transition-all group"
          >
            <span>CÁCH MUA</span>
            <div className="w-6 h-6 rounded-full bg-[#f7c768] text-[#0e182e] flex items-center justify-center font-[900] text-sm group-hover:rotate-12 transition-transform">
              ?
            </div>
          </motion.button>
        </section>

        {/* Pricing & Tabs Section */}
        <section id="pricing-section" className="pt-1 scroll-mt-24 space-y-4">
          {/* Header BẢNG GIÁ */}
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-[900] uppercase tracking-widest text-[#fff7d6] whitespace-nowrap">
              BẢNG GIÁ
            </h2>
            <div className="h-[1px] bg-[#26375c] flex-1" />
          </div>

          {/* Tabs Container */}
          <div className="bg-[#14203b] p-1.5 rounded-[22px] border border-[#243559] flex items-center justify-between gap-1 shadow-inner">
            {(["SKIN", "WILDPASS", "VẬT PHẨM"] as TabType[]).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 px-3 text-xs md:text-sm font-[900] uppercase tracking-wider rounded-2xl transition-all relative ${
                    isActive 
                      ? "bg-[#1a284c] text-[#fff7d6] border-2 border-[#f7c768] shadow-[0_0_12px_rgba(247,199,104,0.2)]" 
                      : "text-[#6b85b8] hover:text-[#8ea8d9]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Tab Contents */}
          <div className="min-h-[260px] pt-1">
            <AnimatePresence mode="wait">
              {activeTab === "SKIN" && (
                <motion.div 
                  key="skin"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-3"
                >
                  <div className="bg-[#1a284c] hover:bg-[#20315c] border border-[#2b3d68] px-5 py-4.5 rounded-[22px] flex items-center justify-between transition-all shadow-md">
                    <span className="text-base md:text-lg font-[900] text-[#fff7d6]">Skin 1325wc</span>
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#6882b5] text-xs md:text-sm font-[800] line-through">275K</span>
                      <span className="text-[#f7c768] font-[900] text-lg md:text-xl">189K</span>
                    </div>
                  </div>

                  <div className="bg-[#1a284c] hover:bg-[#20315c] border border-[#2b3d68] px-5 py-4.5 rounded-[22px] flex items-center justify-between transition-all shadow-md">
                    <span className="text-base md:text-lg font-[900] text-[#fff7d6]">Skin 990wc</span>
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#6882b5] text-xs md:text-sm font-[800] line-through">200K</span>
                      <span className="text-[#f7c768] font-[900] text-lg md:text-xl">149K</span>
                    </div>
                  </div>

                  <div className="bg-[#1a284c] hover:bg-[#20315c] border border-[#2b3d68] px-5 py-4.5 rounded-[22px] flex items-center justify-between transition-all shadow-md">
                    <span className="text-base md:text-lg font-[900] text-[#fff7d6]">Skin 725wc</span>
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#6882b5] text-xs md:text-sm font-[800] line-through">170K</span>
                      <span className="text-[#f7c768] font-[900] text-lg md:text-xl">115K</span>
                    </div>
                  </div>

                  <div className="bg-[#1a284c] hover:bg-[#20315c] border border-[#2b3d68] px-5 py-4.5 rounded-[22px] flex items-center justify-between transition-all shadow-md">
                    <span className="text-base md:text-lg font-[900] text-[#fff7d6]">Skin 525wc</span>
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#6882b5] text-xs md:text-sm font-[800] line-through">120K</span>
                      <span className="text-[#f7c768] font-[900] text-lg md:text-xl">90K</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "WILDPASS" && (
                <motion.div 
                  key="wildpass"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-3"
                >
                  <div className="bg-[#1a284c] p-5 rounded-[22px] border-2 border-[#f7c768] shadow-[0_0_18px_rgba(247,199,104,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#f7c768] text-[#0e182e] px-3 py-1 rounded-bl-xl text-[10px] font-[900] uppercase tracking-widest">
                      PREMIUM
                    </div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#f7c768]/10 border border-[#f7c768]/30 flex items-center justify-center text-[#f7c768]">
                        <Zap className="w-6 h-6 fill-[#f7c768]" />
                      </div>
                      <div>
                        <h3 className="font-[900] text-base text-[#fff7d6]">Wildpass Hảo Hạng</h3>
                        <p className="text-xs text-[#8da5d3] font-[800]">Nhỏ / Lớn / Combo</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xl md:text-2xl font-[900] text-[#f7c768]">95K / 149K / 199K</span>
                    </div>
                  </div>

                  <div className="bg-[#1a284c] p-5 rounded-[22px] border border-[#2b3d68]">
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#14203b] flex items-center justify-center text-[#8da5d3]">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-[900] text-base text-[#fff7d6]">Wildpass Thường</h3>
                        <p className="text-xs text-[#8da5d3] font-[800]">Nhỏ / Lớn</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xl md:text-2xl font-[900] text-[#8da5d3]">75K / 90K</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "VẬT PHẨM" && (
                <motion.div 
                  key="items"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="grid grid-cols-2 gap-3"
                >
                  <div className="bg-[#1a284c] border border-[#2b3d68] p-4.5 rounded-[22px] text-center space-y-1.5 flex flex-col justify-center items-center">
                    <div className="text-xs text-[#8da5d3] font-[900] uppercase tracking-wider">50 Chìa hextech</div>
                    <div className="text-[#f7c768] font-[900] text-2xl">129K</div>
                  </div>

                  <div className="bg-[#1a284c] border border-[#2b3d68] p-4.5 rounded-[22px] text-center space-y-1.5 relative overflow-hidden flex flex-col justify-center items-center">
                    <div className="absolute top-0 right-0 bg-[#45dfb1] text-[#0e182e] px-2 py-0.5 text-[9px] font-[900] uppercase tracking-tighter rounded-bl-lg">
                      Bán chạy
                    </div>
                    <div className="text-xs text-[#8da5d3] font-[900] uppercase tracking-wider">100 Chìa hextech</div>
                    <div className="text-[#f7c768] font-[900] text-2xl">239K</div>
                  </div>

                  <div className="bg-[#1a284c] border border-[#2b3d68] p-4.5 rounded-[22px] text-center space-y-1.5 flex flex-col justify-center items-center">
                    <div className="text-xs text-[#8da5d3] font-[900] uppercase tracking-wider">200 Chìa hextech</div>
                    <div className="text-[#f7c768] font-[900] text-2xl">459K</div>
                  </div>

                  <div className="bg-[#1a284c] border-2 border-[#f7c768] p-4.5 rounded-[22px] text-center space-y-1.5 relative overflow-hidden shadow-[0_0_15px_rgba(247,199,104,0.15)] flex flex-col justify-center items-center">
                    <div className="absolute top-0 right-0 bg-[#f7c768] text-[#0e182e] px-2 py-0.5 text-[9px] font-[900] uppercase tracking-tighter rounded-bl-lg">
                      Tiết kiệm
                    </div>
                    <div className="text-xs text-[#f7c768] font-[900] uppercase tracking-wider">500 Chìa hextech</div>
                    <div className="text-[#f7c768] font-[900] text-2xl">1099K</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Support Section */}
        <section id="support-section" className="pt-2 scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-[900] uppercase tracking-widest text-[#fff7d6] whitespace-nowrap">
              HỖ TRỢ TRỰC TUYẾN
            </h2>
            <div className="h-[1px] bg-[#26375c] flex-1" />
          </div>

          <div className="flex flex-col gap-3.5">
            <motion.a 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="http://zalo.me/84795496390" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-b from-[#3884f7] to-[#1d57e0] hover:brightness-110 text-white py-4 rounded-[24px] font-[900] text-base md:text-lg tracking-wide uppercase shadow-lg shadow-blue-600/20 transition-all border-t border-white/25"
            >
              <MessageSquare className="w-5 h-5 fill-white text-white" />
              <span>LIÊN HỆ ZALO</span>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.facebook.com/share/1Cj2fLX1N1/?mibextid=wwXIfr" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-b from-[#ce4ece] to-[#a02fa4] hover:brightness-110 text-white py-4 rounded-[24px] font-[900] text-base md:text-lg tracking-wide uppercase shadow-lg shadow-purple-600/20 transition-all border-t border-white/25"
            >
              <MessageCircle className="w-5 h-5 fill-white text-white" />
              <span>MESSENGER</span>
            </motion.a>
          </div>
        </section>

        {/* Community Section */}
        <section id="community-section" className="pt-2 scroll-mt-24">
          <div className="bg-[#1a284c] border border-[#2b3d68] p-6 md:p-8 rounded-[28px] flex flex-col items-center text-center space-y-5 shadow-2xl relative overflow-hidden">
            <div className="space-y-1">
              <h2 className="text-xl md:text-2xl font-[900] uppercase tracking-tight text-[#fff7d6]">
                NHÓM GẦN 1K THÀNH VIÊN
              </h2>
              <p className="text-xs text-[#8da5d3] font-[800]">
                Nhận thông báo sớm nhất về các đợt giảm giá skin và giveaway.
              </p>
            </div>

            <div className="w-44 h-44 bg-white p-2.5 rounded-2xl relative group shadow-xl">
              <img 
                src="https://lh3.googleusercontent.com/d/1Cj2fLX1N1" 
                alt="Zalo QR Code" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://zalo.me/g/ncqsna410";
                }}
              />
              <div className="absolute inset-0 border-2 border-[#f7c768]/40 pointer-events-none rounded-2xl" />
            </div>

            <motion.button 
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open("https://zalo.me/g/ncqsna410", "_blank")}
              className="w-full bg-[#f7c768] hover:bg-[#ffe5a3] text-[#0e182e] font-[900] py-4 rounded-[22px] uppercase tracking-widest text-xs shadow-lg shadow-[#f7c768]/10 transition-colors"
            >
              QUÉT ĐỂ THAM GIA
            </motion.button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 flex flex-col items-center text-center gap-3 text-[#6882b5]">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#f7c768] flex items-center justify-center">
              <div className="w-2 h-2 bg-[#0e182e] rotate-45" />
            </div>
            <span className="text-xs font-[900] tracking-widest uppercase text-[#8da5d3]">
              SHOPSKINVINVIN
            </span>
          </div>
          <p className="text-[10px] font-[800] uppercase tracking-widest opacity-80">
            © 2024 SHOPSKINVINVIN • WILD RIFT SKIN STORE
          </p>
        </footer>
      </main>

      {/* Floating Bottom Navigation matching screenshot */}
      <div className="fixed bottom-3 left-3 right-3 max-w-lg mx-auto z-50">
        <nav className="bg-[#1a284c]/95 backdrop-blur-xl border border-[#2b3d68] rounded-[24px] px-3 py-2.5 flex items-center justify-around shadow-2xl">
          <button 
            onClick={() => scrollTo("pricing-section", "SKINS", "SKIN")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeNav === "SKINS" ? "text-[#f7c768]" : "text-[#6781b4] hover:text-[#8ea8d9]"
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
            <span className="text-[10px] font-[900] uppercase tracking-wider">SKINS</span>
          </button>

          <button 
            onClick={() => scrollTo("pricing-section", "PRICING")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeNav === "PRICING" ? "text-[#f7c768]" : "text-[#6781b4] hover:text-[#8ea8d9]"
            }`}
          >
            <CreditCard className="w-5 h-5" />
            <span className="text-[10px] font-[900] uppercase tracking-wider">PRICING</span>
          </button>

          <button 
            onClick={() => scrollTo("support-section", "CONTACT")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeNav === "CONTACT" ? "text-[#f7c768]" : "text-[#6781b4] hover:text-[#8ea8d9]"
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] font-[900] uppercase tracking-wider">CONTACT</span>
          </button>

          <button 
            onClick={() => scrollTo("community-section", "JOIN")}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeNav === "JOIN" ? "text-[#f7c768]" : "text-[#6781b4] hover:text-[#8ea8d9]"
            }`}
          >
            <QrCode className="w-5 h-5" />
            <span className="text-[10px] font-[900] uppercase tracking-wider">JOIN</span>
          </button>
        </nav>
      </div>

      {/* Modal Hướng Dẫn Mua */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#070b14]/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-[#1a284c] border border-[#2b3d68] rounded-[28px] overflow-hidden shadow-2xl z-10"
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-[#2b3d68] flex justify-between items-center bg-[#152140]">
                <h3 className="text-lg font-[900] text-[#fff7d6] uppercase tracking-wide">
                  HƯỚNG DẪN MUA SKIN
                </h3>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="p-1.5 text-[#6781b4] hover:text-white rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-5 space-y-4 max-h-[65vh] overflow-y-auto">
                <div className="bg-[#14203b] p-4 rounded-2xl border border-[#f7c768]/20">
                  <p className="text-xs md:text-sm font-[800] leading-relaxed text-[#e2e8f0]">
                    Để mua skin bạn phải kết bạn các nick bán skin bên shop đủ <span className="text-[#f7c768] font-[900]">14 ngày</span>.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-[#14203b] p-3.5 rounded-2xl border border-[#2b3d68]">
                    <div className="w-7 h-7 rounded-full bg-[#f7c768]/10 border border-[#f7c768]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="text-[#f7c768] font-[900] text-xs">?</div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs md:text-sm font-[900] text-[#f7c768]">Tại sao phải chờ 14 ngày?</p>
                      <p className="text-xs text-[#8da5d3] font-[800]">Vì quy định Riot: gửi skin cho nick khác cần là bạn bè 14 ngày trong game Tốc Chiến.</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#f7c768]/10 rounded-2xl border border-[#f7c768]/30 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#f7c768] fill-[#f7c768] flex-shrink-0" />
                    <p className="text-xs font-[900] uppercase tracking-wider text-[#f7c768]">
                      Chỉ cần kết bạn 1 lần, về sau mua skin không cần chờ nữa!
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-[900] uppercase tracking-widest text-[#fff7d6]">
                      Danh sách Acc Bán Skin
                    </h4>
                    <span className="text-[10px] font-[900] bg-[#45dfb1]/10 text-[#45dfb1] px-2 py-0.5 rounded-full uppercase border border-[#45dfb1]/30">
                      Kết bạn từ 5-10 acc
                    </span>
                  </div>

                  <div className="space-y-2">
                    {Array.from({ length: 10 }, (_, i) => `skinv${i + 11}#999`).map((acc) => (
                      <div key={acc} className="flex items-center justify-between bg-[#14203b] px-4 py-3 rounded-xl border border-[#2b3d68]">
                        <code className="text-xs font-mono text-[#f7c768] font-[900]">{acc}</code>
                        <button 
                          onClick={() => copyToClipboard(acc)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-[900] text-[#f7c768] bg-[#1a284c] hover:bg-[#233563] rounded-lg transition-colors border border-[#2c406b]"
                        >
                          {copiedAcc === acc ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#45dfb1]" />
                              <span className="text-[#45dfb1]">Đã chép</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Sao chép</span>
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-[#2b3d68] bg-[#152140]">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-[#f7c768] hover:bg-[#ffe5a3] text-[#0e182e] py-3.5 rounded-2xl font-[900] uppercase tracking-widest text-xs shadow-lg transition-colors"
                >
                  ĐÃ HIỂU
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
