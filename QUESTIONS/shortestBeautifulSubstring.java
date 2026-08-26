var shortestBeautifulSubstring = function(s, k) {
    let ans = "";
    let ones = 0;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        if (s[r] === '1') {
            ones++;
        }

        // Contract the window from the left while it contains exactly k '1's
        while (ones === k) {
            const currentStr = s.slice(l, r + 1);

            // Update ans if currentStr is shorter, or if it's a tie but lexicographically smaller
            if (ans === "" || currentStr.length < ans.length) {
                ans = currentStr;
            } else if (currentStr.length === ans.length && currentStr < ans) {
                ans = currentStr;
            }

            if (s[l] === '1') {
                ones--;
            }
            l++;
        }
    }

    return ans;
};