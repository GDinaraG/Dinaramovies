import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-gray-400 text-sm">
          © 2025{' '}
          <a 
            href="https://dinara-english.ru/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white underline decoration-white/50 hover:decoration-white transition-all"
          >
            Динара
          </a>
          {' '}•{' '}
          <a 
            href="https://vk.com/dinaraenglish" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white underline decoration-white/50 hover:decoration-white transition-all"
          >
            английский через фильмы и сериалы
          </a>
        </div>
      </div>
    </footer>
  );
}