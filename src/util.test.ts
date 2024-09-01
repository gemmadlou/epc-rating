import { describe, expect, it } from "vitest";
import { getRating } from "./util";

describe('Utilities', () => {
    describe('getRating', () => {
        it('returns A for a score>= 92+', () => {
            expect(getRating(92)).toBe('A')
            expect(getRating(100)).toBe('A')
            expect(getRating(92.0)).toBe('A')
        })


        it('returns B for a score 81-91', () => {
            expect(getRating(81)).toBe('B')
            expect(getRating(91)).toBe('B')
        })

        it('returns C for a score 69-80', () => {
            expect(getRating(69)).toBe('C')
            expect(getRating(78)).toBe('C')
            expect(getRating(79)).toBe('C')
        })

        it('returns D for a score 55-68', () => {
            expect(getRating(55)).toBe('D')
            expect(getRating(68)).toBe('D')
        })

        it('returns E for a score 39-54', () => {
            expect(getRating(39)).toBe('E') 
            expect(getRating(54)).toBe('E') 
        })

        it('returns F for a score 21-38', () => {
            expect(getRating(21)).toBe('F')
            expect(getRating(38)).toBe('F')
        })

        it('returns G for a score 1-20', () => {
            expect(getRating(1)).toBe('G')
            expect(getRating(20)).toBe('G')
        })
        
    })
})