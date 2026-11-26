import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '@/data/content';
import { Button } from './ui/button';
import { Logo } from './Logo';

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#topo" className="text-lg" onClick={close}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-paper/80 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-paper">
              {item.label}
            </a>
          ))}
          <Button asChild>
            <a href="#contato">Pedir orçamento</a>
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-paper md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" className="border-t border-line bg-ink px-4 pb-6 md:hidden" aria-label="Principal">
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close} className="block py-4 text-lg text-paper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-4 w-full">
            <a href="#contato" onClick={close}>
              Pedir orçamento
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
