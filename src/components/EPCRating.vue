<script setup lang="ts">
import { computed } from 'vue'
import { calcuateVerticalPositionInSVG, colors, getRating, ratings } from '../util';

const props = defineProps<{ 
    currentScore: number, 
    potentialScore: number 
}>()

const currentRating = computed(() => getRating(props.currentScore)) as unknown as keyof typeof ratings
const potentialRating = computed(() => getRating(props.potentialScore)) as unknown as keyof typeof ratings

const yCurrentPos = computed(() => calcuateVerticalPositionInSVG(getRating(props.currentScore)))
const yPotentialPos = computed(() => calcuateVerticalPositionInSVG(getRating(props.potentialScore)))

</script>

<template>
    <svg  preserveAspectRatio="xMidYMid meet" width="100%" height="100%" viewBox="0 0 616 377" xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="svg-title svg-desc" role="img" class="epc-energy-rating-graph">
        <title id="svg-title">Energy efficiency chart</title>
        <desc id="svg-desc">This property's energy rating is {{ currentRating }} with a score of {{ currentScore }}. It has a potential energy rating of C
            with a score of {{ potentialScore }}. Properties get a rating from A to G and a score. Rating C is for a score of 69 to 80.
            The ratings and scores are as follows from best to worst. Rating A is for a score of 92 or more. Rating B is
            for a score of 81 to 91. Rating C is for a score of 69 to 80. Rating D is for a score of 55 to 68. Rating E
            is for a score of 39 to 54. Rating F is for a score of 21 to 38. Rating G is for a score of 1 to 20.</desc>

        <line x1="72" y1="0" x2="72" y2="376" style="stroke: #b1b4b6; stroke-width: 1;"></line>
        <line x1="410" y1="0" x2="410" y2="376" style="stroke: #b1b4b6; stroke-width: 1;"></line>
        <line x1="510" y1="0" x2="510" y2="376" style="stroke: #b1b4b6; stroke-width: 1;"></line>
        <line x1="0" y1="25" x2="615" y2="25" style="stroke: #b1b4b6; stroke-width: 1;"></line>
        <line x1="0" y1="0" x2="615" y2="0" style="stroke: #b1b4b6; stroke-width: 1;"></line>

        <line x1="0" y1="0" x2="615" y2="0" style="stroke: #b1b4b6; stroke-width: 1;"></line>
        <line x1="0" y1="0" x2="0" y2="376" style="stroke: #b1b4b6; stroke-width: 1;"></line>
        <line x1="615" y1="376" x2="615" y2="0" style="stroke: #b1b4b6; stroke-width: 1;"></line>
        <line x1="615" y1="376" x2="0" y2="376" style="stroke: #b1b4b6; stroke-width: 1;"></line>

        <rect width="78" height="50" x="72" y="25" :style="{fill: ratings['A'].bandColor}">
        </rect>
        <rect width="118" height="50" x="72" y="75" :style="{fill: ratings['B'].bandColor}">
        </rect>
        <rect width="158" height="50" x="72" y="125" :style="{fill: ratings['C'].bandColor}">
        </rect>
        <rect width="198" height="50" x="72" y="175" :style="{fill: ratings['D'].bandColor}">
        </rect>
        <rect width="238" height="50" x="72" y="225" :style="{fill: ratings['E'].bandColor}">
        </rect>
        <rect width="278" height="50" x="72" y="275" :style="{fill: ratings['F'].bandColor}">
        </rect>
        <rect width="318" height="50" x="72" y="325" :style="{fill: ratings['G'].bandColor}">
        </rect>

        <rect width="72" height="50" x="0" y="25" :style="{fill: ratings['A'].scoreColor}">
        </rect>
        <rect width="72" height="50" x="0" y="75" :style="{fill: ratings['B'].scoreColor}">
        </rect>
        <rect width="72" height="50" x="0" y="125" :style="{fill: ratings['C'].scoreColor}">
        </rect>
        <rect width="72" height="50" x="0" y="175" :style="{fill: ratings['D'].scoreColor}">
        </rect>
        <rect width="72" height="50" x="0" y="225" :style="{fill: ratings['E'].scoreColor}">
        </rect>
        <rect width="72" height="50" x="0" y="275" :style="{fill: ratings['F'].scoreColor}">
        </rect>
        <rect width="72" height="50" x="0" y="325" :style="{fill: ratings['G'].scoreColor}">
        </rect>

        <text role="presentation" aria-hidden="true" x="0" y="0" style="font-size: 40px; font-family: sans-serif; fill: #0b0c0c; font-weight: bold;">
            <tspan x="107" y="64">A</tspan>
            <tspan x="147" y="114">B</tspan>
            <tspan x="187" y="164">C</tspan>
            <tspan x="227" y="214">D</tspan>
            <tspan x="267" y="264">E</tspan>
            <tspan x="307" y="314">F</tspan>
            <tspan x="347" y="364">G</tspan>
        </text>

        <text role="presentation" aria-hidden="true" x="0" y="0" style="font-size: 20px; font-family: sans-serif; fill: #0b0c0c; line-height: 50px; margin-top: 100px; font-weight: bold;">
            <tspan x="8" y="55">92+</tspan>
            <tspan x="8" y="105">81-91</tspan>
            <tspan x="8" y="155">69-80</tspan>
            <tspan x="8" y="205">55-68</tspan>
            <tspan x="8" y="255">39-54</tspan>
            <tspan x="8" y="305">21-38</tspan>
            <tspan x="8" y="355">1-20</tspan>
        </text>

        <text role="presentation" aria-hidden="true" x="8" y="15" style="font-size: 20px; font-family: sans-serif; fill: #0b0c0c; line-height: 50px; margin-top: 100px; font-weight: bold;" dominant-baseline="middle">
            Score
        </text>

        <text role="presentation" aria-hidden="true" x="85" y="15" style="font-size: 20px; font-family: sans-serif; fill: #0b0c0c; line-height: 50px; margin-top: 100px; font-weight: bold;" dominant-baseline="middle">
            Energy rating
        </text>

        <text role="presentation" aria-hidden="true" x="460" y="15" style="font-size: 20px; font-family: sans-serif; fill: #0b0c0c; line-height: 50px; margin-top: 100px; font-weight: bold;" text-anchor="middle"
            dominant-baseline="middle">
            Current
        </text>

        <text role="presentation" aria-hidden="true" x="565" y="15" style="font-size: 20px; font-family: sans-serif; fill: #0b0c0c; line-height: 50px; margin-top: 100px; font-weight: bold;" text-anchor="middle"
            dominant-baseline="middle">
            Potential
        </text>

        <svg aria-hidden="true" x="415" :y="yCurrentPos" width="90" height="50" class="rating-current rating-label"  :style="{fill: ratings[currentRating].scoreColor}">
            <polygon points="0,25 25,50 100,50 100,0 25,0 0,25"></polygon>
            <text x="35" y="31" fill="black">{{ currentScore }} {{ currentRating }}</text>
        </svg>

        <svg aria-hidden="true" x="515" :y="yPotentialPos" width="90" height="50" class="rating-potential rating-label"   :style="{fill: ratings[potentialRating].scoreColor}">
            <polygon points="0,25 25,50 100,50 100,0 25,0 0,25"></polygon>
            <text x="35" y="31" fill="black">{{ potentialScore }} {{ potentialRating }}</text>
        </svg>
    </svg>
</template>