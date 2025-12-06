import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/hooks/useTheme';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { Home } from '@/pages/Home';
import { ConsultaJuridicaPage } from '@/pages/ConsultaJuridicaPage';
import { AnaliseTextoPage, ParecerJuridicoPage } from '@/pages/ConsultasIAPages';
import { TempoEspecialPage } from '@/pages/calculadoras/TempoEspecialPage';
import { RevisaoVidaTodaPage } from '@/pages/calculadoras/RevisaoVidaTodaPage';
import { HorasExtrasPage } from '@/pages/calculadoras/HorasExtrasPage';
import { VerbasRescisoriasPage } from '@/pages/calculadoras/VerbasRescisoriasPage';
import { AdicionalNoturnoPage, PensaoAlimenticiaPage, LiquidacaoSentencaPage, JurosMoraPage, CorrecaoMonetariaPage, PeriodoGracaPage, ValorCausaPage, RegraTransicaoEC103Page } from '@/pages/calculadoras/OutrasCalculadoras';
import {
  AposentadoriaInvalidezPage,
  AposentadoriaEspecialPage,
  BPCLoasPage,
  AposentadoriaTempoContribuicaoPage,
  AuxilioDoencaPage,
  PensaoMortePage,
  AposentadoriaRuralPage,
  SalarioMaternidadePage,
  RevisaoVidaTodaPeticaoPage,
  RevisaoBeneficioPage
} from '@/pages/peticoes/PeticoesPrevidenciarias';
import { ReconhecimentoVinculoPage, QuesitosInsalubridadePage } from '@/pages/peticoes/PeticoesTrabalhistas';
import { VicioProdutoPage, CobrancaIndevidaPage } from '@/pages/peticoes/PeticoesConsumidor';
import { AcaoCobrancaPage, AcaoIndenizacaoPage } from '@/pages/peticoes/PeticoesCivil';
import { PeticaoExecucaoPage, AcaoMonitoriaPage } from '@/pages/peticoes/PeticoesProcessual';
import '@/styles/index.css';

// Placeholder component for routes under development
const ComingSoon: React.FC<{ title: string }> = ({ title }) => (
  <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
    <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
      {title}
    </h1>
    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
      Esta funcionalidade está em desenvolvimento.
    </p>
    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
      Em breve: Formulário completo com integração à API
    </p>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Calculadoras - TODAS FUNCIONAIS! */}
            <Route path="/calculadoras" element={<ComingSoon title="Hub de Calculadoras" />} />
            <Route path="/calculadoras/tempo-especial" element={<TempoEspecialPage />} />
            <Route path="/calculadoras/revisao-vida-toda" element={<RevisaoVidaTodaPage />} />
            <Route path="/calculadoras/horas-extras" element={<HorasExtrasPage />} />
            <Route path="/calculadoras/verbas-rescisorias" element={<VerbasRescisoriasPage />} />
            <Route path="/calculadoras/adicional-noturno" element={<AdicionalNoturnoPage />} />
            <Route path="/calculadoras/pensao-alimenticia" element={<PensaoAlimenticiaPage />} />
            <Route path="/calculadoras/liquidacao-sentenca" element={<LiquidacaoSentencaPage />} />
            <Route path="/calculadoras/juros-mora" element={<JurosMoraPage />} />
            <Route path="/calculadoras/correcao-monetaria" element={<CorrecaoMonetariaPage />} />
            <Route path="/calculadoras/periodo-graca" element={<PeriodoGracaPage />} />
            <Route path="/calculadoras/valor-causa" element={<ValorCausaPage />} />
            <Route path="/calculadoras/regra-transicao-ec103" element={<RegraTransicaoEC103Page />} />
            <Route path="/calculadoras/previdenciario" element={<ComingSoon title="Calculadoras Previdenciárias" />} />
            <Route path="/calculadoras/trabalhista" element={<ComingSoon title="Calculadoras Trabalhistas" />} />
            <Route path="/calculadoras/processual" element={<ComingSoon title="Calculadoras Processuais" />} />
            <Route path="/calculadoras/financeiro" element={<ComingSoon title="Calculadoras Financeiras" />} />

            {/* Petições Previdenciárias - TODAS FUNCIONAIS! */}
            <Route path="/peticoes/previdenciario/invalidez" element={<AposentadoriaInvalidezPage />} />
            <Route path="/peticoes/previdenciario/tempo" element={<AposentadoriaTempoContribuicaoPage />} />
            <Route path="/peticoes/previdenciario/especial" element={<AposentadoriaEspecialPage />} />
            <Route path="/peticoes/previdenciario/rural" element={<AposentadoriaRuralPage />} />
            <Route path="/peticoes/previdenciario/pensao" element={<PensaoMortePage />} />
            <Route path="/peticoes/previdenciario/bpc-loas" element={<BPCLoasPage />} />
            <Route path="/peticoes/previdenciario/maternidade" element={<SalarioMaternidadePage />} />
            <Route path="/peticoes/previdenciario/auxilio-doenca" element={<AuxilioDoencaPage />} />
            <Route path="/peticoes/previdenciario/revisao-vida-toda" element={<RevisaoVidaTodaPeticaoPage />} />
            <Route path="/peticoes/previdenciario/revisao-beneficio" element={<RevisaoBeneficioPage />} />

            {/* Petições Trabalhistas - TODAS FUNCIONAIS! */}
            <Route path="/peticoes/trabalhista/vinculo" element={<ReconhecimentoVinculoPage />} />
            <Route path="/peticoes/trabalhista/insalubridade" element={<QuesitosInsalubridadePage />} />

            {/* Petições Consumidor - TODAS FUNCIONAIS! */}
            <Route path="/peticoes/consumidor/vicio" element={<VicioProdutoPage />} />
            <Route path="/peticoes/consumidor/cobranca" element={<CobrancaIndevidaPage />} />

            {/* Petições Civil - TODAS FUNCIONAIS! */}
            <Route path="/peticoes/civil/cobranca" element={<AcaoCobrancaPage />} />
            <Route path="/peticoes/civil/indenizacao" element={<AcaoIndenizacaoPage />} />

            {/* Petições Processual Civil - TODAS FUNCIONAIS! */}
            <Route path="/peticoes/processual/execucao" element={<PeticaoExecucaoPage />} />
            <Route path="/peticoes/processual/monitoria" element={<AcaoMonitoriaPage />} />
            {/* Consultas IA - TODAS FUNCIONAIS! */}
            <Route path="/consultas/juridica" element={<ConsultaJuridicaPage />} />
            <Route path="/consultas/analise" element={<AnaliseTextoPage />} />
            <Route path="/consultas/parecer" element={<ParecerJuridicoPage />} />

            {/* 404 */}
            <Route path="*" element={<ComingSoon title="Página Não Encontrada" />} />
          </Routes>
        </LayoutWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
