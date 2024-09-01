export const getRating = (rating: number) : string => {
    if (rating >= 92) {
        return 'A';
    } else if (rating >= 81) {
        return 'B';
    } else if (rating >= 69) {
        return 'C';
    } else if (rating >= 55) {
        return 'D';
    } else if (rating >= 39) {
        return 'E';
    } else if (rating >= 21) {
        return 'F';
    }
    return 'G';
}