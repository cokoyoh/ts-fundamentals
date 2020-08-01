/// <reference path="person.ts" />

class Player implements Person {
    name: string;
    age: number;
    highScore: number;

    constructor(name: string, highScore: number) {
        this.name = name;
        this.highScore = highScore;
    }

    formatName() {
        return this.name.toLocaleUpperCase();
    }
}