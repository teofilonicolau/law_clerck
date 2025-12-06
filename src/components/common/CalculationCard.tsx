import React from 'react';
import './CalculationCard.css';

interface CalculationResult {
    [key: string]: any;
}

interface CalculationCardProps {
    title: string;
    result: CalculationResult;
    formatters?: {
        [key: string]: (value: any) => string;
    };
}

export const CalculationCard: React.FC<CalculationCardProps> = ({ title, result, formatters = {} }) => {
    const formatValue = (key: string, value: any): string => {
        if (formatters[key]) {
            return formatters[key](value);
        }

        if (typeof value === 'boolean') {
            return value ? '✅ Sim' : '❌ Não';
        }

        if (typeof value === 'number') {
            return value.toString();
        }

        if (typeof value === 'object' && value !== null) {
            return JSON.stringify(value, null, 2);
        }

        return String(value);
    };

    const renderRow = (key: string, value: any, level: number = 0): React.ReactNode => {
        const indent = level * 20;

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            return (
                <React.Fragment key={key}>
                    <div className="calc-row section-header" style={{ paddingLeft: `${indent}px` }}>
                        <strong>{key.replace(/_/g, ' ').toUpperCase()}</strong>
                    </div>
                    {Object.entries(value).map(([subKey, subValue]) => renderRow(subKey, subValue, level + 1))}
                </React.Fragment>
            );
        }

        return (
            <div key={key} className="calc-row" style={{ paddingLeft: `${indent}px` }}>
                <span className="calc-label">{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                <span className="calc-value">{formatValue(key, value)}</span>
            </div>
        );
    };

    return (
        <div className="calculation-card theme-card">
            <div className="calc-header">
                <h3>{title}</h3>
            </div>
            <div className="calc-body">
                {Object.entries(result).map(([key, value]) => renderRow(key, value))}
            </div>
        </div>
    );
};
