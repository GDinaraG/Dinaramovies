import React from 'react';
import { Send, MessageCircle, MessageSquare } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Как записаться</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Telegram */}
          <div className="bg-gradient-to-br from-[#1a2347]/60 to-[#0f1629]/60 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-[#ff6b9d]/30 transition-all duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6b9d]/20 to-[#ff8fab]/10 border border-[#ff6b9d]/30 mb-6">
              <Send size={32} className="text-[#ff6b9d]" />
            </div>
            
            <h3 className="mb-4">Телеграм</h3>
            <p className="text-gray-300 mb-6">
              Быстрый способ связаться и обсудить детали
            </p>
            
            <a 
              href="https://t.me/DinaraEng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#ff8fab] hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              Написать
            </a>
          </div>

          {/* VK */}
          <div className="bg-gradient-to-br from-[#1a2347]/60 to-[#0f1629]/60 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-400/10 border border-blue-500/30 mb-6">
              <MessageCircle size={32} className="text-blue-400" />
            </div>
            
            <h3 className="mb-4">ВКонтакте</h3>
            <p className="text-gray-300 mb-6">
              Пишите в личные сообщения в любое время
            </p>
            
            <a 
              href="https://vk.com/dinaraeng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#4a8cff] to-[#5ca3ff] hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Написать
            </a>
          </div>

          {/* Max Messenger */}
          <div className="bg-gradient-to-br from-[#1a2347]/60 to-[#0f1629]/60 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-400/10 border border-purple-500/30 mb-6">
              <MessageSquare size={32} className="text-purple-400" />
            </div>
            
            <h3 className="mb-4">Макс</h3>
            <p className="text-gray-300 mb-6">
              Напишите сообщение, отвечу на любые вопросы
            </p>
            
            <a
              href="https://max.ru/u/f9LHodD0cOLhbGCH7SAovsVCzNCspvleqRZ9MPJCpqZjgELEYNfkRENbaXw"
              target="_blank"
              rel="noopener noreferrer"             
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Написать
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
