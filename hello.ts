function toUpper(value: string | undefined): string | undefined;
function toUpper(value: string): string ;
function toUpper(value: string | undefined): string | undefined {
    return value?.toString();
}

function getStringOrUndefined(): string | undefined {
    return undefined;
}

function getString(): string {
    return 'abc'
}

const x: string | undefined = toUpper(getStringOrUndefined())
const y: string = toUpper(getString());

console.log("### ", {x, y})
