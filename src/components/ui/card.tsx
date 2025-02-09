import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            {children}
        </div>
    );
};

export const CardHeader: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="card-header p-4 border-b">
            {children}
        </div>
    );
};

export const CardContent: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="card-content p-4">
            {children}
        </div>
    );
};

export const CardFooter: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="card-footer p-4 border-t">
            {children}
        </div>
    );
};

export const CardTitle: React.FC<CardProps> = ({ children }) => {
    return (
        <h3 className="card-title text-lg font-bold">
            {children}
        </h3>
    );
};

export const CardDescription: React.FC<CardProps> = ({ children }) => {
    return (
        <p className="card-description text-sm text-gray-600">
            {children}
        </p>
    );
};
