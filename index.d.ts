export as namespace jsuf;

export function formatDateBR(date: Date): string;

export function formatTextToFilter(text: string): string;

export function maskText(
    maskType: 'number' | 'cpf' | 'cnpj' | 'phone' | 'cep' | 'money',
    onChangeText: (text) => void
): (text: string) => void;

export function sortByKey(key: string): boolean;

export function sortAlphabeticallyByChild(key: string): boolean;

export function formatMoneyBR(value: number): string;

export function capitalize(text: string): string;

export function numberFromText(text: string): number;

export function fileNameFromPath(path: string): string;

export function extensionFromFileName(fileName: string);
    
