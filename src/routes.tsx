import type { ReactElement } from 'react';
import Home from './pages/Home';
import CalculadoraIMC from './pages/CalculadoraIMC';
import CalculadoraPollock from './pages/CalculadoraPollock';

export type RouteDef = {
  path: string;
  Component: () => ReactElement;
  title: string;
  description: string;
};

export const routes: RouteDef[] = [
  {
    path: '/',
    Component: Home,
    title: 'Software para Nutricionistas | BodyGraph',
    description:
      'Sistema completo para nutricionistas: prescrição dietética, avaliação de composição corporal, interpretação de exames, agenda e portal do paciente. Teste grátis.',
  },
  {
    path: '/calculadora-imc',
    Component: CalculadoraIMC,
    title: 'Calculadora de IMC com classificação por faixa etária | BodyGraph',
    description:
      'Calcule o IMC e veja a classificação da OMS. Ferramenta gratuita para nutricionistas e estudantes, com a fórmula, a tabela de faixas e as limitações do índice.',
  },
  {
    path: '/calculadora-pollock-7-dobras',
    Component: CalculadoraPollock,
    title: 'Calculadora de Pollock 7 dobras | BodyGraph',
    description:
      'Calcule o percentual de gordura pelo protocolo de Jackson e Pollock de 7 dobras, com classificação por sexo e idade. Ferramenta gratuita para nutricionistas.',
  },
];

export function resolveRoute(pathname: string): RouteDef {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return routes.find((r) => r.path === clean) ?? routes[0];
}
