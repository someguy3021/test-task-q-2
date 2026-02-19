/**
 * Utility functions for sorting
 */

export function compareValues<T>(
    a: T,
    b: T,
    field: keyof T,
    direction: 'asc' | 'desc' = 'asc'
): number {
    const aValue = a[field];
    const bValue = b[field];

    if (aValue == null && bValue == null) return 0;
    if (aValue == null) return direction === 'asc' ? -1 : 1;
    if (bValue == null) return direction === 'asc' ? 1 : -1;

    if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return direction === 'asc' ? comparison : -comparison;
    }

    if (aValue < bValue) {
        return direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
        return direction === 'asc' ? 1 : -1;
    }
    return 0;
}