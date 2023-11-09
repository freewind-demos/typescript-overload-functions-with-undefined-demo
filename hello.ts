function toUpper(value: undefined): undefined;
function toUpper(value: string): string ;
function toUpper(value: string | undefined): string | undefined {
    return value?.toString();
}

const x: string = toUpper('abc');
const y: undefined = toUpper(undefined);

console.log("### ", {x, y})
