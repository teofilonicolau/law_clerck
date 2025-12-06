import React, { useState } from 'react';
import { generatePDFFromText, copyToClipboard } from '@/utils/pdfGenerator';
import './LLMResponseArea.css';

interface LLMResponseAreaProps {
    content: string;
    title?: string;
}

export const LLMResponseArea: React.FC<LLMResponseAreaProps> = ({ content, title = 'Resultado' }) => {
    const [copySuccess, setCopySuccess] = useState(false);
    const [pdfLoading, setPdfLoading] = useState(false);

    const handleCopy = async () => {
        try {
            await copyToClipboard(content);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (error) {
            console.error('Erro ao copiar:', error);
            alert('Erro ao copiar texto');
        }
    };

    const handleExportPDF = async () => {
        try {
            setPdfLoading(true);
            const filename = `${title.toLowerCase().replace(/\s+/g, '_')}_${new Date().getTime()}.pdf`;
            await generatePDFFromText(content, filename);
            setPdfLoading(false);
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            alert('Erro ao gerar PDF');
            setPdfLoading(false);
        }
    };

    return (
        <div className="llm-response-area">
            <div className="llm-response-header">
                <h3>{title}</h3>
                <div className="llm-response-actions">
                    <button
                        onClick={handleCopy}
                        className={`action-btn ${copySuccess ? 'success' : ''}`}
                        disabled={!content}
                    >
                        {copySuccess ? '✅ Copiado!' : '📋 Copiar'}
                    </button>
                    <button
                        onClick={handleExportPDF}
                        className="action-btn pdf-btn"
                        disabled={!content || pdfLoading}
                    >
                        {pdfLoading ? '⏳ Gerando...' : '📄 Exportar PDF'}
                    </button>
                </div>
            </div>

            <div className="llm-response-content">
                {content ? (
                    <pre className="response-text">{content}</pre>
                ) : (
                    <div className="response-placeholder">
                        <p>📝 Preencha o formulário e clique em "Gerar" para ver o resultado aqui</p>
                    </div>
                )}
            </div>

            {content && (
                <div className="llm-response-footer">
                    <div className="ethics-warning">
                        <strong>⚠️ AVISO IMPORTANTE - RESPONSABILIDADE PROFISSIONAL</strong>
                        <p>Esta petição foi gerada por Inteligência Artificial e constitui apenas um RASCUNHO ou MODELO.</p>
                        <p><strong>OBRIGATÓRIO:</strong> Revisão completa por advogado inscrito na OAB</p>
                    </div>
                </div>
            )}
        </div>
    );
};
