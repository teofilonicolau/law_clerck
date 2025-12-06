import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Gera PDF a partir de conteúdo HTML
 * @param content - Texto HTML ou ID do elemento
 * @param filename - Nome do arquivo PDF
 */
export const generatePDFFromHTML = async (content: string, filename: string = 'documento.pdf'): Promise<void> => {
    try {
        // Criar elemento temporário com o conteúdo
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        tempDiv.style.padding = '40px';
        tempDiv.style.backgroundColor = 'white';
        tempDiv.style.color = 'black';
        tempDiv.style.width = '800px';
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        document.body.appendChild(tempDiv);

        // Converter para canvas
        const canvas = await html2canvas(tempDiv, {
            scale: 2,
            useCORS: true,
            logging: false,
        });

        // Remover elemento temporário
        document.body.removeChild(tempDiv);

        // Criar PDF
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 10;

        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save(filename);
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        throw error;
    }
};

/**
 * Gera PDF simples a partir de texto
 * @param text - Texto a ser convertido em PDF
 * @param filename - Nome do arquivo PDF
 */
export const generatePDFFromText = (text: string, filename: string = 'documento.pdf'): void => {
    try {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 20;
        const maxLineWidth = pageWidth - 2 * margin;

        // Dividir texto em linhas
        const lines = pdf.splitTextToSize(text, maxLineWidth);

        let y = margin;
        const lineHeight = 7;

        lines.forEach((line: string, index: number) => {
            // Se a linha ultrapassar a página, adicionar nova página
            if (y + lineHeight > pageHeight - margin) {
                pdf.addPage();
                y = margin;
            }

            pdf.text(line, margin, y);
            y += lineHeight;
        });

        pdf.save(filename);
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        throw error;
    }
};

/**
 * Copia texto para a área de transferência
 * @param text - Texto a ser copiado
 */
export const copyToClipboard = async (text: string): Promise<void> => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        // Fallback para navegadores antigos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
};
