// X=1   /   X_n=0
let adjMatrix = [
    ["A_n", "B_n", "C", "D_n"],
    ["A", "B_n", "C_n", "D"],
    ["A", "B", "C_n", "D_n"],
    ["A_n", "B_n", "C", "D_n"]
]
let ranking = { "A": 0.25, "B": 0.25, "C": 0.25, "D": 0.25 }
let newRanking = []
let numberLinks = {}
let count = 0
let pr = 0


// calculate number links
function calculate_numberLinks() {
    adjMatrix.forEach((node, index) => {
        node.forEach(link => {
            link.length == 1 && count++
        })
        switch (index) {
            case 0:
                numberLinks.A = count
                break;
            case 1:
                numberLinks.B = count
                break;
            case 2:
                numberLinks.C = count
                break;
            case 3:
                numberLinks.D = count
                break;
            default:
                break;
        }
        count = 0
    })
}

// calculate page-rank
function calculate_pageRank() {
    adjMatrix.forEach(node => {
        node.forEach(link => {
            if (link.length == 1) {
                pr += ranking[link] / numberLinks[link]
            }
        })
        newRanking.push(pr)
        pr = 0
    })
}

// newRanking to ranking
function newRanking_To_MainRanking() {
    newRanking.forEach((rank, index) => {
        switch (index) {
            case 0:
                ranking.A = rank
                break;
            case 1:
                ranking.B = rank
                break;
            case 2:
                ranking.C = rank
                break;
            case 3:
                ranking.D = rank
                break;
            default:
                break;
        }
    })
    newRanking = []
}


calculate_numberLinks()
// The number of iterations of the loop
for (let i = 1; i < 150; i++) {
    calculate_pageRank()
    newRanking_To_MainRanking()
    console.log(`step${i}` , ranking);
}



