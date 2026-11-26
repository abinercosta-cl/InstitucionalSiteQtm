import { company } from '@/data/content';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo className="text-base" />
          <p className="mt-1">Marketing e software · {company.city}</p>
        </div>
        <p>© {new Date().getFullYear()} {company.name}</p>
      </div>
    </footer>
  );
}
