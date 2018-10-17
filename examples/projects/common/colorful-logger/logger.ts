export function colorfulLogger(data: string, color: string) {
    console.log(`%c ${data}`, `font-size: 20px; color: ${color}; background-color: #333;`);
}
