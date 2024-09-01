const ratings = {
    A: 92,
    B: 81,
    C: 69,
    D: 55,
    E: 39,
    F: 21
}

export const colors = {
    band: {
        A: '#00C781',
        B: '#19b459',
        C: '#8dce46',
        D: '#ffd500',
        E: '#fcaa65',
        F: '#ef8023',
        G: '#e9153b'
    },
    score: {
        A: '#64C7A4',
        B: '#72CA8B',
        C: '#b4df86',
        D: '#ffe666',
        E: '#fdc79b',
        F: '#f4ac71',
        G: '#f2738a'
    }
}

export const getRating = (score: number): string => {
    for (let key in ratings) {
        if (score >= ratings[key as keyof typeof ratings]) {
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