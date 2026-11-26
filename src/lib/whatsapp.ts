export type Lead = {
  name: string;
  company: string;
  whatsapp: string;
  service: string;
};

/** Formata o telefone enquanto o usuário digita: (93) 99999-9999 */
export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length > 6) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  if (digits.length > 2) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length > 0) return `(${digits}`;
  return '';
}

/** Retorna a mensagem de erro do formulário, ou null se estiver tudo certo. */
export function validateLead(lead: Lead): string | null {
  if (!lead.name.trim()) return 'Informe seu nome.';
  if (!lead.company.trim()) return 'Informe o nome da empresa.';
  if (lead.whatsapp.replace(/\D/g, '').length < 10) return 'Informe um WhatsApp com DDD.';
  if (!lead.service) return 'Escolha o serviço de interesse.';
  return null;
}

export function buildWhatsappUrl(targetNumber: string, lead: Lead): string {
  const message = [
    'Olá! Vim pelo site da Quantum e quero um orçamento.',
    '',
    `Nome: ${lead.name.trim()}`,
    `Empresa: ${lead.company.trim()}`,
    `WhatsApp: ${lead.whatsapp.trim()}`,
    `Serviço: ${lead.service}`,
  ].join('\n');
  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}
