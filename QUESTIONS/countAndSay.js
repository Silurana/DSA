var countAndSay = function(n) {
    if (n <= 0) return "";
    let result = "1";

    for (let i = 1; i < n; i++) {
        let nextSequence = [];
        let len = result.length;
        let j = 0;

        while (j < len) {
            let currentDigit = result[j];
            let count = 0;

            while (j < len && result[j] === currentDigit) {
                count++;
                j++;
            }

            nextSequence.push(count, currentDigit);
        }

        result = nextSequence.join("");
    }

    return result;
};

const n = 4;
console.log(`Result for n = ${n}:`, countAndSay(n));
