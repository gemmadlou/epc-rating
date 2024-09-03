export const ratings = {
    A: {
        min: 92,
        bandColor: '#00C781',
        scoreColor: '#64C7A4'
    },
    B: {
        min: 81,
        bandColor: '#19b459',
        scoreColor: '#72CA8B'
    },
    C: {
        min: 69,
        bandColor: '#8dce46',
        scoreColor: '#b4df86'
    },
    D: {
        min: 55,
        bandColor: '#ffd500',
        scoreColor: '#ffe666'
    },
    E: {
        min: 39,
        bandColor: '#fcaa65',
        scoreColor: '#fdc79b'
    },
    F: {
        min: 21,
        bandColor: '#ef8023',
        scoreColor: '#f4ac71'
    },
    G: {
        min: 0,
        bandColor: '#e9153b',
        scoreColor: '#f2738a'
    }
}

export const getRating = (score: number): string => {
    for (let key in ratings) {
        if (score >= ratings[key as keyof typeof ratings].min) {
            return key
        }
    }

    return 'G'
}

const getRatingPositionIndex = (rating: string): number => {
    let vals = Object.entries(ratings)
    for (let i: number = 0; i < vals.length; ++i) {
        if (vals[i][0] === rating) {
            return i
        }
    }
    return 6
}

export const calcuateVerticalPositionInSVG = (rating: string): number => {
    const ratingPos = getRatingPositionIndex(rating);
    return (ratingPos * 50) + 25;
}