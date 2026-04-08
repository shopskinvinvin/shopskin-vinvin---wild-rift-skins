/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { 
  Menu, 
  Flame, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  MessageCircle, 
  QrCode, 
  Copy, 
  X,
  Zap,
  LayoutGrid,
  CreditCard,
  Users,
  ExternalLink,
  Facebook
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type TabType = "SKIN" | "WILLPASS" | "VẬT PHẨM";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("SKIN");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("SKINS");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Optional: add a toast notification here
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
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-[#ffb77f] selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-[#ffb77f] fill-[#ffb77f]" />
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#ffb77f]">
            SHOPSKINVINVIN
          </span>
        </div>
        <button className="p-2 text-[#ffb77f]">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden px-6">
          {/* Grid Background */}
          <div className="absolute inset-0 z-0 opacity-20" 
               style={{ 
                 backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, 
                 backgroundSize: '40px 40px' 
               }}>
          </div>
          
          {/* Character Image Placeholder (High Noon Style) */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <img 
              src="https://picsum.photos/seed/highnoon/800/1200" 
              alt="Background" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
              SHOPSKIN <br />
              <span className="text-[#ffb77f]">VINVIN</span>
            </h1>
            <p className="text-xs font-medium text-white/60 uppercase tracking-[0.3em]">
              SHOP MÌNH BÁN SKIN TỐC CHIẾN GIÁ RẺ
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffb77f]/10 border border-[#ffb77f]/30">
                <CheckCircle2 className="w-4 h-4 text-[#ffb77f]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffb77f]">AN TOÀN 100%</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffb77f]/10 border border-[#ffb77f]/30">
                <ShieldCheck className="w-4 h-4 text-[#ffb77f]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffb77f]">KHÔNG KHOÁ NICK</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Action Button */}
        <div className="px-6 -mt-8 relative z-20">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#1f1f21] border border-[#ffb77f]/30 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-2xl group"
          >
            CÁCH MUA
            <HelpCircle className="w-5 h-5 text-[#ffb77f] group-hover:rotate-12 transition-transform" />
          </motion.button>
        </div>

        {/* Tabs Section */}
        <section id="pricing-section" className="mt-12 scroll-mt-20">
          <div className="flex border-b border-white/10 px-6 overflow-x-auto scrollbar-hide">
            {(["SKIN", "WILLPASS", "VẬT PHẨM"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-none px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                  activeTab === tab ? "text-[#ffb77f]" : "text-white/40"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ffb77f]" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="p-6 min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeTab === "WILLPASS" && (
                <motion.div 
                  key="willpass"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <div className="bg-[#1f1f21] p-5 rounded-2xl border-2 border-[#ffb77f] shadow-[0_0_20px_rgba(255,183,127,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#ffb77f] text-black px-3 py-1 rounded-bl-lg text-[10px] font-black uppercase tracking-widest">
                      PREMIUM
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#ffb77f]/10 flex items-center justify-center text-[#ffb77f]">
                        <Zap className="w-6 h-6 fill-[#ffb77f]" />
                      </div>
                      <h3 className="font-bold text-lg">Willpass Hảo Hạng Nhỏ/Lớn</h3>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-2xl font-black text-[#ffb77f]">85K/135K</span>
                    </div>
                  </div>

                  <div className="bg-[#1f1f21] p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg">Willpass Thường Nhỏ/Lớn</h3>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-2xl font-black text-white/60">60K/90K</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "SKIN" && (
                <motion.div 
                  key="skin"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <div className="bg-[#1f1f21] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                    <span className="font-bold">Skin 1325wc</span>
                    <div>
                      <span className="text-white/30 text-xs line-through mr-2">270K</span>
                      <span className="text-[#ffb77f] font-black">175K</span>
                    </div>
                  </div>
                  <div className="bg-[#1f1f21] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                    <span className="font-bold">Skin 990wc</span>
                    <div>
                      <span className="text-white/30 text-xs line-through mr-2">200K</span>
                      <span className="text-[#ffb77f] font-black">135K</span>
                    </div>
                  </div>
                  <div className="bg-[#1f1f21] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                    <span className="font-bold">Skin 725wc</span>
                    <div>
                      <span className="text-white/30 text-xs line-through mr-2">170K</span>
                      <span className="text-[#ffb77f] font-black">110K</span>
                    </div>
                  </div>
                  <div className="bg-[#1f1f21] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                    <span className="font-bold">Skin 525wc</span>
                    <div>
                      <span className="text-white/30 text-xs line-through mr-2">120K</span>
                      <span className="text-[#ffb77f] font-black">85K</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "VẬT PHẨM" && (
                <motion.div 
                  key="items"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-[#1f1f21] p-4 rounded-xl border border-white/5 text-center space-y-2">
                    <div className="text-xs text-white/40 uppercase font-bold">50 Chìa hextech</div>
                    <div className="text-[#ffb77f] font-black text-xl">125K</div>
                  </div>
                  <div className="bg-[#1f1f21] p-4 rounded-xl border border-white/5 text-center space-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#ffb77f] text-black px-2 py-0.5 text-[8px] font-black uppercase tracking-tighter rounded-bl-lg">
                      Bán chạy
                    </div>
                    <div className="text-xs text-white/40 uppercase font-bold">100 Chìa hextech</div>
                    <div className="text-[#ffb77f] font-black text-xl">220K</div>
                  </div>
                  <div className="bg-[#1f1f21] p-4 rounded-xl border border-white/5 text-center space-y-2">
                    <div className="text-xs text-white/40 uppercase font-bold">200 Chìa hextech</div>
                    <div className="text-[#ffb77f] font-black text-xl">420K</div>
                  </div>
                  <div className="bg-[#ffb77f]/10 p-4 rounded-xl border-2 border-[#ffb77f] text-center space-y-2 shadow-[0_0_15px_rgba(255,183,127,0.2)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#ffb77f] text-black px-2 py-0.5 text-[8px] font-black uppercase tracking-tighter rounded-bl-lg">
                      Tiết kiệm
                    </div>
                    <div className="text-xs text-[#ffb77f] uppercase font-black">500 Chìa hextech</div>
                    <div className="text-[#ffb77f] font-black text-xl">999K</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Support Section */}
        <section id="support-section" className="px-6 py-12 space-y-6 scroll-mt-20">
          <h2 className="text-2xl font-black uppercase tracking-tight text-center">HỖ TRỢ TRỰC TUYẾN</h2>
          <div className="grid grid-cols-1 gap-4">
            <motion.a 
              whileTap={{ scale: 0.98 }}
              href="http://zalo.me/84795496390" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#0068ff] text-white py-4 rounded-xl font-bold"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Liên hệ Zalo
            </motion.a>
            <motion.a 
              whileTap={{ scale: 0.98 }}
              href="https://www.facebook.com/share/1Cj2fLX1N1/?mibextid=wwXIfr" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#e87d00] text-white py-4 rounded-xl font-bold"
            >
              <Facebook className="w-5 h-5 fill-white" />
              Facebook
            </motion.a>
          </div>
        </section>

        {/* Community Section */}
        <section id="community-section" className="mx-6 p-8 bg-[#1f1f21] rounded-3xl flex flex-col items-center text-center space-y-6 shadow-2xl border border-white/5 scroll-mt-20">
          <h2 className="text-3xl font-black uppercase leading-none">NHÓM GẦN 1K THÀNH VIÊN</h2>
          <p className="text-sm text-white/60">
            Nhận thông báo sớm nhất về các đợt giảm giá skin và giveaway.
          </p>
          <div className="w-48 h-48 bg-white p-2 rounded-2xl relative group overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/d/1Cj2fLX1N1" 
              alt="Zalo QR Code" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback if the direct link doesn't work in this specific environment
                (e.target as HTMLImageElement).src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://zalo.me/g/ncqsna410";
              }}
            />
            <div className="absolute inset-0 border-[6px] border-[#ffb77f]/20 pointer-events-none rounded-2xl"></div>
          </div>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://zalo.me/g/ncqsna410", "_blank")}
            className="w-full bg-[#ffb77f] text-black font-black py-4 rounded-xl uppercase tracking-widest shadow-lg shadow-[#ffb77f]/20"
          >
            QUÉT ĐỂ THAM GIA
          </motion.button>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 flex flex-col items-center text-center gap-6 opacity-40">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#ffb77f] fill-[#ffb77f]" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#ffb77f]">
              SHOPSKINVINVIN
            </span>
          </div>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#ffb77f]">Privacy Policy</a>
            <a href="#" className="hover:text-[#ffb77f]">Terms of Service</a>
            <a href="#" className="hover:text-[#ffb77f]">Support</a>
          </div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em]">
            © 2024 SHOPSKINVINVIN.
          </p>
        </footer>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-[#0a0a0c]/90 backdrop-blur-xl border-t border-white/5 px-4 flex items-center justify-around z-50">
        <button 
          onClick={() => scrollTo("pricing-section", "SKINS", "SKIN")}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            activeNav === "SKINS" ? "text-[#ffb77f] drop-shadow-[0_0_8px_rgba(255,183,127,0.8)]" : "text-white/40"
          }`}
        >
          <LayoutGrid className="w-6 h-6" />
          <span className="text-[10px] font-black uppercase">SKINS</span>
        </button>
        <button 
          onClick={() => scrollTo("support-section", "LIÊN HỆ")}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            activeNav === "LIÊN HỆ" ? "text-[#ffb77f] drop-shadow-[0_0_8px_rgba(255,183,127,0.8)]" : "text-white/40"
          }`}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-[10px] font-black uppercase">LIÊN HỆ</span>
        </button>
        <button 
          onClick={() => scrollTo("community-section", "NHÓM")}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            activeNav === "NHÓM" ? "text-[#ffb77f] drop-shadow-[0_0_8px_rgba(255,183,127,0.8)]" : "text-white/40"
          }`}
        >
          <Users className="w-6 h-6" />
          <span className="text-[10px] font-black uppercase">NHÓM</span>
        </button>
      </nav>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#1f1f21] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-xl font-black text-[#ffb77f] uppercase tracking-tight">HƯỚNG DẪN MUA SKIN</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 text-white/40">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                <div className="bg-white/5 p-4 rounded-2xl border border-[#ffb77f]/20">
                  <p className="text-sm font-medium leading-relaxed">
                    Để mua skin bạn phải kết bạn các nick bán skin bên shop đủ 14 ngày.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ffb77f]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HelpCircle className="w-3 h-3 text-[#ffb77f]" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#ffb77f]">Tại sao phải chờ 14 ngày?</p>
                      <p className="text-xs text-white/60">Vì để gửi được skin qua nick khác cần là bạn bè 14 ngày trong game.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#ffb77f]/10 rounded-xl border border-[#ffb77f]/30 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#ffb77f] fill-[#ffb77f]" />
                    <p className="text-xs font-bold uppercase tracking-wider">Chỉ cần kết bạn 1 lần, về sau không cần chờ đợi nữa</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black uppercase tracking-widest">List Acc Bán Skin</h4>
                    <span className="text-[10px] font-black bg-[#ffb77f]/10 text-[#ffb77f] px-2 py-0.5 rounded uppercase">Kết bạn từ 5-10 acc</span>
                  </div>
                  <div className="space-y-2">
                    {Array.from({ length: 10 }, (_, i) => `skinvin${21 + i}#999`).map((acc) => (
                      <div key={acc} className="flex items-center justify-between bg-black/40 p-3 rounded-xl border border-white/5">
                        <code className="text-sm font-mono text-white/60">{acc}</code>
                        <button 
                          onClick={() => copyToClipboard(acc)}
                          className="p-2 text-[#ffb77f] hover:bg-[#ffb77f]/10 rounded-lg transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-white/5 bg-white/5 flex gap-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-[#ffb77f] text-black py-4 rounded-xl font-bold uppercase tracking-widest text-xs"
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
