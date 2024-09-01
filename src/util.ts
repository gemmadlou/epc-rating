const ratings = {
    A: 92,
    B: 81,
    C: 69,
    D: 55,
    E: 39,
    F: 21
}

export const getRating = (score: number) : string => {
    for (let key in ratings) {
        if (score >= ratings[key as keyof typeof ratings]) {
            return key
        }
    }

    return 'G'
}

const getRatingPositionIndex = (rating: string) : number => {
    let vals = Object.entries(ratings)
    for (let i : number = 0; i < vals.length; ++i) {
        if (vals[i][0] === rating) {
            return i
        }
    }
    return 6
}

export const calcuateVerticalPositionInSVG = (rating: string) : number => {
    const ratingPos = getRatingPositionIndex(rating);
    return (ratingPos * 50) + 25;
}