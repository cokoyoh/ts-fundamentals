function getInputValue(elementId: string): string {
    return (<HTMLInputElement>document.getElementById(elementId)).value;
}

function logger(message: string): void {
    console.log(message);
}

export { getInputValue as getValue, logger };

