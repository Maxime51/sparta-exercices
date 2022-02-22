interface Reader {
    question: (query: string, callback: (answer: string) => void) => void;
    close: () => void;
}
declare const createInterface: (options: {
    input: any;
    output: any;
}) => Reader;
export { createInterface };
