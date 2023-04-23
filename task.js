// Newspaper subscription details
const newspapers = [ 
    { name: "TOI", prices: [3, 3, 3, 3, 3, 5, 6] },
    { name: "Hindu", prices: [2.5, 2.5, 2.5, 2.5, 2.5, 4, 4] },
    { name: "ET", prices: [4, 4, 4, 4, 4, 4, 10] },
    { name: "BM", prices: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5] },
    { name: "HT", prices: [2, 2, 2, 2, 2, 4, 4] },
];

// User's weekly budget
const budget = 40;
// const budget = prompt('Please enter your budget');

// Function to get newspaper subscriptions
function getSubscriptions(budget) {
    let combinations = [];
    const newsPaperPriceSum = newspapers.map(item => item.prices.reduce((a, b) => a + b, 0));

    // Function to calculate all possible combinations
    function calculateCombinations(total, subscriptionList, startIndex) {
        if (total === budget) {
            combinations.push(subscriptionList);
        } else if (total < budget) {
            for (let i = startIndex; i < newspapers.length; i++) {
                const price = newsPaperPriceSum[i];
                if (total + price <= budget) {
                    calculateCombinations(total + price, [...subscriptionList, newspapers[i].name], i+1);
                }
            }
            if (total <= budget && subscriptionList.length > 1) {
                combinations.push(subscriptionList);
            }
        }
    }

    calculateCombinations(0, [], 0);
    return combinations;
}

// Get all subscriptions
getSubscriptions(budget);
console.log('getSubscriptions()', getSubscriptions(budget));
