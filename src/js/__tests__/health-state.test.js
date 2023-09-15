import { healthState } from '../app'

test('should return `healthy` state', () => {
    const result = healthState({ name: 'Маг', health: 90 })
    expect(result).toBe('healthy')
})
 
test('should return `wounded` state', () => {
    const result = healthState({ name: 'Маг', health: 50 })
    expect(result).toBe('wounded')
})

test('should return `critical` state', () => {
    const result = healthState({ name: 'Маг', health: 10 })
    expect(result).toBe('critical')
})
