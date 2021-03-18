export default function (): Array<string> {
    return navigator.languages.map((l) => l.split('-')[0]);
}
