<script setup lang="ts">
import { ref } from 'vue'
import { calcuateVerticalPositionInSVG, getRating } from '../util';

const props = defineProps<{ 
    currentScore: number, 
    potentialScore: number 
}>()

const currentRating = getRating(props.currentScore)
const potentialRating = getRating(props.potentialScore)

const yCurrentPos = calcuateVerticalPositionInSVG(currentRating)
const yPotentialPos = calcuateVerticalPositionInSVG(potentialRating)

</script>

<template>
    <svg  preserveAspectRatio="xMidYMid meet" width="100%" height="100%" viewBox="0 0 615 377" xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="svg-title svg-desc" role="img" class="epc-energy-rating-graph">
        <title id="svg-title">Energy efficiency chart</title>
        <desc id="svg-desc">This property's energy rating is {{ currentRating }} with a score of {{ currentScore }}. It has a potential energy rating of C
            with a score of {{ potentialScore }}. Properties get a rating from A to G and a score. Rating C is for a score of 69 to 80.
            The ratings and scores are as follows from best to worst. Rating A is for a score of 92 or more. Rating B is
            for a score of 81 to 91. Rating C is for a score of 69 to 80. Rating D is for a score of 55 to 68. Rating E
            is for a score of 39 to 54. Rating F is for a score of 21 to 38. Rating G is for a score of 1 to 20.</desc>

        <line x1="72" y1="0" x2="72" y2="376" class="inner-border"></line>
        <line x1="410" y1="0" x2="410" y2="376" class="inner-border"></line>
        <line x1="510" y1="0" x2="510" y2="376" class="inner-border"></line>
        <line x1="0" y1="25" x2="615" y2="25" class="inner-border"></line>
        <line x1="0" y1="0" x2="615" y2="0" class="inner-border"></line>

        <line x1="0" y1="0" x2="615" y2="0" class="inner-border"></line>
        <line x1="0" y1="0" x2="0" y2="376" class="inner-border"></line>
        <line x1="615" y1="376" x2="615" y2="0" class="inner-border"></line>
        <line x1="615" y1="376" x2="0" y2="376" class="inner-border"></line>

        <rect width="78" height="50" x="72" y="25" class="band-a">
        </rect>
        <rect width="118" height="50" x="72" y="75" class="band-b">
        </rect>
        <rect width="158" height="50" x="72" y="125" class="band-c">
        </rect>
        <rect width="198" height="50" x="72" y="175" class="band-d">
        </rect>
        <rect width="238" height="50" x="72" y="225" class="band-e">
        </rect>
        <rect width="278" height="50" x="72" y="275" class="band-f">
        </rect>
        <rect width="318" height="50" x="72" y="325" class="band-g">
        </rect>

        <rect width="72" height="50" x="0" y="25" class="band-a-score">
        </rect>
        <rect width="72" height="50" x="0" y="75" class="band-b-score">
        </rect>
        <rect width="72" height="50" x="0" y="125" class="band-c-score">
        </rect>
        <rect width="72" height="50" x="0" y="175" class="band-d-score">
        </rect>
        <rect width="72" height="50" x="0" y="225" class="band-e-score">
        </rect>
        <rect width="72" height="50" x="0" y="275" class="band-f-score">
        </rect>
        <rect width="72" height="50" x="0" y="325" class="band-g-score">
        </rect>

        <text role="presentation" aria-hidden="true" x="0" y="0" class="letter">
            <tspan x="107" y="64">A</tspan>
            <tspan x="147" y="114">B</tspan>
            <tspan x="187" y="164">C</tspan>
            <tspan x="227" y="214">D</tspan>
            <tspan x="267" y="264">E</tspan>
            <tspan x="307" y="314">F</tspan>
            <tspan x="347" y="364">G</tspan>
        </text>

        <text role="presentation" aria-hidden="true" x="0" y="0" class="small">
            <tspan x="8" y="55">92+</tspan>
            <tspan x="8" y="105">81-91</tspan>
            <tspan x="8" y="155">69-80</tspan>
            <tspan x="8" y="205">55-68</tspan>
            <tspan x="8" y="255">39-54</tspan>
            <tspan x="8" y="305">21-38</tspan>
            <tspan x="8" y="355">1-20</tspan>
        </text>

        <text role="presentation" aria-hidden="true" x="8" y="15" class="small" dominant-baseline="middle">
            Score
        </text>

        <text role="presentation" aria-hidden="true" x="85" y="15" class="small" dominant-baseline="middle">
            Energy rating
        </text>

        <text role="presentation" aria-hidden="true" x="460" y="15" class="small" text-anchor="middle"
            dominant-baseline="middle">
            Current
        </text>

        <text role="presentation" aria-hidden="true" x="565" y="15" class="small" text-anchor="middle"
            dominant-baseline="middle">
            Potential
        </text>

        <svg aria-hidden="true" x="415" :y="yCurrentPos" width="90" height="50" class="rating-current rating-label">
            <polygon points="0,25 25,50 100,50 100,0 25,0 0,25" class="band-c"></polygon>
            <text x="35" y="31" class="govuk-!-font-weight-bold">{{ currentScore }} {{ currentRating }}</text>
        </svg>

        <svg aria-hidden="true" x="515" :y="yPotentialPos" width="90" height="50" class="rating-potential rating-label">
            <polygon points="0,25 25,50 100,50 100,0 25,0 0,25" class="band-c"></polygon>
            <text x="35" y="31" class="govuk-!-font-weight-bold">{{ potentialScore }} {{ potentialRating }}</text>
        </svg>
    </svg>
</template>

<style scoped>
.letter {
    font-size: 40px;
    font-family: sans-serif;
    fill: #0b0c0c;
    font-weight: bold;
}

.small {
    font-size: 20px;
    font-family: sans-serif;
    fill: #0b0c0c;
    line-height: 50px;
    margin-top: 100px;
    font-weight: bold;
}

.band-a {
    fill: #00C781
}

.band-b {
    fill: #19b459
}

.band-c {
    fill: #8dce46
}

.band-d {
    fill: #ffd500
}

.band-e {
    fill: #fcaa65
}

.band-f {
    fill: #ef8023
}

.band-g {
    fill: #e9153b
}

.band-a-score {
    fill: #64C7A4
}

.band-b-score {
    fill: #72CA8B
}

.band-c-score {
    fill: #b4df86
}

.band-d-score {
    fill: #ffe666
}

.band-e-score {
    fill: #fdc79b
}

.band-f-score {
    fill: #f4ac71
}

.band-g-score {
    fill: #f2738a
}

line.inner-border {
    stroke: #b1b4b6;
    stroke-width: 1;
}

line.score-threshold {
    stroke: #000;
    stroke-width: 2;
}
</style>