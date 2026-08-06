const BRL = v => v.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
const fmtNum = (v, d=2) => v.toLocaleString('pt-BR', { minimumFractionDigits:d, maximumFractionDigits:d });
