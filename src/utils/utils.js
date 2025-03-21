export function trunc(num, count) {
    return Math.trunc(num * (10 ** count)) / (10 ** count);
}