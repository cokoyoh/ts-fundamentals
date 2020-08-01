class Utility {
    static getInputValue(elementId: string): string {
        return (<HTMLInputElement>document.getElementById(elementId)).value;
    }
}