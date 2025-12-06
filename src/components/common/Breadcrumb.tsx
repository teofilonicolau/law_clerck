import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

export const Breadcrumb: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const breadcrumbNameMap: { [key: string]: string } = {
        'peticoes': 'Petições',
        'previdenciario': 'Previdenci\u00e1rio',
        'trabalhista': 'Trabalhista',
        'consumidor': 'Consumidor',
        'civil': 'Civil',
        'processual': 'Processual Civil',
        'calculadoras': 'Calculadoras',
        'consultas': 'Consultas',
        'juridica': 'Consulta Jur\u00eddica',
        'analise': 'Análise de Texto',
        'parecer': 'Parecer Jur\u00eddico',
        'invalidez': 'Aposentadoria por Invalidez',
        'tempo': 'Aposentadoria por Tempo',
        'especial': 'Aposentadoria Especial',
        'rural': 'Aposentadoria Rural',
        'pensao': 'Pensão por Morte',
        'bpc-loas': 'BPC/LOAS',
        'maternidade': 'Salário Maternidade',
        'auxilio-doenca': 'Auxílio Doença',
        'revisao-vida-toda': 'Revisão da Vida Toda',
        'revisao-beneficio': 'Revisão de Benefício',
        'vinculo': 'Vínculo Empregatício',
        'insalubridade': 'Quesitos de Insalubridade',
        'vicio': 'Vício do Produto',
        'cobranca': 'Cobrança',
        'indenizacao': 'Indenização',
        'execucao': 'Execução',
        'monitoria': 'Monitória',
        'tempo-especial': 'Tempo Especial',
        'horas-extras': 'Horas Extras',
    };

    if (pathnames.length === 0) {
        return null; // Não mostra breadcrumb na home
    }

    return (
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                    <Link to="/" className="breadcrumb-link">
                        <span className="breadcrumb-icon">🏠</span>
                        <span>Home</span>
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const breadcrumbName = breadcrumbNameMap[value] || value;

                    return (
                        <li key={to} className="breadcrumb-item">
                            <span className="breadcrumb-separator">›</span>
                            {last ? (
                                <span className="breadcrumb-current">{breadcrumbName}</span>
                            ) : (
                                <Link to={to} className="breadcrumb-link">
                                    {breadcrumbName}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
