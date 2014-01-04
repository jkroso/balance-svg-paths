
/**
 * The comment above each is a rating from 1-10 of
 * how well the case is currently being handled
 */

module.exports = [
  { // 1 (need to redistribute the segments when adding new ones)
    title: 'straight lines with different segment counts',
    from: 'm 50 50 100 100 0 0 50 0',
    to: 'm 200 150 -100 -100 -50 0'
  },
  { // 3 (same problem as above)
    title: 'curve lines with different segment counts',
    from: 'm 200 100 a 100 100 0 0 1 100 100 a 100 100 0 0 1 -100 100',
    to: 'm 200 100 100 0 0 200 -100 0'
  },
  { // 1 (similar to above except not sure its fixable)
    title: 'square to triangle',
    from: 'm 100 100 100 0 0 100 -100 0 0 -100',
    to: 'm 100 100 50 50 -50 50 0 -100'
  },
  { // 9 (need to handle z commands better)
    title: 'circle to square',
    from: 'm200 150 a50 50 0 0 1 50 50 a50 50 0 0 1 -50 50 a50 50 0 0 1 -50 -50 a50 50 0 0 1 50 -50z',
    to: 'm150 150 l100 0 l0 100 l-100 0z'
  }
]
